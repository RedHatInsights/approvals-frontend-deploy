(self.webpackChunkapproval=self.webpackChunkapproval||[]).push([[68],{5068:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ActionType:()=>l,createPromise:()=>f,default:()=>p});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t){return null!==t&&"object"===(void 0===t?"undefined":n(t))&&t&&"function"==typeof t.then}var i=r(34155),a=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l={Pending:"PENDING",Fulfilled:"FULFILLED",Rejected:"REJECTED"};function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[l.Pending,l.Fulfilled,l.Rejected],r=t.promiseTypeSuffixes||e,n=t.promiseTypeDelimiter||"_";return function(t){var e=t.dispatch;return function(t){return function(i){var l=void 0,f=void 0;if(!i.payload)return t(i);var p=i.payload;if(o(p))l=p;else if(o(p.promise))l=p.promise,f=p.data;else{if("function"!=typeof p&&"function"!=typeof p.promise)return t(i);if(l=p.promise?p.promise():p(),f=p.promise?p.data:void 0,!o(l))return t(u({},i,{payload:l}))}var c=i.type,y=i.meta,d=a(r,3),v=d[0],s=d[1],m=d[2],h=function(t,e){return u({type:[c,e?m:s].join(n)},null==t?{}:{payload:t},void 0!==y?{meta:y}:{},e?{error:!0}:{})};return t(u({type:[c,v].join(n)},void 0!==f?{payload:f}:{},void 0!==y?{meta:y}:{})),l.then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=h(t,!1);return e(r),{value:t,action:r}}),(function(t){var r=h(t,!0);throw e(r),t}))}}}}function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.dispatch;return"function"==typeof e?f()({dispatch:e}):(i&&i.env,null)}}}]);