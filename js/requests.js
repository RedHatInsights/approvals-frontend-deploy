(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2199:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a.n(n),c=a(47),o=a.n(c),i=a(3),l=a.n(i),s=a(0),u=a.n(s),m=a(1),p=a.n(m),d=a(39),f=a(18),b=a(74),y=a(366),E=a(4),g=a(35),h=a.n(g),v=a(54),O=a.n(v),q=a(83),j=a(23),T=a(76),x=a(42);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=Object(q.a)(),C=Object(q.c)();function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.a,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n="&limit=".concat(t.limit,"&offset=").concat(t.offset),r="filter[name][contains_i]=".concat(e),c="".concat(j.a,"/requests/?").concat(r).concat(n),o=a?{"x-rh-persona":a}:void 0;return Object(q.b)()({method:"get",url:c,headers:o})}var S=function(e,t){var a,n=t&&t!==x.a?{"x-rh-persona":t}:{"x-rh-persona":x.b};return C({method:"post",url:"".concat(j.a,"/graphql"),headers:n,data:{query:(a=e,'query {\n  requests(id: "'.concat(a,'") {\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    state\n    actions {\n      id\n      operation\n      comments\n      created_at\n      processed_by\n    }\n    requests {\n      id\n      name\n      number_of_children\n      decision\n      description\n      group_name\n      number_of_finished_children\n      state\n      workflow_id\n      parent_id\n      actions {\n        id\n        operation\n        comments\n        created_at\n        processed_by\n      }\n    }\n  }\n}'))}}).then((function(e){return e.data.requests}))},D=function(e){var t="".concat(j.a,"/requests/").concat(e,"/content"),a={"x-rh-persona":x.b};return Object(q.b)()({method:"get",url:t,headers:a})},N=function(e,t){var a="".concat(j.a,"/requests/").concat(e).concat(t?"/requests":""),n={"x-rh-persona":x.b};return Object(q.b)()({method:"get",url:a,headers:n})};function _(e,t){return L.apply(this,arguments)}function L(){return(L=O()(h.a.mark((function e(t,a){var n,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t,a);case 2:if((n=e.sent)&&0!==n.length){e.next=5;break}return e.abrupt("return",{});case 5:if(a!==x.a){e.next=17;break}if(!(n&&n.length>0&&n[0].number_of_children>0)){e.next=13;break}return e.next=9,N(t,!0);case 9:(r=e.sent)&&r.data&&(n[0].requests=n[0].requests.map((function(e){return w({},r.data.find((function(t){return t.id===e.id&&t.metadata})),{},e)}))),e.next=17;break;case 13:return e.next=15,N(t,!1);case 15:(c=e.sent)&&(n[0]=w({},n[0],{metadata:c.metadata}));case 17:return e.abrupt("return",w({},n[0]));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return I.apply(this,arguments)}function I(){return(I=O()(h.a.mark((function e(t,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.createAction(t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(e,t,a){return{type:E.h,payload:R(e,t,a)}},V=function(e,t){return{type:E.i,payload:D(e)}},B=function(e,t,a){return{type:E.b,payload:F(t,a),meta:{notifications:{fulfilled:{variant:"success",title:"Success",description:"The ".concat(e," was successful.")},rejected:{variant:"danger",title:"".concat(e," error"),description:"The ".concat(e," action failed.")}}}}},M=a(50),U=a.n(M),K=a(384),G=a.n(K),H=a(483),z=a(21),J=a.n(z),Q=a(496),W=a(497),X=a(49),Y=a(147),Z=a(146),$=function(e){var t=e.input,a=e.options,n=e.isReadOnly,c=e.isDisabled,o=(e.FieldProvider,e.isRequired),i=U()(e,["input","options","isReadOnly","isDisabled","FieldProvider","isRequired"]);return u.a.createElement(Q.FormSelect,r()({},t,i,{isDisabled:c||n}),function(e,t,a){if(t&&a)return e;var n=J()(e);return n.find((function(e){return void 0===e.value}))?J()(n):[{label:a?"Please choose":"None"}].concat(J()(n))}(a,t.value,o).map((function(e){return u.a.createElement(W.FormSelectOption,r()({key:e.value||e.label},e,{label:e.label.toString()}))})))};$.propTypes={input:p.a.object.isRequired,options:p.a.arrayOf(p.a.shape({value:p.a.any,label:p.a.string.isRequired})).isRequired,isReadOnly:p.a.bool,isDisabled:p.a.bool,isRequired:p.a.bool,FieldProvider:p.a.any};var ee=function(e){e.componentType;var t=e.label,a=e.isRequired,n=e.helperText,c=e.meta,o=e.description,i=e.hideLabel,l=U()(e,["componentType","label","isRequired","helperText","meta","description","hideLabel"]),s=c.error,m=c.touched&&s;return u.a.createElement(X.FormGroup,{isRequired:a,label:!i&&t,fieldId:l.id,isValid:!m,helperText:n,helperTextInvalid:c.error},o&&u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{component:Z.TextVariants.small},o)),u.a.createElement($,r()({label:t,isValid:!m,isRequired:a},l)))};ee.propTypes={componentType:p.a.string,label:p.a.string,isRequired:p.a.bool,helperText:p.a.string,meta:p.a.object,description:p.a.string,hideLabel:p.a.bool};var te=ee;function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var re={default:{},modal:{buttonOrder:["cancel","reset","save"],buttonClassName:"modal-form-right-align"}},ce=function(e){var t=e.componentMapper,a=e.formContainer,n=U()(e,["componentMapper","formContainer"]);return u.a.createElement("div",{className:re[a].buttonClassName},u.a.createElement(G.a,r()({formFieldsMapper:ne({},H.formFieldsMapper,l()({componentMapper:t},K.componentTypes.SELECT,te)),layoutMapper:H.layoutMapper},re[a],n)))};ce.propTypes={componentMapper:p.a.object,formContainer:p.a.oneOf(["default","modal"])},ce.defaultProps={componentMapper:{},formContainer:"default"};var oe=ce,ie=a(81),le=a(359),se=a(33),ue=function(e){return{component:K.componentTypes.TEXTAREA_FIELD,name:"comments",type:"text",isRequired:e,label:e?"Reason":"Comment"}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=ue(e);return e&&(t.validate=[{type:K.validatorTypes.REQUIRED}]),{fields:[t]}},pe=a(350),de=a(346);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function be(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ye=function(e){var t=e.actionType,a=e.addNotification,n=e.createRequestAction,r=e.closeUrl,c=e.postMethod,i=Object(f.k)().push,l=Object(pe.a)(["request"]),s=o()(l,1)[0].request,m=function(){var e="Add Comment"===t?t:"".concat(t," Request");a({variant:"warning",title:e,dismissable:!0,description:"".concat(e," was cancelled by the user.")}),i(r)};return u.a.createElement(le.Modal,{isLarge:!0,title:"Add Comment"===t?"Request #".concat(s):"".concat(t," Request #").concat(s),isOpen:!0,onClose:m},u.a.createElement(oe,{schema:me("Deny"===t),schemaType:"default",onSubmit:function(e){var a={"Add Comment":"memo",Approve:"approve",Deny:"deny"},o="Add Comment"===t?t:"".concat(t," Request");return c?n(o,s,be({operation:a[t]},e)).then((function(){return c()})).then((function(){return i(r)})):n(o,s,be({operation:a[t]},e)).then((function(){return i(r)}))},onCancel:m,formContainer:"modal"}))};ye.defaultProps={closeUrl:de.a.requests.index},ye.propTypes={addNotification:p.a.func.isRequired,createRequestAction:p.a.func.isRequired,postMethod:p.a.func,id:p.a.string,actionType:p.a.string,closeUrl:p.a.string,match:p.a.object,location:p.a.object};var Ee=Object(d.connect)(null,(function(e){return Object(ie.a)({addNotification:se.addNotification,createRequestAction:B},e)}))(ye),ge=a(26),he=a(149),ve=a(150),Oe=a(87),qe=a(451),je=a(44),Te=function(e){var t=e.title,a=void 0===t?"":t,n=e.detail,r=void 0===n?"":n;return u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{className:"data-table-detail heading",component:Z.TextVariants.small},a),u.a.createElement(Z.Text,{className:"data-table-detail content",component:Z.TextVariants.h5},r))};Te.propTypes={title:p.a.node,detail:p.a.node};var xe=function(e){var t=e.id,a=e.number_of_children,n=e.state,r=e.reason,c=Object(x.f)(n)&&!a,i=Object(s.useState)([]),l=o()(i,2),m=l[0],p=l[1],f=Object(s.useState)(!0),y=o()(f,2),E=y[0],g=y[1],h=Object(s.useState)(!1),v=o()(h,2),O=v[0],q=v[1],j=Object(s.useContext)(je.a).userPersona,T=Object(d.useSelector)((function(e){return e.requestReducer.expandedRequests}));return Object(s.useEffect)((function(){!O&&E&&T.includes(t)&&(q(!0),D(t).then((function(e){p(e),g(!1)})).catch((function(){return g(!1)})))}),[T]),E?u.a.createElement(Oe.Bullseye,null,u.a.createElement(qe.Spinner,null)):u.a.createElement(s.Fragment,null,u.a.createElement(he.Level,null,u.a.createElement(ve.LevelItem,null,u.a.createElement(Te,{title:"Product",detail:m?m.product:"Unknown"})),c&&Object(x.e)(j)&&u.a.createElement(ve.LevelItem,null,u.a.createElement(ge.Link,{to:"/requests/approve/".concat(t),className:"pf-u-mr-md"},u.a.createElement(b.Button,{variant:"primary","aria-label":"Approve Request",isDisabled:!c},"Approve")),u.a.createElement(ge.Link,{to:"/requests/deny/".concat(t)},u.a.createElement(b.Button,{variant:"danger","aria-label":"Deny Request"},"Deny")))),u.a.createElement(he.Level,null,u.a.createElement(ve.LevelItem,null,u.a.createElement(Te,{title:"Portfolio",detail:m?m.portfolio:"Unknown"}),u.a.createElement(Te,{title:"Platform",detail:m?m.platform:"Unknown"}),u.a.createElement(Te,{title:"Reason",detail:r||""}))))};xe.propTypes={id:p.a.string,content:p.a.object,number_of_children:p.a.number,uname:p.a.string,state:p.a.string,reason:p.a.string};var Pe=xe,we=function(e){return e.reduce((function(e,t,a){var n=t.id,r=t.name,c=t.requester_name,o=t.created_at,i=t.notified_at,l=t.finished_at,m=t.state,p=t.decision,d=t.reason,f=t.number_of_children;return[].concat(J()(e),[{id:n,isOpen:!1,state:m,number_of_children:f,cells:[u.a.createElement(s.Fragment,{key:n},u.a.createElement(ge.Link,{to:{pathname:de.a.requests.index,search:"?request=".concat(n)}},r)),c,Object(x.h)(o),l?Object(x.h)(l):i?Object(x.h)(i):Object(x.h)(o),m,p]},{parent:2*a,fullWidth:!0,cells:[{title:u.a.createElement(Pe,{id:n,number_of_children:f,state:m,reason:d})}]}])}),[])},ke=a(409),Ce=a(84),Re=a(56),Se=a(131),De=(a(374),a(169)),Ne=a(170),_e=a(2178),Le=a(344),Fe=a(348),Ie=a(75),Ae=function(e){var t=e.request,a=e.requestContent;return u.a.createElement(s.Fragment,null,u.a.createElement(Le.Stack,{gutter:"md"},u.a.createElement(Fe.StackItem,{key:"request-detail-panel"},u.a.createElement(De.Card,null,u.a.createElement(Ne.CardBody,null,u.a.createElement(Le.Stack,{gutter:"md"},u.a.createElement(Fe.StackItem,{key:"request-summary"},u.a.createElement(Ie.Title,{headingLevel:"h5",size:"lg"},"Summary")),u.a.createElement(Fe.StackItem,{key:"request-product"},u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{className:"font-14"},"Product"),u.a.createElement(Z.Text,{id:"portfolio-item-name",component:Z.TextVariants.p},a?a.product:""))),u.a.createElement(Fe.StackItem,{key:"request-portfolio"},u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{className:"font-14"},"Portfolio"),u.a.createElement(Z.Text,{id:"portfolio-name",component:Z.TextVariants.p},a?a.portfolio:""))),u.a.createElement(Fe.StackItem,{key:"request-platform"},u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{className:"font-14"},"Platform"),u.a.createElement(Z.Text,{id:"source-name",component:Z.TextVariants.p},a?a.platform:" "))),u.a.createElement(Fe.StackItem,{key:"request-requester"},u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{className:"font-14"},"Requester "),u.a.createElement(Z.Text,{id:"requester_name",component:Z.TextVariants.p},t.requester_name))),u.a.createElement(Fe.StackItem,{key:"request-order"},u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{className:"font-14"},"Order# "),u.a.createElement(Z.Text,{id:"requester_name",component:Z.TextVariants.p},a?a.order_id:""))))))),u.a.createElement(Fe.StackItem,{key:"request-parameters"},u.a.createElement(De.Card,null,u.a.createElement(_e.CardHeader,null,u.a.createElement(Ie.Title,{headingLevel:"h5",size:"lg"},"Parameters")),u.a.createElement(Ne.CardBody,null,u.a.createElement(Le.Stack,{gutter:"md"},a.params&&Object.keys(a.params).map((function(e){return a.params[e]&&u.a.createElement(Fe.StackItem,{key:"request-".concat(a.params[e])},u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{key:e,className:"font-14"},"".concat(e)),u.a.createElement(Z.Text,{id:e,component:Z.TextVariants.p},"".concat(a.params[e]))))}))))))))};Ae.propTypes={request:p.a.shape({requester_name:p.a.string,order_id:p.a.string}).isRequired,requestContent:p.a.object};var Ve=Ae,Be=a(2179),Me=a.n(Be),Ue=a(2180),Ke=a.n(Ue),Ge=a(2181),He=a.n(Ge),ze=a(2183),Je=a.n(ze),Qe=a(462),We=a.n(Qe),Xe=a(2184),Ye=a.n(Xe),Ze=a(2186),$e=a(46),et=a(157),tt=a.n(et),at=a(456),nt=a.n(at),rt=a(457),ct=a.n(rt),ot=a(458),it=a.n(ot),lt=a(155),st=a.n(lt),ut=a(461),mt=a.n(ut),pt=a(460),dt=a.n(pt),ft=a(152),bt=a.n(ft),yt=a(362),Et={memo:{displayName:"Comment from",icon:u.a.createElement(nt.a,null)},approve:{displayName:"Approved by",icon:u.a.createElement(tt.a,{className:"pf-u-mr-sm icon-success-fill"})},deny:{displayName:"Denied by",icon:u.a.createElement(it.a,{className:"pf-u-mr-sm icon-danger-fill"})},notify:{displayName:"Notified by",icon:u.a.createElement(ct.a,null)},skip:{displayName:"Skipped by",icon:u.a.createElement(st.a,null)},start:{displayName:"Started by",icon:u.a.createElement(mt.a,null)},cancel:{displayName:"Canceled by",icon:u.a.createElement(dt.a,{className:"pf-u-mr-sm icon-danger-fill"})},error:{displayName:"Error",icon:u.a.createElement(bt.a,{className:"pf-u-mr-sm icon-danger-fill"})}},gt=function(e){var t=e.actionList;return t?u.a.createElement(Le.Stack,null,t.map((function(e){return u.a.createElement("div",{key:"".concat(e.id,"-action")},u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{key:"".concat(e.id,"-action-created_at"),style:{marginBottom:0},className:"data-table-detail content",component:Z.TextVariants.small},Object(x.h)(e.created_at)),u.a.createElement(Z.Text,{key:"".concat(e.id,"-action-operation"),style:{marginBottom:0},className:"data-table-detail content"},(t=e.operation,Et[t]?Et[t].icon:"")," ","".concat(function(e){return Et[e]?Et[e].displayName:""}(e.operation),"  ").concat(e.processed_by)),e.comments&&u.a.createElement(Z.Text,{key:"".concat(e.id,"-action-comments"),style:{marginBottom:0},className:"data-table-detail content",component:Z.TextVariants.h6},"".concat(e.comments))," "),u.a.createElement("br",null));var t}))):u.a.createElement(yt.EmptyTable,{centered:!0,"aria-label":"No records"})},ht=a(66),vt=a(67),Ot=a(69),qt=a(2187),jt=a(68),Tt=a(2188),xt=a(160),Pt=a(159),wt=a(13),kt=a(161),Ct=function(e){var t,a=e.item,n=e.isExpanded,r=e.toggleExpand,c=Object(s.useState)(!1),i=o()(c,2),l=i[0],m=i[1],p=Object(s.useContext)(je.a).userPersona,d=function(e){m(e)},f=function(){m((function(e){return!e}))},y=function(e,t){return!!Object(x.d)(p)||e.metadata&&e.metadata.user_capabilities&&e.metadata.user_capabilities[t]};return u.a.createElement(ht.DataListItem,{key:"request-".concat(a.id),"aria-labelledby":"check-request-".concat(a.id),isExpanded:n},u.a.createElement(vt.DataListItemRow,null,u.a.createElement(qt.DataListToggle,{onClick:function(){return r("request-".concat(a.id))},isExpanded:n,id:"request-".concat(a.id),"aria-labelledby":"request-".concat(a.id," request-").concat(a.id),"aria-label":"Toggle details for"}),u.a.createElement(jt.DataListItemCells,{dataListCells:[u.a.createElement(Ot.DataListCell,{key:a.id},u.a.createElement("span",{id:"".concat(a.id,"-name")},"".concat(a.group_name?a.group_name:a.name)," ")),u.a.createElement(Ot.DataListCell,{key:"".concat(a.id,"-state")},u.a.createElement("span",{style:{textTransform:"capitalize"},id:"".concat(a.id,"-state")},"".concat(a.state)," ")),u.a.createElement(Ot.DataListCell,{key:"".concat(a.id,"-action")},u.a.createElement(he.Level,null,u.a.createElement(ve.LevelItem,null,Object(x.f)(a.state)&&y(a,"approve")&&u.a.createElement("div",null,u.a.createElement(ge.Link,{id:"approve-".concat(a.id),to:{pathname:de.a.requests.approve,search:"?request=".concat(a.id)}},u.a.createElement(b.Button,{variant:"link","aria-label":"Approve Request"},"Approve")),u.a.createElement(ge.Link,{id:"deny-".concat(a.id),to:{pathname:de.a.requests.deny,search:"?request=".concat(a.id)}},u.a.createElement(b.Button,{variant:"link",className:"destructive-color","aria-label":"Deny Request"},"Deny")))))),u.a.createElement(Ot.DataListCell,{key:"request-".concat(a.id),className:"pf-c-data-list__action","aria-labelledby":"request-".concat(a.id," check-request-action").concat(a.id),id:"workflow-".concat(a.id),"aria-label":"Actions"},Object(x.f)(a.state)&&y(a,"memo")&&(t=a,u.a.createElement(Pt.Dropdown,{position:wt.DropdownPosition.right,onSelect:f,toggle:u.a.createElement(kt.KebabToggle,{id:"request-request-dropdown-".concat(t.id),onToggle:d}),isOpen:l,dropdownItems:[u.a.createElement(xt.DropdownItem,{"aria-label":"Add Comment",key:"add_comment_".concat(t.id)},u.a.createElement(ge.Link,{id:"request-".concat(t.id,"-request-comment"),to:{pathname:de.a.requests.addComment,search:"?request=".concat(t.id)},className:"pf-c-dropdown__menu-item"},"Comment"))],isPlain:!0})))]})),u.a.createElement(Tt.DataListContent,{"aria-label":"Request Content Details",isHidden:!n},u.a.createElement(Le.Stack,{gutter:"md"},u.a.createElement(Fe.StackItem,null,u.a.createElement(Y.TextContent,{component:Z.TextVariants.h6},function(e){return u.a.createElement(gt,{actionList:e.actions})}(a))))))};Ct.propTypes={isLoading:p.a.bool,item:p.a.shape({id:p.a.string,name:p.a.string,state:p.a.string,group_name:p.a.string.isRequired,requestActions:p.a.shape({data:p.a.array}),metadata:p.a.shape({user_capabilities:p.a.array})}).isRequired,idx:p.a.number,isExpanded:p.a.bool.isRequired,toggleExpand:p.a.func.isRequired,noItems:p.a.string};var Rt=a(41),St=function(e){function t(){var e,a;Me()(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return a=He()(this,(e=Je()(t)).call.apply(e,[this].concat(r))),l()(We()(a),"state",{expanded:[]}),l()(We()(a),"toggleExpand",(function(e){return a.setState((function(t){var a=t.expanded,n=a.indexOf(e);return{expanded:n>=0?[].concat(J()(a.slice(0,n)),J()(a.slice(n+1,a.length))):[].concat(J()(a),[e])}}))})),l()(We()(a),"isExpanded",(function(e){return a.state.expanded.includes(e)})),a}return Ye()(t,e),Ke()(t,[{key:"render",value:function(){var e=this;return u.a.createElement(s.Fragment,null,u.a.createElement("div",null,this.props.isLoading&&u.a.createElement(s.Fragment,null,u.a.createElement(Ze.PageHeader,null,u.a.createElement(Ze.PageHeaderTitle,{title:this.props.noItems})),u.a.createElement(Rt.b,null))),this.props.items.length>0&&u.a.createElement($e.DataList,{"aria-label":"Expandable data list"},this.props.items.map((function(t,a){return u.a.createElement(Ct,{key:t.id,item:t,idx:a,isActive:0===a,isExpanded:e.isExpanded("request-".concat(t.id)),toggleExpand:e.toggleExpand})}))))}}]),t}(s.Component);St.propTypes={isLoading:p.a.bool,items:p.a.array,noItems:p.a.string,active_request:p.a.number},St.defaultProps={items:[]};var Dt=St,Nt=function(e){var t=e.request;return u.a.createElement(s.Fragment,null,u.a.createElement(Ie.Title,{size:"sm",style:{paddingLeft:"32px"}}," Request transcript "),u.a.createElement(Dt,{items:t.requests&&t.requests.length>0?t.requests:[t]}))};Nt.propTypes={request:p.a.shape({content:p.a.object,requests:p.a.array}).isRequired};var _t=Nt,Lt=a(376);function Ft(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var It={isFetching:!0},At=function(e,t){switch(t.type){case"setFetching":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ft(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ft(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{isFetching:t.payload});default:return e}},Vt=function(){var e=Object(s.useReducer)(At,It),t=o()(e,2),a=t[0].isFetching,n=t[1],c=Object(d.useSelector)((function(e){var t=e.requestReducer,a=t.requestContent;return{selectedRequest:t.selectedRequest,requestContent:a}})),i=c.selectedRequest,l=c.requestContent,m=Object(pe.a)(["request"]),p=o()(m,2),b=p[0].request,y=p[1],g=Object(f.l)(),h=Object(d.useDispatch)(),v=Object(s.useContext)(je.a).userPersona;Object(s.useEffect)((function(){var e,t;Promise.all([h((e=b,t=v,{type:E.g,payload:_(e,t)})),h(V(b))]).then((function(){return n({type:"setFetching",payload:!1})}))}),[]);return u.a.createElement(s.Fragment,null,u.a.createElement(f.d,{exact:!0,path:de.a.requests.addComment,render:function(e){return u.a.createElement(Ee,r()({},e,{actionType:"Add Comment",closeUrl:{pathname:de.a.requests.index,search:y}}))}}),u.a.createElement(f.d,{exact:!0,path:de.a.requests.approve,render:function(e){return u.a.createElement(Ee,r()({},e,{actionType:"Approve",closeUrl:{pathname:de.a.requests.index,search:y}}))}}),u.a.createElement(f.d,{exact:!0,path:de.a.requests.deny,render:function(e){return u.a.createElement(Ee,r()({},e,{actionType:"Deny",closeUrl:{pathname:de.a.requests.index,search:y}}))}}),u.a.createElement(Lt.a,{breadcrumbs:[{title:"Request queue",to:de.a.requests.index,id:"requests"}],paddingBottom:!0},u.a.createElement(Lt.b,{title:"Request ".concat(b)})),u.a.createElement(Se.Section,{type:"content"},u.a.createElement(Ce.Grid,{gutter:"md"},a||!i||0===Object.keys(i).length?u.a.createElement(Se.Section,{style:{backgroundColor:"white",minHeight:"100%"}},u.a.createElement(Rt.c,null)):u.a.createElement(s.Fragment,null,u.a.createElement(Re.GridItem,{md:4,lg:3,className:"info-bar"},u.a.createElement(Ve,{request:i,requestContent:l})),u.a.createElement(Re.GridItem,{md:8,lg:9,className:"detail-pane"},u.a.createElement(_t,{request:i,url:g.url}))))))},Bt=a(391),Mt=a(358),Ut=a(556),Kt=a(407);function Gt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ht(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Gt(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Gt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var zt=[{title:"Name",cellFormatters:[y.b]},"Requester","Opened","Updated","Status","Decision"],Jt=Object(Mt.a)((function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:T.a;a(!0),t(A(e,n,r)).then((function(){return a(!1)}))}),1e3),Qt={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},Wt=function(e,t){switch(t.type){case"setFetching":return Ht({},e,{isFetching:t.payload});case"setFilterValue":return Ht({},e,{filterValue:t.payload});case"setFilteringFlag":return Ht({},e,{isFiltering:t.payload});default:return e}},Xt=function(){var e=Object(s.useReducer)(Wt,Qt),t=o()(e,2),a=t[0],n=a.filterValue,c=a.isFetching,i=a.isFiltering,l=t[1],m=Object(d.useSelector)((function(e){return e.requestReducer.requests})),p=m.data,y=m.meta,g=Object(s.useContext)(je.a).userPersona,h=Object(d.useDispatch)(),v=Object(f.k)(),O=Object(pe.a)(["request"]),q=o()(O,1)[0].request;Object(s.useEffect)((function(){h(A(n,T.a,g)).then((function(){return l({type:"setFetching",payload:!1})})),Object(x.g)()}),[]);var j=function(e){l({type:"setFilterValue",payload:e}),Jt(e,h,(function(e){return l({type:"setFilteringFlag",payload:e})}),Ht({},y,{offset:0}),g)},P=[{eventKey:0,title:"Request queue",name:"/requests"},{eventKey:1,title:"Approval processes",name:"/workflows"}],w=function(){return u.a.createElement(s.Fragment,null,u.a.createElement(f.d,{exact:!0,path:de.a.requests.addComment,render:function(e){return u.a.createElement(Ee,r()({},e,{actionType:"Add Comment",postMethod:A}))}}),u.a.createElement(f.d,{exact:!0,path:de.a.requests.approve,render:function(e){return u.a.createElement(Ee,r()({},e,{actionType:"Approve",postMethod:A}))}}),u.a.createElement(f.d,{exact:!0,path:de.a.requests.deny,render:function(e){return u.a.createElement(Ee,r()({},e,{actionType:"Deny",postMethod:A}))}}))},k=function(e){return e&&e.id&&function(e){return!e||!e.state||(!Object(x.f)(e.state)||e.number_of_children>0||!Object(x.e)(g))}(e)?null:[{title:"Comment",onClick:function(){return v.push({pathname:de.a.requests.addComment,search:"?request=".concat(e.id)})}}]},C=function(e,t){l({type:"setFetching",payload:!0}),h(A(n,t,g)).then((function(){return l({type:"setFetching",payload:!1})})).catch((function(){return l({type:"setFetching",payload:!1})}))},R=function(e,t,a){h(function(e){return{type:E.c,payload:e}}(e)),t((function(t){return a(t,e)}))};return q?u.a.createElement(Vt,null):u.a.createElement(s.Fragment,null,u.a.createElement(Lt.a,null,u.a.createElement(Lt.b,{title:"Approval"}),Object(x.d)(g)&&u.a.createElement(Bt.a,{tabItems:P})),u.a.createElement(ke.a,{data:p,createRows:we,columns:zt,fetchData:C,routes:w,actionResolver:k,titlePlural:"requests",titleSingular:"request",pagination:y,handlePagination:C,filterValue:n,onFilterChange:j,isLoading:c||i,onCollapse:R,renderEmptyState:function(){return u.a.createElement(Kt.a,{title:""===n?"No requests":"No results found",Icon:Ut.SearchIcon,PrimaryAction:function(){return""!==n?u.a.createElement(b.Button,{onClick:function(){return j("")},variant:"link"},"Clear all filters"):null},description:""===n?"":"No results match the filter criteria. Remove all filters or clear all filters to show results."})}}))};Xt.propTypes={requests:p.a.array,isLoading:p.a.bool},Xt.defaultProps={requests:[],isLoading:!1};t.default=Xt},346:function(e,t,a){"use strict";t.a={requests:{index:"/requests",addComment:"/requests/add-comment",approve:"/requests/approve",deny:"/requests/deny"},workflows:{index:"/workflows",add:"/workflows/add-workflow",remove:"/workflows/remove",editInfo:"/workflows/edit-info",editGroups:"/workflows/edit-groups",editSequence:"/workflows/edit-sequence"}}},350:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(18);function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.l)(),a=t.search,n=new URLSearchParams(a);return[e.reduce((function(e,t){return i({},e,r()({},t,n.get(t)))}),{}),a,n]}},358:function(e,t,a){"use strict";var n=a(375);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(n.a)(e,t,a)}},374:function(e,t,a){},376:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),o=a.n(c),i=a(149),l=a(150),s=a(146),u=a(147),m=a(41),p=a(26),d=a(389),f=a(390),b=function(e){var t=e.breadcrumbs;return t?r.a.createElement(d.Breadcrumb,null,Object.values(t).map((function(e){return r.a.createElement(f.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r.a.createElement(p.NavLink,{isActive:function(){return!1},exact:!0,to:e.to},e.title)||e.title)}))):null};b.propTypes={breadcrumbs:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,isActive:o.a.bool,to:o.a.string}))};var y=b;a(388);a.d(t,"a",(function(){return E})),a.d(t,"b",(function(){return g}));var E=function(e){var t=e.children,a=e.breadcrumbs,n=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-sm":""," top-toolbar")},a&&r.a.createElement(i.Level,{className:"pf-u-mb-md"},r.a.createElement(y,{breadcrumbs:a})),t)};E.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,breadcrumbs:o.a.array,paddingBottom:o.a.bool},E.defaultProps={paddingBottom:!1};var g=function(e){var t=e.title,a=e.description,c=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(i.Level,null,r.a.createElement(l.LevelItem,null,r.a.createElement(u.TextContent,{className:"pf-u-mb-sm"},r.a.createElement(s.Text,{component:s.TextVariants.h1},t||r.a.createElement(m.d,null))),a&&r.a.createElement(u.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},r.a.createElement(s.Text,{component:s.TextVariants.p},a))),c))};g.propTypes={title:o.a.string,description:o.a.string,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])}},388:function(e,t,a){},391:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),o=a.n(c),i=a(18),l=a(386),s=a(385),u=function(e){var t=e.history.push,a=e.location.pathname,n=e.tabItems,c=n.find((function(e){var t=e.name;return a.includes(t)}));return r.a.createElement(l.Tabs,{className:"pf-u-mt-sm",activeKey:c?c.eventKey:0,onSelect:function(e,a){return t(n[a].name)}},n.map((function(e){return r.a.createElement(s.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}),history:o.a.shape({push:o.a.func.isRequired}),tabItems:o.a.array.isRequired},t.a=Object(i.o)(u)},407:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(1),o=a.n(c),i=(a(74),a(88)),l=a(96),s=a(89),u=a(455),m=a(146),p=a(147),d=a(362),f=(a(26),function(e){var t=e.title,a=e.Icon,n=e.description,c=e.PrimaryAction,o=e.renderDescription;return r.a.createElement(d.EmptyTable,{centered:!0,"aria-label":"No records"},r.a.createElement(i.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(l.EmptyStateIcon,{icon:a}),r.a.createElement(p.TextContent,null,r.a.createElement(m.Text,{component:m.TextVariants.h1},t)),r.a.createElement(s.EmptyStateBody,null,n,o()),r.a.createElement(u.EmptyStateSecondaryActions,null,c&&r.a.createElement(c,null))))});f.defaultProps={renderDescription:function(){return null}},f.propTypes={title:o.a.string.isRequired,Icon:o.a.any.isRequired,description:o.a.string.isRequired,PrimaryAction:o.a.any,renderDescription:o.a.func},t.a=f;o.a.string.isRequired,o.a.string.isRequired},409:function(e,t,a){"use strict";var n=a(3),r=a.n(n),c=a(47),o=a.n(c),i=a(0),l=a.n(i),s=a(1),u=a.n(s),m=a(392),p=a(394),d=a(360),f=a(149),b=a(150),y=a(354),E=a(467),g=a(466),h=a(76),v=a(361),O=a.n(v),q=a(151),j=a.n(q),T=a(353),x=function(e){var t=e.searchValue,a=e.onFilterChange,n=e.placeholder,r=e.isClearable;return l.a.createElement(d.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(T.TextInput,{placeholder:n,value:t,type:"text",onChange:a,"aria-label":n}),l.a.createElement("span",{className:"filter-icons-container"},r&&t&&l.a.createElement(j.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return a("")}})||l.a.createElement(O.a,null))))};x.propTypes={onFilterChange:u.a.func.isRequired,placeholder:u.a.string,searchValue:u.a.string,isClearable:u.a.bool},x.defaultProps={searchValue:"",isClearable:!1};var P=x,w=a(362),k=a(41),C=a(31),R=a.n(C),S=a(50),D=a.n(S),N=a(375),_=a(153),L=function(e){var t=e.meta,a=t.limit,n=t.count,r=t.offset,c=e.apiProps,o=e.apiRequest,i=e.className,s=e.isCompact,u=D()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:i},l.a.createElement(_.Pagination,R()({perPage:a||50,itemCount:n||0,onPerPageSelect:function(e,t){return o(c,{offset:r,limit:t})},page:Object(h.b)(a,r),onSetPage:function(e,t,n){var r={offset:Object(h.c)(t,a),limit:a},i=function(){return o(c,r)};return n?Object(N.a)(i,250)():i()},direction:"down",isCompact:s},u)))};L.propTypes={meta:u.a.shape({count:u.a.number,limit:u.a.number.isRequired,offset:u.a.number.isRequired}),apiRequest:u.a.func.isRequired,apiProps:u.a.any,className:u.a.string,isCompact:u.a.bool},L.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1};var F=L,I=function(e){var t=e.children;return l.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};I.propTypes={children:u.a.oneOfType([u.a.node,u.a.arrayOf(u.a.node)])};var A=I;function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return M}));var M=function(e){var t=e.isSelectable,a=e.createRows,n=e.columns,r=e.fetchData,c=e.toolbarButtons,s=e.data,u=e.actionResolver,h=e.routes,v=e.titlePlural,O=e.titleSingular,q=e.pagination,j=e.setCheckedItems,T=e.filterValue,x=e.onFilterChange,C=e.isLoading,R=e.onCollapse,S=e.renderEmptyState,D=Object(i.useState)([]),N=o()(D,2),_=N[0],L=N[1];Object(i.useEffect)((function(){L(a(s))}),[s]);var I=function(e,t){return e.map((function(e){return e.id===t?B({},e,{isOpen:!e.isOpen}):B({},e)}))},V=function(e,t){var a=e.map((function(e){return e.id===t?B({},e,{selected:!e.selected}):B({},e)})),n=a.filter((function(e){return e.id&&e.selected}));return j(n),a};return l.a.createElement(w.Section,{type:"content","page-type":"tab-".concat(v),id:"tab-".concat(v)},h(),function(e){return l.a.createElement(m.Toolbar,{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg pf-u-pb-lg top-toolbar"},l.a.createElement(f.Level,{style:{flex:1}},l.a.createElement(b.LevelItem,null,l.a.createElement(m.Toolbar,null,l.a.createElement(P,{onFilterChange:x,searchValue:T,isClearable:!0,placeholder:"Filter by ".concat(O)}),c())),l.a.createElement(b.LevelItem,null,l.a.createElement(m.Toolbar,null,l.a.createElement(p.ToolbarGroup,null,l.a.createElement(d.ToolbarItem,null,l.a.createElement(F,{apiRequest:r,isDisabled:e,meta:q,isCompact:!0})))))))}(C),C&&l.a.createElement(k.b,null),C||0!==_.length?l.a.createElement(i.Fragment,null,!C&&l.a.createElement(y.b,{"aria-label":"".concat(v," table"),onCollapse:function(e,t,a,n){var r=n.id;return R?R(r,L,I):L((function(e){return I(e,r)}))},rows:_,cells:n,onSelect:t&&function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n.id;return L(-1===a?_.map((function(e){return B({},e,{selected:t})})):function(e){return V(e,r)})},actionResolver:u,className:"table-fix"},l.a.createElement(E.a,null),l.a.createElement(g.a,null)),q.count>0&&l.a.createElement(A,null,l.a.createElement(F,{dropDirection:"up",meta:q,apiRequest:r}))):S())};M.propTypes={isSelectable:u.a.bool,createRows:u.a.func.isRequired,columns:u.a.array.isRequired,toolbarButtons:u.a.func,fetchData:u.a.func.isRequired,data:u.a.array,pagination:u.a.shape({limit:u.a.number,offset:u.a.number,count:u.a.number}),titlePlural:u.a.string,titleSingular:u.a.string,routes:u.a.func,actionResolver:u.a.func,setCheckedItems:u.a.func,filterValue:u.a.string,onFilterChange:u.a.func,isLoading:u.a.bool,onCollapse:u.a.func,renderEmptyState:u.a.func},M.defaultProps={requests:[],isLoading:!1,pagination:h.a,toolbarButtons:function(){return null},isSelectable:null,routes:function(){return null},renderEmptyState:function(){return null}}}}]);
//# sourceMappingURL=../sourcemaps/requests.js.map