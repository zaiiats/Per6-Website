(function(){"use strict";const ce=()=>{if(!document.querySelector('link[data-google-fonts="inter"]')){const e=document.createElement("link");e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap",e.setAttribute("data-google-fonts","inter"),document.head.appendChild(e)}},se={mobile:/Mobi|Android|iPhone|iPod|iPad/i.test(navigator.userAgent)||navigator.userAgent.includes("Macintosh")&&"ontouchend"in document,web:typeof window<"u"&&typeof document<"u",ios:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),android:/Android/.test(navigator.userAgent),windows:/Windows/.test(navigator.userAgent),mac:/Macintosh/.test(navigator.userAgent)};window.OS=se;function le(e){const t=localStorage.getItem("search-widget__recentQueries"),n=t?JSON.parse(t):[];return{container:e,data:{},dashboardData:{},inputText:"",suggestionText:"",category:"",autoCompletion:[],page:1,localPage:1,brands:{},fixedBrands:[],watchedPage:0,bestForYouPage:0,popularPage:0,recentQueries:n,isWrappingMobile:window.innerWidth<=800,debounce:300,timer:null,searchInput:null,observer:null,placeholderTimeout:null,interval:null,saveQueryTimer:null,newFormattedItems:{},newFormattedCategories:{},languages:"",minPrice:0,maxPrice:1e4,minPriceChoosen:0,maxPriceChoosen:1e4}}function W(e,t,n){var i,d;const r={default:{default:{bg:"#FFFFFF",mtc:"#000000"},design1:{bg:"#FFFFFF",mtc:"#191919"}},type1:{default:{bg:"#444444",mtc:"#000000"}}};return r!=null&&r[e]?((i=r[e])==null?void 0:i[t][n])??((d=r[e])==null?void 0:d.default[n]):r.default.default[n]}function de(e,t=2){const n=Math.max(0,Math.min(15,t));return e>=8?Math.max(0,e-n):Math.min(15,e+n)}function ue(e,t=2){const n=e.replace("#","").toLowerCase();return n.length!==6?e:`#${n.split("").map(i=>de(parseInt(i,16),t)).map(i=>i.toString(16)).join("")}`}function pe(e,t,n,r){document.documentElement.style.setProperty("--search-widget--accent-color",e),document.documentElement.style.setProperty("--search-widget--main-bg-color",t),document.documentElement.style.setProperty("--search-widget--black-text",n);const i=ue(t);document.documentElement.style.setProperty("--search-widget--sec-bg-color",i)}const O="default",V="default",Z="PMF3YLZRYTZVNDZDSWUS9CQED32MHQHCS5EJLKACHFUQCHPLCEQFMAPV5XU4NV9R",Q="https://api.find-iq.com/services",ge="#C0392B",me=W(O,V,"bg"),he=W(O,V,"mtc"),fe="https://find-iq.com/wp-content/uploads/2024/11/logo.svg",ve=!0,be=!0,_e=!0,Ce={discountSticker:{name:"Акція",bgColor:"#a44",textColor:"#fff"},topSalesSticker:{name:"Хіт продажів",bgColor:"#44a",textColor:"#fff"},newSticker:{name:"Новинка",bgColor:"#770",textColor:"#fff"},popularSticker:{name:"Популярний",bgColor:"#077",textColor:"#fff"},forOrderSticker:{name:"Під замовлення",bgColor:"#707",textColor:"#fff"},endingSticker:{name:"Закінчується",bgColor:"#555",textColor:"#fff"},bestPriceSticker:{name:"Краща ціна",bgColor:"#555",textColor:"#fff"},recommendSticker:{name:"Рекомендуємо",bgColor:"#555",textColor:"#fff"},customSticker:{name:"Лімітована",bgColor:"#FF0066",textColor:"#FFF"}},we=(navigator.language||"uk").split(/[-_.]/)[0].toLowerCase();pe(ge,me,he);const H=[{name:"Холодильник Edler ED-227DDW",category:"Холодильники",image:"https://find-iq.com/image/cache/catalog/products/8636/5043/U0919847_big-200x200.webp",brand:"Edler",price:245.350006,specialprice:.2,quantity:1,currency:"USD"},{name:"Набір для експериментів 4М Холодильниколаз (00-03391)",category:"Ігрові набори",image:"https://find-iq.com/image/cache/catalog/products/7471/4504/U0380865_big-200x200.webp",brand:"4М",price:10.26,specialprice:0,quantity:0,currency:"USD"},{name:"Пральна машина Candy CSOW4965TWE/1-S",category:"Пральні машини",image:"https://find-iq.com/image/cache/catalog/products/8635/1085/U0766378_big-200x200.webp",brand:"Candy",price:392.230011,specialprice:0,quantity:0,currency:"USD"},{name:"Аксесуар до мікроскопів Konus Поляризаційний набір (5129)",category:"Оптичні прилади",image:"https://find-iq.com/image/cache/catalog/products/8694/10494/U0848266_big-200x200.webp",brand:"Konus",price:77.419998,specialprice:0,quantity:0,currency:"USD"},{name:"Підзорна труба Kowa TSN-99A 30-70x99/45 Prominar Kit (12264) (930605)",category:"Оптичні прилади",image:"https://find-iq.com/image/cache/catalog/products/8694/5881/U0905422_big-200x200.webp",brand:"Kowa",price:4190.47998,specialprice:0,quantity:0,currency:"USD"},{name:"Підзорна труба Vortex Razor HD 22-48x65/45 (RS-65A) (930596)",category:"Оптичні прилади",image:"https://find-iq.com/image/cache/catalog/products/8694/5363/U0926442_big-200x200.webp",brand:"Vortex",price:1393.560059,specialprice:0,quantity:0,currency:"USD"},{name:"Підзорна труба Vortex Razor HD 27-60x85/45 WP (924479)",category:"Оптичні прилади",image:"https://find-iq.com/image/cache/catalog/products/8694/5363/U0578014_big-200x200.webp",brand:"Vortex",price:1749.300049,specialprice:0,quantity:0,currency:"USD"},{name:"Охолодження для пам'яті Gelid Solutions Lumen RGB RAM Memory Cooling Red (GZ-RGB-02)",category:"Акссесуари до систем охолодження",image:"https://find-iq.com/image/cache/catalog/products/7889/9315/U0797314_big-200x200.webp",brand:"Gelid Solutions",price:16.02,specialprice:0,quantity:0,currency:"USD"},{name:"Охолодження для пам'яті Be quiet! MC1 PRO (BZ003)",category:"Акссесуари до систем охолодження",image:"https://find-iq.com/image/cache/catalog/products/7889/3166/U0722464_big-200x200.webp",brand:"Be quiet!",price:11.78,specialprice:0,quantity:0,currency:"USD"},{name:"Охолодження для пам'яті Gelid Solutions Lumen RGB RAM Memory Cooling Black (GZ-RGB-01)",category:"Акссесуари до систем охолодження",image:"https://find-iq.com/image/cache/catalog/products/7889/5982/U0515023_big-200x200.webp",brand:"Gelid Solutions",price:16.34,specialprice:0,quantity:0,currency:"USD"},{name:"Охолодження для пам'яті Be quiet! MC1 (BZ002)",category:"Акссесуари до систем охолодження",image:"https://find-iq.com/image/cache/catalog/products/7889/3166/U0722463_big-200x200.webp",brand:"Be quiet!",price:9.17,specialprice:0,quantity:0,currency:"USD"},{name:"Мультиварка Hölmer HMC-11В",category:"Мультиварки",image:"https://find-iq.com/image/cache/catalog/products/7281/5233/U0738764_big-200x200.webp",brand:"Hölmer",price:29.4,specialprice:0,quantity:0,currency:"USD"},{name:"Мультиварка Brock MC 6601 SS (MC6601SS)",category:"Мультиварки",image:"https://find-iq.com/image/cache/catalog/products/7281/9589/U0827205_big-200x200.webp",brand:"Brock",price:77.910004,specialprice:0,quantity:0,currency:"USD"},{name:"Мультиварка Hölmer HMC-31SS",category:"Мультиварки",image:"https://find-iq.com/image/cache/catalog/products/7281/5233/U0885197_big-200x200.webp",brand:"Hölmer",price:37.240002,specialprice:0,quantity:0,currency:"USD"},{name:"Мультиварка Tefal RK740532",category:"Мультиварки",image:"https://find-iq.com/image/cache/catalog/products/7281/1068/U0755421_big-200x200.webp",brand:"Tefal",price:119.25,specialprice:0,quantity:0,currency:"USD"}],ye=H.slice().sort(()=>Math.random()-.5),Se=H.slice().sort(()=>Math.random()-.5),Le=["Холодильники","Сумки","Шкарпетки","Смартфони"],xe={Iphone:3,Niva:3,LOROTEL:3},ke=["Холодильники","Телевізори","Шукатори"],x=new Map,B=e=>e&&Array.isArray(e)?[...e].sort():e,Ee=({inputText:e,category:t,page:n,brands:r,min:i,max:d})=>{const l=JSON.stringify({inputText:e,category:t,page:n,brands:B(r),min:i,max:d});return x.get(l)||null};async function $e({inputText:e,category:t="",page:n=1,brands:r=[],minPrice:i,maxPrice:d}){if(!e)return;const l=B(r),s=JSON.stringify({inputText:e,category:t,page:n,brands:l,minPrice:i,maxPrice:d});if(x.has(s))return x.get(s);let a=`${Q}/search?keyword=${encodeURIComponent(e)}`;t&&(a+=`&category=${encodeURIComponent(t)}`),n&&n>1&&(a+=`&page=${n}`),l!=null&&l.length&&(a+=`&brand=${l.join(",")}`),i!=null&&d!=null&&(a+=`&minPrice=${i}&maxPrice=${d}`);try{const o=await fetch(a,{headers:{Authorization:`Bearer ${Z}`}});if(!o.ok)throw new Error(`Fetch error: ${o.status}`);const c=await o.json();console.log(c);const g={Apple:123,Samsung:87,Xiaomi:42,Asus:15},p=["Iphone 13","Iphone","Iphone 14"];if(c!=null&&c.data)return c.data.brands=g,c.data.tags=p,x.set(s,c.data),c.data}catch(o){console.error("Error fetching or parsing data:",o)}}async function Me({inputText:e,category:t="",page:n=1,brands:r=[],minPrice:i,maxPrice:d}){if(!e)return;const l=n+1,s=B(r),a=JSON.stringify({inputText:e,category:t,page:l,brands:s,minPrice:i,maxPrice:d});if(x.has(a))return;let o=`${Q}/search?keyword=${encodeURIComponent(e)}`;t&&(o+=`&category=${encodeURIComponent(t)}`),o+=`&page=${l}`,s!=null&&s.length&&(o+=`&brand=${s.join(",")}`),i!=null&&d!=null&&(o+=`&minPrice=${i}&maxPrice=${d}`);try{console.log("Prefetch URL:",o);const c=await fetch(o,{headers:{Authorization:`Bearer ${Z}`}});if(!c.ok)throw new Error(`Prefetch failed: ${c.status}`);const g=await c.json();g&&g.data&&x.set(a,g.data)}catch(c){console.error("Error prefetching:",c)}}async function K(){try{const e={popularQueries:Le,watchedProducts:H,bestForYouProducts:ye,popularProducts:Se,popularBrands:xe,placeholders:ke},t=localStorage.getItem("search-widget__recentQueries"),n=t?JSON.parse(t):[];return e.recentQueries=n,x.set("dashboard",e),e}catch(e){console.error("Error prefetching:",e)}}function Te(){return x.get("dashboard")}const Pe=["discountSticker","topSalesSticker","newSticker","popularSticker","forOrderSticker","endingSticker","bestPriceSticker","recommendSticker","customSticker"];function qe({stickers:e}){let t='<ul class="stickersContainer">';return e.forEach(n=>{const r=Pe[n];if(!r)return;const i=Ce[r];i&&(t+=`
      <li class="stickerContainer" style="
        background-color: ${i.bgColor};
        color: ${i.textColor};
      ">
        ${i.name}
      </li>
    `)}),t+="</ul>",t}function F({item:e,type:t="small"}){const n=document.createElement("div");n.className=`item item--${t}`,e.stickers=[6,7,8];const r=Number(e.price),i=Number(e.specialprice),d=e.stickers?qe({stickers:e.stickers}):"";return n.innerHTML=`
    <div class='item__image-container'>
      ${e.image?`<img
              class="item__image"
              src="${e.image}"
              alt="Category"
            />`:`<svg class='svg svg--no-image' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <g stroke-width='1.5'>
              <circle cx='16.5' cy='7.5' r='1.5' />
              <path d='m2 14.1354c.66663-.0899 1.3406-.1343 2.01569-.1327 2.85594-.0561 5.64192.7702 7.86081 2.3315 2.058 1.4479 3.504 3.4407 4.1235 5.6658' stroke-linejoin='round' />
              <path d='m13.5 17.5c1-1 1.6772-1.2232 2.5-1.5' stroke-linecap='round' stroke-linejoin='round' />
              <path d='m20 20.2132c-1.3988 1.2869-3.6365 1.2869-8 1.2869-4.47834 0-6.71751 0-8.10876-1.3912-1.39124-1.3913-1.39124-3.6304-1.39124-8.1088 0-4.36357 0-6.60128 1.28701-8.0001' />
              <g stroke-linecap='round' stroke-linejoin='round'>
                <path d='m20.0002 16c.5425 0 1.0478.2945 1.3965.5638.1033-1.1945.1033-2.6813.1033-4.5638 0-4.47834 0-6.71751-1.3912-8.10876-1.3913-1.39124-3.6305-1.39124-8.1088-1.39124-2.40914 0-4.17028 0-5.5.21659' />
                <path d='m2 2 20 20' />
              </g>
            </g>
          </svg>`}
      ${d}
    </div>
    <div class='item__description'>
      <p class='item__name'>
        ${e.name}
      </p>
      <span class='item__price'>
        <div class='item__price--main'>
          <div class='${i!==0?"item__price--main-price--small":""}'>
            ${r.toFixed(2)} ${e.currency||"$"}
            ${i!==0?"<div class='item__price--crossed'></div>":""}
          </div>
          ${i!==0?`<div class='item__price--new'>
                ${(r-r*i).toFixed(2)} ${e.currency||"$"}
                <p class='item__discount'>-${i*100}%</p>
              </div>`:""}
        </div>
        ${e.quantity===0?"<p class='item__quantity'>Немає у наявності</p>":""}
      </span>
    </div>
  `,n}function Ie({page:e,isDisabledBack:t,isDisabledForward:n}){const r=document.createElement("footer");return r.innerHTML=`
    <footer class='itemsContainer__footer'>
      ${e!==0?`
        <button class="itemsContainer__button minus ${t?"disabled":""}" 
          ${t?'disabled="disabled"':""}>
          <svg class='svg svg--footer-arrow' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <g strokeLinecap='round' strokeLinejoin='round'>
              <path d='M4 12h16' />
              <path d='M9 7l-5 5 5 5' />
            </g>
          </svg>
        </button>
      `:""}

      <button class="itemsContainer__button add ${n?"disabled":""}" 
        ${n?'disabled="disabled"':""}>
        <svg class='svg svg--footer-arrow' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <g strokeLinecap='round' strokeLinejoin='round'>
            <path d='M20 12H4' />
            <path d='M15 17l5-5-5-5' />
          </g>
        </svg>

        ${e!==0?`
          <div class='itemsContainer__page-indicator'>
            ${e+1}
          </div>
        `:""}
      </button>
    </footer>
  `,r}function P({name:e,type:t="full",withoutArrow:n=!1,withClear:r=!1,clearHistory:i}){var a;const d=document.createElement("header");d.setAttribute("data-key",e),d.className="category__header",d.style=t==="full"?"border-bottom: var(--search-widget--border-black); color: var(--search-widget--black-text);":"";let s=`<h2 ${t==="part"?"style='border-bottom: var(--search-widget--border-black)'":""} class='category__name'>${e}</h2>`;return n||(s+=`
      <div class='category__arrow-container'>
        <svg
          class='svg svg--arrow'
          fill='none'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g stroke-linecap='round' stroke-linejoin='round'>
            <path d='M20 12H4' />
            <path d='M15 17l5-5-5-5' />
          </g>
        </svg>
      </div>`),r&&(s+="<h2 class='category__name category__clear'>Очистити</h2>"),d.innerHTML=s,r&&((a=d==null?void 0:d.querySelector(".category__clear"))==null||a.addEventListener("click",()=>{i==null||i()})),d}function N({className:e,titleText:t,products:n,widget:r,size:i="big",handleSimplePagePress:d}){var g,p;if(!n||n.length===0)return;const l=document.createElement("div");l.className=`${e}__container section__container`;const s=r.isWrappingMobile?3:6,a=document.createElement("header");a.className=`${e} complex-section`,a.style.gridTemplateColumns=r.isWrappingMobile?"repeat(3, 1fr)":"repeat(6, 1fr)",l.appendChild(P({name:t,type:"part",withoutArrow:!0})),(n==null?void 0:n.slice(r[`${e}Page`]*s,r[`${e}Page`]*s+s)).forEach(b=>a.appendChild(F({item:b,type:i}))),l.appendChild(a);const c=Ie({page:r[`${e}Page`],isDisabledBack:r[`${e}Page`]===0,isDisabledForward:r[`${e}Page`]===Math.ceil(n.length/s)-1});return(g=c.querySelector(".add"))==null||g.addEventListener("click",()=>d("add",e,r)),(p=c.querySelector(".minus"))==null||p.addEventListener("click",()=>d("minus",e,r)),l.appendChild(c),l}const z="search-widget__recentQueries",He=10,Be=()=>JSON.parse(localStorage.getItem(z)??"[]"),Fe=e=>localStorage.setItem(z,JSON.stringify(e)),A=async({q:e,state:t,type:n})=>{let r=Be();return n==="minus"&&e?r=r.filter(i=>i!==e):n==="add"&&e?r.includes(e)||(r.unshift(e),r.length>He&&r.pop()):n==="minusAll"&&(r=[]),Fe(r),t.recentQueries=r,r};function G({className:e,titleText:t,items:n,widget:r,withClear:i,clearHistory:d,updateResults:l}){const s=document.createElement("div");s.className=`${e}Container section__container`,s.appendChild(P({name:t,type:"none",withoutArrow:!0,withClear:i,clearHistory:d}));const a=document.createElement("ul");if(a.className=`${e} simple-section`,!(!n||(n==null?void 0:n.length)===0))return i?(n.forEach(o=>{a.innerHTML+=`<li class="dashboard__label--simple label--no-border">
          <svg class="svg category__backup" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99999 1.66669C7.86364 1.67278 5.81123 2.49912 4.26666 3.97502V2.50002C4.26666 2.27901 4.17886 2.06704 4.02258 1.91076C3.8663 1.75448 3.65434 1.66669 3.43332 1.66669C3.21231 1.66669 3.00035 1.75448 2.84407 1.91076C2.68779 2.06704 2.59999 2.27901 2.59999 2.50002V6.25002C2.59999 6.47103 2.68779 6.683 2.84407 6.83928C3.00035 6.99556 3.21231 7.08335 3.43332 7.08335H7.18332C7.40434 7.08335 7.6163 6.99556 7.77258 6.83928C7.92886 6.683 8.01666 6.47103 8.01666 6.25002C8.01666 6.02901 7.92886 5.81705 7.77258 5.66076C7.6163 5.50448 7.40434 5.41669 7.18332 5.41669H5.18332C6.25481 4.29699 7.68291 3.58557 9.2221 3.40474C10.7613 3.22392 12.3154 3.585 13.6172 4.42589C14.919 5.26678 15.8872 6.53495 16.3553 8.01235C16.8233 9.48974 16.7621 11.0841 16.182 12.5212C15.6019 13.9583 14.5393 15.1484 13.1768 15.8869C11.8143 16.6255 10.2371 16.8662 8.71629 16.5678C7.19551 16.2694 5.82621 15.4505 4.84382 14.2519C3.86142 13.0532 3.32731 11.5498 3.33332 10C3.33332 9.77901 3.24553 9.56705 3.08925 9.41077C2.93297 9.25449 2.721 9.16669 2.49999 9.16669C2.27898 9.16669 2.06701 9.25449 1.91073 9.41077C1.75445 9.56705 1.66666 9.77901 1.66666 10C1.66666 11.6482 2.1554 13.2594 3.07108 14.6298C3.98675 16.0002 5.28824 17.0683 6.81096 17.699C8.33368 18.3297 10.0092 18.4948 11.6257 18.1732C13.2423 17.8517 14.7271 17.058 15.8925 15.8926C17.058 14.7271 17.8517 13.2423 18.1732 11.6258C18.4947 10.0093 18.3297 8.33371 17.699 6.81099C17.0683 5.28827 16.0002 3.98679 14.6297 3.07111C13.2593 2.15543 11.6482 1.66669 9.99999 1.66669ZM9.99999 6.66669C9.77898 6.66669 9.56702 6.75448 9.41073 6.91077C9.25445 7.06705 9.16666 7.27901 9.16666 7.50002V10C9.16666 10.221 9.25445 10.433 9.41073 10.5893C9.56702 10.7456 9.77898 10.8334 9.99999 10.8334H11.6667C11.8877 10.8334 12.0996 10.7456 12.2559 10.5893C12.4122 10.433 12.5 10.221 12.5 10C12.5 9.77901 12.4122 9.56705 12.2559 9.41077C12.0996 9.25449 11.8877 9.16669 11.6667 9.16669H10.8333V7.50002C10.8333 7.27901 10.7455 7.06705 10.5892 6.91077C10.433 6.75448 10.221 6.66669 9.99999 6.66669Z"/>
          </svg>
        ${o}
        <svg
          class='svg dashboard__label--delete'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19 4.99988L5 18.9999M5 4.99988L19 18.9999'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>  
      </li>`}),a.querySelectorAll(".dashboard__label--delete").forEach(o=>{var g;const c=((g=o==null?void 0:o.parentElement)==null?void 0:g.innerText.trim())||"";o.addEventListener("click",p=>{p.stopPropagation(),A({q:c,type:"minus",state:r}),l()})})):n.forEach(o=>{a.innerHTML+=`<li class="dashboard__label--simple">${o}</li>`}),s.appendChild(a),s}function J({brands:e,fixedBrands:t,handleBrandPress:n,titleType:r}){if(!e||e.length===0)return;const i=document.createElement("div");i.className="brands-container";const d=P(r==="regular"?{name:"Бренди",withoutArrow:!0}:{name:"Популярні бренди",type:"none",withoutArrow:!0});i.appendChild(d);const l=document.createElement("ul");l.className="brands-container__row";const s=document.createElement("ul");return s.className="brands-container__row",Object.entries(e).forEach(([a,o])=>{const c=document.createElement("li");c.dataset.name=a,c.innerHTML+=`
        <svg style="stroke:none" class="svg" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_4807_2940)">
            <path d="M3.4375 1.875C4.29937 1.875 5 2.57563 5 3.4375C5 4.29938 4.29937 5 3.4375 5C2.57562 5 1.875 4.29938 1.875 3.4375C1.875 2.57563 2.57562 1.875 3.4375 1.875ZM3.4375 4.375C3.95438 4.375 4.375 3.95438 4.375 3.4375C4.375 2.92062 3.95438 2.5 3.4375 2.5C2.92062 2.5 2.5 2.92062 2.5 3.4375C2.5 3.95438 2.92062 4.375 3.4375 4.375Z" fill="var(--search-widget--grey-text)"/>

            <path d="M0.312344 0H5.93734C6.02047 0 6.09984 0.033125 6.15859 0.09125L14.9086 8.84125C15.0305 8.96313 15.0305 9.16125 14.9086 9.28312L9.28359 14.9081C9.22234 14.9694 9.14234 15 9.06234 15C8.98234 15 8.90234 14.9694 8.84109 14.9088L0.091094 6.15875C0.0329685 6.1 -0.000156403 6.02063 -0.000156403 5.9375V0.3125C-0.000156403 0.14 0.139844 0 0.312344 0ZM3.43734 5C4.29922 5 4.99984 4.29875 4.99984 3.4375C4.99984 2.57625 4.29922 1.875 3.43734 1.875C2.57547 1.875 1.87484 2.57625 1.87484 3.4375C1.87484 4.29875 2.57547 5 3.43734 5Z" fill="var(--search-widget--grey-text)"/>
          </g>
          <defs>
            <clipPath id="clip0_4807_2940">
              <rect width="15" height="15" fill="white" transform="matrix(-1 0 0 1 15 0)"/>
            </clipPath>
          </defs>
        </svg>
      `,c.innerHTML+=`<span>${a}</span>`,t.includes(a)?(c.className="brand-item fixed",c.innerHTML+=`<svg 
          class='svg brand-item__svg--delete'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M19 4.99988L5 18.9999M5 4.99988L19 18.9999'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>  `,s.appendChild(c)):(c.className="brand-item not-fixed",c.innerHTML+=`
        <span class="brand-item__quantity">
          ${o}
        </span>
      `,l.appendChild(c))}),i.appendChild(l),i.appendChild(s),i.querySelectorAll(".brand-item").forEach(o=>{const c=o;c.addEventListener("click",()=>{const g=c.dataset.name;console.log(g),g&&n(g)})}),i}function Ne({widget:e,isWrappingMobile:t,dashboardData:n,updateResults:r,handleInput:i,handleSimplePagePress:d,handleBrandPress:l}){const s=document.createElement("div");s.id="search-widget__dashboard";const a=[];{console.log("1");const o=G({className:"popularQueries",titleText:"Популярні запити:",items:n.popularQueries,widget:e,updateResults:r});o&&a.push(o)}{const o=G({className:"recentQueries",titleText:"Історія запитів:",items:e.recentQueries,widget:e,withClear:!0,clearHistory:()=>{A({type:"minusAll",state:e}),r()},updateResults:r});o&&a.push(o)}{const o=N({className:"watched",titleText:"Переглянуті товари:",products:n.watchedProducts,widget:e,size:t?"big":"small",handleSimplePagePress:d});o&&a.push(o)}{const o=N({className:"bestForYou",titleText:"Найкращі пропозиції для вас:",products:n.bestForYouProducts,widget:e,handleSimplePagePress:d});o&&a.push(o)}{const o=N({className:"popular",titleText:"Популярні товари:",products:n.popularProducts,widget:e,handleSimplePagePress:d});o&&a.push(o)}{const o=J({brands:n.popularBrands,fixedBrands:[],handleBrandPress:c=>{e.searchInput.value=c,i(c)},titleType:"dashboard"});o&&a.push(o)}return a.forEach(o=>{o&&s.appendChild(o)}),a.length===0&&(s.innerHTML='<div class="empty__container">Почніть пошук</div>'),s.querySelectorAll(".dashboard__label--simple").forEach(o=>{const c=o;c.addEventListener("click",()=>{e.searchInput.value=c.innerText,i(c.innerText)})}),s}function Ae({min:e,max:t,chosenMin:n,chosenMax:r,onSubmit:i}){const d=document.createElement("div");d.className="price-filter__container";const l=h=>new Intl.NumberFormat("uk-UA").format(h),s=h=>parseInt(h.replace(/\s/g,""),10);d.innerHTML=`
    <div class="price_filter--top">
      <span>Ціна:</span>
      <input type="text" class="price-filter__input input-min" value="${l(n)}">
      <input type="text" class="price-filter__input input-max" value="${l(r)}">
      <button class="price-filter__btn">OK</button>
    </div>
    <div class="price_filter__bottom">
      <input type="range" min="${e}" max="${t}" value="${n}" class="range range-min">
      <input type="range" min="${e}" max="${t}" value="${r}" class="range range-max">
    </div>
  `;const a=d.querySelector(".input-min"),o=d.querySelector(".input-max"),c=d.querySelector(".range-min"),g=d.querySelector(".range-max"),p=d.querySelector(".price-filter__btn"),b=()=>{const h=s(a==null?void 0:a.value),f=s(o==null?void 0:o.value);d.style.setProperty("--minVal",h.toString()),d.style.setProperty("--maxVal",f.toString()),d.style.setProperty("--max",t.toString())},_=()=>{let h=s(a.value),f=s(o.value);(isNaN(h)||h<e)&&(h=e),(isNaN(f)||f>t)&&(f=t),h>f-1&&(h=f-1,h<e&&(h=e)),f<h+1&&(f=h+1,f>t&&(f=t)),a.value=l(h),o.value=l(f),c.value=h.toString(),g.value=f.toString(),b()};return a.addEventListener("input",()=>{const h=s(a.value);a.value=l(isNaN(h)?e:h),_()}),o.addEventListener("input",()=>{const h=s(o.value);o.value=l(isNaN(h)?t:h),_()}),c.addEventListener("input",()=>{a.value=l(Number(c.value)),_()}),g.addEventListener("input",()=>{o.value=l(Number(g.value)),_()}),p==null||p.addEventListener("click",()=>{const h=s(a.value),f=s(o.value);i(h,f)}),_(),d}function De({newFormattedCategories:e,category:t,brands:n,fixedBrands:r,min:i,max:d,chosenMin:l,chosenMax:s,handleCategoryPress:a,handleBrandPress:o,handlePricePress:c}){const g=Object.values(e).reduce((f,y)=>f+y,0),p=document.createElement("section");if(p.id="search-widget__sidebar",t&&_e){const f=Ae({min:i,max:d,chosenMin:l,chosenMax:s,onSubmit:c});p.appendChild(f)}const b=document.createElement("section");b.className="sidebar__list",b.innerHTML=`
    <header class='sidebar__header'>
      <div class='sidebar__item no-hover'>
        <div class='sidebar__item-desciption'>
          <p class='sidebar__item-name' style="font-weight: 600">
            ${t||"Фільтр по категорії"}
          </p>
          <svg
            class='svg svg--dropdown'
            fill='none'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m6 9 5.2929 5.2929c.3333.3333.5.5.7071.5s.3738-.1667.7071-.5l5.2929-5.2929'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
        <p class='sidebar__item-num'>
          ${t?e[t]:g}
        </p>
      </div>
    </header>
    <ul class='sidebar__dropdown'>
      <li class='sidebar__item ${t===""?"active":""}'>
        <p class='sidebar__item-name'>Всі категорії</p>
        <p class='sidebar__item-num'>${g}</p>
      </li>
    </ul>
  `;const _=b.querySelector(".sidebar__dropdown"),h=Object.entries(e).map(([f,y])=>`<li data-key="${f}" class="sidebar__item ${t===f?"active":""}">
        <p class="sidebar__item-name">${f}</p>
        <p class="sidebar__item-num">${y}</p>
      </li>`);if(_==null||_.insertAdjacentHTML("beforeend",h.join("")),_==null||_.querySelectorAll("li[data-key]").forEach(f=>{f.addEventListener("click",function(){this.dataset.key&&a(this.dataset.key)})}),p.appendChild(b),Object.values(n).length>0&&be){const f=J({brands:n,fixedBrands:r,handleBrandPress:o});p.appendChild(f)}return p}function Ue({newFormattedItems:e,newFormattedCategories:t,category:n,displayPage:r,categoriesContent:i,isDisabledBack:d,isDisabledForward:l,dynamicMaxPage:s,localPage:a,isWrappingMobile:o,handleCategoryPress:c,handlePagePress:g}){var _,h,f;const p=document.createElement("div");p.id="search-widget__items-wrapper";const b=document.createElement("section");if(b.id="search-widget__items-container",n==="")b.style.gap="1.5em",e?Object.entries(e).forEach(([y,k])=>{var $,q;if(y==="count"||y==="max_page")return;const C=document.createElement("li");C.className="category";const S=P({name:y}),L=document.createElement("ul");L.className="category_list",k.data.forEach(U=>{L.appendChild(F({item:U}))});const I=`
          <footer data-key="${y}" class='category__footer'>
            ${t[y]-k.data.length>0?`Ще ${t[y]-k.data.length}...`:"Перейти до категорії"}
          </footer>
        `;C.appendChild(S),C.appendChild(L),C.insertAdjacentHTML("beforeend",I),($=C==null?void 0:C.querySelector(".category__header"))==null||$.addEventListener("click",function(){this.dataset.key&&c(this.dataset.key)}),(q=C==null?void 0:C.querySelector(".category__footer"))==null||q.addEventListener("click",function(){this.dataset.key&&c(this.dataset.key)}),b.appendChild(C),p.appendChild(b)}):b.insertAdjacentHTML("afterend","Не знайдено нічого за цим запитом! Спробуйте інший запит.");else{const y=P({name:n});b.style.cssText="column-gap: 1.5em; padding: 0;",i.forEach(L=>{b.appendChild(F({item:L}))});const k=`
      ${s===1?"<div></div>":`
          <footer class='itemsContainer__footer'>
            ${r!==1?`
              <button class="itemsContainer__button minus ${d?"disabled":""}" 
                ${d?'disabled="disabled"':""}>
                <svg class='svg svg--footer-arrow' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <g strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M4 12h16' />
                    <path d='M9 7l-5 5 5 5' />
                  </g>
                </svg>
              </button>
            `:""}
    
            <button class="itemsContainer__button add ${l?"disabled":""}" 
              ${l?'disabled="disabled"':""}>
              <svg class='svg svg--footer-arrow' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <g strokeLinecap='round' strokeLinejoin='round'>
                  <path d='M20 12H4' />
                  <path d='M15 17l5-5-5-5' />
                </g>
              </svg>
    
              ${r!==1?`
                <div class='itemsContainer__page-indicator'>
                  ${r}
                </div>
              `:""}
            </button>
          </footer>
        `}
    `;p.appendChild(y),p.appendChild(b),s!==0&&p.insertAdjacentHTML("beforeend",k),(_=p==null?void 0:p.querySelector(".category__header"))==null||_.addEventListener("click",function(){this.dataset.key&&c(this.dataset.key)});let C=!1;const S=L=>{if(!C){if(C=!0,L==="add"){if(o&&a!==3){g("add",r,s),C=!1;return}}else if(L==="minus"&&o&&a!==1){g("minus",r,s),C=!1;return}setTimeout(()=>{g(L,r,s),C=!1},200)}};(h=p==null?void 0:p.querySelector(".add"))==null||h.addEventListener("click",()=>S("add")),(f=p==null?void 0:p.querySelector(".minus"))==null||f.addEventListener("click",()=>S("minus"))}return p}function Re({suggestionText:e,handleSuggestionTextPress:t,widget:n}){var i;const r=document.createElement("div");return r.className="suggestion-container",r.innerHTML=`
    <div class="suggestion-text">
      Відображення результатів для запиту <span>${e}</span>
    </div>
  `,(i=r==null?void 0:r.querySelector(".suggestion-text span"))==null||i.addEventListener("click",()=>{t(e)}),r}function je({tags:e,handleTagsPress:t,searchWidget:n}){const r=document.createElement("div");r.className="autoCompletion";const i=(l,s)=>{const a=l.toLowerCase();let o="",c=0;for(;c<l.length;){const g=s.map(p=>p.toLowerCase()).find(p=>a.startsWith(p,c));g?(o+=`<span class="autoCompletion__text--added">${l.substr(c,g.length)}</span>`,c+=g.length):(o+=l[c],c++)}return o};return e.forEach(l=>{const s=n.inputText.trim(),a=l.toLowerCase(),o=s.toLowerCase(),c=s.split(/\s+/).filter(Boolean);let g=l;a.includes(o)?g=i(l,[s]):o.includes(a)?g=`<span class="autoCompletion__text--added">${l}</span>`:c.some(p=>a.includes(p.toLowerCase()))&&(g=i(l,c)),r.innerHTML+=`
      <span class="autoCompletion__item" data-name="${l}">
        <svg
          fill='none'
          class='svg svg--search'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g strokeLinejoin='round'>
            <path d='m17.5 17.5 4.5 4.5' strokeLinecap='round' />
            <path d='m20 11c0-4.97056-4.0294-9-9-9-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9 4.9706 0 9-4.0294 9-9z' />
          </g>
        </svg>
        <span class="autoCompletion__text">
          ${g}
        </span>
      </span>
    `}),r.querySelectorAll(".autoCompletion__item").forEach(l=>{const s=l;s.addEventListener("click",()=>{var o;const a=((o=s.dataset.name)==null?void 0:o.trim())||"";t(a)})}),r}const D=(e,...t)=>String.raw({raw:e},...t);D`
  <section id="search-widget__input">
    <form class="search__form">
      <div class="search__left-container">
        <div class="search__svg--search-container">
          <svg
            viewBox="0 0 18 19"
            class="svg svg--search"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.42742 15.3927C8.9247 15.3927 10.3278 14.9407 11.4955 14.1685L15.6201 18.3025C15.8932 18.5662 16.2416 18.698 16.6183 18.698C17.3999 18.698 17.9743 18.0859 17.9743 17.3138C17.9743 16.9559 17.8519 16.6075 17.5882 16.3438L13.4919 12.2287C14.3394 11.0233 14.8385 9.56368 14.8385 7.98165C14.8385 3.90416 11.5049 0.570591 7.42742 0.570591C3.35934 0.570591 0.0163574 3.90416 0.0163574 7.98165C0.0163574 12.0592 3.34992 15.3927 7.42742 15.3927ZM7.42742 13.4152C4.44228 13.4152 1.9939 10.9668 1.9939 7.98165C1.9939 4.99651 4.44228 2.54813 7.42742 2.54813C10.4126 2.54813 12.8609 4.99651 12.8609 7.98165C12.8609 10.9668 10.4126 13.4152 7.42742 13.4152Z"
            />
          </svg>
        </div>
        <input class="search__input" type="text" />
      </div>

      <button class="search__button--clear search__button--hidden" type="reset">
        <svg
          class="svg svg--clear"
          viewBox="0 0 22 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6251 16.4286H20.6429C20.9465 16.4286 21.201 16.5312 21.4063 16.7366C21.6117 16.942 21.7144 17.1964 21.7144 17.5C21.7144 17.8036 21.6117 18.058 21.4063 18.2634C21.201 18.4687 20.9465 18.5714 20.6429 18.5714H14.4822L16.6251 16.4286ZM3.68758 18.5714C3.54472 18.5714 3.40633 18.5446 3.2724 18.4911C3.13847 18.4375 3.01793 18.3571 2.91079 18.25L0.955433 16.2946C0.544719 15.8839 0.334897 15.375 0.325969 14.7679C0.31704 14.1607 0.517933 13.6429 0.928647 13.2143L12.7144 1C13.1251 0.571429 13.6295 0.357143 14.2278 0.357143C14.826 0.357143 15.3304 0.562501 15.7411 0.973215L21.0715 6.30357C21.4822 6.71429 21.6876 7.22321 21.6876 7.83036C21.6876 8.4375 21.4822 8.94643 21.0715 9.35714L12.3929 18.25C12.2858 18.3571 12.1653 18.4375 12.0313 18.4911C11.8974 18.5446 11.759 18.5714 11.6161 18.5714H3.68758ZM11.1608 16.4286L19.5715 7.80357L14.2679 2.5L2.42865 14.7143L4.14293 16.4286H11.1608Z"
          />
        </svg>
      </button>
    </form>
    <button class="search__button--close" type="reset">
      <svg
        class="svg svg--delete"
        viewBox="0 0 12 13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.313364 10.9346C-0.0557767 11.3037 -0.0733548 11.9629 0.322153 12.3408C0.700083 12.7363 1.36805 12.7188 1.73719 12.3496L5.99989 8.08691L10.2626 12.3496C10.6405 12.7275 11.2909 12.7363 11.6688 12.3408C12.0643 11.9629 12.0556 11.3037 11.6776 10.9258L7.41493 6.66309L11.6776 2.40918C12.0556 2.02246 12.0643 1.37207 11.6688 0.994141C11.2909 0.598633 10.6405 0.607422 10.2626 0.985352L5.99989 5.24805L1.73719 0.985352C1.36805 0.616211 0.700083 0.598633 0.322153 0.994141C-0.0733548 1.37207 -0.0557767 2.03125 0.313364 2.40039L4.57606 6.66309L0.313364 10.9346Z"
        />
      </svg>
    </button>
  </section>

  
`;const We=D`
  <section
    id="search-widget__input"
    style="grid-template-columns: ${"auto 1fr auto"}"
  >
    ${D`
          <div class="search__logo">
            <img
              class="search__logo-img"
              src=${fe}
              class="search__logo-img"
            />
          </div>
        `}
    <form action="" method="get" class="search__form">
      <div class="search__left-container">
        <div class="search__svg--search-container">
          <svg
            fill="none"
            class="svg svg--search"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeLinejoin="round">
              <path d="m17.5 17.5 4.5 4.5" strokeLinecap="round" />
              <path
                d="m20 11c0-4.97056-4.0294-9-9-9-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9 4.9706 0 9-4.0294 9-9z"
              />
            </g>
          </svg>
        </div>
        <input class="search__input" type="text" />
      </div>

      <button class="search__button--clear search__button--hidden" type="reset">
        <svg
          class="svg svg--clear"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4791 32.4536H14.771C13.7133 32.4536 12.719 32.0419 11.9716 31.2946L7.22162 26.5446C6.47429 25.7973 6.06262 24.8029 6.06262 23.7453C6.06262 22.6876 6.47429 21.6948 7.22162 20.9459L25.5645 2.60301C25.8622 2.30534 26.3879 2.30534 26.684 2.60301L37.7673 13.6863C38.076 13.9951 38.076 14.497 37.7673 14.8058L21.2785 31.2946C20.5311 32.0419 19.5368 32.4536 18.4791 32.4536ZM26.125 4.28134L8.34104 22.0669C7.89296 22.515 7.64596 23.1119 7.64596 23.7468C7.64596 24.3818 7.89296 24.9771 8.34104 25.4268L13.091 30.1768C13.5407 30.6248 14.136 30.8718 14.771 30.8718H18.4807C19.1156 30.8718 19.711 30.6248 20.1606 30.1768L36.089 14.2453L26.125 4.28134Z"
            fill="#999"
          />

          <path
            d="M24.5417 27.7036C24.339 27.7036 24.1363 27.626 23.9812 27.4724L12.8978 16.3891C12.5891 16.0803 12.5891 15.5784 12.8978 15.2697C13.2066 14.9609 13.7085 14.9609 14.0172 15.2697L25.1006 26.353C25.4093 26.6618 25.4093 27.1637 25.1006 27.4724C24.947 27.626 24.7443 27.7036 24.5417 27.7036Z"
            fill="#999"
          />

          <path
            d="M8.70833 32.4536H0.791667C0.354667 32.4536 0 32.0989 0 31.6619C0 31.2249 0.354667 30.8703 0.791667 30.8703H8.70833C9.14533 30.8703 9.5 31.2249 9.5 31.6619C9.5 32.0989 9.14533 32.4536 8.70833 32.4536Z"
            fill="#999"
          />

          <path
            d="M22.9583 35.6203H8.70829C8.27129 35.6203 7.91663 35.2656 7.91663 34.8286C7.91663 34.3916 8.27129 34.0369 8.70829 34.0369H22.9583C23.3953 34.0369 23.75 34.3916 23.75 34.8286C23.75 35.2656 23.3953 35.6203 22.9583 35.6203Z"
            fill="#999"
          />
        </svg>
      </button>
    </form>
    <button class="search__button--close" type="reset">
      <svg
        class="svg svg--delete"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 4.99988L5 18.9999M5 4.99988L19 18.9999"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </section>
`;function Oe(){return{renderDashboard:Ne,renderSidebar:De,renderItemsContainer:Ue,renderSuggestion:Re,createTags:je}}function Ve(){return{renderSearchInput:We}}function Ze(e){if(e.observer)return;const t=e.container.querySelector("#search-widget__input-wrapper"),n=e.container.querySelector("#threshold");if(!t||!n){console.error("❌ Missing inputWrapper or threshold element");return}e.observer=new IntersectionObserver(r=>{r.forEach(i=>{i.isIntersecting?t.style.borderBottom=e.isWrappingMobile?"var(--search-widget--border-black)":"transparent":t.style.borderBottom="var(--search-widget--border-black)"})},{root:e.container,threshold:1}),e.observer.observe(n)}let Y,X,ee,te;async function Qe(e,t){const{renderDashboard:n,renderSidebar:r,renderItemsContainer:i,renderSuggestion:d,createTags:l}=await Oe();Y=n,X=r,ee=i,te=l;const s=async()=>{t.render(),Ze(e),U();const u=e.container.querySelector(".search__input");e.searchInput=u,e.dashboardData=await K(),e.placeholderValues=e.dashboardData.placeholders,u.addEventListener("input",m=>b(m.currentTarget.value)),e.language=we},a=()=>{var u;console.log("openWidget"),e.container.style.display="grid",e.container.style.fontSize="16px",e.container.style.overflow="",document.documentElement.style.overflow="hidden",window.scrollTo({behavior:"smooth",top:0}),window.OS.web&&!window.OS.mobile&&((u=e.searchInput)==null||u.focus()),p(),t.startReplacingPlaceholder()},o=()=>{const u=e.container;u&&(u.classList.add("closing"),u.addEventListener("animationend",()=>{u.style.display="none",u.classList.remove("closing"),c(),t.stopReplacingPlaceholder(),e.container.style.overflow="hidden",document.documentElement.style.overflow=""},{once:!0}),I())},c=()=>{Object.assign(e,{data:{},inputText:"",category:"",suggestionText:"",page:1,localPage:1,minPriceChoosen:0,maxPriceChoosen:1e4,brands:{},fixedBrands:[]}),e.searchInput.value="",e.searchInput.placeholder="",e.container.querySelector("#search-widget__suggestion").innerHTML="",g(),t.startReplacingPlaceholder(),e.searchInput.focus()},g=()=>{var ie,ae;const u=e.container.querySelector("#search-widget__results"),m=e.container.querySelector("#search-widget__suggestion");if(u.innerHTML="",m.innerHTML="",!e.inputText){u.appendChild(Y({widget:e,isWrappingMobile:e.isWrappingMobile,dashboardData:e.dashboardData,updateResults:p,handleInput:b,handleSimplePagePress:k}));return}if(!e.data||Object.keys(e.data).length===0||e.data.msg||e.data.hits_total===0){u.innerHTML='<div class="empty__container">Немає результатів, спробуйте інший запит!</div>';return}if((ie=e==null?void 0:e.data)!=null&&ie.error){u.innerHTML='<div class="empty__container">Помилка, спробуйте пізніше!</div>';return}if((ae=e.data.categories)!=null&&ae.length)e.newFormattedCategories={},e.newFormattedItems={},e.data.categories.forEach(({key:E,count:T,hits:j})=>{e.newFormattedCategories[E]=T,Array.isArray(j)&&j.length&&(e.newFormattedItems[E]={data:j})});else{const E={};e.data.hits.forEach(T=>{E[T.category]=E[T.category]||[],E[T.category].push(T)}),e.newFormattedItems=E}const v=e.isWrappingMobile?e.localPage+(e.page-1)*3:0,w=e.isWrappingMobile?v:e.page,M=e.isWrappingMobile?Math.ceil(e.newFormattedCategories[e.category]/4):e.data.pages_total;e.data.brands&&(e.brands=e.data.brands);const re=X({newFormattedCategories:e.newFormattedCategories,category:e.category,brands:e.brands,fixedBrands:e.fixedBrands,min:e.minPrice,max:e.maxPrice,chosenMin:e.minPriceChoosen,chosenMax:e.maxPriceChoosen,handleCategoryPress:_,handleBrandPress:h,handlePricePress:f});e.data.tags&&ve&&m.appendChild(te({tags:e.data.tags,handleTagsPress:C,searchWidget:e}));const oe=(e.localPage-1)*4;let R=[];e.category&&(e.isWrappingMobile?R=Object.values(e.newFormattedItems).flat().slice(oe,oe+4):R=Object.values(e.newFormattedItems).flat());const Je=ee({newFormattedItems:e.newFormattedItems,newFormattedCategories:e.newFormattedCategories,category:e.category,displayPage:w,categoriesContent:R,isDisabledBack:w<=1,isDisabledForward:w>=M,dynamicMaxPage:M,localPage:e.localPage,isWrappingMobile:e.isWrappingMobile,handleCategoryPress:_,handlePagePress:y});u.appendChild(re),u.appendChild(Je),L(re)},p=async u=>{if(!e.inputText){const w=Te()??await K();return e.data=w,g(),e.dashboardData=w,console.log(w),w}e.page!==1&&Me({inputText:e.inputText,category:e.category,page:e.page,brands:e.fixedBrands,minPrice:e.minPriceChoosen,maxPrice:e.maxPriceChoosen});const m=Ee({inputText:e.inputText,category:e.category,page:e.page,brands:e.fixedBrands,min:e.minPriceChoosen,max:e.maxPriceChoosen});if(m){e.data=m,g();return}const v=async()=>{e.data=await $e({inputText:e.inputText,category:e.category,page:e.page,brands:e.fixedBrands,minPrice:e.minPrice,maxPrice:e.maxPrice}),g()};u==="input"?(clearTimeout(e.timer),e.timer=setTimeout(v,e.debounce)):await v()},b=u=>{const m=u.trim().replace(/[^\p{L}\d\s]/gu,"");e.inputText=m,e.category="",e.page=1;const v=e.container.querySelector(".search__button--clear");m?(v==null||v.classList.remove("search__button--hidden"),t.stopReplacingPlaceholder()):(v==null||v.classList.add("search__button--hidden"),t.startReplacingPlaceholder()),(!m||m.length>=3)&&p("input"),clearTimeout(e.saveQueryTimer),m.length>=3&&(e.saveQueryTimer=setTimeout(()=>{A({q:m,state:e,type:"add"})},3e3))},_=u=>{e.category!==u&&(e.category=u,e.page=1,e.localPage=1,p())},h=u=>{const m=e.fixedBrands.indexOf(u);m===-1?e.fixedBrands.push(u):e.fixedBrands.splice(m,1),p()},f=(u,m)=>{e.minPriceChoosen=u,e.maxPriceChoosen=m,p()},y=(u,m,v)=>{u==="add"&&m<v&&(e.isWrappingMobile?(e.localPage=e.localPage===3?1:e.localPage+1,e.localPage===1&&(e.page+=1)):e.page+=1),u==="minus"&&m>1&&(e.isWrappingMobile?(e.localPage=e.localPage===1?3:e.localPage-1,e.localPage===3&&(e.page-=1)):e.page-=1),p()},k=(u,m,v)=>{u==="add"?v[`${m}Page`]++:v[`${m}Page`]--,p()},C=u=>{e.searchInput.value=u,b(u)};let S=null;const L=u=>{var m,v,w;I(),S=u,(m=u.querySelector(".sidebar__header .sidebar__item"))==null||m.addEventListener("click",$),(v=u.querySelector(".sidebar__header"))==null||v.addEventListener("click",q),(w=u.querySelector(".sidebar__dropdown li:first-child"))==null||w.addEventListener("click",()=>_(""))},I=()=>{var u,m,v;S&&((u=S.querySelector(".sidebar__header .sidebar__item"))==null||u.removeEventListener("click",$),(m=S.querySelector(".sidebar__header"))==null||m.removeEventListener("click",q),(v=S.querySelector(".sidebar__dropdown li:first-child"))==null||v.removeEventListener("click",()=>_("")),S=null)},$=u=>{var v,w;u==null||u.stopPropagation();const m=S==null?void 0:S.querySelector(".sidebar__list");m==null||m.classList.toggle("opened"),(w=(v=m==null?void 0:m.parentElement)==null?void 0:v.querySelector(".svg--dropdown"))==null||w.classList.toggle("svg--rotated")},q=()=>$(),U=()=>{var u,m,v,w;e.container.addEventListener("keydown",M=>{M.key==="Escape"&&o()}),(u=e.container.querySelector(".search__form"))==null||u.addEventListener("submit",M=>{M.preventDefault()}),window.addEventListener("resize",Ge),(m=document.querySelector(".btn-demo"))==null||m.addEventListener("click",a),console.log(document.querySelector(".btn-demo")),console.log("no button"),(v=document.querySelector(".search__button--close"))==null||v.addEventListener("click",o),(w=document.querySelector(".search__button--clear"))==null||w.addEventListener("click",()=>{c(),b("")})},Ge=()=>{const u=e.isWrappingMobile;e.isWrappingMobile=window.innerWidth<=800,u!==e.isWrappingMobile&&g()};return{init:s,openWidget:a,closeWidget:o,updateResults:p}}let ne;async function Ke(e){const{renderSearchInput:t}=await Ve();return ne=t,{render:()=>{e.container.innerHTML=`
      <div id="threshold"></div>
      <div id="search-widget__input-wrapper">
        ${ne}
      </div>
      <div id="search-widget__suggestion"></div>
      <div id="search-widget__results"></div>
    `},startReplacingPlaceholder:()=>{clearInterval(e.interval),clearTimeout(e.placeholderTimeout),e.placeholderTimeout=setTimeout(()=>{let d=[],l=0,s=0,a=!1,o=!1;const c=e.container.querySelector(".search__input"),g=()=>{if(o)return;const b=e.placeholderValues[s%e.placeholderValues.length];a?(d.pop(),l===0?(a=!1,s++,p(200)):l--):(d.push(b[l]),l===b.length-1?(o=!0,setTimeout(()=>{o=!1,a=!0,p(100)},1e3)):l++),c.placeholder=d.join("")},p=b=>{clearInterval(e.interval),e.interval=setInterval(g,b)};p(200)},1e3)},stopReplacingPlaceholder:()=>{clearInterval(e.interval),clearTimeout(e.placeholderTimeout),e.searchInput.placeholder=""}}}const ze=async e=>{const t=le(e),n=await Ke(t);return await Qe(t,n)};(async()=>{console.log("hi");const e=document.getElementById("search-widget")||(()=>{const n=document.createElement("div");return n.id="search-widget",n.style.display="none",document.body.appendChild(n),n})();(await ze(e)).init(),ce()})()})();
