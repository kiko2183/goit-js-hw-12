import{a as y,i,S as g}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const h="43954611-e80f17bdd29da3f9a3f1b55c2",b="https://pixabay.com/api/";async function L(o,t=1,n=15){return(await y.get(b,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:n}})).data}function v(o){return o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:a,downloads:p})=>`
            <div class="gallery-item">
                <a href="${n}">
                    <img src="${t}" alt="${s}" />
                </a>
                <div class="gallery-item-info">
                    <p>Likes: ${e}</p>
                    <p>Views: ${r}</p>
                    <p>Comments: ${a}</p>
                    <p>Downloads: ${p}</p>
                </div>
            </div>
        `).join("")}const w=document.querySelector("#search-form"),f=document.querySelector(".gallery"),c=document.querySelector(".load-more");let d="",l=1,u;w.addEventListener("submit",S);c.addEventListener("click",q);async function S(o){if(o.preventDefault(),d=o.currentTarget.elements.query.value.trim(),l=1,f.innerHTML="",c.style.display="none",d===""){i.warning({title:"Warning",message:"Search query cannot be empty"});return}await m(!1)}async function q(){l+=1,await m(!0)}async function m(o){try{const t=await L(d,l);if(t.hits.length===0){i.error({title:"Error",message:"No images found. Try again!"});return}const n=v(t.hits);if(f.insertAdjacentHTML("beforeend",n),u?u.refresh():u=new g(".gallery a",{captionsData:"alt",captionDelay:250}),t.hits.length<15||l*15>=t.totalHits?(i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),c.style.display="none"):c.style.display="block",o){const{height:s}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}catch(t){i.error({title:"Error",message:t.message})}}
//# sourceMappingURL=commonHelpers.js.map
