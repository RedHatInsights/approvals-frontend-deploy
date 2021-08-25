(self.webpackChunkapproval=self.webpackChunkapproval||[]).push([[235],{15486:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(86244).defineMessages)({requestActionDescription:{id:"actionModal.requestDescription",defaultMessage:"{actionMessage} {id}"},actionName:{id:"actionModal.actionName",defaultMessage:"{actionType} Request"},fulfilledAction:{id:"actionModal.fullfiledAction",defaultMessage:"The {actionName} was successful."},failedAction:{id:"actionModal.failedAction",defaultMessage:"The {actionName} action failed."},successTitle:{id:"actionModal.successTitle",defaultMessage:"Success"},failedTitle:{id:"actionModal.failedTitle",defaultMessage:"{actionName} error"}})},38106:(e,t,n)=>{"use strict";n.d(t,{Ox:()=>x,kw:()=>D,t5:()=>_,YQ:()=>w,po:()=>T,ex:()=>k,fs:()=>P,jW:()=>E});var r=n(36580),a=n(96156),o=n(92137),c=n(87757),i=n.n(c),s=n(96692),u=n(84866),l=n(61338),p=n(11107);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=(0,s.mY)(),y=(0,s.Qu)(),h=function(e){return{"request-id":"id",opened:"created_at",requester:"requester_name",status:"state"}[e]||e},b=function(e){var t=[];return e.name&&t.push("filter[name][contains_i]=".concat(e.name)),e.requester&&t.push("filter[requester_name][contains_i]=".concat(e.requester)),e.decision&&e.decision.forEach((function(e){t.push("filter[decision][eq][]=".concat(e))})),t.join("&")};function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.he,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),o="&sort_by=".concat(h(r.property),":").concat(r.direction),c="".concat(u._R,"/requests/?").concat(b(e)).concat(a).concat(o),i=n?{"x-rh-persona":n}:void 0;return(0,s.Hx)()({method:"get",url:c,headers:i})}var v=function(e,t){var n,r=t&&t!==p.pS?{"x-rh-persona":t}:{"x-rh-persona":p.B1};return y({method:"post",url:"".concat(u._R,"/graphql"),headers:r,data:{query:(n=e,'query {\n  requests(id: "'.concat(n,'") {\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    state\n    requester_name\n    actions {\n      id\n      operation\n      comments\n      created_at\n      processed_by\n    }\n    requests {\n      id\n      name\n      number_of_children\n      decision\n      description\n      group_name\n      number_of_finished_children\n      state\n      workflow_id\n      parent_id\n      actions {\n        id\n        operation\n        comments\n        created_at\n        processed_by\n      }\n    }\n  }\n}'))}}).then((function(e){return e.data.requests}))},O=function(e,t){var n="".concat(u._R,"/requests/").concat(e).concat(t?"/requests":""),r={"x-rh-persona":p.B1};return(0,s.Hx)()({method:"get",url:n,headers:r})};function q(e,t){return Z.apply(this,arguments)}function Z(){return(Z=(0,o.Z)(i().mark((function e(t,n){var r,a,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t,n);case 2:if((r=e.sent)&&0!==r.length){e.next=5;break}return e.abrupt("return",{});case 5:if(n!==p.pS){e.next=17;break}if(!(r&&r.length>0&&r[0].number_of_children>0)){e.next=13;break}return e.next=9,O(t,!0);case 9:(a=e.sent)&&a.data&&(r[0].requests=r[0].requests.map((function(e){return d(d({},a.data.find((function(t){return t.id===e.id&&t.metadata}))),e)}))),e.next=17;break;case 13:return e.next=15,O(t,!1);case 15:(o=e.sent)&&(r[0]=d(d({},r[0]),{},{metadata:o.metadata}));case 17:return e.abrupt("return",r[0]);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(e,t){return m.createAction(e,t)},M=n(15486),T=function(e,t){return function(n,a){var o=a().requestReducer,c=o.sortBy,i=o.requests,s=o.filterValue,u=t||l.he;if(!t&&i){var p=i.meta;u={limit:p.limit,offset:p.offset}}return n({type:r.gN,payload:g(s,u,e,c)})}},_=function(e,t){return{type:r.Eo,payload:q(e,t)}},w=function(e,t){return{type:r.iZ,payload:(n=e,a="".concat(u._R,"/requests/").concat(n,"/content"),o={"x-rh-persona":p.B1},(0,s.Hx)()({method:"get",url:a,headers:o}))};var n,a,o},D=function(e,t,n,a){return{type:r.KA,payload:j(t,n),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(M.Z.successTitle),description:a.formatMessage(M.Z.fulfilledAction,{actionName:e})},rejected:{variant:"danger",title:a.formatMessage(M.Z.failedTitle,{actionName:e}),description:a.formatMessage(M.Z.failedAction,{actionName:e})}}}}},E=function(e){return{type:r.YT,payload:e}},P=function(e,t){return{type:r.bp,payload:{filterValue:e,type:t}}},x=function(){return{type:r.m_}},k=function(){return{type:r.Lb}}},42026:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var r=n(96156),a=n(28481),o=n(30624),c=n.n(o),i=n(45697),s=n.n(i),u=n(18393),l=n(334),p=n(58126),f=n(35592),d=n(78826),m=n(81159),y=n(63540),h=n(20018),b=n(34348),g=n(38106),v=n(46182),O=n(94330),q=n(27121);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return{fields:[j({component:v.default.TEXTAREA,name:"comments",isRequired:e,label:e?t.formatMessage(q.Z.reasonTitle):t.formatMessage(q.Z.commentTitle)},e&&{validate:[{type:O.default.REQUIRED}]})]}},T=n(1054),_=n(50409),w=n(86896),D=n(15486),E=n(19694);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){switch(e){case"Approve":return q.Z.approveDescription;case"Deny":return q.Z.denyDescription;default:return q.Z.commentDescription}},A=function(e){switch(e){case"Approve":return q.Z.approveTitle;case"Deny":return q.Z.denyTitle;default:return q.Z.commentTitle}},R=function(e){switch(e){case"Approve":return q.Z.approveLabel;case"Deny":return q.Z.denyLabel;default:return q.Z.addCommentLabel}},L=function(e){var t=e.actionType,n=e.createRequestAction,r=e.closeUrl,o=e.postMethod,i=(0,w.Z)(),s=(0,l.useHistory)().push,p=(0,T.Z)(["request"]),f=(0,a.Z)(p,1)[0].request,g=function(){return s(r)};return c().createElement(d.u_,{variant:"small",header:c().createElement(b.Title,{size:"xl",headingLevel:"h4"},"Deny"===t&&c().createElement(E.default,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),i.formatMessage(A(t))),isOpen:!0,onClose:g},c().createElement(m.K,{hasGutter:!0},c().createElement(h.TextContent,null,c().createElement(y.Text,{component:y.TextVariants.p},i.formatMessage(D.Z.requestActionDescription,{id:c().createElement("b",null,f),actionMessage:i.formatMessage(k(t))}))),c().createElement(u.Z,{schema:M("Deny"===t||"Comment"===t,i),onSubmit:function(e){var a={Comment:"memo",Approve:"approve",Deny:"deny"},c="Comment"===t?i.formatMessage(q.Z.commentTitle):i.formatMessage(D.Z.actionName,{actionType:i.formatMessage(A(t))});return o?n(c,f,x({operation:a[t]},e),i).then((function(){return o()})).then((function(){return s(r)})):n(c,f,x({operation:a[t]},e),i).then((function(){return s(r)}))},onCancel:g,templateProps:{submitLabel:i.formatMessage(R(t))}})))};L.defaultProps={closeUrl:_.Z.requests.index},L.propTypes={createRequestAction:s().func.isRequired,postMethod:s().func,actionType:s().string,closeUrl:s().oneOfType([s().string,s().shape({patname:s().string,search:s().string})])};const C=(0,p.connect)(null,(function(e){return(0,f.bindActionCreators)({createRequestAction:g.kw},e)}))(L)},47239:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(30624),a=n.n(r),o=n(45697),c=n.n(o),i=n(86896),s=n(6202),u=n(334),l=n(27121),p=n(11107),f=function(e){var t=e.denyLink,n=e.approveLink,r=e.commentLink,o=e.request,c=e.canApproveDeny,f=e.canComment,d=(0,i.Z)(),m=o.id,y=o.state,h=(0,p.mG)(y)&&c,b=f;return a().createElement("div",{style:{display:"flex"}},h&&a().createElement(a().Fragment,null,a().createElement(u.Link,{to:{pathname:n,search:"request=".concat(m)},className:"pf-u-mr-sm",id:"approve-".concat(o.id)},a().createElement(s.Button,{ouiaId:"approve-request-".concat(m),variant:"primary","aria-label":d.formatMessage(l.Z.approveRequest)},d.formatMessage(l.Z.approveTitle))),a().createElement(u.Link,{to:{pathname:t,search:"request=".concat(m)},className:"pf-u-mr-sm",id:"deny-".concat(o.id)},a().createElement(s.Button,{ouiaId:"deny-request-".concat(m),variant:"danger","aria-label":d.formatMessage(l.Z.denyTitle)},d.formatMessage(l.Z.denyTitle)))),b&&a().createElement(u.Link,{to:{pathname:r,search:"request=".concat(m)},id:"comment-".concat(o.id)},a().createElement(s.Button,{ouiaId:"comment-request-".concat(m),variant:"secondary","aria-label":d.formatMessage(l.Z.commentTitle)},d.formatMessage(l.Z.commentTitle))))};f.propTypes={denyLink:c().string,approveLink:c().string,commentLink:c().string,request:c().object.isRequired,canApproveDeny:c().bool,canComment:c().bool},f.defaultProps={canApproveDeny:!0,canComment:!0};const d=f}}]);
//# sourceMappingURL=../sourcemaps/235.b40601d51c629fee744e.js.map