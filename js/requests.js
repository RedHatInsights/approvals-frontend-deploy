(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2176:function(e,t,n){"use strict";n.r(t);var a=n(31),r=n.n(a),c=n(45),i=n.n(c),o=n(3),l=n.n(o),s=n(0),u=n.n(s),p=n(1),m=n.n(p),d=n(39),f=n(18),b=n(72),y=n(345),E=n(4),h=n(35),g=n.n(h),v=n(54),O=n.n(v),q=n(83),j=n(25),T=n(73);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=Object(q.f)(),w=Object(q.a)(),C=Object(q.c)();function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a="&limit=".concat(t.limit,"&offset=").concat(t.offset),r="filter[name][contains_i]=".concat(e),c="".concat(j.a,"/requests/?").concat(r).concat(a),i=n?{"x-rh-persona":n}:void 0;return Object(q.b)()({method:"get",url:c,headers:i})}var k=function(e,t){var n,a=t?{"x-rh-persona":t}:void 0;return C({method:"post",url:"".concat(j.a,"/graphql"),headers:a,data:{query:(n=e,'query {\n  requests (filter: { parent_id: "'.concat(n,'" } ) {\n    actions {\n      id\n      operation \n      comments \n      created_at \n      processed_by\n    }\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    parent_id\n    state\n    workflow_id\n  }\n}'))}}).then((function(e){return e.data.requests}))};var S=function(e,t){return w.listActionsByRequest(e,t)},N=function(e,t){var n="".concat(j.a,"/requests/").concat(e,"/content"),a=t?{"x-rh-persona":t}:void 0;return Object(q.b)()({method:"get",url:n,headers:a})};function _(e,t){return F.apply(this,arguments)}function F(){return(F=O()(g.a.mark((function e(t,n){var a,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.showRequest(t,{xRhPersona:n});case 2:if(!((a=e.sent).number_of_children>0)){e.next=10;break}return e.next=6,k(t,n);case 6:r=e.sent,a=x({},a,{children:r}),e.next=14;break;case 10:return e.next=12,S(t,n);case 12:c=e.sent,a=x({},a,{actions:c?c.data:[]});case 14:return e.abrupt("return",x({},a));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return A.apply(this,arguments)}function A(){return(A=O()(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.createAction(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e,t,n){return{type:E.h,payload:D(e,t,n)}},V=function(e,t){return{type:E.i,payload:N(e,t)}},B=function(e,t,n){return{type:E.b,payload:L(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success",description:"The ".concat(e," was successful.")},rejected:{variant:"danger",title:"".concat(e," error"),description:"The ".concat(e," action failed.")}}}}},K=n(50),M=n.n(K),U=n(360),G=n.n(U),H=n(471),z=n(23),J=n.n(z),Q=n(484),W=n(485),X=n(47),Y=n(141),Z=n(140),$=function(e){var t=e.input,n=e.options,a=e.isReadOnly,c=e.isDisabled,i=(e.FieldProvider,e.isRequired),o=M()(e,["input","options","isReadOnly","isDisabled","FieldProvider","isRequired"]);return u.a.createElement(Q.FormSelect,r()({},t,o,{isDisabled:c||a}),function(e,t,n){if(t&&n)return e;var a=J()(e);return a.find((function(e){return void 0===e.value}))?J()(a):[{label:n?"Please choose":"None"}].concat(J()(a))}(n,t.value,i).map((function(e){return u.a.createElement(W.FormSelectOption,r()({key:e.value||e.label},e,{label:e.label.toString()}))})))};$.propTypes={input:m.a.object.isRequired,options:m.a.arrayOf(m.a.shape({value:m.a.any,label:m.a.string.isRequired})).isRequired,isReadOnly:m.a.bool,isDisabled:m.a.bool,isRequired:m.a.bool,FieldProvider:m.a.any};var ee=function(e){e.componentType;var t=e.label,n=e.isRequired,a=e.helperText,c=e.meta,i=e.description,o=e.hideLabel,l=M()(e,["componentType","label","isRequired","helperText","meta","description","hideLabel"]),s=c.error,p=c.touched&&s;return u.a.createElement(X.FormGroup,{isRequired:n,label:!o&&t,fieldId:l.id,isValid:!p,helperText:a,helperTextInvalid:c.error},i&&u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{component:Z.TextVariants.small},i)),u.a.createElement($,r()({label:t,isValid:!p,isRequired:n},l)))};ee.propTypes={componentType:m.a.string,label:m.a.string,isRequired:m.a.bool,helperText:m.a.string,meta:m.a.object,description:m.a.string,hideLabel:m.a.bool};var te=ee;function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re={default:{},modal:{buttonOrder:["cancel","reset","save"],buttonClassName:"modal-form-right-align"}},ce=function(e){var t=e.componentMapper,n=e.formContainer,a=M()(e,["componentMapper","formContainer"]);return u.a.createElement("div",{className:re[n].buttonClassName},u.a.createElement(G.a,r()({formFieldsMapper:ae({},H.formFieldsMapper,l()({componentMapper:t},U.componentTypes.SELECT,te)),layoutMapper:H.layoutMapper},re[n],a)))};ce.propTypes={componentMapper:m.a.object,formContainer:m.a.oneOf(["default","modal"])},ce.defaultProps={componentMapper:{},formContainer:"default"};var ie=ce,oe=n(80),le=n(339),se=n(33),ue=function(e){return{component:U.componentTypes.TEXTAREA_FIELD,name:"comments",type:"text",isRequired:e,label:e?"Reason":"Comment"}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=ue(e);return e&&(t.validate=[{type:U.validatorTypes.REQUIRED}]),{fields:[t]}};function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var fe=function(e){var t=e.history.push,n=e.match.params.id,a=e.actionType,r=e.addNotification,c=e.createRequestAction,i=e.closeUrl,o=e.postMethod,l=function(){var e="Add Comment"===a?a:"".concat(a," Request");r({variant:"warning",title:e,dismissable:!0,description:"".concat(e," was cancelled by the user.")}),t(i)};return u.a.createElement(le.Modal,{isLarge:!0,title:"Add Comment"===a?"Request #".concat(n):"".concat(a," Request #").concat(n),isOpen:!0,onClose:l},u.a.createElement(ie,{schema:pe("Deny"===a),schemaType:"default",onSubmit:function(e){var r={"Add Comment":"memo",Approve:"approve",Deny:"deny"},l="Add Comment"===a?a:"".concat(a," Request");return o?c(l,n,de({operation:r[a]},e)).then((function(){return o()})).then((function(){return t(i)})):c(l,n,de({operation:r[a]},e)).then((function(){return t(i)}))},onCancel:l,formContainer:"modal"}))};fe.defaultProps={closeUrl:"/requests"},fe.propTypes={history:m.a.shape({push:m.a.func.isRequired}).isRequired,addNotification:m.a.func.isRequired,createRequestAction:m.a.func.isRequired,postMethod:m.a.func,id:m.a.string,actionType:m.a.string,closeUrl:m.a.string,match:m.a.object,location:m.a.object};var be=Object(f.o)(Object(d.connect)(null,(function(e){return Object(oe.a)({addNotification:se.addNotification,createRequestAction:B},e)}))(fe)),ye=n(44),Ee=n(144),he=n(145),ge=n(363),ve=n(75),Oe=n(535),qe=function(e){var t=e.title,n=void 0===t?"":t,a=e.detail,r=void 0===a?"":a;return u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{className:"data-table-detail heading",component:Z.TextVariants.small},n),u.a.createElement(Z.Text,{className:"data-table-detail content",component:Z.TextVariants.h5},r))};qe.propTypes={title:m.a.node,detail:m.a.node};var je=function(e){var t=e.id,n=e.number_of_children,a=e.state,r=e.reason,c=Object(ve.c)(a)&&!n,o=Object(s.useState)([]),l=i()(o,2),p=l[0],m=l[1],f=Object(s.useState)(!0),y=i()(f,2),E=y[0],h=y[1],g=Object(s.useState)(!1),v=i()(g,2),O=v[0],q=v[1],j=Object(d.useSelector)((function(e){return e.requestReducer.expandedRequests}));return Object(s.useEffect)((function(){!O&&E&&j.includes(t)&&(q(!0),N(t).then((function(e){m(e),h(!1)})).catch((function(){return h(!1)})))}),[j]),E?u.a.createElement(ge.Bullseye,null,u.a.createElement(Oe.Spinner,null)):u.a.createElement(s.Fragment,null,u.a.createElement(Ee.Level,null,u.a.createElement(he.LevelItem,null,u.a.createElement(qe,{title:"Product",detail:p?p.product:"Unknown"})),c&&u.a.createElement(he.LevelItem,null,u.a.createElement(ye.Link,{to:"/requests/approve/".concat(t),className:"pf-u-mr-md"},u.a.createElement(b.Button,{variant:"primary","aria-label":"Approve Request",isDisabled:!c},"Approve")),u.a.createElement(ye.Link,{to:"/requests/deny/".concat(t)},u.a.createElement(b.Button,{variant:"danger","aria-label":"Deny Request"},"Deny")))),u.a.createElement(Ee.Level,null,u.a.createElement(he.LevelItem,null,u.a.createElement(qe,{title:"Portfolio",detail:p?p.portfolio:"Unknown"}),u.a.createElement(qe,{title:"Platform",detail:p?p.platform:"Unknown"}),u.a.createElement(qe,{title:"Reason",detail:r||""}))))};je.propTypes={id:m.a.string,content:m.a.object,number_of_children:m.a.number,uname:m.a.string,state:m.a.string,reason:m.a.string};var Te=je,Re=function(e){return e.reduce((function(e,t,n){var a=t.id,r=t.name,c=t.requester_name,i=t.created_at,o=t.notified_at,l=t.finished_at,p=t.state,m=t.decision,d=t.reason,f=t.number_of_children;return[].concat(J()(e),[{id:a,isOpen:!1,state:p,number_of_children:f,cells:[u.a.createElement(s.Fragment,{key:a},u.a.createElement(ye.Link,{to:"/requests/detail/".concat(a)},u.a.createElement(b.Button,{variant:"link"}," ",r," "))),c,Object(ve.e)(i),l?Object(ve.e)(l):o?Object(ve.e)(o):Object(ve.e)(i),p,m]},{parent:2*n,fullWidth:!0,cells:[{title:u.a.createElement(Te,{id:a,number_of_children:f,state:p,reason:d})}]}])}),[])},xe=n(390),Pe=n(79),we=n(51),Ce=n(127),De=(n(351),function(e){var t=e.request,n=e.requestContent;return u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{component:Z.TextVariants.small},"Product: ",u.a.createElement("br",null)),u.a.createElement(Z.Text,null,n?n.product:""),u.a.createElement(Z.Text,{component:Z.TextVariants.small},"Portfolio: ",u.a.createElement("br",null)),u.a.createElement(Z.Text,null,n?n.portfolio:""),u.a.createElement(Z.Text,{component:Z.TextVariants.small},"Platform: ",u.a.createElement("br",null)),u.a.createElement(Z.Text,null,n?n.platform:" "),u.a.createElement(Z.Text,{component:Z.TextVariants.small},"Requester: "),u.a.createElement(Z.Text,{component:Z.TextVariants.h6},t.requester_name),u.a.createElement(Z.Text,{component:Z.TextVariants.h6},"Order Parameters: ",u.a.createElement("br",null)," "),n.params&&Object.keys(n.params).map((function(e){return n.params[e]&&u.a.createElement(Z.Text,{key:e,component:Z.TextVariants.small},"".concat(e,": ").concat(n.params[e]))})))});De.propTypes={request:m.a.shape({requester_name:m.a.string}).isRequired,requestContent:m.a.object};var ke=De,Se=n(328),Ne=n(446),_e=n.n(Ne),Fe=n(447),Le=n.n(Fe),Ae=n(448),Ie=n.n(Ae),Ve=n(449),Be=n.n(Ve),Ke=n(388),Me=n.n(Ke),Ue=n(450),Ge=n.n(Ue),He=n(2161),ze=n(42),Je=n(330),Qe=n(152),We=n.n(Qe),Xe=n(439),Ye=n.n(Xe),Ze=n(440),$e=n.n(Ze),et=n(443),tt=n.n(et),nt=n(151),at=n.n(nt),rt=n(445),ct=n.n(rt),it=n(444),ot=n.n(it),lt=n(148),st=n.n(lt),ut=n(342),pt={memo:{displayName:"Comment from",icon:u.a.createElement(Ye.a,null)},approve:{displayName:"Approved by",icon:u.a.createElement(We.a,{className:"pf-u-mr-sm icon-success-fill"})},deny:{displayName:"Denied by",icon:u.a.createElement(tt.a,{className:"pf-u-mr-sm icon-danger-fill"})},notify:{displayName:"Notified by",icon:u.a.createElement($e.a,null)},skip:{displayName:"Skipped by",icon:u.a.createElement(at.a,null)},start:{displayName:"Started by",icon:u.a.createElement(ct.a,null)},cancel:{displayName:"Canceled by",icon:u.a.createElement(ot.a,{className:"pf-u-mr-sm icon-danger-fill"})},error:{displayName:"Error",icon:u.a.createElement(st.a,{className:"pf-u-mr-sm icon-danger-fill"})}},mt=function(e){var t=e.actionList;return t?u.a.createElement(Je.Stack,null,t.map((function(e){return u.a.createElement("div",{key:"".concat(e.id,"-action")},u.a.createElement(Y.TextContent,null,u.a.createElement(Z.Text,{key:"".concat(e.id,"-action-created_at"),style:{marginBottom:0},className:"data-table-detail content",component:Z.TextVariants.small},Object(ve.e)(e.created_at)),u.a.createElement(Z.Text,{key:"".concat(e.id,"-action-operation"),style:{marginBottom:0},className:"data-table-detail content"},(t=e.operation,pt[t]?pt[t].icon:"")," ","".concat(function(e){return pt[e]?pt[e].displayName:""}(e.operation),"  ").concat(e.processed_by)),e.comments&&u.a.createElement(Z.Text,{key:"".concat(e.id,"-action-comments"),style:{marginBottom:0},className:"data-table-detail content",component:Z.TextVariants.h6},"".concat(e.comments))," "),u.a.createElement("br",null));var t}))):u.a.createElement(ut.EmptyTable,{centered:!0,"aria-label":"No records"})},dt=n(331),ft=n(63),bt=n(64),yt=n(66),Et=n(2162),ht=n(65),gt=n(2163),vt=n(155),Ot=n(154),qt=n(14),jt=n(156),Tt=function(e){function t(){var e,n;_e()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=Ie()(this,(e=Be()(t)).call.apply(e,[this].concat(r))),l()(Me()(n),"state",{isKebabOpen:!1}),l()(Me()(n),"onKebabToggle",(function(e){n.setState({isKebabOpen:e})})),l()(Me()(n),"onKebabSelect",(function(){n.setState({isKebabOpen:!n.state.isKebabOpen})})),l()(Me()(n),"buildRequestActionKebab",(function(e){return u.a.createElement(Ot.Dropdown,{position:qt.DropdownPosition.right,onSelect:n.onKebabSelect,toggle:u.a.createElement(jt.KebabToggle,{id:"request-request-dropdown-".concat(e.id),onToggle:n.onKebabToggle}),isOpen:n.state.isKebabOpen,dropdownItems:[u.a.createElement(vt.DropdownItem,{"aria-label":"Add Comment",key:"add_comment_".concat(e.id)},u.a.createElement(ye.Link,{id:"request-".concat(e.id,"-request-comment"),to:"/requests/detail/".concat(e.id,"/add_comment"),className:"pf-c-dropdown__menu-item"},"Comment"))],isPlain:!0})})),l()(Me()(n),"fetchRequestDetails",(function(e){return u.a.createElement(mt,{actionList:e.actions})})),n}return Ge()(t,e),Le()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.item,a=t.isExpanded,r=Object(ve.c)(n.state);return u.a.createElement(ft.DataListItem,{key:"request-".concat(n.id),"aria-labelledby":"check-request-".concat(n.id),isExpanded:a},u.a.createElement(bt.DataListItemRow,null,u.a.createElement(Et.DataListToggle,{onClick:function(){return e.props.toggleExpand("request-".concat(n.id))},isExpanded:a,id:"request-".concat(n.id),"aria-labelledby":"request-".concat(n.id," request-").concat(n.id),"aria-label":"Toggle details for"}),u.a.createElement(ht.DataListItemCells,{dataListCells:[u.a.createElement(yt.DataListCell,{key:n.id},u.a.createElement("span",{id:"".concat(n.id,"-name")},"".concat(this.props.idx+1,". ").concat(n.parent_id?n.group_name:n.name)," ")),u.a.createElement(yt.DataListCell,{key:"".concat(n.id,"-state")},u.a.createElement("span",{style:{textTransform:"capitalize"},id:"".concat(n.id,"-state")},"".concat(n.state)," ")),u.a.createElement(yt.DataListCell,{key:"".concat(n.id,"-action")},u.a.createElement(Ee.Level,null,u.a.createElement(he.LevelItem,null,r&&u.a.createElement("div",null,u.a.createElement(ye.Link,{id:"approve-".concat(n.id),to:"/requests/detail/".concat(n.id,"/approve")},u.a.createElement(b.Button,{variant:"link","aria-label":"Approve Request"},"Approve")),u.a.createElement(ye.Link,{id:"deny-".concat(n.id),to:"/requests/detail/".concat(n.id,"/deny")},u.a.createElement(b.Button,{variant:"link",className:"destructive-color","aria-label":"Deny Request"},"Deny")))))),u.a.createElement(yt.DataListCell,{key:"request-".concat(n.id),className:"pf-c-data-list__action","aria-labelledby":"request-".concat(n.id," check-request-action").concat(n.id),id:"workflow-".concat(n.id),"aria-label":"Actions"},r&&this.buildRequestActionKebab(n))]})),u.a.createElement(gt.DataListContent,{"aria-label":"Request Content Details",isHidden:!a},u.a.createElement(Je.Stack,{gutter:"md"},u.a.createElement(dt.StackItem,null,u.a.createElement(Y.TextContent,{component:Z.TextVariants.h6},this.fetchRequestDetails(n))))))}}]),t}(s.Component);Tt.propTypes={isLoading:m.a.bool,item:m.a.shape({id:m.a.string,name:m.a.string,state:m.a.string,parent_id:m.a.string.isRequired,group_name:m.a.string.isRequired,requestActions:m.a.shape({data:m.a.array})}).isRequired,idx:m.a.number,isExpanded:m.a.bool.isRequired,toggleExpand:m.a.func.isRequired,noItems:m.a.string};var Rt=Tt,xt=n(41),Pt=function(e){function t(){var e,n;_e()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=Ie()(this,(e=Be()(t)).call.apply(e,[this].concat(r))),l()(Me()(n),"state",{expanded:[]}),l()(Me()(n),"toggleExpand",(function(e){return n.setState((function(t){var n=t.expanded,a=n.indexOf(e);return{expanded:a>=0?[].concat(J()(n.slice(0,a)),J()(n.slice(a+1,n.length))):[].concat(J()(n),[e])}}))})),l()(Me()(n),"isExpanded",(function(e){return n.state.expanded.includes(e)})),n}return Ge()(t,e),Le()(t,[{key:"render",value:function(){var e=this;return u.a.createElement(s.Fragment,null,u.a.createElement("div",null,this.props.isLoading&&u.a.createElement(s.Fragment,null,u.a.createElement(He.PageHeader,null,u.a.createElement(He.PageHeaderTitle,{title:this.props.noItems})),u.a.createElement(xt.b,null))),this.props.items.length>0&&u.a.createElement(ze.DataList,{"aria-label":"Expandable data list"},this.props.items.map((function(t,n){return u.a.createElement(Rt,{key:t.id,item:t,idx:n,isActive:0===n,isExpanded:e.isExpanded("request-".concat(t.id)),toggleExpand:e.toggleExpand})}))))}}]),t}(s.Component);Pt.propTypes={isLoading:m.a.bool,items:m.a.array,noItems:m.a.string,active_request:m.a.number},Pt.defaultProps={items:[]};var wt=Pt,Ct=function(e){var t=e.request;return u.a.createElement(s.Fragment,null,u.a.createElement(Se.Title,{size:"sm",style:{paddingLeft:"32px"}}," Request transcript "),u.a.createElement(wt,{items:t.children&&t.children.length>0?t.children:[t]}))};Ct.propTypes={request:m.a.shape({content:m.a.object,children:m.a.array}).isRequired};var Dt=Ct,kt=n(353);function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Nt={isFetching:!0},_t=function(e,t){switch(t.type){case"setFetching":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?St(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isFetching:t.payload});default:return e}},Ft=function(){var e=Object(s.useReducer)(_t,Nt),t=i()(e,2),n=t[0].isFetching,a=t[1],c=Object(d.useSelector)((function(e){var t=e.requestReducer,n=t.requestContent;return{selectedRequest:t.selectedRequest,requestContent:n}})),o=c.selectedRequest,l=c.requestContent,p=Object(f.m)().id,m=Object(f.l)(),b=Object(d.useDispatch)();Object(s.useEffect)((function(){var e,t;Promise.all([b((e=p,{type:E.g,payload:_(e,t)})),b(V(p))]).then((function(){return a({type:"setFetching",payload:!1})}))}),[]);return u.a.createElement(s.Fragment,null,u.a.createElement(f.d,{exact:!0,path:"/requests/detail/:id/add_comment",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Add Comment",closeUrl:m.url}))}}),u.a.createElement(f.d,{exact:!0,path:"/requests/detail/:id/approve",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Approve",closeUrl:m.url}))}}),u.a.createElement(f.d,{exact:!0,path:"/requests/detail/:id/deny",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Deny",closeUrl:m.url}))}}),u.a.createElement(kt.a,{breadcrumbs:[{title:"Request Queue",to:"/requests",id:"requests"}],paddingBottom:!0},u.a.createElement(kt.b,{title:"Request ".concat(p)})),u.a.createElement(Ce.Section,{type:"content"},u.a.createElement(Pe.Grid,{gutter:"md"},n||!o||0===Object.keys(o).length?u.a.createElement(Ce.Section,{style:{backgroundColor:"white",minHeight:"100%"}},u.a.createElement(xt.c,null)):u.a.createElement(s.Fragment,null,u.a.createElement(we.GridItem,{md:2,className:"detail-pane"},u.a.createElement(ke,{request:o,requestContent:l})),u.a.createElement(we.GridItem,{md:10,className:"detail-pane"},u.a.createElement(Dt,{request:o,url:m.url}))))))},Lt=n(368),At=n(338),It=n(537),Vt=n(387),Bt=n(43);function Kt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Mt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Kt(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ut=[{title:"Name",cellFormatters:[y.b]},"Requester","Opened","Updated","Status","Decision"],Gt=Object(At.a)((function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:T.a;n(!0),t(I(e,a,r)).then((function(){return n(!1)}))}),1e3),Ht={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},zt=function(e,t){switch(t.type){case"setFetching":return Mt({},e,{isFetching:t.payload});case"setFilterValue":return Mt({},e,{filterValue:t.payload});case"setFilteringFlag":return Mt({},e,{isFiltering:t.payload});default:return e}},Jt=function(){var e=Object(s.useReducer)(zt,Ht),t=i()(e,2),n=t[0],a=n.filterValue,c=n.isFetching,o=n.isFiltering,l=t[1],p=Object(d.useSelector)((function(e){return e.requestReducer.requests})),m=p.data,y=p.meta,h=Object(s.useContext)(Bt.a).roles,g=Object(d.useDispatch)(),v=Object(f.k)();Object(s.useEffect)((function(){g(I(a,T.a,Object(ve.a)(h))).then((function(){return l({type:"setFetching",payload:!1})})),Object(ve.d)()}),[]);var O=function(e){l({type:"setFilterValue",payload:e}),Gt(e,g,(function(e){return l({type:"setFilteringFlag",payload:e})}),Mt({},y,{offset:0}),Object(ve.a)(h))},q=[{eventKey:0,title:"Request queue",name:"/requests"},{eventKey:1,title:"Approval processes",name:"/workflows"}],j=function(){return u.a.createElement(s.Fragment,null,u.a.createElement(f.d,{exact:!0,path:"/requests/add_comment/:id",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Add Comment",postMethod:I}))}}),u.a.createElement(f.d,{exact:!0,path:"/requests/approve/:id",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Approve",postMethod:I}))}}),u.a.createElement(f.d,{exact:!0,path:"/requests/deny/:id",render:function(e){return u.a.createElement(be,r()({},e,{actionType:"Deny",postMethod:I}))}}))},R=function(e){return e&&e.id&&function(e){return!e||!e.state||(!Object(ve.c)(e.state)||e.number_of_children>0)}(e)?null:[{title:"Comment",onClick:function(){return v.push("/requests/add_comment/".concat(e.id))}}]},x=function(e,t){l({type:"setFetching",payload:!0}),g(I(a,t,Object(ve.a)(h))).then((function(){return l({type:"setFetching",payload:!1})})).catch((function(){return l({type:"setFetching",payload:!1})}))},P=function(e,t,n){g(function(e){return{type:E.c,payload:e}}(e)),t((function(t){return n(t,e)}))};return u.a.createElement(f.g,null,u.a.createElement(f.d,{path:"/requests/detail/:id",render:function(e){return u.a.createElement(Ft,e)}}),u.a.createElement(f.d,{path:"/requests",render:function(){return u.a.createElement(s.Fragment,null,u.a.createElement(kt.a,null,u.a.createElement(kt.b,{title:"Approval"}),Object(ve.b)(h)&&u.a.createElement(Lt.a,{tabItems:q})),u.a.createElement(xe.a,{data:m,createRows:Re,columns:Ut,fetchData:x,routes:j,actionResolver:R,titlePlural:"requests",titleSingular:"request",pagination:y,handlePagination:x,filterValue:a,onFilterChange:O,isLoading:c||o,onCollapse:P,renderEmptyState:function(){return u.a.createElement(Vt.a,{title:""===a?"No requests":"No results found",Icon:It.SearchIcon,PrimaryAction:function(){return""!==a?u.a.createElement(b.Button,{onClick:function(){return O("")},variant:"link"},"Clear all filters"):null},description:""===a?"":"No results match the filter criteria. Remove all filters or clear all filters to show results."})}}))}}))};Jt.propTypes={history:m.a.shape({push:m.a.func.isRequired}),requests:m.a.array,isLoading:m.a.bool},Jt.defaultProps={requests:[],isLoading:!1};t.default=Jt},338:function(e,t,n){"use strict";var a=n(352);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(a.a)(e,t,n)}},351:function(e,t,n){},353:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),i=n.n(c),o=n(144),l=n(145),s=n(140),u=n(141),p=n(41),m=n(44),d=n(366),f=n(367),b=function(e){var t=e.breadcrumbs;return t?r.a.createElement(d.Breadcrumb,null,Object.values(t).map((function(e){return r.a.createElement(f.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r.a.createElement(m.NavLink,{exact:!0,to:e.to},e.title)||e.title)}))):null};b.propTypes={breadcrumbs:i.a.arrayOf(i.a.shape({title:i.a.string.isRequired,isActive:i.a.bool,to:i.a.string}))};var y=b;n(365);n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return h}));var E=function(e){var t=e.children,n=e.breadcrumbs,a=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(a?"pf-u-pb-sm":""," top-toolbar")},n&&r.a.createElement(o.Level,{className:"pf-u-mb-md"},r.a.createElement(y,{breadcrumbs:n})),t)};E.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired,breadcrumbs:i.a.array,paddingBottom:i.a.bool},E.defaultProps={paddingBottom:!1};var h=function(e){var t=e.title,n=e.description,c=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement(o.Level,null,r.a.createElement(l.LevelItem,null,r.a.createElement(u.TextContent,{className:"pf-u-mb-sm"},r.a.createElement(s.Text,{component:s.TextVariants.h1},t||r.a.createElement(p.d,null))),n&&r.a.createElement(u.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},r.a.createElement(s.Text,{component:s.TextVariants.p},n))),c))};h.propTypes={title:i.a.string,description:i.a.string,children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])}},365:function(e,t,n){},368:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),i=n.n(c),o=n(18),l=n(362),s=n(361),u=function(e){var t=e.history.push,n=e.location.pathname,a=e.tabItems,c=a.find((function(e){var t=e.name;return n.includes(t)}));return r.a.createElement(l.Tabs,{className:"pf-u-mt-sm",activeKey:c?c.eventKey:0,onSelect:function(e,n){return t(a[n].name)}},a.map((function(e){return r.a.createElement(s.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}),history:i.a.shape({push:i.a.func.isRequired}),tabItems:i.a.array.isRequired},t.a=Object(o.o)(u)},387:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),i=n.n(c),o=(n(72),n(435)),l=n(436),s=n(437),u=n(438),p=n(140),m=n(141),d=n(342),f=(n(44),function(e){var t=e.title,n=e.Icon,a=e.description,c=e.PrimaryAction,i=e.renderDescription;return r.a.createElement(d.EmptyTable,{centered:!0,"aria-label":"No records"},r.a.createElement(o.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(l.EmptyStateIcon,{icon:n}),r.a.createElement(m.TextContent,null,r.a.createElement(p.Text,{component:p.TextVariants.h1},t)),r.a.createElement(s.EmptyStateBody,null,a,i()),r.a.createElement(u.EmptyStateSecondaryActions,null,c&&r.a.createElement(c,null))))});f.defaultProps={renderDescription:function(){return null}},f.propTypes={title:i.a.string.isRequired,Icon:i.a.any.isRequired,description:i.a.string.isRequired,PrimaryAction:i.a.any,renderDescription:i.a.func},t.a=f;i.a.string.isRequired,i.a.string.isRequired},390:function(e,t,n){"use strict";var a=n(3),r=n.n(a),c=n(45),i=n.n(c),o=n(0),l=n.n(o),s=n(1),u=n.n(s),p=n(369),m=n(371),d=n(340),f=n(144),b=n(145),y=n(335),E=n(455),h=n(454),g=n(73),v=n(341),O=n.n(v),q=n(146),j=n.n(q),T=n(334),R=function(e){var t=e.searchValue,n=e.onFilterChange,a=e.placeholder,r=e.isClearable;return l.a.createElement(d.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(T.TextInput,{placeholder:a,value:t,type:"text",onChange:n,"aria-label":a}),l.a.createElement("span",{className:"filter-icons-container"},r&&t&&l.a.createElement(j.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return n("")}})||l.a.createElement(O.a,null))))};R.propTypes={onFilterChange:u.a.func.isRequired,placeholder:u.a.string,searchValue:u.a.string,isClearable:u.a.bool},R.defaultProps={searchValue:"",isClearable:!1};var x=R,P=n(342),w=n(41),C=n(31),D=n.n(C),k=n(50),S=n.n(k),N=n(352),_=n(149),F=function(e){var t=e.meta,n=t.limit,a=t.count,r=t.offset,c=e.apiProps,i=e.apiRequest,o=e.className,s=e.isCompact,u=S()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:o},l.a.createElement(_.Pagination,D()({perPage:n||50,itemCount:a||0,onPerPageSelect:function(e,t){return i(c,{offset:r,limit:t})},page:Object(g.b)(n,r),onSetPage:function(e,t,a){var r={offset:Object(g.c)(t,n),limit:n},o=function(){return i(c,r)};return a?Object(N.a)(o,250)():o()},direction:"down",isCompact:s},u)))};F.propTypes={meta:u.a.shape({count:u.a.number,limit:u.a.number.isRequired,offset:u.a.number.isRequired}),apiRequest:u.a.func.isRequired,apiProps:u.a.any,className:u.a.string,isCompact:u.a.bool},F.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1};var L=F,A=function(e){var t=e.children;return l.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};A.propTypes={children:u.a.oneOfType([u.a.node,u.a.arrayOf(u.a.node)])};var I=A;function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return K}));var K=function(e){var t=e.isSelectable,n=e.createRows,a=e.columns,r=e.fetchData,c=e.toolbarButtons,s=e.data,u=e.actionResolver,g=e.routes,v=e.titlePlural,O=e.titleSingular,q=e.pagination,j=e.setCheckedItems,T=e.filterValue,R=e.onFilterChange,C=e.isLoading,D=e.onCollapse,k=e.renderEmptyState,S=Object(o.useState)([]),N=i()(S,2),_=N[0],F=N[1];Object(o.useEffect)((function(){F(n(s))}),[s]);var A=function(e,t){return e.map((function(e){return e.id===t?B({},e,{isOpen:!e.isOpen}):B({},e)}))},V=function(e,t){var n=e.map((function(e){return e.id===t?B({},e,{selected:!e.selected}):B({},e)})),a=n.filter((function(e){return e.id&&e.selected}));return j(a),n};return l.a.createElement(P.Section,{type:"content","page-type":"tab-".concat(v),id:"tab-".concat(v)},g(),function(e){return l.a.createElement(p.Toolbar,{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg pf-u-pb-lg top-toolbar"},l.a.createElement(f.Level,{style:{flex:1}},l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(x,{onFilterChange:R,searchValue:T,isClearable:!0,placeholder:"Filter by ".concat(O)}),c())),l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(m.ToolbarGroup,null,l.a.createElement(d.ToolbarItem,null,l.a.createElement(L,{apiRequest:r,isDisabled:e,meta:q,isCompact:!0})))))))}(C),C&&l.a.createElement(w.b,null),C||0!==_.length?l.a.createElement(o.Fragment,null,!C&&l.a.createElement(y.b,{"aria-label":"".concat(v," table"),onCollapse:function(e,t,n,a){var r=a.id;return D?D(r,F,A):F((function(e){return A(e,r)}))},rows:_,cells:a,onSelect:t&&function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=a.id;return F(-1===n?_.map((function(e){return B({},e,{selected:t})})):function(e){return V(e,r)})},actionResolver:u,className:"table-fix"},l.a.createElement(E.a,null),l.a.createElement(h.a,null)),q.count>0&&l.a.createElement(I,null,l.a.createElement(L,{dropDirection:"up",meta:q,apiRequest:r}))):k())};K.propTypes={isSelectable:u.a.bool,createRows:u.a.func.isRequired,columns:u.a.array.isRequired,toolbarButtons:u.a.func,fetchData:u.a.func.isRequired,data:u.a.array,pagination:u.a.shape({limit:u.a.number,offset:u.a.number,count:u.a.number}),titlePlural:u.a.string,titleSingular:u.a.string,routes:u.a.func,actionResolver:u.a.func,setCheckedItems:u.a.func,filterValue:u.a.string,onFilterChange:u.a.func,isLoading:u.a.bool,onCollapse:u.a.func,renderEmptyState:u.a.func},K.defaultProps={requests:[],isLoading:!1,pagination:g.a,toolbarButtons:function(){return null},isSelectable:null,routes:function(){return null},renderEmptyState:function(){return null}}}}]);
//# sourceMappingURL=../sourcemaps/requests.js.map