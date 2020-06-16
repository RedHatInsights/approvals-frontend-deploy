(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{562:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"i",(function(){return m})),n.d(t,"h",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"g",(function(){return f}));var a=n(10),r=n(571),c=n(139),o=function(e,t){return function(n,o){var i=o().requestReducer,s=i.sortBy,l=i.requests,u=i.filterValue,m=t||c.a;if(!t&&l){var d=l.meta;m={limit:d.limit,offset:d.offset}}return n({type:a.i,payload:r.d(u,m,e,s)})}},i=function(e,t){return{type:a.h,payload:r.c(e,t)}},s=function(e,t){return{type:a.j,payload:r.b(e,t)}},l=function(e,t,n){return{type:a.c,payload:r.a(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success",description:"The ".concat(e," was successful.")},rejected:{variant:"danger",title:"".concat(e," error"),description:"The ".concat(e," action failed.")}}}}},u=function(e){return{type:a.d,payload:e}},m=function(e){return{type:a.r,payload:e}},d=function(e,t){return{type:a.p,payload:{filterValue:e,type:t}}},p=function(){return{type:a.b}},f=function(){return{type:a.o}}},571:function(e,t,n){"use strict";n.d(t,"d",(function(){return E})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return x})),n.d(t,"a",(function(){return _}));var a=n(64),r=n.n(a),c=n(7),o=n.n(c),i=n(106),s=n.n(i),l=n(145),u=n(62),m=n(139),d=n(31);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=Object(l.a)(),b=Object(l.c)(),h=function(e){return{"request-id":"id",opened:"created_at",requester:"requester_name",status:"state"}[e]||e},g=function(e){var t=[];return e.name&&t.push("filter[name][contains_i]=".concat(e.name)),e.requester&&t.push("filter[requester_name][contains_i]=".concat(e.requester)),e.status&&e.status.forEach((function(e){t.push("filter[state][eq][]=".concat(e))})),e.decision&&e.decision.forEach((function(e){t.push("filter[decision][eq][]=".concat(e))})),t.join("&")};function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,r="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),c="&sort_by=".concat(h(a.property),":").concat(a.direction),o="".concat(u.a,"/requests/?").concat(g(e)).concat(r).concat(c),i=n?{"x-rh-persona":n}:void 0;return Object(l.b)()({method:"get",url:o,headers:i})}var q=function(e,t){var n,a=t&&t!==d.b?{"x-rh-persona":t}:{"x-rh-persona":d.c};return b({method:"post",url:"".concat(u.a,"/graphql"),headers:a,data:{query:(n=e,'query {\n  requests(id: "'.concat(n,'") {\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    state\n    actions {\n      id\n      operation\n      comments\n      created_at\n      processed_by\n    }\n    requests {\n      id\n      name\n      number_of_children\n      decision\n      description\n      group_name\n      number_of_finished_children\n      state\n      workflow_id\n      parent_id\n      actions {\n        id\n        operation\n        comments\n        created_at\n        processed_by\n      }\n    }\n  }\n}'))}}).then((function(e){return e.data.requests}))},O=function(e){var t="".concat(u.a,"/requests/").concat(e,"/content"),n={"x-rh-persona":d.c};return Object(l.b)()({method:"get",url:t,headers:n})},v=function(e,t){var n="".concat(u.a,"/requests/").concat(e).concat(t?"/requests":""),a={"x-rh-persona":d.c};return Object(l.b)()({method:"get",url:n,headers:a})};function x(e,t){return j.apply(this,arguments)}function j(){return(j=s()(r.a.mark((function e(t,n){var a,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t,n);case 2:if((a=e.sent)&&0!==a.length){e.next=5;break}return e.abrupt("return",{});case 5:if(n!==d.b){e.next=17;break}if(!(a&&a.length>0&&a[0].number_of_children>0)){e.next=13;break}return e.next=9,v(t,!0);case 9:(c=e.sent)&&c.data&&(a[0].requests=a[0].requests.map((function(e){return f(f({},c.data.find((function(t){return t.id===e.id&&t.metadata}))),e)}))),e.next=17;break;case 13:return e.next=15,v(t,!1);case 15:(o=e.sent)&&(a[0]=f(f({},a[0]),{},{metadata:o.metadata}));case 17:return e.abrupt("return",a[0]);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e,t){return y.createAction(e,t)}},580:function(e,t,n){"use strict";var a=n(7),r=n.n(a),c=n(58),o=n.n(c),i=n(0),s=n.n(i),l=n(1),u=n.n(l),m=n(566),d=n(12),p=n(69),f=n(144),y=n(506),b=n(143),h=n(562),g=n(555),E=n.n(g),q=n(561),O=n.n(q);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{fields:[x({component:E.a.TEXTAREA,name:"comments",isRequired:e,label:e?"Reason":"Comment"},e&&{validate:[{type:O.a.REQUIRED}]})]}},_=n(559),T=n(46);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.actionType,n=e.addNotification,a=e.createRequestAction,r=e.closeUrl,c=e.postMethod,i=Object(d.g)().push,l=Object(_.a)(["request"]),u=o()(l,1)[0].request,p=function(){var e="Add Comment"===t?t:"".concat(t," Request");n({variant:"warning",title:e,dismissable:!0,description:"".concat(e," was cancelled by the user.")}),i(r)};return s.a.createElement(y.Modal,{isLarge:!0,title:"Add Comment"===t?"Request #".concat(u):"".concat(t," Request #").concat(u),isOpen:!0,onClose:p},s.a.createElement(m.a,{schema:j("Deny"===t),onSubmit:function(e){var n={"Add Comment":"memo",Approve:"approve",Deny:"deny"},o="Add Comment"===t?t:"".concat(t," Request");return c?a(o,u,w({operation:n[t]},e)).then((function(){return c()})).then((function(){return i(r)})):a(o,u,w({operation:n[t]},e)).then((function(){return i(r)}))},onCancel:p,formContainer:"modal"}))};P.defaultProps={closeUrl:T.a.requests.index},P.propTypes={addNotification:u.a.func.isRequired,createRequestAction:u.a.func.isRequired,postMethod:u.a.func,actionType:u.a.string,closeUrl:u.a.oneOfType([u.a.string,u.a.shape({patname:u.a.string,search:u.a.string})])};t.a=Object(p.connect)(null,(function(e){return Object(f.a)({addNotification:b.addNotification,createRequestAction:h.b},e)}))(P)},588:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},632:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},633:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},634:function(e,t,n){var a=n(635);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},635:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},636:function(e,t,n){var a=n(637),r=n(588);e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?r(e):t}},637:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},638:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},639:function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),n(59);var r=n(97),c=n(96),o=n(142),i=a(n(0)),s=a(n(1)),l=a(n(30)),u=n(260),m=n(245),d=function(e){var t=e.className,n=e.children,a=o._objectWithoutProperties(e,["className","children"]),s=l(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return i.createElement(u.ThemeContext.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=l(c._defineProperty({},"pf-m-".concat(e,"-200"),"dark"===e),c._defineProperty({},"pf-m-light","light"===e));return i.createElement("section",r._extends({},a,{className:"".concat(s," ").concat(t),"widget-type":"InsightsPageHeader"}),n)}))};d.propTypes={children:s.any.isRequired,className:s.string};var p=function(e){var t=e.className,n=e.title,a=l(t);return i.createElement(m.Title,{headingLevel:"h1",size:"2xl",className:a,"widget-type":"InsightsPageHeaderTitle"}," ",n," ")};p.propTypes={title:s.node.isRequired,className:s.string},t.PageHeader=d,t.PageHeaderTitle=p},644:function(e,t,n){"use strict";n.r(t);var a=n(140),r=n.n(a),c=n(58),o=n.n(c),i=n(7),s=n.n(i),l=n(0),u=n.n(l),m=n(12),d=n(69),p=n(141),f=n(98),y=n(155),b=n(580),h=n(1),g=n.n(h),E=n(111),q=n(113),O=n(538),v=n(146),x=n(153),j=n(44),_=n(68),T=n(245),k=function(e){var t=e.request,n=e.requestContent;return u.a.createElement(v.Stack,{gutter:"md"},u.a.createElement(x.StackItem,{key:"request-detail-panel"},u.a.createElement(E.Card,null,u.a.createElement(q.CardBody,null,u.a.createElement(v.Stack,{gutter:"md"},u.a.createElement(x.StackItem,{key:"request-summary"},u.a.createElement(T.Title,{headingLevel:"h5",size:"lg"},"Summary")),u.a.createElement(x.StackItem,{key:"request-product"},u.a.createElement(_.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},"Product"),u.a.createElement(j.Text,{id:"portfolio-item-name",component:j.TextVariants.p},n?n.product:""))),u.a.createElement(x.StackItem,{key:"request-portfolio"},u.a.createElement(_.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},"Portfolio"),u.a.createElement(j.Text,{id:"portfolio-name",component:j.TextVariants.p},n?n.portfolio:""))),u.a.createElement(x.StackItem,{key:"request-platform"},u.a.createElement(_.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},"Platform"),u.a.createElement(j.Text,{id:"source-name",component:j.TextVariants.p},n?n.platform:" "))),u.a.createElement(x.StackItem,{key:"request-requester"},u.a.createElement(_.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},"Requester "),u.a.createElement(j.Text,{id:"requester_name",component:j.TextVariants.p},t.requester_name))),u.a.createElement(x.StackItem,{key:"request-order"},u.a.createElement(_.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},"Order# "),u.a.createElement(j.Text,{id:"requester_name",component:j.TextVariants.p},n?n.order_id:""))))))),u.a.createElement(x.StackItem,{key:"request-parameters"},u.a.createElement(E.Card,null,u.a.createElement(O.CardHeader,null,u.a.createElement(T.Title,{headingLevel:"h5",size:"lg"},"Parameters")),u.a.createElement(q.CardBody,null,u.a.createElement(v.Stack,{gutter:"md"},n.params&&Object.keys(n.params).map((function(e){return n.params[e]&&u.a.createElement(x.StackItem,{key:"request-".concat(n.params[e])},u.a.createElement(_.TextContent,null,u.a.createElement(j.Text,{key:e,className:"font-14"},"".concat(e)),u.a.createElement(j.Text,{id:e,component:j.TextVariants.p},"".concat(n.params[e]))))})))))))};k.propTypes={request:g.a.shape({requester_name:g.a.string,order_id:g.a.string}).isRequired,requestContent:g.a.object};var w=k,P=n(38),C=n.n(P),R=n(632),N=n.n(R),S=n(633),D=n.n(S),I=n(588),L=n.n(I),A=n(634),V=n.n(A),F=n(636),B=n.n(F),H=n(638),U=n.n(H),z=n(639),M=n(122),G=n(45),J=n(31),K=n(109),Q=n.n(K),W=n(539),X=n.n(W),Y=n(540),Z=n.n(Y),$=n(199),ee=n.n($),te=n(250),ne=n.n(te),ae=n(541),re=n.n(ae),ce=n(200),oe=n.n(ce),ie=n(110),se=n.n(ie),le=n(587),ue={memo:{displayName:"Comment from",icon:u.a.createElement(X.a,null)},approve:{displayName:"Approved by",icon:u.a.createElement(Q.a,{className:"pf-u-mr-sm icon-success-fill"})},deny:{displayName:"Denied by",icon:u.a.createElement(ee.a,{className:"pf-u-mr-sm icon-danger-fill"})},notify:{displayName:"Notified by",icon:u.a.createElement(Z.a,null)},skip:{displayName:"Skipped by",icon:u.a.createElement(ne.a,null)},start:{displayName:"Started by",icon:u.a.createElement(re.a,null)},cancel:{displayName:"Canceled by",icon:u.a.createElement(oe.a,{className:"pf-u-mr-sm icon-danger-fill"})},error:{displayName:"Error",icon:u.a.createElement(se.a,{className:"pf-u-mr-sm icon-danger-fill"})}},me=function(e){var t=e.actionList;return t?u.a.createElement(v.Stack,null,t.map((function(e){return u.a.createElement("div",{key:"".concat(e.id,"-action")},u.a.createElement(_.TextContent,null,u.a.createElement(j.Text,{key:"".concat(e.id,"-action-created_at"),style:{marginBottom:0},className:"data-table-detail content",component:j.TextVariants.small},Object(J.h)(e.created_at)),u.a.createElement(j.Text,{key:"".concat(e.id,"-action-operation"),style:{marginBottom:0},className:"data-table-detail content"},(t=e.operation,ue[t]?ue[t].icon:"")," ","".concat(function(e){return ue[e]?ue[e].displayName:""}(e.operation),"  ").concat(e.processed_by)),e.comments&&u.a.createElement(j.Text,{key:"".concat(e.id,"-action-comments"),style:{marginBottom:0},className:"data-table-detail content",component:j.TextVariants.h6},"".concat(e.comments))," "),u.a.createElement("br",null));var t}))):u.a.createElement(le.EmptyTable,{centered:!0,"aria-label":"No records"})},de=n(50),pe=n(201),fe=n(205),ye=n(207),be=n(542),he=n(206),ge=n(543),Ee=n(100),qe=n(99),Oe=n(15),ve=n(104),xe=n(72),je=n(105),_e=n(37),Te=n(46),ke=function(e){var t,n=e.item,a=e.isExpanded,r=e.toggleExpand,c=Object(l.useState)(!1),i=o()(c,2),s=i[0],m=i[1],d=Object(l.useContext)(_e.a).userRoles,p=Object(J.i)(d),f=function(e){m(e)},y=function(){m((function(e){return!e}))},b=function(e,t){return!!p||e.metadata&&e.metadata.user_capabilities&&e.metadata.user_capabilities[t]};return u.a.createElement(pe.DataListItem,{key:"request-".concat(n.id),"aria-labelledby":"check-request-".concat(n.id),isExpanded:a},u.a.createElement(fe.DataListItemRow,null,u.a.createElement(be.DataListToggle,{onClick:function(){return r("request-".concat(n.id))},isExpanded:a,id:"request-".concat(n.id),"aria-labelledby":"request-".concat(n.id," request-").concat(n.id),"aria-label":"Toggle details for"}),u.a.createElement(he.DataListItemCells,{dataListCells:[u.a.createElement(ye.DataListCell,{key:n.id},u.a.createElement("span",{id:"".concat(n.id,"-name")},"".concat(n.group_name?n.group_name:n.name)," ")),u.a.createElement(ye.DataListCell,{key:"".concat(n.id,"-state")},u.a.createElement("span",{style:{textTransform:"capitalize"},id:"".concat(n.id,"-state")},"".concat(n.state)," ")),u.a.createElement(ye.DataListCell,{key:"".concat(n.id,"-action")},u.a.createElement(xe.Level,null,u.a.createElement(je.LevelItem,null,Object(J.f)(n.state)&&b(n,"approve")&&u.a.createElement("div",null,u.a.createElement(G.b,{id:"approve-".concat(n.id),to:{pathname:Te.a.request.approve,search:"?request=".concat(n.id)}},u.a.createElement(de.Button,{variant:"link","aria-label":"Approve Request"},"Approve")),u.a.createElement(G.b,{id:"deny-".concat(n.id),to:{pathname:Te.a.request.deny,search:"?request=".concat(n.id)}},u.a.createElement(de.Button,{variant:"link",className:"destructive-color","aria-label":"Deny Request"},"Deny")))))),u.a.createElement(ye.DataListCell,{key:"request-".concat(n.id),className:"pf-c-data-list__action","aria-labelledby":"request-".concat(n.id," check-request-action").concat(n.id),id:"workflow-".concat(n.id),"aria-label":"Actions"},Object(J.f)(n.state)&&b(n,"memo")&&(t=n,u.a.createElement(qe.Dropdown,{position:Oe.DropdownPosition.right,onSelect:y,toggle:u.a.createElement(ve.KebabToggle,{id:"request-request-dropdown-".concat(t.id),onToggle:f}),isOpen:s,dropdownItems:[u.a.createElement(Ee.DropdownItem,{"aria-label":"Add Comment",key:"add_comment_".concat(t.id),component:"button"},u.a.createElement(G.b,{id:"request-".concat(t.id,"-request-comment"),to:{pathname:Te.a.request.addComment,search:"?request=".concat(t.id)},className:"pf-c-dropdown__menu-item"},"Comment"))],isPlain:!0})))]})),u.a.createElement(ge.DataListContent,{"aria-label":"Request Content Details",isHidden:!a},u.a.createElement(v.Stack,{gutter:"md"},u.a.createElement(x.StackItem,null,u.a.createElement(_.TextContent,{component:j.TextVariants.h6},function(e){return u.a.createElement(me,{actionList:e.actions})}(n))))))};ke.propTypes={isLoading:g.a.bool,item:g.a.shape({id:g.a.string,name:g.a.string,state:g.a.string,group_name:g.a.string.isRequired,requestActions:g.a.shape({data:g.a.array}),metadata:g.a.shape({user_capabilities:g.a.object})}).isRequired,idx:g.a.number,isExpanded:g.a.bool.isRequired,toggleExpand:g.a.func.isRequired,noItems:g.a.string};var we=n(60);function Pe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=U()(e);if(t){var r=U()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return B()(this,n)}}var Ce=function(e){V()(n,e);var t=Pe(n);function n(){var e;N()(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return e=t.call.apply(t,[this].concat(r)),s()(L()(e),"state",{expanded:[]}),s()(L()(e),"toggleExpand",(function(t){return e.setState((function(e){var n=e.expanded,a=n.indexOf(t);return{expanded:a>=0?[].concat(C()(n.slice(0,a)),C()(n.slice(a+1,n.length))):[].concat(C()(n),[t])}}))})),s()(L()(e),"isExpanded",(function(t){return e.state.expanded.includes(t)})),e}return D()(n,[{key:"render",value:function(){var e=this;return u.a.createElement(l.Fragment,null,u.a.createElement("div",null,this.props.isLoading&&u.a.createElement(l.Fragment,null,u.a.createElement(z.PageHeader,null,u.a.createElement(z.PageHeaderTitle,{title:this.props.noItems})),u.a.createElement(we.b,null))),this.props.items.length>0&&u.a.createElement(M.DataList,{"aria-label":"Expandable data list"},this.props.items.map((function(t,n){return u.a.createElement(ke,{key:t.id,item:t,idx:n,isActive:0===n,isExpanded:e.isExpanded("request-".concat(t.id)),toggleExpand:e.toggleExpand})}))))}}]),n}(l.Component);Ce.propTypes={isLoading:g.a.bool,items:g.a.array,noItems:g.a.string,active_request:g.a.number},Ce.defaultProps={items:[]};var Re=Ce,Ne=function(e){var t=e.request;return u.a.createElement(l.Fragment,null,u.a.createElement(T.Title,{headingLevel:"h5",size:"lg",className:"pf-u-pl-lg pf-u-pb-lg"},"Request transcript"),u.a.createElement(Re,{items:t.requests&&t.requests.length>0?t.requests:[t]}))};Ne.propTypes={request:g.a.shape({content:g.a.object,requests:g.a.array}).isRequired};var Se=Ne,De=n(562),Ie=n(101),Le=n(559);function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Fe={isFetching:!0},Be=function(e,t){switch(t.type){case"setFetching":return Ve(Ve({},e),{},{isFetching:t.payload});default:return e}};t.default=function(){var e=Object(l.useReducer)(Be,Fe),t=o()(e,2),n=t[0].isFetching,a=t[1],c=Object(d.useSelector)((function(e){var t=e.requestReducer,n=t.requestContent;return{selectedRequest:t.selectedRequest,requestContent:n}})),i=c.selectedRequest,s=c.requestContent,h=Object(Le.a)(["request"]),g=o()(h,1)[0].request,E=Object(m.h)(),q=Object(d.useDispatch)(),O=Object(l.useContext)(_e.a).userRoles;Object(l.useEffect)((function(){Promise.all([q(Object(De.d)(g,Object(J.d)(O))),q(Object(De.e)(g,Object(J.d)(O)))]).then((function(){return a({type:"setFetching",payload:!1})}))}),[]);return u.a.createElement(l.Fragment,null,u.a.createElement(m.d,null,u.a.createElement(m.b,{exact:!0,path:Te.a.request.addComment},u.a.createElement(b.a,{actionType:"Add Comment",closeUrl:{pathname:Te.a.request.index,search:"?request=".concat(i.id)}})),u.a.createElement(m.b,{exact:!0,path:Te.a.request.approve,render:function(e){return u.a.createElement(b.a,r()({},e,{actionType:"Approve",closeUrl:{pathname:Te.a.request.index,search:"?request=".concat(i.id)}}))}}),u.a.createElement(m.b,{exact:!0,path:Te.a.request.deny,render:function(e){return u.a.createElement(b.a,r()({},e,{actionType:"Deny",closeUrl:{pathname:Te.a.request.index,search:"?request=".concat(i.id)}}))}})),u.a.createElement(Ie.a,{breadcrumbs:[{title:"Request queue",to:Te.a.requests.index,id:"requests"},{title:"Request ".concat(g),id:g}],paddingBottom:!0},u.a.createElement(Ie.b,{title:"Request ".concat(g)})),u.a.createElement(y.Section,{type:"content"},u.a.createElement(p.Grid,{gutter:"md"},n||!i||0===Object.keys(i).length?u.a.createElement(y.Section,{style:{backgroundColor:"white",minHeight:"100%"}},u.a.createElement(we.c,null)):u.a.createElement(l.Fragment,null,u.a.createElement(f.GridItem,{md:4,lg:3,className:"info-bar"},u.a.createElement(w,{request:i,requestContent:s})),u.a.createElement(f.GridItem,{md:8,lg:9,className:"detail-pane pf-u-p-lg"},u.a.createElement(Se,{request:i,url:E.url}))))))}}}]);
//# sourceMappingURL=../sourcemaps/request-detail~31ecd969.js.map