(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{238:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c}));var a={limit:50,offset:0,itemCount:1,numberOfItems:50},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;return(e-1)*t}},239:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return s}));var a=n(0),r=n.n(a),c=n(298),o=["notified"],i=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})},l=function(e){return o.includes(e)},s=function(e){return r.a.createElement("span",{key:e},r.a.createElement(c.DateFormat,{date:e,type:"relative"}))}},244:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="".concat("/api","/approval/v1.0"),r="".concat("/api","/rbac/v1")},249:function(e,t,n){"use strict";var a=n(254);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(a.a)(e,t,n)}},250:function(e,t,n){"use strict";n.d(t,"e",(function(){return q})),n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return T})),n.d(t,"a",(function(){return w})),n.d(t,"d",(function(){return x})),n.d(t,"b",(function(){return P})),n.d(t,"c",(function(){return C}));var a=n(245),r=n.n(a),c=n(246),o=n.n(c),i=n(3),l=n.n(i),s=n(273),u=n.n(s),p=n(244),d=n(279),m=n(289);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=u.a.create();y.interceptors.request.use(function(){var e=o()(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y.interceptors.response.use((function(e){return e.data||e})),y.interceptors.response.use(null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};throw b({},e.response)}));var g=new m.WorkflowApi(void 0,p.a,y),h=new m.ActionApi(void 0,p.a,y),v=new m.RequestApi(void 0,p.a,y),E=new m.TemplateApi(void 0,p.a,y),O=new d.GroupApi(void 0,p.b,y);function q(){return v}function j(){return E}function T(){return g}function w(){return h}function x(){return O}function P(){return y}var R=u.a.create();function C(){return R}R.interceptors.request.use(function(){var e=o()(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.insights.chrome.auth.getUser();case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),R.interceptors.response.use((function(e){var t=e.data;if(t.errors)throw{message:t.errors[0].errorType,data:t.errors[0].message};return t}))},255:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),o=n.n(c),i=n(107),l=n(108),s=n(104),u=n(106),p=n(34),d=n(33),m=n(310),f=n(312),b=function(e){var t=e.breadcrumbs;return t?r.a.createElement(m.Breadcrumb,null,Object.values(t).map((function(e){return r.a.createElement(f.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r.a.createElement(d.c,{exact:!0,to:e.to},e.title)||e.title)}))):null};b.propTypes={breadcrumbs:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,isActive:o.a.bool,to:o.a.string}))};var y=b;n(265);n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return h}));var g=function(e){var t=e.children,n=e.breadcrumbs,a=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(a?"pf-u-pb-sm":""," top-toolbar")},n&&r.a.createElement(i.Level,{className:"pf-u-mb-md"},r.a.createElement(y,{breadcrumbs:n})),t)};g.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,breadcrumbs:o.a.array,paddingBottom:o.a.bool},g.defaultProps={paddingBottom:!1};var h=function(e){var t=e.title,n=e.description,c=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement(i.Level,null,r.a.createElement(l.LevelItem,null,r.a.createElement(u.TextContent,{className:"pf-u-mb-sm"},r.a.createElement(s.Text,{component:s.TextVariants.h1},t||r.a.createElement(p.d,null))),n&&r.a.createElement(u.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},r.a.createElement(s.Text,{component:s.TextVariants.p},n))),c))};h.propTypes={title:o.a.string,description:o.a.string,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])}},265:function(e,t,n){},266:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),o=n.n(c),i=n(15),l=n(262),s=n(261),u=function(e){var t=e.history.push,n=e.location.pathname,a=e.tabItems,c=a.find((function(e){var t=e.name;return n.includes(t)}));return r.a.createElement(l.Tabs,{className:"pf-u-mt-sm",activeKey:c?c.eventKey:0,onSelect:function(e,n){return t(a[n].name)}},a.map((function(e){return r.a.createElement(s.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}),history:o.a.shape({push:o.a.func.isRequired}),tabItems:o.a.array.isRequired},t.a=Object(i.j)(u)},270:function(e,t,n){"use strict";var a=n(3),r=n.n(a),c=n(235),o=n.n(c),i=n(0),l=n.n(i),s=n(1),u=n.n(s),p=n(313),d=n(268),m=n(248),f=n(107),b=n(108),y=n(323),g=n(462),h=n(461),v=n(238),E=n(314),O=n.n(E),q=n(111),j=n.n(q),T=n(247),w=function(e){var t=e.searchValue,n=e.onFilterChange,a=e.placeholder,r=e.isClearable;return l.a.createElement(m.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(T.TextInput,{placeholder:a,value:t,type:"text",onChange:n,"aria-label":a}),l.a.createElement("span",{className:"filter-icons-container"},r&&t&&l.a.createElement(j.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return n("")}})||l.a.createElement(O.a,null))))};w.propTypes={onFilterChange:u.a.func.isRequired,placeholder:u.a.string,searchValue:u.a.string,isClearable:u.a.bool},w.defaultProps={searchValue:"",isClearable:!1};var x=w,P=n(64),R=n(34),C=n(27),D=n.n(C),k=n(39),S=n.n(k),_=n(254),F=n(114),L=function(e){var t=e.meta,n=t.limit,a=t.count,r=t.offset,c=e.apiProps,o=e.apiRequest,i=e.className,s=e.isCompact,u=S()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:i},l.a.createElement(F.Pagination,D()({perPage:n||50,itemCount:a||0,onPerPageSelect:function(e,t){return o(c,{offset:r,limit:t})},page:Object(v.b)(n,r),onSetPage:function(e,t,a){var r={offset:Object(v.c)(t,n),limit:n},i=function(){return o(c,r)};return a?Object(_.a)(i,250)():i()},direction:"down",isCompact:s},u)))};L.propTypes={meta:u.a.shape({count:u.a.number,limit:u.a.number.isRequired,offset:u.a.number.isRequired}),apiRequest:u.a.func.isRequired,apiProps:u.a.any,className:u.a.string,isCompact:u.a.bool},L.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1};var A=L;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return V}));var V=function(e){var t=e.isSelectable,n=e.createRows,a=e.columns,r=e.fetchData,c=e.toolbarButtons,s=e.data,u=e.actionResolver,v=e.routes,E=e.titlePlural,O=e.titleSingular,q=e.pagination,j=e.setCheckedItems,T=e.filterValue,w=e.onFilterChange,C=e.isLoading,D=e.onCollapse,k=Object(i.useState)([]),S=o()(k,2),_=S[0],F=S[1];Object(i.useEffect)((function(){F(n(s))}),[s]);var L=function(e,t){return e.map((function(e){return e.id===t?I({},e,{isOpen:!e.isOpen}):I({},e)}))},N=function(e,t){var n=e.map((function(e){return e.id===t?I({},e,{selected:!e.selected}):I({},e)})),a=n.filter((function(e){return e.id&&e.selected}));return j(a),n};return l.a.createElement(P.Section,{type:"content","page-type":"tab-".concat(E),id:"tab-".concat(E)},v(),function(e){return l.a.createElement(p.Toolbar,{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg pf-u-pb-lg top-toolbar"},l.a.createElement(f.Level,{style:{flex:1}},l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(x,{onFilterChange:w,searchValue:T,isClearable:!0,placeholder:"Filter by ".concat(O)}),c())),l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(d.ToolbarGroup,null,l.a.createElement(m.ToolbarItem,null,l.a.createElement(A,{apiRequest:r,isDisabled:e,meta:q,isCompact:!0})))))))}(C),C?l.a.createElement(R.b,null):l.a.createElement(y.a,{"aria-label":"".concat(E," table"),onCollapse:function(e,t,n,a){var r=a.id;return D?D(r,F,L):F((function(e){return L(e,r)}))},rows:_,cells:a,onSelect:t&&function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=a.id;return F(-1===n?_.map((function(e){return I({},e,{selected:t})})):function(e){return N(e,r)})},actionResolver:u,className:"table-fix"},l.a.createElement(g.a,null),l.a.createElement(h.a,null)))};V.propTypes={isSelectable:u.a.bool,createRows:u.a.func.isRequired,columns:u.a.array.isRequired,toolbarButtons:u.a.func,fetchData:u.a.func.isRequired,data:u.a.array,pagination:u.a.shape({limit:u.a.number,offset:u.a.number,count:u.a.number}),titlePlural:u.a.string,titleSingular:u.a.string,routes:u.a.func,actionResolver:u.a.func,setCheckedItems:u.a.func,filterValue:u.a.string,onFilterChange:u.a.func,isLoading:u.a.bool,onCollapse:u.a.func},V.defaultProps={requests:[],isLoading:!1,pagination:v.a,toolbarButtons:function(){return null},isSelectable:null,routes:function(){return null}}},460:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n.n(a),c=n(235),o=n.n(c),i=n(3),l=n.n(i),s=n(0),u=n.n(s),p=n(1),d=n.n(p),m=n(22),f=n(15),b=n(253),y=n(4),g=n(245),h=n.n(g),v=n(246),E=n.n(v),O=n(250),q=n(244),j=n(238);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=Object(O.e)(),P=Object(O.a)(),R=Object(O.c)();function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.a,n="&limit=".concat(t.limit,"&offset=").concat(t.offset),a="&filter[name][contains_i]=".concat(e);return Object(O.b)().get("".concat(q.a,"/requests/?").concat(a).concat(n))}var D=function(e){return R.post("".concat(q.a,"/graphql"),{query:(t=e,'query {\n  requests (filter: { parent_id: "'.concat(t,'" } ) {\n    actions {\n      id\n      operation \n      comments \n      created_at \n      processed_by\n    }\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    parent_id\n    state\n    workflow_id\n  }\n}'))}).then((function(e){return e.data.requests}));var t};var k=function(e){return P.listActionsByRequest(e)},S=function(e){return Object(O.b)().get("".concat(q.a,"/requests/").concat(e,"/content"))};function _(e){return F.apply(this,arguments)}function F(){return(F=E()(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.showRequest(t);case 2:if(!((n=e.sent).number_of_children>0)){e.next=10;break}return e.next=6,D(t);case 6:a=e.sent,n=w({},n,{children:a}),e.next=14;break;case 10:return e.next=12,k(t);case 12:r=e.sent,n=w({},n,{actions:r?r.data:[]});case 14:return e.abrupt("return",w({},n));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return A.apply(this,arguments)}function A(){return(A=E()(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.createAction(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e,t){return{type:y.h,payload:C(e,t)}},I=function(e){return{type:y.i,payload:S(e)}},V=function(e,t,n){return{type:y.b,payload:L(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success",description:"The ".concat(e," was successful.")},rejected:{variant:"danger",title:"".concat(e," error"),description:"The ".concat(e," action failed.")}}}}},B=n(39),K=n.n(B),M=n(260),U=n.n(M),G=n(409),H=n(18),z=n.n(H),J=n(429),Q=n(430),W=n(37),X=n(106),Y=n(104),Z=function(e){var t=e.input,n=e.options,a=e.isReadOnly,c=e.isDisabled,o=(e.FieldProvider,e.isRequired),i=K()(e,["input","options","isReadOnly","isDisabled","FieldProvider","isRequired"]);return u.a.createElement(J.FormSelect,r()({},t,i,{isDisabled:c||a}),function(e,t,n){if(t&&n)return e;var a=z()(e);return a.find((function(e){return void 0===e.value}))?z()(a):[{label:n?"Please choose":"None"}].concat(z()(a))}(n,t.value,o).map((function(e){return u.a.createElement(Q.FormSelectOption,r()({key:e.value||e.label},e,{label:e.label.toString()}))})))};Z.propTypes={input:d.a.object.isRequired,options:d.a.arrayOf(d.a.shape({value:d.a.any,label:d.a.string.isRequired})).isRequired,isReadOnly:d.a.bool,isDisabled:d.a.bool,isRequired:d.a.bool,FieldProvider:d.a.any};var $=function(e){e.componentType;var t=e.label,n=e.isRequired,a=e.helperText,c=e.meta,o=e.description,i=e.hideLabel,l=K()(e,["componentType","label","isRequired","helperText","meta","description","hideLabel"]),s=c.error,p=c.touched&&s;return u.a.createElement(W.FormGroup,{isRequired:n,label:!i&&t,fieldId:l.id,isValid:!p,helperText:a,helperTextInvalid:c.error},o&&u.a.createElement(X.TextContent,null,u.a.createElement(Y.Text,{component:Y.TextVariants.small},o)),u.a.createElement(Z,r()({label:t,isValid:!p,isRequired:n},l)))};$.propTypes={componentType:d.a.string,label:d.a.string,isRequired:d.a.bool,helperText:d.a.string,meta:d.a.object,description:d.a.string,hideLabel:d.a.bool};var ee=$;function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae={default:{},modal:{buttonOrder:["cancel","reset","save"],buttonClassName:"modal-form-right-align"}},re=function(e){var t=e.componentMapper,n=e.formContainer,a=K()(e,["componentMapper","formContainer"]);return u.a.createElement("div",{className:ae[n].buttonClassName},u.a.createElement(U.a,r()({formFieldsMapper:ne({},G.formFieldsMapper,l()({componentMapper:t},M.componentTypes.SELECT,ee)),layoutMapper:G.layoutMapper},ae[n],a)))};re.propTypes={componentMapper:d.a.object,formContainer:d.a.oneOf(["default","modal"])},re.defaultProps={componentMapper:{},formContainer:"default"};var ce=re,oe=n(60),ie=n(252),le=n(29),se=function(e){return{component:M.componentTypes.TEXTAREA_FIELD,name:"comments",type:"text",isRequired:e,label:e?"Reason":"Comment"}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=se(e);return e&&(t.validate=[{type:M.validatorTypes.REQUIRED}]),{fields:[t]}};function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(e){var t=e.history.push,n=e.match.params.id,a=e.actionType,r=e.addNotification,c=e.createRequestAction,o=e.closeUrl,i=e.postMethod,l=function(){var e="Add Comment"===a?a:"".concat(a," Request");r({variant:"warning",title:e,dismissable:!0,description:"".concat(e," was cancelled by the user.")}),t(o)};return u.a.createElement(ie.Modal,{isLarge:!0,title:"Add Comment"===a?"Request #".concat(n):"".concat(a," Request #").concat(n),isOpen:!0,onClose:l},u.a.createElement(ce,{schema:ue("Deny"===a),schemaType:"default",onSubmit:function(e){var r={"Add Comment":"memo",Approve:"approve",Deny:"deny"},l="Add Comment"===a?a:"".concat(a," Request");return i?c(l,n,de({operation:r[a]},e)).then((function(){return i()})).then((function(){return t(o)})):c(l,n,de({operation:r[a]},e)).then((function(){return t(o)}))},onCancel:l,formContainer:"modal"}))};me.defaultProps={closeUrl:"/requests"},me.propTypes={history:d.a.shape({push:d.a.func.isRequired}).isRequired,addNotification:d.a.func.isRequired,createRequestAction:d.a.func.isRequired,postMethod:d.a.func,id:d.a.string,actionType:d.a.string,closeUrl:d.a.string,match:d.a.object,location:d.a.object};var fe=Object(f.j)(Object(m.connect)(null,(function(e){return Object(oe.a)({addNotification:le.addNotification,createRequestAction:V},e)}))(me)),be=n(33),ye=n(58),ge=n(107),he=n(108),ve=n(263),Ee=n(239),Oe=n(434),qe=function(e){var t=e.title,n=void 0===t?"":t,a=e.detail,r=void 0===a?"":a;return u.a.createElement(X.TextContent,null,u.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.small},n),u.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.h5},r))};qe.propTypes={title:d.a.node,detail:d.a.node};var je=function(e){var t=e.id,n=e.number_of_children,a=e.state,r=e.reason,c=Object(Ee.a)(a)&&!n,i=Object(s.useState)([]),l=o()(i,2),p=l[0],d=l[1],f=Object(s.useState)(!0),b=o()(f,2),y=b[0],g=b[1],h=Object(s.useState)(!1),v=o()(h,2),E=v[0],O=v[1],q=Object(m.useSelector)((function(e){return e.requestReducer.expandedRequests}));return Object(s.useEffect)((function(){!E&&y&&q.includes(t)&&(O(!0),S(t).then((function(e){d(e),g(!1)})).catch((function(){return g(!1)})))}),[q]),y?u.a.createElement(ve.Bullseye,null,u.a.createElement(Oe.Spinner,null)):u.a.createElement(s.Fragment,null,u.a.createElement(ge.Level,null,u.a.createElement(he.LevelItem,null,u.a.createElement(qe,{title:"Product",detail:p?p.product:"Unknown"})),c&&u.a.createElement(he.LevelItem,null,u.a.createElement(be.b,{to:"/requests/approve/".concat(t),className:"pf-u-mr-md"},u.a.createElement(ye.Button,{variant:"primary","aria-label":"Approve Request",isDisabled:!c},"Approve")),u.a.createElement(be.b,{to:"/requests/deny/".concat(t)},u.a.createElement(ye.Button,{variant:"danger","aria-label":"Deny Request"},"Deny")))),u.a.createElement(ge.Level,null,u.a.createElement(he.LevelItem,null,u.a.createElement(qe,{title:"Portfolio",detail:p?p.portfolio:"Unknown"}),u.a.createElement(qe,{title:"Platform",detail:p?p.platform:"Unknown"}),u.a.createElement(qe,{title:"Reason",detail:r||""}))))};je.propTypes={id:d.a.string,content:d.a.object,number_of_children:d.a.number,uname:d.a.string,state:d.a.string,reason:d.a.string};var Te=je,we=function(e){return e.reduce((function(e,t,n){var a=t.id,r=t.name,c=t.requester_name,o=t.created_at,i=t.notified_at,l=t.finished_at,p=t.state,d=t.decision,m=t.reason,f=t.number_of_children;return[].concat(z()(e),[{id:a,isOpen:!1,state:p,number_of_children:f,cells:[u.a.createElement(s.Fragment,{key:a},u.a.createElement(be.b,{to:"/requests/detail/".concat(a)},u.a.createElement(ye.Button,{variant:"link"}," ",r," "))),c,Object(Ee.c)(o),l?Object(Ee.c)(l):i?Object(Ee.c)(i):Object(Ee.c)(o),p,d]},{parent:2*n,fullWidth:!0,cells:[{title:u.a.createElement(Te,{id:a,number_of_children:f,state:p,reason:m})}]}])}),[])},xe=n(270),Pe=n(62),Re=n(40),Ce=n(64),De=(n(61),function(e){var t=e.request,n=e.requestContent;return u.a.createElement(X.TextContent,null,u.a.createElement(Y.Text,{component:Y.TextVariants.small},"Product: ",u.a.createElement("br",null)),u.a.createElement(Y.Text,null,n?n.product:""),u.a.createElement(Y.Text,{component:Y.TextVariants.small},"Portfolio: ",u.a.createElement("br",null)),u.a.createElement(Y.Text,null,n?n.portfolio:""),u.a.createElement(Y.Text,{component:Y.TextVariants.small},"Platform: ",u.a.createElement("br",null)),u.a.createElement(Y.Text,null,n?n.platform:" "),u.a.createElement(Y.Text,{component:Y.TextVariants.small},"Requester: "),u.a.createElement(Y.Text,{component:Y.TextVariants.h6},t.requester_name),u.a.createElement(Y.Text,{component:Y.TextVariants.h6},"Order Parameters: ",u.a.createElement("br",null)," "),n.params&&Object.keys(n.params).map((function(e){return n.params[e]&&u.a.createElement(Y.Text,{key:e,component:Y.TextVariants.small},"".concat(e,": ").concat(n.params[e]))})))});De.propTypes={request:d.a.shape({requester_name:d.a.string}).isRequired,requestContent:d.a.object};var ke=De,Se=n(240),_e=n(68),Fe=n.n(_e),Le=n(69),Ae=n.n(Le),Ne=n(70),Ie=n.n(Ne),Ve=n(71),Be=n.n(Ve),Ke=n(44),Me=n.n(Ke),Ue=n(72),Ge=n.n(Ue),He=n(435),ze=n(36),Je=n(241),Qe=n(437),We=n.n(Qe),Xe=n(436),Ye=n.n(Xe),Ze=n(439),$e=n.n(Ze),et=n(438),tt=n.n(et),nt=n(440),at=n.n(nt),rt=n(441),ct=n.n(rt),ot={memo:"Comment from",approve:"Approved by",deny:"Denied by",notify:"Notified by",skip:"Skipped by",cancel:"Canceled by",start:"Started by"},it={memo:u.a.createElement(Ye.a,null),approve:u.a.createElement(We.a,{style:{color:"var(--pf-global--success-color--100)"}}),deny:u.a.createElement(tt.a,{style:{color:"var(--pf-global--danger-color--100)"}}),notify:u.a.createElement($e.a,null),skip:u.a.createElement(at.a,null),start:u.a.createElement(ct.a,null)},lt=function(e){var t=e.actionList;return u.a.createElement(Je.Stack,null,t.map((function(e){return u.a.createElement("div",{key:"".concat(e.id,"-action")},u.a.createElement(X.TextContent,null,u.a.createElement(Y.Text,{key:"".concat(e.id,"-action-created_at"),style:{marginBottom:0},className:"data-table-detail content",component:Y.TextVariants.small},Object(Ee.c)(e.created_at)),u.a.createElement(Y.Text,{key:"".concat(e.id,"-action-operation"),style:{marginBottom:0},className:"data-table-detail content"},it[e.operation]," ","".concat(ot[e.operation],"  ").concat(e.processed_by)),e.comments&&u.a.createElement(Y.Text,{key:"".concat(e.id,"-action-comments"),style:{marginBottom:0},className:"data-table-detail content",component:Y.TextVariants.h6},"".concat(e.comments))," "),u.a.createElement("br",null))})))},st=n(243),ut=n(52),pt=n(53),dt=n(55),mt=n(443),ft=n(54),bt=n(444),yt=n(116),gt=n(115),ht=n(10),vt=n(117),Et=function(e){function t(){var e,n;Fe()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=Ie()(this,(e=Be()(t)).call.apply(e,[this].concat(r))),l()(Me()(n),"state",{isKebabOpen:!1}),l()(Me()(n),"onKebabToggle",(function(e){n.setState({isKebabOpen:e})})),l()(Me()(n),"onKebabSelect",(function(){n.setState({isKebabOpen:!n.state.isKebabOpen})})),l()(Me()(n),"buildRequestActionKebab",(function(e){return u.a.createElement(gt.Dropdown,{position:ht.DropdownPosition.right,onSelect:n.onKebabSelect,toggle:u.a.createElement(vt.KebabToggle,{id:"request-request-dropdown-".concat(e.id),onToggle:n.onKebabToggle}),isOpen:n.state.isKebabOpen,dropdownItems:[u.a.createElement(yt.DropdownItem,{"aria-label":"Add Comment",key:"add_comment_".concat(e.id)},u.a.createElement(be.b,{id:"request-".concat(e.id,"-request-comment"),to:"/requests/detail/".concat(e.id,"/add_comment"),className:"pf-c-dropdown__menu-item"},"Comment"))],isPlain:!0})})),l()(Me()(n),"fetchRequestDetails",(function(e){return u.a.createElement(lt,{actionList:e.actions})})),n}return Ge()(t,e),Ae()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.item,a=t.isExpanded,r=Object(Ee.a)(n.state);return u.a.createElement(ut.DataListItem,{key:"request-".concat(n.id),"aria-labelledby":"check-request-".concat(n.id),isExpanded:a},u.a.createElement(pt.DataListItemRow,null,u.a.createElement(mt.DataListToggle,{onClick:function(){return e.props.toggleExpand("request-".concat(n.id))},isExpanded:a,id:"request-".concat(n.id),"aria-labelledby":"request-".concat(n.id," request-").concat(n.id),"aria-label":"Toggle details for"}),u.a.createElement(ft.DataListItemCells,{dataListCells:[u.a.createElement(dt.DataListCell,{key:n.id},u.a.createElement("span",{id:"".concat(n.id,"-name")},"".concat(this.props.idx+1,". ").concat(n.parent_id?n.group_name:n.name)," ")),u.a.createElement(dt.DataListCell,{key:"".concat(n.id,"-state")},u.a.createElement("span",{style:{textTransform:"capitalize"},id:"".concat(n.id,"-state")},"".concat(n.state)," ")),u.a.createElement(dt.DataListCell,{key:"".concat(n.id,"-action")},u.a.createElement(ge.Level,null,u.a.createElement(he.LevelItem,null,r&&u.a.createElement("div",null,u.a.createElement(be.b,{id:"approve-".concat(n.id),to:"/requests/detail/".concat(n.id,"/approve")},u.a.createElement(ye.Button,{variant:"link","aria-label":"Approve Request"},"Approve")),u.a.createElement(be.b,{id:"deny-".concat(n.id),to:"/requests/detail/".concat(n.id,"/deny")},u.a.createElement(ye.Button,{variant:"link",className:"destructive-color","aria-label":"Deny Request"},"Deny")))))),u.a.createElement(dt.DataListCell,{key:"request-".concat(n.id),className:"pf-c-data-list__action","aria-labelledby":"request-".concat(n.id," check-request-action").concat(n.id),id:"workflow-".concat(n.id),"aria-label":"Actions"},r&&this.buildRequestActionKebab(n))]})),u.a.createElement(bt.DataListContent,{"aria-label":"Request Content Details",isHidden:!a},u.a.createElement(Je.Stack,{gutter:"md"},u.a.createElement(st.StackItem,null,u.a.createElement(X.TextContent,{component:Y.TextVariants.h6},this.fetchRequestDetails(n))))))}}]),t}(s.Component);Et.propTypes={isLoading:d.a.bool,item:d.a.shape({id:d.a.string,name:d.a.string,state:d.a.string,parent_id:d.a.string.isRequired,group_name:d.a.string.isRequired,requestActions:d.a.shape({data:d.a.array})}).isRequired,idx:d.a.number,isExpanded:d.a.bool.isRequired,toggleExpand:d.a.func.isRequired,noItems:d.a.string};var Ot=Et,qt=n(34),jt=function(e){function t(){var e,n;Fe()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=Ie()(this,(e=Be()(t)).call.apply(e,[this].concat(r))),l()(Me()(n),"state",{expanded:[]}),l()(Me()(n),"toggleExpand",(function(e){return n.setState((function(t){var n=t.expanded,a=n.indexOf(e);return{expanded:a>=0?[].concat(z()(n.slice(0,a)),z()(n.slice(a+1,n.length))):[].concat(z()(n),[e])}}))})),l()(Me()(n),"isExpanded",(function(e){return n.state.expanded.includes(e)})),n}return Ge()(t,e),Ae()(t,[{key:"render",value:function(){var e=this;return u.a.createElement(s.Fragment,null,u.a.createElement("div",null,this.props.isLoading&&u.a.createElement(s.Fragment,null,u.a.createElement(He.PageHeader,null,u.a.createElement(He.PageHeaderTitle,{title:this.props.noItems})),u.a.createElement(qt.b,null))),this.props.items.length>0&&u.a.createElement(ze.DataList,{"aria-label":"Expandable data list"},this.props.items.map((function(t,n){return u.a.createElement(Ot,{key:t.id,item:t,idx:n,isActive:0===n,isExpanded:e.isExpanded("request-".concat(t.id)),toggleExpand:e.toggleExpand})}))))}}]),t}(s.Component);jt.propTypes={isLoading:d.a.bool,items:d.a.array,noItems:d.a.string,active_request:d.a.number},jt.defaultProps={items:[]};var Tt=jt,wt=function(e){var t=e.request;return u.a.createElement(s.Fragment,null,u.a.createElement(Se.Title,{size:"sm",style:{paddingLeft:"32px"}}," Request transcript "),u.a.createElement(Tt,{items:t.children&&t.children.length>0?t.children:[t]}))};wt.propTypes={request:d.a.shape({content:d.a.object,children:d.a.array}).isRequired};var xt=wt,Pt=n(255);function Rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ct={isFetching:!0},Dt=function(e,t){switch(t.type){case"setFetching":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Rt(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isFetching:t.payload});default:return e}},kt=function(){var e=Object(s.useReducer)(Dt,Ct),t=o()(e,2),n=t[0].isFetching,a=t[1],c=Object(m.useSelector)((function(e){var t=e.requestReducer,n=t.requestContent;return{selectedRequest:t.selectedRequest,requestContent:n}})),i=c.selectedRequest,l=c.requestContent,p=Object(f.i)().id,d=Object(f.h)(),b=Object(m.useDispatch)();Object(s.useEffect)((function(){var e;Promise.all([b((e=p,{type:y.g,payload:_(e)})),b(I(p))]).then((function(){return a({type:"setFetching",payload:!1})}))}),[]);return u.a.createElement(s.Fragment,null,u.a.createElement(f.b,{exact:!0,path:"/requests/detail/:id/add_comment",render:function(e){return u.a.createElement(fe,r()({},e,{actionType:"Add Comment",closeUrl:d.url}))}}),u.a.createElement(f.b,{exact:!0,path:"/requests/detail/:id/approve",render:function(e){return u.a.createElement(fe,r()({},e,{actionType:"Approve",closeUrl:d.url}))}}),u.a.createElement(f.b,{exact:!0,path:"/requests/detail/:id/deny",render:function(e){return u.a.createElement(fe,r()({},e,{actionType:"Deny",closeUrl:d.url}))}}),u.a.createElement(Pt.a,{breadcrumbs:[{title:"Request Queue",to:"/requests",id:"requests"}],paddingBottom:!0},u.a.createElement(Pt.b,{title:"Request ".concat(p)})),u.a.createElement(Ce.Section,{type:"content"},u.a.createElement(Pe.Grid,{gutter:"md"},n||!i||0===Object.keys(i).length?u.a.createElement(Ce.Section,{style:{backgroundColor:"white",minHeight:"100%"}},u.a.createElement(qt.c,null)):u.a.createElement(s.Fragment,null,u.a.createElement(Re.GridItem,{md:2,className:"detail-pane"},u.a.createElement(ke,{request:i,requestContent:l})),u.a.createElement(Re.GridItem,{md:10,className:"detail-pane"},u.a.createElement(xt,{request:i,url:d.url}))))))},St=n(266),_t=n(249);function Ft(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Lt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ft(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ft(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var At=[{title:"Name",cellFormatters:[b.b]},"Requester","Opened","Updated","Status","Decision"],Nt=Object(_t.a)((function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:j.a;n(!0),t(N(e,a)).then((function(){return n(!1)}))}),1e3),It={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},Vt=function(e,t){switch(t.type){case"setFetching":return Lt({},e,{isFetching:t.payload});case"setFilterValue":return Lt({},e,{filterValue:t.payload});case"setFilteringFlag":return Lt({},e,{isFiltering:t.payload});default:return e}},Bt=function(){var e=Object(s.useReducer)(Vt,It),t=o()(e,2),n=t[0],a=n.filterValue,c=n.isFetching,i=n.isFiltering,l=t[1],p=Object(m.useSelector)((function(e){return e.requestReducer.requests})),d=p.data,b=p.meta,g=Object(m.useDispatch)(),h=Object(f.g)();Object(s.useEffect)((function(){g(N(a,j.a)).then((function(){return l({type:"setFetching",payload:!1})})),Object(Ee.b)()}),[]);var v=function(e){l({type:"setFilterValue",payload:e}),Nt(e,g,(function(e){return l({type:"setFilteringFlag",payload:e})}),Lt({},b,{offset:0}))},E=[{eventKey:0,title:"Request queue",name:"/requests"},{eventKey:1,title:"Approval processes",name:"/workflows"}],O=function(){return u.a.createElement(s.Fragment,null,u.a.createElement(f.b,{exact:!0,path:"/requests/add_comment/:id",render:function(e){return u.a.createElement(fe,r()({},e,{actionType:"Add Comment",postMethod:N}))}}),u.a.createElement(f.b,{exact:!0,path:"/requests/approve/:id",render:function(e){return u.a.createElement(fe,r()({},e,{actionType:"Approve",postMethod:N}))}}),u.a.createElement(f.b,{exact:!0,path:"/requests/deny/:id",render:function(e){return u.a.createElement(fe,r()({},e,{actionType:"Deny",postMethod:N}))}}))},q=function(e){return e&&e.name&&function(e){return!e||!e.props||(!Object(Ee.a)(e.props.state)||e.props.number_of_children>0)}(e.name.title)?null:[{title:"Comment",onClick:function(){return h.push("/requests/add_comment/".concat(e.id))}}]},T=function(e,t){l({type:"setFetching",payload:!0}),g(N(a,t)).then((function(){return l({type:"setFetching",payload:!1})})).catch((function(){return l({type:"setFetching",payload:!1})}))},w=function(e,t,n){g(function(e){return{type:y.c,payload:e}}(e)),t((function(t){return n(t,e)}))};return u.a.createElement(f.d,null,u.a.createElement(f.b,{path:"/requests/detail/:id",render:function(e){return u.a.createElement(kt,e)}}),u.a.createElement(f.b,{path:"/requests",render:function(){return u.a.createElement(s.Fragment,null,u.a.createElement(Pt.a,null,u.a.createElement(Pt.b,{title:"Approval"}),u.a.createElement(St.a,{tabItems:E})),u.a.createElement(xe.a,{data:d,createRows:we,columns:At,fetchData:T,routes:O,actionResolver:q,titlePlural:"requests",titleSingular:"request",pagination:b,handlePagination:T,filterValue:a,onFilterChange:v,isLoading:c||i,onCollapse:w}))}}))};Bt.propTypes={history:d.a.shape({push:d.a.func.isRequired}),requests:d.a.array,isLoading:d.a.bool},Bt.defaultProps={requests:[],isLoading:!1};t.default=Bt}}]);
//# sourceMappingURL=../sourcemaps/requests.js.map