(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{712:function(e,t,n){"use strict";n.d(t,"e",(function(){return E})),n.d(t,"c",(function(){return P})),n.d(t,"d",(function(){return _})),n.d(t,"b",(function(){return A})),n.d(t,"h",(function(){return x})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return N})),n.d(t,"f",(function(){return R}));var r=n(19),a=n(110),o=n.n(a),c=n(11),i=n.n(c),s=n(187),u=n.n(s),l=n(218),f=n(105),p=n(212),d=n(51);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=Object(l.a)(),g=Object(l.c)(),h=function(e){return{"request-id":"id",opened:"created_at",requester:"requester_name",status:"state"}[e]||e},v=function(e){var t=[];return e.name&&t.push("filter[name][contains_i]=".concat(e.name)),e.requester&&t.push("filter[requester_name][contains_i]=".concat(e.requester)),e.decision&&e.decision.forEach((function(e){t.push("filter[decision][eq][]=".concat(e))})),t.join("&")};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.b,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),o="&sort_by=".concat(h(r.property),":").concat(r.direction),c="".concat(f.a,"/requests/?").concat(v(e)).concat(a).concat(o),i=n?{"x-rh-persona":n}:void 0;return Object(l.b)()({method:"get",url:c,headers:i})}var j=function(e,t){var n,r=t&&t!==d.b?{"x-rh-persona":t}:{"x-rh-persona":d.c};return g({method:"post",url:"".concat(f.a,"/graphql"),headers:r,data:{query:(n=e,'query {\n  requests(id: "'.concat(n,'") {\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    state\n    requester_name\n    actions {\n      id\n      operation\n      comments\n      created_at\n      processed_by\n    }\n    requests {\n      id\n      name\n      number_of_children\n      decision\n      description\n      group_name\n      number_of_finished_children\n      state\n      workflow_id\n      parent_id\n      actions {\n        id\n        operation\n        comments\n        created_at\n        processed_by\n      }\n    }\n  }\n}'))}}).then((function(e){return e.data.requests}))},q=function(e,t){var n="".concat(f.a,"/requests/").concat(e).concat(t?"/requests":""),r={"x-rh-persona":d.c};return Object(l.b)()({method:"get",url:n,headers:r})};function M(e,t){return w.apply(this,arguments)}function w(){return(w=u()(o.a.mark((function e(t,n){var r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t,n);case 2:if((r=e.sent)&&0!==r.length){e.next=5;break}return e.abrupt("return",{});case 5:if(n!==d.b){e.next=17;break}if(!(r&&r.length>0&&r[0].number_of_children>0)){e.next=13;break}return e.next=9,q(t,!0);case 9:(a=e.sent)&&a.data&&(r[0].requests=r[0].requests.map((function(e){return b(b({},a.data.find((function(t){return t.id===e.id&&t.metadata}))),e)}))),e.next=17;break;case 13:return e.next=15,q(t,!1);case 15:(c=e.sent)&&(r[0]=b(b({},r[0]),{},{metadata:c.metadata}));case 17:return e.abrupt("return",r[0]);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e,t){return y.createAction(e,t)},D=n(721),E=function(e,t){return function(n,a){var o=a().requestReducer,c=o.sortBy,i=o.requests,s=o.filterValue,u=t||p.b;if(!t&&i){var l=i.meta;u={limit:l.limit,offset:l.offset}}return n({type:r.g,payload:O(s,u,e,c)})}},P=function(e,t){return{type:r.f,payload:M(e,t)}},_=function(e,t){return{type:r.h,payload:(n=e,a="".concat(f.a,"/requests/").concat(n,"/content"),o={"x-rh-persona":d.c},Object(l.b)()({method:"get",url:a,headers:o}))};var n,a,o},A=function(e,t,n,a){return{type:r.c,payload:T(t,n),meta:{notifications:{fulfilled:{variant:"success",title:a.formatMessage(D.a.successTitle),description:a.formatMessage(D.a.fulfilledAction,{actionName:e})},rejected:{variant:"danger",title:a.formatMessage(D.a.failedTitle,{actionName:e}),description:a.formatMessage(D.a.failedAction,{actionName:e})}}}}},x=function(e){return{type:r.r,payload:e}},k=function(e,t){return{type:r.p,payload:{filterValue:e,type:t}}},N=function(){return{type:r.b}},R=function(){return{type:r.o}}},713:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=n(286),s=n(209),u=n(75),l=n(82),f=n(51),p=function(e){var t=e.denyLink,n=e.approveLink,r=e.commentLink,o=e.request,c=e.canApproveDeny,p=e.canComment,d=Object(i.a)(),m=o.id,b=o.state,y=Object(f.f)(b)&&c,g=Object(f.f)(b)&&p;return a.a.createElement("div",{style:{display:"flex"}},y&&a.a.createElement(a.a.Fragment,null,a.a.createElement(u.b,{to:{pathname:n,search:"request=".concat(m)},className:"pf-u-mr-sm",id:"approve-".concat(o.id)},a.a.createElement(s.Button,{variant:"primary","aria-label":d.formatMessage(l.a.approveRequest)},d.formatMessage(l.a.approveTitle))),a.a.createElement(u.b,{to:{pathname:t,search:"request=".concat(m)},className:"pf-u-mr-sm",id:"deny-".concat(o.id)},a.a.createElement(s.Button,{variant:"danger","aria-label":d.formatMessage(l.a.denyTitle)},d.formatMessage(l.a.denyTitle)))),g&&a.a.createElement(u.b,{to:{pathname:r,search:"request=".concat(m)},id:"comment-".concat(o.id)},a.a.createElement(s.Button,{variant:"secondary","aria-label":d.formatMessage(l.a.commentTitle)},d.formatMessage(l.a.commentTitle))))};p.propTypes={denyLink:c.a.string,approveLink:c.a.string,commentLink:c.a.string,request:c.a.object.isRequired,canApproveDeny:c.a.bool,canComment:c.a.bool},p.defaultProps={canApproveDeny:!0,canComment:!0},t.a=p},721:function(e,t,n){"use strict";var r=(0,n(208).defineMessages)({requestActionDescription:{id:"actionModal.requestDescription",defaultMessage:"{actionMessage} {id}"},actionName:{id:"actionModal.actionName",defaultMessage:"{actionType} Request"},fulfilledAction:{id:"actionModal.fullfiledAction",defaultMessage:"The {actionName} was successful."},failedAction:{id:"actionModal.failedAction",defaultMessage:"The {actionName} action failed."},successTitle:{id:"actionModal.successTitle",defaultMessage:"Success"},failedTitle:{id:"actionModal.failedTitle",defaultMessage:"{actionName} error"}});t.a=r},740:function(e,t,n){"use strict";var r=n(11),a=n.n(r),o=n(102),c=n.n(o),i=n(0),s=n.n(i),u=n(9),l=n.n(u),f=n(701),p=n(23),d=n(121),m=n(233),b=n(627),y=n(214),g=n(74),h=n(120),v=n(624),O=n(712),j=n(677),q=n.n(j),M=n(692),w=n.n(M),T=n(82);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return{fields:[E({component:q.a.TEXTAREA,name:"comments",isRequired:e,label:e?t.formatMessage(T.a.reasonTitle):t.formatMessage(T.a.commentTitle)},e&&{validate:[{type:w.a.REQUIRED}]})]}},_=n(679),A=n(65),x=n(286),k=n(721),N=n(355),R=n.n(N);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){switch(e){case"Approve":return T.a.approveDescription;case"Deny":return T.a.denyDescription;default:return T.a.commentDescription}},B=function(e){switch(e){case"Approve":return T.a.approveTitle;case"Deny":return T.a.denyTitle;default:return T.a.commentTitle}},U=function(e){switch(e){case"Approve":return T.a.approveLabel;case"Deny":return T.a.denyLabel;default:return T.a.addCommentLabel}},V=function(e){var t=e.actionType,n=e.createRequestAction,r=e.closeUrl,a=e.postMethod,o=Object(x.a)(),i=Object(p.g)().push,u=Object(_.a)(["request"]),l=c()(u,1)[0].request,d=function(){return i(r)};return s.a.createElement(b.Modal,{variant:"small",header:s.a.createElement(v.Title,{size:"xl",headingLevel:"h4"},"Deny"===t&&s.a.createElement(R.a,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),o.formatMessage(B(t))),isOpen:!0,onClose:d},s.a.createElement(y.Stack,{hasGutter:!0},s.a.createElement(h.TextContent,null,s.a.createElement(g.Text,{component:g.TextVariants.p},o.formatMessage(k.a.requestActionDescription,{id:s.a.createElement("b",null,l),actionMessage:o.formatMessage(S(t))}))),s.a.createElement(f.a,{schema:P("Deny"===t,o),onSubmit:function(e){var c={Comment:"memo",Approve:"approve",Deny:"deny"},s="Comment"===t?o.formatMessage(T.a.commentTitle):o.formatMessage(k.a.actionName,{actionType:o.formatMessage(B(t))});return a?n(s,l,C({operation:c[t]},e),o).then((function(){return a()})).then((function(){return i(r)})):n(s,l,C({operation:c[t]},e),o).then((function(){return i(r)}))},onCancel:d,templateProps:{submitLabel:o.formatMessage(U(t))}})))};V.defaultProps={closeUrl:A.a.requests.index},V.propTypes={createRequestAction:l.a.func.isRequired,postMethod:l.a.func,actionType:l.a.string,closeUrl:l.a.oneOfType([l.a.string,l.a.shape({patname:l.a.string,search:l.a.string})])};t.a=Object(d.connect)(null,(function(e){return Object(m.a)({createRequestAction:O.b},e)}))(V)}}]);
//# sourceMappingURL=../sourcemaps/lib~all-request-detail~request-detail~requests~5a4d8549.js.map