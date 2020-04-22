(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{2191:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a.n(n),o=a(47),i=a.n(o),c=a(3),l=a.n(c),s=a(0),u=a.n(s),p=a(1),f=a.n(p),m=a(40),d=a(18),b=a(27),g=a(387),h=a(359),v=a(75),y=a(360),w=a.n(y),E=a(364),O=a(4),k=a(36),j=a.n(k),T=a(54),S=a.n(T),q=a(86),R=a(77),C=a(24),P=Object(q.h)(),x=Object(q.g)();function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:R.a,a="&limit=".concat(t.limit,"&offset=").concat(t.offset),n="&filter[name][contains_i]=".concat(e);return Object(q.b)().get("".concat(C.a,"/workflows/?").concat(n).concat(a))}function D(e){return N.apply(this,arguments)}function N(){return(N=S()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.showWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return V.apply(this,arguments)}function V(){return(V=S()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return W.apply(this,arguments)}function W(){return(W=S()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=S()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=function(e,t){return{type:O.k,payload:I(e,t)}},A=function(e){return{type:O.j,payload:D(e)}},L=function(e){return{type:O.a,payload:(t=e,x.listTemplates().then((function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id})).then((function(e){return P.addWorkflowToTemplate(e,t,{})}))),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding approval process",description:"The approval process was added successfully."}}}};var t},M=function(e){return{type:O.n,payload:(t=e,P.updateWorkflow(t.id,t)),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating approval process",description:"The approval process was updated successfully."}}}};var t},K=function(e){return{type:O.l,payload:F(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval process",description:"The approval process was removed successfully."}}}}},z=function(e){return{type:O.m,payload:G(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval processes",description:"The selected approval processes were removed successfully."}}}}},_=a(2182),J=a(34),H=a(87),Q=a(56),U=a(345),X=a(348),Y=a(148),Z=a(149),$=a(76),ee=function(e){var t=e.formData,a=t||{name:"",description:"",wfGroups:[]},n=a.name,r=a.description,o=a.wfGroups;return u.a.createElement(s.Fragment,null,u.a.createElement(U.Stack,{gutter:"md"},u.a.createElement(X.StackItem,null,u.a.createElement($.Title,{size:"xl"}," Review ")),u.a.createElement(X.StackItem,null,u.a.createElement(U.Stack,{gutter:"md"},u.a.createElement(X.StackItem,null,u.a.createElement(Z.TextContent,null,u.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.h5},"Review and confirm your inputs. If there is anything incorrect, click Back and revise."))),u.a.createElement(X.StackItem,null,u.a.createElement(H.Grid,{gutter:"md"},u.a.createElement(Q.GridItem,{span:2},u.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.h5},"Name")),u.a.createElement(Q.GridItem,{span:10},u.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.p},n))),u.a.createElement(H.Grid,{gutter:"md"},u.a.createElement(Q.GridItem,{span:2},u.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.h5},"Description")),u.a.createElement(Q.GridItem,{span:10},u.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.p},r))),o&&o.length>0&&o.map((function(e,t){return u.a.createElement(s.Fragment,{key:"Groups"},u.a.createElement(H.Grid,{gutter:"md"},u.a.createElement(Q.GridItem,{span:2},u.a.createElement(Y.Text,{key:e.value,className:"data-table-detail heading",component:Y.TextVariants.h5},0===t?"Groups":"")),u.a.createElement(Q.GridItem,{span:10},u.a.createElement(Y.Text,{key:e.label,className:"data-table-detail content",component:Y.TextVariants.p},"".concat(o[t].label)))))})))))))};ee.propTypes={formData:f.a.object};var te=ee,ae=a(89),ne=a(50),re=a(351),oe=a(412),ie=a(357),ce=function(e){return function(e){return I(e)}(e).then((function(t){return t.data.find((function(t){return e===t.name}))?"Name has already been taken":void 0}))},le=function(e){var t=e.formData,a=e.initialValue,n=e.handleChange,r=e.setIsValid,o=e.title,c=void 0===o?void 0:o,l=t.name||"",p=t.description||"",f=Object(s.useState)(void 0),m=i()(f,2),d=m[0],b=m[1],g=function(e){b(e),r(!e)},h=function(e){var t,n;!e||e.length<1?b("Enter a name for the approval process"):a&&a.name===e?b(void 0):(t=e,n=g,Object(ie.a)(ce(t).then((function(e){return n(e)}))))};return u.a.createElement(s.Fragment,null,u.a.createElement(U.Stack,{gutter:"md"},u.a.createElement(X.StackItem,null,u.a.createElement($.Title,{size:"md"}," ",c||"Enter your information"," ")),u.a.createElement(X.StackItem,null,u.a.createElement(ae.Form,null,u.a.createElement(ne.FormGroup,{label:"Approval process name",isRequired:!0,fieldId:"workflow-name",isValid:!d,helperTextInvalid:d},u.a.createElement(re.TextInput,{isRequired:!0,type:"text",id:"workflow-name",name:"workflow-name","aria-describedby":"workflow-name",value:l,isValid:!d,onBlur:function(){return h(l)},onChange:function(e,t){return function(e){b(!e||e.length<1?"Enter a name for the approval process":void 0),n({name:e})}(t.currentTarget.value)}})),u.a.createElement(ne.FormGroup,{label:"Description",fieldId:"workflow-description"},u.a.createElement(oe.TextArea,{type:"text",id:"workflow-description",name:"workflow-description",value:p,onChange:function(e,t){return n({description:t.currentTarget.value})}}))))))};le.propTypes={name:f.a.string,description:f.a.string,title:f.a.string,formData:f.a.object,handleChange:f.a.func.isRequired,isValid:f.a.bool,setIsValid:f.a.func.isRequired,initialValue:f.a.shape({name:f.a.string})};var se=le,ue=a(2187);Object(q.d)();var pe=function(e){var t="&name=".concat(e);return Object(q.b)().get("".concat(C.b,'/groups/?role_names=",Approval Administrator,Approval Approver,"\n  ').concat(e&&e.length>0?t:"")).then((function(e){var t=e.data;return t&&t.length>0?t.map((function(e){var t=e.uuid;return{label:e.name,value:t}})):void 0}))},fe=a(42);function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var de=function(e){var t=e.formData,a=e.handleChange,n=e.title,r=Object(s.useState)(!1),o=i()(r,2),c=o[0],p=o[1],f=Object(s.useState)([]),d=i()(f,2),b=d[0],g=d[1],h=Object(s.useState)([]),v=i()(h,2),y=v[0],w=v[1],E=Object(s.useState)([]),k=i()(E,2),j=k[0],T=k[1],S=Object(m.useSelector)((function(e){return e.groupReducer.groups||[]})),q=Object(m.useDispatch)();Object(s.useEffect)((function(){T(!0),q({type:O.f,payload:pe()}).then((function(){return T(!1)}))}),[]),Object(s.useEffect)((function(){g(t.wfGroups?t.wfGroups:[])}),[t.wfGroups]);return u.a.createElement(s.Fragment,null,u.a.createElement(U.Stack,{gutter:"md"},u.a.createElement(X.StackItem,{key:"title"},u.a.createElement($.Title,{size:"md"},n||"Set groups")),u.a.createElement(X.StackItem,{key:"group"},j&&u.a.createElement(fe.e,null),!j&&u.a.createElement(ue.a,{cacheOptions:!0,isClearable:!0,isMulti:!0,styles:{menuPortal:function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{zIndex:9999})}},menuPortalTarget:document.body,menuPosition:"fixed",menuPlacement:"bottom",label:"Group","aria-label":"Group",onToggle:function(e){p(e)},key:"groups",onChange:function(e){return g(t=e),void a({wfGroups:t});var t},value:b,inpuValue:y,isexpanded:c,loadOptions:Object(ie.a)(pe),defaultOptions:S,onInputChange:function(e){return t=e.replace(/\W/g,""),void w(t);var t}}))))};de.propTypes={name:f.a.string,description:f.a.string,title:f.a.string,formData:f.a.object,handleChange:f.a.func};var be=de;function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var he=function(){var e=Object(s.useState)({wfGroups:[]}),t=i()(e,2),a=t[0],n=t[1],r=Object(m.useDispatch)(),o=Object(d.k)().push,c=Object(m.useSelector)((function(e){return e.groupReducer.groups})),p=Object(s.useState)(void 0!==a.name&&a.name.length>0),f=i()(p,2),b=f[0],g=f[1],h=Object(s.useState)(1),v=i()(h,2),y=v[0],w=v[1],E=function(e){n(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{},e))},O=[{id:1,name:"General information",enableNext:b&&a.name&&a.name.length>0,component:u.a.createElement(se,{formData:a,handleChange:E,setIsValid:g})},{id:2,name:"Set groups",canJumpTo:y>=2,enableNext:b&&a.name&&a.name.length>0,component:u.a.createElement(be,{formData:a,handleChange:E,options:c})},{id:3,canJumpTo:y>=3,enableNext:b&&a.name&&a.name.length>0,name:"Review",component:u.a.createElement(te,{formData:a,options:c}),nextButtonText:"Confirm"}];return u.a.createElement(_.Wizard,{title:"Create approval process",isOpen:!0,onClose:function(){r(Object(J.addNotification)({variant:"warning",title:"Creating approval process",dismissable:!0,description:"Creating approval process was cancelled by the user."})),o("/workflows")},onSave:function(){var e=a.name,t=a.description,n=a.wfGroups,i={name:e,description:t,group_refs:n&&n.length>0?n.map((function(e){return{name:e.label,uuid:e.value}})):[]};o("/workflows"),r(L(i))},onNext:function(e){var t=e.id;w((function(e){return e<t?t:e}))},steps:O})};he.defaultProps={rbacGroups:[],initialValues:{}},he.propTypes={match:f.a.object,rbacGroups:f.a.arrayOf(f.a.shape({value:f.a.oneOfType([f.a.number,f.a.string]).isRequired,label:f.a.string.isRequired})).isRequired};var ve=he,ye=a(83),we=a(380),Ee=a(358),Oe=a(388),ke=a(389),je=function(e){var t=e.formData,a=e.handleChange,n=e.isValid,r=e.setIsValid,o=e.title,i=void 0===o?void 0:o,c=t.sequence;return u.a.createElement(s.Fragment,null,u.a.createElement(U.Stack,{gutter:"md"},u.a.createElement(X.StackItem,null,u.a.createElement($.Title,{size:"md"}," ",i||"Enter your information"," ")),u.a.createElement(X.StackItem,null,u.a.createElement(ae.Form,null,u.a.createElement(ne.FormGroup,{label:"Enter sequence",isRequired:!0,fieldId:"workflow-sequence",isValid:n,helperTextInvalid:"Enter a positive number"},u.a.createElement(re.TextInput,{isRequired:!0,type:"number",id:"workflow-sequence",isValid:n,name:"workflow-sequence","aria-describedby":"workflow-name",value:c,onChange:function(e,t){return function(e){r(e>=0),a({sequence:e})}(t.currentTarget.value)}}))))))};je.propTypes={sequence:f.a.string,title:f.a.string,formData:f.a.object,handleChange:f.a.func.isRequired,setIsValid:f.a.func.isRequired,isValid:f.a.bool};var Te=je;a(370);function Se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function qe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Se(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Re=function(e){var t=e.history.push,a=e.match.params.id,n=e.addNotification,r=e.fetchWorkflow,o=e.updateWorkflow,c=e.postMethod,l=e.workflow,p=e.isFetching,f=e.editType,m=Object(s.useState)({}),d=i()(m,2),b=d[0],g=d[1],h=Object(s.useState)({}),y=i()(h,2),w=y[0],E=y[1],O=Object(s.useState)(!0),k=i()(O,2),j=k[0],T=k[1],S=function(e){return g(qe({},b,{},e))};Object(s.useEffect)((function(){r(a).then((function(e){g(qe({},b,{},e.value)),E(qe({},e.value))}))}),[]);var q=function(){var e="sequence"===f?{title:"Edit approval process's sequence",description:"Edit approval process's sequence was cancelled by the user."}:{title:"Edit approval process's information",description:"Edit approval process's information was cancelled by the user."};n({variant:"warning",title:e.title,dismissable:!0,description:e.description}),t("/workflows")};return u.a.createElement(Ee.Modal,{title:"sequence"===f?"Edit sequence":"Edit information",width:"40%",isOpen:!0,onClose:q},u.a.createElement(U.Stack,{gutter:"md"},u.a.createElement(X.StackItem,null,u.a.createElement(ne.FormGroup,{fieldId:"edit-workflow-info-modal-info"},p&&u.a.createElement(fe.e,null),!p&&("info"===f?u.a.createElement(se,{formData:b,initialValue:w,handleChange:S,setIsValid:T,title:"Make any changes to approval process ".concat(l.name)}):u.a.createElement(Te,{formData:b,initialValue:w,handleChange:S,isValid:j,setIsValid:T,title:"Set the sequence for the approval process ".concat(l.name)})))),u.a.createElement(X.StackItem,null,u.a.createElement(we.ActionGroup,null,u.a.createElement(Oe.Split,{gutter:"md"},u.a.createElement(ke.SplitItem,null,u.a.createElement(v.Button,{"aria-label":"Save",id:"save-edit-workflow-info",variant:"primary",type:"submit",onClick:function(){if(j){var e=b.name,n=b.description,r=b.sequence;o({id:a,name:e,description:n,sequence:r}).then((function(){return c()})).then((function(){return t("/workflows")}))}}},"Save")),u.a.createElement(ke.SplitItem,null,u.a.createElement(v.Button,{id:"cancel-edit-workflow-info","aria-label":"Cancel",variant:"secondary",type:"button",onClick:q},"Cancel")))))))};Re.defaultProps={isFetching:!1,editType:"info"},Re.propTypes={history:f.a.shape({push:f.a.func.isRequired}).isRequired,match:f.a.object,addNotification:f.a.func.isRequired,fetchWorkflow:f.a.func.isRequired,postMethod:f.a.func.isRequired,updateWorkflow:f.a.func.isRequired,workflow:f.a.object,id:f.a.string,editType:f.a.string,isFetching:f.a.bool};var Ce=Object(d.o)(Object(m.connect)((function(e){var t=e.workflowReducer;return{workflow:t.workflow,isFetching:t.isRecordLoading}}),(function(e){return Object(ye.a)({addNotification:J.addNotification,addWorkflow:L,updateWorkflow:M,fetchWorkflow:A},e)}))(Re));function Pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function xe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ie=function(e){var t=e.history.push,a=e.match.params.id,n=e.addNotification,r=e.fetchWorkflow,o=e.updateWorkflow,c=e.postMethod,l=e.isFetching,p=Object(s.useState)({}),f=i()(p,2),m=f[0],d=f[1];Object(s.useEffect)((function(){r(a).then((function(e){return d((t=e.value,a=t.group_refs.map((function(e){return{label:e.name,value:e.uuid}})),xe({},t,{wfGroups:a})));var t,a}))}),[]);var b=function(){n({variant:"warning",title:"Edit approval process's groups",dismissable:!0,description:"Edit approval process's groups was cancelled by the user."}),t("/workflows")};return u.a.createElement(Ee.Modal,{title:"Edit approval process's groups",width:"40%",isOpen:!0,onClose:b},u.a.createElement(U.Stack,{gutter:"md"},u.a.createElement(X.StackItem,null,u.a.createElement(ne.FormGroup,{fieldId:"workflow-groups-formgroup"},l&&u.a.createElement(fe.e,null),!l&&u.a.createElement(X.StackItem,{className:"groups-modal"},u.a.createElement(be,{className:"groups-modal",formData:m,handleChange:function(e){d(xe({},m,{},e))},title:"Add or remove ".concat(m.name,"'s groups")})))),u.a.createElement(X.StackItem,null,u.a.createElement(we.ActionGroup,null,u.a.createElement(Oe.Split,{gutter:"md"},u.a.createElement(ke.SplitItem,null,u.a.createElement(v.Button,{"aria-label":"Save",variant:"primary",type:"submit",isDisabled:l,onClick:function(){var e=m.wfGroups,n={group_refs:e?e.map((function(e){return{name:e.label,uuid:e.value}})):[]};o(xe({id:a},n)).then((function(){return c()})).then((function(){return t("/workflows")}))}},"Save")),u.a.createElement(ke.SplitItem,null,u.a.createElement(v.Button,{"aria-label":"Cancel",variant:"secondary",type:"button",onClick:b},"Cancel")))))))};Ie.defaultProps={rbacGroups:[],isFetching:!1},Ie.propTypes={history:f.a.shape({push:f.a.func.isRequired}),addWorkflow:f.a.func.isRequired,match:f.a.object,addNotification:f.a.func.isRequired,fetchWorkflow:f.a.func.isRequired,postMethod:f.a.func.isRequired,updateWorkflow:f.a.func.isRequired,id:f.a.string,editType:f.a.string,rbacGroups:f.a.arrayOf(f.a.shape({value:f.a.oneOfType([f.a.number,f.a.string]).isRequired,label:f.a.string.isRequired})).isRequired,isFetching:f.a.bool,item:f.a.shape({id:f.a.string,name:f.a.string})};var De=Object(d.o)(Object(m.connect)((function(e){return{isFetching:e.workflowReducer.isRecordLoading}}),(function(e){return Object(ye.a)({addNotification:J.addNotification,addWorkflow:L,updateWorkflow:M,fetchWorkflow:A},e)}))(Ie)),Ne=a(109),Fe=a(90),Ve=function(e){var t=e.history,a=t.goBack,n=t.push,r=e.match.params.id,o=e.ids,i=e.removeWorkflow,c=e.removeWorkflows,l=e.fetchData,s=e.setSelectedWorkflows;if(!(r||o&&0!==o.length))return null;var p=function(){return a()};return u.a.createElement(Ee.Modal,{isOpen:!0,isSmall:!0,width:"40%",title:"",onClose:p,actions:[u.a.createElement(v.Button,{id:"cancel-remove-workflow",key:"cancel",variant:"secondary",type:"button",onClick:p},"Cancel"),u.a.createElement(v.Button,{id:"submit-remove-workflow",key:"submit",variant:"primary",type:"button",onClick:function(){return(r?i(r):c(o)).then(s([])).then(l()).then(n("/workflows"))}},"Confirm")]},u.a.createElement(Fe.Bullseye,null,u.a.createElement(Z.TextContent,null,u.a.createElement(Y.Text,{component:Y.TextVariants.h1},u.a.createElement(Ne.a,{id:"remove-workflow-modal",defaultMessage:"Removing {count, number} {count, plural,\n              one {approval process}\n              other {approval processes}\n            }",values:{count:void 0!==r?1:o.length}})))))};Ve.propTypes={history:f.a.shape({goBack:f.a.func.isRequired,push:f.a.func.isRequired}).isRequired,match:f.a.object,removeWorkflows:f.a.func.isRequired,removeWorkflow:f.a.func.isRequired,fetchData:f.a.func.isRequired,setSelectedWorkflows:f.a.func.isRequired,workflowId:f.a.string,ids:f.a.array};var Ge=Object(d.o)(Object(m.connect)(null,(function(e){return Object(ye.a)({removeWorkflow:K,removeWorkflows:z},e)}))(Ve)),We=a(22),Be=a.n(We),Ae=function(e){var t=e.description,a=e.groupRefs;return u.a.createElement(s.Fragment,null,u.a.createElement(Z.TextContent,null,u.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.small},"Description"),u.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.h5},t)),u.a.createElement(Z.TextContent,null,u.a.createElement(s.Fragment,null,u.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.small},"Groups"),u.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.h5},function(e){return e.map((function(e){return e.name}))}(a).join(",")))))};Ae.propTypes={description:f.a.string,groupRefs:f.a.array.isRequired,id:f.a.string.isRequired};var Le=Ae,Me=function(e){return e.reduce((function(e,t,a){var n=t.id,r=t.name,o=t.description,i=t.sequence,c=t.group_refs;return[].concat(Be()(e),[{id:n,isOpen:!1,selected:!1,cells:[r,o,i]},{parent:2*a,cells:[{title:u.a.createElement(Le,{description:o,groupRefs:c,id:n})}]}])}),[])},Ke=a(405),ze=a(372),_e=a(384),Je=a(78),He=a(402);function Qe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Qe(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Qe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Xe=[{title:"Name",cellFormatters:[E.b]},"Description","Sequence"],Ye=Object(ie.a)((function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:R.a;a(!0),t(B(e,n)).then((function(){return a(!1)}))}),1e3),Ze={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},$e=function(e,t){switch(t.type){case"setFetching":return Ue({},e,{isFetching:t.payload});case"setFilterValue":return Ue({},e,{filterValue:t.payload});case"setFilteringFlag":return Ue({},e,{isFiltering:t.payload});default:return e}},et=function(){var e=Object(s.useState)([]),t=i()(e,2),a=t[0],n=t[1],o=Object(s.useReducer)($e,Ze),c=i()(o,2),l=c[0],p=l.filterValue,f=l.isFetching,y=l.isFiltering,E=c[1],k=Object(m.useSelector)((function(e){return e.workflowReducer.workflows})),j=k.data,T=k.meta,S=Object(m.useDispatch)(),q=Object(d.k)();Object(s.useEffect)((function(){S(B(p,R.a)).then((function(){return E({type:"setFetching",payload:!1})})),Object(Je.d)()}),[]);var C=function(e){E({type:"setFilterValue",payload:e}),Ye(e,S,(function(e){return E({type:"setFilteringFlag",payload:e})}),Ue({},T,{offset:0}))},P=function(e,t){E({type:"setFetching",payload:!0}),S(B(p,t)).then((function(){return E({type:"setFetching",payload:!1})})).catch((function(){return E({type:"setFetching",payload:!1})}))},x=a.length>0;return u.a.createElement(s.Fragment,null,u.a.createElement(ze.a,null,u.a.createElement(ze.b,{title:"Approval"}),u.a.createElement(_e.a,{tabItems:[{eventKey:0,title:"Request queue",name:"/requests"},{eventKey:1,title:"Approval processes",name:"/workflows"}]})),u.a.createElement(Ke.a,{data:j,isSelectable:!0,createRows:Me,columns:Xe,fetchData:P,routes:function(){return u.a.createElement(s.Fragment,null,u.a.createElement(d.d,{exact:!0,path:"/workflows/add-workflow",render:function(e){return u.a.createElement(ve,r()({},e,{postMethod:P}))}}),u.a.createElement(d.d,{exact:!0,path:"/workflows/edit-info/:id",render:function(e){return u.a.createElement(Ce,r()({editType:"info"},e,{postMethod:P}))}}),u.a.createElement(d.d,{exact:!0,path:"/workflows/edit-groups/:id",render:function(e){return u.a.createElement(De,r()({editType:"groups"},e,{postMethod:P}))}}),u.a.createElement(d.d,{exact:!0,path:"/workflows/edit-sequence/:id",render:function(e){return u.a.createElement(Ce,r()({editType:"sequence"},e,{postMethod:P}))}}),u.a.createElement(d.d,{exact:!0,path:"/workflows/remove/:id",render:function(e){return u.a.createElement(Ge,r()({},e,{fetchData:P,setSelectedWorkflows:n}))}}),u.a.createElement(d.d,{exact:!0,path:"/workflows/remove",render:function(e){return u.a.createElement(Ge,r()({},e,{ids:a,fetchData:P,setSelectedWorkflows:n}))}}))},actionResolver:function(e,t){return t.rowIndex%2==1?null:[{title:"Edit info",onClick:function(e,t,a){return q.push("/workflows/edit-info/".concat(a.id))}},{title:"Edit groups",onClick:function(e,t,a){return q.push("/workflows/edit-groups/".concat(a.id))}},{title:"Edit sequence",onClick:function(e,t,a){return q.push("/workflows/edit-sequence/".concat(a.id))}},{title:"Delete",style:{color:"var(--pf-global--danger-color--100)"},onClick:function(e,t,a){return q.push("/workflows/remove/".concat(a.id))}}]},titlePlural:"approval processes",titleSingular:"approval process",pagination:T,setCheckedItems:function(e){return n(e.map((function(e){return e.id})))},toolbarButtons:function(){return u.a.createElement(g.ToolbarGroup,{className:"pf-u-pl-lg top-toolbar"},u.a.createElement(h.ToolbarItem,null,u.a.createElement(b.Link,{id:"add-workflow-link",to:"/workflows/add-workflow"},u.a.createElement(v.Button,{variant:"primary","aria-label":"Create approval process"},"Create approval process"))),u.a.createElement(h.ToolbarItem,null,u.a.createElement(b.Link,{id:"remove-multiple-workflows",className:x?"":"disabled-link",to:{pathname:"/workflows/remove"}},u.a.createElement(v.Button,{variant:"link",isDisabled:!x,style:{color:x?"var(--pf-global--danger-color--100)":"var(--pf-global--disabled-color--100)"},"aria-label":"Delete approval process"},"Delete"))))},filterValue:p,onFilterChange:C,isLoading:f||y,onCollapse:function(e,t,a){S(function(e){return{type:O.d,payload:e}}(e)),t((function(t){return a(t,e)}))},renderEmptyState:function(){return u.a.createElement(He.a,{title:""===p?"No approval processes":"No results found",Icon:w.a,PrimaryAction:function(){return""!==p?u.a.createElement(v.Button,{onClick:function(){return C("")},variant:"link"},"Clear all filters"):null},description:""===p?"No approval processes.":"No results match the filter criteria. Remove all filters or clear all filters to show results."})}}))};et.propTypes={history:f.a.shape({push:f.a.func.isRequired}).isRequired,workflows:f.a.array,isLoading:f.a.bool,selectedWorkflows:f.a.array},et.defaultProps={workflows:[],rbacGroups:{},isLoading:!1};t.default=et},357:function(e,t,a){"use strict";var n=a(371);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(n.a)(e,t,a)}},370:function(e,t,a){},372:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=a(151),l=a(152),s=a(148),u=a(149),p=a(42),f=a(27),m=a(382),d=a(383),b=function(e){var t=e.breadcrumbs;return t?r.a.createElement(m.Breadcrumb,null,Object.values(t).map((function(e){return r.a.createElement(d.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r.a.createElement(f.NavLink,{exact:!0,to:e.to},e.title)||e.title)}))):null};b.propTypes={breadcrumbs:i.a.arrayOf(i.a.shape({title:i.a.string.isRequired,isActive:i.a.bool,to:i.a.string}))};var g=b;a(381);a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return v}));var h=function(e){var t=e.children,a=e.breadcrumbs,n=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-sm":""," top-toolbar")},a&&r.a.createElement(c.Level,{className:"pf-u-mb-md"},r.a.createElement(g,{breadcrumbs:a})),t)};h.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired,breadcrumbs:i.a.array,paddingBottom:i.a.bool},h.defaultProps={paddingBottom:!1};var v=function(e){var t=e.title,a=e.description,o=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(c.Level,null,r.a.createElement(l.LevelItem,null,r.a.createElement(u.TextContent,{className:"pf-u-mb-sm"},r.a.createElement(s.Text,{component:s.TextVariants.h1},t||r.a.createElement(p.d,null))),a&&r.a.createElement(u.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},r.a.createElement(s.Text,{component:s.TextVariants.p},a))),o))};v.propTypes={title:i.a.string,description:i.a.string,children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])}},381:function(e,t,a){},384:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=a(18),l=a(379),s=a(378),u=function(e){var t=e.history.push,a=e.location.pathname,n=e.tabItems,o=n.find((function(e){var t=e.name;return a.includes(t)}));return r.a.createElement(l.Tabs,{className:"pf-u-mt-sm",activeKey:o?o.eventKey:0,onSelect:function(e,a){return t(n[a].name)}},n.map((function(e){return r.a.createElement(s.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}),history:i.a.shape({push:i.a.func.isRequired}),tabItems:i.a.array.isRequired},t.a=Object(c.o)(u)},402:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),c=(a(75),a(97)),l=a(98),s=a(99),u=a(447),p=a(148),f=a(149),m=a(361),d=(a(27),function(e){var t=e.title,a=e.Icon,n=e.description,o=e.PrimaryAction,i=e.renderDescription;return r.a.createElement(m.EmptyTable,{centered:!0,"aria-label":"No records"},r.a.createElement(c.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(l.EmptyStateIcon,{icon:a}),r.a.createElement(f.TextContent,null,r.a.createElement(p.Text,{component:p.TextVariants.h1},t)),r.a.createElement(s.EmptyStateBody,null,n,i()),r.a.createElement(u.EmptyStateSecondaryActions,null,o&&r.a.createElement(o,null))))});d.defaultProps={renderDescription:function(){return null}},d.propTypes={title:i.a.string.isRequired,Icon:i.a.any.isRequired,description:i.a.string.isRequired,PrimaryAction:i.a.any,renderDescription:i.a.func},t.a=d;i.a.string.isRequired,i.a.string.isRequired},405:function(e,t,a){"use strict";var n=a(3),r=a.n(n),o=a(47),i=a.n(o),c=a(0),l=a.n(c),s=a(1),u=a.n(s),p=a(385),f=a(387),m=a(359),d=a(151),b=a(152),g=a(352),h=a(462),v=a(461),y=a(77),w=a(360),E=a.n(w),O=a(153),k=a.n(O),j=a(351),T=function(e){var t=e.searchValue,a=e.onFilterChange,n=e.placeholder,r=e.isClearable;return l.a.createElement(m.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(j.TextInput,{placeholder:n,value:t,type:"text",onChange:a,"aria-label":n}),l.a.createElement("span",{className:"filter-icons-container"},r&&t&&l.a.createElement(k.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return a("")}})||l.a.createElement(E.a,null))))};T.propTypes={onFilterChange:u.a.func.isRequired,placeholder:u.a.string,searchValue:u.a.string,isClearable:u.a.bool},T.defaultProps={searchValue:"",isClearable:!1};var S=T,q=a(361),R=a(42),C=a(32),P=a.n(C),x=a(52),I=a.n(x),D=a(371),N=a(156),F=function(e){var t=e.meta,a=t.limit,n=t.count,r=t.offset,o=e.apiProps,i=e.apiRequest,c=e.className,s=e.isCompact,u=I()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:c},l.a.createElement(N.Pagination,P()({perPage:a||50,itemCount:n||0,onPerPageSelect:function(e,t){return i(o,{offset:r,limit:t})},page:Object(y.b)(a,r),onSetPage:function(e,t,n){var r={offset:Object(y.c)(t,a),limit:a},c=function(){return i(o,r)};return n?Object(D.a)(c,250)():c()},direction:"down",isCompact:s},u)))};F.propTypes={meta:u.a.shape({count:u.a.number,limit:u.a.number.isRequired,offset:u.a.number.isRequired}),apiRequest:u.a.func.isRequired,apiProps:u.a.any,className:u.a.string,isCompact:u.a.bool},F.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1};var V=F,G=function(e){var t=e.children;return l.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};G.propTypes={children:u.a.oneOfType([u.a.node,u.a.arrayOf(u.a.node)])};var W=G;function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return L}));var L=function(e){var t=e.isSelectable,a=e.createRows,n=e.columns,r=e.fetchData,o=e.toolbarButtons,s=e.data,u=e.actionResolver,y=e.routes,w=e.titlePlural,E=e.titleSingular,O=e.pagination,k=e.setCheckedItems,j=e.filterValue,T=e.onFilterChange,C=e.isLoading,P=e.onCollapse,x=e.renderEmptyState,I=Object(c.useState)([]),D=i()(I,2),N=D[0],F=D[1];Object(c.useEffect)((function(){F(a(s))}),[s]);var G=function(e,t){return e.map((function(e){return e.id===t?A({},e,{isOpen:!e.isOpen}):A({},e)}))},B=function(e,t){var a=e.map((function(e){return e.id===t?A({},e,{selected:!e.selected}):A({},e)})),n=a.filter((function(e){return e.id&&e.selected}));return k(n),a};return l.a.createElement(q.Section,{type:"content","page-type":"tab-".concat(w),id:"tab-".concat(w)},y(),function(e){return l.a.createElement(p.Toolbar,{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg pf-u-pb-lg top-toolbar"},l.a.createElement(d.Level,{style:{flex:1}},l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(S,{onFilterChange:T,searchValue:j,isClearable:!0,placeholder:"Filter by ".concat(E)}),o())),l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(f.ToolbarGroup,null,l.a.createElement(m.ToolbarItem,null,l.a.createElement(V,{apiRequest:r,isDisabled:e,meta:O,isCompact:!0})))))))}(C),C&&l.a.createElement(R.b,null),C||0!==N.length?l.a.createElement(c.Fragment,null,!C&&l.a.createElement(g.b,{"aria-label":"".concat(w," table"),onCollapse:function(e,t,a,n){var r=n.id;return P?P(r,F,G):F((function(e){return G(e,r)}))},rows:N,cells:n,onSelect:t&&function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n.id;return F(-1===a?N.map((function(e){return A({},e,{selected:t})})):function(e){return B(e,r)})},actionResolver:u,className:"table-fix"},l.a.createElement(h.a,null),l.a.createElement(v.a,null)),O.count>0&&l.a.createElement(W,null,l.a.createElement(V,{dropDirection:"up",meta:O,apiRequest:r}))):x())};L.propTypes={isSelectable:u.a.bool,createRows:u.a.func.isRequired,columns:u.a.array.isRequired,toolbarButtons:u.a.func,fetchData:u.a.func.isRequired,data:u.a.array,pagination:u.a.shape({limit:u.a.number,offset:u.a.number,count:u.a.number}),titlePlural:u.a.string,titleSingular:u.a.string,routes:u.a.func,actionResolver:u.a.func,setCheckedItems:u.a.func,filterValue:u.a.string,onFilterChange:u.a.func,isLoading:u.a.bool,onCollapse:u.a.func,renderEmptyState:u.a.func},L.defaultProps={requests:[],isLoading:!1,pagination:y.a,toolbarButtons:function(){return null},isSelectable:null,routes:function(){return null},renderEmptyState:function(){return null}}}}]);
//# sourceMappingURL=../sourcemaps/workflows.js.map