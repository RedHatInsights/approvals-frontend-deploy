(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{2197:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a.n(n),o=a(71),i=a.n(o),c=a(3),l=a.n(c),u=a(0),s=a.n(u),p=a(1),f=a.n(p),m=a(17),d=a(19),b=a(42),h=a(379),g=a(345),v=a(70),y=a(346),w=a.n(y),E=a(350),O=a(4),k=a(36),j=a.n(k),S=a(51),T=a.n(S),R=a(81),q=a(24),x=Object(R.d)();function C(){return P.apply(this,arguments)}function P(){return(P=T()(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.listGroups();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return D.apply(this,arguments)}function D(){return(D=T()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",Promise.all(t.map(function(){var e=T()(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getGroup(t);case 3:return a=e.sent,e.abrupt("return",a.name);case 7:if(e.prev=7,e.t0=e.catch(0),404===e.t0.status){e.next=13;break}throw e.t0;case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=a(72);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var V=Object(R.h)(),W=Object(R.g)();function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N.a,a="&limit=".concat(t.limit,"&offset=").concat(t.offset),n="&filter[name][contains_i]=".concat(e);return Object(R.b)().get("".concat(q.a,"/workflows/?").concat(n).concat(a))}function L(e){return A.apply(this,arguments)}function A(){return(A=T()(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.showWorkflow(t);case 2:return a=e.sent,e.next=5,I(a.group_refs);case 5:return n=e.sent,e.abrupt("return",F({},a,{group_names:n}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return _.apply(this,arguments)}function _(){return(_=T()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.showWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return K.apply(this,arguments)}function K(){return(K=T()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return H.apply(this,arguments)}function H(){return(H=T()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=T()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(e,t){return{type:O.k,payload:B(e,t)}},U=function(e){return{type:O.j,payload:M(e)}},X=function(e){return{type:O.l,payload:L(e)}},Y=function(e){return{type:O.a,payload:(t=e,W.listTemplates().then((function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id})).then((function(e){return V.addWorkflowToTemplate(e,t,{})}))),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding approval process",description:"The approval process was added successfully."}}}};var t},Z=function(e){return{type:O.p,payload:(t=e,V.updateWorkflow(t.id,t)),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating approval process",description:"The approval process was updated successfully."}}}};var t},$=function(e){return{type:O.m,payload:z(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval process",description:"The approval process was removed successfully."}}}}},ee=function(e){return{type:O.n,payload:J(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval processes",description:"The selected approval processes were removed successfully."}}}}},te=a(2186),ae=a(34),ne=a(78),re=a(47),oe=a(333),ie=a(335),ce=a(136),le=a(137),ue=a(331),se=function(e){var t=e.formData,a=t||{name:"",description:"",wfGroups:[]},n=a.name,r=a.description,o=a.wfGroups;return s.a.createElement(u.Fragment,null,s.a.createElement(oe.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(ue.Title,{size:"xl"}," Review ")),s.a.createElement(ie.StackItem,null,s.a.createElement(oe.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(le.TextContent,null,s.a.createElement(ce.Text,{className:"data-table-detail heading",component:ce.TextVariants.h5},"Review and confirm your inputs. If there is anything incorrect, click Back and revise."))),s.a.createElement(ie.StackItem,null,s.a.createElement(ne.Grid,{gutter:"md"},s.a.createElement(re.GridItem,{span:2},s.a.createElement(ce.Text,{className:"data-table-detail heading",component:ce.TextVariants.h5},"Name")),s.a.createElement(re.GridItem,{span:10},s.a.createElement(ce.Text,{className:"data-table-detail content",component:ce.TextVariants.p},n))),s.a.createElement(ne.Grid,{gutter:"md"},s.a.createElement(re.GridItem,{span:2},s.a.createElement(ce.Text,{className:"data-table-detail heading",component:ce.TextVariants.h5},"Description")),s.a.createElement(re.GridItem,{span:10},s.a.createElement(ce.Text,{className:"data-table-detail content",component:ce.TextVariants.p},r))),void 0!==o&&o.map((function(e,t){return s.a.createElement(u.Fragment,{key:"Group-".concat(t)},s.a.createElement(ne.Grid,{gutter:"md"},s.a.createElement(re.GridItem,{span:2},s.a.createElement(ce.Text,{key:e.value,className:"data-table-detail heading",component:ce.TextVariants.h5},"Group ".concat(t+1))),s.a.createElement(re.GridItem,{span:10},s.a.createElement(ce.Text,{key:e.label,className:"data-table-detail content",component:ce.TextVariants.p},"".concat(o[t].label)))))})))))))};se.propTypes={formData:f.a.object};var pe=se,fe=a(83),me=a(44),de=a(338),be=a(406),he=a(343),ge=function(e){return function(e){return B(e)}(e).then((function(t){return t.data.find((function(t){return e===t.name}))?"Name has already been taken":void 0}))},ve=function(e){var t=e.formData,a=e.initialValue,n=e.handleChange,r=e.isValid,o=e.setIsValid,c=e.title,l=void 0===c?void 0:c,p=t.name,f=t.description,m=Object(u.useState)(void 0),d=i()(m,2),b=d[0],h=d[1],g=function(e){h(e),o(!e)},v=function(e){var t,r;!e||e.length<1?(h("Enter a name for the approval process "),o(!1)):a&&a.name===e?(h(void 0),o(!0)):(t=e,r=g,Object(he.a)(ge(t).then((function(e){return r(e)})))),n({name:e})};return s.a.createElement(u.Fragment,null,s.a.createElement(oe.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(ue.Title,{size:"md"}," ",l||"Enter your information"," ")),s.a.createElement(ie.StackItem,null,s.a.createElement(fe.Form,null,s.a.createElement(me.FormGroup,{label:"Approval process name",isRequired:!0,fieldId:"workflow-name",isValid:void 0!==t.name&&t.name.length>0&&r,helperTextInvalid:b||"Enter a name for the approval process"},s.a.createElement(de.TextInput,{isRequired:!0,type:"text",id:"workflow-name",name:"workflow-name","aria-describedby":"workflow-name",value:p,isValid:r,onChange:function(e,t){h(void 0),v(t.currentTarget.value)}})),s.a.createElement(me.FormGroup,{label:"Description",fieldId:"workflow-description"},s.a.createElement(be.TextArea,{type:"text",id:"workflow-description",name:"workflow-description",value:f,onChange:function(e,t){return n({description:t.currentTarget.value})}}))))))};ve.propTypes={name:f.a.string,description:f.a.string,title:f.a.string,formData:f.a.object,handleChange:f.a.func.isRequired,isValid:f.a.bool,setIsValid:f.a.func.isRequired,initialValue:f.a.shape({name:f.a.string})};var ye=ve,we=a(22),Ee=a.n(we),Oe=a(450),ke=a.n(Oe),je=a(451),Se=a.n(je),Te=a(2192),Re=a(40),qe=function(){return{type:O.f,payload:C().then((function(e){var t=e.data;return Ee()(t.map((function(e){return{value:e.uuid,label:e.name}})))}))}},xe=function(e){var t=e.formData,a=e.handleChange,n=e.title,r=Object(u.useState)(!1),o=i()(r,2),c=o[0],l=o[1],p=Object(u.useState)([]),f=i()(p,2),d=f[0],b=f[1],h=Object(u.useState)(1),g=i()(h,2),y=g[0],w=g[1],E=Object(u.useState)([]),O=i()(E,2),k=O[0],j=O[1],S=Object(u.useState)([]),T=i()(S,2),x=T[0],C=T[1],P=Object(m.useSelector)((function(e){return e.groupReducer.groups||[]})),I=Object(m.useDispatch)();Object(u.useEffect)((function(){C(!0),I(qe()).then((function(){return C(!1)}))}),[]),Object(u.useEffect)((function(){b(t.wfGroups?t.wfGroups:[]),w(t.wfGroups?t.wfGroups.length:1)}),[t.wfGroups]);var D=function(e){l(e)},N=function(e){var t=parseInt(e.target.id),n=Ee()(d.filter((function(e,a){return t!==a})));b(n),w(y-1),a({wfGroups:n})},G=function(e){return t=e,Object(R.b)().get("".concat(q.b,"/groups/").concat(t.length>0?"?name=".concat(t):"")).then((function(e){return e.data.map((function(e){var t=e.uuid;return{label:e.name,value:t}}))}));var t},F=function(e){return s.a.createElement(ie.StackItem,{key:"Stack_".concat(e+1)},s.a.createElement(me.FormGroup,{label:"Group ".concat(e+1),fieldId:"".concat(e+1,"_stage_label")},s.a.createElement(ne.Grid,{gutter:"md"},s.a.createElement(re.GridItem,{span:8},s.a.createElement(Te.a,{cacheOptions:!0,isClearable:!0,label:"".concat(e+1," Group"),"aria-label":"".concat(e+1," Group"),onToggle:D,key:"stage-".concat(e+1),onChange:function(t){return n=t,(r=d)[e]=n,b(r),void a({wfGroups:r});var n,r},value:d[e],inpuValue:k,isexpanded:c,loadOptions:Object(he.a)(G),defaultOptions:P,onInputChange:function(e){return t=e.replace(/\W/g,""),void j(t);var t}})),s.a.createElement(re.GridItem,{span:1,style:{display:"flex"}},e>0&&s.a.createElement(v.Button,{variant:"link",isInline:!0,key:e,id:e,onClick:N},s.a.createElement(Se.a,null)," ","Remove")))))};return s.a.createElement(u.Fragment,null,s.a.createElement(oe.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(ue.Title,{size:"md"},n||"Set groups")),s.a.createElement(ie.StackItem,null,x&&s.a.createElement(Re.e,null),!x&&s.a.createElement(oe.Stack,{gutter:"sm"},d.map((function(e,t){return F(t)})),s.a.createElement(ie.StackItem,{style:{borderTop:10}},s.a.createElement(v.Button,{id:"add-workflow-stage",variant:"link",isInline:!0,onClick:function(){b([].concat(Ee()(d),[void 0])),w(y+1)}},s.a.createElement(ke.a,null)," ","Add ".concat(d.length>0?"another":"a"," group")))))))};xe.propTypes={name:f.a.string,description:f.a.string,title:f.a.string,formData:f.a.object,handleChange:f.a.func};var Ce=xe;function Pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Ie=function(){var e=Object(u.useState)({}),t=i()(e,2),a=t[0],n=t[1],r=Object(m.useDispatch)(),o=Object(d.k)().push,c=Object(m.useSelector)((function(e){return e.groupReducer.groups})),p=Object(u.useState)(void 0!==a.name&&a.name.length>0),f=i()(p,2),b=f[0],h=f[1],g=function(e){n(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{},e))},v=[{name:"General information",enableNext:b&&a.name&&a.name.length>0,component:s.a.createElement(ye,{formData:a,handleChange:g,isValid:b,setIsValid:h})},{name:"Set groups",component:s.a.createElement(Ce,{formData:a,handleChange:g,options:c})},{name:"Review",component:s.a.createElement(pe,{formData:a,options:c}),nextButtonText:"Confirm"}];return s.a.createElement(te.Wizard,{title:"Create approval process",isOpen:!0,onClose:function(){r(Object(ae.addNotification)({variant:"warning",title:"Creating approval process",dismissable:!0,description:"Creating approval process was cancelled by the user."})),o("/workflows")},onSave:function(){var e=a.name,t=a.description,n=a.wfGroups,i={name:e,description:t,group_refs:n?n.map((function(e){return e.value})):[]};o("/workflows"),r(Y(i))},steps:v})};Ie.defaultProps={rbacGroups:[],initialValues:{}},Ie.propTypes={history:f.a.shape({push:f.a.func.isRequired}).isRequired,addWorkflow:f.a.func.isRequired,match:f.a.object,addNotification:f.a.func.isRequired,fetchWorkflowWithGroupNames:f.a.func.isRequired,postMethod:f.a.func.isRequired,rbacGroups:f.a.arrayOf(f.a.shape({value:f.a.oneOfType([f.a.number,f.a.string]).isRequired,label:f.a.string.isRequired})).isRequired};var De=Ie,Ne=a(79),Ge=a(372),Fe=a(344),Ve=a(380),We=a(381),Be=function(e){var t=e.formData,a=e.handleChange,n=e.isValid,r=e.setIsValid,o=e.title,i=void 0===o?void 0:o,c=t.sequence;return s.a.createElement(u.Fragment,null,s.a.createElement(oe.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(ue.Title,{size:"md"}," ",i||"Enter your information"," ")),s.a.createElement(ie.StackItem,null,s.a.createElement(fe.Form,null,s.a.createElement(me.FormGroup,{label:"Enter sequence",isRequired:!0,fieldId:"workflow-sequence",isValid:n,helperTextInvalid:"Enter a positive number"},s.a.createElement(de.TextInput,{isRequired:!0,type:"number",id:"workflow-sequence",isValid:n,name:"workflow-sequence","aria-describedby":"workflow-name",value:c,onChange:function(e,t){return function(e){r(e>=0),a({sequence:e})}(t.currentTarget.value)}}))))))};Be.propTypes={sequence:f.a.string,title:f.a.string,formData:f.a.object,handleChange:f.a.func.isRequired,setIsValid:f.a.func.isRequired,isValid:f.a.bool};var Le=Be;a(358);function Ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _e=function(e){var t=e.history.push,a=e.match.params.id,n=e.addNotification,r=e.fetchWorkflow,o=e.updateWorkflow,c=e.postMethod,l=e.workflow,p=e.isFetching,f=e.editType,m=Object(u.useState)({}),d=i()(m,2),b=d[0],h=d[1],g=Object(u.useState)({}),y=i()(g,2),w=y[0],E=y[1],O=Object(u.useState)(!0),k=i()(O,2),j=k[0],S=k[1],T=function(e){return h(Me({},b,{},e))};Object(u.useEffect)((function(){r(a).then((function(e){h(Me({},b,{},e.value)),E(Me({},e.value))}))}),[]);var R=function(){var e="sequence"===f?{title:"Edit approval process's sequence",description:"Edit approval process's sequence was cancelled by the user."}:{title:"Edit approval process's information",description:"Edit approval process's information was cancelled by the user."};n({variant:"warning",title:e.title,dismissable:!0,description:e.description}),t("/workflows")};return s.a.createElement(Fe.Modal,{title:"sequence"===f?"Edit sequence":"Edit information",width:"40%",isOpen:!0,onClose:R},s.a.createElement(oe.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(me.FormGroup,{fieldId:"edit-workflow-info-modal-info"},p&&s.a.createElement(Re.e,null),!p&&("info"===f?s.a.createElement(ye,{formData:b,initialValue:w,handleChange:T,isValid:j,setIsValid:S,title:"Make any changes to approval process ".concat(l.name)}):s.a.createElement(Le,{formData:b,initialValue:w,handleChange:T,isValid:j,setIsValid:S,title:"Set the sequence for the approval process ".concat(l.name)})))),s.a.createElement(ie.StackItem,null,s.a.createElement(Ge.ActionGroup,null,s.a.createElement(Ve.Split,{gutter:"md"},s.a.createElement(We.SplitItem,null,s.a.createElement(v.Button,{"aria-label":"Save",id:"save-edit-workflow-info",variant:"primary",type:"submit",onClick:function(){if(j){var e=b.name,n=b.description,r=b.sequence;o({id:a,name:e,description:n,sequence:r}).then((function(){return c()})).then((function(){return t("/workflows")}))}}},"Save")),s.a.createElement(We.SplitItem,null,s.a.createElement(v.Button,{id:"cancel-edit-workflow-info","aria-label":"Cancel",variant:"secondary",type:"button",onClick:R},"Cancel")))))))};_e.defaultProps={isFetching:!1,editType:"info"},_e.propTypes={history:f.a.shape({push:f.a.func.isRequired}).isRequired,match:f.a.object,addNotification:f.a.func.isRequired,fetchWorkflow:f.a.func.isRequired,postMethod:f.a.func.isRequired,updateWorkflow:f.a.func.isRequired,workflow:f.a.object,id:f.a.string,editType:f.a.string,isFetching:f.a.bool};var ze=Object(d.o)(Object(m.connect)((function(e){var t=e.workflowReducer;return{workflow:t.workflow,isFetching:t.isRecordLoading}}),(function(e){return Object(Ne.a)({addNotification:ae.addNotification,addWorkflow:Y,updateWorkflow:Z,fetchWorkflow:U},e)}))(_e));function Ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ke(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var He=function(e){var t=e.history.push,a=e.match.params.id,n=e.addNotification,r=e.fetchWorkflowWithGroupNames,o=e.updateWorkflow,c=e.postMethod,l=e.isFetching,p=Object(u.useState)({}),f=i()(p,2),m=f[0],d=f[1];Object(u.useEffect)((function(){r(a).then((function(e){return d((t=e.value,a=t.group_refs.map((function(e,a){return{label:t.group_names[a]?t.group_names[a]:e,value:e}})),Je({},t,{wfGroups:a})));var t,a}))}),[]);var b=function(){n({variant:"warning",title:"Edit approval process's groups",dismissable:!0,description:"Edit approval process's groups was cancelled by the user."}),t("/workflows")};return s.a.createElement(Fe.Modal,{title:"Edit approval process's groups",width:"40%",isOpen:!0,onClose:b},s.a.createElement(oe.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(me.FormGroup,{fieldId:"workflow-stages-formgroup"},l&&s.a.createElement(Re.e,null),!l&&s.a.createElement(ie.StackItem,{className:"stages-modal"},s.a.createElement(Ce,{className:"stages-modal",formData:m,handleChange:function(e){d(Je({},m,{},e))},title:"Add or remove ".concat(m.name,"'s groups")})))),s.a.createElement(ie.StackItem,null,s.a.createElement(Ge.ActionGroup,null,s.a.createElement(Ve.Split,{gutter:"md"},s.a.createElement(We.SplitItem,null,s.a.createElement(v.Button,{"aria-label":"Save",variant:"primary",type:"submit",isDisabled:l,onClick:function(){var e={group_refs:m.wfGroups.map((function(e){return e?e.value:void 0}))};o(Je({id:a},e)).then((function(){return c()})).then((function(){return t("/workflows")}))}},"Save")),s.a.createElement(We.SplitItem,null,s.a.createElement(v.Button,{"aria-label":"Cancel",variant:"secondary",type:"button",onClick:b},"Cancel")))))))};He.defaultProps={rbacGroups:[],isFetching:!1},He.propTypes={history:f.a.shape({push:f.a.func.isRequired}),addWorkflow:f.a.func.isRequired,match:f.a.object,addNotification:f.a.func.isRequired,fetchWorkflowWithGroupNames:f.a.func.isRequired,fetchRbacGroups:f.a.func.isRequired,postMethod:f.a.func.isRequired,updateWorkflow:f.a.func.isRequired,id:f.a.string,editType:f.a.string,rbacGroups:f.a.arrayOf(f.a.shape({value:f.a.oneOfType([f.a.number,f.a.string]).isRequired,label:f.a.string.isRequired})).isRequired,isFetching:f.a.bool,item:f.a.shape({id:f.a.string,name:f.a.string})};var Qe=Object(d.o)(Object(m.connect)((function(e){return{isFetching:e.workflowReducer.isRecordLoading}}),(function(e){return Object(Ne.a)({addNotification:ae.addNotification,addWorkflow:Y,updateWorkflow:Z,fetchWorkflowWithGroupNames:X,fetchRbacGroups:qe},e)}))(He)),Ue=a(99),Xe=a(371),Ye=function(e){var t=e.history,a=t.goBack,n=t.push,r=e.match.params.id,o=e.ids,i=e.removeWorkflow,c=e.removeWorkflows,l=e.fetchData,u=e.setSelectedWorkflows;if(!(r||o&&0!==o.length))return null;var p=function(){return a()};return s.a.createElement(Fe.Modal,{isOpen:!0,isSmall:!0,width:"40%",title:"",onClose:p,actions:[s.a.createElement(v.Button,{id:"cancel-remove-workflow",key:"cancel",variant:"secondary",type:"button",onClick:p},"Cancel"),s.a.createElement(v.Button,{id:"submit-remove-workflow",key:"submit",variant:"primary",type:"button",onClick:function(){return(r?i(r):c(o)).then(u([])).then(l()).then(n("/workflows"))}},"Confirm")]},s.a.createElement(Xe.Bullseye,null,s.a.createElement(le.TextContent,null,s.a.createElement(ce.Text,{component:ce.TextVariants.h1},s.a.createElement(Ue.a,{id:"remove-workflow-modal",defaultMessage:"Removing {count, number} {count, plural,\n              one {approval process}\n              other {approval processes}\n            }",values:{count:void 0!==r?1:o.length}})))))};Ye.propTypes={history:f.a.shape({goBack:f.a.func.isRequired,push:f.a.func.isRequired}).isRequired,match:f.a.object,removeWorkflows:f.a.func.isRequired,removeWorkflow:f.a.func.isRequired,fetchData:f.a.func.isRequired,setSelectedWorkflows:f.a.func.isRequired,workflowId:f.a.string,ids:f.a.array};var Ze=Object(d.o)(Object(m.connect)(null,(function(e){return Object(Ne.a)({removeWorkflow:$,removeWorkflows:ee},e)}))(Ye)),$e=a(2191),et=function(e){var t=e.description,a=e.groupRefs,n=e.id,r=Object(u.useState)([]),o=i()(r,2),c=o[0],l=o[1],p=Object(u.useState)(),f=i()(p,2),d=f[0],b=f[1],h=Object(u.useState)(),g=i()(h,2),v=g[0],y=g[1],w=Object(m.useSelector)((function(e){return e.workflowReducer.expandedWorkflows})),E=function(){return Promise.all(a.map((function(e){return function(e){return Object(R.b)().get("".concat(q.b,"/groups/").concat(e,"/")).then((function(e){return e.name})).catch((function(t){if(404!==t.status)throw t;return e}))}(e)})))};return Object(u.useEffect)((function(){d||!w.includes(n)||v||(y(!0),E().then((function(e){l(e),b(!0)})).catch((function(){return b(!0)})))}),[w]),s.a.createElement(u.Fragment,null,s.a.createElement(le.TextContent,null,s.a.createElement(ce.Text,{className:"data-table-detail heading",component:ce.TextVariants.small},"Description"),s.a.createElement(ce.Text,{className:"data-table-detail content",component:ce.TextVariants.h5},t)),s.a.createElement(le.TextContent,null,s.a.createElement(u.Fragment,null,s.a.createElement(ce.Text,{className:"data-table-detail heading",component:ce.TextVariants.small},"Groups"),d?s.a.createElement(ce.Text,{className:"data-table-detail content",component:ce.TextVariants.h5},c.join(",")):s.a.createElement("div",null,s.a.createElement($e.Skeleton,{size:$e.SkeletonSize.sm})))))};et.propTypes={description:f.a.string,groupRefs:f.a.array.isRequired,id:f.a.string.isRequired};var tt=et,at=function(e){return e.reduce((function(e,t,a){var n=t.id,r=t.name,o=t.description,i=t.sequence,c=t.group_refs;return[].concat(Ee()(e),[{id:n,isOpen:!1,selected:!1,cells:[r,o,i]},{parent:2*a,cells:[{title:s.a.createElement(tt,{description:o,groupRefs:c,id:n})}]}])}),[])},nt=a(397),rt=a(360),ot=a(376),it=a(74),ct=a(394);function lt(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ut(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?lt(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):lt(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var st=[{title:"Name",cellFormatters:[E.b]},"Description","Sequence"],pt=Object(he.a)((function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:N.a;a(!0),t(Q(e,n)).then((function(){return a(!1)}))}),1e3),ft={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},mt=function(e,t){switch(t.type){case"setFetching":return ut({},e,{isFetching:t.payload});case"setFilterValue":return ut({},e,{filterValue:t.payload});case"setFilteringFlag":return ut({},e,{isFiltering:t.payload});default:return e}},dt=function(){var e=Object(u.useState)([]),t=i()(e,2),a=t[0],n=t[1],o=Object(u.useReducer)(mt,ft),c=i()(o,2),l=c[0],p=l.filterValue,f=l.isFetching,y=l.isFiltering,E=c[1],k=Object(m.useSelector)((function(e){return e.workflowReducer.workflows})),j=k.data,S=k.meta,T=Object(m.useDispatch)(),R=Object(d.k)();Object(u.useEffect)((function(){T(Q(p,N.a)).then((function(){return E({type:"setFetching",payload:!1})})),Object(it.c)()}),[]);var q=function(e){E({type:"setFilterValue",payload:e}),pt(e,T,(function(e){return E({type:"setFilteringFlag",payload:e})}),ut({},S,{offset:0}))},x=function(e,t){E({type:"setFetching",payload:!0}),T(Q(p,t)).then((function(){return E({type:"setFetching",payload:!1})})).catch((function(){return E({type:"setFetching",payload:!1})}))},C=a.length>0;return s.a.createElement(u.Fragment,null,s.a.createElement(rt.a,null,s.a.createElement(rt.b,{title:"Approval"}),s.a.createElement(ot.a,{tabItems:[{eventKey:0,title:"Request queue",name:"/requests"},{eventKey:1,title:"Approval processes",name:"/workflows"}]})),s.a.createElement(nt.a,{data:j,isSelectable:!0,createRows:at,columns:st,fetchData:x,routes:function(){return s.a.createElement(u.Fragment,null,s.a.createElement(d.d,{exact:!0,path:"/workflows/add-workflow",render:function(e){return s.a.createElement(De,r()({},e,{postMethod:x}))}}),s.a.createElement(d.d,{exact:!0,path:"/workflows/edit-info/:id",render:function(e){return s.a.createElement(ze,r()({editType:"info"},e,{postMethod:x}))}}),s.a.createElement(d.d,{exact:!0,path:"/workflows/edit-stages/:id",render:function(e){return s.a.createElement(Qe,r()({editType:"stages"},e,{postMethod:x}))}}),s.a.createElement(d.d,{exact:!0,path:"/workflows/edit-sequence/:id",render:function(e){return s.a.createElement(ze,r()({editType:"sequence"},e,{postMethod:x}))}}),s.a.createElement(d.d,{exact:!0,path:"/workflows/remove/:id",render:function(e){return s.a.createElement(Ze,r()({},e,{fetchData:x,setSelectedWorkflows:n}))}}),s.a.createElement(d.d,{exact:!0,path:"/workflows/remove",render:function(e){return s.a.createElement(Ze,r()({},e,{ids:a,fetchData:x,setSelectedWorkflows:n}))}}))},actionResolver:function(e,t){return t.rowIndex%2==1?null:[{title:"Edit info",onClick:function(e,t,a){return R.push("/workflows/edit-info/".concat(a.id))}},{title:"Edit groups",onClick:function(e,t,a){return R.push("/workflows/edit-stages/".concat(a.id))}},{title:"Edit sequence",onClick:function(e,t,a){return R.push("/workflows/edit-sequence/".concat(a.id))}},{title:"Delete",style:{color:"var(--pf-global--danger-color--100)"},onClick:function(e,t,a){return R.push("/workflows/remove/".concat(a.id))}}]},titlePlural:"approval processes",titleSingular:"approval process",pagination:S,setCheckedItems:function(e){return n(e.map((function(e){return e.id})))},toolbarButtons:function(){return s.a.createElement(h.ToolbarGroup,{className:"pf-u-pl-lg top-toolbar"},s.a.createElement(g.ToolbarItem,null,s.a.createElement(b.Link,{id:"add-workflow-link",to:"/workflows/add-workflow"},s.a.createElement(v.Button,{variant:"primary","aria-label":"Create approval process"},"Create approval process"))),s.a.createElement(g.ToolbarItem,null,s.a.createElement(b.Link,{id:"remove-multiple-workflows",className:C?"":"disabled-link",to:{pathname:"/workflows/remove"}},s.a.createElement(v.Button,{variant:"link",isDisabled:!C,style:{color:C?"var(--pf-global--danger-color--100)":"var(--pf-global--disabled-color--100)"},"aria-label":"Delete approval process"},"Delete"))))},filterValue:p,onFilterChange:q,isLoading:f||y,onCollapse:function(e,t,a){T(function(e){return{type:O.d,payload:e}}(e)),t((function(t){return a(t,e)}))},renderEmptyState:function(){return s.a.createElement(ct.a,{title:""===p?"No approval processes":"No results found",Icon:w.a,PrimaryAction:function(){return""!==p?s.a.createElement(v.Button,{onClick:function(){return q("")},variant:"link"},"Clear all filters"):null},description:""===p?"No approval processes.":"No results match the filter criteria. Remove all filters or clear all filters to show results."})}}))};dt.propTypes={history:f.a.shape({push:f.a.func.isRequired}).isRequired,workflows:f.a.array,isLoading:f.a.bool,selectedWorkflows:f.a.array},dt.defaultProps={workflows:[],rbacGroups:{},isLoading:!1};t.default=dt},343:function(e,t,a){"use strict";var n=a(359);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(n.a)(e,t,a)}},358:function(e,t,a){},360:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=a(139),l=a(140),u=a(136),s=a(137),p=a(40),f=a(42),m=a(374),d=a(375),b=function(e){var t=e.breadcrumbs;return t?r.a.createElement(m.Breadcrumb,null,Object.values(t).map((function(e){return r.a.createElement(d.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r.a.createElement(f.NavLink,{exact:!0,to:e.to},e.title)||e.title)}))):null};b.propTypes={breadcrumbs:i.a.arrayOf(i.a.shape({title:i.a.string.isRequired,isActive:i.a.bool,to:i.a.string}))};var h=b;a(373);a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return v}));var g=function(e){var t=e.children,a=e.breadcrumbs,n=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-sm":""," top-toolbar")},a&&r.a.createElement(c.Level,{className:"pf-u-mb-md"},r.a.createElement(h,{breadcrumbs:a})),t)};g.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired,breadcrumbs:i.a.array,paddingBottom:i.a.bool},g.defaultProps={paddingBottom:!1};var v=function(e){var t=e.title,a=e.description,o=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(c.Level,null,r.a.createElement(l.LevelItem,null,r.a.createElement(s.TextContent,{className:"pf-u-mb-sm"},r.a.createElement(u.Text,{component:u.TextVariants.h1},t||r.a.createElement(p.d,null))),a&&r.a.createElement(s.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},r.a.createElement(u.Text,{component:u.TextVariants.p},a))),o))};v.propTypes={title:i.a.string,description:i.a.string,children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])}},373:function(e,t,a){},376:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=a(19),l=a(370),u=a(369),s=function(e){var t=e.history.push,a=e.location.pathname,n=e.tabItems,o=n.find((function(e){var t=e.name;return a.includes(t)}));return r.a.createElement(l.Tabs,{className:"pf-u-mt-sm",activeKey:o?o.eventKey:0,onSelect:function(e,a){return t(n[a].name)}},n.map((function(e){return r.a.createElement(u.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}),history:i.a.shape({push:i.a.func.isRequired}),tabItems:i.a.array.isRequired},t.a=Object(c.o)(s)},394:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=(a(70),a(444)),l=a(445),u=a(446),s=a(447),p=a(136),f=a(137),m=a(352),d=(a(42),function(e){var t=e.title,a=e.Icon,n=e.description,o=e.PrimaryAction,i=e.renderDescription;return r.a.createElement(m.EmptyTable,{centered:!0,"aria-label":"No records"},r.a.createElement(c.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(l.EmptyStateIcon,{icon:a}),r.a.createElement(f.TextContent,null,r.a.createElement(p.Text,{component:p.TextVariants.h1},t)),r.a.createElement(u.EmptyStateBody,null,n,i()),r.a.createElement(s.EmptyStateSecondaryActions,null,o&&r.a.createElement(o,null))))});d.defaultProps={renderDescription:function(){return null}},d.propTypes={title:i.a.string.isRequired,Icon:i.a.any.isRequired,description:i.a.string.isRequired,PrimaryAction:i.a.any,renderDescription:i.a.func},t.a=d;i.a.string.isRequired,i.a.string.isRequired},397:function(e,t,a){"use strict";var n=a(3),r=a.n(n),o=a(71),i=a.n(o),c=a(0),l=a.n(c),u=a(1),s=a.n(u),p=a(377),f=a(379),m=a(345),d=a(139),b=a(140),h=a(339),g=a(464),v=a(463),y=a(72),w=a(346),E=a.n(w),O=a(141),k=a.n(O),j=a(338),S=function(e){var t=e.searchValue,a=e.onFilterChange,n=e.placeholder,r=e.isClearable;return l.a.createElement(m.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(j.TextInput,{placeholder:n,value:t,type:"text",onChange:a,"aria-label":n}),l.a.createElement("span",{className:"filter-icons-container"},r&&t&&l.a.createElement(k.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return a("")}})||l.a.createElement(E.a,null))))};S.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},S.defaultProps={searchValue:"",isClearable:!1};var T=S,R=a(352),q=a(40),x=a(32),C=a.n(x),P=a(46),I=a.n(P),D=a(359),N=a(143),G=function(e){var t=e.meta,a=t.limit,n=t.count,r=t.offset,o=e.apiProps,i=e.apiRequest,c=e.className,u=e.isCompact,s=I()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:c},l.a.createElement(N.Pagination,C()({perPage:a||50,itemCount:n||0,onPerPageSelect:function(e,t){return i(o,{offset:r,limit:t})},page:Object(y.b)(a,r),onSetPage:function(e,t,n){var r={offset:Object(y.c)(t,a),limit:a},c=function(){return i(o,r)};return n?Object(D.a)(c,250)():c()},direction:"down",isCompact:u},s)))};G.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},G.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1};var F=G,V=function(e){var t=e.children;return l.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};V.propTypes={children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)])};var W=V;function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return A}));var A=function(e){var t=e.isSelectable,a=e.createRows,n=e.columns,r=e.fetchData,o=e.toolbarButtons,u=e.data,s=e.actionResolver,y=e.routes,w=e.titlePlural,E=e.titleSingular,O=e.pagination,k=e.setCheckedItems,j=e.filterValue,S=e.onFilterChange,x=e.isLoading,C=e.onCollapse,P=e.renderEmptyState,I=Object(c.useState)([]),D=i()(I,2),N=D[0],G=D[1];Object(c.useEffect)((function(){G(a(u))}),[u]);var V=function(e,t){return e.map((function(e){return e.id===t?L({},e,{isOpen:!e.isOpen}):L({},e)}))},B=function(e,t){var a=e.map((function(e){return e.id===t?L({},e,{selected:!e.selected}):L({},e)})),n=a.filter((function(e){return e.id&&e.selected}));return k(n),a};return l.a.createElement(R.Section,{type:"content","page-type":"tab-".concat(w),id:"tab-".concat(w)},y(),function(e){return l.a.createElement(p.Toolbar,{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg pf-u-pb-lg top-toolbar"},l.a.createElement(d.Level,{style:{flex:1}},l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(T,{onFilterChange:S,searchValue:j,isClearable:!0,placeholder:"Filter by ".concat(E)}),o())),l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(f.ToolbarGroup,null,l.a.createElement(m.ToolbarItem,null,l.a.createElement(F,{apiRequest:r,isDisabled:e,meta:O,isCompact:!0})))))))}(x),x&&l.a.createElement(q.b,null),x||0!==N.length?l.a.createElement(c.Fragment,null,!x&&l.a.createElement(h.b,{"aria-label":"".concat(w," table"),onCollapse:function(e,t,a,n){var r=n.id;return C?C(r,G,V):G((function(e){return V(e,r)}))},rows:N,cells:n,onSelect:t&&function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n.id;return G(-1===a?N.map((function(e){return L({},e,{selected:t})})):function(e){return B(e,r)})},actionResolver:s,className:"table-fix"},l.a.createElement(g.a,null),l.a.createElement(v.a,null)),O.count>0&&l.a.createElement(W,null,l.a.createElement(F,{dropDirection:"up",meta:O,apiRequest:r}))):P())};A.propTypes={isSelectable:s.a.bool,createRows:s.a.func.isRequired,columns:s.a.array.isRequired,toolbarButtons:s.a.func,fetchData:s.a.func.isRequired,data:s.a.array,pagination:s.a.shape({limit:s.a.number,offset:s.a.number,count:s.a.number}),titlePlural:s.a.string,titleSingular:s.a.string,routes:s.a.func,actionResolver:s.a.func,setCheckedItems:s.a.func,filterValue:s.a.string,onFilterChange:s.a.func,isLoading:s.a.bool,onCollapse:s.a.func,renderEmptyState:s.a.func},A.defaultProps={requests:[],isLoading:!1,pagination:y.a,toolbarButtons:function(){return null},isSelectable:null,routes:function(){return null},renderEmptyState:function(){return null}}}}]);
//# sourceMappingURL=../sourcemaps/workflows.js.map