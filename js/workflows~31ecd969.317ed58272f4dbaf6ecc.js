(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{643:function(e,t,n){"use strict";n.r(t);var r=n(140),a=n.n(r),o=n(58),i=n.n(o),l=n(7),c=n.n(l),s=n(0),u=n.n(s),p=n(69),f=n(12),d=n(45),m=n(545),w=n(546),v=n(50),b=n(504),h=n.n(b),y=n(55),g=n(216),O=n(10),E=n(64),k=n.n(E),j=n(106),S=n.n(j),T=n(145),M=n(139),P=n(62),x=Object(T.f)(),R=Object(T.e)();function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M.a,n=arguments.length>2?arguments[2]:void 0,r="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),a="&filter[name][contains_i]=".concat(e),o=n?"&sort_by=".concat(n.property,":").concat(n.direction):"";return Object(T.b)().get("".concat(P.a,"/workflows/?").concat(a).concat(r).concat(o))}function C(e){return D.apply(this,arguments)}function D(){return(D=S()(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.showWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return N.apply(this,arguments)}function N(){return(N=S()(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return W.apply(this,arguments)}function W(){return(W=S()(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=S()(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _,I=function(e){return function(t,n){var r=n().workflowReducer,a=r.sortBy,o=r.workflows,i=r.filterValue,l=e;if(!e&&o){var c=o.meta;l={limit:c.limit,offset:c.offset}}return t({type:O.l,payload:q(i,l,a)})}},A=function(e){return{type:O.k,payload:C(e)}},B=function(e){return{type:O.a,payload:(t=e,R.listTemplates().then((function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id})).then((function(e){return x.addWorkflowToTemplate(e,t,{})}))),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding approval process",description:"The approval process was added successfully."}}}};var t},L=function(e){return{type:O.t,payload:(t=e,x.updateWorkflow(t.id,t)),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating approval process",description:"The approval process was updated successfully."}}}};var t},G=function(e){return{type:O.m,payload:F(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval process",description:"The approval process was removed successfully."}}}}},U=function(e){return{type:O.n,payload:V(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval processes",description:"The selected approval processes were removed successfully."}}}}},z=function(e){return{type:O.q,payload:e}},X=n(154),J=n.n(X),Q=n(640),Z=n(143),H=n(46),K=n(566),Y=n(156),$=n(212),ee=n(11),te=n(130),ne=(_=function(e,t){return(_=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}_(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),re=function(){return(re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ae=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},oe=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,a++)r[a]=o[i];return r},ie=n.n(te).a||te;function le(e,t){return Object($.a)(re(re({},ee.a),{locale:"en"}),Object(ee.b)(),e,t)}var ce=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return ne(t,e),t.prototype.shouldComponentUpdate=function(e){var t=this.props,n=t.values,r=ae(t,["values"]),a=e.values,o=ae(e,["values"]);return!ie(a,n)||!ie(r,o)},t.prototype.render=function(){var e=this;return s.createElement(Y.a.Consumer,null,(function(t){e.props.defaultMessage||Object(ee.f)(t);var n=t||{},r=n.formatMessage,a=void 0===r?le:r,o=n.textComponent,i=void 0===o?s.Fragment:o,l=e.props,c=l.id,u=l.description,p=l.defaultMessage,f=l.values,d=l.children,m=l.tagName,w=void 0===m?i:m,v=a({id:c,description:u,defaultMessage:p},f);return Array.isArray(v)||(v=[v]),"function"==typeof d?d.apply(void 0,v):w?s.createElement.apply(s,oe([w,null],v)):v}))},t.displayName="FormattedMessage",t.defaultProps={values:{}},t}(s.Component),se=n(245),ue=n(555),pe=n.n(ue),fe=n(561),de=n.n(fe),me=n(572),we=Object(me.a)((function(e,t){return function(e){return q(e)}(e).then((function(n){var r=n.data;if(t?r.find((function(n){return e===n.name&&t!==n.id})):r.find((function(t){return e===t.name})))throw"Name has already been taken"}))})),ve=function(e){return[{component:pe.a.TEXT_FIELD,name:"name",isRequired:!0,id:"workflow-name",label:u.a.createElement(ce,{id:"create-approval-process-name-label",defaultMessage:"Approval process name"}),validate:[function(t){return we(t,e)},{type:de.a.REQUIRED,message:u.a.createElement(ce,{id:"approval-procces-name-warning",defaultMessage:"Enter a name for the approval process"})}]},{component:pe.a.TEXTAREA,name:"description",id:"workflow-description",label:u.a.createElement(ce,{id:"create-approval-process-description-label",defaultMessage:"Description"})}]},be=Object(me.a)((function(e){var t="&name=".concat(e);return Object(T.b)().get("".concat(P.b,'/groups/?role_names=",Approval Administrator,Approval Approver,"\n  ').concat(e&&e.length>0?t:"")).then((function(e){var t=e.data;return t&&t.length>0?t.map((function(e){var t=e.uuid;return{label:e.name,value:t}})):void 0}))})),he=function(e){return{component:pe.a.SELECT,name:"wfGroups",label:u.a.createElement(ce,{id:"create-approval-process-set-groups",defaultMessage:"Set groups"}),loadOptions:be,noValueUpdates:!0,isMulti:!0,isSearchable:!0,simpleValue:!1,menuIsPortal:!0,isClearable:!0,placeholder:e.formatMessage({id:"create-approval-process-set-groups-placeholder",defaultMessage:"Select..."})}},ye=function(e){return{fields:[{name:"wizard",title:e.formatMessage({id:"create-approval-process-title",defaultMessage:"Create approval process"}),component:pe.a.WIZARD,inModal:!0,fields:[{name:"general-information",showTitle:!0,customTitle:u.a.createElement(se.Title,{size:"md"}," ",u.a.createElement(ce,{id:"enter-info",defaultMessage:"Enter your information"})," "),title:e.formatMessage({id:"create-approval-process-gen-info",defaultMessage:"General information"}),nextStep:"set-groups",fields:ve()},{name:"set-groups",nextStep:"review",title:e.formatMessage({id:"create-approval-process-set-groups",defaultMessage:"Set groups"}),fields:[he(e)]},{name:"review",title:e.formatMessage({id:"create-approval-process-review",defaultMessage:"Review"}),fields:[{name:"summary",component:"summary"}]}]}]}};function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee=function(){var e=Object(p.useDispatch)(),t=Object(f.g)().push,n=Object(Q.a)();return u.a.createElement(K.a,{showFormControls:!1,onSubmit:function(n){var r=n.wfGroups,a=void 0===r?[]:r,o=J()(n,["wfGroups"]);return t(H.a.workflows.index),e(B(Oe(Oe({},o),{},{group_refs:a.length>0?a.map((function(e){return{name:e.label,uuid:e.value}})):[]}))).then((function(){return e(I())}))},onCancel:function(){e(Object(Z.addNotification)({variant:"warning",title:"Creating approval process",dismissable:!0,description:"Creating approval process was cancelled by the user."})),t(H.a.workflows.index)},schema:ye(n)})},ke=n(1),je=n.n(ke),Se=n(144),Te=n(506),Me=n(578),Pe=n.n(Me),xe=n(60),Re=n(559),qe=function(e){var t=Object(p.useSelector)((function(e){return{workflows:e.workflowReducer.workflows}}),p.shallowEqual).workflows;return t&&t.data&&t.data.find((function(t){return t.id===e}))};function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Fe=function(e,t,n){return"info"===e?{fields:[{component:pe.a.SUB_FORM,title:u.a.createElement("span",{className:"pf-c-title pf-m-md"},u.a.createElement(ce,{id:"edit-info-title-subform",defaultMessage:"Make any changes to approval process {name}",values:{name:t}})),name:"info-sub",fields:ve(n)}]}:{fields:[{component:pe.a.SUB_FORM,title:u.a.createElement("span",{className:"pf-c-title pf-m-md"},u.a.createElement(ce,{id:"edit-sequence-title-subform",defaultMessage:"Set the sequence for the approval process {name}",values:{name:t}})),name:"info-sub",fields:[{component:pe.a.TEXT_FIELD,name:"sequence",label:u.a.createElement(ce,{id:"sequence-label",defaultMessage:"Enter sequence"}),isRequired:!0,validate:[{type:de.a.REQUIRED}]}]}]}},Ne=function(e,t){var n=t.type,r=t.initialValues,a=t.schema;switch(n){case"loaded":return De(De({},e),{},{initialValues:r,schema:a,isLoading:!1});default:return e}},Ve=function(e){var t=e.addNotification,n=e.fetchWorkflow,r=e.updateWorkflow,o=e.postMethod,l=e.editType,c=Object(s.useReducer)(Ne,{isLoading:!0}),p=i()(c,2),d=p[0],m=p[1],w=Object(f.g)().push,v=Object(Re.a)(["workflow"]),b=i()(v,1)[0].workflow,h=qe(b),y=Object(Q.a)();Object(s.useEffect)((function(){h?m({type:"loaded",initialValues:h,schema:Fe(l,h.name,y,h.id)}):n(b).then((function(e){return m({type:"loaded",initialValues:e.value,schema:Fe(l,e.value.name,y,e.value.id)})}))}),[]);var g=function(){var e="sequence"===l?{title:"Edit approval process's sequence",description:"Edit approval process's sequence was cancelled by the user."}:{title:"Edit approval process's information",description:"Edit approval process's information was cancelled by the user."};t({variant:"warning",title:e.title,dismissable:!0,description:e.description}),w(H.a.workflows.index)};return u.a.createElement(Te.Modal,{title:"sequence"===l?"Edit sequence":"Edit information",width:"40%",isOpen:!0,onClose:g},d.isLoading&&u.a.createElement(xe.e,null),!d.isLoading&&u.a.createElement(K.a,{FormTemplate:function(e){return u.a.createElement(Pe.a,a()({},e,{submitLabel:u.a.createElement(ce,{id:"save",defaultMessage:"Save"}),buttonClassName:"pf-u-mt-0",disableSubmit:["submitting"]}))},onCancel:g,onSubmit:function(e){var t=e.name,n=e.description,a=e.sequence;return r({id:b,name:t,description:n,sequence:a}).then((function(){return o()})).then((function(){return w(H.a.workflows.index)}))},initialValues:d.initialValues,schema:d.schema}))};Ve.defaultProps={editType:"info"},Ve.propTypes={addNotification:je.a.func.isRequired,fetchWorkflow:je.a.func.isRequired,postMethod:je.a.func.isRequired,updateWorkflow:je.a.func.isRequired,editType:je.a.string};var We=Object(p.connect)(null,(function(e){return Object(Se.a)({addNotification:Z.addNotification,addWorkflow:B,updateWorkflow:L,fetchWorkflow:A},e)}))(Ve);function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ae=function(e,t){return{fields:[Ie(Ie({},he(t)),{},{label:u.a.createElement(ce,{id:"edit-groups-select-label",defaultMessage:"Add or remove {name}'s groups",values:{name:e}})})]}},Be=function(e){var t=e.group_refs.map((function(e){return{label:e.name,value:e.uuid}}));return Ie(Ie({},e),{},{wfGroups:t})},Le=function(e,t){var n=t.type,r=t.initialValues,a=t.intl;switch(n){case"loaded":return Ie(Ie({},e),{},{schema:Ae(r.name,a),initialValues:Be(r),isLoading:!1});default:return e}},Ge=function(e){var t=e.addNotification,n=e.fetchWorkflow,r=e.updateWorkflow,o=e.postMethod,l=Object(s.useReducer)(Le,{isLoading:!0}),c=i()(l,2),p=c[0],d=c[1],m=Object(Q.a)(),w=Object(f.g)().push,v=Object(Re.a)(["workflow"]),b=i()(v,1)[0].workflow,h=qe(b);Object(s.useEffect)((function(){h?d({type:"loaded",initialValues:Be(h),intl:m}):n(b).then((function(e){return d({type:"loaded",initialValues:Be(e.value),intl:m})}))}),[]);var y=function(){t({variant:"warning",title:"Edit approval process's groups",dismissable:!0,description:"Edit approval process's groups was cancelled by the user."}),w("/workflows")};return u.a.createElement(Te.Modal,{title:"Edit approval process's groups",width:"40%",isOpen:!0,onClose:y},p.isLoading?u.a.createElement(xe.e,null):u.a.createElement(K.a,{FormTemplate:function(e){return u.a.createElement(Pe.a,a()({},e,{submitLabel:u.a.createElement(ce,{id:"save",defaultMessage:"Save"}),buttonClassName:"pf-u-mt-0",disableSubmit:["submitting"]}))},onCancel:y,onSubmit:function(e){var t=e.wfGroups,n={group_refs:t?t.map((function(e){return{name:e.label,uuid:e.value}})):[]};return r(Ie({id:b},n)).then((function(){return o()})).then((function(){return w("/workflows")}))},initialValues:p.initialValues,schema:p.schema}))};Ge.propTypes={addNotification:je.a.func.isRequired,fetchWorkflow:je.a.func.isRequired,postMethod:je.a.func.isRequired,updateWorkflow:je.a.func.isRequired};var Ue=Object(p.connect)(null,(function(e){return Object(Se.a)({addNotification:Z.addNotification,addWorkflow:B,updateWorkflow:L,fetchWorkflow:A},e)}))(Ge),ze=n(519),Xe=n(518),Je=n(44),Qe=n(68),Ze=n(534),He=n(544),Ke=n.n(He),Ye=function(e){var t=e.ids,n=e.removeWorkflow,r=e.removeWorkflows,a=e.fetchData,o=e.setSelectedWorkflows,l=Object(s.useState)(!1),c=i()(l,2),p=c[0],d=c[1],m=Object(f.g)().push,w=Object(Re.a)(["workflow"]),b=i()(w,1)[0].workflow;if(!(b||t&&0!==t.length))return null;var h=function(){return m(H.a.workflows.index)};return u.a.createElement(Te.Modal,{isOpen:!0,isSmall:!0,width:"40%",title:"",onClose:h,actions:[u.a.createElement(v.Button,{id:"cancel-remove-workflow",key:"cancel",variant:"secondary",type:"button",onClick:h},"Cancel"),u.a.createElement(v.Button,{id:"submit-remove-workflow",key:"submit",variant:"primary",type:"button",isDisabled:p,onClick:function(){return d(!0),(b?n(b):r(t)).catch((function(){return d(!1)})).then((function(){return m(H.a.workflows.index)})).then((function(){return o([])})).then((function(){return a()}))}},p?u.a.createElement(u.a.Fragment,null,u.a.createElement(Ze.Spinner,{size:"sm"})," Removing "):"Remove")]},u.a.createElement(ze.Split,{gutter:"md"},u.a.createElement(Xe.SplitItem,null,u.a.createElement(Ke.a,{size:"xl",fill:"#f0ab00"})),u.a.createElement(Xe.SplitItem,null,u.a.createElement(Qe.TextContent,null,u.a.createElement(Je.Text,{component:Je.TextVariants.p},u.a.createElement(ce,{id:"remove-workflow-modal",defaultMessage:"Removing {count, number} {count, plural,\n              one {approval process}\n              other {approval processes}\n            }",values:{count:b?1:t.length}}))))))};Ye.propTypes={removeWorkflows:je.a.func.isRequired,removeWorkflow:je.a.func.isRequired,fetchData:je.a.func.isRequired,setSelectedWorkflows:je.a.func.isRequired,ids:je.a.array};var $e=Object(p.connect)(null,(function(e){return Object(Se.a)({removeWorkflow:G,removeWorkflows:U},e)}))(Ye),et=n(38),tt=n.n(et),nt=function(e){var t=e.description,n=e.groupRefs;return u.a.createElement(s.Fragment,null,u.a.createElement(Qe.TextContent,null,u.a.createElement(Je.Text,{className:"data-table-detail heading",component:Je.TextVariants.small},"Description"),u.a.createElement(Je.Text,{className:"data-table-detail content",component:Je.TextVariants.h5},t)),u.a.createElement(Qe.TextContent,null,u.a.createElement(s.Fragment,null,u.a.createElement(Je.Text,{className:"data-table-detail heading",component:Je.TextVariants.small},"Groups"),u.a.createElement(Je.Text,{className:"data-table-detail content",component:Je.TextVariants.h5},function(e){return e.map((function(e){return e.name}))}(n).join(",")))))};nt.propTypes={description:je.a.string,groupRefs:je.a.array.isRequired,id:je.a.string.isRequired};var rt=nt,at=function(e){return e.reduce((function(e,t,n){var r=t.id,a=t.name,o=t.description,i=t.sequence,l=t.group_refs;return[].concat(tt()(e),[{id:r,isOpen:!1,selected:!1,cells:[a,o,i]},{parent:2*n,cells:[{title:u.a.createElement(rt,{description:o,groupRefs:l,id:r})}]}])}),[])},ot=n(585),it=n(101),lt=n(579),ct=n(31),st=n(586);function ut(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ut(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ft=[{title:"Name",cellFormatters:[y.b],transforms:[g.a]},{title:"Description",transforms:[g.a]},{title:"Sequence",transforms:[g.a]}],dt=Object(me.a)((function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:M.a;return n(!0),t(z(e)),t(I(r)).then((function(){return n(!1)}))}),1e3),mt=function(e){return e?[{category:"Name",key:"name",chips:[{name:e,value:e}]}]:[]},wt=function(e,t){switch(t.type){case"setFetching":return pt(pt({},e),{},{isFetching:t.payload});case"setFilterValue":return pt(pt({},e),{},{filterValue:t.payload});case"setFilteringFlag":return pt(pt({},e),{},{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(s.useState)([]),t=i()(e,2),n=t[0],r=t[1],o=Object(p.useSelector)((function(e){var t=e.workflowReducer;return{workflows:t.workflows,sortBy:t.sortBy,filterValueRedux:t.filterValue}}),p.shallowEqual),l=o.workflows,c=l.data,b=l.meta,y=o.sortBy,g=o.filterValueRedux,E=Object(s.useReducer)(wt,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{filterValue:e,isOpen:!1,isFetching:!0,isFiltering:!1}}(g)),k=i()(E,2),j=k[0],S=j.filterValue,T=j.isFetching,P=j.isFiltering,x=k[1],R=Object(p.useDispatch)(),q=Object(f.g)(),C=function(e){return x({type:"setFetching",payload:!0}),R(I(e)).then((function(){return x({type:"setFetching",payload:!1})})).catch((function(){return x({type:"setFetching",payload:!1})}))};Object(s.useEffect)((function(){C(M.a),Object(ct.g)()}),[]);var D=function(e){x({type:"setFilterValue",payload:e}),dt(e,R,(function(e){return x({type:"setFilteringFlag",payload:e})}),pt(pt({},b),{},{offset:0}))},F=n.length>0;return u.a.createElement(s.Fragment,null,u.a.createElement(it.a,null,u.a.createElement(it.b,{title:"Approval"}),u.a.createElement(lt.a,null)),u.a.createElement(ot.a,{sortBy:y,onSort:function(e,t,n,r){var a=r.property;return R(function(e){return{type:O.s,payload:e}}({index:t,direction:n,property:a})),C()},data:c,isSelectable:!0,createRows:at,columns:ft,fetchData:C,routes:function(){return u.a.createElement(s.Fragment,null,u.a.createElement(f.b,{exact:!0,path:H.a.workflows.add,render:function(e){return u.a.createElement(Ee,a()({},e,{postMethod:C}))}}),u.a.createElement(f.b,{exact:!0,path:H.a.workflows.editInfo,render:function(e){return u.a.createElement(We,a()({editType:"info"},e,{postMethod:C}))}}),u.a.createElement(f.b,{exact:!0,path:H.a.workflows.editGroups,render:function(e){return u.a.createElement(Ue,a()({editType:"groups"},e,{postMethod:C}))}}),u.a.createElement(f.b,{exact:!0,path:H.a.workflows.editSequence,render:function(e){return u.a.createElement(We,a()({editType:"sequence"},e,{postMethod:C}))}}),u.a.createElement(f.b,{exact:!0,path:H.a.workflows.remove,render:function(e){return u.a.createElement($e,a()({},e,{ids:n,fetchData:C,setSelectedWorkflows:r}))}}))},actionResolver:function(e,t){return t.rowIndex%2==1?null:[{title:"Edit info",component:"button",onClick:function(e,t,n){return q.push({pathname:H.a.workflows.editInfo,search:"?workflow=".concat(n.id)})}},{title:"Edit groups",component:"button",onClick:function(e,t,n){return q.push({pathname:H.a.workflows.editGroups,search:"?workflow=".concat(n.id)})}},{title:"Edit sequence",component:"button",onClick:function(e,t,n){return q.push({pathname:H.a.workflows.editSequence,search:"?workflow=".concat(n.id)})}},{title:"Delete",component:"button",onClick:function(e,t,n){return q.push({pathname:H.a.workflows.remove,search:"?workflow=".concat(n.id)})}}]},titlePlural:"approval processes",titleSingular:"approval process",pagination:b,setCheckedItems:function(e){return r(e.map((function(e){return e.id})))},toolbarButtons:function(){return u.a.createElement(m.ToolbarGroup,{className:"pf-u-pl-lg top-toolbar"},u.a.createElement(w.ToolbarItem,null,u.a.createElement(d.b,{id:"add-workflow-link",to:{pathname:H.a.workflows.add}},u.a.createElement(v.Button,{variant:"primary","aria-label":"Create approval process"},"Create approval process"))),u.a.createElement(w.ToolbarItem,null,u.a.createElement(d.b,{id:"remove-multiple-workflows",className:F?"":"disabled-link",to:{pathname:H.a.workflows.remove}},u.a.createElement(v.Button,{variant:"link",isDisabled:!F,style:{color:F?"var(--pf-global--danger-color--100)":"var(--pf-global--disabled-color--100)"},"aria-label":"Delete approval process"},"Delete"))))},filterValue:S,onFilterChange:D,isLoading:T||P,onCollapse:function(e,t,n){R(function(e){return{type:O.e,payload:e}}(e)),t((function(t){return n(t,e)}))},renderEmptyState:function(){return u.a.createElement(st.a,{title:""===S?"No approval processes":"No results found",Icon:h.a,PrimaryAction:function(){return""!==S?u.a.createElement(v.Button,{onClick:function(){return D("")},variant:"link"},"Clear all filters"):null},description:""===S?"No approval processes.":"No results match the filter criteria. Remove all filters or clear all filters to show results."})},activeFiltersConfig:{filters:mt(S),onDelete:function(){return D("")}}}))}}}]);
//# sourceMappingURL=../sourcemaps/workflows~31ecd969.js.map