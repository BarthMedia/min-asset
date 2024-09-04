function SimlBedeClient(e){let t="REQUESTED",n="VERIFIED",i="NOT_REQUESTED";var s=this;function r(e){return e-new Date().getTime()}function o(e,t){let n=new Date;var i=new Date;i.setTime(n.getTime()+1e3*t);var s={pinState:e,expiresAtMillis:i.getTime()},r=btoa(JSON.stringify(s));localStorage.siml_sessPin_status=r}function a(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var i=e[n];if(Array.isArray(i))for(var s in n+="[]",i){var r=i[s];t.length>0&&(t+="&"),t+=encodeURI(n+"="+r)}else t.length>0&&(t+="&"),t+=encodeURI(n+"="+i)}return t}function c(){try{sessionStorage.siml_sunbet_profile&&sessionStorage.removeItem("siml_sunbet_profile")}catch(e){log.warn("Error clearing profile")}return null}function u(){var e={auth:"",expiresAtMillis:""},t=localStorage.siml_sunbet_bede;return t&&(e=JSON.parse(atob(t))),e}function l(){var e=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)})}function f(e){return JSON.parse(atob(e.split(".")[1].replace("-","+").replace("_","/")))}function d(e){var t=void 0;return{errors:[{code:"bad-request",detail:"Bad Request.",status:"400",title:"Bad Request",meta:{correlationId:t=e||-1,serviceId:"SIMLBedeClientAPI"}},]}}function g(e){var t=void 0;return{errors:[{code:"not-found",detail:"Resource not found.",status:"404",title:"Not Found",meta:{correlationId:t=e||-1,serviceId:"SIMLBedeClientAPI"}},]}}function p(e){var t=void 0;return{errors:[{code:"not-authorized",detail:"Not authorized. Obtain appropriate security token and retry.",status:"401",title:"Not Authorized",meta:{correlationId:t=e||-1,serviceId:"SIMLBedeClientAPI"}},]}}function h(e){var t=void 0;return{errors:[{code:"service-unavialable",detail:"Bede service unavailable",status:"503",title:"Service Unavailable",meta:{correlationId:t=e||-1,serviceId:"SIMLBedeClientAPI"}},]}}function y(e){var t=void 0;return{errors:[{code:"server-error",detail:"Unexpected System Error",status:"500",title:"Internal ServiceError",meta:{correlationId:t=e||-1,serviceId:"SIMLBedeClientAPI"}},]}}function v(e,t){var n=e.status,i=e.statusText,s=e.statusText;return e.responseText&&(s=e.responseText),{errors:[{code:"unknown-error",detail:s,status:n,title:i,meta:{correlationId:t,serviceId:"SIMLBedeClientAPI"}},]}}function m(e,t,n,i,s,r,o){var a=void 0;try{var c=void 0;if(a=l(),r){var d=u();if(0==d.auth.trim().length)return o(p(a));f(d.auth),c="Bearer "+d.auth}var g=void 0;i&&i.trim().length>0&&(g=i);var h="application/json";s&&(h="application/x-www-form-urlencoded");var m=new XMLHttpRequest;m.open(t,n),"GET"!==t&&m.setRequestHeader("Content-Type",h),m.setRequestHeader("Accept","application/json"),m.setRequestHeader("X-Site-Code",e),m.setRequestHeader("X-Correlation-Token",a),r&&m.setRequestHeader("Authorization",c),m.onload=function(){if(200===m.status||201===m.status||202===m.status||204===m.status)o(null,m.responseText);else try{var e=void 0;e=JSON.parse(m.responseText),o(e)}catch(t){o(v(m,a))}},m.onerror=function(e){e.status="500",e.title="Error",e.detail="Internal Server Error. Please try again later.",o({errors:[e]})},g?m.send(g):m.send()}catch(b){o(y(a))}}function b(e,t,n,i){var s=void 0;try{var r=void 0;if(s=l(),n){var o=u();if(0==o.auth.trim().length)return i(p(s));f(o.auth),r="Bearer "+o.auth}var a=new XMLHttpRequest;a.open("HEAD",t),a.setRequestHeader("Accept","application/json"),a.setRequestHeader("X-Site-Code",e),a.setRequestHeader("X-Correlation-Token",s),n&&a.setRequestHeader("Authorization",r),a.onload=function(){if(200===a.status||201===a.status||204===a.status){var e=function e(t){var n={},i=t.getAllResponseHeaders().toLowerCase().split("\n"),s=0;for(s=0;s<i.length;s++){var r=i[s],o=r.substring(0,r.indexOf(":"));o&&!n[o]&&(n[o]=t.getResponseHeader(o))}return n}(a);return e.body=a.responseText,i(null,e)}try{var t=void 0;return t=JSON.parse(a.responseText),i(t)}catch(n){i(v(a,s))}},a.onerror=function(e){e.status="500",e.title="Error",e.detail="Internal Server Error. Please try again later.",i({errors:[e]})},a.send()}catch(c){i(y(s))}}return console,this.constants={PIN_REQSTED:t,PIN_VERIFIED:n,PIN_NOT_REQSTED:i},this.config=e,this.setTokensLocalStorage=function(){localStorage.setItem("token",this.getGameCredentials().gameToken),localStorage.setItem("playerID",this.getGameCredentials().playerId)},this.setLoginStart=function(){var e={timestamp:new Date().getTime()};localStorage.setItem("loginStart",JSON.stringify(e))},this.isLoggedIn=function(){try{return s.expiresInMillis()>0}catch(e){return!1}},this.getGameCredentials=function(){try{var e=u();if(0==e.auth.trim().length)return{playerId:"",gameToken:""};var t=f(e.auth);return{playerId:t.sub,gameToken:t.gameToken,password_expiry:t.password_expiry}}catch(n){return{playerId:"",gameToken:""}}},this.expiresInMillis=function(){try{var e=u();if(0==e.auth.trim().length)return -99.99;return r(e.expiresAtMillis)}catch(t){return -99.99}},this.forgotUsername=function(e,t){if(s.isLoggedIn())return t(d(l()));m(s.config.bede_site_code,"POST",s.config.session_path+"/forgotusername",JSON.stringify({email:e}),!1,!1,function(e,n){if(e)return t(e);t(null,JSON.parse(n))})},this.forgotPassword=function(e,t){if(s.isLoggedIn())return t(d(l()));m(s.config.bede_site_code,"POST",s.config.session_path+"/forgotpassword",JSON.stringify({username:e}),!1,!1,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.resetForgotPassword=function(e,t){if(s.isLoggedIn())return t(d(l()));var n=void 0;e.token&&(n=decodeURIComponent(e.token),e.token=n),m(s.config.bede_site_code,"PUT",s.config.session_path+"/updatepassword",JSON.stringify(e),!1,!1,function(e,n){if(e){t(e);return}t(null,null)})},this.checkResetForgotPasswordToken=function(e,t,n){if(s.isLoggedIn())return n(d(l()));var i=s.config.bede_player_path+"/players/identities/"+t+"/tokens";m(s.config.bede_site_code,"PATCH",i,JSON.stringify({purpose:"resetPassword",token:e}),!1,!1,function(e,t){if(e){n(e);return}t?n(null,JSON.parse(t)):n(null,"")})},this.login=function(e,t,n){m(s.config.bede_site_code,"POST",s.config.session_path+"/login",JSON.stringify({username:e,password:t}),!1,!1,function(e,t){if(e){n(e);return}var i=JSON.parse(t);s.storeSIMLState(i.access_token,i.expires_in),n(null,f(i.access_token).sub)})},this.register=function(e,t){var n=s.config.bede_site_code,i=s.config.session_path+"/minimalregister";e.currencyCode||(e.currencyCode="ZAR"),m(n,"POST",i,JSON.stringify(e),!1,!1,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.updateProfile=function(e,t){s.getSessionPinStatus().pinState;var n=s.config.bede_site_code,i=s.config.session_path+"/updateProfile",r=e.siteData;r&&delete e.siteData;var o=JSON.stringify(e),a=s.getGameCredentials();c(),m(n,"POST",i,o,!1,!0,function(e,n){if(e){t(e);return}var i={playerId:a.playerId};r?s.updateAccountData(r,t):t(null,i)})},this.updateAccountData=function(e,t){var n=s.config.bede_site_code,i=s.config.session_path+"/updateaccountdata",r=JSON.stringify(e),o=s.getGameCredentials();c(),m(n,"POST",i,r,!1,!0,function(e,n){if(e){t(e);return}t(null,{playerId:o.playerId})})},this.getAccountData=function(e){m(s.config.bede_site_code,"POST",s.config.session_path+"/accountdata","",!1,!0,function(t,n){if(t)return e(t);e(null,n)})},this.userExistsURL=function(e){var t=l(),n=e;n.sitecode=s.config.bede_site_code,n.correlation_id=t;var i=a(n);return s.config.session_path+"/isuniqueuser?"+i},this.userExists=function(e,t){m(s.config.bede_site_code,"POST",s.config.session_path+"/isuniqueuser",JSON.stringify(e),!1,!1,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.refreshSession=function(e){var t=s.config.bede_site_code,n=s.config.session_path+"/refresh";c(),m(t,"POST",n,"",!0,!0,function(t,n){if(t){e(t);return}var i=JSON.parse(n);s.storeSIMLState(i.access_token,i.expires_in),e(null,f(i.access_token).sub)})},this.getSessionPinStatus=function(){var e={pinState:i,expiresAtMillis:-99},t=e,n=localStorage.siml_sessPin_status;return n?1>r((t=JSON.parse(atob(n))).expiresAtMillis)||!s.isLoggedIn()?e:t:e},this.requestSessionPin=function(e,n,r){m(s.config.bede_site_code,"POST",s.config.session_path+"/reqSessPin",JSON.stringify({verify_ttl_secs:e,channel:n}),!1,!0,function(n,s){if(n){o(i,-99),r(n);return}var a=JSON.parse(s);!0==a.sent&&o(t,e),r(null,a)})},this.verifySessionPin=function(e,t,i){m(s.config.bede_site_code,"POST",s.config.session_path+"/verifySessPin",JSON.stringify({valid_ttl_secs:e,pin:t}),!1,!0,function(t,s){if(t){i(t);return}var r=JSON.parse(s);!0==r.valid&&o(n,e),i(null,r)})},this.getPaymentKey=function(e,t){this.refreshSession(function(n,i){if(n)return t(n);m(s.config.bede_site_code,"POST",s.config.session_path+"/paymentkey",a({amount:e}),!0,!0,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})})},this.getAppPaymentKey=function(e,t){m(s.config.bede_site_code,"POST",s.config.session_path+"/paymentkey",a({amount:e}),!0,!0,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.getTokenPaymentKey=function(e,t,n){this.refreshSession(function(i,r){if(i)return n(i);m(s.config.bede_site_code,"POST",s.config.session_path+"/paymentkey",a({amount:e,payment_entity_id:t}),!0,!0,function(e,t){if(e){n(e);return}n(null,JSON.parse(t))})})},this.getPaymentEntities=function(e){m(s.config.bede_site_code,"POST",s.config.session_path+"/paymententities","",!1,!0,function(t,n){if(t){e(t);return}e(null,JSON.parse(n))})},this.listDeposits=function(e,t){t||"function"!=typeof e||(t=e,e=null);var n=e;n||(n={}),n.type="Deposit";var i=s.config.bede_site_code,r=JSON.stringify(n);m(i,"POST",s.config.session_path+"/listdeposits",r,!1,!0,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.removePaymentEntity=function(e,t,n){s.getSessionPinStatus().pinState;var i=s.config.bede_site_code,r=JSON.stringify({payment_entity_id:e,reason:t});m(i,"DELETE",s.config.session_path+"/deletewithdrawalentity",r,!1,!0,function(e,t){if(e){n(e);return}n(null,JSON.parse(t))})},this.registerWithdrawalEntity=function(e,t){s.getSessionPinStatus().pinState;var n=s.config.bede_site_code,i=JSON.stringify(e);m(n,"POST",s.config.session_path+"/createwithdrawalentity",i,!1,!0,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.listWithdrawals=function(e,t){t||"function"!=typeof e||(t=e,e=null);var n=e;n||(n={}),n.type="Withdrawal";var i=s.config.bede_site_code,r=JSON.stringify(n);m(i,"POST",s.config.session_path+"/listwithdrawals",r,!1,!0,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.requestWithdrawal=function(e,t){var n=s.config.bede_site_code,i=s.config.session_path+"/withdraw";e.currency_code||(e.currency_code="ZAR"),m(n,"POST",i,a(e),!0,!0,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.cancelPendingWithdrawal=function(e,t){m(s.config.bede_site_code,"POST",s.config.session_path+"/reversewithdrawal",JSON.stringify({transaction_id:e}),!1,!0,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.logout=function(e){var t=s.config.bede_site_code,n=s.config.bede_player_path+"/players/sessions";c(),s.isLoggedIn()?m(t,"DELETE",n,"",!1,!0,function(t,n){if(s.storeSIMLState("",-100),o(i,-99),t){e(t);return}e(null,"")}):(s.storeSIMLState("",-100),o(i,-99))},this.changePassword=function(e,t,n){s.getSessionPinStatus().pinState,m(s.config.bede_site_code,"POST",s.config.session_path+"/changepassword",JSON.stringify({old_password:e,new_password:t}),!1,!0,function(e,t){if(e)return n(e);n(null,"")})},this.getWallet=function(e){var t=s.config.bede_site_code,n=s.getGameCredentials().playerId;m(t,"GET",s.config.bede_player_path+"/players/"+n+"/wallets","",!1,!0,function(t,n){if(t){e(t);return}e(null,JSON.parse(n))})},this.getWalletTrxCount=function(e,t){var n=a(e),i=s.config.bede_site_code,r=s.getGameCredentials().playerId,o=s.config.bede_player_path+"/players/"+r+"/activities";n&&(o=o+"?"+n),b(i,o,!0,function(e,n){if(e)return t(e);var i=0,s=0,r=0;return n["x-items-per-page"]&&(s=n["x-items-per-page"]),n["x-total-items"]&&(i=n["x-total-items"]),n["x-total-pages"]&&(r=n["x-total-pages"]),t(null,{itemsPerPage:s,totalItems:i,totalPages:r})})},this.getWalletTrxs=function(e,t){var n=s.config.bede_site_code,i=a(e),r=s.getGameCredentials().playerId,o=s.config.bede_player_path+"/players/"+r+"/activities",o=o+"?"+i;m(n,"GET",o,"",!1,!0,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.getBalances=function(e){var t=s.config.bede_site_code,n=s.getGameCredentials().playerId;m(t,"GET",s.config.bede_player_path+"/players/"+n+"/balances","",!1,!0,function(t,n){if(t){e(t);return}e(null,JSON.parse(n))})},this.getLimits=function(e){var t=s.config.bede_site_code,n=s.getGameCredentials().playerId;m(t,"GET",s.config.bede_player_path+"/players/"+n+"/limits","",!1,!0,function(t,n){if(t){e(t);return}e(null,JSON.parse(n))})},this.setLimits=function(e,t){var n=s.config.bede_site_code,i=s.getGameCredentials().playerId;m(n,"PATCH",s.config.bede_player_path+"/players/"+i+"/limits",JSON.stringify(e),!1,!0,function(e,n){if(e){t(e);return}t(null,"")})},this.setPendingLimits=function(e,t){var n=s.config.bede_site_code,i=s.getGameCredentials().playerId;m(n,"PUT",s.config.bede_player_path+"/players/"+i+"/pendinglimits",JSON.stringify(e),!1,!0,function(e,n){if(e){t(e);return}t(null,"")})},this.getProfile=function(e){var t=function e(t){if(!t.config.cache_profile||!t.isLoggedIn())return c();var n=sessionStorage.siml_sunbet_profile;return n?JSON.parse(atob(n)):null}(s);t&&e(null,t);var n=s.config.bede_site_code,i=s.getGameCredentials().playerId;m(n,"GET",s.config.bede_player_path+"/players/"+i+"/profile","",!1,!0,function(t,n){if(t){e(t);return}var i=JSON.parse(n);(function e(t,n){try{if(!t.config.cache_profile||!t.isLoggedIn()||!n)return c();var i=btoa(JSON.stringify(n));sessionStorage.siml_sunbet_profile=i}catch(s){log.warn("Error cacheing profile")}})(s,i),e(null,i)})},this.checkSunMVGProfile=function(e,t){m(s.config.bede_site_code,"POST",s.config.session_path+"/verifymvg",JSON.stringify(e),!1,!1,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.getMessageCounts=function(e,t){var n=a(e),i=s.config.bede_site_code,r=s.getGameCredentials().playerId,o=s.config.bede_player_path+"/players/"+r+"/messages";n&&(o=o+"?"+n),b(i,o,!0,function(e,n){if(e)return t(e);var i=0,s=0;return n["x-total-count"]&&(i=n["x-total-count"]),n["x-total-unread-count"]&&(s=n["x-total-unread-count"]),t(null,{totalCount:i,totalUnreadCount:s})})},this.listMessages=function(e,t){var n=a(e),i=s.config.bede_site_code,r=s.getGameCredentials().playerId,o=s.config.bede_player_path+"/players/"+r+"/messages";n&&(o=o+"?"+n),m(i,"GET",o,"",!1,!0,function(e,n){return e?t(e):t(null,JSON.parse(n))})},this.getMessage=function(e,t){var n=s.config.bede_site_code,i=s.getGameCredentials().playerId;m(n,"GET",s.config.bede_player_path+"/players/"+i+"/messages/"+e,"",!1,!0,function(e,n){return e?t(e):t(null,JSON.parse(n))})},this.deleteMessage=function(e,t){var n=s.config.bede_site_code,i=s.getGameCredentials().playerId;m(n,"DELETE",s.config.bede_player_path+"/players/"+i+"/messages/"+e,"",!1,!0,function(e,n){return e?t(e):t(null,"")})},this.getBonusCount=function(e,t){var n=a(e),i=s.config.bede_site_code,r=s.config.bede_player_path+"/bonuses";n&&(r=r+"?"+n),b(i,r,s.isLoggedIn(),function(e,n){if(e)return t(e);var i=0;return n["x-total-count"]&&(i=n["x-total-count"]),t(null,{totalCount:i})})},this.listBonuses=function(e,t){var n=a(e),i=s.config.bede_site_code,r=s.config.bede_player_path+"/bonuses";n&&(r=r+"?"+n),m(i,"GET",r,"",!1,s.isLoggedIn(),function(e,n){return e?t(e):t(null,JSON.parse(n))})},this.getBonus=function(e,t){var n=s.config.bede_site_code,i=s.getGameCredentials().playerId,r=s.config.bede_player_path+"/players/"+i+"/bonuses/"+e.promoCode;if(e.depositAmount){var o=a({depositAmount:e.depositAmount});o&&(r=r+"?"+o)}m(n,"GET",r,"",!1,!0,function(e,n){return e?t(e):t(null,JSON.parse(n))})},this.activateBonus=function(e,t){var n=s.config.bede_site_code,i=s.getGameCredentials().playerId;m(n,"PUT",s.config.bede_player_path+"/players/"+i+"/bonuses/"+e,"",!1,!0,function(e,n){return e?t(e):t(null,"")})},this.deactivateAccount=function(e,t){var n=JSON.stringify(e),i=s.config.bede_site_code,r=s.getGameCredentials().playerId;m(i,"PUT",s.config.bede_player_path+"/players/"+r+"/accountstatus",n,!1,!0,function(e,n){return e?t(e):t(null,n)})},this.cancelBonus=function(e,t){m(s.config.bede_site_code,"DELETE",s.config.bede_player_path+"/bonuses/"+e,"",!1,!0,function(e,n){return e?t(e):t(null,"")})},this.listBonusHistory=function(e,t){var n=a(e),i=s.getGameCredentials().playerId,r=s.config.bede_player_path+"/players/"+i+"/bonuses",o=s.config.bede_site_code;n&&(r=r+"?"+n),m(o,"GET",r,"",!1,!0,function(e,n){return e?t(e):t(null,JSON.parse(n))})},this.storeSIMLState=function(e,t){let n=new Date;var i=new Date;i.setTime(n.getTime()+1e3*t);var s={auth:e,expiresAtMillis:i.getTime()},r=btoa(JSON.stringify(s));localStorage.siml_sunbet_bede=r},this.getGames=function(e,t,n){var i=s.config.bede_site_code,r=null!=e?"take="+e:"take=100";if(t){var o=t.tag,a="";if(Array.isArray(t.tag))for(let c=0;c<t.tag.length;c++)a+="&tag[]="+o[c];else a="&tag[]="+o;var u=s.config.bede_player_path+"/games?"+r+a}else u=s.config.bede_player_path+"/games?"+r;m(i,"GET",u,JSON.stringify({currentPage:"1",itemsPerPage:"40",totalPages:"1",totalItems:"100"}),!1,!0,function(e,t){if(e){n(e);return}n(null,JSON.parse(t))})},this.getGame=function(e,t){m(s.config.bede_site_code,"GET",s.config.bede_player_path+"/games/"+e,"",!1,!0,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.launchGame=function(e,t,n){var i=s.config.bede_site_code,r=s.getGameCredentials().playerId,o=s.config.bede_player_path+"/games/"+e+"/launch",a={playerId:r,channel:"desktop",language:"EN",autoLaunch:!1,technology:"flash",userAgent:window.navigator.userAgent,sourceUrl:i+"/en.games.html",sourceArea:"divLeftMenu",includeAdditionalData:!1,currencyCode:"ZAR"};t&&(a.tableId=t),m(i,"POST",o,JSON.stringify(a),!1,!0,function(e,t){if(e){n(e);return}n(null,JSON.parse(t))})},this.availableBalance=function(e,t){m(s.config.bede_site_code,"GET",s.config.session_path+"/points/available/"+e,"",!1,!0,function(e,n){if(e){t(e);return}t(null,JSON.parse(n))})},this.requestTransfer=function(e,t,n,i){m(s.config.bede_site_code,"POST",s.config.session_path+"/points/casino/transfer/"+e,JSON.stringify({amount:t,bedewallet:n}),!1,!0,function(e,t){if(e){i(e);return}i(null,JSON.parse(t))})},this.authorizeTransfer=function(e,t){m(s.config.bede_site_code,"POST",s.config.session_path+"/points/authtransfer",JSON.stringify({pin:e}),!1,!0,function(e,n){if(e){t(e);return}t(null,n)})},this.confirmFicaPin=function(e,t){m(s.config.bede_site_code,"POST",s.config.session_path+"/confirmMVGFicaPin ",JSON.stringify({pin:e}),!1,!0,function(e,n){if(e){t(e);return}t(null,n)})},this.activateDepositBonus=function(e,t){m(s.config.bede_site_code,"PUT",s.config.session_path+"/activateBonusSegment/"+e,"",!1,!0,function(e){if(e){t(e);return}})},this.getSegment=function(e){m(s.config.bede_site_code,"GET",s.config.session_path+"/segments","",!1,!0,function(t,n){return t?e(t):e(null,JSON.parse(n))})},this.optIn=function(e,t){var n=JSON.stringify({campaign:e});m(s.config.bede_site_code,"POST",s.config.session_path+"/optInCampaign",n,!1,!0,function(e,n){return e?t(e):t(null,n)})},this.optInBirthday=function(e){var t=JSON.stringify({campaign:"birthday2023"});m(s.config.bede_site_code,"POST",s.config.session_path+"/optInCampaign",t,!1,!0,function(t,n){return t?e(t):e(null,n)})},this.getLeaderboard=function(e,t){m(s.config.bede_site_code,"GET",s.config.session_path+"/leaderboard/"+e,"",!1,!0,function(e,n){return e?t(e):t(null,JSON.parse(n))})},this.getnonMVGLeaderboard=function(e){m(s.config.bede_site_code,"GET",s.config.session_path+"/nonmvg/leaderboard/birthday2023","",!1,!0,function(t,n){return t?e(t):e(null,JSON.parse(n))})},this.getnoMVGLeaderboard=function(e){m(s.config.bede_site_code,"GET",s.config.session_path+"/nonmvg/leaderboard/SunBetGolfChallenge2023","",!1,!0,function(t,n){return t?e(t):e(null,JSON.parse(n))})},this.activatePromo=function(e,t){m(s.config.bede_site_code,"PUT",s.config.session_path+"/activatePromo/"+e,"",!1,!0,function(e,n){return e?t(e):t(null,n)})},this.kambiRewards=function(e){m(s.config.bede_site_code,"GET",s.config.session_path+"/kambi/player/rewards","",!1,!0,function(t,n){return t?e(t):e(null,JSON.parse(n))})},this.generateCall=function(e,t,n,i){var r=JSON.stringify({amount:e,player:t,method:n});m(s.config.bede_site_code,"POST",s.config.session_path+"/walletdoc/deposit/generate",r,!1,!0,function(e,t){return e?i(e):i(null,JSON.parse(t))})},this.statusCall=function(e,t,n,i){var r=JSON.stringify({amount:e,player:t,transactionId:n});m(s.config.bede_site_code,"POST",s.config.session_path+"/walletdoc/deposit/status",r,!1,!0,function(e,t){return e?i(e):i(null,JSON.parse(t))})},this.ozowDeposit=function(e,t,n){var i=JSON.stringify({amount:e,player:t});m(s.config.bede_site_code,"POST",s.config.ingress_session_path+"/ozow-node/deposit/create",i,!1,!0,function(e,t){return e?n(e):n(null,JSON.parse(t))})},this.ozowCheck=function(e,t,n){var i=JSON.stringify({transactionReference:e,player:t});m(s.config.bede_site_code,"POST",s.config.ingress_session_path+"/ozow-node/deposit/check",i,!1,!0,function(e,t){return e?n(e):n(null,JSON.parse(t))})},this.ficaUpload=function(e,t,n){var i=s.config.bede_site_code,r=s.config.session_path+"/uploadFicDocs?file="+e;console.log("body",t),function e(t,n,i,s,r,o,a){var c=void 0;try{var d=void 0;if(c=l(),o){var g=u();if(0==g.auth.trim().length)return a(p(c));f(g.auth),d="Bearer "+g.auth}var h=s,m="application/json";r&&(m="multipart/form-data");var b=new XMLHttpRequest;b.open(n,i),b.setRequestHeader("Accept","application/json"),b.setRequestHeader("X-Site-Code",t),b.setRequestHeader("X-Correlation-Token",c),o&&b.setRequestHeader("Authorization",d),b.onload=function(){if(200===b.status||201===b.status||204===b.status)a(null,b.responseText);else try{var e=void 0;e=JSON.parse(b.responseText),a(e)}catch(t){a(v(b,c))}},b.onerror=function(e){e.status="500",e.title="Error",e.detail="Internal Server Error. Please try again later.",a({errors:[e]})},h?b.send(h):b.send()}catch(T){a(y(c))}}(i,"POST",r,t,!0,!0,n)},this.getHistory=function(e,t){m(s.config.bede_site_code,"GET",s.config.session_path+"/pragmatic/history?take=80&skip="+e,"",!1,!0,function(e,n){return e?t(e):t(null,JSON.parse(n))})},this.getProviderDetails=function(e,t,n){m(s.config.bede_site_code,"GET",s.config.session_path+"/gameprovider/license?gameprovider="+e+"&trxdate="+t,"",!1,!0,function(e,t){return e?n(e):n(null,JSON.parse(t))})},this.sunbetManualClaim=function(e,t){m(s.config.bede_site_code,"POST",s.config.session_path+"/sunslotskiosk/manualclaim/"+e,"",!1,!1,function(e,n){if(e){t(e);return}t(null,n),console.log("data",n)})},this.sunbetClaim=function(e,t){m(s.config.bede_site_code,"POST",s.config.session_path+"/sunslotskiosk/sunbetclaim/"+e,"",!1,!0,function(e,n){if(e){t(e);return}t(null,n)})},this.authSunbetClaim=function(e,t){m(s.config.bede_site_code,"POST",s.config.session_path+"/sunslotskiosk/authclaim",JSON.stringify({pin:e}),!1,!0,function(e,n){if(e){t(e);return}t(null,n)})},this.sunLaunchGame=function(e,t){m(s.config.bede_site_code,"GET",e,"",!1,!0,function(e,n){return e?t(e):t(null,JSON.parse(n))})},this.scoutPlayerToken=function(e,t){m(s.config.bede_site_code,"POST",e+"/scoutPlayerToken","",!1,!0,function(e,n){return e?t(e):t(null,JSON.parse(n))})},this.launchTopSpin=function(e,t,n){m(s.config.bede_site_code,"GET",e+"/launchurl/"+t,"",!1,this.isLoggedIn(),function(e,t){return e?n(e):n(null,JSON.parse(t))})},this.turfsportLobby=function(e){var t=s.config.bede_site_code,n=$("#global_config_attributes").data("turfsport_baseurl")+"/sessionToken",i=$("#global_config_attributes").data("turfsport_server");m(t,"GET",n,"",!1,!0,function(t,n){if(t)return e(t);var s=JSON.parse(n);return s.turfsport_url=i,e(null,s)})},this}(()=>{let e=[];window.simlBC&&(e=simlBC),window.simlBC=SimlBedeClient(siml_bedeClientConfig),Object.assign(simlBC,{push(...e){e.forEach(e=>e())}}),simlBC.push(...e)})();
