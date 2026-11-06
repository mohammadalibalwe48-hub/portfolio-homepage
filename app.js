(function(){
var T=['#dde6ff','#ffe2d3','#d8f1e4','#fff0bf','#eadfff','#d3eef5'];
var CATS=[{k:'audio',n:'Audio',e:'🎧'},{k:'wearables',n:'Wearables',e:'⌚'},{k:'computing',n:'Computing',e:'🖥️'},{k:'power',n:'Power',e:'🔋'},{k:'smart-home',n:'Smart home',e:'💡'}];
var P=[
{id:'aura-x',n:'Aura X Wireless Headphones',c:'audio',p:199,o:249,r:4.7,rv:2140,e:'🎧',t:0,b:'Best seller',d:'Over-ear headphones with adaptive noise cancelling and a battery that lasts all week.',s:['40-hour battery life','Adaptive noise cancelling','Connects to two devices at once','Folds flat, weighs 260 g']},
{id:'pulse-buds',n:'Pulse Buds Pro',c:'audio',p:99,r:4.5,rv:3312,e:'🎶',t:1,d:'Small earbuds with a secure fit, clear calls and a pocketable charging case.',s:['8 hours per charge, 32 with the case','IPX5 sweat and splash resistant','Three mics for clear calls']},
{id:'echo-mini',n:'Echo Mini Speaker',c:'audio',p:59,r:4.6,rv:1890,e:'🔊',t:2,d:'A palm-sized Bluetooth speaker with surprisingly full sound.',s:['12-hour playtime','Waterproof and dustproof','Pairs with a second Echo for stereo']},
{id:'tempo-2',n:'Tempo Smartwatch 2',c:'wearables',p:179,o:229,r:4.4,rv:977,e:'⌚',t:3,b:'Sale',d:'Track workouts, sleep and heart rate on a bright always-on display.',s:['7-day battery','Built-in GPS','5 ATM water resistance','Works with iPhone and Android']},
{id:'keystone-k1',n:'Keystone K1 Mechanical Keyboard',c:'computing',p:129,r:4.8,rv:864,e:'⌨️',t:4,b:'New',d:'A compact wireless keyboard with hot-swappable switches and a solid aluminium body.',s:['75% layout, 82 keys','Hot-swappable switches','Bluetooth, 2.4 GHz or USB-C','Up to 4 months per charge']},
{id:'glide-mouse',n:'Glide Wireless Mouse',c:'computing',p:45,r:4.5,rv:2210,e:'🖱️',t:5,d:'A quiet, comfortable mouse that tracks on almost any surface.',s:['Silent clicks','Tracks on glass','70-day battery on one AA']},
{id:'lumen-27',n:'Lumen 27 4K Monitor',c:'computing',p:349,o:399,r:4.6,rv:412,e:'🖥️',t:0,d:'A sharp 27-inch 4K display with accurate color and a single-cable USB-C connection.',s:['3840 x 2160 IPS panel','99% sRGB, factory calibrated','65 W USB-C charging','Height-adjustable stand']},
{id:'stack-hub',n:'Stack 8-in-1 USB-C Hub',c:'computing',p:55,r:4.4,rv:1304,e:'🔌',t:1,d:'Turn one USB-C port into HDMI, Ethernet, SD card and more.',s:['4K HDMI at 60 Hz','Gigabit Ethernet','100 W pass-through charging']},
{id:'brick-20k',n:'Brick 20K Power Bank',c:'power',p:49,r:4.7,rv:2780,e:'🔋',t:2,b:'Best seller',d:'Charges a phone four times or a laptop once, and it is allowed in carry-on bags.',s:['20,000 mAh','65 W USB-C output','Charges three devices at once']},
{id:'volt-100',n:'Volt 100W GaN Charger',c:'power',p:59,o:69,r:4.8,rv:1658,e:'⚡',t:3,d:'One small charger for your laptop, phone and tablet.',s:['100 W total output','Three ports, two USB-C','Folding plug, half the size of a laptop brick']},
{id:'nest-cam',n:'Nest Indoor Camera',c:'smart-home',p:69,r:4.3,rv:731,e:'📷',t:4,d:'1080p indoor camera with night vision and person alerts.',s:['1080p HD with night vision','Two-way audio','Local storage, no subscription needed']},
{id:'glow-4',n:'Glow Smart Bulb, 4-pack',c:'smart-home',p:34,r:4.5,rv:1980,e:'💡',t:5,d:'Color and white smart bulbs that work with all major voice assistants.',s:['16 million colors','No hub required','Schedules and scenes in the app']}
];
var $=function(s){return document.querySelector(s)};
var m=function(n){return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n)};
var get=function(id){return P.find(function(p){return p.id===id})};
var pg=document.body.dataset.page,qs=new URLSearchParams(location.search);
var cart={},promo='';
try{cart=JSON.parse(localStorage.getItem('volt-cart'))||{};promo=localStorage.getItem('volt-promo')||''}catch(e){}
function badge(){var b=$('#cc');if(b)b.textContent=Object.keys(cart).reduce(function(a,k){return a+cart[k]},0)}
function save(){try{localStorage.setItem('volt-cart',JSON.stringify(cart));localStorage.setItem('volt-promo',promo)}catch(e){}badge()}
var tt;function toast(s){var t=$('#toast');t.textContent=s;t.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){t.classList.remove('on')},2200)}
function add(id,q){cart[id]=Math.min(10,(cart[id]||0)+(q||1));save();toast(get(id).n+' added to cart')}
function totals(){var sub=0;Object.keys(cart).forEach(function(k){var p=get(k);if(p)sub+=p.p*cart[k]});var d=promo==='VOLT10'?Math.round(sub*10)/100:0;var s=sub===0||sub-d>=50?0:6;return{sub:sub,d:d,s:s,t:sub-d+s}}
function sumHtml(x){return `<div class='sr'><span>Subtotal</span><span>${m(x.sub)}</span></div>${x.d?`<div class='sr off'><span>Code VOLT10</span><span>−${m(x.d)}</span></div>`:''}<div class='sr'><span>Shipping</span><span>${x.s?m(x.s):'Free'}</span></div><div class='sr tot'><span>Total</span><span>${m(x.t)}</span></div>`}
function card(p){return `<article class='card'><a class='tile' style='--t:${T[p.t]}' href='product.html?id=${p.id}' aria-label='${p.n}'>${p.b?`<span class='bdg'>${p.b}</span>`:''}<span class='em' aria-hidden='true'>${p.e}</span></a><div class='ci'><a class='cn' href='product.html?id=${p.id}'>${p.n}</a><div class='rt'>★ ${p.r} (${p.rv.toLocaleString()})</div><div class='pr'><b>${m(p.p)}</b>${p.o?`<s>${m(p.o)}</s>`:''}</div><button class='btn add' data-id='${p.id}'>Add to cart</button></div></article>`}
var cur=pg==='shop'?(qs.get('cat')||'all'):'';
$('#hdr').innerHTML=`<a class='skip' href='#main'>Skip to content</a><div class='bar'>Free shipping on orders over $50 · 30-day returns</div><div class='wrap'><header class='top'><a class='logo' href='index.html' aria-label='volt home'>volt<i></i></a><a class='cart' href='cart.html'>Cart <span id='cc'>0</span></a></header><nav class='cats' aria-label='Categories'><a href='shop.html'${cur==='all'?' aria-current=page':''}>All</a>${CATS.map(function(c){return `<a href='shop.html?cat=${c.k}'${cur===c.k?' aria-current=page':''}>${c.n}</a>`}).join('')}</nav></div>`;
$('#ftr').innerHTML=`<footer class='foot'><div class='wrap'><div class='fg'><div><b>Shop</b>${CATS.map(function(c){return `<a href='shop.html?cat=${c.k}'>${c.n}</a>`}).join('')}</div><div><b>Help</b><a href='cart.html'>Your cart</a><a href='checkout.html'>Checkout</a><a href='shop.html'>All products</a></div><div><b>Our promise</b><a href='shop.html'>30-day returns</a><a href='shop.html'>2-year warranty</a><a href='shop.html'>Free shipping over $50</a></div></div><small>© 2026 volt. This is a demo store: no real orders are taken.</small></div></footer>`;
badge();
document.addEventListener('click',function(e){var b=e.target.closest('.add');if(b)add(b.dataset.id)});
if(pg==='home'){
  $('#mos').innerHTML=['aura-x','keystone-k1','tempo-2','brick-20k'].map(function(id){var p=get(id);return `<a style='--t:${T[p.t]}' href='product.html?id=${id}' aria-label='${p.n}'><span aria-hidden='true'>${p.e}</span></a>`}).join('');
  $('#cats').innerHTML=CATS.map(function(c){return `<a href='shop.html?cat=${c.k}'><span aria-hidden='true'>${c.e}</span>${c.n}</a>`}).join('');
  $('#feat').innerHTML=P.filter(function(p){return p.b}).map(card).join('');
}
if(pg==='shop'){
  var st={q:'',cat:cur,sort:'pop'};
  var ch=[{k:'all',n:'All'}].concat(CATS);
  var draw=function(){
    var l=P.filter(function(p){return(st.cat==='all'||p.c===st.cat)&&(p.n+' '+p.d).toLowerCase().indexOf(st.q)>-1});
    l.sort(function(a,b){return st.sort==='low'?a.p-b.p:st.sort==='high'?b.p-a.p:st.sort==='rate'?b.r-a.r:b.rv-a.rv});
    $('#grid').innerHTML=l.map(card).join('')||`<div class='empty'>No products match. Try a different search or category.</div>`;
    $('#count').textContent=l.length+(l.length===1?' product':' products');
    $('#chips').innerHTML=ch.map(function(c){return `<button class='chip' data-k='${c.k}' aria-pressed='${st.cat===c.k}'>${c.n}</button>`}).join('');
  };
  $('#q').addEventListener('input',function(e){st.q=e.target.value.trim().toLowerCase();draw()});
  $('#sort').addEventListener('change',function(e){st.sort=e.target.value;draw()});
  $('#chips').addEventListener('click',function(e){var b=e.target.closest('.chip');if(b){st.cat=b.dataset.k;draw()}});
  draw();
}
if(pg==='product'){
  var p=get(qs.get('id')),box=$('#pd');
  if(!p){box.innerHTML=`<div class='empty'>We couldn’t find that product. <a href='shop.html'>Back to the shop</a></div>`}
  else{
    document.title=p.n+' – volt';var q=1;
    box.innerHTML=`<div class='big' style='--t:${T[p.t]}'>${p.b?`<span class='bdg'>${p.b}</span>`:''}<span aria-hidden='true'>${p.e}</span></div><div><p class='rt'>★ ${p.r} · ${p.rv.toLocaleString()} reviews</p><h1>${p.n}</h1><div class='price'><b>${m(p.p)}</b>${p.o?`<s>${m(p.o)}</s><span class='save'>Save ${m(p.o-p.p)}</span>`:''}</div><p>${p.d}</p><ul class='specs'>${p.s.map(function(s){return `<li>${s}</li>`}).join('')}</ul><div class='buy'><div class='qty'><button id='qm' aria-label='Decrease quantity'>−</button><span id='qv' aria-live='polite'>1</span><button id='qp' aria-label='Increase quantity'>+</button></div><button class='btn acc' id='ab'>Add to cart</button></div><p class='ship'>Free shipping over $50. 30-day returns. 2-year warranty.</p></div>`;
    $('#qm').onclick=function(){q=Math.max(1,q-1);$('#qv').textContent=q};
    $('#qp').onclick=function(){q=Math.min(10,q+1);$('#qv').textContent=q};
    $('#ab').onclick=function(){add(p.id,q)};
    $('#rel').innerHTML=P.filter(function(x){return x.c===p.c&&x.id!==p.id}).concat(P.filter(function(x){return x.c!==p.c})).slice(0,4).map(card).join('');
  }
}
if(pg==='cart'){
  var rc=function(){
    var ids=Object.keys(cart).filter(get);
    if(!ids.length){$('#cw').innerHTML=`<div class='empty'><h2>Your cart is empty</h2><p>Find something you’ll love.</p><a class='btn acc' href='shop.html'>Start shopping</a></div>`;return}
    var x=totals();
    $('#cw').innerHTML=`<div class='cwrap'><div class='cl'>${ids.map(function(id){var p=get(id);return `<div class='line'><div class='mt' style='--t:${T[p.t]}' aria-hidden='true'>${p.e}</div><div><a href='product.html?id=${id}'>${p.n}</a><div class='qty'><button data-a='m' data-id='${id}' aria-label='Decrease ${p.n}'>−</button><span>${cart[id]}</span><button data-a='p' data-id='${id}' aria-label='Increase ${p.n}'>+</button></div></div><div><div class='lt'>${m(p.p*cart[id])}</div><button class='rm' data-a='r' data-id='${id}'>Remove</button></div></div>`}).join('')}</div><aside class='sum'><h2>Order summary</h2>${sumHtml(x)}<form class='pc' id='pf'><input id='pcode' placeholder='Promo code' aria-label='Promo code' value='${promo}'><button class='btn ghost' type='submit'>Apply</button></form><p class='note' id='pn'>${promo==='VOLT10'?'VOLT10 applied: 10% off.':'Try VOLT10 for 10% off.'}</p><a class='btn acc full' href='checkout.html' style='margin-top:1rem'>Checkout</a></aside></div>`;
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
    var x=totals();
    $('#items').innerHTML=ids.map(function(id){var p=get(id);return `<div class='sr'><span>${cart[id]} × ${p.n}</span><span>${m(p.p*cart[id])}</span></div>`}).join('')+sumHtml(x);
    $('#cof').addEventListener('submit',function(e){e.preventDefault();var d=new FormData(e.target),no='VLT-'+Math.floor(10000+Math.random()*90000);
      cart={};promo='';save();
      $('#co').innerHTML=`<div class='ok'><p class='eyebrow'>Order confirmed</p><h1>Thanks, <span id='nm'></span>!</h1><p>Your order <b id='on'></b> is confirmed. This is a demo store, so nothing was charged and nothing will ship.</p><a class='btn acc' href='shop.html'>Keep shopping</a></div>`;
      $('#nm').textContent=d.get('first');$('#on').textContent=no;window.scrollTo(0,0)});
  }
}
})();
