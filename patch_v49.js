(function(){
  const CENTRAL='https://perpustakaanlenterahatiwarakas3.66ghz.com/';
  const MEDIA_API=new URL('api.php',CENTRAL).href;
  try{localStorage.setItem('perpus_central_server',CENTRAL)}catch(e){}
  function addCamera(fileId){
    const f=document.getElementById(fileId); if(!f||f.dataset.v49camera)return;
    f.dataset.v49camera='1';
    const cap=document.createElement('input'); cap.type='file'; cap.accept='image/*'; cap.capture='environment'; cap.style.display='none'; cap.id=fileId+'_camera';
    const btn=document.createElement('button'); btn.type='button'; btn.textContent='📷 Kamera'; btn.style.marginLeft='6px';
    btn.onclick=()=>cap.click();
    cap.onchange=()=>{const file=cap.files&&cap.files[0];if(!file)return;try{const dt=new DataTransfer();dt.items.add(file);f.files=dt.files;f.dispatchEvent(new Event('change',{bubbles:true}))}catch(e){alert('Foto kamera sudah dipilih. Silakan simpan.')}};
    f.parentNode.appendChild(cap); f.parentNode.appendChild(btn);
  }
  function setupCameras(){addCamera('aFotoFile');addCamera('bFotoFile')}
  async function remotePut(store,key,file){
    if(!navigator.onLine||!file)return false;
    try{
      const fd=new FormData();fd.append('action','media_put');fd.append('store',store);fd.append('key',String(key));fd.append('file',file,file.name||'foto.jpg');
      const r=await fetch(MEDIA_API,{method:'POST',body:fd,mode:'cors'}); return r.ok;
    }catch(e){return false}
  }
  async function saveRemotePhoto(store,key,file){
    if(typeof mediaPut==='function')await mediaPut(store,String(key),file);
    return await remotePut(store,key,file);
  }
  window.v49UploadMemberPhoto=async function(file,id){if(!file||!id)return;if(!file.type.startsWith('image/'))return alert('Foto anggota harus berupa gambar.');await saveRemotePhoto('anggota',id,file);if(typeof renderAnggota==='function')renderAnggota();if(typeof renderMemberCardPreview==='function')renderMemberCardPreview()}
  window.v49UploadBookPhoto=async function(file,id){if(!file||!id)return;if(!file.type.startsWith('image/'))return alert('Foto buku harus berupa gambar.');await saveRemotePhoto('buku',id,file);if(typeof renderBuku==='function')renderBuku()}
  async function getPhoto(store,key){
    let b=await mediaGet(store,String(key));
    if(b)return b;
    if(!navigator.onLine)return null;
    try{const u=new URL(MEDIA_API);u.searchParams.set('action','media_get');u.searchParams.set('store',store);u.searchParams.set('key',String(key));const r=await fetch(u.href,{mode:'cors'});if(!r.ok)return null;b=await r.blob();if(b&&b.size){await mediaPut(store,String(key),b);return b}}catch(e){} return null;
  }
  window.hydratePhotos=async function(root){if(!root)return;for(const img of root.querySelectorAll('img[data-photo-store]')){const b=await getPhoto(img.dataset.photoStore,img.dataset.photoId);if(b){const u=URL.createObjectURL(b);img.src=u;img.dataset.blobUrl=u;img.style.cursor='pointer';img.onclick=()=>v31ViewPhoto(img.dataset.photoStore,img.dataset.photoId,img.alt)}}}
  function photoInCell(store,id,alt){return typeof photoThumb==='function'?photoThumb(store,id,alt):''}
  const oldAddA=window.addAnggota;
  window.addAnggota=async function(){const f=document.getElementById('aFotoFile')?.files?.[0];const r=await oldAddA?.();if(f){const a=(db.anggota||[]).slice().reverse().find(x=>x.nama===($('aNama')?.value||'').trim());}return r}
  // Replace add/edit with stable wrappers that capture files before reset.
  window.addAnggota=async function(){
    const nama=($('aNama')?.value||'').trim(); if(!nama)return alert('Nama wajib diisi.');
    const jenis=$('aJenis')?.value||'Siswa', student=jenis==='Siswa'; let kode=($('aKode')?.value||'').trim(); if(!kode)kode=nextCode('ANG',db.anggota);
    if(db.anggota.some(x=>String(x.kode||'').toLowerCase()===kode.toLowerCase()))return alert('Kode anggota sudah dipakai.');
    const obj=touch({id:uid(),kode,nama,createdAt:Date.now(),kelas:student?normalizeClass($('aKelas')?.value):'',nisn:student?($('aNisn')?.value||'').trim():'',jenis,kelamin:($('aKelamin')?.value||'').trim(),alamat:($('aAlamat')?.value||'').trim()});
    db.anggota.push(obj);save(); const f=$('aFotoFile')?.files?.[0]; if(f)await v49UploadMemberPhoto(f,obj.id);
    resetAnggotaForm();ensureMemberFields();toggleClass();renderAnggota();return false;
  };
  window.editAnggota=function(id){const a=db.anggota.find(x=>String(x.id)===String(id));if(!a)return;ensureMemberFields();$('aNama').value=a.nama||'';$('aKelas').value=normalizeClass(a.kelas);$('aNisn').value=a.nisn||'';$('aJenis').value=a.jenis||'Siswa';$('aKelamin').value=a.kelamin||'';$('aAlamat').value=a.alamat||'';$('aKode').value=a.kode||'';toggleClass();const btn=document.querySelector('#anggota button[onclick^="addAnggota"]');if(btn){btn.textContent='💾 Simpan Perubahan';btn.onclick=()=>window.v49UpdateAnggota(id)}$('aNama').scrollIntoView({behavior:'smooth',block:'center'});$('aNama').focus()};
  window.v49UpdateAnggota=async function(id){const a=db.anggota.find(x=>String(x.id)===String(id));if(!a)return;const nama=$('aNama').value.trim(),jenis=$('aJenis').value,kode=$('aKode').value.trim();if(!nama)return alert('Nama wajib');if(!kode)return alert('Kode wajib diisi.');if(db.anggota.some(x=>String(x.id)!==String(id)&&String(x.kode||'').toLowerCase()===kode.toLowerCase()))return alert('Kode anggota sudah dipakai.');Object.assign(a,{kode,nama,kelas:jenis==='Siswa'?normalizeClass($('aKelas').value):'',nisn:jenis==='Siswa'?$('aNisn').value.trim():'',jenis,kelamin:$('aKelamin').value,alamat:$('aAlamat').value.trim()});touch(a);save();const f=$('aFotoFile')?.files?.[0];if(f)await v49UploadMemberPhoto(f,id);resetAnggotaForm();ensureMemberFields();toggleClass();renderAnggota()};
  window.addBuku=async function(){let judul=$('bJudul').value.trim(),penulis=$('bPenulis').value.trim(),jumlah=Math.max(1,parseInt($('bJumlah').value)||1);if(!judul)return alert('Judul wajib');const key=x=>String(x||'').trim().toLowerCase().replace(/\s+/g,' ');let existing=active(db.buku).find(x=>key(x.judul)===key(judul)&&key(x.penulis)===key(penulis));const f=$('bFotoFile')?.files?.[0];if(existing){existing.jumlah=Number(existing.jumlah||0)+jumlah;existing.tersedia=Number(existing.tersedia||0)+jumlah;touch(existing);save();if(f)await v49UploadBookPhoto(f,existing.id)}else{const obj=touch({id:uid(),kode:nextCode('BUKU',db.buku),judul,penulis,rak:$('bRak').value.trim(),jumlah,tersedia:jumlah,createdAt:Date.now()});db.buku.push(obj);save();if(f)await v49UploadBookPhoto(f,obj.id)}$('bJudul').value='';$('bPenulis').value='';$('bRak').value='';$('bJumlah').value=1;if($('bFotoFile'))$('bFotoFile').value='';$('bKode').value=nextCode('BUKU',db.buku);renderBuku()};
  window.editBuku=function(id){const b=db.buku.find(x=>String(x.id)===String(id));if(!b)return;$('bKode').value=b.kode||'';$('bJudul').value=b.judul||'';$('bPenulis').value=b.penulis||'';$('bRak').value=b.rak||'';$('bJumlah').value=b.jumlah||1;const btn=document.querySelector('#buku button[onclick^="addBuku"]');if(btn){btn.textContent='💾 Simpan Perubahan';btn.onclick=()=>window.v49UpdateBuku(id)}$('bJudul').scrollIntoView({behavior:'smooth',block:'center'});$('bJudul').focus()};
  window.v49UpdateBuku=async function(id){const b=db.buku.find(x=>String(x.id)===String(id));if(!b)return;const judul=$('bJudul').value.trim(),penulis=$('bPenulis').value.trim();if(!judul)return alert('Judul wajib');Object.assign(b,{judul,penulis,rak:$('bRak').value.trim(),jumlah:Math.max(1,parseInt($('bJumlah').value)||1)});b.tersedia=Math.min(Number(b.tersedia||0),Number(b.jumlah||0));touch(b);save();const f=$('bFotoFile')?.files?.[0];if(f)await v49UploadBookPhoto(f,id);$('bJudul').value='';$('bPenulis').value='';$('bRak').value='';$('bJumlah').value=1;if($('bFotoFile'))$('bFotoFile').value='';$('bKode').value=nextCode('BUKU',db.buku);renderBuku()};
  // Add thumbnails to transaction tables/search without changing their column structure.
  function wrapRender(name,selectors){const old=window[name];if(typeof old!=='function'||old.__v49)return;const fn=function(){const r=old.apply(this,arguments);setTimeout(()=>{selectors.forEach(s=>{const root=$(s);if(root)hydratePhotos(root)});},0);return r};fn.__v49=true;window[name]=fn}
  wrapRender('renderVisit',['tp']);wrapRender('renderLoan',['tl']);wrapRender('renderReturn',['tr']);wrapRender('renderBuku',['tb']);wrapRender('renderAnggota',['ta']);
  async function retryMedia(){if(!navigator.onLine)return;for(const [store,list] of [['anggota',db.anggota||[]],['buku',db.buku||[]]]){for(const x of list){const b=await mediaGet(store,String(x.id));if(b){await remotePut(store,x.id,b)}}}}
  window.addEventListener('online',()=>{setTimeout(retryMedia,500);setTimeout(setupCameras,100)});
  document.addEventListener('DOMContentLoaded',()=>{setupCameras();setTimeout(retryMedia,1200)});
  setupCameras();
})();
