(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{729:function(e,t,n){"use strict";n.d(t,"e",(function(){return C})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return P})),n.d(t,"b",(function(){return x})),n.d(t,"h",(function(){return F})),n.d(t,"g",(function(){return R})),n.d(t,"a",(function(){return k})),n.d(t,"f",(function(){return A}));var a=n(14),r=n(96),o=n.n(r),c=n(10),s=n.n(c),i=n(154),u=n.n(i),l=n(200),f=n(87),m=n(196),d=n(37);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=Object(l.a)(),b=Object(l.c)(),h=function(e){return{"request-id":"id",opened:"created_at",requester:"requester_name",status:"state"}[e]||e},O=function(e){var t=[];return e.name&&t.push("filter[name][contains_i]=".concat(e.name)),e.requester&&t.push("filter[requester_name][contains_i]=".concat(e.requester)),e.decision&&e.decision.forEach((function(e){t.push("filter[decision][eq][]=".concat(e))})),t.join("&")};function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,r="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),o="&sort_by=".concat(h(a.property),":").concat(a.direction),c="".concat(f.a,"/requests/?").concat(O(e)).concat(r).concat(o),s=n?{"x-rh-persona":n}:void 0;return Object(l.b)()({method:"get",url:c,headers:s})}var j=function(e,t){var n,a=t&&t!==d.b?{"x-rh-persona":t}:{"x-rh-persona":d.c};return b({method:"post",url:"".concat(f.a,"/graphql"),headers:a,data:{query:(n=e,'query {\n  requests(id: "'.concat(n,'") {\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    state\n    requester_name\n    actions {\n      id\n      operation\n      comments\n      created_at\n      processed_by\n    }\n    requests {\n      id\n      name\n      number_of_children\n      decision\n      description\n      group_name\n      number_of_finished_children\n      state\n      workflow_id\n      parent_id\n      actions {\n        id\n        operation\n        comments\n        created_at\n        processed_by\n      }\n    }\n  }\n}'))}}).then((function(e){return e.data.requests}))},q=function(e,t){var n="".concat(f.a,"/requests/").concat(e).concat(t?"/requests":""),a={"x-rh-persona":d.c};return Object(l.b)()({method:"get",url:n,headers:a})};function M(e,t){return E.apply(this,arguments)}function E(){return(E=u()(o.a.mark((function e(t,n){var a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t,n);case 2:if((a=e.sent)&&0!==a.length){e.next=5;break}return e.abrupt("return",{});case 5:if(n!==d.b){e.next=17;break}if(!(a&&a.length>0&&a[0].number_of_children>0)){e.next=13;break}return e.next=9,q(t,!0);case 9:(r=e.sent)&&r.data&&(a[0].requests=a[0].requests.map((function(e){return y(y({},r.data.find((function(t){return t.id===e.id&&t.metadata}))),e)}))),e.next=17;break;case 13:return e.next=15,q(t,!1);case 15:(c=e.sent)&&(a[0]=y(y({},a[0]),{},{metadata:c.metadata}));case 17:return e.abrupt("return",a[0]);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e,t){return g.createAction(e,t)},w=n(730),C=function(e,t){return function(n,r){var o=r().requestReducer,c=o.sortBy,s=o.requests,i=o.filterValue,u=t||m.a;if(!t&&s){var l=s.meta;u={limit:l.limit,offset:l.offset}}return n({type:a.g,payload:v(i,u,e,c)})}},_=function(e,t){return{type:a.f,payload:M(e,t)}},P=function(e,t){return{type:a.h,payload:(n=e,r="".concat(f.a,"/requests/").concat(n,"/content"),o={"x-rh-persona":d.c},Object(l.b)()({method:"get",url:r,headers:o}))};var n,r,o},x=function(e,t,n,r){return{type:a.c,payload:T(t,n),meta:{notifications:{fulfilled:{variant:"success",title:r.formatMessage(w.a.successTitle),description:r.formatMessage(w.a.fulfilledAction,{actionName:e})},rejected:{variant:"danger",title:r.formatMessage(w.a.failedTitle,{actionName:e}),description:r.formatMessage(w.a.failedAction,{actionName:e})}}}}},F=function(e){return{type:a.p,payload:e}},R=function(e,t){return{type:a.n,payload:{filterValue:e,type:t}}},k=function(){return{type:a.b}},A=function(){return{type:a.m}}},730:function(e,t,n){"use strict";var a=(0,n(194).defineMessages)({requestTitle:{id:"actionModal.requestTitle",defaultMessage:"Request #{id}"},requestActionTitle:{id:"actionModal.requestTitle",defaultMessage:"{actionType} Request #{id}"},actionName:{id:"actionModal.actionName",defaultMessage:"{actionType} Request"},fulfilledAction:{id:"actionModal.fullfiledAction",defaultMessage:"The {actionName} was successful."},failedAction:{id:"actionModal.failedAction",defaultMessage:"The {actionName} action failed."},successTitle:{id:"actionModal.successTitle",defaultMessage:"Success"},failedTitle:{id:"actionModal.failedTitle",defaultMessage:"{actionName} error"}});t.a=a},745:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(8),c=n.n(o),s=n(266),i=n(195),u=n(65),l=n(70),f=n(37),m=function(e){var t=e.denyLink,n=e.approveLink,a=e.commentLink,o=e.request,c=e.canApproveDeny,m=e.canComment,d=Object(s.a)(),p=o.id,y=o.state,g=Object(f.f)(y)&&c,b=Object(f.f)(y)&&m;return r.a.createElement("div",{style:{display:"flex"}},g&&r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:{pathname:n,search:"request=".concat(p)},className:"pf-u-mr-sm",id:"approve-".concat(o.id)},r.a.createElement(i.Button,{variant:"primary","aria-label":d.formatMessage(l.a.approveRequest)},d.formatMessage(l.a.approveTitle))),r.a.createElement(u.b,{to:{pathname:t,search:"request=".concat(p)},className:"pf-u-mr-sm",id:"deny-".concat(o.id)},r.a.createElement(i.Button,{variant:"danger","aria-label":d.formatMessage(l.a.denyTitle)},d.formatMessage(l.a.denyTitle)))),b&&r.a.createElement(u.b,{to:{pathname:a,search:"request=".concat(p)},id:"comment-".concat(o.id)},r.a.createElement(i.Button,{variant:"secondary","aria-label":d.formatMessage(l.a.commentTitle)},d.formatMessage(l.a.commentTitle))))};m.propTypes={denyLink:c.a.string,approveLink:c.a.string,commentLink:c.a.string,request:c.a.object.isRequired,canApproveDeny:c.a.bool,canComment:c.a.bool},m.defaultProps={canApproveDeny:!0,canComment:!0},t.a=m},748:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(85),c=n.n(o),s=n(0),i=n.n(s),u=n(8),l=n.n(u),f=n(732),m=n(16),d=n(104),p=n(206),y=n(670),g=n(729),b=n(721),h=n.n(b),O=n(728),v=n.n(O),j=n(70);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return{fields:[M({component:h.a.TEXTAREA,name:"comments",isRequired:e,label:e?t.formatMessage(j.a.reasonTitle):t.formatMessage(j.a.commentTitle)},e&&{validate:[{type:v.a.REQUIRED}]})]}},T=n(724),w=n(51),C=n(266),_=n(730);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={Approve:j.a.approveTitle,Deny:j.a.denyTitle},R=function(e){var t=e.actionType,n=e.createRequestAction,a=e.closeUrl,r=e.postMethod,o=Object(C.a)(),s=Object(m.g)().push,u=Object(T.a)(["request"]),l=c()(u,1)[0].request,d=function(){return s(a)};return i.a.createElement(y.Modal,{variant:"large",title:"Add Comment"===t?o.formatMessage(_.a.requestTitle,{id:l}):o.formatMessage(_.a.requestActionTitle,{id:l,actionType:o.formatMessage(F[t])}),isOpen:!0,onClose:d},i.a.createElement(f.a,{schema:E("Deny"===t,o),onSubmit:function(e){var c={"Add Comment":"memo",Approve:"approve",Deny:"deny"},i="Add Comment"===t?o.formatMessage(j.a.addCommentTitle):o.formatMessage(_.a.actionName,{actionType:o.formatMessage(F[t])});return r?n(i,l,x({operation:c[t]},e),o).then((function(){return r()})).then((function(){return s(a)})):n(i,l,x({operation:c[t]},e),o).then((function(){return s(a)}))},onCancel:d}))};R.defaultProps={closeUrl:w.a.requests.index},R.propTypes={createRequestAction:l.a.func.isRequired,postMethod:l.a.func,actionType:l.a.string,closeUrl:l.a.oneOfType([l.a.string,l.a.shape({patname:l.a.string,search:l.a.string})])};t.a=Object(d.connect)(null,(function(e){return Object(p.a)({createRequestAction:g.b},e)}))(R)},760:function(e,t,n){"use strict";var a=n(85),r=n.n(a),o=n(10),c=n.n(o),s=n(0),i=n.n(s),u=n(8),l=n.n(u),f=n(104),m=n(195),d=n(286),p=n(301),y=n(75),g=n(266),b=n(671),h=n.n(b),O=n(756),v=n.n(O),j=n(729),q=n(105),M=n.n(q),E=n(65),T=n(37),w=n(51),C=n(682),_=n(87),P=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w.a.request,a=arguments.length>3?arguments[3]:void 0;return t.reduce((function(t,r){var o,c,u;return[].concat(M()(t),[{id:r.id,state:r.state,number_of_children:r.number_of_children,cells:[i.a.createElement(s.Fragment,{key:r.id},i.a.createElement(E.b,{to:{pathname:n.index,search:"?request=".concat(r.id)}},r.id)),r.name,r.requester_name,r.finished_at?Object(T.h)(r.finished_at):r.notified_at?Object(T.h)(r.notified_at):Object(T.h)(r.created_at),i.a.createElement(s.Fragment,{key:"decision-".concat(r.id)},e(r)||i.a.createElement(C.Label,{variant:"outline",icon:null===(o=_.d[r.decision])||void 0===o?void 0:o.icon,color:null===(c=_.d[r.decision])||void 0===c?void 0:c.color},P(a.formatMessage((null===(u=_.d[r.decision])||void 0===u?void 0:u.displayName)||Object(_.e)()))))]}])}),[])},F=n(757),R=n(150),k=n(746),A=n(731),D=n(761),V=n(52),S=n(738),N=n(70),L=function(e,t){var n=e.name,a=e.requester,r=e.decision;return[].concat(M()(n?[{category:t.formatMessage(S.a.name),key:"name",chips:[{name:n,value:n}]}]:[]),M()(a?[{category:t.formatMessage(N.a.requesterColumn),key:"requester",chips:[{name:a,value:a}]}]:[]),M()(r&&r.length>0?[{category:t.formatMessage(N.a.statusColumn),key:"decision",chips:r.map((function(e){return{name:e,value:e}}))}]:[]))},B=n(723);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){return[{title:e.formatMessage(N.a.requestsIdColumn),transforms:[d.a,Object(p.a)(10)]},{title:e.formatMessage(S.a.name),transforms:[d.a,y.e,Object(p.a)(25)],cellTransforms:[y.a]},{title:e.formatMessage(N.a.requesterColumn),transforms:[d.a,y.e,Object(p.a)(25)]},{title:e.formatMessage(N.a.updatedColumn),transforms:[Object(p.a)(15)]},{title:e.formatMessage(N.a.statusColumn),transforms:[d.a,Object(p.a)(25)]}]},Q=Object(A.a)((function(e,t,n,a){return t(!0),a&&a(),e(Object(j.e)(n)).then((function(){return t(!1)}))}),1e3),X=function(e,t){switch(t.type){case"setFetching":return I(I({},e),{},{isFetching:t.payload});case"setNameValue":return I(I({},e),{},{nameValue:t.payload});case"setRequesterValue":return I(I({},e),{},{requesterValue:t.payload});case"clearFilters":return I(I({},e),{},{requesterValue:"",nameValue:"",isFetching:!0});case"setFilteringFlag":return I(I({},e),{},{isFiltering:t.payload});case"setRows":return I(I({},e),{},{rows:t.payload});default:return e}},z=function(e){var t=e.routes,n=e.persona,a=e.indexpath,o=e.actionResolver,c=Object(f.useSelector)((function(e){var t=e.requestReducer;return{requests:t.requests,sortBy:t.sortBy,filterValue:t.filterValue}}),f.shallowEqual),u=c.requests,l=u.data,d=u.meta,p=c.sortBy,y=c.filterValue,b=Object(s.useReducer)(X,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{nameValue:e,requesterValue:t,isOpen:!1,isFetching:!0,isFiltering:!1,rows:[]}}(y.name,y.requester)),O=r()(b,2),q=O[0],M=q.nameValue,E=q.isFetching,w=q.isFiltering,C=q.requesterValue,_=q.rows,P=O[1],A=Object(s.useContext)(V.a).userRoles,U=Object(f.useDispatch)(),I=Object(g.a)(),z=Object(T.i)(A),G=Object(T.j)(A),H=function(e){if(G||n!==T.b)return P({type:"setFetching",payload:!0}),U(Object(j.e)(n,e)).then((function(){return P({type:"setFetching",payload:!1})})).catch((function(){return P({type:"setFetching",payload:!1})}));P({type:"setFetching",payload:!1})};Object(s.useEffect)((function(){U(Object(j.f)()),H(),Object(T.g)()}),[n]),Object(s.useEffect)((function(){P({type:"setRows",payload:x(o,l,a,I)})}),[l]);var K=function(e,t){var a=!1;return"name"===t?(P({type:"setNameValue",payload:e}),a=!0):"requester"===t&&(P({type:"setRequesterValue",payload:e}),a=!0),a||U(Object(j.g)(e,t)),Q(U,(function(e){return P({type:"setFilteringFlag",payload:e})}),n,a&&function(){return U(Object(j.g)(e,t))})},W=function(){return P({type:"clearFilters"}),U(Object(j.a)()),H()};return i.a.createElement(s.Fragment,null,i.a.createElement(R.a,null,i.a.createElement(R.b,{title:I.formatMessage(B.a.approvalTitle)}),z&&i.a.createElement(k.a,null)),i.a.createElement(F.a,{sortBy:p,onSort:function(e,t,n,a){var r=a.property;return P({type:"setFetching",payload:!0}),U(Object(j.h)({index:t,direction:n,property:r})),H()},rows:_,columns:J(I),fetchData:H,routes:t,titlePlural:I.formatMessage(N.a.requests),titleSingular:I.formatMessage(N.a.request),pagination:d,handlePagination:H,filterValue:M,onFilterChange:function(e){return K(e,"name")},isLoading:E||w,renderEmptyState:function(){return i.a.createElement(D.a,{title:v()(y)?I.formatMessage(S.a.noResultsFound,{results:I.formatMessage(N.a.requests)}):I.formatMessage(S.a.noResultsFound),Icon:h.a,PrimaryAction:function(){return v()(y)?null:i.a.createElement(m.Button,{onClick:W,variant:"link"},I.formatMessage(S.a.clearAllFilters))},description:v()(y)?"":I.formatMessage(S.a.clearAllFiltersDescription)})},activeFiltersConfig:{filters:L({name:M,requester:C,decision:y.decision},I),onDelete:function(e,t,n){return n?W():(a=t,o=r()(a,1)[0],c=o.key,s=r()(o.chips,1)[0].value,i=["name","requester"].includes(c)?"":y[c].filter((function(e){return s!==e})),void K(i,c));var a,o,c,s,i}},filterConfig:[{label:I.formatMessage(N.a.requesterColumn),filterValues:{placeholder:I.formatMessage(S.a.filterByTitle,{title:I.formatMessage(N.a.requesterColumn).toLowerCase()}),"aria-label":I.formatMessage(S.a.filterByTitle,{title:I.formatMessage(N.a.requesterColumn).toLowerCase()}),onChange:function(e,t){return K(t,"requester")},value:C}},{label:I.formatMessage(N.a.statusColumn),type:"checkbox",filterValues:{placeholder:I.formatMessage(S.a.filterByTitle,{title:I.formatMessage(N.a.statusColumn).toLowerCase()}),"aria-label":I.formatMessage(S.a.filterByTitle,{title:I.formatMessage(N.a.statusColumn).toLowerCase()}),onChange:function(e,t){return K(t,"decision")},value:y.decision,items:["approved","canceled","denied","error","undecided"].map((function(e){return{label:I.formatMessage(N.a[e]),value:e}}))}}]}))};z.propTypes={routes:l.a.func,persona:l.a.string,indexpath:l.a.shape({index:l.a.string}),actionResolver:l.a.func},z.defaultProps={indexpath:w.a.request,actionResolver:function(){return!1}};t.a=z},796:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),c=n(760),s=n(51);t.default=function(){return r.a.createElement(c.a,{persona:o.a,indexpath:s.a.allrequest})}},799:function(e,t,n){"use strict";n.r(t);var a=n(197),r=n.n(a),o=n(0),c=n.n(o),s=n(16),i=n(729),u=n(748),l=n(37),f=n(52),m=n(51),d=n(760),p=n(671),y=n.n(p),g=n(150),b=n(746),h=n(674),O=n(676),v=n(675),j=n(681),q=n(64),M=n(103),E=n(266),T=n(70),w=n(723),C=function(){var e=Object(o.useContext)(f.a).userRoles,t=Object(l.i)(e),n=Object(E.a)();return c.a.createElement(o.Fragment,null,c.a.createElement(g.a,null,c.a.createElement(g.b,{title:n.formatMessage(w.a.approvalTitle)}),t&&c.a.createElement(b.a,null)),c.a.createElement("div",{className:"pf-u-mt-xl"},c.a.createElement(h.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},c.a.createElement(v.EmptyStateIcon,{icon:y.a}),c.a.createElement(M.TextContent,null,c.a.createElement(q.Text,{component:q.TextVariants.h1},n.formatMessage(T.a.emptyRequestsTitle))),c.a.createElement(O.EmptyStateBody,null,n.formatMessage(T.a.emptyRequestsDescription))),c.a.createElement(j.EmptyStateSecondaryActions,null)))},_=n(745);t.default=function(){var e=Object(o.useContext)(f.a).userRoles,t=Object(l.i)(e),n=Object(l.j)(e);return n?c.a.createElement(d.a,{routes:function(){return c.a.createElement(o.Fragment,null,c.a.createElement(s.b,{exact:!0,path:m.a.requests.addComment,render:function(e){return c.a.createElement(u.a,r()({},e,{actionType:"Add Comment",postMethod:i.e}))}}),c.a.createElement(s.b,{exact:!0,path:m.a.requests.approve,render:function(e){return c.a.createElement(u.a,r()({},e,{actionType:"Approve",postMethod:i.e}))}}),c.a.createElement(s.b,{exact:!0,path:m.a.requests.deny,render:function(e){return c.a.createElement(u.a,r()({},e,{actionType:"Deny",postMethod:i.e}))}}))},persona:l.b,actionResolver:function(e){return e&&e.id&&(!(a=e)||!a.state||!Object(l.f)(a.state)||a.number_of_children>0||!n&&!t)?null:c.a.createElement(_.a,{commentLink:m.a.requests.addComment,approveLink:m.a.requests.approve,denyLink:m.a.requests.deny,request:e});var a}}):c.a.createElement(C,null)}}}]);
//# sourceMappingURL=../sourcemaps/requests~5a4d8549.js.map