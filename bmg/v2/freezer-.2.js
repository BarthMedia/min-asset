!function(){let e=document.querySelectorAll('[gsap="webflow-lottie"], [gsap="wized-lottie"], [gsap="xano-lottie"], [gsap="supabase-lottie"]'),t=navigator.userAgent.includes("Chrome");e.forEach(e=>{let l=!0,o=!0,r;e.style.position="relative",e.addEventListener("click",()=>{let s=1e3*parseFloat(e.getAttribute("data-default-duration"))-(l&&["webflow-lottie","wized-lottie"].includes(e.getAttribute("gsap")||!t)?100:10);l=!1,o&&(r=setTimeout(()=>{let t=e.querySelector("svg").cloneNode(!0);t.setAttribute("svg-clone",""),t.style.position="absolute",t.style.top="0px",t.style.left="0px",e.append(t)},s)),o||(r=setTimeout(()=>{let t=e.querySelector("[svg-clone]");t?.remove()},1)),o=!o}),window.addEventListener("resize",()=>{r&&clearTimeout(r),o=!0,r=void 0,e.querySelectorAll("[svg-clone]").forEach(e=>e.remove()),(svgElements=e.querySelectorAll("svg")).forEach((e,t)=>{t!==svgElements.length-1&&e.remove()})})})}();
