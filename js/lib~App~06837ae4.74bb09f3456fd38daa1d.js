(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return g}));var n=r(0),a=r.n(n),o=r(7),i=r.n(o),c=r(86),u=r(119),l=r(51),s=r(78),d=r(67),p=r(52),f=r(236),m=r(237),b=function(e){var t=e.breadcrumbs;return t?a.a.createElement(f.Breadcrumb,null,t.map((function(e,r){var n=e.to,o=e.id,i=e.title;return a.a.createElement(m.BreadcrumbItem,{key:i,isActive:r===t.length-1,id:o},n&&a.a.createElement(p.c,{isActive:function(){return!1},exact:!0,to:n},i)||i)}))):null};b.propTypes={breadcrumbs:i.a.arrayOf(i.a.shape({title:i.a.string.isRequired,to:i.a.string}))};var v=b,E=r(104),h=(r(429),function(e){var t=e.children,r=e.breadcrumbs,n=e.paddingBottom,o=e.className;return a.a.createElement("div",{className:Object(E.a)("pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg",n&&"pf-u-pb-sm","top-toolbar",o)},r&&a.a.createElement(c.Level,{className:"pf-u-mb-md"},a.a.createElement(v,{breadcrumbs:r})),t)});h.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired,breadcrumbs:i.a.array,paddingBottom:i.a.bool,className:i.a.string},h.defaultProps={paddingBottom:!1};var g=function(e){var t=e.title,r=e.description,o=e.children;return a.a.createElement(n.Fragment,null,a.a.createElement(c.Level,null,a.a.createElement(u.LevelItem,null,a.a.createElement(s.TextContent,{className:"pf-u-mb-sm"},a.a.createElement(l.Text,{component:l.TextVariants.h1},t||a.a.createElement(d.d,null))),r&&a.a.createElement(s.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},a.a.createElement(l.Text,{component:l.TextVariants.p},r))),o))};g.propTypes={title:i.a.string,description:i.a.string,children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])}},13:function(e,t,r){"use strict";r.d(t,"h",(function(){return n})),r.d(t,"j",(function(){return a})),r.d(t,"i",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return c})),r.d(t,"k",(function(){return u})),r.d(t,"l",(function(){return l})),r.d(t,"a",(function(){return s})),r.d(t,"t",(function(){return d})),r.d(t,"m",(function(){return p})),r.d(t,"n",(function(){return f})),r.d(t,"e",(function(){return m})),r.d(t,"g",(function(){return b})),r.d(t,"f",(function(){return v})),r.d(t,"r",(function(){return E})),r.d(t,"s",(function(){return h})),r.d(t,"q",(function(){return g})),r.d(t,"p",(function(){return O})),r.d(t,"b",(function(){return y})),r.d(t,"o",(function(){return w}));var n="FETCH_REQUEST",a="FETCH_REQUEST_CONTENT",o="FETCH_REQUESTS",i="EXPAND_REQUEST",c="CREATE_REQUEST_ACTION",u="FETCH_WORKFLOW",l="FETCH_WORKFLOWS",s="ADD_WORKFLOW",d="UPDATE_WORKFLOW",p="REMOVE_WORKFLOW",f="REMOVE_WORKFLOWS",m="EXPAND_WORKFLOW",b="FETCH_RBAC_GROUPS",v="FETCH_GROUP_NAMES",E="SORT_REQUESTS",h="SORT_WORKFLOWS",g="SET_FILTER_WORKLOWS",O="SET_FILTER_REQUESTS",y="CLEAR_FILTER_REQUESTS",w="RESET_REQUEST_LIST"},146:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return o}));var n={limit:50,offset:0,itemCount:1,numberOfItems:50},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return(e-1)*t}},152:function(e,t,r){"use strict";r.d(t,"e",(function(){return y})),r.d(t,"f",(function(){return w})),r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return j})),r.d(t,"d",(function(){return R})),r.d(t,"c",(function(){return k}));var n=r(72),a=r.n(n),o=r(120),i=r.n(o),c=r(10),u=r.n(c),l=r(143),s=r.n(l),d=r(69),p=r(234),f=r(109);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=s.a.create();v.interceptors.request.use(function(){var e=i()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v.interceptors.response.use((function(e){return e.data||e})),v.interceptors.response.use(null,(function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=null===(e=r.response)||void 0===e||null===(t=e.headers)||void 0===t?void 0:t["x-rh-insights-request-id"];throw n?b(b({},r.response),{},{requestId:n}):b({},r.response)}));var E=new f.WorkflowApi(void 0,d.a,v),h=new f.ActionApi(void 0,d.a,v),g=new f.TemplateApi(void 0,d.a,v),O=new p.RoleApi(void 0,d.b,v);function y(){return g}function w(){return E}function _(){return h}function j(){return v}function R(){return O}var L=s.a.create();function k(){return L}L.interceptors.request.use(function(){var e=i()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L.interceptors.response.use((function(e){var t=e.data;if(t.errors)throw{message:t.errors[0].errorType,data:t.errors[0].message};return t}))},337:function(e,t,r){var n=r(6),a=r(338);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},338:function(e,t,r){(t=e.exports=r(5)(!1)).i(r(339),""),t.i(r(340),""),t.push([e.i,".detail-pane{background-color:var(--pf-global--BackgroundColor--100)}.detail-pane,.info-bar{min-height:100%}@supports not (overflow-wrap: anywhere){.detail-pane,.info-bar{word-break:break-all}}@supports (overflow-wrap: anywhere){.detail-pane,.info-bar{overflow-wrap:anywhere}}.destructive-color:not(:disabled){color:var(--pf-chart-color-red-100) !important}.disabled-link{pointer-events:none}.icon-danger-fill{fill:var(--pf-global--danger-color--100)}.icon-info-fill{fill:var(--pf-global--info-color--100)}.icon-success-fill{fill:var(--pf-global--success-color--100)}.font-14{font-size:14px;color:var(--pf-global--Color--100);font-weight:bold}\n",""])},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"g",(function(){return s})),r.d(t,"f",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return f})),r.d(t,"j",(function(){return m})),r.d(t,"d",(function(){return b})),r.d(t,"e",(function(){return v}));var n=r(0),a=r.n(n),o=r(235),i=["notified"],c="approval/admin",u="approval/approver",l="approval/requester",s=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})},d=function(e){return i.includes(e)},p=function(e){return a.a.createElement("span",{key:e},a.a.createElement(o.DateFormat,{date:e,type:"relative"}))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["Approval Administrator"]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e["Approval Approver"]},b=function(e){var t=f(e),r=m(e);return t?c:r?u:l},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return e.forEach((function(e){"Approval Administrator"===e.name?t["Approval Administrator"]=!0:"Approval Approver"===e.name&&(t["Approval Approver"]=!0)})),t}},403:function(e,t,r){var n=r(6),a=r(404);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},404:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,"@keyframes loader{0%{transform:translateX(-100%)}60%{transform:translateX(100%)}100%{transform:translateX(100%)}}.ins__approval__loader{position:relative;overflow:hidden;width:100%;height:100%;display:block;border-radius:3px;background-color:#f3f3f3}.ins__approval__loader::after{animation:2s loader linear 0.5s infinite;background:linear-gradient(90deg, transparent, #ecebeb, transparent);content:'';position:absolute;bottom:0;left:0;right:0;top:0;transform:translateX(-100%);z-index:1}.ins__approval__placeholder_toolbar{min-height:120px}.ins__approval__request_loader{background:var(--pf-c-page__main-section--BackgroundColor);width:100%;height:100%}.ins__approval__request_loader-card{min-height:500px}\n",""])},429:function(e,t,r){var n=r(6),a=r(430);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};n(a,o);e.exports=a.locals||{}},43:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)({});t.a=a},430:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".top-toolbar{background-color:#FFFFFF}\n",""])},53:function(e,t,r){"use strict";t.a={allrequests:{index:"/allrequests"},requests:{index:"/requests",addComment:"/requests/add-comment",approve:"/requests/approve",deny:"/requests/deny"},request:{index:"/request",addComment:"/request/add-comment",approve:"/request/approve",deny:"/request/deny"},workflows:{index:"/workflows",add:"/workflows/add-workflow",remove:"/workflows/remove",editInfo:"/workflows/edit-info",editGroups:"/workflows/edit-groups",editSequence:"/workflows/edit-sequence"}}},544:function(e,t,r){"use strict";r.r(t);var n,a=r(0),o=r.n(a),i=r(17),c=r.n(i),u=r(80),l=r(44),s=r.n(l),d=r(247),p=r(77),f=r.n(p),m=r(228),b=r.n(m),v=r(229),E=r.n(v),h=r(230),g=r(10),O=r.n(g),y=r(13);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){O()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j,R={requests:{data:[],meta:{count:0,limit:50,offset:0}},filterValue:{},isRequestDataLoading:!1,expandedRequests:[],selectedRequest:{metadata:{user_capabilities:{}},requests:[]},sortBy:{direction:"desc",property:"opened",index:3}},L=function(e){return _(_({},e),{},{isRequestDataLoading:!0,expandedRequests:[]})},k=(n={},O()(n,"".concat(y.i,"_PENDING"),L),O()(n,"".concat(y.i,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{requests:r,isRequestDataLoading:!1})})),O()(n,"".concat(y.h,"_PENDING"),L),O()(n,"".concat(y.h,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{selectedRequest:r,isRequestDataLoading:!1})})),O()(n,"".concat(y.j,"_PENDING"),L),O()(n,"".concat(y.j,"_FULFILLED"),(function(e,t){var r=t.payload;return _(_({},e),{},{requestContent:r,isRequestDataLoading:!1})})),O()(n,y.d,(function(e,t){var r=t.payload;return _(_({},e),{},{expandedRequests:[].concat(s()(e.expandedRequests),[r])})})),O()(n,y.r,(function(e,t){var r=t.payload;return _(_({},e),{},{sortBy:r,requests:_(_({},e.requests),{},{meta:_(_({},e.requests.meta),{},{offset:0})})})})),O()(n,y.p,(function(e,t){var r=t.payload;return _(_({},e),{},{filterValue:_(_({},e.filterValue),{},O()({},r.type,r.filterValue)),requests:_(_({},e.requests),{},{meta:_(_({},e.requests.meta),{},{offset:0})})})})),O()(n,y.b,(function(e){return _(_({},e),{},{filterValue:{}})})),O()(n,y.o,(function(e){return _(_({},e),{},{requests:{data:[],meta:{count:0,limit:50,offset:0}},filterValue:{}})})),n);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){O()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N,T={workflows:{data:[],meta:{count:0,limit:50,offset:0}},workflow:{},filterValue:"",isLoading:!1,isRecordLoading:!1,expandedWorkflows:[],sortBy:{index:4,property:"sequence",direction:"asc"}},x=(j={},O()(j,"".concat(y.l,"_PENDING"),(function(e){return P(P({},e),{},{isLoading:!0,expandedWorkflows:[]})})),O()(j,"".concat(y.l,"_FULFILLED"),(function(e,t){var r=t.payload;return P(P({},e),{},{workflows:r,isLoading:!1})})),O()(j,"".concat(y.k,"_PENDING"),(function(e){return P(P({},e),{},{isRecordLoading:!0})})),O()(j,"".concat(y.k,"_FULFILLED"),(function(e,t){var r=t.payload;return P(P({},e),{},{workflow:r,isRecordLoading:!1})})),O()(j,y.e,(function(e,t){var r=t.payload;return P(P({},e),{},{expandedWorkflows:[].concat(s()(e.expandedWorkflows),[r])})})),O()(j,y.s,(function(e,t){var r=t.payload;return P(P({},e),{},{sortBy:r,workflows:P(P({},e.workflows),{},{meta:P(P({},e.workflows.meta),{},{offset:0})})})})),O()(j,y.q,(function(e,t){var r=t.payload;return P(P({},e),{},{filterValue:r,workflows:P(P({},e.workflows),{},{meta:P(P({},e.workflows.meta),{},{offset:0})})})})),j);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){O()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S={groups:[],isLoading:!1},I=function(e){return F(F({},e),{},{isLoading:!0})},A=(N={},O()(N,"".concat(y.g,"_PENDING"),I),O()(N,"".concat(y.g,"_FULFILLED"),(function(e,t){var r=t.payload;return F(F({},e),{},{groups:r,isLoading:!1})})),O()(N,"".concat(y.f,"_PENDING"),I),O()(N,"".concat(y.f,"_FULFILLED"),(function(e,t){var r=t.payload;return F(F({},e),{},{groupNames:r,isLoading:!1})})),N),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new f.a({},[h.a,Object(d.a)(),E()({errorTitleKey:["errors","message","statusText"],errorDescriptionKey:["data.errors[0].detail","data.errors","data.error","data.message","response.body.errors","data","errorMessage","stack"]})].concat(s()(e)));return t.register({requestReducer:Object(p.applyReducerHash)(k,R),workflowReducer:Object(p.applyReducerHash)(x,T),groupReducer:Object(p.applyReducerHash)(A,S),notifications:b.a}),t.getStore()},W=r(65),U=r.n(W),G=r(105),B=r(231),V=r.n(B),K=r(15),H=r(43),M=r(37),Q=function(e){var t=Object(a.useContext)(H.a).userRoles,r=Object(K.h)();return Object(M.i)(t)?o.a.createElement(K.b,e):o.a.createElement(K.a,{to:{pathname:"/403",state:{from:r}}})},z=r(53),X=function(e){var t=Object(a.useContext)(H.a).userRoles,r=Object(K.h)(),n=Object(M.i)(t);return Object(M.j)(t)||n?o.a.createElement(K.b,e):o.a.createElement(K.a,{to:{pathname:"/403",state:{from:r}}})},J=Object(a.lazy)((function(){return Promise.all([r.e(5),r.e(4),r.e(2),r.e(0),r.e(3),r.e(1),r.e(7),r.e(6),r.e(9),r.e(8),r.e(10),r.e(11),r.e(26)]).then(r.bind(null,640))})),Y=Object(a.lazy)((function(){return Promise.all([r.e(5),r.e(4),r.e(2),r.e(0),r.e(3),r.e(1),r.e(7),r.e(6),r.e(9),r.e(8),r.e(25)]).then(r.bind(null,639))})),Z=Object(a.lazy)((function(){return Promise.all([r.e(5),r.e(4),r.e(2),r.e(0),r.e(3),r.e(1),r.e(7),r.e(6),r.e(9),r.e(8),r.e(10),r.e(11),r.e(27)]).then(r.bind(null,638))})),$=Object(a.lazy)((function(){return Promise.all([r.e(5),r.e(4),r.e(2),r.e(0),r.e(3),r.e(1),r.e(7),r.e(6),r.e(9),r.e(8),r.e(10),r.e(11),r.e(26)]).then(r.bind(null,636))})),ee=Object(a.lazy)((function(){return Promise.all([r.e(5),r.e(4),r.e(2),r.e(0),r.e(3),r.e(1),r.e(7),r.e(6),r.e(13)]).then(r.bind(null,637))})),te=["/400","/401","/403","/404"],re=function(){var e=Object(a.useContext)(H.a).userRoles,t=Object(K.h)(),r=Object(M.i)(e),n=Object(M.j)(e),i=Object(a.useState)(z.a.requests.index),c=U()(i,2),u=c[0],l=c[1];return Object(a.useEffect)((function(){l(n||r?z.a.requests.index:{pathname:"/403",state:{from:t}})}),[e]),o.a.createElement(K.d,null,o.a.createElement(Q,{path:z.a.workflows.index,component:Z}),o.a.createElement(X,{path:z.a.requests.index,component:J}),o.a.createElement(K.b,{path:z.a.allrequests.index,component:$}),o.a.createElement(K.b,{path:z.a.request.index,component:Y}),o.a.createElement(K.b,{path:te,component:ee}),o.a.createElement(K.b,null,o.a.createElement(K.a,{to:u})))},ne=r(67),ae=r(146),oe=r(545),ie=r(52),ce=r(152),ue=(r(337),window.location.pathname.split("/"));ue.shift();var le="/";"beta"===ue[0]&&(le="/".concat(ue.shift(),"/"));var se=function(){var e=Object(a.useState)(!1),t=U()(e,2),r=t[0],n=t[1],i=Object(a.useState)({}),c=U()(i,2),u=c[0],l=c[1];return Object(a.useEffect)((function(){insights.chrome.init(),Promise.all([insights.chrome.auth.getUser().then((function(){return Object(ce.d)().listRoles(ae.a.limit,0,"Approval ","principal").then((function(e){return l(Object(M.e)(null==e?void 0:e.data))}))}))]).then((function(){return n(!0)})),insights.chrome.identifyApp("approval")}),[]),r?o.a.createElement(ie.a,{basename:"".concat(le).concat(ue[0],"/").concat(ue[1],"/").concat(ue[2])},o.a.createElement(a.Suspense,{fallback:o.a.createElement(ne.a,null)},o.a.createElement(oe.a,{locale:"en"},o.a.createElement(H.a.Provider,{value:{userRoles:u}},o.a.createElement(o.a.Fragment,null,o.a.createElement(V.a,null),o.a.createElement(G.Main,{className:"pf-u-p-0 pf-u-ml-0"},o.a.createElement(re,null))))))):o.a.createElement(ne.a,null)};c.a.render(o.a.createElement(u.Provider,{store:C()},o.a.createElement(se,null)),document.getElementById("root"))},67:function(e,t,r){"use strict";r.d(t,"b",(function(){return T})),r.d(t,"c",(function(){return x})),r.d(t,"a",(function(){return D})),r.d(t,"e",(function(){return S})),r.d(t,"d",(function(){return I}));var n=r(44),a=r.n(n),o=r(147),i=r.n(o),c=r(158),u=r.n(c),l=r(0),s=r.n(l),d=r(7),p=r.n(d),f=r(133),m=r(211),b=r(208),v=r(209),E=r(210),h=r(148),g=r(113),O=r(216),y=r(110),w=r(153),_=r(156),j=r(126),R=r(128),L=r(159),k=r(105),q=r(104),P=(r(403),r(115)),N=function(e){var t=e.width,r=void 0===t?"100%":t,n=e.height,a=void 0===n?"100%":n,o=e.className,c=u()(e,["width","height","className"]);return s.a.createElement("span",i()({},c,{className:Object(q.a)("ins__approval__loader",o),style:{width:r,height:a}}))};N.propTypes={width:p.a.oneOfType([p.a.string,p.a.number]),height:p.a.oneOfType([p.a.string,p.a.number]),className:p.a.string};var T=function(e){var t=e.items;return s.a.createElement(f.DataList,{"aria-label":"data-list-loader","aria-labelledby":"datalist-placeholder"},a()(Array(t)).map((function(e,t){return s.a.createElement(b.DataListItem,{key:t,"aria-labelledby":"datalist-item-placeholder"},s.a.createElement(v.DataListItemRow,{"aria-label":"datalist-item-placeholder-row"},s.a.createElement(E.DataListItemCells,{dataListCells:[s.a.createElement(m.DataListCell,{key:"1"},s.a.createElement(N,{height:64,width:"100%"}))]})))})))};T.propTypes={items:p.a.number},T.defaultProps={items:5};var x=function(){return s.a.createElement("div",{className:"ins__approval__request_loader"},s.a.createElement(h.Grid,{hasGutter:!0},s.a.createElement(g.GridItem,{md:4,lg:3,className:"info-bar"},s.a.createElement(w.Stack,{hasGutter:!0},s.a.createElement(_.StackItem,null,s.a.createElement(j.Card,null,s.a.createElement(R.CardBody,null,s.a.createElement(N,{className:"pf-u-mb-sm ins__approval__request_loader-card"})))))),s.a.createElement(g.GridItem,{md:8,lg:9,className:"detail-pane pf-u-p-lg"},s.a.createElement(T,null))))},D=function(){return s.a.createElement(k.Main,{className:"pf-u-p-0 pf-u-ml-0"},s.a.createElement(P.a,{className:"ins__approval__placeholder_toolbar"},s.a.createElement(P.b,null)),s.a.createElement(L.Section,{type:"content"},s.a.createElement(T,null)))},F=function(){return s.a.createElement(N,{height:64,width:"100%"})},S=function(){return s.a.createElement(O.Form,null,s.a.createElement(y.FormGroup,{fieldId:"1"},s.a.createElement(F,null)),s.a.createElement(y.FormGroup,{fieldId:"2"},s.a.createElement(F,null)))},I=function(){return s.a.createElement(N,{height:32,width:200,className:"pf-u-mb-md"})}},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return E}));var n=r(124),a=r.n(n),o=r(134),i=r.n(o),c=r(207),u=r.n(c),l=r(125),s=r.n(l),d=r(206),p=r.n(d),f=r(0),m=r.n(f),b="".concat("/api","/approval/v1.2"),v="".concat("/api","/rbac/v1"),E={undecided:{displayName:"Needs review",icon:m.a.createElement(i.a,{className:"pf-u-mr-sm icon-info-fill"})},approved:{displayName:"Approved",icon:m.a.createElement(a.a,{className:"pf-u-mr-sm icon-success-fill"})},denied:{displayName:"Denied",icon:m.a.createElement(p.a,{className:"pf-u-mr-sm icon-danger-fill"})},canceled:{displayName:"Canceled",icon:m.a.createElement(u.a,{className:"pf-u-mr-sm icon-danger-fill"})},error:{displayName:"Error",icon:m.a.createElement(s.a,{className:"pf-u-mr-sm icon-danger-fill"})}}}}]);
//# sourceMappingURL=../sourcemaps/lib~App~06837ae4.js.map