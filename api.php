<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Sync-Token');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }
require __DIR__.'/config.php';
$token = $_SERVER['HTTP_X_SYNC_TOKEN'] ?? ($_GET['token'] ?? ($_POST['token'] ?? ''));
if (!$token && isset($_SERVER['HTTP_AUTHORIZATION']) && preg_match('/Bearer\s+(.+)/i', $_SERVER['HTTP_AUTHORIZATION'], $mm)) $token = trim($mm[1]);
if (!hash_equals(SYNC_TOKEN, $token)) { http_response_code(401); echo json_encode(['ok'=>false,'error'=>'Token tidak valid']); exit; }

$file = __DIR__.'/data/sync.json';
$lockFile = __DIR__.'/data/sync.lock';
$empty = ['anggota'=>[],'buku'=>[],'pengunjung'=>[],'transaksi'=>[],'literasi'=>[],'sarpras'=>[],'program'=>[],'evaluasi'=>[]];
if (!is_dir(dirname($file))) @mkdir(dirname($file),0755,true);
$lock = @fopen($lockFile,'c+');
if (!$lock) { http_response_code(500); echo json_encode(['ok'=>false,'error'=>'Kunci sinkronisasi server tidak dapat dibuka']); exit; }
if (!flock($lock,LOCK_EX)) { fclose($lock); http_response_code(500); echo json_encode(['ok'=>false,'error'=>'Server sedang sibuk']); exit; }

function fresh_server($empty){ return ['version'=>0,'updated_at'=>0,'settings'=>[],'db'=>$empty,'tombstones'=>array_fill_keys(array_keys($empty),[])]; }
function atomic_write_json($file,$data){
  $json=json_encode($data,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
  if($json===false) return [false,'JSON gagal dibuat'];
  $n=@file_put_contents($file,$json,LOCK_EX);
  if($n===false || $n<strlen($json)) return [false,'Server tidak dapat menulis data/sync.json. Pastikan folder data dapat ditulis.'];
  @chmod($file,0664);
  return [true,$n];
}
function load_server($file,$empty){
  $raw=@file_get_contents($file);
  $server=$raw?json_decode($raw,true):null;
  if(!is_array($server)) $server=fresh_server($empty);
  $server['settings']=is_array($server['settings']??null)?$server['settings']:[];
  $server['db']=is_array($server['db']??null)?$server['db']:$empty;
  $server['tombstones']=is_array($server['tombstones']??null)?$server['tombstones']:[];
  foreach($empty as $k=>$_){
    $server['db'][$k]=is_array($server['db'][$k]??null)?$server['db'][$k]:[];
    $server['tombstones'][$k]=is_array($server['tombstones'][$k]??null)?$server['tombstones'][$k]:[];
  }
  return [$server,$raw];
}
function migrate_member_media_key($oldKey,$newKey){
  if((string)$oldKey==='' || (string)$newKey==='' || (string)$oldKey===(string)$newKey) return;
  $base=__DIR__.'/data/media/anggota';
  if(!is_dir($base)) return;
  $old=$base.'/'.hash('sha256',(string)$oldKey).'.bin';
  $new=$base.'/'.hash('sha256',(string)$newKey).'.bin';
  if(is_file($old) && !is_file($new)){ @copy($old,$new); if(is_file($old.'.mime')) @copy($old.'.mime',$new.'.mime'); if(is_file($old.'.name')) @copy($old.'.name',$new.'.name'); @chmod($new,0664); }
}
function canonicalize_members(&$db){
  $mapOldToNew=[]; $byNis=[]; $out=[];
  foreach(($db['anggota']??[]) as $x){
    if(!is_array($x)||!isset($x['id'])) continue;
    $nis=trim((string)($x['nis']??$x['nisn']??''));
    $isStudent=($nis!=='' && (($x['jenis']??'')==='Siswa' || ($x['source']??'')==='roster' || substr((string)$x['id'],0,6)==='siswa-'));
    if($isStudent){
      $sid='siswa-'.preg_replace('/[^A-Za-z0-9_-]/','-',$nis);
      if(isset($byNis[$nis])){ $mapOldToNew[$x['id']]=$sid; continue; }
      $oldId=(string)$x['id'];
      $mapOldToNew[$oldId]=$sid;
      migrate_member_media_key($oldId,$sid);
      $x['id']=$sid; $x['kode']='SIS-'.$nis; $x['nis']=$nis; $x['source']='roster'; $byNis[$nis]=$sid;
    }
    $out[(string)$x['id']]=$x;
  }
  $db['anggota']=array_values($out);
  foreach(['transaksi','pengunjung'] as $k){
    foreach(($db[$k]??[]) as &$r){ if(isset($r['anggota']) && isset($mapOldToNew[$r['anggota']])) $r['anggota']=$mapOldToNew[$r['anggota']]; }
    unset($r);
  }
}
function reconcile_inventory(&$db){
  $borrowed=[];
  foreach(($db['transaksi']??[]) as $t){
    if(!is_array($t)||empty($t['id'])||isset($t['deleted'])) continue;
    if((string)($t['status']??'')==='Dikembalikan') continue;
    $bid=(string)($t['buku']??''); if($bid==='') continue;
    $q=max(0,(int)($t['jumlah']??0));
    $borrowed[$bid]=($borrowed[$bid]??0)+$q;
  }
  foreach(($db['buku']??[]) as &$b){
    if(!is_array($b)||!isset($b['id'])) continue;
    $total=max(0,(int)($b['jumlah']??0));
    $b['jumlah']=$total;
    $b['tersedia']=max(0,$total-(int)($borrowed[(string)$b['id']]??0));
  }
  unset($b);
}
function now_ms(){ return (int)round(microtime(true)*1000); }
function out_payload($server){ return ['settings'=>$server['settings'],'db'=>$server['db'],'tombstones'=>$server['tombstones']]; }

$LOCKED_IDENTITY = [
  'perpus'=>'PERPUSTAKAAN LENTERA HATI','sekolah'=>'SD NEGERI WARAKAS 3','kecamatan'=>'Binuang',
  'kepala'=>'MURDA, S.Pd','nipKepala'=>'197009201999031007','petugas'=>'GUGUN RISNAWAN',
  'nipPetugas'=>'199708122025211085','tempat'=>'Binuang','identityPermanent'=>true
];
[$server,$raw]=load_server($file,$empty);
// Inisialisasi file pusat segera. Sebelumnya GET/health dapat melihat sync.json
// kosong/tidak ada sehingga server terlihat sehat tetapi belum memiliki basis data.
if($raw===false || trim((string)$raw)===''){
  $server['settings']=$LOCKED_IDENTITY+['tahun'=>'2026/2027','updatedAt'=>0];
  $server['version']=1; $server['updated_at']=now_ms();
  [$initOk,$initInfo]=atomic_write_json($file,$server);
  if(!$initOk){
    flock($lock,LOCK_UN); fclose($lock); http_response_code(500);
    echo json_encode(['ok'=>false,'error'=>$initInfo,'stage'=>'init_sync_json']); exit;
  }
  $raw=json_encode($server,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
}
if(!$server['settings']) $server['settings']=$LOCKED_IDENTITY+['tahun'=>'2026/2027','updatedAt'=>0];
foreach($LOCKED_IDENTITY as $k=>$v) $server['settings'][$k]=$v;
canonicalize_members($server['db']);
reconcile_inventory($server['db']);

$rawInput=file_get_contents('php://input');
$input=json_decode($rawInput,true);
if(!is_array($input) && isset($_POST['payload'])) $input=json_decode((string)$_POST['payload'],true);
if(!is_array($input)) $input=[];
// Dukungan hosting lama: jika body JSON tidak diparse, baca juga raw payload yang mungkin dikirim sebagai form.
if(!is_array($input) || !$input){
  $payloadParam=$_POST['payload']??'';
  if($payloadParam!==''){ $tmp=json_decode((string)$payloadParam,true); if(is_array($tmp)) $input=$tmp; }
}

$action=$_GET['action']??($input['action']??'');

// V86 RELAY: server online hanya menyimpan antrean sementara. Basis data utama tetap di laptop/master.
$relayFile=__DIR__.'/data/relay_queue.json';
if($action==='relay_submit'){
  $qraw=@file_get_contents($relayFile); $q=$qraw?json_decode($qraw,true):[]; if(!is_array($q))$q=[];
  $changes=is_array($input['changes']??null)?$input['changes']:[]; $dev=substr((string)($input['device_id']??'unknown'),0,120);
  if(!$changes){flock($lock,LOCK_UN);fclose($lock);http_response_code(400);echo json_encode(['ok'=>false,'error'=>'Perubahan kosong']);exit;}
  $dedupe=$changes; if(is_array($dedupe))unset($dedupe['client_updated_at']); $finger=hash('sha256',json_encode([$dev,$dedupe],JSON_UNESCAPED_UNICODE)); $exists=false; foreach($q as $it)if(($it['fingerprint']??'')===$finger){$exists=true;break;}
  if(!$exists)$q[]=['id'=>bin2hex(random_bytes(10)),'fingerprint'=>$finger,'device_id'=>$dev,'created_at'=>now_ms(),'changes'=>$changes];
  @file_put_contents($relayFile,json_encode($q,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT),LOCK_EX);
  $out=['ok'=>true,'queued'=>!$exists,'queue_count'=>count($q),'master_version'=>(int)$server['version'],'payload'=>out_payload($server)]; flock($lock,LOCK_UN);fclose($lock);echo json_encode($out,JSON_UNESCAPED_UNICODE);exit;
}
if($action==='relay_pull'){
  $qraw=@file_get_contents($relayFile);$q=$qraw?json_decode($qraw,true):[];if(!is_array($q))$q=[];
  $out=['ok'=>true,'items'=>$q,'version'=>(int)$server['version'],'updated_at'=>(int)$server['updated_at'],'payload'=>out_payload($server)];flock($lock,LOCK_UN);fclose($lock);echo json_encode($out,JSON_UNESCAPED_UNICODE);exit;
}
if($action==='relay_ack'){
  $ids=is_array($input['ids']??null)?array_map('strval',$input['ids']):[];$qraw=@file_get_contents($relayFile);$q=$qraw?json_decode($qraw,true):[];if(!is_array($q))$q=[];$q=array_values(array_filter($q,fn($it)=>!in_array((string)($it['id']??''),$ids,true)));@file_put_contents($relayFile,json_encode($q,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT),LOCK_EX);$out=['ok'=>true,'remaining'=>count($q)];flock($lock,LOCK_UN);fclose($lock);echo json_encode($out,JSON_UNESCAPED_UNICODE);exit;
}

if($action==='version' || $action==='state'){
  $counts=[]; foreach($empty as $k=>$_) $counts[$k]=count($server['db'][$k]);
  $out=['ok'=>true,'version'=>(int)$server['version'],'updated_at'=>(int)$server['updated_at'],'counts'=>$counts,'bytes'=>strlen($raw?:'')];
  if($action==='state') $out['payload']=out_payload($server);
  flock($lock,LOCK_UN); fclose($lock); echo json_encode($out,JSON_UNESCAPED_UNICODE); exit;
}
if($action==='health'){
  $dir=dirname($file);
  $tmp=$dir.'/sync.health.'.bin2hex(random_bytes(4)).'.tmp';
  $writeOk=false; $writeErr='';
  $payload='health-'.now_ms();
  $n=@file_put_contents($tmp,$payload,LOCK_EX);
  if($n===strlen($payload)){
    $check=@file_get_contents($tmp);
    $writeOk=($check===$payload);
    @unlink($tmp);
  } else { $writeErr='file_put_contents gagal'; @unlink($tmp); }
  $rawCheck=@file_get_contents($file);
  $jsonCheck=$rawCheck?json_decode($rawCheck,true):null;
  $out=['ok'=>true,'health'=>true,'version'=>basename(__FILE__),'file_exists'=>file_exists($file),'file_readable'=>($rawCheck!==false),'storage_writable'=>is_writable($dir),'write_test'=>$writeOk,'file_bytes'=>($rawCheck===false?0:strlen($rawCheck)),'data_version'=>(int)($jsonCheck['version']??0),'updated_at'=>(int)($jsonCheck['updated_at']??0)];
  if(!$writeOk)$out['error']=$writeErr?:'Tes tulis ke folder data gagal';
  flock($lock,LOCK_UN); fclose($lock); echo json_encode($out,JSON_UNESCAPED_UNICODE); exit;
}

if($action==='media_put'){
  $store=(string)($input['store']??$_POST['store']??'');
  $key=(string)($input['key']??$_POST['key']??'');
  if(!in_array($store,['anggota','buku','default'],true) || $key===''){
    flock($lock,LOCK_UN);fclose($lock);http_response_code(400);echo json_encode(['ok'=>false,'error'=>'Media store/key tidak valid']);exit;
  }
  if(empty($_FILES['file']) || ($_FILES['file']['error']??UPLOAD_ERR_NO_FILE)!==UPLOAD_ERR_OK){
    flock($lock,LOCK_UN);fclose($lock);http_response_code(400);echo json_encode(['ok'=>false,'error'=>'File foto tidak diterima server']);exit;
  }
  $baseDir=__DIR__.'/data/media/'.$store;
  if(!is_dir($baseDir) && !@mkdir($baseDir,0755,true)){
    flock($lock,LOCK_UN);fclose($lock);http_response_code(500);echo json_encode(['ok'=>false,'error'=>'Folder media tidak dapat dibuat']);exit;
  }
  $safe=hash('sha256',$key);
  $dest=$baseDir.'/'.$safe.'.bin';
  $mime=(string)($_FILES['file']['type']??'application/octet-stream');
  if(function_exists('finfo_open')){ $fi=@finfo_open(FILEINFO_MIME_TYPE); if($fi){$m=@finfo_file($fi,$_FILES['file']['tmp_name']);if($m)$mime=$m;@finfo_close($fi);} }
  if(!preg_match('#^image/(jpeg|png|gif|webp|bmp|svg\+xml)$#i',$mime)){
    flock($lock,LOCK_UN);fclose($lock);http_response_code(400);echo json_encode(['ok'=>false,'error'=>'File harus berupa foto gambar']);exit;
  }
  if(!@move_uploaded_file($_FILES['file']['tmp_name'],$dest)){
    flock($lock,LOCK_UN);fclose($lock);http_response_code(500);echo json_encode(['ok'=>false,'error'=>'Foto gagal disimpan di server']);exit;
  }
  @file_put_contents($dest.'.mime',$mime,LOCK_EX);
  @file_put_contents($dest.'.name',substr(preg_replace('/[^A-Za-z0-9._-]+/','_',basename((string)($_FILES['file']['name']??'foto'))),0,180),LOCK_EX);
  @file_put_contents($dest.'.key',$key,LOCK_EX);
  @chmod($dest,0664);
  $size=@filesize($dest); $mtime=(int)@filemtime($dest)*1000; $sha=@hash_file('sha256',$dest);
  flock($lock,LOCK_UN);fclose($lock);echo json_encode(['ok'=>true,'store'=>$store,'key'=>$key,'bytes'=>(int)$size,'updated_at'=>$mtime,'sha256'=>$sha?:'']);exit;
}
if($action==='media_ack'){
  // Server hanya bertindak sebagai antrean sementara. Setelah laptop mengakui foto sudah diterima,
  // file foto di server dihapus sehingga penyimpanan permanen tetap berada di aplikasi laptop.
  $store=(string)($_POST['store']??$_GET['store']??''); $key=(string)($_POST['key']??$_GET['key']??'');
  if(!in_array($store,['anggota','buku'],true)||$key===''){flock($lock,LOCK_UN);fclose($lock);http_response_code(400);echo json_encode(['ok'=>false,'error'=>'Media ack tidak valid']);exit;}
  $dest=__DIR__.'/data/media/'.$store.'/'.hash('sha256',$key).'.bin';
  $removed=false;
  if(is_file($dest)) $removed=@unlink($dest);
  foreach(['.mime','.name','.key'] as $ext){$f=$dest.$ext;if(is_file($f))@unlink($f);}
  flock($lock,LOCK_UN);fclose($lock);echo json_encode(['ok'=>true,'removed'=>$removed]);exit;
}
if($action==='media_manifest'){
  $manifest=[];
  foreach(['anggota','buku','default'] as $store){
    $dir=__DIR__.'/data/media/'.$store;
    if(!is_dir($dir)) continue;
    foreach(glob($dir.'/*.bin') ?: [] as $dest){
      $hash=basename($dest,'.bin'); $keyFile=$dest.'.key';
      if(!is_file($keyFile)) continue;
      $key=trim((string)@file_get_contents($keyFile)); if($key==='') continue;
      $manifest[]=['store'=>$store,'key'=>$key,'updated_at'=>(int)@filemtime($dest)*1000,'bytes'=>(int)@filesize($dest),'sha256'=>@hash_file('sha256',$dest)?:''];
    }
  }
  flock($lock,LOCK_UN);fclose($lock);echo json_encode(['ok'=>true,'items'=>$manifest],JSON_UNESCAPED_UNICODE);exit;
}
if($action==='media_info'){
  $store=(string)($_GET['store']??''); $key=(string)($_GET['key']??'');
  if(!in_array($store,['anggota','buku','default'],true)||$key===''){flock($lock,LOCK_UN);fclose($lock);http_response_code(400);echo json_encode(['ok'=>false,'error'=>'Media tidak valid']);exit;}
  $dest=__DIR__.'/data/media/'.$store.'/'.hash('sha256',$key).'.bin';
  if(!is_file($dest)){flock($lock,LOCK_UN);fclose($lock);http_response_code(404);echo json_encode(['ok'=>false,'exists'=>false]);exit;}
  $mtime=(int)@filemtime($dest)*1000; $size=(int)@filesize($dest); $sha=@hash_file('sha256',$dest);
  flock($lock,LOCK_UN);fclose($lock);echo json_encode(['ok'=>true,'exists'=>true,'store'=>$store,'key'=>$key,'updated_at'=>$mtime,'bytes'=>$size,'sha256'=>$sha?:'']);exit;
}
if($action==='media_get'){
  $store=(string)($_GET['store']??''); $key=(string)($_GET['key']??'');
  if(!in_array($store,['anggota','buku','default'],true)||$key===''){flock($lock,LOCK_UN);fclose($lock);http_response_code(400);echo 'Media tidak valid';exit;}
  $dest=__DIR__.'/data/media/'.$store.'/'.hash('sha256',$key).'.bin';
  if(!is_file($dest)){flock($lock,LOCK_UN);fclose($lock);http_response_code(404);header('Content-Type: application/json; charset=utf-8');echo json_encode(['ok'=>false,'error'=>'Foto tidak ditemukan']);exit;}
  $mime='application/octet-stream'; $mf=$dest.'.mime'; if(is_file($mf)){ $m=trim((string)@file_get_contents($mf)); if($m)$mime=$m; }
  $size=@filesize($dest); flock($lock,LOCK_UN);fclose($lock);
  header('Content-Type: '.$mime); header('Content-Length: '.(string)$size); header('Content-Disposition: inline'); header('Cache-Control: public, max-age=31536000, immutable');
  @readfile($dest); exit;
}

if($action==='get' || ($action==='' && $_SERVER['REQUEST_METHOD']==='GET')){
  $out=['ok'=>true,'exists'=>!!$raw,'updated_at'=>(int)($server['updated_at']??0),'version'=>(int)($server['version']??0),'payload'=>out_payload($server)];
  flock($lock,LOCK_UN); fclose($lock); echo json_encode($out,JSON_UNESCAPED_UNICODE); exit;
}

if($action==='reset_activity'){
  // V17: reset aktivitas hanya SATU KALI secara global di server pusat.
  // Setelah resetDone tersimpan, perangkat lain tidak akan menghapus data baru lagi.
  if(!empty($server['reset_activity_v17_done'])){
    $out=['ok'=>true,'already_reset'=>true,'version'=>(int)$server['version'],'updated_at'=>(int)$server['updated_at'],'payload'=>out_payload($server)];
    flock($lock,LOCK_UN);fclose($lock);echo json_encode($out,JSON_UNESCAPED_UNICODE);exit;
  }
  foreach(['pengunjung','transaksi'] as $k){ $server['db'][$k]=[]; $server['tombstones'][$k]=[]; }
  $server['reset_activity_v17_done']=true;
  $server['version']=(int)$server['version']+1; $server['updated_at']=now_ms();
  [$ok,$info]=atomic_write_json($file,$server);
  if(!$ok){flock($lock,LOCK_UN);fclose($lock);http_response_code(500);echo json_encode(['ok'=>false,'error'=>$info]);exit;}
  $out=['ok'=>true,'already_reset'=>false,'version'=>$server['version'],'updated_at'=>$server['updated_at'],'stored_bytes'=>$info,'payload'=>out_payload($server)];
  flock($lock,LOCK_UN);fclose($lock);echo json_encode($out,JSON_UNESCAPED_UNICODE);exit;
}

if($action==='restore'){
  $restore=$input['db']??null; $restoreSettings=$input['settings']??[];
  if(!is_array($restore)){ flock($lock,LOCK_UN);fclose($lock);http_response_code(400);echo json_encode(['ok'=>false,'error'=>'Payload backup tidak valid']);exit; }
  $restoreAt=(int)($input['restoreAt']??now_ms());
  foreach(array_keys($empty) as $k){
    $incoming=is_array($restore[$k]??null)?$restore[$k]:[]; $map=[];
    foreach($server['db'][$k] as $x) if(is_array($x)&&isset($x['id'])) $map[(string)$x['id']]=$x;
    foreach($incoming as $i=>$x){ if(!is_array($x)||!isset($x['id'])) continue; $x['updatedAt']=$restoreAt+$i; $sid=(string)$x['id']; unset($server['tombstones'][$k][$sid]); $map[$sid]=$x; }
    $server['db'][$k]=array_values($map);
  }
  if(is_array($restoreSettings)){
    $allowed=['perpus','sekolah','alamat','kecamatan','kepala','nipKepala','petugas','nipPetugas','tempat','tahun','memberCardTheme','memberCardFooter','memberCardQrLabel','memberCardShowNisn','memberCardShowAddress','memberCardShowKode','memberCardShowKelas','memberCardShowKelamin','memberCardShowJenis','memberCardShowPerpus','memberCardShowSekolah','memberCardLogo','memberCardLogoRight','memberCardDefaultPhotos','memberCardShape','memberCardNameSize','memberCardPaper','memberCardModelSiswa','memberCardModelGuru','memberCardTitleSize','memberCardManualNameSize','memberCardDetailSize','memberCardBackRules'];
    foreach($allowed as $sk) if(array_key_exists($sk,$restoreSettings)) $server['settings'][$sk]=$restoreSettings[$sk];
    $server['settings']['updatedAt']=$restoreAt;
  }
  canonicalize_members($server['db']);
  reconcile_inventory($server['db']);
  $server['version']=(int)$server['version']+1; $server['updated_at']=now_ms();
  [$ok,$info]=atomic_write_json($file,$server);
  if(!$ok){flock($lock,LOCK_UN);fclose($lock);http_response_code(500);echo json_encode(['ok'=>false,'error'=>$info]);exit;}
  $out=['ok'=>true,'version'=>$server['version'],'updated_at'=>$server['updated_at'],'stored_bytes'=>$info,'payload'=>out_payload($server)];
  flock($lock,LOCK_UN);fclose($lock);echo json_encode($out,JSON_UNESCAPED_UNICODE);exit;
}

if($action!=='sync'){flock($lock,LOCK_UN);fclose($lock);echo json_encode(['ok'=>false,'error'=>'Action tidak dikenal']);exit;}
$changes=$input['changes']??[]; if(!is_array($changes)) $changes=[];
if(empty($changes) && isset($input['db']) && is_array($input['db'])) foreach(array_keys($empty) as $k) $changes[$k]=['upsert'=>is_array($input['db'][$k]??null)?$input['db'][$k]:[],'delete'=>[]];
$hasIncoming=false;
foreach(array_keys($empty) as $kk){
  if(!empty($changes[$kk]['upsert']) || !empty($changes[$kk]['delete'])) {$hasIncoming=true; break;}
}
if(!$hasIncoming && isset($input['changes']) && is_array($input['changes'])){
  // Jangan diam-diam menganggap upload kosong sebagai sinkronisasi berhasil.
  flock($lock,LOCK_UN); fclose($lock); http_response_code(400);
  echo json_encode(['ok'=>false,'error'=>'Payload sinkronisasi kosong/tidak terbaca server. Coba ulangi.','stage'=>'parse_sync_payload'],JSON_UNESCAPED_UNICODE); exit;
}
foreach(array_keys($empty) as $k){
  if(isset($changes[$k])&&is_array($changes[$k])&&array_keys($changes[$k])===range(0,count($changes[$k])-1)) $changes[$k]=['upsert'=>$changes[$k],'delete'=>[]];
}
if(isset($input['tombstones'])&&is_array($input['tombstones'])) foreach(array_keys($empty) as $k) foreach((array)($input['tombstones'][$k]??[]) as $id=>$tt) $server['tombstones'][$k][(string)$id]=max((int)($server['tombstones'][$k][(string)$id]??0),(int)$tt?:now_ms());
$serverNow=now_ms(); $changed=false;
foreach(array_keys($empty) as $k){
  $map=[]; foreach($server['db'][$k] as $x) if(is_array($x)&&isset($x['id'])) $map[(string)$x['id']]=$x;
  foreach(($changes[$k]['delete']??[]) as $id){$sid=(string)$id;$server['tombstones'][$k][$sid]=max((int)($server['tombstones'][$k][$sid]??0),$serverNow);if(isset($map[$sid])){unset($map[$sid]);$changed=true;}}
  foreach(($changes[$k]['upsert']??[]) as $x){
    if(!is_array($x)||!isset($x['id']))continue; $sid=(string)$x['id']; if(isset($server['tombstones'][$k][$sid]))continue;
    $incoming=(int)($x['updatedAt']??0); $old=$map[$sid]??null; $oldTime=(int)($old['updatedAt']??0);
    if(!$old || $incoming>=$oldTime){ if(!$old || json_encode($old,JSON_UNESCAPED_UNICODE)!==json_encode($x,JSON_UNESCAPED_UNICODE)) $changed=true; $map[$sid]=$x; }
  }
  $server['db'][$k]=array_values($map);
}
if(isset($input['settings'])&&is_array($input['settings'])){
  $incoming=$input['settings']; $next=$server['settings'];
  $editable=['perpus','sekolah','alamat','kecamatan','kepala','nipKepala','petugas','nipPetugas','tempat','tahun','memberCardTheme','memberCardFooter','memberCardQrLabel','memberCardShowNisn','memberCardShowAddress','memberCardShowKode','memberCardShowKelas','memberCardShowKelamin','memberCardShowJenis','memberCardShowPerpus','memberCardShowSekolah','memberCardLogo','memberCardLogoRight','memberCardDefaultPhotos','memberCardShape','memberCardNameSize','memberCardPaper','memberCardModelSiswa','memberCardModelGuru','memberCardTitleSize','memberCardManualNameSize','memberCardDetailSize','memberCardBackRules'];
  foreach($editable as $k) if(array_key_exists($k,$incoming)) $next[$k]=$incoming[$k];
  $inTime=(int)($incoming['updatedAt']??0); $svTime=(int)($server['settings']['updatedAt']??0);
  if($inTime>=$svTime){$next['updatedAt']=max($inTime,$svTime);$server['settings']=$next;$changed=true;}
}
foreach($LOCKED_IDENTITY as $k=>$v) $server['settings'][$k]=$v;
canonicalize_members($server['db']);
reconcile_inventory($server['db']);
foreach(array_keys($empty) as $k) $server['db'][$k]=array_values(array_filter($server['db'][$k],fn($x)=>isset($x['id'])&&!isset($server['tombstones'][$k][(string)$x['id']])));
if($changed || !$raw){$server['version']=(int)$server['version']+1;$server['updated_at']=$serverNow;}
[$ok,$info]=atomic_write_json($file,$server);
if(!$ok){flock($lock,LOCK_UN);fclose($lock);http_response_code(500);echo json_encode(['ok'=>false,'error'=>$info]);exit;}
$out=['ok'=>true,'version'=>(int)$server['version'],'updated_at'=>(int)$server['updated_at'],'stored_bytes'=>$info,'payload'=>out_payload($server)];
flock($lock,LOCK_UN);fclose($lock);echo json_encode($out,JSON_UNESCAPED_UNICODE);exit;
