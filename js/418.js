/*! For license information please see 418.js.LICENSE.txt */
(self.webpackChunkapproval=self.webpackChunkapproval||[]).push([[418],{27418:r=>{"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,a){for(var c,i,p=o(r),s=1;s<arguments.length;s++){for(var f in c=Object(arguments[s]))t.call(c,f)&&(p[f]=c[f]);if(e){i=e(c);for(var l=0;l<i.length;l++)n.call(c,i[l])&&(p[i[l]]=c[i[l]])}}return p}}}]);