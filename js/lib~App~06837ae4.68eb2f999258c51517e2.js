(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{14:function(e,t,r){"use strict";r.d(t,"f",(function(){return n})),r.d(t,"h",(function(){return a})),r.d(t,"g",(function(){return s})),r.d(t,"c",(function(){return o})),r.d(t,"i",(function(){return i})),r.d(t,"j",(function(){return l})),r.d(t,"a",(function(){return u})),r.d(t,"t",(function(){return c})),r.d(t,"l",(function(){return d})),r.d(t,"m",(function(){return p})),r.d(t,"n",(function(){return f})),r.d(t,"e",(function(){return m})),r.d(t,"d",(function(){return g})),r.d(t,"r",(function(){return b})),r.d(t,"s",(function(){return v})),r.d(t,"q",(function(){return A})),r.d(t,"p",(function(){return y})),r.d(t,"b",(function(){return h})),r.d(t,"o",(function(){return C})),r.d(t,"k",(function(){return E}));var n="FETCH_REQUEST",a="FETCH_REQUEST_CONTENT",s="FETCH_REQUESTS",o="CREATE_REQUEST_ACTION",i="FETCH_WORKFLOW",l="FETCH_WORKFLOWS",u="ADD_WORKFLOW",c="UPDATE_WORKFLOW",d="REMOVE_WORKFLOW",p="REMOVE_WORKFLOWS",f="UPDATE_WORKFLOW",m="FETCH_RBAC_GROUPS",g="FETCH_GROUP_NAMES",b="SORT_REQUESTS",v="SORT_WORKFLOWS",A="SET_FILTER_WORKLOWS",y="SET_FILTER_REQUESTS",h="CLEAR_FILTER_REQUESTS",C="RESET_REQUEST_LIST",E="MOVE_SEQUENCE"},159:function(e,t,r){"use strict";r.d(t,"a",(function(){return A})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n),s=r(8),o=r.n(s),i=r(143),l=r(188),u=r(68),c=r(111),d=r(95),p=r(69),f=r(333),m=r(334),g=function(e){var t=e.breadcrumbs;return t?a.a.createElement(f.Breadcrumb,null,t.map((function(e,r){var n=e.to,s=e.id,o=e.title;return a.a.createElement(m.BreadcrumbItem,{key:o,isActive:r===t.length-1,id:s},n&&a.a.createElement(p.c,{isActive:function(){return!1},exact:!0,to:n},o)||o)}))):null};g.propTypes={breadcrumbs:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,to:o.a.string}))};var b=g,v=r(144),A=(r(555),function(e){var t=e.children,r=e.breadcrumbs,n=e.paddingBottom,s=e.className;return a.a.createElement("div",{className:Object(v.a)("pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg",n&&"pf-u-pb-sm","top-toolbar",s)},r&&a.a.createElement(i.Level,{className:"pf-u-mb-md"},a.a.createElement(b,{breadcrumbs:r})),t)});A.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,breadcrumbs:o.a.array,paddingBottom:o.a.bool,className:o.a.string},A.defaultProps={paddingBottom:!1};var y=function(e){var t=e.title,r=e.description,s=e.children;return a.a.createElement(n.Fragment,null,a.a.createElement(i.Level,null,a.a.createElement(l.LevelItem,null,a.a.createElement(c.TextContent,{className:"pf-u-mb-sm"},a.a.createElement(u.Text,{component:u.TextVariants.h1},t||a.a.createElement(d.e,null))),r&&a.a.createElement(c.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},a.a.createElement(u.Text,{component:u.TextVariants.p},r))),s))};y.propTypes={title:o.a.string,description:o.a.string,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])}},208:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return u})),r.d(t,"a",(function(){return c}));var n=r(10),a=r.n(n);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i={limit:50,offset:0,count:0},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return(e-1)*t},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o({},i),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return 0!==e.offset&&e.count-t<=e.offset?e.offset-e.limit:e.offset}},212:function(e,t,r){"use strict";r.d(t,"e",(function(){return C})),r.d(t,"f",(function(){return E})),r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return w})),r.d(t,"d",(function(){return q})),r.d(t,"c",(function(){return M}));var n=r(103),a=r.n(n),s=r(164),o=r.n(s),i=r(10),l=r.n(i),u=r(199),c=r.n(u),d=r(94),p=r(330),f=r(153);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=c.a.create();b.interceptors.request.use(function(){var e=o()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b.interceptors.response.use((function(e){return e.data||e})),b.interceptors.response.use(null,(function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=null===(e=r.response)||void 0===e||null===(t=e.headers)||void 0===t?void 0:t["x-rh-insights-request-id"];throw n?g(g({},r.response),{},{requestId:n}):g({},r.response)}));var v=new f.WorkflowApi(void 0,d.a,b),A=new f.ActionApi(void 0,d.a,b),y=new f.TemplateApi(void 0,d.a,b),h=new p.RoleApi(void 0,d.c,b);function C(){return y}function E(){return v}function O(){return A}function w(){return b}function q(){return h}var _=c.a.create();function M(){return _}_.interceptors.request.use(function(){var e=o()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),_.interceptors.response.use((function(e){var t=e.data;if(t.errors)throw{message:t.errors[0].errorType,data:t.errors[0].message};return t}))},41:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return u})),r.d(t,"g",(function(){return c})),r.d(t,"f",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return f})),r.d(t,"j",(function(){return m})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return b}));var n=r(0),a=r.n(n),s=r(332),o=["notified"],i="approval/admin",l="approval/approver",u="approval/requester",c=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})},d=function(e){return o.includes(e)},p=function(e){return a.a.createElement("span",{key:e},a.a.createElement(s.DateFormat,{date:e,type:"relative"}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["Approval Administrator"]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["Approval Approver"]},g=function(e){var t=f(e),r=m(e);return t?i:r?l:u},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return e.forEach((function(e){"Approval Administrator"===e.name?t["Approval Administrator"]=!0:"Approval Approver"===e.name&&(t["Approval Approver"]=!0)})),t}},464:function(e,t,r){var n=r(7),a=r(465);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1};n(a,s);e.exports=a.locals||{}},465:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),s=r(329),o=r(328),i=a()(!0);i.i(s.a),i.i(o.a),i.push([e.i,".detail-pane{background-color:var(--pf-global--BackgroundColor--100)}.detail-pane,.info-bar{min-height:100%}@supports not (overflow-wrap: anywhere){.detail-pane,.info-bar{word-break:break-all}}@supports (overflow-wrap: anywhere){.detail-pane,.info-bar{overflow-wrap:anywhere}}.destructive-color:not(:disabled){color:var(--pf-chart-color-red-100) !important}.disabled-link{pointer-events:none}.icon-danger-fill{fill:var(--pf-global--danger-color--100)}.icon-info-fill{fill:var(--pf-global--info-color--100)}.icon-success-fill{fill:var(--pf-global--success-color--100)}.font-14{font-size:14px;color:var(--pf-global--Color--100);font-weight:bold}.ins-c-primary-toolbar .ins-c-primary-toolbar__group-filter{margin-right:7px}.span-block{display:block}.group-label{max-width:256px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.pf-c-table.vertical-align-inherit tbody>tr>*{vertical-align:inherit !important}\n","",{version:3,sources:["webpack://src/App.scss"],names:[],mappings:"AAGA,aACE,uDAAwD,CACzD,uBAGC,eAAgB,CACuB,wCAFzC,uBAGI,oBAAqB,CAKxB,CAHoC,oCALrC,uBAMI,sBAAuB,CAE1B,CAED,kCAEI,8CAA+C,CAChD,eAID,mBAAoB,CACrB,kBAGC,wCAAyC,CAC1C,gBAGC,sCAAuC,CACxC,mBAGC,yCAA0C,CAC3C,SAGC,cAAe,CACf,kCAAmC,CACnC,gBAAiB,CAClB,4DAGE,gBAAiB,CAClB,YAGA,aAAc,CACf,aAGC,eAAgB,CAChB,sBAAuB,CACvB,kBAAmB,CACnB,eAAgB,CACjB,8CAGC,iCAAkC",sourcesContent:["@import '~@redhat-cloud-services/frontend-components/index.css';\n@import '~@redhat-cloud-services/frontend-components-notifications/index.css';\n\n.detail-pane {\n  background-color: var(--pf-global--BackgroundColor--100);\n}\n\n.detail-pane, .info-bar {\n  min-height: 100%;\n  @supports not (overflow-wrap: anywhere) {\n    word-break: break-all;\n  }\n  @supports (overflow-wrap: anywhere) {\n    overflow-wrap: anywhere;\n  }\n}\n\n.destructive-color {\n  &:not(:disabled) {\n    color: var(--pf-chart-color-red-100) !important;\n  }\n}\n\n.disabled-link {\n  pointer-events: none;\n}\n\n.icon-danger-fill {\n  fill: var(--pf-global--danger-color--100)\n}\n\n.icon-info-fill {\n  fill: var(--pf-global--info-color--100)\n}\n\n.icon-success-fill {\n  fill: var(--pf-global--success-color--100)\n}\n\n.font-14{\n  font-size: 14px;\n  color: var(--pf-global--Color--100);\n  font-weight: bold;\n}\n\n.ins-c-primary-toolbar .ins-c-primary-toolbar__group-filter {\n   margin-right: 7px;\n }\n\n.span-block {\n  display: block;\n}\n\n.group-label {\n  max-width: 256px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.pf-c-table.vertical-align-inherit tbody > tr > * {\n  vertical-align: inherit !important;\n}\n"],sourceRoot:""}]),t.default=i},527:function(e,t,r){var n=r(7),a=r(528);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1};n(a,s);e.exports=a.locals||{}},528:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n)()(!0);a.push([e.i,"@keyframes loader{0%{transform:translateX(-100%)}60%{transform:translateX(100%)}100%{transform:translateX(100%)}}.ins__approval__loader{position:relative;overflow:hidden;width:100%;height:100%;display:block;border-radius:3px;background-color:#f3f3f3}.ins__approval__loader::after{animation:2s loader linear 0.5s infinite;background:linear-gradient(90deg, transparent, #ecebeb, transparent);content:'';position:absolute;bottom:0;left:0;right:0;top:0;transform:translateX(-100%);z-index:1}.ins__approval__placeholder_toolbar{min-height:120px}.ins__approval__request_loader{background:var(--pf-c-page__main-section--BackgroundColor);width:100%;height:100%}.ins__approval__request_loader-card{min-height:500px}\n","",{version:3,sources:["webpack://src/presentational-components/shared/loader.scss"],names:[],mappings:"AACA,kBACI,GACI,2BAA4B,CAEhC,IACI,0BAA2B,CAE/B,KACI,0BAA2B,CAAA,CAInC,uBACI,iBAAkB,CAClB,eAAgB,CAChB,UAAW,CACX,WAAY,CACZ,aAAc,CACd,iBAAkB,CAClB,wBAAyB,CAC5B,8BAGG,wCAAyC,CACzC,oEAAqE,CACrE,UAAW,CACX,iBAAkB,CAClB,QAAS,CACT,MAAO,CACP,OAAQ,CACR,KAAM,CACN,2BAA4B,CAC5B,SAAU,CACb,oCAGG,gBAAiB,CACpB,+BAGG,0DAA2D,CAC3D,UAAW,CACX,WAAY,CACf,oCAGG,gBAAiB",sourcesContent:["\n@keyframes loader {\n    0% {\n        transform: translateX(-100%);\n    }\n    60% {\n        transform: translateX(100%);\n    }\n    100% {\n        transform: translateX(100%);\n    }\n}\n\n.ins__approval__loader {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    display: block;\n    border-radius: 3px;\n    background-color: #f3f3f3;\n}\n\n.ins__approval__loader::after {\n    animation: 2s loader linear 0.5s infinite;\n    background: linear-gradient(90deg, transparent, #ecebeb, transparent);\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n    transform: translateX(-100%);\n    z-index: 1;\n}\n\n.ins__approval__placeholder_toolbar {\n    min-height: 120px;\n}\n\n.ins__approval__request_loader {\n    background: var(--pf-c-page__main-section--BackgroundColor);\n    width: 100%;\n    height: 100%;\n}\n\n.ins__approval__request_loader-card {\n    min-height: 500px;\n}"],sourceRoot:""}]),t.default=a},55:function(e,t,r){"use strict";t.a={allrequests:{index:"/allrequests"},requests:{index:"/requests",addComment:"/requests/add-comment",approve:"/requests/approve",deny:"/requests/deny"},request:{index:"/request",addComment:"/request/add-comment",approve:"/request/approve",deny:"/request/deny"},allrequest:{index:"/allrequest",addComment:"/allrequest/add-comment",approve:"/allrequest/approve",deny:"/allrequest/deny"},workflows:{index:"/workflows",add:"/workflows/add-workflow",remove:"/workflows/remove",edit:"/workflows/edit"}}},555:function(e,t,r){var n=r(7),a=r(556);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1};n(a,s);e.exports=a.locals||{}},556:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n)()(!0);a.push([e.i,".top-toolbar{background-color:#FFFFFF}\n","",{version:3,sources:["webpack://src/presentational-components/shared/top-toolbar.scss"],names:[],mappings:"AAAA,aACE,wBAAyB",sourcesContent:[".top-toolbar {\n  background-color: #FFFFFF;\n}\n"],sourceRoot:""}]),t.default=a},56:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)({});t.a=a},739:function(e,t,r){"use strict";r.r(t);var n,a=r(0),s=r.n(a),o=r(17),i=r.n(o),l=r(112),u=r(113),c=r.n(u),d=r(323),p=r(110),f=r.n(p),m=r(324),g=r.n(m),b=r(325),v=r.n(b),A=r(326),y=r(10),h=r.n(y),C=r(14);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w,q={requests:{data:[],meta:{count:0,limit:50,offset:0}},filterValue:{},isRequestDataLoading:!1,selectedRequest:{metadata:{user_capabilities:{}},requests:[]},sortBy:{direction:"desc",property:"opened",index:3}},_=function(e){return O(O({},e),{},{isRequestDataLoading:!0,expandedRequests:[]})},M=(n={},h()(n,"".concat(C.g,"_PENDING"),_),h()(n,"".concat(C.g,"_FULFILLED"),(function(e,t){var r=t.payload;return O(O({},e),{},{requests:r,isRequestDataLoading:!1})})),h()(n,"".concat(C.f,"_PENDING"),_),h()(n,"".concat(C.f,"_FULFILLED"),(function(e,t){var r=t.payload;return O(O({},e),{},{selectedRequest:r,isRequestDataLoading:!1})})),h()(n,"".concat(C.h,"_PENDING"),_),h()(n,"".concat(C.h,"_FULFILLED"),(function(e,t){var r=t.payload;return O(O({},e),{},{requestContent:r,isRequestDataLoading:!1})})),h()(n,C.r,(function(e,t){var r=t.payload;return O(O({},e),{},{sortBy:r,requests:O(O({},e.requests),{},{meta:O(O({},e.requests.meta),{},{offset:0})})})})),h()(n,C.p,(function(e,t){var r=t.payload;return O(O({},e),{},{filterValue:O(O({},e.filterValue),{},h()({},r.type,r.filterValue)),requests:O(O({},e.requests),{},{meta:O(O({},e.requests.meta),{},{offset:0})})})})),h()(n,C.b,(function(e){return O(O({},e),{},{filterValue:{}})})),h()(n,C.o,(function(e){return O(O({},e),{},{requests:{data:[],meta:{count:0,limit:50,offset:0}},filterValue:{}})})),n);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k,R={workflows:{data:[],meta:{count:0,limit:50,offset:0}},workflow:{},filterValue:"",isLoading:!1,isRecordLoading:!1,isUpdating:0,sortBy:{index:2,property:"sequence",direction:"asc"}},D=function(e){return j(j({},e),{},{isUpdating:e.isUpdating-1})},T=(w={},h()(w,"".concat(C.j,"_PENDING"),(function(e){return j(j({},e),{},{isLoading:!0})})),h()(w,"".concat(C.j,"_FULFILLED"),(function(e,t){var r=t.payload;return j(j({},e),{},{workflows:r,isLoading:!1})})),h()(w,"".concat(C.i,"_PENDING"),(function(e){return j(j({},e),{},{isRecordLoading:!0})})),h()(w,"".concat(C.i,"_FULFILLED"),(function(e,t){var r=t.payload;return j(j({},e),{},{workflow:r,isRecordLoading:!1})})),h()(w,"".concat(C.t,"_PENDING"),(function(e){return j(j({},e),{},{isUpdating:e.isUpdating+1})})),h()(w,"".concat(C.t,"_FULFILLED"),D),h()(w,"".concat(C.t,"_REJECTED"),D),h()(w,C.s,(function(e,t){var r=t.payload;return j(j({},e),{},{sortBy:r,workflows:j(j({},e.workflows),{},{meta:j(j({},e.workflows.meta),{},{offset:0})})})})),h()(w,C.q,(function(e,t){var r=t.payload;return j(j({},e),{},{filterValue:r,workflows:j(j({},e.workflows),{},{meta:j(j({},e.workflows.meta),{},{offset:0})})})})),w);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={groups:[],isLoading:!1},F=function(e){return P(P({},e),{},{isLoading:!0})},N=(k={},h()(k,"".concat(C.e,"_PENDING"),F),h()(k,"".concat(C.e,"_FULFILLED"),(function(e,t){var r=t.payload;return P(P({},e),{},{groups:r,isLoading:!1})})),h()(k,"".concat(C.d,"_PENDING"),F),h()(k,"".concat(C.d,"_FULFILLED"),(function(e,t){var r=t.payload;return P(P({},e),{},{groupNames:r,isLoading:!1})})),k),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new f.a({},[A.a,d.a,v()({errorTitleKey:["errors","message","statusText"],errorDescriptionKey:["data.errors[0].detail","data.errors","data.error","data.message","response.body.errors","data","errorMessage","stack"]})].concat(c()(e)));return t.register({requestReducer:Object(p.applyReducerHash)(M,q),workflowReducer:Object(p.applyReducerHash)(T,R),groupReducer:Object(p.applyReducerHash)(N,x),notifications:g.a}),t.getStore()},I=r(92),G=r.n(I),U=r(145),W=r(327),K=r.n(W),z=r(16),V=r(56),H=r(41),Q=function(e){var t=Object(a.useContext)(V.a).userRoles,r=Object(z.h)();return Object(H.i)(t)?s.a.createElement(z.b,e):s.a.createElement(z.a,{to:{pathname:"/403",state:{from:r}}})},X=r(55),J=function(e){var t=Object(a.useContext)(V.a).userRoles,r=Object(z.h)(),n=Object(H.i)(t);return Object(H.j)(t)||n?s.a.createElement(z.b,e):s.a.createElement(z.a,{to:{pathname:"/403",state:{from:r}}})},Y=Object(a.lazy)((function(){return Promise.all([r.e(13),r.e(5),r.e(15),r.e(2),r.e(8),r.e(4),r.e(1),r.e(9),r.e(0),r.e(12),r.e(3),r.e(10),r.e(6),r.e(14),r.e(11),r.e(7),r.e(16),r.e(17),r.e(19),r.e(20),r.e(34)]).then(r.bind(null,822))})),Z=Object(a.lazy)((function(){return Promise.all([r.e(13),r.e(5),r.e(15),r.e(2),r.e(8),r.e(4),r.e(1),r.e(9),r.e(0),r.e(12),r.e(3),r.e(10),r.e(6),r.e(14),r.e(11),r.e(7),r.e(16),r.e(17),r.e(18),r.e(33)]).then(r.bind(null,818))})),$=Object(a.lazy)((function(){return Promise.all([r.e(13),r.e(5),r.e(15),r.e(2),r.e(8),r.e(4),r.e(1),r.e(9),r.e(0),r.e(12),r.e(3),r.e(10),r.e(6),r.e(14),r.e(11),r.e(7),r.e(16),r.e(17),r.e(18),r.e(22)]).then(r.bind(null,819))})),ee=Object(a.lazy)((function(){return Promise.all([r.e(13),r.e(5),r.e(15),r.e(2),r.e(8),r.e(4),r.e(1),r.e(9),r.e(0),r.e(12),r.e(3),r.e(10),r.e(6),r.e(14),r.e(11),r.e(7),r.e(16),r.e(17),r.e(19),r.e(20),r.e(35)]).then(r.bind(null,821))})),te=Object(a.lazy)((function(){return Promise.all([r.e(13),r.e(5),r.e(15),r.e(2),r.e(8),r.e(4),r.e(1),r.e(9),r.e(0),r.e(12),r.e(3),r.e(10),r.e(6),r.e(14),r.e(11),r.e(7),r.e(16),r.e(17),r.e(19),r.e(20),r.e(34)]).then(r.bind(null,820))})),re=Object(a.lazy)((function(){return Promise.all([r.e(13),r.e(5),r.e(15),r.e(2),r.e(8),r.e(4),r.e(1),r.e(9),r.e(0),r.e(12),r.e(3),r.e(10),r.e(6),r.e(14),r.e(11),r.e(7),r.e(23)]).then(r.bind(null,823))})),ne=["/400","/401","/403","/404"],ae=function(){var e=Object(a.useContext)(V.a).userRoles,t=Object(z.h)(),r=Object(H.i)(e),n=Object(H.j)(e),o=Object(a.useState)(X.a.requests.index),i=G()(o,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){u(n||r?X.a.requests.index:{pathname:"/403",state:{from:t}})}),[e]),s.a.createElement(z.d,null,s.a.createElement(Q,{path:X.a.workflows.index,component:ee}),s.a.createElement(J,{path:X.a.requests.index,component:Y}),s.a.createElement(z.b,{path:X.a.allrequests.index,component:te}),s.a.createElement(z.b,{path:X.a.request.index,component:Z}),s.a.createElement(z.b,{path:X.a.allrequest.index,component:$}),s.a.createElement(z.b,{path:ne,component:re}),s.a.createElement(z.b,null,s.a.createElement(z.a,{to:l})))},se=r(95),oe=r(208),ie=r(187),le=r(69),ue=r(212),ce=(r(464),window.location.pathname.split("/"));ce.shift();var de="/";"beta"===ce[0]&&(de="/".concat(ce.shift(),"/"));var pe=function(){var e=Object(a.useState)(!1),t=G()(e,2),r=t[0],n=t[1],o=Object(a.useState)({}),i=G()(o,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){insights.chrome.init(),Promise.all([insights.chrome.auth.getUser().then((function(){return Object(ue.d)().listRoles(oe.b.limit,0,"Approval ","partial","principal").then((function(e){return u(Object(H.e)(null==e?void 0:e.data))}))}))]).then((function(){return n(!0)})),insights.chrome.identifyApp("approval")}),[]),r?s.a.createElement(le.a,{basename:"".concat(de).concat(ce[0],"/").concat(ce[1],"/").concat(ce[2])},s.a.createElement(a.Suspense,{fallback:s.a.createElement(se.a,null)},s.a.createElement(ie.b,{locale:"en"},s.a.createElement(V.a.Provider,{value:{userRoles:l}},s.a.createElement(s.a.Fragment,null,s.a.createElement(K.a,null),s.a.createElement(U.Main,{className:"pf-u-p-0 pf-u-ml-0"},s.a.createElement(ae,null))))))):s.a.createElement(se.a,null)};i.a.render(s.a.createElement(l.Provider,{store:S()},s.a.createElement(pe,null)),document.getElementById("root"))},74:function(e,t,r){"use strict";var n=(0,r(206).defineMessages)({commentTitle:{id:"requestsMessages.commentTitle",defaultMessage:"Comment"},addCommentTitle:{id:"requestsMessages.addCommentTitle",defaultMessage:"Add Comment"},approveTitle:{id:"requestsMessages.approveTitle",defaultMessage:"Approve"},denyTitle:{id:"requestsMessages.denyTitle",defaultMessage:"Deny"},reasonTitle:{id:"requestsMessages.reasonTitle",defaultMessage:"Reason"},requestsIdColumn:{id:"requestsMessages.requestsIdColumn",defaultMessage:"Request ID"},requesterColumn:{id:"requestsMessages.requesterColumn",defaultMessage:"Requester"},openedColumn:{id:"requestsMessages.openedColumn",defaultMessage:"Opened"},updatedColumn:{id:"requestsMessages.updatedColumn",defaultMessage:"Updated"},statusColumn:{id:"requestsMessages.statusColumn",defaultMessage:"Status"},decisionColumn:{id:"requestsMessages.decisionColumn",defaultMessage:"Decision"},request:{id:"requestsMessages.request",defaultMessage:"request"},requests:{id:"requestsMessages.requests",defaultMessage:"requests"},canceled:{id:"requestsMessages.canceled",defaultMessage:"canceled"},completed:{id:"requestsMessages.completed",defaultMessage:"completed"},failed:{id:"requestsMessages.failed",defaultMessage:"failed"},notified:{id:"requestsMessages.notified",defaultMessage:"notified"},pending:{id:"requestsMessages.pending",defaultMessage:"pending"},skipped:{id:"requestsMessages.skipped",defaultMessage:"skipped"},started:{id:"requestsMessages.started",defaultMessage:"started"},approved:{id:"requestsMessages.approved",defaultMessage:"approved"},denied:{id:"requestsMessages.denied",defaultMessage:"denied"},error:{id:"requestsMessages.error",defaultMessage:"error"},undecided:{id:"requestsMessages.undecided",defaultMessage:"undecided"},needsReview:{id:"requestsMessages.needsReview",defaultMessage:"Needs review"},denyRequest:{id:"requestsMessages.denyRequest",defaultMessage:"Deny Request"},approveRequest:{id:"requestsMessages.approveRequest",defaultMessage:"Approve Request"},emptyRequestsTitle:{id:"requestsMessages.emptyRequestsTitle",defaultMessage:"No requests yet"},emptyRequestsDescription:{id:"requestsMessages.emptyRequestsDescription",defaultMessage:"Requests that need your attention will appear here."},toogleDetailsFor:{id:"requestsMessages.toogleDetailsFor",defaultMessage:"Toggle details for"},requestContentDetails:{id:"requestsMessages.requestContentDetails",defaultMessage:"Request Content Details"},requestTranscript:{id:"requestsMessages.requestTranscript",defaultMessage:"Request transcript"},orderNumber:{id:"requestsMessages.orderNumber",defaultMessage:"Order#"},parameters:{id:"requestsMessages.parameters",defaultMessage:"Parameters"},requestTitle:{id:"requestsMessages.requestTitle",defaultMessage:"Request {id}"},commentFrom:{id:"requestsMessages.commentFrom",defaultMessage:"Comment from {by}"},approvedBy:{id:"requestsMessages.approvedBy",defaultMessage:"Approved by {by}"},deniedBy:{id:"requestsMessages.deniedBy",defaultMessage:"Denied by {by}"},notifiedBy:{id:"requestsMessages.notifiedBy",defaultMessage:"Notified by {by}"},skippedBy:{id:"requestsMessages.skippedBy",defaultMessage:"Skipped by {by}"},startedBy:{id:"requestsMessages.startedBy",defaultMessage:"Started by {by}"},canceledBy:{id:"requestsMessages.canceledBy",defaultMessage:"Canceled by {by}"},errorBy:{id:"requestsMessages.errorBy",defaultMessage:"Error {by}"},expandableDataList:{id:"requestsMessages.expandableDataList",defaultMessage:"Expandable data list"}});t.a=n},94:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return v})),r.d(t,"b",(function(){return A}));var n=r(287),a=r.n(n),s=r(331),o=r.n(s),i=r(288),l=r.n(i),u=r(189),c=r.n(u),d=r(0),p=r.n(d),f=r(74),m="".concat("/api","/approval/v1.2"),g="".concat("/api","/rbac/v1"),b={undecided:{displayName:f.a.needsReview,color:"blue",icon:p.a.createElement(o.a,null)},approved:{displayName:f.a.approved,color:"green",icon:p.a.createElement(a.a,null)},denied:{displayName:f.a.denied,color:"red",icon:p.a.createElement(c.a,null)},canceled:{displayName:f.a.canceled,color:"red",icon:p.a.createElement(l.a,null)},error:{displayName:f.a.error,color:"red",icon:p.a.createElement(c.a,null)}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ";return{id:"untranslated",defaultMessage:e}},A={catalog:"Automation Services Catalog",topology:"Topological inventory"}},95:function(e,t,r){"use strict";r.d(t,"b",(function(){return R})),r.d(t,"d",(function(){return D})),r.d(t,"a",(function(){return T})),r.d(t,"c",(function(){return L})),r.d(t,"f",(function(){return P})),r.d(t,"e",(function(){return x}));var n=r(113),a=r.n(n),s=r(209),o=r.n(s),i=r(220),l=r.n(i),u=r(0),c=r.n(u),d=r(8),p=r.n(d),f=r(178),m=r(295),g=r(289),b=r(293),v=r(294),A=r(221),y=r(180),h=r(300),C=r(162),E=r(213),O=r(216),w=r(167),q=r(169),_=r(222),M=r(145),B=r(144),j=(r(527),r(159)),k=function(e){var t=e.width,r=void 0===t?"100%":t,n=e.height,a=void 0===n?"100%":n,s=e.className,i=l()(e,["width","height","className"]);return c.a.createElement("span",o()({},i,{className:Object(B.a)("ins__approval__loader",s),style:{width:r,height:a}}))};k.propTypes={width:p.a.oneOfType([p.a.string,p.a.number]),height:p.a.oneOfType([p.a.string,p.a.number]),className:p.a.string};var R=function(e){var t=e.items;return c.a.createElement(f.DataList,{"aria-label":"data-list-loader","aria-labelledby":"datalist-placeholder"},a()(Array(t)).map((function(e,t){return c.a.createElement(g.DataListItem,{key:t,"aria-labelledby":"datalist-item-placeholder"},c.a.createElement(b.DataListItemRow,{"aria-label":"datalist-item-placeholder-row"},c.a.createElement(v.DataListItemCells,{dataListCells:[c.a.createElement(m.DataListCell,{key:"1"},c.a.createElement(k,{height:64,width:"100%"}))]})))})))};R.propTypes={items:p.a.number},R.defaultProps={items:5};var D=function(){return c.a.createElement("div",{className:"ins__approval__request_loader"},c.a.createElement(A.Grid,{hasGutter:!0},c.a.createElement(y.GridItem,{md:4,lg:3,className:"info-bar"},c.a.createElement(E.Stack,{hasGutter:!0},c.a.createElement(O.StackItem,null,c.a.createElement(w.Card,null,c.a.createElement(q.CardBody,null,c.a.createElement(k,{className:"pf-u-mb-sm ins__approval__request_loader-card"})))))),c.a.createElement(y.GridItem,{md:8,lg:9,className:"detail-pane pf-u-p-lg"},c.a.createElement(R,null))))},T=function(){return c.a.createElement(M.Main,{className:"pf-u-p-0 pf-u-ml-0"},c.a.createElement(j.a,{className:"ins__approval__placeholder_toolbar"},c.a.createElement(j.b,null)),c.a.createElement(_.Section,{type:"content"},c.a.createElement(R,null)))},L=function(){return c.a.createElement(k,{height:64,width:"100%"})},P=function(){return c.a.createElement(h.Form,null,c.a.createElement(C.FormGroup,{fieldId:"1"},c.a.createElement(L,null)),c.a.createElement(C.FormGroup,{fieldId:"2"},c.a.createElement(L,null)))},x=function(){return c.a.createElement(k,{height:32,width:200,className:"pf-u-mb-md"})}}}]);
//# sourceMappingURL=../sourcemaps/lib~App~06837ae4.js.map