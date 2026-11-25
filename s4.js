
(function(){
  function escP(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  async function cardWithPhoto(a){
    let html=window.memberCardHtml(a,'front');
    try{
      const b=await mediaGet('anggota',String(a.id));
      if(b){
        const u=mediaUrl(b);
        html=html.replace(/(<img[^>]+data-member-photo="[^"]+"[^>]+src=")[^"]*(")/i,'$1'+escP(u)+'$2');
      }
    }catch(e){}
    return html;
  }
  function printHtmlForCards(pages,W,H,title){
    const w=window.open('about:blank','_blank');
    if(!w){alert('Popup diblokir. Izinkan pop-up untuk mencetak kartu anggota.');return false;}
    w.document.open();
    w.document.write('<!doctype html><html lang="id"><head><meta charset="utf-8"><title>'+escP(title)+'</title><style>'+
      '@page{size:'+W+' '+H+';margin:8mm}*{box-sizing:border-box}html,body{margin:0;padding:0;background:#fff;font-family:Arial,sans-serif}'+
      '.page{width:100%;min-height:calc('+H+' - 16mm);display:flex;align-items:flex-start;justify-content:center;padding-top:2mm;page-break-after:always}'+
      '.grid{width:181.2mm;display:grid;grid-template-columns:85.6mm 85.6mm;gap:2mm 10mm;justify-content:center;align-content:start}'+
      '.item{width:85.6mm;height:54mm;break-inside:avoid;page-break-inside:avoid}'+
      '.member-card{width:85.6mm!important;height:54mm!important;box-sizing:border-box;overflow:hidden;position:relative;background:#fff;border:1px solid #b7cbe5;color:#10233b;font-family:Arial,sans-serif}'+
      '.mc-head{height:16mm;padding:2mm 3mm 1mm;display:flex;align-items:center;gap:2.3mm;background:linear-gradient(135deg,#fff,#f4f8fc)}'+
      '.mc-logo{width:13mm;height:13mm;object-fit:contain}.v31-logo-right{margin-left:auto}'+
      '.mc-title{font-weight:800;line-height:1.05}.mc-school{font-size:2.35mm;font-weight:700;margin-top:.8mm}.mc-label{font-size:2mm;font-weight:700;margin-top:.6mm}'+
      '.mc-body{display:flex;gap:2.5mm;padding:1.7mm 3mm 2.2mm;padding-right:25mm}.mc-qr{width:22mm;height:22mm;object-fit:contain;background:#fff;border:1px solid #ccd9e8;padding:1mm}.mc-info{flex:1;min-width:0}.mc-name{font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:1mm}.mc-row{display:flex;line-height:1.4}.mc-row b{width:16mm;flex:none}.mc-avatar{position:absolute;right:2mm;bottom:5mm;width:24mm;height:27mm;object-fit:contain}.mc-foot{position:absolute;left:0;right:0;bottom:0;height:5mm;color:#fff;font-size:2mm;display:flex;align-items:center;justify-content:center;padding:0 2mm;font-weight:700}'+
      '.v31-card-back{padding:4mm;display:flex;flex-direction:column}.v31-back-head{text-align:center;font-weight:800;font-size:3.5mm}.v31-back-head small{font-size:2.2mm}.v31-rules-title{text-align:center;font-weight:800;margin:4mm 0 2mm;font-size:3mm}.v31-rules{line-height:1.5}.v31-back-foot{margin-top:auto;text-align:center;font-size:2mm;font-weight:700}'+
      '@media print{.page:last-child{page-break-after:auto}}'+
      '</style></head><body>'+pages.join('')+'<script>window.addEventListener("load",function(){setTimeout(function(){window.focus();window.print()},700)})<\\/script></body></html>');
    w.document.close();
    return true;
  }
  window.printMemberCards=async function(){
    const q=($('aCari')?.value||'').trim().toLowerCase();
    const arr=active(db.anggota).filter(a=>!q||JSON.stringify(a).toLowerCase().includes(q));
    if(!arr.length){alert('Tidak ada anggota yang dapat dicetak.');return;}
    const isF4=(settings.memberCardPaper||'F4-10')==='F4-10';
    const W=isF4?'215.9mm':'210mm',H=isF4?'330.2mm':'297mm';
    const pages=[];
    for(let i=0;i<arr.length;i+=10){
      const chunk=arr.slice(i,i+10);
      const fronts=[]; const backs=[];
      for(const a of chunk){fronts.push('<div class="item">'+await cardWithPhoto(a)+'</div>');backs.push('<div class="item">'+window.memberCardHtml(a,'back')+'</div>')}
      pages.push('<div class="page"><div class="grid">'+fronts.join('')+'</div></div>');
      pages.push('<div class="page"><div class="grid">'+backs.join('')+'</div></div>');
    }
    printHtmlForCards(pages,W,H,'Kartu Anggota - '+(settings.perpus||'Perpustakaan'));
  };
  window.printMemberCard=async function(id){
    const a=db.anggota.find(x=>String(x.id)===String(id));
    if(!a){alert('Anggota tidak ditemukan.');return;}
    const isF4=(settings.memberCardPaper||'F4-10')==='F4-10';
    const W=isF4?'215.9mm':'210mm',H=isF4?'330.2mm':'297mm';
    const front=await cardWithPhoto(a);
    const pages=['<div class="page"><div class="grid"><div class="item">'+front+'</div></div></div>','<div class="page"><div class="grid"><div class="item">'+window.memberCardHtml(a,'back')+'</div></div></div>'];
    printHtmlForCards(pages,W,H,'Kartu '+(a.nama||''));
  };
})();
