(self.webpackChunkapproval=self.webpackChunkapproval||[]).push([[930],{49214:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(86244).defineMessages)({myRequests:{id:"tabs.myRequests",defaultMessage:"My requests"},allRequests:{id:"tabs.allRequests",defaultMessage:"All requests"},approvalProccess:{id:"tabs.approvalProcess",defaultMessage:"Approval processes"}})},18393:(e,t,r)=>{"use strict";r.d(t,{Z:()=>E});var n=r(22122),a=r(96156),l=r(81253),s=r(30624),u=r.n(s),o=r(45697),c=r.n(o),p=r(78267),i=r(46182),f=r(26196),b=r(80345),d=r(94851),m=r(72969),v=r(56485),Z=r(38089),O=r(90222),h=r(23811),g=r(77789);const y=function(e){var t=e.name,r=e.label,n=(0,g.default)({name:t}).input,a=n.value,l=n.onChange,s=function(e){if(l(a.filter((function(t){return t.value!==e}))),0===(null==a?void 0:a.length))return null};return a&&a.length?u().createElement(h.FormGroup,{fieldId:t,label:r},u().createElement(O.ChipGroup,null,a.map((function(e){var t=e.label,r=e.value;return u().createElement(Z.Chip,{key:r.value,onClick:function(){return s(r)}},t)})))):""};var P=function(e){var t,r=e.templateProps,s=(0,l.Z)(e,["templateProps"]);return u().createElement("div",null,u().createElement(p.Z,(0,n.Z)({componentMapper:(t={},(0,a.Z)(t,i.default.SELECT,b.ZP),(0,a.Z)(t,i.default.TEXTAREA,d.Z),(0,a.Z)(t,i.default.TEXT_FIELD,m.Z),(0,a.Z)(t,i.default.SUB_FORM,v.Z),(0,a.Z)(t,"initial-chips",y),t),FormTemplate:function(e){return u().createElement(f.ZP,(0,n.Z)({},e,r))}},s)))};P.propTypes={templateProps:c().object,schema:c().object};const E=P},1054:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(96156),a=r(334);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(0,a.useLocation)(),r=t.search,l=new URLSearchParams(r);return[e.reduce((function(e,t){return s(s({},e),{},(0,n.Z)({},t,l.get(t)))}),{}),r,l]}}}]);
//# sourceMappingURL=../sourcemaps/930.6ae2f4570a03728ae226.js.map