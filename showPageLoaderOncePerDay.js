(()=>{let e="bmg-show-once-loader",t='[bmg-element = "Page loader"]';cookieExpirytime=parseFloat((pageLoader=document.querySelector(t)).getAttribute("bmg-data")||.75),"Visited."!=Cookies.get(e)?Cookies.set(e,"Visited.",{expires:cookieExpirytime}):document.querySelector("head").innerHTML+=`
<!-- [BMG] Show loader once per day styles --> 
<style>
    ${t} {
        display: none !important
    }
</style>`})();
