/* LENTERA HATI - REPAIR BUKU FULL
   Hanya memperbaiki logika fitur Buku. Menu utama aplikasi tidak disentuh.
*/
(function(){
  'use strict';

  const $ = id => document.getElementById(id);
  const norm = v => String(v ?? '').trim().toLowerCase().replace(/\s+/g,' ');
  const esc2 = v => typeof esc === 'function' ? esc(v) : String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const yearNow = () => String(new Date().getFullYear());
  const validYear = v => { const n=parseInt(String(v??'').trim(),10); return Number.isFinite(n)&&n>=1900&&n<=2100?String(n):''; };

  const DDC_RULES = [
    ['499.221','Bahasa Indonesia',['bahasa indonesia']],
    ['420','Bahasa Inggris',['bahasa inggris','english']],
    ['297','Agama Islam',['pendidikan agama islam','agama islam','alquran','al quran','hadis','hadits','fikih','fiqih','akidah','akhlak']],
    ['200','Agama',['pendidikan agama','agama kristen','agama katolik','agama hindu','agama buddha','agama budha']],
    ['320','Pancasila/Kewarganegaraan',['pendidikan pancasila','pancasila','pendidikan kewarganegaraan','ppkn','pkn','kewarganegaraan']],
    ['372.7','Matematika Pendidikan Dasar',['matematika','bilangan','pecahan','geometri','pengukuran']],
    ['796','PJOK/Olahraga',['pjok','pendidikan jasmani','olahraga','sepak bola','bola basket','bola voli','atletik','senam']],
    ['398.2','Dongeng/Cerita Rakyat',['cerita rakyat','dongeng','fabel','legenda','mitos']],
    ['900','Sejarah',['sejarah','sejarah indonesia','sejarah nasional']],
    ['910','Geografi',['geografi','peta','atlas','bumi','lingkungan hidup']],
    ['700','Seni',['seni budaya','seni rupa','seni musik','seni tari','menggambar','musik','tari']],
    ['800','Sastra',['sastra','puisi','pantun','novel','cerpen','kumpulan cerita']],
    ['635','Hortikultura/Berkebun',['berkebun','hortikultura','cabai','cabe','tomat','sayuran','tanaman sayur']],
    ['636','Peternakan',['peternakan','ternak','sapi','kambing','domba','ayam']],
    ['639','Perikanan',['perikanan','ikan','budidaya ikan']],
    ['634','Kehutanan',['kehutanan','hutan']],
    ['630','Pertanian',['pertanian','perkebunan','tanaman pangan']],
    ['590','Hewan/Zoologi',['hewan','binatang','satwa','mamalia','serangga','zoologi']],
    ['580','Tumbuhan/Botani',['tumbuhan','tanaman','botani','flora','fotosintesis']],
    ['500','IPA/IPAS/Sains',['ipas','ipa','ilmu pengetahuan alam','sains','science','energi','gaya','bunyi','cahaya','ekosistem','fisika','kimia','biologi']],
    ['600','Teknologi/Keterampilan',['teknologi','keterampilan','prakarya','komputer','pemrograman','memasak']],
    ['030','Ensiklopedia/Pengetahuan Umum',['ensiklopedia','ensiklopedi','pengetahuan umum','kamus umum']],
    ['300','Ilmu Sosial',['ips','ilmu pengetahuan sosial','ilmu sosial','masyarakat','ekonomi dasar']],
    ['000','Karya Umum',[]]
  ];

  function inferDDC(judul, penulis){
    const t=norm(String(judul||'')+' '+String(penulis||''));
    for(const [ddc,name,keys] of DDC_RULES) if(keys.some(k=>t.includes(k))) return {ddc,name};
    return {ddc:'000',name:'Karya Umum'};
  }

  function tokenFromAuthor(judul, penulis){
    const source=String(penulis||'').trim() || String(judul||'').trim();
    const words=source.toUpperCase().replace(/[^A-Z0-9À-ÿ\s]/g,' ').split(/\s+/).filter(Boolean);
    const skip=new Set(['DAN','DI','KE','DARI','UNTUK','YANG','THE','OF','A','AN','TIM','PENULIS','TEAM']);
    const useful=words.filter(w=>!skip.has(w));
    const w=useful[0] || 'BUK';
    return w.slice(0,3).padEnd(3,'X');
  }

  function initialsFromTitle(judul){
    const words=String(judul||'').toUpperCase().replace(/[^A-Z0-9À-ÿ\s]/g,' ').split(/\s+/).filter(Boolean);
    const skip=new Set(['DAN','DI','KE','DARI','UNTUK','YANG','THE','OF','A','AN','KELAS','SD','MI']);
    const u=words.filter(w=>!skip.has(w));
    return (u.slice(0,3).map(w=>w[0]).join('')||'BUK').padEnd(3,'X').slice(0,3);
  }

  function rakForDDC(ddc){
    const n=parseInt(String(ddc||'000').split('.')[0],10);
    if(!Number.isFinite(n)||n<100) return 'RAK-01';
    return 'RAK-'+String(Math.min(10,Math.floor(n/100)+1)).padStart(2,'0');
  }

  function persistBooks(){
    try{ if(typeof save==='function'){ save(); return true; } }catch(e){ console.warn('save() utama gagal, gunakan penyimpanan buku cadangan',e); }
    try{
      localStorage.setItem('perpus_lentera_hati_waraks3_v54_fresh',JSON.stringify(db));
      localStorage.setItem('perpus_local_backup',JSON.stringify({savedAt:Date.now(),db:db,settings:typeof settings!=='undefined'?settings:{}}));
    }catch(e){ console.warn('Penyimpanan buku cadangan gagal',e); }
    try{ if(typeof render==='function') render(); }catch(e){}
    return true;
  }

  function books(){ if(!Array.isArray(db.buku)) db.buku=[]; return db.buku; }
  function activeBooks(){ return books().filter(b=>!b.deleted); }
  function sameIdentity(b,judul,penulis,tahun){
    return norm(b?.judul)===norm(judul) && norm(b?.penulis)===norm(penulis) && validYear(b?.tahunCetak)===validYear(tahun);
  }

  function nextCode(ddc,judul,penulis,excludeId){
    const token=tokenFromAuthor(judul,penulis);
    const re=new RegExp('^'+String(ddc).replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'-'+token+'-(\\d+)$','i');
    let max=0;
    activeBooks().forEach(b=>{
      if(excludeId && String(b.id)===String(excludeId)) return;
      const m=String(b.kode||'').match(re); if(m) max=Math.max(max,parseInt(m[1],10)||0);
    });
    return String(ddc)+'-'+token+'-'+String(max+1).padStart(3,'0');
  }

  function classifyBook(b, forceCode){
    const r=inferDDC(b.judul,b.penulis);
    b.ddc=r.ddc; b.ddcNama=r.name;
    b.nomorKlasifikasi=r.ddc+' '+initialsFromTitle(b.judul);
    b.rak=rakForDDC(r.ddc);
    if(forceCode || !b.kode || /^BUKU-\d+$/i.test(b.kode)) b.kode=nextCode(r.ddc,b.judul,b.penulis,b.id);
    if(!validYear(b.tahunCetak)) b.tahunCetak=yearNow();
    return b;
  }

  function refreshBookAutoFields(){
    const j=$('bJudul'),p=$('bPenulis'),y=$('bTahunCetak'); if(!j) return;
    const judul=j.value.trim(), penulis=p?.value.trim()||'', tahun=validYear(y?.value||'');
    const r=inferDDC(judul,penulis);
    const d=$('bDdc'),k=$('bKlasifikasi'),rak=$('bRak'),code=$('bKode');
    if(d) d.value=r.ddc;
    if(k) k.value=r.ddc+' '+initialsFromTitle(judul);
    if(rak) rak.value=rakForDDC(r.ddc);
    if(code){
      const existing=activeBooks().find(b=>sameIdentity(b,judul,penulis,tahun));
      code.value=existing?.kode || nextCode(r.ddc,judul,penulis);
    }
  }
  window.inferBookDDC=inferDDC;
  window.rakForDDC=rakForDDC;
  window.refreshBookAutoFields=refreshBookAutoFields;
  window.updateBukuCodeHint=refreshBookAutoFields;

  function ensureBookFields(){
    const form=$('bJudul')?.parentElement; if(!form) return;
    const p=$('bPenulis'), pub=$('bPenerbit'), y=$('bTahunCetak');
    if(!$('bDdc')){ const d=document.createElement('input'); d.id='bDdc'; d.placeholder='DDC (otomatis)'; d.readOnly=true; p?.insertAdjacentElement('afterend',d); }
    if(!$('bKlasifikasi')){ const k=document.createElement('input'); k.id='bKlasifikasi'; k.placeholder='Nomor klasifikasi (otomatis)'; k.readOnly=true; ($('bDdc')||p)?.insertAdjacentElement('afterend',k); }
    const rak=$('bRak'); if(rak){rak.readOnly=true;rak.title='Rak otomatis mengikuti DDC';}
    if(y&&!validYear(y.value)) y.value=yearNow();
    ['bJudul','bPenulis','bPenerbit','bTahunCetak'].forEach(id=>{const el=$(id);if(el&&!el.dataset.bookRepairBound){el.addEventListener('input',refreshBookAutoFields);el.addEventListener('change',refreshBookAutoFields);el.dataset.bookRepairBound='1';}});
    refreshBookAutoFields();
  }

  function resetBookForm(){
    ['bJudul','bPenulis','bPenerbit'].forEach(id=>{if($(id))$(id).value=''});
    if($('bTahunCetak'))$('bTahunCetak').value=yearNow();
    if($('bJumlah'))$('bJumlah').value=1;
    if($('bFotoFile'))$('bFotoFile').value='';
    document.querySelectorAll('.camera-inline-preview').forEach(x=>x.remove());
    const btn=document.querySelector('#buku button[data-book-edit]');
    if(btn){btn.textContent='➕ Tambah Buku';btn.removeAttribute('data-book-edit');btn.onclick=window.addBuku;}
    refreshBookAutoFields();
  }

  async function prepareBookPhoto(file){
    if(!file || !file.type || !file.type.startsWith('image/')) throw new Error('Foto buku harus berupa gambar.');
    try{
      const bmp=await createImageBitmap(file);
      const MAX=2200, TARGET=1800000;
      let w=bmp.width,h=bmp.height,scale=Math.min(1,MAX/Math.max(w,h));
      w=Math.max(1,Math.round(w*scale)); h=Math.max(1,Math.round(h*scale));
      const c=document.createElement('canvas'); c.width=w;c.height=h; const ctx=c.getContext('2d');
      ctx.drawImage(bmp,0,0,w,h); bmp.close?.();
      let q=.88, blob=await new Promise(r=>c.toBlob(r,'image/jpeg',q));
      while(blob && blob.size>TARGET && q>.58){q-=.08; blob=await new Promise(r=>c.toBlob(r,'image/jpeg',q));}
      return blob||file;
    }catch(e){ return file; }
  }
  window.addBuku=async function(){
    try{
      const judul=$('bJudul')?.value.trim()||'';
      const penulis=$('bPenulis')?.value.trim()||'';
      const penerbit=$('bPenerbit')?.value.trim()||'';
      const tahun=validYear($('bTahunCetak')?.value||'');
      const jumlah=Math.max(1,parseInt($('bJumlah')?.value||'1',10)||1);
      if(!judul){alert('Judul wajib diisi.');$('bJudul')?.focus();return false;}
      if(!tahun){alert('Tahun cetak buku wajib diisi (1900–2100).');$('bTahunCetak')?.focus();return false;}
      const r=inferDDC(judul,penulis);
      let target=activeBooks().find(b=>sameIdentity(b,judul,penulis,tahun));
      const merged=!!target;
      if(target){
        target.jumlah=Math.max(0,Number(target.jumlah)||0)+jumlah;
        target.tersedia=Math.max(0,Number(target.tersedia)||0)+jumlah;
        target.tahunCetak=tahun; target.penulis=penulis||target.penulis; target.penerbit=penerbit||target.penerbit||'';
        target.ddc=r.ddc; target.ddcNama=r.name; target.nomorKlasifikasi=r.ddc+' '+initialsFromTitle(judul); target.rak=rakForDDC(r.ddc);
        if(!target.kode || /^BUKU-\d+$/i.test(target.kode)) target.kode=nextCode(r.ddc,judul,penulis,target.id);
        touch(target);
      }else{
        target=touch({id:uid(),kode:nextCode(r.ddc,judul,penulis),judul,penulis,penerbit,tahunCetak:tahun,ddc:r.ddc,ddcNama:r.name,nomorKlasifikasi:r.ddc+' '+initialsFromTitle(judul),rak:rakForDDC(r.ddc),jumlah,tersedia:jumlah,createdAt:Date.now()});
        books().push(target);
      }
      persistBooks();
      const f0=$('bFotoFile')?.files?.[0];
      if(f0&&typeof v31UploadBookPhoto==='function'){try{const f=await prepareBookPhoto(f0);await v31UploadBookPhoto(f,target.id,merged)}catch(e){console.warn('Foto buku gagal disimpan',e);alert('Data buku tersimpan, tetapi foto gagal disimpan: '+(e?.message||e))}}
      resetBookForm(); renderBuku();
      alert(merged ? 'Buku sudah ada. Jumlah buku berhasil ditambahkan ke data yang sama.' : 'Buku berhasil ditambahkan. Kode, DDC, klasifikasi, dan rak dibuat otomatis.');
      return true;
    }catch(e){ console.error('REPAIR addBuku:',e); alert('Buku tidak dapat ditambahkan.\n'+(e?.message||e)); return false; }
  };

  window.editBuku=function(id){
    const b=books().find(x=>String(x.id)===String(id)); if(!b)return;
    $('bJudul').value=b.judul||''; $('bPenulis').value=b.penulis||''; if($('bPenerbit'))$('bPenerbit').value=b.penerbit||''; $('bTahunCetak').value=validYear(b.tahunCetak)||yearNow();
    classifyBook(b,false); $('bRak').value=b.rak; $('bJumlah').value=Math.max(1,Number(b.jumlah)||1); $('bKode').value=b.kode||'';
    if($('bDdc'))$('bDdc').value=b.ddc||''; if($('bKlasifikasi'))$('bKlasifikasi').value=b.nomorKlasifikasi||'';
    const btn=document.querySelector('#buku button[onclick="addBuku()"]');
    if(btn){btn.textContent='💾 Simpan Perubahan';btn.dataset.bookEdit=String(id);btn.onclick=()=>window.v31UpdateBuku(id);}
    refreshBookAutoFields();
  };

  window.v31UpdateBuku=async function(id){
    try{
      const b=books().find(x=>String(x.id)===String(id)); if(!b)return false;
      const judul=$('bJudul').value.trim(),penulis=$('bPenulis').value.trim(),penerbit=$('bPenerbit')?.value.trim()||'',tahun=validYear($('bTahunCetak').value||'');
      const jumlah=Math.max(1,parseInt($('bJumlah').value||'1',10)||1);
      if(!judul)return alert('Judul wajib diisi.'),false;
      if(!tahun)return alert('Tahun cetak wajib diisi (1900–2100).'),false;
      const duplicate=activeBooks().find(x=>String(x.id)!==String(id)&&sameIdentity(x,judul,penulis,tahun));
      if(duplicate)return alert('Data dengan judul, penulis, dan tahun cetak yang sama sudah ada. Gunakan data tersebut agar jumlah tidak menjadi ganda.'),false;
      const dipinjam=Math.max(0,(Number(b.jumlah)||0)-(Number(b.tersedia)||0));
      if(jumlah<dipinjam)return alert('Jumlah tidak boleh lebih kecil dari buku yang sedang dipinjam.'),false;
      const r=inferDDC(judul,penulis); Object.assign(b,{judul,penulis,penerbit,tahunCetak:tahun,ddc:r.ddc,ddcNama:r.name,nomorKlasifikasi:r.ddc+' '+initialsFromTitle(judul),rak:rakForDDC(r.ddc),jumlah,tersedia:jumlah-dipinjam});
      if(!b.kode||/^BUKU-\d+$/i.test(b.kode))b.kode=nextCode(r.ddc,judul,penulis,b.id); touch(b); persistBooks();
      const f0=$('bFotoFile')?.files?.[0]; if(f0&&typeof v31UploadBookPhoto==='function'){try{const f=await prepareBookPhoto(f0);await v31UploadBookPhoto(f,b.id,true)}catch(e){console.warn(e);alert('Perubahan buku tersimpan, tetapi foto gagal disimpan: '+(e?.message||e))}}
      resetBookForm();renderBuku();alert('Perubahan buku berhasil disimpan.');return true;
    }catch(e){console.error('REPAIR editBuku:',e);alert('Perubahan buku gagal.\n'+(e?.message||e));return false;}
  };

  function migrateBooks(){
    let changed=false, used=new Set();
    activeBooks().forEach(b=>{
      const before=JSON.stringify([b.kode,b.tahunCetak,b.ddc,b.nomorKlasifikasi,b.rak]);
      if(!validYear(b.tahunCetak)) b.tahunCetak=b.createdAt?String(new Date(b.createdAt).getFullYear()):yearNow();
      const r=inferDDC(b.judul,b.penulis); b.ddc=r.ddc;b.ddcNama=r.name;b.nomorKlasifikasi=r.ddc+' '+initialsFromTitle(b.judul);b.rak=rakForDDC(r.ddc);
      const old=b.kode; if(!b.kode||/^BUKU-\d+$/i.test(b.kode)||used.has(String(b.kode).toUpperCase())) b.kode=nextCode(r.ddc,b.judul,b.penulis,b.id);
      used.add(String(b.kode||'').toUpperCase());
      if(before!==JSON.stringify([b.kode,b.tahunCetak,b.ddc,b.nomorKlasifikasi,b.rak])){touch(b);changed=true;}
    });
    if(changed)persistBooks();
  }

  window.renderBuku=function(){
    const body=$('tb'); if(!body)return;
    const q=norm($('bCari')?.value||'');
    const arr=activeBooks().filter(b=>!q||[b.kode,b.judul,b.penulis,b.penerbit,b.rak,b.ddc,b.nomorKlasifikasi,b.tahunCetak].some(v=>norm(v).includes(q)));
    body.innerHTML=arr.map((b,i)=>`<tr><td>${i+1}</td><td>${photoThumb('buku',b.id,b.judul)}<b>${esc2(b.kode||'')}</b></td><td><b>${esc2(b.judul||'')}</b></td><td>${esc2(b.penulis||'')}</td><td>${esc2(b.penerbit||'')}</td><td>${esc2(b.ddc||'')}</td><td>${esc2(b.nomorKlasifikasi||'')}</td><td>${esc2(b.rak||'')}</td><td>${Number(b.jumlah)||0}</td><td>${Number(b.tersedia)||0}</td><td>${esc2(validYear(b.tahunCetak)||'')}</td><td>${esc2(b.createdAt?formatPrintDate(new Date(b.createdAt).toISOString().slice(0,10)):'')}</td><td><button onclick="v31ViewPhoto('buku','${esc2(b.id)}','${esc2(b.judul||'Foto buku')}')">🖼️ Lihat Foto</button> <button onclick="editBuku('${esc2(b.id)}')">✏️ Edit</button> <button class="danger" onclick="del('buku','${esc2(b.id)}')">Hapus</button></td></tr>`).join('') || '<tr><td colspan="13" style="text-align:center;padding:18px">Belum ada data buku.</td></tr>';
    try{hydratePhotos(body)}catch(e){}
  };

  function uploadRows(rows){
    let added=0,merged=0;
    for(const row of rows){
      const judul=String(row.judul??row.title??row.namabuku??'').trim(); if(!judul)continue;
      const penulis=String(row.penulis??row.author??row.pengarang??'').trim();
      const penerbit=String(row.penerbit??row.publisher??'').trim();
      const tahun=validYear(row.tahuncetak??row.tahunCetak??row.tahunterbit??row.tahun??''); if(!tahun)throw new Error('Tahun cetak tidak valid untuk: '+judul);
      const jumlah=Math.max(1,parseInt(row.jumlah??row.qty??row.quantity??1,10)||1);
      const r=inferDDC(judul,penulis); const ex=activeBooks().find(b=>sameIdentity(b,judul,penulis,tahun));
      if(ex){ex.jumlah=(Number(ex.jumlah)||0)+jumlah;ex.tersedia=(Number(ex.tersedia)||0)+jumlah;ex.ddc=r.ddc;ex.ddcNama=r.name;ex.nomorKlasifikasi=r.ddc+' '+initialsFromTitle(judul);ex.rak=rakForDDC(r.ddc);touch(ex);merged++;}
      else{books().push(touch({id:uid(),kode:nextCode(r.ddc,judul,penulis),judul,penulis,penerbit,tahunCetak:tahun,ddc:r.ddc,ddcNama:r.name,nomorKlasifikasi:r.ddc+' '+initialsFromTitle(judul),rak:rakForDDC(r.ddc),jumlah,tersedia:jumlah,createdAt:Date.now()}));added++;}
    }
    persistBooks();renderBuku();return {added,merged};
  }
  window.uploadBukuData=function(event){
    const file=event?.target?.files?.[0];if(!file)return;
    const reader=new FileReader();reader.onload=()=>{try{
      const text=String(reader.result||'').replace(/^\uFEFF/,'');let rows=[];
      if(/\.json$/i.test(file.name)){const data=JSON.parse(text);rows=Array.isArray(data)?data:(Array.isArray(data.buku)?data.buku:[]);}
      else{const lines=text.split(/\r?\n/).filter(x=>x.trim());if(!lines.length)throw new Error('CSV kosong');const parse=line=>{const o=[];let c='',q=false;for(let i=0;i<line.length;i++){const ch=line[i];if(ch==='"'){if(q&&line[i+1]==='"'){c+='"';i++;}else q=!q;}else if(ch===','&&!q){o.push(c.trim());c='';}else c+=ch;}o.push(c.trim());return o;};const h=parse(lines[0]).map(x=>x.toLowerCase().replace(/[^a-z0-9]/g,''));rows=lines.slice(1).map(line=>{const v=parse(line),o={};h.forEach((k,i)=>o[k]=v[i]||'');return o;});}
      const r=uploadRows(rows);alert('Upload buku selesai.\nBuku baru: '+r.added+'\nDigabung: '+r.merged);
    }catch(e){console.error(e);alert('Upload buku gagal. Pastikan kolom judul, penulis, tahunCetak, jumlah benar.\n'+(e?.message||e));}finally{event.target.value='';}};reader.readAsText(file);
  };

  function labelHtml(b){return `<div class="book-card-print"><img class="bc-qr" src="${bookQrUrl(b,320)}"><div class="bc-info"><div class="bc-code">${esc2(b.kode||'-')}</div><div class="bc-title">${esc2(b.judul||'-')}</div><div class="bc-author">Penulis: ${esc2(b.penulis||'-')}</div><div class="bc-ddc">DDC: ${esc2(b.ddc||'-')}</div><div class="bc-class">No. Klasifikasi: ${esc2(b.nomorKlasifikasi||'-')}</div><div class="bc-rak">Rak: ${esc2(b.rak||'-')}</div></div></div>`;}
  function openPrint(arr){arr=(arr||[]).filter(Boolean);if(!arr.length)return alert('Belum ada buku yang dapat dicetak.');const pages=[];for(let i=0;i<arr.length;i+=10)pages.push('<div class="book-card-print-page">'+arr.slice(i,i+10).map(labelHtml).join('')+'</div>');const w=window.open('about:blank','_blank');if(!w)return alert('Popup diblokir. Izinkan pop-up untuk mencetak label buku.');w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Label Buku</title><style>@page{size:F4 portrait;margin:8mm}body{margin:0;font-family:Arial,sans-serif}.book-card-print-page{width:194mm;margin:0 auto;display:grid;grid-template-columns:85.6mm 85.6mm;gap:3mm 8mm;break-after:page}.book-card-print{width:85.6mm;height:40mm;box-sizing:border-box;border:1px solid #222;border-radius:2mm;padding:2.5mm;display:flex;gap:3mm;align-items:center;break-inside:avoid}.bc-qr{width:27mm;height:27mm;object-fit:contain}.bc-info{min-width:0;font-size:2.35mm;line-height:1.25}.bc-code{font-size:3.2mm;font-weight:800}.bc-title{font-size:2.8mm;font-weight:800;max-height:7mm;overflow:hidden}.bc-author,.bc-ddc,.bc-class,.bc-rak{margin-top:.6mm;max-height:5mm;overflow:hidden}</style></head><body>'+pages.join('')+'<scr'+'ipt>window.addEventListener("load",()=>setTimeout(()=>window.print(),700));</scr'+'ipt></body></html>');w.document.close();}
  window.openBookPrintNew=openPrint;
  window.printAllBookCards=()=>openPrint(activeBooks());
  window.printFilteredBookCards=()=>{const q=norm($('bCari')?.value||'');openPrint(activeBooks().filter(b=>!q||[b.kode,b.judul,b.penulis,b.penerbit,b.rak,b.ddc,b.nomorKlasifikasi,b.tahunCetak].some(v=>norm(v).includes(q))))};
  window.printBookLabels=n=>{const arr=activeBooks();if(n==='all')return openPrint(arr);openPrint(arr.slice(0,Math.max(0,parseInt(n,10)||0)));};

  window.openBookCardMenu=function(){
    $('bookCardMenuOverlay')?.remove();
    const box=document.createElement('div');box.id='bookCardMenuOverlay';box.className='book-card-scan-overlay';
    box.innerHTML='<div class="book-card-scan-box"><button class="danger" style="float:right" onclick="this.closest(\'.book-card-scan-overlay\').remove()">✕</button><h3>🪪 Menu Kartu Buku</h3><p>1 judul + penulis + tahun cetak = 1 record dan 1 QR.</p><div class="book-card-menu"><button onclick="printBookLabels(10);this.closest(\'.book-card-scan-overlay\').remove()">🖨️ Cetak 10 Label</button><button onclick="printBookLabels(20);this.closest(\'.book-card-scan-overlay\').remove()">🖨️ Cetak 20 Label</button><button onclick="printBookLabels(30);this.closest(\'.book-card-scan-overlay\').remove()">🖨️ Cetak 30 Label</button><button onclick="printBookLabels(50);this.closest(\'.book-card-scan-overlay\').remove()">🖨️ Cetak 50 Label</button><button onclick="printBookLabels(100);this.closest(\'.book-card-scan-overlay\').remove()">🖨️ Cetak 100 Label</button><button class="green" onclick="printBookLabels(\'all\');this.closest(\'.book-card-scan-overlay\').remove()">🖨️ Cetak Semua Label Buku</button><button onclick="printFilteredBookCards();this.closest(\'.book-card-scan-overlay\').remove()">🔎 Cetak Hasil Pencarian</button><button onclick="startBookScanner();this.closest(\'.book-card-scan-overlay\').remove()">📷 Scan QR Buku</button></div><div class="small" style="margin-top:12px">Label: QR, kode, judul, penulis, DDC, nomor klasifikasi, dan rak.</div></div>';
    document.body.appendChild(box);
  };

  window.showBookQrResult=async function(text){
    const b=typeof findBookQr==='function'?findBookQr(text):activeBooks().find(x=>String(x.kode||'').toUpperCase()===String(text||'').trim().toUpperCase());
    if(!b){const m=$('bookScanMsg');if(m)m.textContent='QR terbaca, tetapi buku tidak ditemukan di data perpustakaan.';return;}
    try{stopBookScanner()}catch(e){}
    $('bookDetailOverlay')?.remove();
    const total=Number(b.jumlah)||0,tersedia=Number(b.tersedia)||0,dipinjam=Math.max(0,total-tersedia);
    const ph='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="180" height="220"><rect width="180" height="220" fill="#eee"/><text x="90" y="110" text-anchor="middle" fill="#888">Foto Buku</text></svg>');
    const ov=document.createElement('div');ov.id='bookDetailOverlay';ov.className='book-card-scan-overlay';ov.innerHTML='<div class="book-card-scan-box"><button class="danger" style="float:right" onclick="this.closest(\'.book-card-scan-overlay\').remove()">✕</button><h3>📚 Informasi Buku</h3><div class="book-detail"><img id="scannedBookPhoto" class="book-detail-photo" src="'+ph+'"><div class="book-detail-info"><div class="big">'+esc2(b.judul||'-')+'</div><div><b>Kode Buku:</b> '+esc2(b.kode||'-')+'</div><div><b>Judul Buku:</b> '+esc2(b.judul||'-')+'</div><div><b>Penulis:</b> '+esc2(b.penulis||'-')+'</div><div><b>Tahun Cetak:</b> '+esc2(b.tahunCetak||'-')+'</div><div><b>DDC:</b> '+esc2(b.ddc||'-')+'</div><div><b>Nomor Klasifikasi:</b> '+esc2(b.nomorKlasifikasi||'-')+'</div><div><b>Rak:</b> '+esc2(b.rak||'-')+'</div><hr><div><b>Jumlah Buku:</b> '+total+'</div><div><b>Tersedia:</b> '+tersedia+'</div><div><b>Dipinjam:</b> '+dipinjam+'</div><div><b>Status:</b> '+(tersedia>0?'Tersedia':'Sedang dipinjam')+'</div></div></div></div>';
    document.body.appendChild(ov);
    try{if(typeof mediaGet==='function'){const photo=await mediaGet('buku',String(b.id));if(photo&&typeof mediaUrl==='function'){const img=$('scannedBookPhoto');if(img)img.src=mediaUrl(photo);}}}catch(e){}
  };

  // Jalankan setelah DOM aplikasi siap. Tidak melakukan save() pada saat script pertama kali dimuat.
  function repairInit(){try{ensureBookFields();migrateBooks();ensureBookFields();renderBuku();}catch(e){console.error('REPAIR init:',e);}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(repairInit,50));else setTimeout(repairInit,50);
  setTimeout(repairInit,700);
})();
