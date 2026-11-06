(function(){
var lk=document.createElement('link');lk.rel='stylesheet';lk.href='extra.css';document.head.appendChild(lk);
var CATS=[{k:'audio',n:'Audio',e:'🎧'},{k:'wearables',n:'Wearables',e:'⌚'},{k:'computing',n:'Computing',e:'🖥️'},{k:'power',n:'Power',e:'🔋'},{k:'smart-home',n:'Smart home',e:'💡'}];
var P=[
{id:'aura-x',n:'Aura X Wireless Headphones',c:'audio',p:199,o:249,r:4.7,rv:2140,k:24,b:'Best seller',d:'Over-ear headphones with adaptive noise cancelling and a battery that lasts all week.',s:['40-hour battery life','Adaptive noise cancelling','Connects to two devices at once','Folds flat, weighs 260 g']},
{id:'pulse-buds',n:'Pulse Buds Pro',c:'audio',p:99,r:4.5,rv:3312,k:40,d:'Small earbuds with a secure fit, clear calls and a pocketable charging case.',s:['8 hours per charge, 32 with the case','IPX5 sweat and splash resistant','Three mics for clear calls']},
{id:'echo-mini',n:'Echo Mini Speaker',c:'audio',p:59,r:4.6,rv:1890,k:31,d:'A palm-sized Bluetooth speaker with surprisingly full sound.',s:['12-hour playtime','Waterproof and dustproof','Pairs with a second Echo for stereo']},
{id:'tempo-2',n:'Tempo Smartwatch 2',c:'wearables',p:179,o:229,r:4.4,rv:977,k:12,b:'Sale',d:'Track workouts, sleep and heart rate on a bright always-on display.',s:['7-day battery','Built-in GPS','5 ATM water resistance','Works with iPhone and Android']},
{id:'keystone-k1',n:'Keystone K1 Mechanical Keyboard',c:'computing',p:129,r:4.8,rv:864,k:4,b:'New',d:'A compact wireless keyboard with hot-swappable switches and a solid aluminium body.',s:['75% layout, 82 keys','Hot-swappable switches','Bluetooth, 2.4 GHz or USB-C','Up to 4 months per charge']},
{id:'glide-mouse',n:'Glide Wireless Mouse',c:'computing',p:45,r:4.5,rv:2210,k:58,d:'A quiet, comfortable mouse that tracks on almost any surface.',s:['Silent clicks','Tracks on glass','70-day battery on one AA']},
{id:'lumen-27',n:'Lumen 27 4K Monitor',c:'computing',p:349,o:399,r:4.6,rv:412,k:9,d:'A sharp 27-inch 4K display with accurate color and a single-cable USB-C connection.',s:['3840 x 2160 IPS panel','99% sRGB, factory calibrated','65 W USB-C charging','Height-adjustable stand']},
{id:'stack-hub',n:'Stack 8-in-1 USB-C Hub',c:'computing',p:55,r:4.4,rv:1304,k:36,d:'Turn one USB-C port into HDMI, Ethernet, SD card and more.',s:['4K HDMI at 60 Hz','Gigabit Ethernet','100 W pass-through charging']},
{id:'brick-20k',n:'Brick 20K Power Bank',c:'power',p:49,r:4.7,rv:2780,k:3,b:'Best seller',d:'Charges a phone four times or a laptop once, and it is allowed in carry-on bags.',s:['20,000 mAh','65 W USB-C output','Charges three devices at once']},
{id:'volt-100',n:'Volt 100W GaN Charger',c:'power',p:59,o:69,r:4.8,rv:1658,k:27,d:'One small charger for your laptop, phone and tablet.',s:['100 W total output','Three ports, two USB-C','Folding plug, half the size of a laptop brick']},
{id:'nest-cam',n:'Nest Indoor Camera',c:'smart-home',p:69,r:4.3,rv:731,k:19,d:'1080p indoor camera with night vision and person alerts.',s:['1080p HD with night vision','Two-way audio','Local storage, no subscription needed']},
{id:'glow-4',n:'Glow Smart Bulb, 4-pack',c:'smart-home',p:34,r:4.5,rv:1980,k:44,d:'Color and white smart bulbs that work with all major voice assistants.',s:['16 million colors','No hub required','Schedules and scenes in the app']}
];
var DEFS=`<defs><linearGradient id='dk' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#4b4e57'/><stop offset='1' stop-color='#1b1c20'/></linearGradient><linearGradient id='sv' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#f6f6f8'/><stop offset='1' stop-color='#c4c7ce'/></linearGradient><linearGradient id='bl' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#5ab0ff'/><stop offset='1' stop-color='#0a63d9'/></linearGradient><pattern id='kp' width='18' height='16' patternUnits='userSpaceOnUse'><rect x='2' y='2' width='14' height='12' rx='3' fill='#fff' stroke='#c3c6cd'/></pattern></defs>`;
var ART={
'aura-x':`<path d='M52 112V92a48 48 0 0 1 96 0v20' fill='none' stroke='url(#dk)' stroke-width='9' stroke-linecap='round'/><rect x='36' y='100' width='32' height='56' rx='15' fill='url(#dk)'/><rect x='132' y='100' width='32' height='56' rx='15' fill='url(#dk)'/><rect x='60' y='110' width='9' height='36' rx='4.5' fill='#8a8d96'/><rect x='131' y='110' width='9' height='36' rx='4.5' fill='#8a8d96'/><circle cx='50' cy='128' r='4' fill='url(#bl)'/><circle cx='150' cy='128' r='4' fill='url(#bl)'/>`,
'pulse-buds':`<rect x='52' y='98' width='96' height='64' rx='30' fill='url(#sv)' stroke='#c3c6cd'/><path d='M52 122h96' stroke='#c3c6cd' stroke-width='2'/><circle cx='100' cy='142' r='4' fill='#34c759'/><g fill='#fff' stroke='#c3c6cd' stroke-width='2'><circle cx='78' cy='62' r='14'/><rect x='86' y='62' width='9' height='32' rx='4.5'/><circle cx='122' cy='62' r='14'/><rect x='105' y='62' width='9' height='32' rx='4.5'/></g>`,
'echo-mini':`<rect x='60' y='56' width='80' height='100' rx='32' fill='url(#dk)'/><g stroke='#6b6f78' stroke-width='3' stroke-linecap='round'><path d='M78 92h44M78 108h44M78 124h44'/></g><circle cx='100' cy='73' r='5' fill='url(#bl)'/>`,
'tempo-2':`<rect x='78' y='14' width='44' height='172' rx='20' fill='#2b2d33'/><rect x='54' y='54' width='92' height='92' rx='28' fill='url(#sv)' stroke='#c3c6cd'/><rect x='63' y='63' width='74' height='74' rx='21' fill='#0c0d10'/><circle cx='100' cy='100' r='22' fill='none' stroke='#34c759' stroke-width='6' stroke-dasharray='92 46' stroke-linecap='round'/><path d='M100 89v13l9 6' stroke='#fff' stroke-width='4' fill='none' stroke-linecap='round'/><rect x='146' y='88' width='6' height='22' rx='3' fill='#c4c7ce'/>`,
'keystone-k1':`<rect x='20' y='64' width='160' height='78' rx='14' fill='url(#sv)' stroke='#c3c6cd'/><rect x='28' y='74' width='144' height='48' fill='url(#kp)'/><rect x='62' y='126' width='76' height='9' rx='4' fill='#fff' stroke='#c3c6cd'/><rect x='34' y='78' width='16' height='10' rx='3' fill='url(#bl)'/>`,
'glide-mouse':`<path d='M100 30c-32 0-46 24-46 54v32c0 30 19 52 46 52s46-22 46-52V84c0-30-14-54-46-54z' fill='url(#sv)' stroke='#c3c6cd' stroke-width='2'/><path d='M100 30v54M54 86h92' stroke='#c3c6cd' stroke-width='2'/><rect x='94' y='50' width='12' height='24' rx='6' fill='url(#dk)'/>`,
'lumen-27':`<rect x='20' y='34' width='160' height='102' rx='10' fill='#14151a'/><rect x='27' y='41' width='146' height='88' rx='5' fill='url(#bl)'/><path d='M27 112c32-32 52 10 84-12s42-14 62-4v33H27z' fill='#fff' opacity='.25'/><path d='M90 136h20l7 28H83z' fill='url(#sv)'/><rect x='62' y='162' width='76' height='9' rx='4.5' fill='url(#sv)' stroke='#c3c6cd'/>`,
'stack-hub':`<path d='M36 100H12' stroke='#2b2d33' stroke-width='7' stroke-linecap='round'/><rect x='34' y='74' width='134' height='52' rx='14' fill='url(#sv)' stroke='#c3c6cd'/><g fill='#2b2d33'><rect x='48' y='92' width='22' height='12' rx='3'/><rect x='78' y='92' width='22' height='12' rx='3'/><rect x='108' y='92' width='22' height='12' rx='3'/><rect x='138' y='92' width='20' height='12' rx='3'/></g>`,
'brick-20k':`<rect x='64' y='26' width='72' height='148' rx='20' fill='url(#dk)'/><rect x='64' y='92' width='72' height='34' fill='url(#bl)'/><path d='M104 98l-11 15h9l-4 11 13-16h-9z' fill='#fff'/><rect x='82' y='46' width='36' height='6' rx='3' fill='#34c759'/><rect x='88' y='156' width='24' height='5' rx='2.5' fill='#6b6f78'/>`,
'volt-100':`<rect x='78' y='30' width='9' height='30' rx='2' fill='#9a9ca4'/><rect x='113' y='30' width='9' height='30' rx='2' fill='#9a9ca4'/><rect x='56' y='56' width='88' height='92' rx='20' fill='#fff' stroke='#c3c6cd' stroke-width='2'/><path d='M101 70l-9 14h8l-4 12 11-16h-8z' fill='#0a84ff'/><rect x='72' y='112' width='24' height='14' rx='6' fill='#2b2d33'/><rect x='104' y='112' width='24' height='14' rx='6' fill='#2b2d33'/>`,
'nest-cam':`<ellipse cx='100' cy='160' rx='38' ry='10' fill='url(#sv)' stroke='#c3c6cd'/><rect x='86' y='128' width='28' height='30' rx='7' fill='url(#sv)'/><circle cx='100' cy='86' r='50' fill='url(#sv)' stroke='#c3c6cd' stroke-width='2'/><circle cx='100' cy='86' r='36' fill='#0c0d10'/><circle cx='100' cy='86' r='17' fill='url(#bl)'/><circle cx='93' cy='79' r='5' fill='#fff' opacity='.7'/>`,
'glow-4':`<circle cx='100' cy='78' r='66' fill='#ffd54a' opacity='.18'/><path d='M100 26c-31 0-52 23-52 50 0 18 10 28 19 38 4 6 6 12 6 20h54c0-8 2-14 6-20 9-10 19-20 19-38 0-27-21-50-52-50z' fill='#ffe58a'/><ellipse cx='82' cy='62' rx='10' ry='19' fill='#fff' opacity='.5' transform='rotate(20 82 62)'/><rect x='74' y='136' width='52' height='10' rx='3' fill='url(#sv)'/><rect x='80' y='148' width='40' height='10' rx='3' fill='#9a9ca4'/><rect x='88' y='160' width='24' height='8' rx='4' fill='#6b6f78'/>`
};
var REV=[{n:'Amara O.',r:5,t:'Exactly as described and arrived quickly. Setup took two minutes.'},{n:'Luis M.',r:4,t:'Great value for the price. I only wish the box included a longer cable.'},{n:'Priya S.',r:5,t:'Bought a second one for the office. It has been rock solid for months.'}];
var $=function(s){return document.querySelector(s)};
var m=function(n){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n)};
var get=function(id){return P.find(function(p){return p.id===id})};
var root=document.documentElement;try{var th=localStorage.getItem('volt-theme');if(th)root.dataset.theme=th}catch(e){}
var pg=document.body.dataset.page,qs=new URLSearchParams(location.search);
var cart={},promo='',wish={},rvw=[];
try{cart=JSON.parse(localStorage.getItem('volt-cart'))||{};promo=localStorage.getItem('volt-promo')||'';wish=JSON.parse(localStorage.getItem('volt-wish'))||{};rvw=JSON.parse(localStorage.getItem('volt-rv'))||[]}catch(e){}
function pic(p){return p.img?`<img class='photo' src='${p.img}' alt='${p.n}' loading='lazy'>`:`<svg class='art' viewBox='0 0 200 200' role='img' aria-label='${p.n}'>${DEFS}<ellipse cx='100' cy='182' rx='52' ry='6' fill='#000' opacity='.1'/>${ART[p.id]}</svg>`}
function eta(a,b){var f=function(n){var d=new Date();d.setDate(d.getDate()+n);return d.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'})};return f(a)+' – '+f(b)}
function badge(){var b=$('#cc'),w=$('#wc');if(b)b.textContent=Object.keys(cart).reduce(function(a,k){return a+cart[k]},0);if(w){var n=Object.keys(wish).length;w.textContent=n||'';}}
function save(){try{localStorage.setItem('volt-cart',JSON.stringify(cart));localStorage.setItem('volt-promo',promo);localStorage.setItem('volt-wish',JSON.stringify(wish))}catch(e){}badge()}
var tt;function toast(s,href,lab){var t=$('#toast');t.textContent=s;if(href){var a=document.createElement('a');a.href=href;a.textContent=lab;t.appendChild(a)}t.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){t.classList.remove('on')},2800)}
function add(id,q){cart[id]=Math.min(10,(cart[id]||0)+(q||1));save();toast(get(id).n+' added','cart.html','View cart')}
function totals(){var sub=0;Object.keys(cart).forEach(function(k){var p=get(k);if(p)sub+=p.p*cart[k]});var d=promo==='VOLT10'?Math.round(sub*10)/100:0;var s=sub===0||sub-d>=50?0:6;return{sub:sub,d:d,s:s,t:sub-d+s}}
function sumHtml(x){return `<div class='sr'><span>Subtotal</span><span>${m(x.sub)}</span></div>${x.d?`<div class='sr off'><span>Code VOLT10</span><span>−${m(x.d)}</span></div>`:''}<div class='sr'><span>Shipping</span><span>${x.s?m(x.s):'Free'}</span></div><div class='sr tot'><span>Total</span><span>${m(x.t)}</span></div>`}
function card(p){return `<article class='card'><a class='tile' href='product.html?id=${p.id}' aria-label='${p.n}'>${p.b?`<span class='bdg'>${p.b}</span>`:''}${p.o?`<span class='off-b'>−${Math.round((1-p.p/p.o)*100)}%</span>`:''}${pic(p)}</a><button class='heart' data-w='${p.id}' aria-pressed='${!!wish[p.id]}' aria-label='Save ${p.n}'>${wish[p.id]?'♥':'♡'}</button><div class='ci'><a class='cn' href='product.html?id=${p.id}'>${p.n}</a><div class='rt'>★ ${p.r} (${p.rv.toLocaleString()})</div><div class='pr'><b>${m(p.p)}</b>${p.o?`<s>${m(p.o)}</s>`:''}</div><button class='btn add' data-id='${p.id}'>Add to cart</button></div></article>`}
var cur=pg==='shop'?(qs.get('cat')||'all'):'';
$('#hdr').innerHTML=`<a class='skip' href='#main'>Skip to content</a><div class='bar'></div><div class='wrap'><header class='top'><a class='logo' href='index.html' aria-label='volt home'>volt<i></i></a><button class='tg' id='tg' aria-label='Toggle dark mode'>◐</button><a class='saved' href='wishlist.html' aria-label='Saved items'>♡ <span id='wc'></span></a><a class='cart' href='cart.html'>Cart <span id='cc'>0</span></a></header><nav class='cats' aria-label='Categories'><a href='shop.html'${cur==='all'?' aria-current=page':''}>All</a>${CATS.map(function(c){return `<a href='shop.html?cat=${c.k}'${cur===c.k?' aria-current=page':''}>${c.n}</a>`}).join('')}<a href='shop.html?cat=sale'${cur==='sale'?' aria-current=page':''}>Deals</a></nav></div>`;
$('#ftr').innerHTML=`<footer class='foot'><div class='wrap'><div class='fg'><div><b>Shop</b>${CATS.map(function(c){return `<a href='shop.html?cat=${c.k}'>${c.n}</a>`}).join('')}<a href='shop.html?cat=sale'>Deals</a></div><div><b>Your account</b><a href='cart.html'>Cart</a><a href='wishlist.html'>Saved items</a><a href='checkout.html'>Checkout</a></div><div><b>Our promise</b><a href='shop.html'>30-day returns</a><a href='shop.html'>2-year warranty</a><a href='shop.html'>Free shipping over $50</a></div></div><small>© 2026 volt. This is a demo store: no real orders are taken.</small></div></footer>`;
badge();
$('#tg').onclick=function(){var dk=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches,n=dk?'light':'dark';root.dataset.theme=n;try{localStorage.setItem('volt-theme',n)}catch(e){}};
function drawW(){var ids=Object.keys(wish).filter(get);$('#wl').innerHTML=ids.length?ids.map(function(i){return card(get(i))}).join(''):`<div class='empty' style='grid-column:1/-1'><h2>Nothing saved yet</h2><p>Tap the heart on any product to keep it here.</p><a class='btn' href='shop.html'>Browse products</a></div>`}
document.addEventListener('click',function(e){
  var b=e.target.closest('.add');if(b){add(b.dataset.id);return}
  var h=e.target.closest('.heart');if(!h)return;
  var id=h.dataset.w,on=!wish[id];if(on)wish[id]=1;else delete wish[id];save();
  document.querySelectorAll('.heart').forEach(function(x){if(x.dataset.w===id){x.setAttribute('aria-pressed',on);x.textContent=on?'♥':'♡'}});
  if(pg==='wish')drawW();else toast(on?'Saved for later':'Removed from saved',on?'wishlist.html':'','View saved');
});
function recent(skip,box,wrap){var l=rvw.filter(function(i){return i!==skip&&get(i)}).slice(0,4);if(l.length){$(wrap).hidden=false;$(box).innerHTML=l.map(function(i){return card(get(i))}).join('')}}
if(pg==='home'){
  $('#mos').innerHTML=['aura-x','keystone-k1','tempo-2','brick-20k'].map(function(id){var p=get(id);return `<a href='product.html?id=${id}' aria-label='${p.n}'>${pic(p)}</a>`}).join('');
  $('#cats').innerHTML=CATS.map(function(c){return `<a href='shop.html?cat=${c.k}'><span aria-hidden='true'>${c.e}</span>${c.n}</a>`}).join('');
  $('#feat').innerHTML=P.filter(function(p){return p.b}).map(card).join('');
  $('#deals').innerHTML=P.filter(function(p){return p.o}).slice(0,4).map(card).join('');
  recent('','#rec','#recw');
}
if(pg==='wish')drawW();
if(pg==='shop'){
  var st={q:'',cat:cur,sort:'pop',max:0};
  var ch=[{k:'all',n:'All'},{k:'sale',n:'Deals'}].concat(CATS);
  var draw=function(){
    var l=P.filter(function(p){return(st.cat==='all'||(st.cat==='sale'?!!p.o:p.c===st.cat))&&(!st.max||p.p<=st.max)&&(p.n+' '+p.d).toLowerCase().indexOf(st.q)>-1});
    l.sort(function(a,b){return st.sort==='low'?a.p-b.p:st.sort==='high'?b.p-a.p:st.sort==='rate'?b.r-a.r:b.rv-a.rv});
    $('#grid').innerHTML=l.map(card).join('')||`<div class='empty' style='grid-column:1/-1'>No products match. Try a different search, price or category.</div>`;
    $('#count').textContent=l.length+(l.length===1?' product':' products');
    $('#chips').innerHTML=ch.map(function(c){return `<button class='chip' data-k='${c.k}' aria-pressed='${st.cat===c.k}'>${c.n}</button>`}).join('');
  };
  $('#q').addEventListener('input',function(e){st.q=e.target.value.trim().toLowerCase();draw()});
  $('#sort').addEventListener('change',function(e){st.sort=e.target.value;draw()});
  $('#price').addEventListener('change',function(e){st.max=+e.target.value;draw()});
  $('#chips').addEventListener('click',function(e){var b=e.target.closest('.chip');if(b){st.cat=b.dataset.k;draw()}});
  draw();
}
if(pg==='product'){
  var p=get(qs.get('id')),box=$('#pd');
  if(!p){box.innerHTML=`<div class='empty'>We couldn’t find that product. <a href='shop.html'>Back to the shop</a></div>`;['#rvw','#relw'].forEach(function(s){$(s).hidden=true})}
  else{
    document.title=p.n+' – volt';var q=1;
    box.innerHTML=`<div class='big'>${p.b?`<span class='bdg'>${p.b}</span>`:''}<button class='heart' data-w='${p.id}' aria-pressed='${!!wish[p.id]}' aria-label='Save ${p.n}'>${wish[p.id]?'♥':'♡'}</button>${pic(p)}</div><div><p class='rt'>★ ${p.r} · ${p.rv.toLocaleString()} reviews</p><h1>${p.n}</h1><div class='price'><b>${m(p.p)}</b>${p.o?`<s>${m(p.o)}</s><span class='save'>Save ${m(p.o-p.p)}</span>`:''}</div><p>${p.d}</p><ul class='specs'>${p.s.map(function(s){return `<li>${s}</li>`}).join('')}</ul><p class='stock${p.k<=5?' low':''}'>${p.k<=5?'Only '+p.k+' left in stock':'In stock'}</p><div class='buy'><div class='qty'><button id='qm' aria-label='Decrease quantity'>−</button><span id='qv' aria-live='polite'>1</span><button id='qp' aria-label='Increase quantity'>+</button></div><button class='btn acc' id='ab'>Add to cart</button></div><p class='eta'>Arrives ${eta(3,5)}</p><p class='ship'>Free shipping over $50. 30-day returns. 2-year warranty.</p></div>`;
    $('#qm').onclick=function(){q=Math.max(1,q-1);$('#qv').textContent=q};
    $('#qp').onclick=function(){q=Math.min(10,q+1);$('#qv').textContent=q};
    $('#ab').onclick=function(){add(p.id,q)};
    var p5=Math.min(90,Math.round((p.r-3.2)*55)),p4=Math.round((100-p5)*.55),p3=Math.round((100-p5-p4)*.5),p2=Math.round((100-p5-p4-p3)/2),p1=100-p5-p4-p3-p2;
    $('#rv').innerHTML=`<div class='rvg'><div class='avg'><b>${p.r}</b><span class='rt'>out of 5, ${p.rv.toLocaleString()} ratings</span>${[p5,p4,p3,p2,p1].map(function(v,i){return `<div class='bar5'><span>${5-i}★</span><i style='--w:${v}%'></i><span>${v}%</span></div>`}).join('')}</div><div>${REV.map(function(r){return `<div class='rev'><span class='st' aria-label='${r.r} out of 5'>${'★'.repeat(r.r)}</span><b>${r.n}</b><p>${r.t}</p></div>`}).join('')}</div></div>`;
    $('#rel').innerHTML=P.filter(function(x){return x.c===p.c&&x.id!==p.id}).concat(P.filter(function(x){return x.c!==p.c})).slice(0,4).map(card).join('');
    recent(p.id,'#rec','#recw');
    rvw=[p.id].concat(rvw.filter(function(i){return i!==p.id})).slice(0,6);try{localStorage.setItem('volt-rv',JSON.stringify(rvw))}catch(e){}
    $('#sb').innerHTML=`<div>${p.n}<br><span class='rt'>${m(p.p)}</span></div><button class='btn' id='sab'>Add to cart</button>`;
    $('#sab').onclick=function(){add(p.id,q)};
    if('IntersectionObserver' in window)new IntersectionObserver(function(en){var on=!en[0].isIntersecting;$('#sb').classList.toggle('on',on);document.body.classList.toggle('hasbar',on)}).observe($('#ab'));
  }
}
if(pg==='cart'){
  var rc=function(){
    var ids=Object.keys(cart).filter(get);
    if(!ids.length){$('#cw').innerHTML=`<div class='empty'><h2>Your cart is empty</h2><p>Find something you’ll love.</p><a class='btn acc' href='shop.html'>Start shopping</a></div>`;return}
    var x=totals(),net=x.sub-x.d,need=50-net;
    $('#cw').innerHTML=`<div class='cwrap'><div><div class='prog'><p>${need>0?`You’re ${m(need)} away from free shipping.`:'You’ve unlocked free shipping.'}</p><div class='tr'><div class='fl' style='width:${Math.min(100,net/50*100)}%'></div></div></div><div class='cl'>${ids.map(function(id){var p=get(id);return `<div class='line'><div class='mt'>${pic(p)}</div><div><a href='product.html?id=${id}'>${p.n}</a><div class='qty'><button data-a='m' data-id='${id}' aria-label='Decrease ${p.n}'>−</button><span>${cart[id]}</span><button data-a='p' data-id='${id}' aria-label='Increase ${p.n}'>+</button></div></div><div><div class='lt'>${m(p.p*cart[id])}</div><button class='rm' data-a='r' data-id='${id}'>Remove</button></div></div>`}).join('')}</div></div><aside class='sum'><h2>Order summary</h2>${sumHtml(x)}<form class='pc' id='pf'><input id='pcode' placeholder='Promo code' aria-label='Promo code' value='${promo}'><button class='btn ghost' type='submit'>Apply</button></form><p class='note' id='pn'>${promo==='VOLT10'?'VOLT10 applied: 10% off.':'Try VOLT10 for 10% off.'}</p><a class='btn acc full' href='checkout.html' style='margin-top:1rem'>Checkout</a></aside></div>`;
  };
  $('#cw').addEventListener('click',function(e){var b=e.target.closest('[data-a]');if(!b)return;var id=b.dataset.id,a=b.dataset.a;
    if(a==='p')cart[id]=Math.min(10,cart[id]+1);else if(a==='m')cart[id]=cart[id]-1;else cart[id]=0;
    if(cart[id]<=0)delete cart[id];save();rc()});
  $('#cw').addEventListener('submit',function(e){e.preventDefault();var c=$('#pcode').value.trim().toUpperCase();
    if(c==='VOLT10'){promo=c;save();rc()}else{promo='';save();rc();$('#pn').textContent=c?'That code isn’t valid.':'Try VOLT10 for 10% off.'}});
  rc();
}
if(pg==='checkout'){
  var ids=Object.keys(cart).filter(get);
  if(!ids.length){$('#co').innerHTML=`<div class='empty'><h2>Nothing to check out</h2><p>Your cart is empty.</p><a class='btn acc' href='shop.html'>Browse products</a></div>`}
  else{
    var x=totals(),ex=0;
    var lines=ids.map(function(id){var p=get(id);return `<div class='sr'><span>${cart[id]} × ${p.n}</span><span>${m(p.p*cart[id])}</span></div>`}).join('');
    var paint=function(){$('#items').innerHTML=lines+sumHtml({sub:x.sub,d:x.d,s:x.s+ex,t:x.t+ex})};
    paint();
    $('#shipsel').addEventListener('change',function(e){ex=e.target.value==='express'?12:0;paint()});
    $('#cof').addEventListener('submit',function(e){e.preventDefault();var d=new FormData(e.target),no='VLT-'+Math.floor(10000+Math.random()*90000),when=d.get('ship')==='express'?eta(1,2):eta(3,5);
      cart={};promo='';save();
      $('#co').innerHTML=`<div class='ok'><p class='eyebrow'>Order confirmed</p><h1>Thanks, <span id='nm'></span>!</h1><p>Your order <b id='on'></b> would arrive ${when}. This is a demo store, so nothing was charged and nothing will ship.</p><a class='btn acc' href='shop.html'>Keep shopping</a></div>`;
      $('#nm').textContent=d.get('first');$('#on').textContent=no;window.scrollTo(0,0)});
  }
}
})();
