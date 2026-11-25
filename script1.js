
/* Jalankan SEBELUM halaman dirender agar refresh tidak sempat menampilkan login. */
(function(){
  try {
    var c=document.cookie.split(';').some(function(x){return x.trim().indexOf('perpus_logged=1')===0;});
    var l=(localStorage.getItem('perpus_auth_user')||'').trim().toLowerCase()==='gugun' && (localStorage.getItem('perpus_auth_v2')==='1' || localStorage.getItem('logged')==='1');
    var c2=c && (localStorage.getItem('perpus_auth_user')||'').trim().toLowerCase()==='gugun';
    if(l||c2) document.documentElement.classList.add('auth-ok');
  } catch(e) {}
})();
