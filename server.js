// SDN WARAKAS 3 - Online shared PostgreSQL database + WebSocket sync
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Pool } = require('pg');
const WebSocket = require('ws');

const PORT = Number(process.env.PORT || 8080);
const SCHOOL = 'SDN-WARAKAS-3';
const ROOT = __dirname;
const LEGACY_FILE = path.join(ROOT, 'server-data.json');
const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) { console.error('DATABASE_URL belum diatur. Aplikasi tetap dijalankan agar Railway dapat melakukan healthcheck.'); }

const pool = DATABASE_URL ? new Pool({
  connectionString: DATABASE_URL,
  ssl: process.env.DATABASE_SSL === 'false' ? false : { rejectUnauthorized: false },
  max: Number(process.env.DB_POOL_MAX || 10),
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000
}) : null;

async function dbInit(){
  if(!pool) throw new Error('DATABASE_URL belum diatur');
  await pool.query(`CREATE TABLE IF NOT EXISTS school_state (
    school_code TEXT PRIMARY KEY,
    classes JSONB NOT NULL DEFAULT '{}'::jsonb,
    school_setting JSONB NOT NULL DEFAULT '{"nama":"SD NEGERI WARAKAS 3","tahun":"2026/2027"}'::jsonb,
    version BIGINT NOT NULL DEFAULT 0,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );`);
  await pool.query(`CREATE TABLE IF NOT EXISTS sync_log (
    id BIGSERIAL PRIMARY KEY,
    school_code TEXT NOT NULL,
    client_id TEXT,
    version BIGINT NOT NULL,
    changed_at BIGINT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  );`);
  await pool.query(`CREATE INDEX IF NOT EXISTS idx_sync_log_school ON sync_log(school_code, id DESC);`);
  await pool.query(`INSERT INTO school_state(school_code) VALUES($1) ON CONFLICT DO NOTHING`, [SCHOOL]);
  await migrateLegacy();
}

async function migrateLegacy(){
  if(!fs.existsSync(LEGACY_FILE)) return;
  const legacyMarker = path.join(ROOT, '.legacy-imported');
  if(fs.existsSync(legacyMarker)) return;
  try {
    const legacy = JSON.parse(fs.readFileSync(LEGACY_FILE,'utf8'));
    const old = legacy?.schools?.[SCHOOL];
    if(old && old.classes && Object.keys(old.classes).length){
      const r = await pool.query('SELECT classes, version FROM school_state WHERE school_code=$1',[SCHOOL]);
      const current = r.rows[0];
      if(!current || !current.classes || Object.keys(current.classes).length===0){
        const version = Math.max(Number(old.changedAt)||0, Date.now());
        await pool.query(`UPDATE school_state SET classes=$1::jsonb, school_setting=$2::jsonb, version=$3, updated_at=NOW() WHERE school_code=$4`, [JSON.stringify(old.classes), JSON.stringify(old.schoolSetting||{nama:'SD NEGERI WARAKAS 3',tahun:'2026/2027'}), version, SCHOOL]);
        console.log('Data lama berhasil diimpor ke PostgreSQL.');
      }
    }
  } catch(e){ console.error('Migrasi data lama gagal:', e.message); }
  try { fs.writeFileSync(legacyMarker, new Date().toISOString()); } catch(e){}
}

async function getState(){
  if(!pool) throw new Error('DATABASE_URL belum diatur');
  const r=await pool.query('SELECT classes, school_setting, version, updated_at FROM school_state WHERE school_code=$1',[SCHOOL]);
  if(!r.rows.length){ await pool.query('INSERT INTO school_state(school_code) VALUES($1) ON CONFLICT DO NOTHING',[SCHOOL]); return {classes:{},schoolSetting:{nama:'SD NEGERI WARAKAS 3',tahun:'2026/2027'},version:0}; }
  const x=r.rows[0]; return {classes:x.classes||{},schoolSetting:x.school_setting||{},version:Number(x.version)||0,updatedAt:x.updated_at};
}

async function saveState(classes, schoolSetting, incomingChangedAt, clientId){
  if(!pool) throw new Error('DATABASE_URL belum diatur');
  const client=await pool.connect();
  try{
    await client.query('BEGIN');
    const cur=await client.query('SELECT version FROM school_state WHERE school_code=$1 FOR UPDATE',[SCHOOL]);
    const current=Number(cur.rows[0]?.version)||0;
    const version=Math.max(Date.now(), Number(incomingChangedAt)||0, current+1);
    await client.query(`UPDATE school_state SET classes=$1::jsonb, school_setting=$2::jsonb, version=$3, updated_at=NOW() WHERE school_code=$4`, [JSON.stringify(classes||{}),JSON.stringify(schoolSetting||{}),version,SCHOOL]);
    await client.query(`INSERT INTO sync_log(school_code,client_id,version,changed_at) VALUES($1,$2,$3,$4)`,[SCHOOL,clientId||null,version,Number(incomingChangedAt)||version]);
    await client.query('COMMIT');
    return version;
  }catch(e){ await client.query('ROLLBACK'); throw e; } finally { client.release(); }
}

function send(ws,obj){ if(ws.readyState===WebSocket.OPEN) ws.send(JSON.stringify(obj)); }
function broadcast(obj, except){ wss.clients.forEach(c=>{ if(c.school===SCHOOL && c!==except) send(c,obj); }); }

const server=http.createServer(async (req,res)=>{
  try{
    const urlPath=req.url.split('?')[0];
    if(urlPath==='/health'){
      let dbStatus='not_configured', version=null;
      if(pool){
        try { const state=await getState(); dbStatus='connected'; version=state.version; }
        catch(e){ dbStatus='unavailable'; }
      }
      res.writeHead(200,{'Content-Type':'application/json'});
      return res.end(JSON.stringify({ok:true,school:SCHOOL,database:'postgresql',databaseStatus:dbStatus,version,time:new Date().toISOString()}));
    }
    if(urlPath==='/health/db'){
      if(!pool){ res.writeHead(503,{'Content-Type':'application/json'}); return res.end(JSON.stringify({ok:false,error:'DATABASE_URL belum diatur'})); }
      try { await pool.query('SELECT 1'); res.writeHead(200,{'Content-Type':'application/json'}); return res.end(JSON.stringify({ok:true,database:'postgresql'})); }
      catch(e){ res.writeHead(503,{'Content-Type':'application/json'}); return res.end(JSON.stringify({ok:false,database:'postgresql',error:e.message})); }
    }
    let p=urlPath; if(p==='/') p='/APLIKASI_ADMINISTRASI_GURU_SDN_WARAKAS_3.html';
    const file=path.normalize(path.join(ROOT,p));
    if(!file.startsWith(ROOT)){res.writeHead(403);return res.end('Forbidden');}
    fs.readFile(file,(err,buf)=>{if(err){res.writeHead(404);return res.end('Not found');} const ext=path.extname(file); const types={'.html':'text/html; charset=utf-8','.json':'application/json; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css'}; res.writeHead(200,{'Content-Type':types[ext]||'application/octet-stream','Cache-Control':'no-store'});res.end(buf);});
  }catch(e){res.writeHead(500);res.end('Server error');}
});

const wss=new WebSocket.Server({server});
wss.on('connection',(ws)=>{
  ws.school=null; ws.clientId=null;
  ws.on('message',async raw=>{
    try{
      const m=JSON.parse(raw.toString());
      if(m.school!==SCHOOL) return;
      ws.school=SCHOOL; ws.clientId=m.clientId||null;
      if(m.type==='join'){
        const db=await getState();
        const localChanged=Number(m.changedAt)||0;
        const dirty=!!m.dirty;
        // If this browser has unsynced local changes that are newer than the
        // server version, publish them first. Otherwise the server wins.
        if(dirty && m.classes && typeof m.classes==='object' && localChanged>db.version){
          const version=await saveState(m.classes,m.schoolSetting,localChanged,m.clientId);
          const fresh=await getState();
          send(ws,{type:'sync',classes:fresh.classes,schoolSetting:fresh.schoolSetting,accepted:true,changedAt:version});
        } else {
          send(ws,{type:'sync',classes:db.classes,schoolSetting:db.schoolSetting,accepted:true,changedAt:db.version,conflict:dirty && localChanged<db.version});
        }
        return;
      }
      if(m.type==='update' && m.classes && typeof m.classes==='object'){
        const db=await getState();
        const incoming=Number(m.changedAt)||0;
        // Prevent an older offline browser from overwriting newer server data.
        if(incoming && db.version && incoming < db.version && !m.force){
          send(ws,{type:'sync',classes:db.classes,schoolSetting:db.schoolSetting,accepted:true,changedAt:db.version,conflict:true});
          return;
        }
        const version=await saveState(m.classes,m.schoolSetting,incoming,m.clientId);
        const fresh=await getState();
        const payload={type:'sync',classes:fresh.classes,schoolSetting:fresh.schoolSetting,accepted:true,changedAt:version};
        broadcast(payload,ws); send(ws,payload);
      }
    }catch(e){ console.error('WS:',e.message); send(ws,{type:'error',message:'Sinkronisasi gagal: '+e.message}); }
  });
});

process.on('SIGTERM',async()=>{if(pool) await pool.end();process.exit(0);});
server.listen(PORT,()=>console.log(`SDN WARAKAS 3 online PostgreSQL: port ${PORT}`));

async function initWithRetry(){
  if(!pool) return;
  for(let attempt=1; attempt<=20; attempt++){
    try { await dbInit(); console.log('PostgreSQL siap.'); return; }
    catch(e){ console.error(`PostgreSQL belum siap (percobaan ${attempt}/20):`, e.message); await new Promise(r=>setTimeout(r,5000)); }
  }
  console.error('PostgreSQL belum berhasil terhubung setelah beberapa percobaan. Server tetap hidup; periksa DATABASE_URL.');
}
initWithRetry();
