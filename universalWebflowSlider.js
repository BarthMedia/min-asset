(()=>{let t={opacity:1,cursor:"pointer"},e={opacity:.5,cursor:"default"};function s(){$('[bmg-uwsc = "Slider"]').each(function(){let s=$(this),a=s.find('[bmg-uwsc = "Mask"]'),c=a.children().not('[bmg-uwsc = "Not A Slide"]');$left=s.find('[bmg-uwsc = "Left Arrow"]'),$right=s.find('[bmg-uwsc = "Right Arrow"]'),$dot=($nav=s.find('[bmg-uwsc = "Slide Nav"]')).children().eq(1).clone(),$currentDot=$nav.children().eq(0).css({cursor:"default"}).clone();let o=s.attr("bmg-data-snapping")||"true",r=parseFloat(s.attr("bmg-data-snapping-delay")||420),l=parseFloat(s.attr("bmg-uwsc-animation-time")||350),d=n(s,"bmg-data-css-show",{...t}),u=n(s,"bmg-data-css-hide",{...e});void 0==d.duration&&(d.duration=l/1e3),void 0==u.duration&&(u.duration=l/1e3);let f=$dot.attr("class"),p=$currentDot.attr("class"),h=c.length,g=0,m,b,_,w,j,y;if(gsap.set($left[0],{...u,duration:0}),h<=1&&gsap.set($right[0],{...u,duration:0}),"false"!=$nav.attr("bmg-data-auto-create-dots")){$nav.empty(),$nav.append($currentDot);for(let v=1;v<h;v++)$nav.append($dot.clone())}let E=$nav.children();function S(){b=[],c.each(function(t){b.push({single:$(this).outerWidth()})}),_=parseFloat(a.css("padding-left")),w=parseFloat(a.css("padding-right")),j=0,b.forEach(t=>{j+=t.single}),y=Math.round((a[0].scrollWidth-j-_-w)/(h-1));let t=0;b.forEach((e,s)=>{s?(t+=e.single+y,e.joint=t):e.joint=0});m=i(a[0].scrollWidth-a[0].clientWidth,b),E.each(function(t){t>m?gsap.set($(this)[0],{...u}):gsap.set($(this)[0],{...d})})}S(),$(window).resize(S);let k;function C(t){clearTimeout(k),a.stop().animate({scrollLeft:b[t].joint},l)}a.scroll(function(){(g=i(a.scrollLeft(),b))<=0?gsap.to($left[0],u):g>=m?gsap.to($right[0],u):(gsap.to($left[0],d),gsap.to($right[0],d)),E.removeClass(p).addClass(f).css({cursor:"pointer"}),E.eq(g).removeClass(f).addClass(p).css({cursor:"default"}),"true"==o&&(clearTimeout(k),g<m&&(k=setTimeout(()=>{C(g)},r)))}),$left.click(()=>{g>0&&g--,C(g)}),$right.click(()=>{g<m&&g++,C(g)}),E.each(function(t){$(this).click(()=>{C(t)})})})}function i(t,e){let s,i;return e.forEach((e,n)=>{if(void 0==s)s=Math.abs(e.joint-t),i=n;else{let a=Math.abs(e.joint-t);a<s&&(s=a,i=n)}}),i}function n(t,e,s,i=!0){return"{}"==(t.attr(e)||"{}")?s:JSON.parse(a(t.attr(e),!0))}function a(t,e=!0){let s=c(t.replace(", ",",")).split(","),i="",n=s.length-1;return(s.forEach((t,e)=>{t.replace(/\'/g,"").replace(": ",":").split(":").forEach((t,e)=>{i+=`"${t}"${e>0?"":": "}`}),i+=e<n?", ":""}),e)?`{${i}}`:i}function c(t){return t.substring(1).slice(0,-1)}jQuery.loadScript=function(t,e){jQuery.ajax({url:t,dataType:"script",success:e,async:!0})},"undefined"==typeof gsap?$.loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",function(){s()}):s()})();
