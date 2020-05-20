(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{2200:function(e,t,n){"use strict";n.r(t);var r=n(84),a=n.n(r),o=n(52),i=n.n(o),c=n(4),s=n.n(c),u=n(0),l=n.n(u),p=n(1),d=n.n(p),f=n(42),m=n(24),b=n(81),y=n(368),h=n(416),O=n(362),g=n(412),v=n(32),j=n.n(v),E=n(19),q=n(43),w=n(25),P=n(49),R=n(60),S=n(102),_=n(401),T=n(45),D=n(372),x=n(47),C=n(347),k=function(e){var t=e.title,n=void 0===t?"":t,r=e.detail,a=void 0===r?"":r;return l.a.createElement(q.TextContent,null,l.a.createElement(w.Text,{className:"data-table-detail heading",component:w.TextVariants.small},n),l.a.createElement(w.Text,{className:"data-table-detail content",component:w.TextVariants.h5},a))};k.propTypes={title:d.a.node,detail:d.a.node};var F=function(e){var t=e.id,n=e.number_of_children,r=e.state,a=e.reason,o=Object(T.f)(r)&&!n,c=Object(u.useState)([]),s=i()(c,2),p=s[0],d=s[1],m=Object(u.useState)(!0),y=i()(m,2),h=y[0],O=y[1],g=Object(u.useState)(!1),v=i()(g,2),j=v[0],q=v[1],w=Object(u.useContext)(x.a).userPersona,F=Object(f.useSelector)((function(e){return e.requestReducer.expandedRequests}));return Object(u.useEffect)((function(){!j&&h&&F.includes(t)&&(q(!0),Object(D.b)(t).then((function(e){d(e),O(!1)})).catch((function(){return O(!1)})))}),[F]),h?l.a.createElement(S.Bullseye,null,l.a.createElement(_.Spinner,null)):l.a.createElement(u.Fragment,null,l.a.createElement(P.Level,null,l.a.createElement(R.LevelItem,null,l.a.createElement(k,{title:"Product",detail:p?p.product:"Unknown"})),o&&Object(T.e)(w)&&l.a.createElement(R.LevelItem,null,l.a.createElement(E.Link,{to:{pathname:C.a.requests.approve,search:"request=".concat(t)},className:"pf-u-mr-md"},l.a.createElement(b.Button,{variant:"primary","aria-label":"Approve Request",isDisabled:!o},"Approve")),l.a.createElement(E.Link,{to:{pathname:C.a.requests.deny,search:"request=".concat(t)}},l.a.createElement(b.Button,{variant:"danger","aria-label":"Deny Request"},"Deny")))),l.a.createElement(P.Level,null,l.a.createElement(R.LevelItem,null,l.a.createElement(k,{title:"Portfolio",detail:p?p.portfolio:"Unknown"}),l.a.createElement(k,{title:"Platform",detail:p?p.platform:"Unknown"}),l.a.createElement(k,{title:"Reason",detail:a||""}))))};F.propTypes={id:d.a.string,content:d.a.object,number_of_children:d.a.number,uname:d.a.string,state:d.a.string,reason:d.a.string};var L=F,N=function(e){return e.reduce((function(e,t,n){var r=t.id,a=t.name,o=t.requester_name,i=t.created_at,c=t.notified_at,s=t.finished_at,p=t.state,d=t.decision,f=t.reason,m=t.number_of_children;return[].concat(j()(e),[{id:r,isOpen:!1,state:p,number_of_children:m,cells:[l.a.createElement(u.Fragment,{key:r},l.a.createElement(E.Link,{to:{pathname:C.a.request.index,search:"?request=".concat(r)}},a)),o,Object(T.h)(i),s?Object(T.h)(s):c?Object(T.h)(c):Object(T.h)(i),p,d]},{parent:2*n,fullWidth:!0,cells:[{title:l.a.createElement(L,{id:r,number_of_children:m,state:p,reason:f})}]}])}),[])},A=n(398),M=n(63),I=n(397),B=n(361),V=n(552),U=n(408);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=[{title:"Name",cellFormatters:[y.b],transforms:[h.a]},{title:"Requester",transforms:[h.a]},{title:"Opened",transforms:[h.a]},{title:"Updated"},{title:"Status",transforms:[h.a]},{title:"Decision",transforms:[h.a]}],Q=Object(B.a)((function(e,t,n,r){n(!0),t(Object(O.e)(e,r)).then((function(){return n(!1)}))}),1e3),W={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},X=function(e,t){switch(t.type){case"setFetching":return G({},e,{isFetching:t.payload});case"setFilterValue":return G({},e,{filterValue:t.payload});case"setFilteringFlag":return G({},e,{isFiltering:t.payload});default:return e}},z=function(){var e=Object(u.useReducer)(X,W),t=i()(e,2),n=t[0],r=n.filterValue,o=n.isFetching,c=n.isFiltering,s=t[1],p=Object(f.useSelector)((function(e){var t=e.requestReducer;return{requests:t.requests,sortBy:t.sortBy}}),f.shallowEqual),d=p.requests,y=d.data,h=d.meta,v=p.sortBy,j=Object(u.useContext)(x.a).userPersona,E=Object(f.useDispatch)(),q=Object(m.k)();Object(u.useEffect)((function(){E(Object(O.e)(r,j)).then((function(){return s({type:"setFetching",payload:!1})})),Object(T.g)()}),[]);var w=function(e){s({type:"setFilterValue",payload:e}),Q(e,E,(function(e){return s({type:"setFilteringFlag",payload:e})}),j)},P=function(e,t){s({type:"setFetching",payload:!0}),E(Object(O.e)(r,j,t)).then((function(){return s({type:"setFetching",payload:!1})})).catch((function(){return s({type:"setFetching",payload:!1})}))};return l.a.createElement(u.Fragment,null,l.a.createElement(M.a,null,l.a.createElement(M.b,{title:"Approval"}),Object(T.d)(j)&&l.a.createElement(I.a,{tabItems:[{eventKey:0,title:"Request queue",name:"/requests"},{eventKey:1,title:"Approval processes",name:"/workflows"}]})),l.a.createElement(A.a,{sortBy:v,onSort:function(e,t,n,a){var o=a.property;return s({type:"setFetching",payload:!0}),E(Object(O.f)({index:t,direction:n,property:o})),E(Object(O.e)(r,j)).then((function(){return s({type:"setFetching",payload:!1})})).catch((function(){return s({type:"setFetching",payload:!1})}))},data:y,createRows:N,columns:J,fetchData:P,routes:function(){return l.a.createElement(u.Fragment,null,l.a.createElement(m.d,{exact:!0,path:C.a.requests.addComment,render:function(e){return l.a.createElement(g.a,a()({},e,{actionType:"Add Comment",postMethod:O.e}))}}),l.a.createElement(m.d,{exact:!0,path:C.a.requests.approve,render:function(e){return l.a.createElement(g.a,a()({},e,{actionType:"Approve",postMethod:O.e}))}}),l.a.createElement(m.d,{exact:!0,path:C.a.requests.deny,render:function(e){return l.a.createElement(g.a,a()({},e,{actionType:"Deny",postMethod:O.e}))}}))},actionResolver:function(e){return e&&e.id&&function(e){return!e||!e.state||(!Object(T.f)(e.state)||e.number_of_children>0||!Object(T.e)(j))}(e)?null:[{title:"Comment",onClick:function(){return q.push({pathname:C.a.requests.addComment,search:"?request=".concat(e.id)})}}]},titlePlural:"requests",titleSingular:"request",pagination:h,handlePagination:P,filterValue:r,onFilterChange:w,isLoading:o||c,onCollapse:function(e,t,n){E(Object(O.b)(e)),t((function(t){return n(t,e)}))},renderEmptyState:function(){return l.a.createElement(U.a,{title:""===r?"No requests":"No results found",Icon:V.SearchIcon,PrimaryAction:function(){return""!==r?l.a.createElement(b.Button,{onClick:function(){return w("")},variant:"link"},"Clear all filters"):null},description:""===r?"":"No results match the filter criteria. Remove all filters or clear all filters to show results."})}}))};z.propTypes={requests:d.a.array,isLoading:d.a.bool},z.defaultProps={requests:[],isLoading:!1};t.default=z},347:function(e,t,n){"use strict";t.a={requests:{index:"/requests",addComment:"/requests/add-comment",approve:"/requests/approve",deny:"/requests/deny"},request:{index:"/request",addComment:"/request/add-comment",approve:"/request/approve",deny:"/request/deny"},workflows:{index:"/workflows",add:"/workflows/add-workflow",remove:"/workflows/remove",editInfo:"/workflows/edit-info",editGroups:"/workflows/edit-groups",editSequence:"/workflows/edit-sequence"}}},351:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(24);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(o.l)(),n=t.search,r=new URLSearchParams(n);return[e.reduce((function(e,t){return c({},e,a()({},t,r.get(t)))}),{}),n,r]}},361:function(e,t,n){"use strict";var r=n(469);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(r.a)(e,t,n)}},362:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return p}));var r=n(6),a=n(372),o=n(86),i=function(e,t,n){return function(i,c){var s=c().requestReducer,u=s.sortBy,l=s.requests,p=n||o.a;if(!n&&l){var d=l.meta;p={limit:d.limit,offset:d.offset}}return i({type:r.h,payload:a.d(e,p,t,u)})}},c=function(e,t){return{type:r.g,payload:a.c(e,t)}},s=function(e,t){return{type:r.i,payload:a.b(e,t)}},u=function(e,t,n){return{type:r.b,payload:a.a(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success",description:"The ".concat(e," was successful.")},rejected:{variant:"danger",title:"".concat(e," error"),description:"The ".concat(e," action failed.")}}}}},l=function(e){return{type:r.c,payload:e}},p=function(e){return{type:r.n,payload:e}}},372:function(e,t,n){"use strict";n.d(t,"d",(function(){return O})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return E})),n.d(t,"a",(function(){return w}));var r=n(37),a=n.n(r),o=n(4),i=n.n(o),c=n(55),s=n.n(c),u=n(93),l=n(29),p=n(86),d=n(45);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=Object(u.a)(),y=Object(u.c)(),h=function(e){return{opened:"created_at",requester:"requester_name",status:"state"}[e]||e};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a="filter[name][contains_i]=".concat(e),o="&limit=".concat(t.limit,"&offset=").concat(t.offset),i="&sort_by=".concat(h(r.property),":").concat(r.direction),c="".concat(l.a,"/requests/?").concat(a).concat(o).concat(i),s=n?{"x-rh-persona":n}:void 0;return Object(u.b)()({method:"get",url:c,headers:s})}var g=function(e,t){var n,r=t&&t!==d.a?{"x-rh-persona":t}:{"x-rh-persona":d.b};return y({method:"post",url:"".concat(l.a,"/graphql"),headers:r,data:{query:(n=e,'query {\n  requests(id: "'.concat(n,'") {\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    state\n    actions {\n      id\n      operation\n      comments\n      created_at\n      processed_by\n    }\n    requests {\n      id\n      name\n      number_of_children\n      decision\n      description\n      group_name\n      number_of_finished_children\n      state\n      workflow_id\n      parent_id\n      actions {\n        id\n        operation\n        comments\n        created_at\n        processed_by\n      }\n    }\n  }\n}'))}}).then((function(e){return e.data.requests}))},v=function(e){var t="".concat(l.a,"/requests/").concat(e,"/content"),n={"x-rh-persona":d.b};return Object(u.b)()({method:"get",url:t,headers:n})},j=function(e,t){var n="".concat(l.a,"/requests/").concat(e).concat(t?"/requests":""),r={"x-rh-persona":d.b};return Object(u.b)()({method:"get",url:n,headers:r})};function E(e,t){return q.apply(this,arguments)}function q(){return(q=s()(a.a.mark((function e(t,n){var r,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,n);case 2:if((r=e.sent)&&0!==r.length){e.next=5;break}return e.abrupt("return",{});case 5:if(n!==d.a){e.next=17;break}if(!(r&&r.length>0&&r[0].number_of_children>0)){e.next=13;break}return e.next=9,j(t,!0);case 9:(o=e.sent)&&o.data&&(r[0].requests=r[0].requests.map((function(e){return m({},o.data.find((function(t){return t.id===e.id&&t.metadata})),{},e)}))),e.next=17;break;case 13:return e.next=15,j(t,!1);case 15:(i=e.sent)&&(r[0]=m({},r[0],{metadata:i.metadata}));case 17:return e.abrupt("return",m({},r[0]));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return P.apply(this,arguments)}function P(){return(P=s()(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.createAction(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},397:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=n(24),s=n(393),u=n(392),l=function(e){var t=e.history.push,n=e.location.pathname,r=e.tabItems,o=r.find((function(e){var t=e.name;return n.includes(t)}));return a.a.createElement(s.Tabs,{className:"pf-u-mt-sm",activeKey:o?o.eventKey:0,onSelect:function(e,n){return t(r[n].name)}},r.map((function(e){return a.a.createElement(u.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}),history:i.a.shape({push:i.a.func.isRequired}),tabItems:i.a.array.isRequired},t.a=Object(c.o)(l)},398:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var r=n(84),a=n.n(r),o=n(4),i=n.n(o),c=n(52),s=n.n(c),u=n(0),l=n.n(u),p=n(1),d=n.n(p),f=n(354),m=n(468),b=n(467),y=n(86),h=n(34),O=n(2196),g=n(100),v=n(438);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=function(e){var t=e.isSelectable,n=e.createRows,r=e.columns,o=e.fetchData,i=e.toolbarButtons,c=e.data,p=e.actionResolver,d=e.routes,j=e.titlePlural,q=e.titleSingular,w=e.pagination,P=e.setCheckedItems,R=e.filterValue,S=e.onFilterChange,_=e.isLoading,T=e.onCollapse,D=e.renderEmptyState,x=e.sortBy,C=e.onSort,k=Object(O.a)(),F=Object(u.useState)([]),L=s()(F,2),N=L[0],A=L[1];Object(u.useEffect)((function(){A(n(c))}),[c]);var M=function(e,t){return e.map((function(e){return e.id===t?E({},e,{isOpen:!e.isOpen}):E({},e)}))},I=function(e,t){var n=e.map((function(e){return e.id===t?E({},e,{selected:!e.selected}):E({},e)})),r=n.filter((function(e){return e.id&&e.selected}));return P(r),n},B={itemCount:w.count,page:Object(y.b)(w.limit,w.offset),perPage:w.limit,onSetPage:function(e,t){return o(E({},w,{offset:Object(y.c)(t,w.limit)}))},onPerPageSelect:function(e,t){return o(E({},w,{limit:t}))},isDisabled:_};return l.a.createElement(g.Section,{type:"content","page-type":"tab-".concat(j),id:"tab-".concat(j)},d(),l.a.createElement(v.PrimaryToolbar,a()({className:"pf-u-p-lg ins__approval__primary_toolbar",pagination:B},i&&{actionsConfig:{actions:[i()]}},{filterConfig:{items:[{label:k.formatMessage({id:"name",defaultMessage:"Name"}),filterValues:{placeholder:k.formatMessage({id:"filter-by-name",defaultMessage:"Filter by {title}"},{title:q}),"aria-label":k.formatMessage({id:"filter-by-name",defaultMessage:"Filter by {title}"},{title:q}),onChange:function(e,t){return S(t)},value:R}}]}})),_&&l.a.createElement(h.b,null),_||0!==N.length?l.a.createElement(u.Fragment,null,!_&&l.a.createElement(f.b,{"aria-label":"".concat(j," table"),onCollapse:function(e,t,n,r){var a=r.id;return T?T(a,A,M):A((function(e){return M(e,a)}))},rows:N,cells:r,onSelect:t&&function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=r.id;return A(-1===n?N.map((function(e){return E({},e,{selected:t})})):function(e){return I(e,a)})},actionResolver:p,className:"table-fix",sortBy:x,onSort:C},l.a.createElement(m.a,null),l.a.createElement(b.a,null)),w.count>0&&l.a.createElement(v.PrimaryToolbar,{className:"pf-u-pl-lg pf-u-pr-lg ins__approval__primary_toolbar",pagination:E({},B,{dropDirection:"up",variant:"bottom",isCompact:!1})})):D())};q.propTypes={isSelectable:d.a.bool,createRows:d.a.func.isRequired,columns:d.a.array.isRequired,toolbarButtons:d.a.func,fetchData:d.a.func.isRequired,data:d.a.array,pagination:d.a.shape({limit:d.a.number,offset:d.a.number,count:d.a.number}),titlePlural:d.a.string,titleSingular:d.a.string,routes:d.a.func,actionResolver:d.a.func,setCheckedItems:d.a.func,filterValue:d.a.string,onFilterChange:d.a.func,isLoading:d.a.bool,onCollapse:d.a.func,renderEmptyState:d.a.func,sortBy:d.a.object,onSort:d.a.func},q.defaultProps={requests:[],isLoading:!1,pagination:y.a,isSelectable:null,routes:function(){return null},renderEmptyState:function(){return null},onSort:function(){return null}}},408:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(1),i=n.n(o),c=(n(81),n(103)),s=n(111),u=n(104),l=n(456),p=n(25),d=n(43),f=n(409),m=(n(19),function(e){var t=e.title,n=e.Icon,r=e.description,o=e.PrimaryAction,i=e.renderDescription;return a.a.createElement(f.EmptyTable,{centered:!0,"aria-label":"No records"},a.a.createElement(c.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},a.a.createElement(s.EmptyStateIcon,{icon:n}),a.a.createElement(d.TextContent,null,a.a.createElement(p.Text,{component:p.TextVariants.h1},t)),a.a.createElement(u.EmptyStateBody,null,r,i()),a.a.createElement(l.EmptyStateSecondaryActions,null,o&&a.a.createElement(o,null))))});m.defaultProps={renderDescription:function(){return null}},m.propTypes={title:i.a.string.isRequired,Icon:i.a.any.isRequired,description:i.a.string.isRequired,PrimaryAction:i.a.any,renderDescription:i.a.func},t.a=m;i.a.string.isRequired,i.a.string.isRequired},412:function(e,t,n){"use strict";var r=n(4),a=n.n(r),o=n(52),i=n.n(o),c=n(0),s=n.n(c),u=n(1),l=n.n(u),p=n(84),d=n.n(p),f=n(94),m=n.n(f),b=n(363),y=n.n(b),h=n(427),O=n(32),g=n.n(O),v=n(436),j=n(437),E=n(54),q=n(43),w=n(25),P=function(e){var t=e.input,n=e.options,r=e.isReadOnly,a=e.isDisabled,o=(e.FieldProvider,e.isRequired),i=m()(e,["input","options","isReadOnly","isDisabled","FieldProvider","isRequired"]);return s.a.createElement(v.FormSelect,d()({},t,i,{isDisabled:a||r}),function(e,t,n){if(t&&n)return e;var r=g()(e);return r.find((function(e){return void 0===e.value}))?g()(r):[{label:n?"Please choose":"None"}].concat(g()(r))}(n,t.value,o).map((function(e){return s.a.createElement(j.FormSelectOption,d()({key:e.value||e.label},e,{label:e.label.toString()}))})))};P.propTypes={input:l.a.object.isRequired,options:l.a.arrayOf(l.a.shape({value:l.a.any,label:l.a.string.isRequired})).isRequired,isReadOnly:l.a.bool,isDisabled:l.a.bool,isRequired:l.a.bool,FieldProvider:l.a.any};var R=function(e){e.componentType;var t=e.label,n=e.isRequired,r=e.helperText,a=e.meta,o=e.description,i=e.hideLabel,c=m()(e,["componentType","label","isRequired","helperText","meta","description","hideLabel"]),u=a.error,l=a.touched&&u;return s.a.createElement(E.FormGroup,{isRequired:n,label:!i&&t,fieldId:c.id,isValid:!l,helperText:r,helperTextInvalid:a.error},o&&s.a.createElement(q.TextContent,null,s.a.createElement(w.Text,{component:w.TextVariants.small},o)),s.a.createElement(P,d()({label:t,isValid:!l,isRequired:n},c)))};R.propTypes={componentType:l.a.string,label:l.a.string,isRequired:l.a.bool,helperText:l.a.string,meta:l.a.object,description:l.a.string,hideLabel:l.a.bool};var S=R;function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={default:{},modal:{buttonOrder:["cancel","reset","save"],buttonClassName:"modal-form-right-align"}},x=function(e){var t=e.componentMapper,n=e.formContainer,r=m()(e,["componentMapper","formContainer"]);return s.a.createElement("div",{className:D[n].buttonClassName},s.a.createElement(y.a,d()({formFieldsMapper:T({},h.formFieldsMapper,a()({componentMapper:t},b.componentTypes.SELECT,S)),layoutMapper:h.layoutMapper},D[n],r)))};x.propTypes={componentMapper:l.a.object,formContainer:l.a.oneOf(["default","modal"])},x.defaultProps={componentMapper:{},formContainer:"default"};var C=x,k=n(24),F=n(42),L=n(92),N=n(355),A=n(35),M=n(362),I=function(e){return{component:b.componentTypes.TEXTAREA_FIELD,name:"comments",type:"text",isRequired:e,label:e?"Reason":"Comment"}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=I(e);return e&&(t.validate=[{type:b.validatorTypes.REQUIRED}]),{fields:[t]}},V=n(351),U=n(347);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){var t=e.actionType,n=e.addNotification,r=e.createRequestAction,a=e.closeUrl,o=e.postMethod,c=Object(k.k)().push,u=Object(V.a)(["request"]),l=i()(u,1)[0].request,p=function(){var e="Add Comment"===t?t:"".concat(t," Request");n({variant:"warning",title:e,dismissable:!0,description:"".concat(e," was cancelled by the user.")}),c(a)};return s.a.createElement(N.Modal,{isLarge:!0,title:"Add Comment"===t?"Request #".concat(l):"".concat(t," Request #").concat(l),isOpen:!0,onClose:p},s.a.createElement(C,{schema:B("Deny"===t),schemaType:"default",onSubmit:function(e){var n={"Add Comment":"memo",Approve:"approve",Deny:"deny"},i="Add Comment"===t?t:"".concat(t," Request");return o?r(i,l,G({operation:n[t]},e)).then((function(){return o()})).then((function(){return c(a)})):r(i,l,G({operation:n[t]},e)).then((function(){return c(a)}))},onCancel:p,formContainer:"modal"}))};J.defaultProps={closeUrl:U.a.requests.index},J.propTypes={addNotification:l.a.func.isRequired,createRequestAction:l.a.func.isRequired,postMethod:l.a.func,id:l.a.string,actionType:l.a.string,closeUrl:l.a.string,match:l.a.object,location:l.a.object};t.a=Object(F.connect)(null,(function(e){return Object(L.a)({addNotification:A.addNotification,createRequestAction:M.a},e)}))(J)}}]);
//# sourceMappingURL=../sourcemaps/requests.js.map