(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{15:function(e,t,r){"use strict";r.d(t,"h",(function(){return n})),r.d(t,"j",(function(){return a})),r.d(t,"i",(function(){return s})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"k",(function(){return u})),r.d(t,"l",(function(){return l})),r.d(t,"a",(function(){return c})),r.d(t,"t",(function(){return d})),r.d(t,"m",(function(){return p})),r.d(t,"n",(function(){return f})),r.d(t,"e",(function(){return m})),r.d(t,"g",(function(){return g})),r.d(t,"f",(function(){return b})),r.d(t,"r",(function(){return v})),r.d(t,"s",(function(){return y})),r.d(t,"q",(function(){return E})),r.d(t,"p",(function(){return h})),r.d(t,"b",(function(){return q})),r.d(t,"o",(function(){return O}));var n="FETCH_REQUEST",a="FETCH_REQUEST_CONTENT",s="FETCH_REQUESTS",o="EXPAND_REQUEST",i="CREATE_REQUEST_ACTION",u="FETCH_WORKFLOW",l="FETCH_WORKFLOWS",c="ADD_WORKFLOW",d="UPDATE_WORKFLOW",p="REMOVE_WORKFLOW",f="REMOVE_WORKFLOWS",m="EXPAND_WORKFLOW",g="FETCH_RBAC_GROUPS",b="FETCH_GROUP_NAMES",v="SORT_REQUESTS",y="SORT_WORKFLOWS",E="SET_FILTER_WORKLOWS",h="SET_FILTER_REQUESTS",q="CLEAR_FILTER_REQUESTS",O="RESET_REQUEST_LIST"},153:function(e,t,r){"use strict";r.d(t,"a",(function(){return y})),r.d(t,"b",(function(){return E}));var n=r(0),a=r.n(n),s=r(8),o=r.n(s),i=r(119),u=r(156),l=r(66),c=r(108),d=r(91),p=r(67),f=r(313),m=r(314),g=function(e){var t=e.breadcrumbs;return t?a.a.createElement(f.Breadcrumb,null,t.map((function(e,r){var n=e.to,s=e.id,o=e.title;return a.a.createElement(m.BreadcrumbItem,{key:o,isActive:r===t.length-1,id:s},n&&a.a.createElement(p.c,{isActive:function(){return!1},exact:!0,to:n},o)||o)}))):null};g.propTypes={breadcrumbs:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,to:o.a.string}))};var b=g,v=r(140),y=(r(547),function(e){var t=e.children,r=e.breadcrumbs,n=e.paddingBottom,s=e.className;return a.a.createElement("div",{className:Object(v.a)("pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg",n&&"pf-u-pb-sm","top-toolbar",s)},r&&a.a.createElement(i.Level,{className:"pf-u-mb-md"},a.a.createElement(b,{breadcrumbs:r})),t)});y.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,breadcrumbs:o.a.array,paddingBottom:o.a.bool,className:o.a.string},y.defaultProps={paddingBottom:!1};var E=function(e){var t=e.title,r=e.description,s=e.children;return a.a.createElement(n.Fragment,null,a.a.createElement(i.Level,null,a.a.createElement(u.LevelItem,null,a.a.createElement(c.TextContent,{className:"pf-u-mb-sm"},a.a.createElement(l.Text,{component:l.TextVariants.h1},t||a.a.createElement(d.e,null))),r&&a.a.createElement(c.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},a.a.createElement(l.Text,{component:l.TextVariants.p},r))),s))};E.propTypes={title:o.a.string,description:o.a.string,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])}},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s}));var n={limit:50,offset:0,itemCount:1,numberOfItems:50},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return(e-1)*t}},202:function(e,t,r){"use strict";r.d(t,"e",(function(){return q})),r.d(t,"f",(function(){return O})),r.d(t,"a",(function(){return w})),r.d(t,"b",(function(){return M})),r.d(t,"d",(function(){return _})),r.d(t,"c",(function(){return R}));var n=r(101),a=r.n(n),s=r(157),o=r.n(s),i=r(10),u=r.n(i),l=r(190),c=r.n(l),d=r(90),p=r(310),f=r(147);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=c.a.create();b.interceptors.request.use(function(){var e=o()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b.interceptors.response.use((function(e){return e.data||e})),b.interceptors.response.use(null,(function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=null===(e=r.response)||void 0===e||null===(t=e.headers)||void 0===t?void 0:t["x-rh-insights-request-id"];throw n?g(g({},r.response),{},{requestId:n}):g({},r.response)}));var v=new f.WorkflowApi(void 0,d.a,b),y=new f.ActionApi(void 0,d.a,b),E=new f.TemplateApi(void 0,d.a,b),h=new p.RoleApi(void 0,d.c,b);function q(){return E}function O(){return v}function w(){return y}function M(){return b}function _(){return h}var j=c.a.create();function R(){return j}j.interceptors.request.use(function(){var e=o()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j.interceptors.response.use((function(e){var t=e.data;if(t.errors)throw{message:t.errors[0].errorType,data:t.errors[0].message};return t}))},38:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"g",(function(){return c})),r.d(t,"f",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return f})),r.d(t,"j",(function(){return m})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return b}));var n=r(0),a=r.n(n),s=r(312),o=["notified"],i="approval/admin",u="approval/approver",l="approval/requester",c=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})},d=function(e){return o.includes(e)},p=function(e){return a.a.createElement("span",{key:e},a.a.createElement(s.DateFormat,{date:e,type:"relative"}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["Approval Administrator"]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["Approval Approver"]},g=function(e){var t=f(e),r=m(e);return t?i:r?u:l},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return e.forEach((function(e){"Approval Administrator"===e.name?t["Approval Administrator"]=!0:"Approval Approver"===e.name&&(t["Approval Approver"]=!0)})),t}},452:function(e,t,r){var n=r(7),a=r(453);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1};n(a,s);e.exports=a.locals||{}},453:function(e,t,r){(t=e.exports=r(5)(!1)).i(r(454),""),t.i(r(455),""),t.push([e.i,".detail-pane{background-color:var(--pf-global--BackgroundColor--100)}.detail-pane,.info-bar{min-height:100%}@supports not (overflow-wrap: anywhere){.detail-pane,.info-bar{word-break:break-all}}@supports (overflow-wrap: anywhere){.detail-pane,.info-bar{overflow-wrap:anywhere}}.destructive-color:not(:disabled){color:var(--pf-chart-color-red-100) !important}.disabled-link{pointer-events:none}.icon-danger-fill{fill:var(--pf-global--danger-color--100)}.icon-info-fill{fill:var(--pf-global--info-color--100)}.icon-success-fill{fill:var(--pf-global--success-color--100)}.font-14{font-size:14px;color:var(--pf-global--Color--100);font-weight:bold}.ins-c-primary-toolbar .ins-c-primary-toolbar__group-filter{margin-right:7px}\n",""])},518:function(e,t,r){var n=r(7),a=r(519);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1};n(a,s);e.exports=a.locals||{}},519:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,"@keyframes loader{0%{transform:translateX(-100%)}60%{transform:translateX(100%)}100%{transform:translateX(100%)}}.ins__approval__loader{position:relative;overflow:hidden;width:100%;height:100%;display:block;border-radius:3px;background-color:#f3f3f3}.ins__approval__loader::after{animation:2s loader linear 0.5s infinite;background:linear-gradient(90deg, transparent, #ecebeb, transparent);content:'';position:absolute;bottom:0;left:0;right:0;top:0;transform:translateX(-100%);z-index:1}.ins__approval__placeholder_toolbar{min-height:120px}.ins__approval__request_loader{background:var(--pf-c-page__main-section--BackgroundColor);width:100%;height:100%}.ins__approval__request_loader-card{min-height:500px}\n",""])},52:function(e,t,r){"use strict";t.a={allrequests:{index:"/allrequests"},requests:{index:"/requests",addComment:"/requests/add-comment",approve:"/requests/approve",deny:"/requests/deny"},request:{index:"/request",addComment:"/request/add-comment",approve:"/request/approve",deny:"/request/deny"},allrequest:{index:"/allrequest",addComment:"/allrequest/add-comment",approve:"/allrequest/approve",deny:"/allrequest/deny"},workflows:{index:"/workflows",add:"/workflows/add-workflow",remove:"/workflows/remove",editInfo:"/workflows/edit-info",editGroups:"/workflows/edit-groups",editSequence:"/workflows/edit-sequence"}}},54:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)({});t.a=a},547:function(e,t,r){var n=r(7),a=r(548);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var s={insert:"head",singleton:!1};n(a,s);e.exports=a.locals||{}},548:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".top-toolbar{background-color:#FFFFFF}\n",""])},71:function(e,t,r){"use strict";var n=(0,r(194).defineMessages)({commentTitle:{id:"requestsMessages.commentTitle",defaultMessage:"Comment"},addCommentTitle:{id:"requestsMessages.addCommentTitle",defaultMessage:"Add Comment"},approveTitle:{id:"requestsMessages.approveTitle",defaultMessage:"Approve"},denyTitle:{id:"requestsMessages.denyTitle",defaultMessage:"Deny"},reasonTitle:{id:"requestsMessages.reasonTitle",defaultMessage:"Reason"},requestsIdColumn:{id:"requestsMessages.requestsIdColumn",defaultMessage:"Request ID"},requesterColumn:{id:"requestsMessages.requesterColumn",defaultMessage:"Requester"},openedColumn:{id:"requestsMessages.openedColumn",defaultMessage:"Opened"},updatedColumn:{id:"requestsMessages.updatedColumn",defaultMessage:"Updated"},statusColumn:{id:"requestsMessages.statusColumn",defaultMessage:"Status"},decisionColumn:{id:"requestsMessages.decisionColumn",defaultMessage:"Decision"},request:{id:"requestsMessages.request",defaultMessage:"request"},requests:{id:"requestsMessages.requests",defaultMessage:"requests"},canceled:{id:"requestsMessages.canceled",defaultMessage:"canceled"},completed:{id:"requestsMessages.completed",defaultMessage:"completed"},failed:{id:"requestsMessages.failed",defaultMessage:"failed"},notified:{id:"requestsMessages.notified",defaultMessage:"notified"},pending:{id:"requestsMessages.pending",defaultMessage:"pending"},skipped:{id:"requestsMessages.skipped",defaultMessage:"skipped"},started:{id:"requestsMessages.started",defaultMessage:"started"},approved:{id:"requestsMessages.approved",defaultMessage:"approved"},denied:{id:"requestsMessages.denied",defaultMessage:"denied"},error:{id:"requestsMessages.error",defaultMessage:"error"},undecided:{id:"requestsMessages.undecided",defaultMessage:"undecided"},needsReview:{id:"requestsMessages.needsReview",defaultMessage:"Needs review"},denyRequest:{id:"requestsMessages.denyRequest",defaultMessage:"Deny Request"},approveRequest:{id:"requestsMessages.approveRequest",defaultMessage:"Approve Request"},emptyRequestsTitle:{id:"requestsMessages.emptyRequestsTitle",defaultMessage:"No requests yet"},emptyRequestsDescription:{id:"requestsMessages.emptyRequestsDescription",defaultMessage:"Requests that need your attention will appear here."},toogleDetailsFor:{id:"requestsMessages.toogleDetailsFor",defaultMessage:"Toggle details for"},requestContentDetails:{id:"requestsMessages.requestContentDetails",defaultMessage:"Request Content Details"},requestTranscript:{id:"requestsMessages.requestTranscript",defaultMessage:"Request transcript"},orderNumber:{id:"requestsMessages.orderNumber",defaultMessage:"Order#"},parameters:{id:"requestsMessages.parameters",defaultMessage:"Parameters"},requestTitle:{id:"requestsMessages.requestTitle",defaultMessage:"Request {id}"},commentFrom:{id:"requestsMessages.commentFrom",defaultMessage:"Comment from {by}"},approvedBy:{id:"requestsMessages.approvedBy",defaultMessage:"Approved by {by}"},deniedBy:{id:"requestsMessages.deniedBy",defaultMessage:"Denied by {by}"},notifiedBy:{id:"requestsMessages.notifiedBy",defaultMessage:"Notified by {by}"},skippedBy:{id:"requestsMessages.skippedBy",defaultMessage:"Skipped by {by}"},startedBy:{id:"requestsMessages.startedBy",defaultMessage:"Started by {by}"},canceledBy:{id:"requestsMessages.canceledBy",defaultMessage:"Canceled by {by}"},errorBy:{id:"requestsMessages.errorBy",defaultMessage:"Error {by}"},expandableDataList:{id:"requestsMessages.expandableDataList",defaultMessage:"Expandable data list"}});t.a=n},737:function(e,t,r){"use strict";r.r(t);var n,a=r(0),s=r.n(a),o=r(18),i=r.n(o),u=r(109),l=r(53),c=r.n(l),d=r(326),p=r(107),f=r.n(p),m=r(306),g=r.n(m),b=r(307),v=r.n(b),y=r(308),E=r(10),h=r.n(E),q=r(15);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M,_={requests:{data:[],meta:{count:0,limit:50,offset:0}},filterValue:{},isRequestDataLoading:!1,expandedRequests:[],selectedRequest:{metadata:{user_capabilities:{}},requests:[]},sortBy:{direction:"desc",property:"opened",index:3}},j=function(e){return w(w({},e),{},{isRequestDataLoading:!0,expandedRequests:[]})},R=(n={},h()(n,"".concat(q.i,"_PENDING"),j),h()(n,"".concat(q.i,"_FULFILLED"),(function(e,t){var r=t.payload;return w(w({},e),{},{requests:r,isRequestDataLoading:!1})})),h()(n,"".concat(q.h,"_PENDING"),j),h()(n,"".concat(q.h,"_FULFILLED"),(function(e,t){var r=t.payload;return w(w({},e),{},{selectedRequest:r,isRequestDataLoading:!1})})),h()(n,"".concat(q.j,"_PENDING"),j),h()(n,"".concat(q.j,"_FULFILLED"),(function(e,t){var r=t.payload;return w(w({},e),{},{requestContent:r,isRequestDataLoading:!1})})),h()(n,q.d,(function(e,t){var r=t.payload;return w(w({},e),{},{expandedRequests:[].concat(c()(e.expandedRequests),[r])})})),h()(n,q.r,(function(e,t){var r=t.payload;return w(w({},e),{},{sortBy:r,requests:w(w({},e.requests),{},{meta:w(w({},e.requests.meta),{},{offset:0})})})})),h()(n,q.p,(function(e,t){var r=t.payload;return w(w({},e),{},{filterValue:w(w({},e.filterValue),{},h()({},r.type,r.filterValue)),requests:w(w({},e.requests),{},{meta:w(w({},e.requests.meta),{},{offset:0})})})})),h()(n,q.b,(function(e){return w(w({},e),{},{filterValue:{}})})),h()(n,q.o,(function(e){return w(w({},e),{},{requests:{data:[],meta:{count:0,limit:50,offset:0}},filterValue:{}})})),n);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D,L={workflows:{data:[],meta:{count:0,limit:50,offset:0}},workflow:{},filterValue:"",isLoading:!1,isRecordLoading:!1,expandedWorkflows:[],sortBy:{index:4,property:"sequence",direction:"asc"}},P=(M={},h()(M,"".concat(q.l,"_PENDING"),(function(e){return k(k({},e),{},{isLoading:!0,expandedWorkflows:[]})})),h()(M,"".concat(q.l,"_FULFILLED"),(function(e,t){var r=t.payload;return k(k({},e),{},{workflows:r,isLoading:!1})})),h()(M,"".concat(q.k,"_PENDING"),(function(e){return k(k({},e),{},{isRecordLoading:!0})})),h()(M,"".concat(q.k,"_FULFILLED"),(function(e,t){var r=t.payload;return k(k({},e),{},{workflow:r,isRecordLoading:!1})})),h()(M,q.e,(function(e,t){var r=t.payload;return k(k({},e),{},{expandedWorkflows:[].concat(c()(e.expandedWorkflows),[r])})})),h()(M,q.s,(function(e,t){var r=t.payload;return k(k({},e),{},{sortBy:r,workflows:k(k({},e.workflows),{},{meta:k(k({},e.workflows.meta),{},{offset:0})})})})),h()(M,q.q,(function(e,t){var r=t.payload;return k(k({},e),{},{filterValue:r,workflows:k(k({},e.workflows),{},{meta:k(k({},e.workflows.meta),{},{offset:0})})})})),M);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){h()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={groups:[],isLoading:!1},F=function(e){return N(N({},e),{},{isLoading:!0})},S=(D={},h()(D,"".concat(q.g,"_PENDING"),F),h()(D,"".concat(q.g,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N({},e),{},{groups:r,isLoading:!1})})),h()(D,"".concat(q.f,"_PENDING"),F),h()(D,"".concat(q.f,"_FULFILLED"),(function(e,t){var r=t.payload;return N(N({},e),{},{groupNames:r,isLoading:!1})})),D),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new f.a({},[y.a,Object(d.a)(),v()({errorTitleKey:["errors","message","statusText"],errorDescriptionKey:["data.errors[0].detail","data.errors","data.error","data.message","response.body.errors","data","errorMessage","stack"]})].concat(c()(e)));return t.register({requestReducer:Object(p.applyReducerHash)(R,_),workflowReducer:Object(p.applyReducerHash)(P,L),groupReducer:Object(p.applyReducerHash)(S,C),notifications:g.a}),t.getStore()},A=r(88),B=r.n(A),U=r(141),W=r(309),G=r.n(W),V=r(16),K=r(54),H=r(38),Q=function(e){var t=Object(a.useContext)(K.a).userRoles,r=Object(V.h)();return Object(H.i)(t)?s.a.createElement(V.b,e):s.a.createElement(V.a,{to:{pathname:"/403",state:{from:r}}})},z=r(52),X=function(e){var t=Object(a.useContext)(K.a).userRoles,r=Object(V.h)(),n=Object(H.i)(t);return Object(H.j)(t)||n?s.a.createElement(V.b,e):s.a.createElement(V.a,{to:{pathname:"/403",state:{from:r}}})},J=Object(a.lazy)((function(){return Promise.all([r.e(6),r.e(2),r.e(9),r.e(1),r.e(0),r.e(3),r.e(7),r.e(4),r.e(8),r.e(5),r.e(11),r.e(10),r.e(13),r.e(14),r.e(28)]).then(r.bind(null,830))})),Y=Object(a.lazy)((function(){return Promise.all([r.e(6),r.e(2),r.e(9),r.e(1),r.e(0),r.e(3),r.e(7),r.e(4),r.e(8),r.e(5),r.e(11),r.e(10),r.e(12),r.e(27)]).then(r.bind(null,825))})),Z=Object(a.lazy)((function(){return Promise.all([r.e(6),r.e(2),r.e(9),r.e(1),r.e(0),r.e(3),r.e(7),r.e(4),r.e(8),r.e(5),r.e(11),r.e(10),r.e(12),r.e(16)]).then(r.bind(null,826))})),$=Object(a.lazy)((function(){return Promise.all([r.e(6),r.e(2),r.e(9),r.e(1),r.e(0),r.e(3),r.e(7),r.e(4),r.e(8),r.e(5),r.e(11),r.e(10),r.e(13),r.e(14),r.e(29)]).then(r.bind(null,828))})),ee=Object(a.lazy)((function(){return Promise.all([r.e(6),r.e(2),r.e(9),r.e(1),r.e(0),r.e(3),r.e(7),r.e(4),r.e(8),r.e(5),r.e(11),r.e(10),r.e(13),r.e(14),r.e(28)]).then(r.bind(null,827))})),te=Object(a.lazy)((function(){return Promise.all([r.e(6),r.e(2),r.e(9),r.e(1),r.e(0),r.e(3),r.e(7),r.e(4),r.e(8),r.e(5),r.e(17)]).then(r.bind(null,829))})),re=["/400","/401","/403","/404"],ne=function(){var e=Object(a.useContext)(K.a).userRoles,t=Object(V.h)(),r=Object(H.i)(e),n=Object(H.j)(e),o=Object(a.useState)(z.a.requests.index),i=B()(o,2),u=i[0],l=i[1];return Object(a.useEffect)((function(){l(n||r?z.a.requests.index:{pathname:"/403",state:{from:t}})}),[e]),s.a.createElement(V.d,null,s.a.createElement(Q,{path:z.a.workflows.index,component:$}),s.a.createElement(X,{path:z.a.requests.index,component:J}),s.a.createElement(V.b,{path:z.a.allrequests.index,component:ee}),s.a.createElement(V.b,{path:z.a.request.index,component:Y}),s.a.createElement(V.b,{path:z.a.allrequest.index,component:Z}),s.a.createElement(V.b,{path:re,component:te}),s.a.createElement(V.b,null,s.a.createElement(V.a,{to:u})))},ae=r(91),se=r(196),oe=r(180),ie=r(67),ue=r(202),le=(r(452),window.location.pathname.split("/"));le.shift();var ce="/";"beta"===le[0]&&(ce="/".concat(le.shift(),"/"));var de=function(){var e=Object(a.useState)(!1),t=B()(e,2),r=t[0],n=t[1],o=Object(a.useState)({}),i=B()(o,2),u=i[0],l=i[1];return Object(a.useEffect)((function(){insights.chrome.init(),Promise.all([insights.chrome.auth.getUser().then((function(){return Object(ue.d)().listRoles(se.a.limit,0,"Approval ","principal").then((function(e){return l(Object(H.e)(null==e?void 0:e.data))}))}))]).then((function(){return n(!0)})),insights.chrome.identifyApp("approval")}),[]),r?s.a.createElement(ie.a,{basename:"".concat(ce).concat(le[0],"/").concat(le[1],"/").concat(le[2])},s.a.createElement(a.Suspense,{fallback:s.a.createElement(ae.a,null)},s.a.createElement(oe.b,{locale:"en"},s.a.createElement(K.a.Provider,{value:{userRoles:u}},s.a.createElement(s.a.Fragment,null,s.a.createElement(G.a,null),s.a.createElement(U.Main,{className:"pf-u-p-0 pf-u-ml-0"},s.a.createElement(ne,null))))))):s.a.createElement(ae.a,null)};i.a.render(s.a.createElement(u.Provider,{store:I()},s.a.createElement(de,null)),document.getElementById("root"))},90:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"c",(function(){return v})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return E})),r.d(t,"b",(function(){return h}));var n=r(268),a=r.n(n),s=r(311),o=r.n(s),i=r(270),u=r.n(i),l=r(271),c=r.n(l),d=r(269),p=r.n(d),f=r(0),m=r.n(f),g=r(71),b="".concat("/api","/approval/v1.2"),v="".concat("/api","/rbac/v1"),y={undecided:{displayName:g.a.needsReview,icon:m.a.createElement(o.a,{className:"pf-u-mr-sm icon-info-fill"})},approved:{displayName:g.a.approved,icon:m.a.createElement(a.a,{className:"pf-u-mr-sm icon-success-fill"})},denied:{displayName:g.a.denied,icon:m.a.createElement(p.a,{className:"pf-u-mr-sm icon-danger-fill"})},canceled:{displayName:g.a.canceled,icon:m.a.createElement(u.a,{className:"pf-u-mr-sm icon-danger-fill"})},error:{displayName:g.a.error,icon:m.a.createElement(c.a,{className:"pf-u-mr-sm icon-danger-fill"})}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ";return{id:"untranslated",defaultMessage:e}},h={catalog:"Automation Services Catalog",topology:"Topological inventory"}},91:function(e,t,r){"use strict";r.d(t,"b",(function(){return L})),r.d(t,"d",(function(){return P})),r.d(t,"a",(function(){return x})),r.d(t,"c",(function(){return N})),r.d(t,"f",(function(){return C})),r.d(t,"e",(function(){return F}));var n=r(53),a=r.n(n),s=r(197),o=r.n(s),i=r(207),u=r.n(i),l=r(0),c=r.n(l),d=r(8),p=r.n(d),f=r(174),m=r(277),g=r(272),b=r(275),v=r(276),y=r(198),E=r(152),h=r(282),q=r(149),O=r(203),w=r(205),M=r(160),_=r(162),j=r(208),R=r(141),T=r(140),k=(r(518),r(153)),D=function(e){var t=e.width,r=void 0===t?"100%":t,n=e.height,a=void 0===n?"100%":n,s=e.className,i=u()(e,["width","height","className"]);return c.a.createElement("span",o()({},i,{className:Object(T.a)("ins__approval__loader",s),style:{width:r,height:a}}))};D.propTypes={width:p.a.oneOfType([p.a.string,p.a.number]),height:p.a.oneOfType([p.a.string,p.a.number]),className:p.a.string};var L=function(e){var t=e.items;return c.a.createElement(f.DataList,{"aria-label":"data-list-loader","aria-labelledby":"datalist-placeholder"},a()(Array(t)).map((function(e,t){return c.a.createElement(g.DataListItem,{key:t,"aria-labelledby":"datalist-item-placeholder"},c.a.createElement(b.DataListItemRow,{"aria-label":"datalist-item-placeholder-row"},c.a.createElement(v.DataListItemCells,{dataListCells:[c.a.createElement(m.DataListCell,{key:"1"},c.a.createElement(D,{height:64,width:"100%"}))]})))})))};L.propTypes={items:p.a.number},L.defaultProps={items:5};var P=function(){return c.a.createElement("div",{className:"ins__approval__request_loader"},c.a.createElement(y.Grid,{hasGutter:!0},c.a.createElement(E.GridItem,{md:4,lg:3,className:"info-bar"},c.a.createElement(O.Stack,{hasGutter:!0},c.a.createElement(w.StackItem,null,c.a.createElement(M.Card,null,c.a.createElement(_.CardBody,null,c.a.createElement(D,{className:"pf-u-mb-sm ins__approval__request_loader-card"})))))),c.a.createElement(E.GridItem,{md:8,lg:9,className:"detail-pane pf-u-p-lg"},c.a.createElement(L,null))))},x=function(){return c.a.createElement(R.Main,{className:"pf-u-p-0 pf-u-ml-0"},c.a.createElement(k.a,{className:"ins__approval__placeholder_toolbar"},c.a.createElement(k.b,null)),c.a.createElement(j.Section,{type:"content"},c.a.createElement(L,null)))},N=function(){return c.a.createElement(D,{height:64,width:"100%"})},C=function(){return c.a.createElement(h.Form,null,c.a.createElement(q.FormGroup,{fieldId:"1"},c.a.createElement(N,null)),c.a.createElement(q.FormGroup,{fieldId:"2"},c.a.createElement(N,null)))},F=function(){return c.a.createElement(D,{height:32,width:200,className:"pf-u-mb-md"})}}}]);
//# sourceMappingURL=../sourcemaps/lib~App~06837ae4.js.map