(()=>{let t={opacity:1,cursor:"pointer"},e={opacity:.5,cursor:"default"};function n(){$('[bmg-uwsc = "Slider"]').each(function(){let n=$(this),i=n.find('[bmg-uwsc = "Mask"]'),c=i.children().not('[bmg-uwsc = "Not A Slide"]'),o=n.find('[bmg-uwsc = "Left Arrow"]'),r=n.find('[bmg-uwsc = "Right Arrow"]'),l=n.find('[bmg-uwsc = "Slide Nav"]'),d=l.children().eq(1).clone(),u=l.children().eq(0).css({cursor:"default"}).clone(),f=n.attr("bmg-data-snapping")||"true",p=parseFloat(n.attr("bmg-data-snapping-delay")||150),h=parseFloat(n.attr("bmg-data-snap-call-multiplier")||.5),g=parseFloat(n.attr("bmg-uwsc-animation-time")||350),m=s(n,"bmg-data-css-show",{...t}),b=s(n,"bmg-data-css-hide",{...e});void 0==m.duration&&(m.duration=g/1e3),void 0==b.duration&&(b.duration=g/1e3);let _=d.attr("class"),w=u.attr("class"),j=c.length,y=0,v,E,S,k,C,W,q;if(gsap.set(o[0],{...b,duration:0}),j<=1&&gsap.set(r[0],{...b,duration:0}),"false"!=l.attr("bmg-data-auto-create-dots")){l.empty(),l.append(u);for(let A=1;A<j;A++)l.append(d.clone())}let L=l.children();function x(){E=[],c.each(function(t){E.push({single:$(this).outerWidth()})}),S=parseFloat(i.css("padding-left")),k=parseFloat(i.css("padding-right")),C=0,E.forEach(t=>{C+=t.single}),W=Math.round((i[0].scrollWidth-C-S-k)/(j-1));let t=0;E.forEach((e,n)=>{n?(t+=e.single+W,e.joint=t):e.joint=0});v=a(i[0].scrollWidth-i[0].clientWidth,E),L.each(function(t){t>v?gsap.set($(this)[0],{...b}):gsap.set($(this)[0],{...m})})}x(),$(window).resize(x);let N;i.scroll(function(){(y=a(i.scrollLeft(),E))<=0?gsap.to(o[0],b):y>=v?gsap.to(r[0],b):(gsap.to(o[0],m),gsap.to(r[0],m)),L.removeClass(w).addClass(_).css({cursor:"pointer"}),L.eq(y).removeClass(_).addClass(w).css({cursor:"default"}),"true"==f&&(clearTimeout(N),y<v&&(N=setTimeout(()=>{q="snap",M(y,h)},p)))});let z=0;function M(t,e=1){clearTimeout(N),i.stop().animate({scrollLeft:E[t].joint},g*e)}o.click(()=>{"button"!=q&&(z=y),--z>=0?M(z):z=0,q="button"}),r.click(()=>{"button"!=q&&(z=y),++z<=v?M(z):z=v,q="button"}),L.each(function(t){$(this).click(()=>{q="dot",M(t)})})})}function a(t,e){let n,a;return e.forEach((e,s)=>{if(void 0==n)n=Math.abs(e.joint-t),a=s;else{let i=Math.abs(e.joint-t);i<n&&(n=i,a=s)}}),a}function s(t,e,n,a=!0){return"{}"==(t.attr(e)||"{}")?n:JSON.parse(i(t.attr(e),!0))}function i(t,e=!0){let n=c(t.replace(", ",",")).split(","),a="",s=n.length-1;return(n.forEach((t,e)=>{t.replace(/\'/g,"").replace(": ",":").split(":").forEach((t,e)=>{a+=`"${t}"${e>0?"":": "}`}),a+=e<s?", ":""}),e)?`{${a}}`:a}function c(t){return t.substring(1).slice(0,-1)}jQuery.loadScript=function(t,e){jQuery.ajax({url:t,dataType:"script",success:e,async:!0})},"undefined"==typeof gsap?$.loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",function(){n()}):n()})();
