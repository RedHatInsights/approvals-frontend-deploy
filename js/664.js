/*! For license information please see 664.js.LICENSE.txt */
(self.webpackChunkapproval=self.webpackChunkapproval||[]).push([[664],{22122:(e,t,r)=>{"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}r.d(t,{Z:()=>o})},19756:(e,t,r)=>{"use strict";function o(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}r.d(t,{Z:()=>o})},8679:(e,t,r)=>{"use strict";var o=r(59864),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},f={};function s(e){return o.isMemo(e)?a:f[e.$$typeof]||n}f[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},f[o.Memo]=a;var p=Object.defineProperty,i=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(m){var n=l(r);n&&n!==m&&e(t,n,o)}var a=i(r);y&&(a=a.concat(y(r)));for(var f=s(t),b=s(r),d=0;d<a.length;++d){var $=a[d];if(!(c[$]||o&&o[$]||b&&b[$]||f&&f[$])){var S=u(r,$);try{p(t,$,S)}catch(e){}}}}return t}},69921:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,f=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,i=r?Symbol.for("react.async_mode"):60111,y=r?Symbol.for("react.concurrent_mode"):60111,u=r?Symbol.for("react.forward_ref"):60112,l=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,d=r?Symbol.for("react.lazy"):60116,$=r?Symbol.for("react.block"):60121,S=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function P(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case i:case y:case c:case f:case a:case l:return e;default:switch(e=e&&e.$$typeof){case p:case u:case d:case b:case s:return e;default:return t}}case n:return t}}}function O(e){return P(e)===y}t.AsyncMode=i,t.ConcurrentMode=y,t.ContextConsumer=p,t.ContextProvider=s,t.Element=o,t.ForwardRef=u,t.Fragment=c,t.Lazy=d,t.Memo=b,t.Portal=n,t.Profiler=f,t.StrictMode=a,t.Suspense=l,t.isAsyncMode=function(e){return O(e)||P(e)===i},t.isConcurrentMode=O,t.isContextConsumer=function(e){return P(e)===p},t.isContextProvider=function(e){return P(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return P(e)===u},t.isFragment=function(e){return P(e)===c},t.isLazy=function(e){return P(e)===d},t.isMemo=function(e){return P(e)===b},t.isPortal=function(e){return P(e)===n},t.isProfiler=function(e){return P(e)===f},t.isStrictMode=function(e){return P(e)===a},t.isSuspense=function(e){return P(e)===l},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===y||e===f||e===a||e===l||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===b||e.$$typeof===s||e.$$typeof===p||e.$$typeof===u||e.$$typeof===S||e.$$typeof===v||e.$$typeof===g||e.$$typeof===$)},t.typeOf=P},59864:(e,t,r)=>{"use strict";e.exports=r(69921)}}]);