(self.webpackChunkapproval=self.webpackChunkapproval||[]).push([[89],{65045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>D});var s=r(28481),n=r(30624),a=r.n(n),o=r(86350),i=r(24685),u=r(334),l=r(5469),c=r(11107);const d=function(e){var t=(0,n.useContext)(l.Z).userRoles,r=(0,u.useLocation)();return(0,c.wM)(t)?a().createElement(u.Route,e):a().createElement(u.Redirect,{to:{pathname:"/403",state:{from:r}}})};var p=r(50409);const f=function(e){var t=(0,n.useContext)(l.Z).userRoles,r=(0,u.useLocation)(),s=(0,c.wM)(t);return(0,c.LL)(t)||s?a().createElement(u.Route,e):a().createElement(u.Redirect,{to:{pathname:"/403",state:{from:r}}})};var m=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(248),r.e(930),r.e(235),r.e(864),r.e(216)]).then(r.bind(r,51321))})),g=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(248),r.e(930),r.e(235),r.e(388),r.e(748),r.e(51)]).then(r.bind(r,87336))})),v=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(248),r.e(930),r.e(235),r.e(388),r.e(748),r.e(444)]).then(r.bind(r,2036))})),y=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(248),r.e(930),r.e(388),r.e(864),r.e(893)]).then(r.bind(r,40729))})),E=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(248),r.e(930),r.e(235),r.e(864),r.e(216)]).then(r.bind(r,8307))})),b=(0,n.lazy)((function(){return Promise.all([r.e(410),r.e(248),r.e(468)]).then(r.bind(r,27695))})),q=["/400","/401","/403","/404"],O=function(){var e=(0,n.useContext)(l.Z).userRoles,t=(0,u.useLocation)(),r=(0,c.wM)(e),o=(0,c.LL)(e),i=(0,n.useState)(p.Z.requests.index),O=(0,s.Z)(i,2),h=O[0],M=O[1];return(0,n.useEffect)((function(){M(o||r?p.Z.requests.index:{pathname:"/403",state:{from:t}})}),[e]),a().createElement(u.Switch,null,a().createElement(d,{path:p.Z.workflows.index,component:y}),a().createElement(f,{path:p.Z.requests.index,component:m}),a().createElement(u.Route,{path:p.Z.allrequests.index,component:E}),a().createElement(u.Route,{path:p.Z.request.index,component:g}),a().createElement(u.Route,{path:p.Z.allrequest.index,component:v}),a().createElement(u.Route,{path:q,component:b}),a().createElement(u.Route,null,a().createElement(u.Redirect,{to:h})))},h=r(76690),M=r(61338),w=r(29558),R=r(96692),Z=window.location.pathname.split("/");Z.shift();var L="/";"beta"===Z[0]&&(L="/".concat(Z.shift(),"/"));const D=function(){var e=(0,n.useState)(!1),t=(0,s.Z)(e,2),r=t[0],d=t[1],p=(0,n.useState)({}),f=(0,s.Z)(p,2),m=f[0],g=f[1];return(0,n.useEffect)((function(){insights.chrome.init(),Promise.all([insights.chrome.auth.getUser().then((function(){return(0,R.Fv)().listRoles(M.he.limit,0,"Approval ","","partial","principal").then((function(e){return g((0,c.SA)(null==e?void 0:e.data))}))}))]).then((function(){return d(!0)})),insights.chrome.identifyApp("approval")}),[]),r?a().createElement(u.BrowserRouter,{basename:"".concat(L).concat(Z[0],"/").concat(Z[1],"/").concat(Z[2])},a().createElement(n.Suspense,{fallback:a().createElement(h.zx,null)},a().createElement(w.Z,{locale:"en"},a().createElement(l.Z.Provider,{value:{userRoles:m}},a().createElement(a().Fragment,null,a().createElement(i.ZP,null),a().createElement(o.Z,{className:"pf-u-p-0 pf-u-ml-0"},a().createElement(O,null))))))):a().createElement(h.zx,null)}},50409:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s={allrequests:{index:"/allrequests"},requests:{index:"/requests",comment:"/requests/comment",approve:"/requests/approve",deny:"/requests/deny"},request:{index:"/request",comment:"/request/comment",approve:"/request/approve",deny:"/request/deny"},allrequest:{index:"/allrequest",comment:"/allrequest/comment",approve:"/allrequest/approve",deny:"/allrequest/deny"},workflows:{index:"/workflows",add:"/workflows/add-workflow",remove:"/workflows/remove",edit:"/workflows/edit"}}},11107:(e,t,r)=>{"use strict";r.d(t,{Fr:()=>l,pS:()=>c,B1:()=>d,mG:()=>p,Sy:()=>f,wM:()=>m,LL:()=>g,pu:()=>v,SA:()=>y});var s=r(30624),n=r.n(s),a=r(62410),o=["notified"],i="Approval Administrator",u="Approval Approver",l="approval/admin",c="approval/approver",d="approval/requester",p=function(e){return o.includes(e)},f=function(e){return n().createElement("span",{key:e},n().createElement(a.Z,{date:e,type:"relative"}))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["Approval Administrator"]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["Approval Approver"]},v=function(e){var t=m(e),r=g(e);return t?l:r?c:d},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return e.forEach((function(e){e.name===i?t["Approval Administrator"]=!0:e.name===u&&(t["Approval Approver"]=!0)})),t}},61338:(e,t,r)=>{"use strict";r.d(t,{he:()=>o,FZ:()=>i,SJ:()=>u,Vq:()=>l});var s=r(96156);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o={limit:50,offset:0,count:0},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return(e-1)*t},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a({},o),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0!==e.offset&&e.count-t<=e.offset?e.offset-e.limit:e.offset}},96692:(e,t,r)=>{"use strict";r.d(t,{VZ:()=>b,xZ:()=>q,mY:()=>O,Hx:()=>h,Fv:()=>M,Qu:()=>R});var s=r(92137),n=r(96156),a=r(87757),o=r.n(a),i=r(78991),u=r.n(i),l=r(84866),c=r(72548),d=r(30223);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=u().create();m.interceptors.request.use(function(){var e=(0,s.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m.interceptors.response.use((function(e){return e.data||e})),m.interceptors.response.use(null,(function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=null===(e=r.response)||void 0===e||null===(t=e.headers)||void 0===t?void 0:t["x-rh-insights-request-id"];throw s?f(f({},r.response),{},{requestId:s}):f({},r.response)}));var g=new d.WorkflowApi(void 0,l._R,m),v=new d.ActionApi(void 0,l._R,m),y=new d.TemplateApi(void 0,l._R,m),E=new c.RoleApi(void 0,l.OJ,m);function b(){return y}function q(){return g}function O(){return v}function h(){return m}function M(){return E}var w=u().create();function R(){return w}w.interceptors.request.use(function(){var e=(0,s.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w.interceptors.response.use((function(e){var t=e.data;if(t.errors)throw{message:t.errors[0].errorType,data:t.errors[0].message};return t}))},27121:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s=(0,r(86244).defineMessages)({requestTitle:{id:"requestMessages.requestTitle",defaultMessage:"Request {id}"},commentTitle:{id:"requestsMessages.commentTitle",defaultMessage:"Comment"},approveTitle:{id:"requestsMessages.approveTitle",defaultMessage:"Approve request"},denyTitle:{id:"requestsMessages.denyTitle",defaultMessage:"Deny request"},addCommentLabel:{id:"requestsMessages.addCommentLabel",defaultMessage:"Submit"},approveLabel:{id:"requestsMessages.approveLabel",defaultMessage:"Approve"},denyLabel:{id:"requestsMessages.denyLabel",defaultMessage:"Deny"},approveDescription:{id:"requestsMessages.approveDescription",defaultMessage:"Provide approval for request"},denyDescription:{id:"requestsMessages.denyDescription",defaultMessage:"Provide a reason for denying request"},commentDescription:{id:"requestsMessages.commentDescription",defaultMessage:"Submit a comment on request"},reasonTitle:{id:"requestsMessages.reasonTitle",defaultMessage:"Reason"},requestsIdColumn:{id:"requestsMessages.requestsIdColumn",defaultMessage:"Request ID"},requesterColumn:{id:"requestsMessages.requesterColumn",defaultMessage:"Requester"},openedColumn:{id:"requestsMessages.openedColumn",defaultMessage:"Opened"},updatedColumn:{id:"requestsMessages.updatedColumn",defaultMessage:"Updated"},statusColumn:{id:"requestsMessages.statusColumn",defaultMessage:"Status"},decisionColumn:{id:"requestsMessages.decisionColumn",defaultMessage:"Decision"},request:{id:"requestsMessages.request",defaultMessage:"request"},requests:{id:"requestsMessages.requests",defaultMessage:"requests"},canceled:{id:"requestsMessages.canceled",defaultMessage:"canceled"},completed:{id:"requestsMessages.completed",defaultMessage:"completed"},failed:{id:"requestsMessages.failed",defaultMessage:"failed"},notified:{id:"requestsMessages.notified",defaultMessage:"notified"},pending:{id:"requestsMessages.pending",defaultMessage:"pending"},skipped:{id:"requestsMessages.skipped",defaultMessage:"skipped"},started:{id:"requestsMessages.started",defaultMessage:"started"},approved:{id:"requestsMessages.approved",defaultMessage:"approved"},denied:{id:"requestsMessages.denied",defaultMessage:"denied"},error:{id:"requestsMessages.error",defaultMessage:"error"},undecided:{id:"requestsMessages.undecided",defaultMessage:"undecided"},needsReview:{id:"requestsMessages.needsReview",defaultMessage:"Needs review"},denyRequest:{id:"requestsMessages.denyRequest",defaultMessage:"Deny Request"},approveRequest:{id:"requestsMessages.approveRequest",defaultMessage:"Approve Request"},emptyRequestsTitle:{id:"requestsMessages.emptyRequestsTitle",defaultMessage:"No requests yet"},emptyRequestsDescription:{id:"requestsMessages.emptyRequestsDescription",defaultMessage:"Requests that need your attention will appear here."},emptyAllRequestsDescription:{id:"requestsMessages.emptyAllRequestsDescription",defaultMessage:"Requests will appear here when an approval process has been initiated."},toggleDetailsFor:{id:"requestsMessages.toggleDetailsFor",defaultMessage:"Toggle details for"},requestContentDetails:{id:"requestsMessages.requestContentDetails",defaultMessage:"Request Content Details"},requestTranscript:{id:"requestsMessages.requestTranscript",defaultMessage:"Request transcript"},orderNumber:{id:"requestsMessages.orderNumber",defaultMessage:"Order#"},parameters:{id:"requestsMessages.parameters",defaultMessage:"Parameters"},requestDescription:{id:"requestsMessages.requestDescription",defaultMessage:"Request {id}"},commentFrom:{id:"requestsMessages.commentFrom",defaultMessage:"Comment from {by}"},approvedBy:{id:"requestsMessages.approvedBy",defaultMessage:"Approved by {by}"},deniedBy:{id:"requestsMessages.deniedBy",defaultMessage:"Denied by {by}"},notifiedBy:{id:"requestsMessages.notifiedBy",defaultMessage:"Notified by {by}"},skippedBy:{id:"requestsMessages.skippedBy",defaultMessage:"Skipped by {by}"},startedBy:{id:"requestsMessages.startedBy",defaultMessage:"Started by {by}"},canceledBy:{id:"requestsMessages.canceledBy",defaultMessage:"Canceled by {by}"},errorBy:{id:"requestsMessages.errorBy",defaultMessage:"Error {by}"},expandableDataList:{id:"requestsMessages.expandableDataList",defaultMessage:"Expandable data list"}})},76690:(e,t,r)=>{"use strict";r.d(t,{zx:()=>P,Eo:()=>D,Z0:()=>T,vr:()=>_,h2:()=>S,q3:()=>j});var s=r(85061),n=r(22122),a=r(81253),o=r(30624),i=r.n(o),u=r(45697),l=r.n(u),c=r(26940),d=r(38243),p=r(48826),f=r(82224),m=r(4867),g=r(49287),v=r(18038),y=r(4853),E=r(23811),b=r(81159),q=r(34023),O=r(2095),h=r(85962),M=r(54213),w=r(86350),R=r(86010),Z=r(37412),L=function(e){var t=e.width,r=void 0===t?"100%":t,s=e.height,o=void 0===s?"100%":s,u=e.className,l=(0,a.Z)(e,["width","height","className"]);return i().createElement("span",(0,n.Z)({},l,{className:(0,R.Z)("ins__approval__loader",u),style:{width:r,height:o}}))};L.propTypes={width:l().oneOfType([l().string,l().number]),height:l().oneOfType([l().string,l().number]),className:l().string};var D=function(e){var t=e.items;return i().createElement(c.DataList,{"aria-label":"data-list-loader","aria-labelledby":"datalist-placeholder"},(0,s.Z)(Array(t)).map((function(e,t){return i().createElement(p.L,{key:t,"aria-labelledby":"datalist-item-placeholder"},i().createElement(f.V,{"aria-label":"datalist-item-placeholder-row"},i().createElement(m.p,{dataListCells:[i().createElement(d.K,{key:"1"},i().createElement(L,{height:64,width:"100%"}))]})))})))};D.propTypes={items:l().number},D.defaultProps={items:5};var _=function(){return i().createElement("div",{className:"ins__approval__request_loader"},i().createElement(g.Grid,{hasGutter:!0},i().createElement(v.GridItem,{md:4,lg:3,className:"info-bar"},i().createElement(b.K,{hasGutter:!0},i().createElement(q.v,null,i().createElement(O.Zb,null,i().createElement(h.e,null,i().createElement(L,{className:"pf-u-mb-sm ins__approval__request_loader-card"})))))),i().createElement(v.GridItem,{md:8,lg:9,className:"detail-pane pf-u-p-lg"},i().createElement(D,null))))},P=function(){return i().createElement(w.Z,{className:"pf-u-p-0 pf-u-ml-0"},i().createElement(Z.Q,{className:"ins__approval__placeholder_toolbar"},i().createElement(Z.y,null)),i().createElement(M.Z,{type:"content"},i().createElement(D,null)))},T=function(){return i().createElement(L,{height:64,width:"100%"})},j=function(){return i().createElement(y.Form,null,i().createElement(E.FormGroup,{fieldId:"1"},i().createElement(T,null)),i().createElement(E.FormGroup,{fieldId:"2"},i().createElement(T,null)))},S=function(){return i().createElement(L,{height:32,width:200,className:"pf-u-mb-md"})}},37412:(e,t,r)=>{"use strict";r.d(t,{Q:()=>E,y:()=>b});var s=r(30624),n=r.n(s),a=r(45697),o=r.n(a),i=r(24774),u=r(80256),l=r(63540),c=r(20018),d=r(76690),p=r(334),f=r(85991),m=r(49489),g=function(e){var t=e.breadcrumbs;return t?n().createElement(f.a,null,t.map((function(e,r){var s=e.to,a=e.id,o=e.title;return n().createElement(m.g,{key:o,isActive:r===t.length-1,id:a},s&&n().createElement(p.NavLink,{isActive:function(){return!1},exact:!0,to:s},o)||o)}))):null};g.propTypes={breadcrumbs:o().arrayOf(o().shape({title:o().string.isRequired,to:o().string}))};const v=g;var y=r(86010),E=function(e){var t=e.children,r=e.breadcrumbs,s=e.paddingBottom,a=e.className;return n().createElement("div",{className:(0,y.Z)("pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg",s&&"pf-u-pb-sm","top-toolbar",a)},r&&n().createElement(i.a,{className:"pf-u-mb-md"},n().createElement(v,{breadcrumbs:r})),t)};E.propTypes={children:o().oneOfType([o().arrayOf(o().node),o().node]).isRequired,breadcrumbs:o().array,paddingBottom:o().bool,className:o().string},E.defaultProps={paddingBottom:!1};var b=function(e){var t=e.title,r=e.description,a=e.children;return n().createElement(s.Fragment,null,n().createElement(i.a,null,n().createElement(u.Z,null,n().createElement(c.TextContent,{className:"pf-u-mb-sm"},n().createElement(l.Text,{component:l.TextVariants.h1},t||n().createElement(d.h2,null))),r&&n().createElement(c.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},n().createElement(l.Text,{component:l.TextVariants.p},r))),a))};b.propTypes={title:o().string,description:o().string,children:o().oneOfType([o().node,o().arrayOf(o().node)])}},36580:(e,t,r)=>{"use strict";r.d(t,{Eo:()=>s,iZ:()=>n,gN:()=>a,KA:()=>o,Cb:()=>i,DI:()=>u,hu:()=>l,$O:()=>c,J4:()=>d,qi:()=>p,gJ:()=>f,Gs:()=>m,BX:()=>g,YT:()=>v,Zz:()=>y,dp:()=>E,fB:()=>b,bp:()=>q,m_:()=>O,Lb:()=>h,vd:()=>M});var s="FETCH_REQUEST",n="FETCH_REQUEST_CONTENT",a="FETCH_REQUESTS",o="CREATE_REQUEST_ACTION",i="FETCH_WORKFLOW",u="FETCH_WORKFLOWS",l="ADD_WORKFLOW",c="UPDATE_WORKFLOW",d="REMOVE_WORKFLOW",p="REMOVE_WORKFLOWS",f="UPDATE_WORKFLOW",m="FETCH_RBAC_GROUPS",g="FETCH_GROUP_NAMES",v="SORT_REQUESTS",y="SORT_WORKFLOWS",E="SET_FILTER_WORKLOWS",b="CLEAR_FILTER_WORKLOWS",q="SET_FILTER_REQUESTS",O="CLEAR_FILTER_REQUESTS",h="RESET_REQUEST_LIST",M="MOVE_SEQUENCE"},5469:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});const s=(0,r(30624).createContext)({})},84866:(e,t,r)=>{"use strict";r.d(t,{_R:()=>d,OJ:()=>p,Oj:()=>f,ZC:()=>m,Fe:()=>g});var s=r(35451),n=r(31369),a=r(3235),o=r(84564),i=r(30624),u=r.n(i),l=r(27121),c=r(34155),d="".concat(c.env.BASE_PATH||"/api","/approval/v1.2"),p="".concat(c.env.BASE_PATH||"/api","/rbac/v1"),f={undecided:{displayName:l.Z.needsReview,color:"blue",icon:u().createElement(n.default,null)},approved:{displayName:l.Z.approved,color:"green",icon:u().createElement(s.default,null)},denied:{displayName:l.Z.denied,color:"red",icon:u().createElement(o.default,null)},canceled:{displayName:l.Z.canceled,color:"red",icon:u().createElement(a.ZP,null)},error:{displayName:l.Z.error,color:"red",icon:u().createElement(o.default,null)}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ";return{id:"untranslated",defaultMessage:e}},g={catalog:"Automation Services Catalog",topology:"Topological inventory"}},80832:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var s,n=r(85061),a=r(57283),o=r.n(a),i=r(18546),u=r(83215),l=r(84885),c=r(53894),d=r(96156),p=r(36580);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={requests:{data:[],meta:{count:0,limit:50,offset:0}},filterValue:{},isRequestDataLoading:!1,selectedRequest:{metadata:{user_capabilities:{}},requests:[]},sortBy:{direction:"desc",property:"opened",index:3}},v=function(e){return m(m({},e),{},{isRequestDataLoading:!0,expandedRequests:[]})};const y=(s={},(0,d.Z)(s,"".concat(p.gN,"_PENDING"),v),(0,d.Z)(s,"".concat(p.gN,"_FULFILLED"),(function(e,t){var r=t.payload;return m(m({},e),{},{requests:r,isRequestDataLoading:!1})})),(0,d.Z)(s,"".concat(p.Eo,"_PENDING"),v),(0,d.Z)(s,"".concat(p.Eo,"_FULFILLED"),(function(e,t){var r=t.payload;return m(m({},e),{},{selectedRequest:r,isRequestDataLoading:!1})})),(0,d.Z)(s,"".concat(p.iZ,"_PENDING"),v),(0,d.Z)(s,"".concat(p.iZ,"_FULFILLED"),(function(e,t){var r=t.payload;return m(m({},e),{},{requestContent:r,isRequestDataLoading:!1})})),(0,d.Z)(s,p.YT,(function(e,t){var r=t.payload;return m(m({},e),{},{sortBy:r,requests:m(m({},e.requests),{},{meta:m(m({},e.requests.meta),{},{offset:0})})})})),(0,d.Z)(s,p.bp,(function(e,t){var r=t.payload;return m(m({},e),{},{filterValue:m(m({},e.filterValue),{},(0,d.Z)({},r.type,r.filterValue)),requests:m(m({},e.requests),{},{meta:m(m({},e.requests.meta),{},{offset:0})})})})),(0,d.Z)(s,p.m_,(function(e){return m(m({},e),{},{filterValue:{}})})),(0,d.Z)(s,p.Lb,(function(e){return m(m({},e),{},{requests:{data:[],meta:{count:0,limit:50,offset:0}},filterValue:{}})})),s);var E;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={workflows:{data:[],meta:{count:0,limit:50,offset:0}},workflow:{},filterValue:"",isLoading:!1,isRecordLoading:!1,isUpdating:0,sortBy:{index:2,property:"sequence",direction:"asc"}},h=function(e){return q(q({},e),{},{isUpdating:e.isUpdating-1})};const M=(E={},(0,d.Z)(E,"".concat(p.DI,"_PENDING"),(function(e){return q(q({},e),{},{isLoading:!0})})),(0,d.Z)(E,"".concat(p.DI,"_FULFILLED"),(function(e,t){var r=t.payload;return q(q({},e),{},{workflows:r,isLoading:!1})})),(0,d.Z)(E,"".concat(p.Cb,"_PENDING"),(function(e){return q(q({},e),{},{isRecordLoading:!0})})),(0,d.Z)(E,"".concat(p.Cb,"_FULFILLED"),(function(e,t){var r=t.payload;return q(q({},e),{},{workflow:r,isRecordLoading:!1})})),(0,d.Z)(E,"".concat(p.$O,"_PENDING"),(function(e){return q(q({},e),{},{isUpdating:e.isUpdating+1})})),(0,d.Z)(E,"".concat(p.$O,"_FULFILLED"),h),(0,d.Z)(E,"".concat(p.$O,"_REJECTED"),h),(0,d.Z)(E,p.Zz,(function(e,t){var r=t.payload;return q(q({},e),{},{sortBy:r,workflows:q(q({},e.workflows),{},{meta:q(q({},e.workflows.meta),{},{offset:0})})})})),(0,d.Z)(E,p.dp,(function(e,t){var r=t.payload;return q(q({},e),{},{filterValue:r,workflows:q(q({},e.workflows),{},{meta:q(q({},e.workflows.meta),{},{offset:0})})})})),(0,d.Z)(E,p.fB,(function(e){return q(q({},e),{},{filterValue:""})})),E);var w;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={groups:[],isLoading:!1},D=function(e){return Z(Z({},e),{},{isLoading:!0})};const _=(w={},(0,d.Z)(w,"".concat(p.Gs,"_PENDING"),D),(0,d.Z)(w,"".concat(p.Gs,"_FULFILLED"),(function(e,t){var r=t.payload;return Z(Z({},e),{},{groups:r,isLoading:!1})})),(0,d.Z)(w,"".concat(p.BX,"_PENDING"),D),(0,d.Z)(w,"".concat(p.BX,"_FULFILLED"),(function(e,t){var r=t.payload;return Z(Z({},e),{},{groupNames:r,isLoading:!1})})),w),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new i.ZP({},[c.Z,o(),(0,l.ZP)({errorTitleKey:["errors","message","statusText"],errorDescriptionKey:["data.errors[0].detail","data.errors","data.error","data.message","response.body.errors","data","errorMessage","stack"]})].concat((0,n.Z)(e)));return t.register({requestReducer:(0,i.Gg)(y,g),workflowReducer:(0,i.Gg)(M,O),groupReducer:(0,i.Gg)(_,L),notifications:u.ee}),t.getStore()}}}]);
//# sourceMappingURL=../sourcemaps/89.1467605ee7202c078dae.js.map