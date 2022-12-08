const gsapDependency=typeof gsap,hammerJsDependency=typeof Hammer,formBlockSelctor='[bmg-form = "Form Block"]',formSelctor='[bmg-form = "Form"]',stepSelctor='[bmg-form = "Form Step"]',dividerSelctor='[bmg-form = "Visual Divider"]',submitButtonSelector='[bmg-form = "Submit Button"]',continueButtonSelector='[bmg-form = "Continue Button"]',backwardsButtonSelector='[bmg-form = "Backwards Button"]',notAButtonSelector='[bmg-form = "Not a Button"]',quizResultSelector='[bmg-form = "Quiz Result"]',radioSelector=".w-radio",checkboxSelector=".w-checkbox",wButtonSelector=".w-button",successSelector=".w-form-done",conditionInvisibleSelector=".w-condition-invisible",wRadioCheckedSelector=".w--redirected-checked",formBlockindexAttribute="bmg-data-form-block-index",stepIndexAttribute="bmg-data-step-index",stepTypeAttribute="bmg-data-step-type",relativeLastStepAttribute="bmg-data-relative-last-step",conditionalAttribute="bmg-data-conditional",conditionalNextAttribute="bmg-data-conditional-next",notAutoContinueAttribute="bmg-data-not-auto-continue",markClickElementAttribute="bmg-data-click-element",clickElementIdAttribute="bmg-data-click-element-id",removeOtherStepsAttribute="bmg-data-remove-other-steps",autoFocusAttribute="bmg-data-autofocus",keyboardEventsOnStepAttribute="bmg-data-keyboard-events",escEventAttribute="bmg-data-esc-event",enterEventAttribute="bmg-data-enter-event",leftEventAttribute="bmg-data-left-event",leftRightKeyEventInfinityAllowedAttribute="bmg-data-left-key-event-infintiy-allowed",rightEventAttribute="bmg-data-right-event",devModeAttribute="bmg-data-dev-mode",swipeAllowedAttribute="bmg-data-swipe-allowed",quizPathAttribute="bmg-data-quiz-path",redirectUrlAttribute="bmg-data-redirect-url",autoDeleteConditionallyInvisibleItemsAttribute="bmg-data-auto-delete-conditionally-invisible-elements",escEventDefault="escape, esc, arrowup, up",enterEventDefault="enter, arrowdown, down",leftEventDefault="arrowleft, left",rightEventDefault="arrowright, right",leftRightKeyEventInfinityAllowedDefault="true",devModeObject=[{names:["false"],value:0},{names:["half","50%"],value:.5},{names:["on","true","100%"],value:1},{names:["extreme","200%"],value:2}],cssShowAttribute="bmg-data-css-show",cssHideAttribute="bmg-data-css-hide",cssActiveAttribute="bmg-data-css-active",cssInactiveAttribute="bmg-data-css-inactive",setCssInactiveAttribute="bmg-data-set-css-inactive",cssSelectAttribute="bmg-data-css-select",cssDeselectAttribute="bmg-data-css-deselect",animationMsTimeAttribute="bmg-data-animation-ms-time",equalHeightTransitionSpeedMultiplierAttribute="bmg-data-equal-height-transition-speed-multiplier",errorColorAttribute="bmg-data-error-color",cssErrorStatusAttribute="bmg-data-css-error-status",cssErrorStatusResolvedAttribute="bmg-data-css-error-status-resolved",slideDirectionAttribute="bmg-data-slide-direction",customNextSlideInAttribute="bmg-data-custom-next-slide-in",customNextSlideOutAttribute="bmg-data-custom-next-slide-out",customPrevSlideInAttribute="bmg-data-custom-prev-slide-in",customPrevSlideOutAttribute="bmg-data-custom-prev-slide-out",customXMultiplierAttribute="bmg-data-custom-x-percentage-multiplier",customYMultiplierAttribute="bmg-data-custom-y-percentage-multiplier",autoResizeTimeMultiplier1Attribute="bmg-data-auto-resize-time-multiplier-1",autoResizeTimeMultiplier2Attribute="bmg-data-auto-resize-time-multiplier-2",autoResizeSuccessTimeMultiplier1Attribute="bmg-data-auto-resize-time-multiplier-1",autoResizeSuccessTimeMultiplier2Attribute="bmg-data-auto-resize-time-multiplier-2",maxSwipeScreenSizeAttribute="bmg-data-max-swipe-screen-size",minSwipeScreenSizeAttribute="bmg-data-min-swipe-screen-size",swipeTypeAnimationAttribute="bmg-data-swipe-type-animation",submitMsTime1Attribute="bmg-data-submit-ms-time-1",submitMsTime2Attribute="bmg-data-submit-ms-time-2",submitShowAttribute="bmg-data-submit-show",submitHideAttribute="bmg-data-submit-hide",redirectMsTimeAttribute="bmg-data-redirect-ms-time",cssShowDefault={opacity:1,display:"flex"},cssHideDefault={opacity:0,display:"none"},cssActiveDefault={opacity:1,duration:.1},cssInactiveDefault={opacity:.5,duration:.1},animationMsTimeDefault=500,equalHeightTransitionSpeedMultiplierDefault=.25,errorColorDefault="red",slideDirectionDefault="to left",customNextSlideInDefault={...cssShowDefault},customNextSlideOutDefault={...cssHideDefault},customPrevSlideInDefault={...cssShowDefault},customPrevSlideOutDefault={...cssHideDefault},customXMultiplierDefault=0,customYMultiplierDefault=0,autoResizeTimeMultiplier1Default=1,autoResizeTimeMultiplier2Default=.5,autoResizeSuccessTimeMultiplier1Default=1,autoResizeSuccessTimeMultiplier2Default=.85,maxSwipeScreenSizeDefault=767,minSwipeScreenSizeDefault=0,redirectMsTimeDefault=1;let stylesObject=[];function main(){$(formBlockSelctor).each(function(t){"false"!=$(this).attr("bmg-data-auto-delete-conditionally-invisible-elements")&&$(this).find(".w-condition-invisible").remove();let e=$(this),i=returnChildElements(e,'[bmg-form = "Form"]',0),o=returnChildElements(i,'[bmg-form = "Form Step"]',"false",`${dividerSelctor}, ${quizResultSelector}`),r=i.find(backwardsButtonSelector),a=i.find('[bmg-form = "Submit Button"]'),s=[{step:0}],n=!0,u=returnDevModeIndex(e);populateStylesObject(e),u<2?(i.find(dividerSelctor).remove(),o.hide(),o.eq(0).show()):console.log(`Dev mode ${u}: Visual dividers not removed...`),e.attr(formBlockindexAttribute,t),o.each(function(t){let i=$(this),o=!1,r=defineStepType(i,t,e);markClickElement(r),r.each(function(t){let e=$(this);e.attr(clickElementIdAttribute,t),e.click(()=>{o||(setTimeout(()=>{o=!1},10),markClickElement(r,e),c()),o=!0})})}),r.each(function(){$(this).click(()=>{b()})}),a.each(function(){$(this).click(()=>{p()})});let l=creatNextStepObject(o);function c(t=!1){let o=s[s.length-1].step,r=l[o];if(t&&"false"==r.swipeAllowed.toLowerCase())return;let a=r.$,n=a.find(`[${markClickElementAttribute} = "true"]`),c=n.attr(clickElementIdAttribute);1==n.length?stepRequirementsPassed(e,a)&&function t(e,o){let r=l[e].buttons[o].nextStepId;if(l[e].isLast)p();else{let a=l[e].$;$nextStep=l[r].$,s.push({step:r}),animateStepTransition(a,$nextStep,i,u)}u>.5&&console.log(`Dev mode ${u}; Click record: `,s)}(o,c):selectButton(0,a,e)}let d="true"==stylesObject[t].leftRightKeyEventInfinityAllowed;function m(t=1){let i=l[s[s.length-1].step].$,o=i.find(`[${clickElementIdAttribute}]`).length-1,r=parseInt(i.find(`[${markClickElementAttribute} = "true"]`).attr(clickElementIdAttribute)||-2),a=-2==r?0:r+t;selectButton(a=d?(a=a>o?0:a)<0?o:a:(a=a>o?o:a)<0?0:a,i,e)}function b(t=!1){let e=s[s.length-1].step,o=s[Math.max(s.length-2,0)].step;if(!t||"false"!=l[e].swipeAllowed.toLowerCase()){if(e!=o){let r=i.find(`[${stepIndexAttribute} = "${e}"]`),a=i.find(`[${stepIndexAttribute} = "${o}"]`);s.pop(),animateStepTransition(r,a,i,u)}u>.5&&console.log(`Dev mode ${u}; Click record: `,s)}}function p(){n=!1,removeOtherSteps(l,s,e),initQuizMode(e,s),performVisualSubmit(e,i,u)}0==t&&e.attr(autoFocusAttribute,!0),e.mouseenter(()=>{$(formBlockSelctor).attr(autoFocusAttribute,!1),e.attr(autoFocusAttribute,!0)});let f=(e.attr("bmg-data-esc-event")||"escape, esc, arrowup, up").split(", "),g=(e.attr("bmg-data-enter-event")||"enter, arrowdown, down").split(", "),h=(e.attr("bmg-data-left-event")||"arrowleft, left").split(", "),S=(e.attr("bmg-data-right-event")||"arrowright, right").split(", ");document.onkeydown=function(t){t=t||window.event;let o=s[s.length-1].step;if("false"!=i.find(`[${stepIndexAttribute} = "${o}"]`).attr("bmg-data-keyboard-events")&&"key"in t&&n&&"true"==e.attr(autoFocusAttribute)){let r=t.key.toLowerCase();f.includes(r)?b():g.includes(r)&&!t.shiftKey?c():h.includes(r)&&!t.shiftKey?m(-1):S.includes(r)&&!t.shiftKey&&m(1)}},defineSwipeType(e);let v=Hammer(e[0]),A=e.attr(swipeTypeAnimationAttribute);v.get("swipe").set({direction:Hammer.DIRECTION_ALL}),"false"==A||("to bottom"==A?(v.on("swipeup",()=>{b(!0)}),v.on("swipedown",()=>{c(!0)})):"to top"==A||"vertical"==A?(v.on("swipeup",()=>{c(!0)}),v.on("swipedown",()=>{b(!0)})):"to left"==A||"default"==A||"horizontal"==A?(v.on("swipeleft",()=>{c(!0)}),v.on("swiperight",()=>{b(!0)})):"to right"==A?(v.on("swipeleft",()=>{b(!0)}),v.on("swiperight",()=>{c(!0)})):"4"==A||"270\xb0"==A?(v.on("swipeup",()=>{b(!0)}),v.on("swipeleft",()=>{c(!0)}),v.on("swiperight",()=>{c(!0)}),v.on("swipedown",()=>{b(!0)})):"3"==A||"180\xb0"==A?(v.on("swipeup",()=>{b(!0)}),v.on("swipeleft",()=>{c(!0)}),v.on("swiperight",()=>{c(!0)}),v.on("swipedown",()=>{b(!0)})):"2"==A||"90\xb0"==A?(v.on("swipeup",()=>{b(!0)}),v.on("swipeleft",()=>{c(!0)}),v.on("swiperight",()=>{c(!0)}),v.on("swipedown",()=>{b(!0)})):(v.on("swipeup",()=>{c(!0)}),v.on("swipeleft",()=>{c(!0)}),v.on("swiperight",()=>{b(!0)}),v.on("swipedown",()=>{b(!0)})))})}function errorStatus(t="add",e,i){let o=stylesObject[i],r=o.cssErrorStatus,a=o.cssErrorStatusResolved,s=jqueryToJs(e);"add"==t?gsap.to(s,r):gsap.to(s,a)}function stepRequirementsPassed(t,e){let i=e.attr(stepTypeAttribute),o=parseInt(t.attr(formBlockindexAttribute));if("empty"==i)return!0;if("radio"==i){let r=e.find(radioSelector);return 0!=r.find(".w--redirected-checked").length||(errorStatus("add",r,o),r.off("click.stepRequirements"),r.on("click.stepRequirements",function(){errorStatus("remove",r,o),r.off("click.stepRequirements")}),!1)}console.log("TODO: Implement required checking. If error thrown, let left right event navigate through individual inputs -- enter & ecs should be functional in there as well.")}function selectButton(t,e,i){let o=stylesObject[parseInt(i.attr(formBlockindexAttribute))],r=o.cssDeselect,a=o.cssSelect,s=e.find(`[${clickElementIdAttribute}]`),n=jqueryToJs(s),u=e.find(`[${clickElementIdAttribute} = ${t}]`);markClickElement(s,u),gsap.to(n,r),gsap.to(u[0],a)}function initQuizMode(t,e){let i=t[0].querySelector(successSelector).querySelectorAll(quizResultSelector),o=stylesObject[parseInt(t.attr(formBlockindexAttribute))].redirectMsTime;if(i.length>0){console.log(i);let r=i[0],a=r.getAttribute(redirectUrlAttribute);if(void 0!=a){setTimeout(()=>{a=r.getAttribute(redirectUrlAttribute),location.assign(a)},o);return}console.log("Todo: Set up quiz mode funcitonality. Url functionality, nested forms, etc.")}}function defineSwipeType(t){let e=parseInt(t.attr(formBlockindexAttribute)),i=t.attr(swipeTypeAnimationAttribute),o=stylesObject[e],r=o.slideDirection.toLowerCase(),a=o.maxSwipeScreenSize,s=o.minSwipeScreenSize,n=$(window).outerWidth(!0);n<=a&&n>=s?(void 0!=i&&(r=i),t.attr(swipeTypeAnimationAttribute,r)):t.attr(swipeTypeAnimationAttribute,"false")}function performVisualSubmit(t,e,i=0,o=[]){let r=t.find(successSelector),a=stylesObject[t.attr(formBlockindexAttribute)],s=a.submitMsTime1/1e3,n=a.submitMsTime2/1e3,u=a.submitHide,l={...u,duration:0};submitShow=a.submitShow,resizeHeight1=e.outerHeight(!0),resizeHeight2=r.outerHeight(!0),multiplier1=a.autoResizeSuccessTimeMultiplier1,multiplier2=a.autoResizeSuccessTimeMultiplier2,submitTimeout=(u.duration+submitShow.duration)*1e3,tl=new gsap.timeline,resizeTl=new gsap.timeline,i<.5?setTimeout(e.submit(),submitTimeout):console.log(`Dev mode ${i}: Perform fake submit...`),tl.set(r[0],l),tl.to(e[0],u),tl.to(r[0],submitShow),resizeHeight2>=resizeHeight1?resizeTl.to(t[0],{height:resizeHeight2,duration:s*multiplier1}):(resizeTl.set(t[0],{height:resizeHeight1}),resizeTl.to(t[0],{height:resizeHeight2,duration:n*multiplier2}).delay(s)),resizeTl.set(t[0],{height:"auto"})}let timeLineStorage=!1;function animateStepTransition(t,e,i,o=0){if(o>=2){console.log(`Dev mode ${o}: Block the transition animation...`);return}let r=i.find(`[${stepIndexAttribute}]`).not(t).not(e),a=stylesObject[parseInt(i.closest(formBlockSelctor).attr(formBlockindexAttribute))],s=a.cssShow,n=a.cssHide,u={...n,duration:0},l=new gsap.timeline,c=t.outerHeight(!0),d=e.outerHeight(!0);if(speedMultiplierString=`<+=${100*(c==d?a.equalHeightTransitionSpeedMultiplier:1)}%`,isReverse=parseInt(t.attr(stepIndexAttribute))>parseInt(e.attr(stepIndexAttribute)),slideDirection=(t.attr(slideDirectionAttribute)||a.slideDirection).toLowerCase(),autoResizeTime1=s.duration,autoResizeTime2=n.duration,autoResizeTimeMultiplier1=a.autoResizeTimeMultiplier1,autoResizeTimeMultiplier2=a.autoResizeTimeMultiplier2,isReverse&&(slideDirection=(e.attr(slideDirectionAttribute)||slideDirection).toLowerCase()),o>=2&&console.log(`Dev mode ${o}; GSAP transition speed multiplier string: ${speedMultiplierString}`),"to bottom"==slideDirection){let m={...s,y:0},b={...n,y:-i.outerHeight(!0)},p={...b,duration:0},f={...s,y:0},g={...n,y:i.outerHeight(!0)},h={...g,duration:0};isReverse?(l.to(t[0],b),l.fromTo(e[0],h,f,speedMultiplierString)):(l.to(t[0],g),l.fromTo(e[0],p,m,speedMultiplierString))}else if("to top"==slideDirection){let S={...s,y:0},v={...n,y:-i.outerHeight(!0)},A={...v,duration:0},w={...s,y:0},y={...n,y:i.outerHeight(!0)},T={...y,duration:0};isReverse?(l.to(t[0],y),l.fromTo(e[0],A,S,speedMultiplierString)):(l.to(t[0],v),l.fromTo(e[0],T,w,speedMultiplierString))}else if("to left"==slideDirection||"default"==slideDirection){let x={...s,x:0},k={...n,x:-i.outerWidth(!0)},_={...k,duration:0},D={...s,x:0},I={...n,x:i.outerWidth(!0)},E={...I,duration:0};isReverse?(l.to(t[0],I),l.fromTo(e[0],_,x,speedMultiplierString)):(l.to(t[0],k),l.fromTo(e[0],E,D,speedMultiplierString))}else if("to right"==slideDirection){let M={...s,x:0},z={...n,x:-i.outerWidth(!0)},C={...z,duration:0},O={...s,x:0},R={...n,x:i.outerWidth(!0)},B={...R,duration:0};isReverse?(l.to(t[0],z),l.fromTo(e[0],B,O,speedMultiplierString)):(l.to(t[0],R),l.fromTo(e[0],C,M,speedMultiplierString))}else if("none"==slideDirection)l.to(t[0],n),l.fromTo(e[0],u,s);else{let j=a.customNextSlideIn,q=a.customNextSlideOut,H=a.customPrevSlideIn,J=a.customPrevSlideOut,N=a.customXMultiplier,V=a.customYMultiplier;void 0==j.x&&(j.x=0),void 0==q.x&&(q.x=N*i.outerWidth(!0)),void 0==H.x&&(H.x=0),void 0==J.x&&(J.x=-N*i.outerWidth(!0)),void 0==j.y&&(j.y=0),void 0==q.y&&(q.y=V*i.outerHeight(!0)),void 0==H.y&&(H.y=0),void 0==J.y&&(J.y=-V*i.outerHeight(!0));let P={...J,duration:0},L={...q,duration:0};isReverse?(autoResizeTime1=H.duration,autoResizeTime2=J.duration,l.to(t[0],J),l.fromTo(e[0],L,H,speedMultiplierString)):(autoResizeTime1=j.duration,autoResizeTime2=q.duration,l.to(t[0],q),l.fromTo(e[0],P,j,speedMultiplierString))}d>=c?gsap.to(i[0],{height:d,duration:autoResizeTime1*autoResizeTimeMultiplier1}):(gsap.set(i[0],{height:c}),gsap.to(i[0],{height:d,duration:autoResizeTime2*autoResizeTimeMultiplier2}).delay(autoResizeTime1)),timeLineStorage&&timeLineStorage.clear(),timeLineStorage=l,r.hide()}function removeOtherSteps(t,e,i){"true"==(i.attr("bmg-data-remove-other-steps")||"true")&&t.forEach(t=>{let i=!1,o=t.step;e.forEach(t=>{o==t.step&&(i=!0)}),t.isLast&&(i=!0),i||t.$.remove()})}function creatNextStepObject(t){let e=[];t.each(function(t){let i=$(this),o=i.find(`[${clickElementIdAttribute}]`),r=[];o.each(function(){let t=$(this);r.push({id:t.attr(clickElementIdAttribute),conditional:t.attr(conditionalAttribute)})}),e.push({$:i,step:t,swipeAllowed:i.attr("bmg-data-swipe-allowed")||"true",conditional:i.attr(conditionalAttribute),conditionalNext:i.attr("bmg-data-conditional-next"),buttons:r})});let i=e.length;return e.forEach(t=>{let o=t.step,r=t.$.attr("bmg-data-relative-last-step");t.isLast=o==i-1,"true"==r&&(t.isLast=!0),t.buttons.forEach(i=>{void 0!=i.conditional?i.nextStepId=(()=>{for(t of e)if(t.conditional==i.conditional)return t.step})():void 0!=t.conditionalNext?i.nextStepId=o+1:i.nextStepId=(()=>{for(t of e)if(t.step>o&&void 0==t.conditional)return t.step})()})}),e}function markClickElement(t,e=!1){t.attr(markClickElementAttribute,!1),e&&e.attr(markClickElementAttribute,!0)}function populateStylesObject(t){stylesObject.push({animationMsTime:parseFloat(t.attr("bmg-data-animation-ms-time")||500),equalHeightTransitionSpeedMultiplier:parseFloat(t.attr("bmg-data-equal-height-transition-speed-multiplier")||.25),cssShow:getJsonAttrVals(t,"bmg-data-css-show",cssShowDefault),cssHide:getJsonAttrVals(t,"bmg-data-css-hide",cssHideDefault),cssActive:getJsonAttrVals(t,"bmg-data-css-active",cssActiveDefault),cssInactive:getJsonAttrVals(t,"bmg-data-css-inactive",cssInactiveDefault),errorColor:t.attr("bmg-data-error-color")||"red",slideDirection:t.attr(slideDirectionAttribute)||"to left",customNextSlideIn:getJsonAttrVals(t,"bmg-data-custom-next-slide-in",customNextSlideInDefault),customNextSlideOut:getJsonAttrVals(t,"bmg-data-custom-next-slide-out",customNextSlideOutDefault),customPrevSlideIn:getJsonAttrVals(t,"bmg-data-custom-prev-slide-in",customPrevSlideInDefault),customPrevSlideOut:getJsonAttrVals(t,"bmg-data-custom-prev-slide-out",customPrevSlideOutDefault),customXMultiplier:parseFloat(t.attr("bmg-data-custom-x-percentage-multiplier")||0),customYMultiplier:parseFloat(t.attr("bmg-data-custom-y-percentage-multiplier")||0),autoResizeTimeMultiplier1:parseFloat(t.attr("bmg-data-auto-resize-time-multiplier-1")||1),autoResizeTimeMultiplier2:parseFloat(t.attr("bmg-data-auto-resize-time-multiplier-2")||.5),autoResizeSuccessTimeMultiplier1:parseFloat(t.attr("bmg-data-auto-resize-time-multiplier-1")||1),autoResizeSuccessTimeMultiplier2:parseFloat(t.attr("bmg-data-auto-resize-time-multiplier-2")||.85),maxSwipeScreenSize:parseInt(t.attr("bmg-data-max-swipe-screen-size")||767),minSwipeScreenSize:parseInt(t.attr("bmg-data-min-swipe-screen-size")||0),leftRightKeyEventInfinityAllowed:t.attr("bmg-data-left-key-event-infintiy-allowed")||"true",redirectMsTime:parseFloat(t.attr("bmg-data-redirect-ms-time")||1)});let e=stylesObject[stylesObject.length-1],i=e.cssShow,o=e.cssHide,r=e.cssActive,a=e.cssInactive,s=e.customNextSlideIn,n=e.customNextSlideOut,u=e.customPrevSlideIn,l=e.customPrevSlideOut;e.animationSTime=e.animationMsTime/1e3,void 0==i.duration&&(i.duration=e.animationSTime),void 0==o.duration&&(o.duration=e.animationSTime),void 0==r.duration&&(r.duration=e.animationSTime),void 0==a.duration&&(a.duration=e.animationSTime),void 0==s.duration&&(s.duration=e.animationSTime),void 0==n.duration&&(n.duration=e.animationSTime),void 0==u.duration&&(u.duration=e.animationSTime),void 0==l.duration&&(l.duration=e.animationSTime),e.submitMsTime1=parseFloat(t.attr("bmg-data-submit-ms-time-1"))||e.animationMsTime,e.submitMsTime2=parseFloat(t.attr("bmg-data-submit-ms-time-2"))||e.animationMsTime,e.submitHide=getJsonAttrVals(t,"bmg-data-submit-hide",o),e.submitShow=getJsonAttrVals(t,"bmg-data-submit-show",{...i,duration:1.5*e.animationSTime}),void 0==e.submitHide.duration&&(e.submitHide.duration=e.submitMsTime1/1e3),void 0==e.submitShow.duration&&(e.submitShow.duration=e.submitMsTime2/1e3),e.setCssInactive=getJsonAttrVals(t,"bmg-data-set-css-inactive",a),delete e.setCssInactive.duration,e.cssSelect=getJsonAttrVals(t,"bmg-data-css-select",r),e.cssDeselect=getJsonAttrVals(t,"bmg-data-css-deselect",a),e.cssErrorStatus=getJsonAttrVals(t,"bmg-data-css-error-status",{duration:e.animationSTime}),e.cssErrorStatusResolved=getJsonAttrVals(t,"bmg-data-css-error-status-resolved",{duration:e.animationSTime}),void 0==e.cssErrorStatus.borderColor&&(e.cssErrorStatus.borderColor=e.errorColor),void 0==e.cssErrorStatusResolved.borderColor&&(e.cssErrorStatusResolved.borderColor="")}function initActiveInactiveClickState(t,e,i){let o=stylesObject[e],r=o.cssActive,a=o.cssInactive,s=o.setCssInactive,n="radio"==i.attr(stepTypeAttribute),u=jqueryToJs(t);gsap.set(u,s),n?t.each(function(){let t=$(this);t.click(()=>{gsap.to(u,a),gsap.to(t[0],r)})}):t.each(function(){let t=$(this),e=!0,i=!1;t.click(()=>{i||(setTimeout(()=>{i=!1},10),e?(t.css(r),e=!1):(t.css(a),e=!0)),i=!0})})}function defineStepType(t,e,i){let o=t.find(radioSelector),r=t.find(".w-checkbox"),a=t.find('a, [bmg-form = "Continue Button"], .w-button').not('[bmg-form = "Not a Button"]').not(backwardsButtonSelector),s=t.find("input"),n=parseInt(i.attr(formBlockindexAttribute));return(t.attr(stepIndexAttribute,e),o.length>0)?(t.attr(stepTypeAttribute,"radio"),initActiveInactiveClickState(o,n,t),o.find("input").removeAttr("required"),void 0!=t.attr("bmg-data-not-auto-continue")?a:o):r.length>0?(t.attr(stepTypeAttribute,"checkbox"),initActiveInactiveClickState(r,n,t),a):s.length>0?(t.attr(stepTypeAttribute,"other input"),initActiveInactiveClickState(r,n,t),a):(t.attr(stepTypeAttribute,"empty"),a)}function returnChildElements(t,e,i="false",o="false"){let r=t.find(e),a=t.children();return r.length>0?r:("false"!=o&&(a=a.not(o)),"false"!=i&&(a=a.eq(i)),a)}function jqueryToJs(t){let e=[];return t.each(function(){e.push(this)}),e}function getJsonAttrVals(t,e,i,o=!0){return"{}"==(t.attr(e)||"{}")?{...i}:JSON.parse(preJsonParse(t.attr(e),!0))}function preJsonParse(t,e=!0){let i=trimBothStringSides(t.replace(", ",",")).split(","),o="",r=i.length-1;return(i.forEach((t,e)=>{t.replace(/\'/g,"").replace(": ",":").split(":").forEach((t,e)=>{o+=`"${t}"${e>0?"":": "}`}),o+=e<r?", ":""}),e)?`{${o}}`:o}function trimBothStringSides(t){return t.substring(1).slice(0,-1)}function returnDevModeIndex(t){let e=t.attr("bmg-data-dev-mode"),i=0;return devModeObject.forEach(t=>{t.names.forEach(o=>{o==e&&(i=t.value)})}),i}function loadGsap(){"undefined"==gsapDependency?$.loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js",function(){main()}):main()}jQuery.loadScript=function(t,e){jQuery.ajax({url:t,dataType:"script",success:e,async:!0})},"undefined"==hammerJsDependency?$.loadScript("https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js",function(){loadGsap()}):loadGsap();
