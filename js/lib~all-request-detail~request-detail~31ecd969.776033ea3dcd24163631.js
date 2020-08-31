(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{604:function(e,t,a){"use strict";var n=(0,a(167).defineMessages)({createApprovalTitle:{id:"formMessages.createApprovalTitle",defaultMessage:"Create approval process"},generalInformation:{id:"formMessages.generalInformation",defaultMessage:"General information"},setGroups:{id:"formMessages.setGroups",defaultMessage:"Set groups"},enterInfo:{id:"formMessages.enterInfo",defaultMessage:"Enter your information"},approvalProcessName:{id:"formMessages.approvalProcessName",defaultMessage:"Name"},enterApprovalName:{id:"formMessages.enterApprovalName",defaultMessage:"Enter a name for the approval process"},description:{id:"formMessages.description",defaultMessage:"Description"},nameTaken:{id:"formMessages.nameTaken",defaultMessage:"Name has already been taken"},selectPlaceholder:{id:"formMessages.selectPlaceholder",defaultMessage:"Select..."},summary:{id:"formMessages.summary",defaultMessage:"Summary"},groups:{id:"formMessages.groups",defaultMessage:"Groups"},create:{id:"formMessages.create",defaultMessage:"Create"}});t.a=n},608:function(e,t,a){"use strict";a.d(t,"e",(function(){return k})),a.d(t,"c",(function(){return _})),a.d(t,"d",(function(){return P})),a.d(t,"b",(function(){return N})),a.d(t,"h",(function(){return C})),a.d(t,"g",(function(){return w})),a.d(t,"a",(function(){return D})),a.d(t,"f",(function(){return S}));var n=a(15),r=a(84),c=a.n(r),s=a(10),o=a.n(s),i=a(136),l=a.n(i),u=a(172),m=a(78),d=a(168),p=a(38);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=Object(u.a)(),b=Object(u.c)(),h=function(e){return{"request-id":"id",opened:"created_at",requester:"requester_name",status:"state"}[e]||e},E=function(e){var t=[];return e.name&&t.push("filter[name][contains_i]=".concat(e.name)),e.requester&&t.push("filter[requester_name][contains_i]=".concat(e.requester)),e.decision&&e.decision.forEach((function(e){t.push("filter[decision][eq][]=".concat(e))})),t.join("&")};function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.a,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),c="&sort_by=".concat(h(n.property),":").concat(n.direction),s="".concat(m.a,"/requests/?").concat(E(e)).concat(r).concat(c),o=a?{"x-rh-persona":a}:void 0;return Object(u.b)()({method:"get",url:s,headers:o})}var q=function(e,t){var a,n=t&&t!==p.b?{"x-rh-persona":t}:{"x-rh-persona":p.c};return b({method:"post",url:"".concat(m.a,"/graphql"),headers:n,data:{query:(a=e,'query {\n  requests(id: "'.concat(a,'") {\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    state\n    requester_name\n    actions {\n      id\n      operation\n      comments\n      created_at\n      processed_by\n    }\n    requests {\n      id\n      name\n      number_of_children\n      decision\n      description\n      group_name\n      number_of_finished_children\n      state\n      workflow_id\n      parent_id\n      actions {\n        id\n        operation\n        comments\n        created_at\n        processed_by\n      }\n    }\n  }\n}'))}}).then((function(e){return e.data.requests}))},O=function(e,t){var a="".concat(m.a,"/requests/").concat(e).concat(t?"/requests":""),n={"x-rh-persona":p.c};return Object(u.b)()({method:"get",url:a,headers:n})};function T(e,t){return j.apply(this,arguments)}function j(){return(j=l()(c.a.mark((function e(t,a){var n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t,a);case 2:if((n=e.sent)&&0!==n.length){e.next=5;break}return e.abrupt("return",{});case 5:if(a!==p.b){e.next=17;break}if(!(n&&n.length>0&&n[0].number_of_children>0)){e.next=13;break}return e.next=9,O(t,!0);case 9:(r=e.sent)&&r.data&&(n[0].requests=n[0].requests.map((function(e){return g(g({},r.data.find((function(t){return t.id===e.id&&t.metadata}))),e)}))),e.next=17;break;case 13:return e.next=15,O(t,!1);case 15:(s=e.sent)&&(n[0]=g(g({},n[0]),{},{metadata:s.metadata}));case 17:return e.abrupt("return",n[0]);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e,t){return y.createAction(e,t)},M=a(609),k=function(e,t){return function(a,r){var c=r().requestReducer,s=c.sortBy,o=c.requests,i=c.filterValue,l=t||d.a;if(!t&&o){var u=o.meta;l={limit:u.limit,offset:u.offset}}return a({type:n.g,payload:v(i,l,e,s)})}},_=function(e,t){return{type:n.f,payload:T(e,t)}},P=function(e,t){return{type:n.h,payload:(a=e,r="".concat(m.a,"/requests/").concat(a,"/content"),c={"x-rh-persona":p.c},Object(u.b)()({method:"get",url:r,headers:c}))};var a,r,c},N=function(e,t,a,r){return{type:n.c,payload:x(t,a),meta:{notifications:{fulfilled:{variant:"success",title:r.formatMessage(M.a.successTitle),description:r.formatMessage(M.a.fulfilledAction,{actionName:e})},rejected:{variant:"danger",title:r.formatMessage(M.a.failedTitle,{actionName:e}),description:r.formatMessage(M.a.failedAction,{actionName:e})}}}}},C=function(e){return{type:n.p,payload:e}},w=function(e,t){return{type:n.n,payload:{filterValue:e,type:t}}},D=function(){return{type:n.b}},S=function(){return{type:n.m}}},609:function(e,t,a){"use strict";var n=(0,a(167).defineMessages)({requestTitle:{id:"actionModal.requestTitle",defaultMessage:"Request #{id}"},requestActionTitle:{id:"actionModal.requestTitle",defaultMessage:"{actionType} Request #{id}"},actionName:{id:"actionModal.actionName",defaultMessage:"{actionType} Request"},fulfilledAction:{id:"actionModal.fullfiledAction",defaultMessage:"The {actionName} was successful."},failedAction:{id:"actionModal.failedAction",defaultMessage:"The {actionName} action failed."},successTitle:{id:"actionModal.successTitle",defaultMessage:"Success"},failedTitle:{id:"actionModal.failedTitle",defaultMessage:"{actionName} error"}});t.a=n},624:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=a(235),i=a(93),l=a(57),u=a(62),m=a(38),d=function(e){var t=e.denyLink,a=e.approveLink,n=e.commentLink,c=e.request,s=e.canApproveDeny,d=e.canComment,p=Object(o.a)(),f=c.id,g=c.state,y=Object(m.f)(g)&&s,b=Object(m.f)(g)&&d;return r.a.createElement("div",{style:{display:"flex"}},y&&r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{to:{pathname:a,search:"request=".concat(f)},className:"pf-u-mr-sm",id:"approve-".concat(c.id)},r.a.createElement(i.Button,{variant:"primary","aria-label":p.formatMessage(u.a.approveRequest)},p.formatMessage(u.a.approveTitle))),r.a.createElement(l.b,{to:{pathname:t,search:"request=".concat(f)},className:"pf-u-mr-sm",id:"deny-".concat(c.id)},r.a.createElement(i.Button,{variant:"danger","aria-label":p.formatMessage(u.a.denyTitle)},p.formatMessage(u.a.denyTitle)))),b&&r.a.createElement(l.b,{to:{pathname:n,search:"request=".concat(f)},id:"comment-".concat(c.id)},r.a.createElement(i.Button,{variant:"secondary","aria-label":p.formatMessage(u.a.commentTitle)},p.formatMessage(u.a.commentTitle))))};d.propTypes={denyLink:s.a.string,approveLink:s.a.string,commentLink:s.a.string,request:s.a.object.isRequired,canApproveDeny:s.a.bool,canComment:s.a.bool},d.defaultProps={canApproveDeny:!0,canComment:!0},t.a=d},627:function(e,t,a){"use strict";var n=a(10),r=a.n(n),c=a(76),s=a.n(c),o=a(0),i=a.n(o),l=a(8),u=a.n(l),m=a(611),d=a(17),p=a(95),f=a(178),g=a(552),y=a(608),b=a(600),h=a.n(b),E=a(607),v=a.n(E),q=a(62);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return{fields:[T({component:h.a.TEXTAREA,name:"comments",isRequired:e,label:e?t.formatMessage(q.a.reasonTitle):t.formatMessage(q.a.commentTitle)},e&&{validate:[{type:v.a.REQUIRED}]})]}},x=a(603),M=a(45),k=a(235),_=a(609);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var C={Approve:q.a.approveTitle,Deny:q.a.denyTitle},w=function(e){var t=e.actionType,a=e.createRequestAction,n=e.closeUrl,r=e.postMethod,c=Object(k.a)(),o=Object(d.g)().push,l=Object(x.a)(["request"]),u=s()(l,1)[0].request,p=function(){return o(n)};return i.a.createElement(g.Modal,{variant:"large",title:"Add Comment"===t?c.formatMessage(_.a.requestTitle,{id:u}):c.formatMessage(_.a.requestActionTitle,{id:u,actionType:c.formatMessage(C[t])}),isOpen:!0,onClose:p},i.a.createElement(m.a,{schema:j("Deny"===t,c),onSubmit:function(e){var s={"Add Comment":"memo",Approve:"approve",Deny:"deny"},i="Add Comment"===t?c.formatMessage(q.a.addCommentTitle):c.formatMessage(_.a.actionName,{actionType:c.formatMessage(C[t])});return r?a(i,u,N({operation:s[t]},e),c).then((function(){return r()})).then((function(){return o(n)})):a(i,u,N({operation:s[t]},e),c).then((function(){return o(n)}))},onCancel:p}))};w.defaultProps={closeUrl:M.a.requests.index},w.propTypes={createRequestAction:u.a.func.isRequired,postMethod:u.a.func,actionType:u.a.string,closeUrl:u.a.oneOfType([u.a.string,u.a.shape({patname:u.a.string,search:u.a.string})])};t.a=Object(p.connect)(null,(function(e){return Object(f.a)({createRequestAction:y.b},e)}))(w)},638:function(e,t,a){"use strict";var n=a(169),r=a.n(n),c=a(76),s=a.n(c),o=a(10),i=a.n(o),l=a(0),u=a.n(l),m=a(17),d=a(95),p=a(180),f=a(154),g=a(181),y=a(627),b=a(8),h=a.n(b),E=a(139),v=a(141),q=a(578),O=a(173),T=a(175),j=a(56),x=a(94),M=a(551),k=a(235),_=a(62),P=a(602),N=a(604),C=function(e){var t=e.request,a=e.requestContent,n=Object(k.a)();return u.a.createElement(O.Stack,{hasGutter:!0},u.a.createElement(T.StackItem,{key:"request-detail-panel"},u.a.createElement(E.Card,null,u.a.createElement(v.CardBody,null,u.a.createElement(O.Stack,{hasGutter:!0},u.a.createElement(T.StackItem,{key:"request-summary"},u.a.createElement(M.Title,{headingLevel:"h5",size:"lg"},n.formatMessage(N.a.summary))),u.a.createElement(T.StackItem,{key:"request-product"},u.a.createElement(x.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},n.formatMessage(P.a.product)),u.a.createElement(j.Text,{id:"portfolio-item-name",component:j.TextVariants.p},a?a.product:""))),u.a.createElement(T.StackItem,{key:"request-portfolio"},u.a.createElement(x.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},n.formatMessage(P.a.portfolio)),u.a.createElement(j.Text,{id:"portfolio-name",component:j.TextVariants.p},a?a.portfolio:""))),u.a.createElement(T.StackItem,{key:"request-platform"},u.a.createElement(x.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},n.formatMessage(P.a.platform)),u.a.createElement(j.Text,{id:"source-name",component:j.TextVariants.p},a?a.platform:" "))),u.a.createElement(T.StackItem,{key:"request-requester"},u.a.createElement(x.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},n.formatMessage(_.a.requesterColumn)),u.a.createElement(j.Text,{id:"requester_name",component:j.TextVariants.p},t.requester_name))),u.a.createElement(T.StackItem,{key:"request-order"},u.a.createElement(x.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},n.formatMessage(_.a.orderNumber)),u.a.createElement(j.Text,{id:"requester_name",component:j.TextVariants.p},a?a.order_id:""))))))),u.a.createElement(T.StackItem,{key:"request-parameters"},u.a.createElement(E.Card,null,u.a.createElement(q.CardTitle,null,u.a.createElement(M.Title,{headingLevel:"h5",size:"lg"},n.formatMessage(_.a.parameters))),u.a.createElement(v.CardBody,null,u.a.createElement(O.Stack,{hasGutter:!0},a.params&&Object.keys(a.params).map((function(e){return a.params[e]&&u.a.createElement(T.StackItem,{key:"request-".concat(a.params[e])},u.a.createElement(x.TextContent,null,u.a.createElement(j.Text,{key:e,className:"font-14"},"".concat(e)),u.a.createElement(j.Text,{id:e,component:j.TextVariants.p},"".concat(a.params[e]))))})))))))};C.propTypes={request:h.a.shape({requester_name:h.a.string,order_id:h.a.string}).isRequired,requestContent:h.a.object};var w=C,D=a(96),S=a.n(D),A=a(672),R=a(153),L=a(38),I=a(239),B=a.n(I),F=a(581),G=a.n(F),V=a(583),H=a.n(V),U=a(582),z=a.n(U),J=a(584),Q=a.n(J),W=a(585),X=a.n(W),K=a(240),Y=a.n(K),Z=a(159),$=a.n(Z),ee=a(637),te=a(78),ae={memo:{displayName:_.a.commentFrom,icon:u.a.createElement(G.a,null)},approve:{displayName:_.a.approvedBy,icon:u.a.createElement(B.a,{className:"pf-u-mr-0 icon-success-fill"})},deny:{displayName:_.a.deniedBy,icon:u.a.createElement(z.a,{className:"pf-u-mr-sm icon-danger-fill"})},notify:{displayName:_.a.notifiedBy,icon:u.a.createElement(H.a,null)},skip:{displayName:_.a.skippedBy,icon:u.a.createElement(Q.a,null)},start:{displayName:_.a.startedBy,icon:u.a.createElement(X.a,null)},cancel:{displayName:_.a.canceledBy,icon:u.a.createElement(Y.a,{className:"pf-u-mr-sm icon-danger-fill"})},error:{displayName:_.a.errorBy,icon:u.a.createElement($.a,{className:"pf-u-mr-0 icon-danger-fill"})}},ne=function(e){var t=e.actionList,a=Object(k.a)();return t?u.a.createElement(O.Stack,null,t.map((function(e){return u.a.createElement("div",{key:"".concat(e.id,"-action")},u.a.createElement(x.TextContent,null,u.a.createElement(j.Text,{key:"".concat(e.id,"-action-created_at"),className:"pf-u-mb-0",component:j.TextVariants.small},Object(L.h)(e.created_at)),u.a.createElement(j.Text,{key:"".concat(e.id,"-action-operation"),className:"pf-u-mb-md"},(t=e.operation,ae[t]?ae[t].icon:"")," ",a.formatMessage(function(e){return ae[e]?ae[e].displayName:Object(te.e)()}(e.operation),{by:e.processed_by})),e.comments&&u.a.createElement(j.Text,{key:"".concat(e.id,"-action-comments"),className:"pf-u-pt-0",component:j.TextVariants.p},e.comments)));var t}))):u.a.createElement(ee.EmptyTable,{centered:!0,"aria-label":a.formatMessage(P.a.noRecords)})};ne.propTypes={actionList:h.a.array};var re=a(241),ce=a(242),se=a(244),oe=a(579),ie=a(243),le=a(580),ue=a(46),me=a(45),de=a(624),pe=function(e){var t=e.item,a=e.isExpanded,n=e.toggleExpand,r=e.indexpath,c=Object(l.useContext)(ue.a).userRoles,s=Object(L.i)(c),o=Object(k.a)(),i=function(e,t){return!!s||e.metadata&&e.metadata.user_capabilities&&e.metadata.user_capabilities[t]};return u.a.createElement(re.DataListItem,{key:"request-".concat(t.id),"aria-labelledby":"check-request-".concat(t.id),isExpanded:a},u.a.createElement(ce.DataListItemRow,null,u.a.createElement(oe.DataListToggle,{onClick:function(){return n("request-".concat(t.id))},isExpanded:a,id:"request-".concat(t.id),"aria-labelledby":"request-".concat(t.id," request-").concat(t.id),"aria-label":o.formatMessage(_.a.toogleDetailsFor)}),u.a.createElement(ie.DataListItemCells,{dataListCells:[u.a.createElement(se.DataListCell,{key:t.id},u.a.createElement("span",{id:"".concat(t.id,"-name")},t.group_name?t.group_name:t.name)),u.a.createElement(se.DataListCell,{key:"".concat(t.id,"-state")},u.a.createElement("span",{style:{textTransform:"capitalize"},id:"".concat(t.id,"-state")},o.formatMessage(_.a[t.state]||Object(te.e)(t.state)))),u.a.createElement(se.DataListCell,{key:"".concat(t.id,"-action")},u.a.createElement(de.a,{approveLink:r.approve,denyLink:r.deny,commentLink:r.addComment,request:t,canApproveDeny:i(t,"approve"),canComment:i(t,"memo")}))]})),u.a.createElement(le.DataListContent,{"aria-label":o.formatMessage(_.a.requestContentDetails),isHidden:!a},u.a.createElement(O.Stack,{hasGutter:!0},u.a.createElement(T.StackItem,null,u.a.createElement(x.TextContent,{component:j.TextVariants.h6},u.a.createElement(ne,{actionList:t.actions}))))))};pe.propTypes={item:h.a.shape({id:h.a.string,name:h.a.string,state:h.a.string,actions:h.a.array,group_name:h.a.string.isRequired,requestActions:h.a.shape({data:h.a.array}),metadata:h.a.shape({user_capabilities:h.a.object})}).isRequired,isExpanded:h.a.bool.isRequired,toggleExpand:h.a.func.isRequired,indexpath:h.a.object},pe.defaultProps={indexpath:me.a.request};var fe=a(79),ge=function(e){var t=e.isLoading,a=e.items,n=e.noItems,r=e.indexpath,c=Object(l.useState)([]),o=s()(c,2),i=o[0],m=o[1],d=Object(k.a)(),p=function(e){var t=i.indexOf(e),a=t>=0?[].concat(S()(i.slice(0,t)),S()(i.slice(t+1,i.length))):[].concat(S()(i),[e]);m(a)};return u.a.createElement(l.Fragment,null,u.a.createElement("div",null,t&&u.a.createElement(l.Fragment,null,u.a.createElement(A.PageHeader,null,u.a.createElement(A.PageHeaderTitle,{title:n})),u.a.createElement(fe.b,null))),a.length>0&&u.a.createElement(R.DataList,{"aria-label":d.formatMessage(_.a.expandableDataList)},a.map((function(e,t){return u.a.createElement(pe,{key:e.id,item:e,idx:t,isActive:0===t,isExpanded:(a="request-".concat(e.id),i.includes(a)),toggleExpand:p,indexpath:r});var a}))))};ge.propTypes={isLoading:h.a.bool,items:h.a.array,noItems:h.a.string,active_request:h.a.number,indexpath:h.a.object},ge.defaultProps={items:[]};var ye=ge,be=function(e){var t=e.request,a=e.indexpath,n=Object(k.a)();return u.a.createElement(l.Fragment,null,u.a.createElement(M.Title,{headingLevel:"h5",size:"lg",className:"pf-u-pl-lg pf-u-pb-lg"},n.formatMessage(_.a.requestTranscript)),u.a.createElement(ye,{items:t.requests&&t.requests.length>0?t.requests:[t],indexpath:a}))};be.propTypes={request:h.a.shape({content:h.a.object,requests:h.a.array}).isRequired,indexpath:h.a.object};var he=be,Ee=a(608),ve=a(132),qe=a(603);function Oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Oe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var je={isFetching:!0},xe=function(e,t){switch(t.type){case"setFetching":return Te(Te({},e),{},{isFetching:t.payload});default:return e}},Me=function(e){var t=e.requestBreadcrumbs,a=e.indexpath,n=Object(l.useReducer)(xe,je),c=s()(n,2),o=c[0].isFetching,i=c[1],b=Object(d.useSelector)((function(e){var t=e.requestReducer,a=t.requestContent;return{selectedRequest:t.selectedRequest,requestContent:a}})),h=b.selectedRequest,E=b.requestContent,v=Object(qe.a)(["request"]),q=s()(v,1)[0].request,O=Object(m.h)(),T=Object(d.useDispatch)(),j=Object(l.useContext)(ue.a).userRoles,x=Object(k.a)();Object(l.useEffect)((function(){Promise.all([T(Object(Ee.c)(q,Object(L.d)(j))),T(Object(Ee.d)(q,Object(L.d)(j)))]).then((function(){return i({type:"setFetching",payload:!1})}))}),[]);return u.a.createElement(l.Fragment,null,u.a.createElement(m.d,null,u.a.createElement(m.b,{exact:!0,path:a.addComment},u.a.createElement(y.a,{actionType:"Add Comment",closeUrl:{pathname:a.index,search:"?request=".concat(h.id)}})),u.a.createElement(m.b,{exact:!0,path:a.approve,render:function(e){return u.a.createElement(y.a,r()({},e,{actionType:"Approve",closeUrl:{pathname:a.index,search:"?request=".concat(h.id)}}))}}),u.a.createElement(m.b,{exact:!0,path:a.deny,render:function(e){return u.a.createElement(y.a,r()({},e,{actionType:"Deny",closeUrl:{pathname:a.index,search:"?request=".concat(h.id)}}))}})),u.a.createElement(ve.a,{breadcrumbs:t,paddingBottom:!0},u.a.createElement(ve.b,{title:x.formatMessage(_.a.requestTitle,{id:q})})),u.a.createElement(g.Section,{type:"content"},u.a.createElement(p.Grid,{hasGutter:!0},o||!h||0===Object.keys(h).length?u.a.createElement(g.Section,{style:{backgroundColor:"white",minHeight:"100%"}},u.a.createElement(fe.d,null)):u.a.createElement(l.Fragment,null,u.a.createElement(f.GridItem,{md:4,lg:3,className:"info-bar pf-u-p-0"},u.a.createElement(w,{request:h,requestContent:E})),u.a.createElement(f.GridItem,{md:8,lg:9,className:"detail-pane pf-u-p-lg"},u.a.createElement(he,{request:h,url:O.url,indexpath:a}))))))};Me.propTypes={requestBreadcrumbs:h.a.array,indexpath:h.a.object};t.a=Me},672:function(e,t,a){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),a(77);var r=a(130),c=a(129),s=a(170),o=n(a(0)),i=n(a(8)),l=n(a(171)),u=a(290),m=a(551),d=function(e){var t=e.className,a=e.children,n=s._objectWithoutProperties(e,["className","children"]),i=l(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return o.createElement(u.ThemeContext.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=l(c._defineProperty({},"pf-m-".concat(e,"-200"),"dark"===e),c._defineProperty({},"pf-m-light","light"===e));return o.createElement("section",r._extends({},n,{className:"".concat(i," ").concat(t),"widget-type":"InsightsPageHeader"}),a)}))};d.propTypes={children:i.any.isRequired,className:i.string};var p=function(e){var t=e.className,a=e.title,n=l(t);return o.createElement(m.Title,{headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle"}," ",a," ")};p.propTypes={title:i.node.isRequired,className:i.string},t.PageHeader=d,t.PageHeaderTitle=p}}]);
//# sourceMappingURL=../sourcemaps/lib~all-request-detail~request-detail~31ecd969.js.map