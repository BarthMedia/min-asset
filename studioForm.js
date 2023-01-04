(()=>{let t=typeof gsap,e=$("body").attr("bmg-data-gsap-scroll-already-installed"),i=typeof Hammer,o='[bmg-form = "Form Block"]',a='[bmg-form = "Visual Divider"]',n='[bmg-form = "Continue Button"]',r='[bmg-form = "Backwards Button"]',s='[bmg-form = "Quiz Result"]',d=".w-radio",l=".w-checkbox",u=".w-form-done",c="bmg-data-form-block-index",m="bmg-data-step-index",f="bmg-data-step-type",h="bmg-data-conditional",g="bmg-data-click-element",p="bmg-data-element-checked",b="bmg-data-click-element-id",v="bmg-data-autofocus",_="bmg-data-redirect-url",w=[{names:["false"],value:0},{names:["half","50%"],value:.5},{names:["on","true","100%"],value:1},{names:["extreme","200%"],value:2}],S="bmg-data-css-active",y="bmg-data-slide-direction",T="bmg-data-swipe-type-animation",x="bmg-data-anchor-related-element-to-scroll-selector",k={opacity:1,display:"flex"},I={opacity:0,display:"none"},A={opacity:1,duration:.1},M={opacity:.5,duration:.1},E={opacity:1},R={opacity:.5},C={...k},L={...I},z={...k},B={...I},q=[];function H(){$(o).each(function(t){"false"!=$(this).attr("bmg-data-auto-delete-conditionally-invisible-elements")&&$(this).find(".w-condition-invisible").remove();let e=$(this),i=J(e,'[bmg-form = "Form"]',0),d=J(i,'[bmg-form = "Form Step"]',"false",`${a}, ${s}`),l=i.find(r),u=i.find('[bmg-form = "Submit Button"]'),f=e.children().not(i),h=f.find(r),p=f.find(n),_=Z(h),w=Z(p),S=e.find('[bmg-form = "Progress Bar"]'),y=Z(S),k=e.find('[bmg-form = "Anchor Element"]').eq(0),I=[{step:0}],A=!0,M=to(e);function E(o){if(p.length<1)return;let a=i.find(`[${m} = "${o}"]`);a.find(`[${g} = "true"]`).length>0&&N(e,a)?gsap.to(w,q[t].cssBackForthActive):gsap.to(w,q[t].cssBackForthInactive)}ta(e),M<2?(i.find(a).remove(),d.hide(),d.eq(0).show()):console.log(`Dev mode ${M}: Visual dividers not removed...`),gsap.set([_,w],{...q[t].cssBackForthInactive,duration:0}),e.attr(c,t),d.each(function(t){let i=$(this),o=!1,a=U(i,t,e);X(a),a.each(function(t){let e=$(this);e.attr(b,t),e.click(()=>{o||(setTimeout(()=>{o=!1},10),X(a,e),te()),o=!0})})}),l.add(h).each(function(){$(this).click(()=>{ti()})}),p.each(function(){$(this).click(()=>{te()})}),u.each(function(){$(this).click(()=>{tn()})});let R=V(d),C=q[t].progressBarAnimationSTime,L=q[t].progressBarAxis.toLowerCase();function z(t=!1){if(S.length<1)return;let e=t?100:j("longest",I,R);["x","x, y","y, x"].includes(L)&&gsap.to(y,{width:e+"%",duration:C}),["y","x, y","y, x"].includes(L)&&gsap.to(y,{height:e+"%",duration:C})}z();let B=parseInt(k.attr("bmg-data-anchor-min-screen-size")||0),H=parseInt(k.attr("bmg-data-anchor-max-screen-size")||767),D=q[t].anchorAnimationSTime,K=$(k.attr("bmg-data-anchor-y-offset-selector")),Q=document.querySelectorAll(k.attr(x));function tt(){if(1==k.length){let e=$(window).outerWidth(!0),i=K.outerHeight(!0)||0;e<=H&&e>=B&&gsap.to(Q,{scrollTo:{y:`#anchor-element-${t}`,offsetY:i},duration:D})}}function te(o=!1){let a=I[I.length-1].step,n=R[a];if(o&&"false"==n.swipeAllowed.toLowerCase())return;let r=n.$,s=r.find(`[${g} = "true"]`),d=s.attr(b);1==s.length?N(e,r)&&function e(o,a){let n=R[o].buttons[a].nextStepId;if(gsap.to(_,q[t].cssBackForthActive),R[o].isLast)tn();else{let r=R[o].$;$nextStep=R[n].$,I.push({step:n}),Y(r,$nextStep,i,M),E(n),z(),tt()}M>.5&&console.log(`Dev mode ${M}; Click record: `,I)}(a,d):(O(0,r,e),E(a))}function ti(e=!1){let o=I[I.length-1].step,a=I[Math.max(I.length-2,0)].step;if(!e||"false"!=R[o].swipeAllowed.toLowerCase()){if(o!=a){let n=i.find(`[${m} = "${o}"]`),r=i.find(`[${m} = "${a}"]`);I.pop(),Y(n,r,i,M)}I.length<=1&&h.length>0&&gsap.to(_,q[t].cssBackForthInactive),E(a),z(),tt(),M>.5&&console.log(`Dev mode ${M}; Click record: `,I)}}function tn(){if(!N(e,R[I[I.length-1].step].$))return!1;A=!1,G(R,I,e),F(e,I),z(!0),gsap.to([_,w],q[t].cssHide),W(e,i,M)}Q=Q.length>0?Q:window,k.attr("id",`anchor-element-${t}`),0==t&&e.attr(v,!0),e.mouseenter(()=>{$(o).attr(v,!1),e.attr(v,!0)});let tr=(e.attr("bmg-data-esc-event")||"escape, esc, arrowup, up").split(", "),ts=(e.attr("bmg-data-enter-event")||"enter, arrowdown, down").split(", "),td=(e.attr("bmg-data-left-event")||"arrowleft, left").split(", "),tu=(e.attr("bmg-data-right-event")||"arrowright, right").split(", ");document.onkeydown=function(t){t=t||window.event;let o=I[I.length-1].step;if("false"!=i.find(`[${m} = "${o}"]`).attr("bmg-data-keyboard-events")&&"key"in t&&A&&"true"==e.attr(v)){let a=t.key.toLowerCase();tr.includes(a)?ti():ts.includes(a)&&!t.shiftKey?te():td.includes(a)&&!t.shiftKey?tm(-1):tu.includes(a)&&!t.shiftKey&&tm(1)}};let tc="true"==q[t].leftRightKeyEventInfinityAllowed;function tm(t=1){let i=R[I[I.length-1].step].$,o=i.find(`[${b}]`).length-1,a=parseInt(i.find(`[${g} = "true"]`).attr(b)||-2),n=-2==a?0:a+t;O(n=tc?(n=n>o?0:n)<0?o:n:(n=n>o?o:n)<0?0:n,i,e)}P(e);let t$=Hammer(e[0]),tf=e.attr(T);"false"==tf||("to bottom"==tf?(t$.get("swipe").set({direction:Hammer.DIRECTION_ALL}),t$.on("swipeup",()=>{ti(!0)}),t$.on("swipedown",()=>{te(!0)})):"to top"==tf||"vertical"==tf?(t$.get("swipe").set({direction:Hammer.DIRECTION_ALL}),t$.on("swipeup",()=>{te(!0)}),t$.on("swipedown",()=>{ti(!0)})):"to left"==tf||"default"==tf||"horizontal"==tf?(t$.on("swipeleft",()=>{te(!0)}),t$.on("swiperight",()=>{ti(!0)})):"to right"==tf?(t$.on("swipeleft",()=>{ti(!0)}),t$.on("swiperight",()=>{te(!0)})):"4"==tf||"270\xb0"==tf?(t$.get("swipe").set({direction:Hammer.DIRECTION_ALL}),t$.on("swipeup",()=>{ti(!0)}),t$.on("swipeleft",()=>{te(!0)}),t$.on("swiperight",()=>{te(!0)}),t$.on("swipedown",()=>{ti(!0)})):"3"==tf||"180\xb0"==tf?(t$.get("swipe").set({direction:Hammer.DIRECTION_ALL}),t$.on("swipeup",()=>{ti(!0)}),t$.on("swipeleft",()=>{te(!0)}),t$.on("swiperight",()=>{te(!0)}),t$.on("swipedown",()=>{ti(!0)})):"2"==tf||"90\xb0"==tf?(t$.get("swipe").set({direction:Hammer.DIRECTION_ALL}),t$.on("swipeup",()=>{ti(!0)}),t$.on("swipeleft",()=>{te(!0)}),t$.on("swiperight",()=>{te(!0)}),t$.on("swipedown",()=>{ti(!0)})):(t$.get("swipe").set({direction:Hammer.DIRECTION_ALL}),t$.on("swipeup",()=>{te(!0)}),t$.on("swipeleft",()=>{te(!0)}),t$.on("swiperight",()=>{ti(!0)}),t$.on("swipedown",()=>{ti(!0)})))})}function D(t="add",e,i){let o=q[i],a=o.cssErrorStatus,n=o.cssErrorStatusResolved,r=Z(e);"add"==t?gsap.to(r,a):gsap.to(r,n)}function N(t,e,i="100%"){let o=e.attr(f),a="true"==(e.attr("bmg-data-required")||"true");if(styleIndex=parseInt(t.attr(c)),!a||"empty"==o)return!0;if("checkbox"==o){let n=e.find(l),r=!1;return n.each(function(){void 0!=$(this).attr(p)&&(r=!0)}),!!r||("100%"==i&&D("add",n,styleIndex),"100%"==i&&n.off("click.stepRequirements"),"100%"==i&&n.on("click.stepRequirements",function(){D("remove",n,styleIndex),n.off("click.stepRequirements")}),!1)}if("radio"==o){let s=e.find(d),u=e.find(`[${p}]`);return!!e.find(`[${b}]`).hasClass(d.substring(1))||0!=u.length||("100%"==i&&D("add",s,styleIndex),"100%"==i&&s.off("click.stepRequirements"),"100%"==i&&s.on("click.stepRequirements",function(){D("remove",s,styleIndex),s.off("click.stepRequirements")}),!1)}if("custom"==o)return"false"!=(e.attr("bmg-data-custom-requirements-passed")||"false");{let m=!0,h=e.find("input, select");return"100%"==i&&D("remove",h,styleIndex),h.each(function(){let t=$(this);t.prop("required")&&""==t.val()&&(m=!1,"100%"==i&&D("add",t,styleIndex))}),!!m&&("100%"==i&&D("remove",h,styleIndex),!0)}}function O(t,e,i){let o=q[parseInt(i.attr(c))],a=o.cssDeselect,n=o.cssSelect,r=e.find(`[${b}]`),s=Z(r),d=e.find(`[${b} = ${t}]`);X(r,d),gsap.to(s,a),gsap.to(d[0],n)}function F(t,e){let i=t[0].querySelector(u).querySelectorAll(s),o=q[parseInt(t.attr(c))].redirectMsTime;if(i.length>0){console.log(i);let a=i[0],n=a.getAttribute(_);if(void 0!=n){setTimeout(()=>{n=a.getAttribute(_),location.assign(n)},o);return}console.log("Todo: Set up quiz mode funcitonality. Url functionality, nested forms, etc.")}}function j(t,e,i){let o=e[e.length-1].step,a=e.length,n=i.length,r=0,s=0,d=0,l=[];return(!function t(e){var o;let a,u=(o=e,a=[],o.buttons.forEach(t=>{-1===a.indexOf(t.nextStepId)&&a.push(t.nextStepId)}),a);if(s++,d++,u.length>1&&(l.push(d),d=0),e.isLast){r=Math.max(r,s),n=Math.min(n,s),s=0,l.forEach(t=>{s+=t}),l.pop();return}u.forEach((e,o)=>{t(i[e])})}(i[o]),n+=a,r+=a,"shortest"==t)?100*(a/n):100*(a/r)}function P(t){let e=parseInt(t.attr(c)),i=t.attr(T),o=q[e],a=o.slideDirection.toLowerCase(),n=o.maxSwipeScreenSize,r=o.minSwipeScreenSize,s=$(window).outerWidth(!0);s<=n&&s>=r?(void 0!=i&&(a=i),t.attr(T,a)):t.attr(T,"false")}function W(t,e,i=0,o=[]){let a=t.find(u),n=q[t.attr(c)],r=n.submitMsTime1/1e3,s=n.submitMsTime2/1e3,d=n.submitHide,l={...d,duration:0};submitShow=n.submitShow,resizeHeight1=e.outerHeight(!0),resizeHeight2=a.outerHeight(!0),multiplier1=n.autoResizeSuccessTimeMultiplier1,multiplier2=n.autoResizeSuccessTimeMultiplier2,submitTimeout=(d.duration+submitShow.duration)*1e3,tl=new gsap.timeline,resizeTl=new gsap.timeline,i<.5?setTimeout(()=>{e.submit()},submitTimeout):console.log(`Dev mode ${i}: Perform fake submit...`),tl.set(a[0],l),tl.to(e[0],d),tl.to(a[0],submitShow),resizeHeight2>=resizeHeight1?resizeTl.to(t[0],{height:resizeHeight2,duration:r*multiplier1}):(resizeTl.set(t[0],{height:resizeHeight1}),resizeTl.to(t[0],{height:resizeHeight2,duration:s*multiplier2}).delay(r)),resizeTl.set(t[0],{height:"auto"})}let K=!1;function Y(t,e,i,a=0){if(a>=2){console.log(`Dev mode ${a}: Block the transition animation...`);return}let n=i.find(`[${m}]`).not(t).not(e),r=q[parseInt(i.closest(o).attr(c))],s=r.cssShow,d=r.cssHide,l={...d,duration:0},u=new gsap.timeline,f=t.outerHeight(!0),h=e.outerHeight(!0);if(speedMultiplierString=`<+=${100*(f==h?r.equalHeightTransitionSpeedMultiplier:1)}%`,isReverse=parseInt(t.attr(m))>parseInt(e.attr(m)),slideDirection=(t.attr(y)||r.slideDirection).toLowerCase(),autoResizeTime1=s.duration,autoResizeTime2=d.duration,autoResizeTimeMultiplier1=r.autoResizeTimeMultiplier1,autoResizeTimeMultiplier2=r.autoResizeTimeMultiplier2,isReverse&&(slideDirection=(e.attr(y)||slideDirection).toLowerCase()),a>=2&&console.log(`Dev mode ${a}; GSAP transition speed multiplier string: ${speedMultiplierString}`),"to bottom"==slideDirection){let g={...s,y:0},p={...d,y:-i.outerHeight(!0)},b={...p,duration:0},v={...s,y:0},_={...d,y:i.outerHeight(!0)},w={..._,duration:0};isReverse?(u.to(t[0],p),u.fromTo(e[0],w,v,speedMultiplierString)):(u.to(t[0],_),u.fromTo(e[0],b,g,speedMultiplierString))}else if("to top"==slideDirection){let S={...s,y:0},T={...d,y:-i.outerHeight(!0)},x={...T,duration:0},k={...s,y:0},I={...d,y:i.outerHeight(!0)},A={...I,duration:0};isReverse?(u.to(t[0],I),u.fromTo(e[0],x,S,speedMultiplierString)):(u.to(t[0],T),u.fromTo(e[0],A,k,speedMultiplierString))}else if("to left"==slideDirection||"default"==slideDirection){let M={...s,x:0},E={...d,x:-i.outerWidth(!0)},R={...E,duration:0},C={...s,x:0},L={...d,x:i.outerWidth(!0)},z={...L,duration:0};isReverse?(u.to(t[0],L),u.fromTo(e[0],R,M,speedMultiplierString)):(u.to(t[0],E),u.fromTo(e[0],z,C,speedMultiplierString))}else if("to right"==slideDirection){let B={...s,x:0},H={...d,x:-i.outerWidth(!0)},D={...H,duration:0},N={...s,x:0},O={...d,x:i.outerWidth(!0)},F={...O,duration:0};isReverse?(u.to(t[0],H),u.fromTo(e[0],F,N,speedMultiplierString)):(u.to(t[0],O),u.fromTo(e[0],D,B,speedMultiplierString))}else if("none"==slideDirection)u.to(t[0],d),u.fromTo(e[0],l,s);else{let j=r.customNextSlideIn,P=r.customNextSlideOut,W=r.customPrevSlideIn,Y=r.customPrevSlideOut,V=r.customXMultiplier,X=r.customYMultiplier;void 0==j.x&&(j.x=0),void 0==P.x&&(P.x=V*i.outerWidth(!0)),void 0==W.x&&(W.x=0),void 0==Y.x&&(Y.x=-V*i.outerWidth(!0)),void 0==j.y&&(j.y=0),void 0==P.y&&(P.y=X*i.outerHeight(!0)),void 0==W.y&&(W.y=0),void 0==Y.y&&(Y.y=-X*i.outerHeight(!0));let G={...Y,duration:0},Q={...P,duration:0};isReverse?(autoResizeTime1=W.duration,autoResizeTime2=Y.duration,u.to(t[0],Y),u.fromTo(e[0],Q,W,speedMultiplierString)):(autoResizeTime1=j.duration,autoResizeTime2=P.duration,u.to(t[0],P),u.fromTo(e[0],G,j,speedMultiplierString))}h>=f?gsap.to(i[0],{height:h,duration:autoResizeTime1*autoResizeTimeMultiplier1}):(gsap.set(i[0],{height:f}),gsap.to(i[0],{height:h,duration:autoResizeTime2*autoResizeTimeMultiplier2}).delay(autoResizeTime1)),K&&K.clear(),K=u,n.hide()}function V(t){let e=[];t.each(function(t){let i=$(this),o=i.find(`[${b}]`),a=[];o.each(function(){let t=$(this);a.push({id:t.attr(b),conditional:t.attr(h)})}),e.push({$:i,step:t,swipeAllowed:i.attr("bmg-data-swipe-allowed")||"true",conditional:i.attr(h),conditionalNext:i.attr("bmg-data-conditional-next"),buttons:a})});let i=e.length;return e.forEach(t=>{let o=t.step,a=t.$.attr("bmg-data-relative-last-step");t.isLast=o==i-1,"true"==a&&(t.isLast=!0),t.buttons.forEach(i=>{void 0!=i.conditional?i.nextStepId=(()=>{for(t of e)if(t.conditional==i.conditional)return t.step})():void 0!=t.conditionalNext?i.nextStepId=o+1:i.nextStepId=(()=>{for(t of e)if(t.step>o&&void 0==t.conditional)return t.step})()})}),e}function X(t,e=!1){t.attr(g,!1),e&&e.attr(g,!0)}function G(t,e,i){"true"==(i.attr("bmg-data-remove-other-steps")||"true")&&t.forEach(t=>{let i=!1,o=t.step;e.forEach(t=>{o==t.step&&(i=!0)}),t.isLast&&(i=!0),i||t.$.remove()})}function Q(t,e,i){let o=q[e],a=o.cssActive,n=o.cssInactive,r=o.setCssInactive,s="radio"==i.attr(f),d=Z(t);gsap.set(d,r),s?t.each(function(){let e=$(this);e.click(()=>{gsap.to(d,n),gsap.to(e[0],a),t.removeAttr(p),e.attr(p,!0)})}):t.each(function(){let t=$(this),e=!0,i=!1;if("none"==t.attr(S))return!0;t.click(()=>{i||(setTimeout(()=>{i=!1},10),e?(gsap.to(t[0],a),t.attr(p,!0),e=!1):(gsap.to(t[0],n),t.removeAttr(p),e=!0)),i=!0})})}function U(t,e,i){let o=t.find(d),a=t.find(l),s=t.find(`a, ${n}, .w-button`).not('[bmg-form = "Not a Button"]').not(r),u=t.find("input"),h=parseInt(i.attr(c));return(t.attr(m,e),o.length>0)?(void 0==t.attr(f)&&t.attr(f,"radio"),Q(o,h,t),o.find("input").removeAttr("required"),void 0!=t.attr("bmg-data-not-auto-continue")?s:o):a.length>0?(void 0==t.attr(f)&&t.attr(f,"checkbox"),Q(a,h,t),"checkbox"==t.attr(f)&&a.find("input").removeAttr("required"),s):u.length>0?(void 0==t.attr(f)&&t.attr(f,"other input"),Q(a,h,t),s):(void 0==t.attr(f)&&t.attr(f,"empty"),s)}function J(t,e,i="false",o="false"){let a=t.find(e),n=t.children();return a.length>0?a:("false"!=o&&(n=n.not(o)),"false"!=i&&(n=n.eq(i)),n)}function Z(t){let e=[];return t.each(function(){e.push(this)}),e}function tt(t,e,i,o=!0){return"{}"==(t.attr(e)||"{}")?{...i}:JSON.parse(te(t.attr(e),!0))}function te(t,e=!0){let i=ti(t.replace(/\, /g,",")).split(","),o="",a=i.length-1;return(i.forEach((t,e)=>{t.replace(/\'/g,"").replace(/\: /g,":").split(":").forEach((t,e)=>{o+=`"${t}"${e>0?"":": "}`}),o+=e<a?", ":""}),e)?`{${o}}`:o}function ti(t){return t.substring(1).slice(0,-1)}function to(t){let e=t.attr("bmg-data-dev-mode"),i=0;return w.forEach(t=>{t.names.forEach(o=>{o==e&&(i=t.value)})}),i}function ta(t){q.push({animationMsTime:parseFloat(t.attr("bmg-data-animation-ms-time")||500),equalHeightTransitionSpeedMultiplier:parseFloat(t.attr("bmg-data-equal-height-transition-speed-multiplier")||.25),cssShow:tt(t,"bmg-data-css-show",k),cssHide:tt(t,"bmg-data-css-hide",I),cssActive:tt(t,S,A),cssInactive:tt(t,"bmg-data-css-inactive",M),cssBackForthActive:tt(t,"bmg-data-back-forth-css-active",E),cssBackForthInactive:tt(t,"bmg-data-back-forth-css-inactive",R),errorColor:t.attr("bmg-data-error-color")||"red",slideDirection:t.attr(y)||"to left",customNextSlideIn:tt(t,"bmg-data-custom-next-slide-in",C),customNextSlideOut:tt(t,"bmg-data-custom-next-slide-out",L),customPrevSlideIn:tt(t,"bmg-data-custom-prev-slide-in",z),customPrevSlideOut:tt(t,"bmg-data-custom-prev-slide-out",B),customXMultiplier:parseFloat(t.attr("bmg-data-custom-x-percentage-multiplier")||0),customYMultiplier:parseFloat(t.attr("bmg-data-custom-y-percentage-multiplier")||0),autoResizeTimeMultiplier1:parseFloat(t.attr("bmg-data-auto-resize-time-multiplier-1")||1),autoResizeTimeMultiplier2:parseFloat(t.attr("bmg-data-auto-resize-time-multiplier-2")||.5),autoResizeSuccessTimeMultiplier1:parseFloat(t.attr("bmg-data-auto-resize-time-multiplier-1")||1),autoResizeSuccessTimeMultiplier2:parseFloat(t.attr("bmg-data-auto-resize-time-multiplier-2")||.85),maxSwipeScreenSize:parseInt(t.attr("bmg-data-max-swipe-screen-size")||767),minSwipeScreenSize:parseInt(t.attr("bmg-data-min-swipe-screen-size")||0),leftRightKeyEventInfinityAllowed:t.attr("bmg-data-left-key-event-infintiy-allowed")||"true",redirectMsTime:parseFloat(t.attr("bmg-data-redirect-ms-time")||1)});let e=q[q.length-1],i=e.cssShow,o=e.cssHide,a=e.cssBackForthActive,n=e.cssBackForthInactive,r=e.cssActive,s=e.cssInactive,d=e.customNextSlideIn,l=e.customNextSlideOut,u=e.customPrevSlideIn,c=e.customPrevSlideOut;e.animationSTime=e.animationMsTime/1e3,void 0==i.duration&&(i.duration=e.animationSTime),void 0==o.duration&&(o.duration=e.animationSTime),void 0==a.duration&&(a.duration=e.animationSTime),void 0==n.duration&&(n.duration=e.animationSTime),void 0==r.duration&&(r.duration=e.animationSTime),void 0==s.duration&&(s.duration=e.animationSTime),void 0==d.duration&&(d.duration=e.animationSTime),void 0==l.duration&&(l.duration=e.animationSTime),void 0==u.duration&&(u.duration=e.animationSTime),void 0==c.duration&&(c.duration=e.animationSTime),e.submitMsTime1=parseFloat(t.attr("bmg-data-submit-ms-time-1"))||e.animationMsTime,e.submitMsTime2=parseFloat(t.attr("bmg-data-submit-ms-time-2"))||e.animationMsTime,e.submitHide=tt(t,"bmg-data-submit-hide",o),e.submitShow=tt(t,"bmg-data-submit-show",{...i,duration:1.5*e.animationSTime}),void 0==e.submitHide.duration&&(e.submitHide.duration=e.submitMsTime1/1e3),void 0==e.submitShow.duration&&(e.submitShow.duration=e.submitMsTime2/1e3),e.setCssInactive=tt(t,"bmg-data-set-css-inactive",s),delete e.setCssInactive.duration,e.cssSelect=tt(t,"bmg-data-css-select",r),e.cssDeselect=tt(t,"bmg-data-css-deselect",s),e.cssErrorStatus=tt(t,"bmg-data-css-error-status",{duration:e.animationSTime}),e.cssErrorStatusResolved=tt(t,"bmg-data-css-error-status-resolved",{duration:e.animationSTime}),void 0==e.cssErrorStatus.borderColor&&(e.cssErrorStatus.borderColor=e.errorColor),void 0==e.cssErrorStatusResolved.borderColor&&(e.cssErrorStatusResolved.borderColor=""),e.progressBarAnimationSTime=parseFloat(t.attr("bmg-data-progress-bar-ms-time")||e.animationMsTime)/1e3,e.progressBarAxis=t.attr("bmg-data-progress-bar-axis")||"x",e.anchorAnimationSTime=parseFloat(t.attr("bmg-data-anchor-animation-ms-time")||e.animationMsTime)/1e3}function tn(){"undefined"==t?$.loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",function(){tr()}):tr()}function tr(){void 0==e?$.loadScript("https://cdn.jsdelivr.net/gh/BarthMedia/js@main/ScrollToPlugin.min.js",function(){H()}):H()}jQuery.loadScript=function(t,e){jQuery.ajax({url:t,dataType:"script",success:e,async:!0})},"undefined"==i?$.loadScript("https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js",function(){tn()}):tn()})();
