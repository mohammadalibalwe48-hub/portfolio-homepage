(function(){
var root=document.documentElement,$=function(s){return document.querySelector(s)},$$=function(s){return document.querySelectorAll(s)};
var tb=$('#theme');
function isDark(){return root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches}
function sync(){tb.setAttribute('aria-pressed',isDark());tb.textContent=isDark()?'Light mode':'Dark mode'}
tb.addEventListener('click',function(){var t=isDark()?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}sync()});sync();
$$('.work button').forEach(function(b){b.addEventListener('click',function(){var o=b.parentElement.classList.toggle('open');b.setAttribute('aria-expanded',o)})});
$$('.chip').forEach(function(c){c.addEventListener('click',function(){
  $$('.chip').forEach(function(x){x.setAttribute('aria-pressed',x===c)});
  $$('.work li').forEach(function(li){li.hidden=c.dataset.f!=='all'&&li.dataset.cat!==c.dataset.f});
})});
var L=[];
$$('h1 .w').forEach(function(w){var t=w.textContent;w.textContent='';w.setAttribute('aria-hidden','true');
  for(var i=0;i<t.length;i++){var s=document.createElement('span');s.className='l';s.textContent=t[i];s.style.setProperty('--i',L.length);w.appendChild(s);L.push(s)}});
if(L.length&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
  var px=0,py=0,raf=0;
  var f=function(){raf=0;L.forEach(function(s){var r=s.getBoundingClientRect(),d=Math.hypot(px-(r.left+r.width/2),py-(r.top+r.height/2)),k=Math.exp(-d/(r.height*.9));
    s.style.fontVariationSettings=`'wght' ${Math.round(800-450*k)},'wdth' ${Math.round(75+25*k)}`})};
  addEventListener('pointermove',function(e){px=e.clientX;py=e.clientY;if(!raf)raf=requestAnimationFrame(f)});
}
var cb=$('#copy');
if(cb)cb.addEventListener('click',function(){
  var p=navigator.clipboard?navigator.clipboard.writeText('hello@mayaokafor.com'):Promise.reject();
  p.then(function(){cb.textContent='Copied'},function(){cb.textContent='Press and hold the address to copy'});
  setTimeout(function(){cb.textContent='Copy email'},2400);
});
var c=$('#clock');
if(c){var tick=function(){try{c.textContent=new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit',timeZone:'Africa/Lagos'})+' in Lagos'}catch(e){c.textContent='Lagos'}};tick();setInterval(tick,30000)}
var fm=$('#cform');
if(fm)fm.addEventListener('submit',function(e){
  e.preventDefault();var d=new FormData(fm);
  var body='Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\nBudget: '+d.get('budget')+'\n\n'+d.get('note');
  $('#msg').textContent='Opening your email app. If nothing happens, write to hello@mayaokafor.com.';
  location.href='mailto:hello@mayaokafor.com?subject='+encodeURIComponent('Project enquiry: '+d.get('type'))+'&body='+encodeURIComponent(body);
});
})();
