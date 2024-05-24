import{a as p,i,S as y}from"./assets/vendor-b0d10f48.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const g="43954611-e80f17bdd29da3f9a3f1b55c2",h="https://pixabay.com/api/";async function b(t,o=1,n=15){return(await p.get(h,{params:{key:g,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n}})).data}function L(t){return t.map(({webformatURL:o,largeImageURL:n,tags:s,likes:e,views:r,comments:a,downloads:m})=>`
            <div class="gallery-item">
                <a href="${n}">
                    <img src="${o}" alt="${s}" />
                </a>
                <div class="gallery-item-info">
                    <p>Likes: ${e}</p>
                    <p>Views: ${r}</p>
                    <p>Comments: ${a}</p>
                    <p>Downloads: ${m}</p>
                </div>
            </div>
        `).join("")}const v=document.querySelector("#search-form"),d=document.querySelector(".gallery"),c=document.querySelector(".load-more");let u="",l=1;v.addEventListener("submit",w);c.addEventListener("click",S);async function w(t){if(t.preventDefault(),u=t.currentTarget.elements.query.value.trim(),u===""){i.warning({title:"Warning",message:"Search query cannot be empty"});return}l=1,d.innerHTML="",c.style.display="none",await f()}async function S(){l+=1,await f()}async function f(){try{const t=await b(u,l);if(t.hits.length===0){i.error({title:"Error",message:"No images found. Try again!"});return}const o=L(t.hits);d.insertAdjacentHTML("beforeend",o),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),t.hits.length<15||l*15>=t.totalHits?(i.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),c.style.display="none"):c.style.display="block";const{height:n}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}catch(t){i.error({title:"Error",message:t.message})}}
//# sourceMappingURL=commonHelpers.js.map
