(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{2203:function(e,t,n){"use strict";n.r(t);var a=n(31),r=n.n(a),o=n(47),c=n.n(o),i=n(3),l=n.n(i),u=n(0),s=n.n(u),p=n(39),f=n(18),m=n(26),d=n(380),b=n(358),v=n(74),g=n(368),w=n.n(g),h=n(375),y=n(4),E=n(34),O=n.n(E),k=n(51),j=n.n(k),S=n(82),T=n(76),q=n(23),P=Object(S.g)(),x=Object(S.f)();function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.a,n="&limit=".concat(t.limit,"&offset=").concat(t.offset),a="&filter[name][contains_i]=".concat(e);return Object(S.b)().get("".concat(q.a,"/workflows/?").concat(a).concat(n))}function R(e){return I.apply(this,arguments)}function I(){return(I=j()(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.showWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return N.apply(this,arguments)}function N(){return(N=j()(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return V.apply(this,arguments)}function V(){return(V=j()(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=j()(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(e,t){return{type:y.k,payload:C(e,t)}},W=function(e){return{type:y.j,payload:R(e)}},B=function(e){return{type:y.a,payload:(t=e,x.listTemplates().then((function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id})).then((function(e){return P.addWorkflowToTemplate(e,t,{})}))),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding approval process",description:"The approval process was added successfully."}}}};var t},A=function(e){return{type:y.n,payload:(t=e,P.updateWorkflow(t.id,t)),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating approval process",description:"The approval process was updated successfully."}}}};var t},L=function(e){return{type:y.l,payload:D(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval process",description:"The approval process was removed successfully."}}}}},M=function(e){return{type:y.m,payload:F(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval processes",description:"The selected approval processes were removed successfully."}}}}},z=n(1),K=n.n(z),_=n(2195),J=n(32),U=n(84),H=n(56),Q=n(348),X=n(351),Y=n(148),Z=n(149),$=n(75),ee=function(e){var t=e.formData,n=t||{name:"",description:"",wfGroups:[]},a=n.name,r=n.description,o=n.wfGroups;return s.a.createElement(u.Fragment,null,s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement($.Title,{size:"xl"}," Review ")),s.a.createElement(X.StackItem,null,s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement(Z.TextContent,null,s.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.h5},"Review and confirm your inputs. If there is anything incorrect, click Back and revise."))),s.a.createElement(X.StackItem,null,s.a.createElement(U.Grid,{gutter:"md"},s.a.createElement(H.GridItem,{span:2},s.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.h5},"Name")),s.a.createElement(H.GridItem,{span:10},s.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.p},a))),s.a.createElement(U.Grid,{gutter:"md"},s.a.createElement(H.GridItem,{span:2},s.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.h5},"Description")),s.a.createElement(H.GridItem,{span:10},s.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.p},r))),o&&o.length>0&&o.map((function(e,t){return s.a.createElement(u.Fragment,{key:"Groups"},s.a.createElement(U.Grid,{gutter:"md"},s.a.createElement(H.GridItem,{span:2},s.a.createElement(Y.Text,{key:e.value,className:"data-table-detail heading",component:Y.TextVariants.h5},0===t?"Groups":"")),s.a.createElement(H.GridItem,{span:10},s.a.createElement(Y.Text,{key:e.label,className:"data-table-detail content",component:Y.TextVariants.p},"".concat(o[t].label)))))})))))))};ee.propTypes={formData:K.a.object};var te=ee,ne=n(86),ae=n(49),re=n(357),oe=n(425),ce=n(363),ie=function(e){return function(e){return C(e)}(e).then((function(t){return t.data.find((function(t){return e===t.name}))?"Name has already been taken":void 0}))},le=function(e){var t=e.formData,n=e.initialValue,a=e.handleChange,r=e.setIsValid,o=e.title,i=void 0===o?void 0:o,l=t.name||"",p=t.description||"",f=Object(u.useState)(void 0),m=c()(f,2),d=m[0],b=m[1],v=function(e){b(e),r(!e)},g=function(e){var t,a;!e||e.length<1?b("Enter a name for the approval process"):n&&n.name===e?b(void 0):(t=e,a=v,Object(ce.a)(ie(t).then((function(e){return a(e)}))))};return s.a.createElement(u.Fragment,null,s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement($.Title,{size:"md"}," ",i||"Enter your information"," ")),s.a.createElement(X.StackItem,null,s.a.createElement(ne.Form,null,s.a.createElement(ae.FormGroup,{label:"Approval process name",isRequired:!0,fieldId:"workflow-name",isValid:!d,helperTextInvalid:d},s.a.createElement(re.TextInput,{isRequired:!0,type:"text",id:"workflow-name",name:"workflow-name","aria-describedby":"workflow-name",value:l,isValid:!d,onBlur:function(){return g(l)},onChange:function(e,t){return function(e){b(!e||e.length<1?"Enter a name for the approval process":void 0),a({name:e})}(t.currentTarget.value)}})),s.a.createElement(ae.FormGroup,{label:"Description",fieldId:"workflow-description"},s.a.createElement(oe.TextArea,{type:"text",id:"workflow-description",name:"workflow-description",value:p,onChange:function(e,t){return a({description:t.currentTarget.value})}}))))))};le.propTypes={name:K.a.string,description:K.a.string,title:K.a.string,formData:K.a.object,handleChange:K.a.func.isRequired,isValid:K.a.bool,setIsValid:K.a.func.isRequired,initialValue:K.a.shape({name:K.a.string})};var ue=le,se=n(2200);Object(S.d)();var pe=function(e){var t="&name=".concat(e);return Object(S.b)().get("".concat(q.b,'/groups/?role_names=",Approval Administrator,Approval Approver,"\n  ').concat(e&&e.length>0?t:"")).then((function(e){var t=e.data;return t&&t.length>0?t.map((function(e){var t=e.uuid;return{label:e.name,value:t}})):void 0}))},fe=n(40);function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var de=function(e){var t=e.formData,n=e.handleChange,a=e.title,r=Object(u.useState)(!1),o=c()(r,2),i=o[0],f=o[1],m=Object(u.useState)([]),d=c()(m,2),b=d[0],v=d[1],g=Object(u.useState)([]),w=c()(g,2),h=w[0],E=w[1],O=Object(u.useState)([]),k=c()(O,2),j=k[0],S=k[1],T=Object(p.useSelector)((function(e){return e.groupReducer.groups||[]})),q=Object(p.useDispatch)();Object(u.useEffect)((function(){S(!0),q({type:y.f,payload:pe()}).then((function(){return S(!1)}))}),[]),Object(u.useEffect)((function(){v(t.wfGroups?t.wfGroups:[])}),[t.wfGroups]);return s.a.createElement(u.Fragment,null,s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,{key:"title"},s.a.createElement($.Title,{size:"md"},a||"Set groups")),s.a.createElement(X.StackItem,{key:"group"},j&&s.a.createElement(fe.e,null),!j&&s.a.createElement(se.a,{cacheOptions:!0,isClearable:!0,isMulti:!0,styles:{menuPortal:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{zIndex:9999})}},menuPortalTarget:document.body,menuPosition:"fixed",menuPlacement:"bottom",label:"Group","aria-label":"Group",onToggle:function(e){f(e)},key:"groups",onChange:function(e){return v(t=e),void n({wfGroups:t});var t},value:b,inpuValue:h,isexpanded:i,loadOptions:Object(ce.a)(pe),defaultOptions:T,onInputChange:function(e){return t=e.replace(/\W/g,""),void E(t);var t}}))))};de.propTypes={name:K.a.string,description:K.a.string,title:K.a.string,formData:K.a.object,handleChange:K.a.func};var be=de,ve=n(347);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var we=function(){var e=Object(u.useState)({wfGroups:[]}),t=c()(e,2),n=t[0],a=t[1],r=Object(p.useDispatch)(),o=Object(f.k)().push,i=Object(p.useSelector)((function(e){return e.groupReducer.groups})),m=Object(u.useState)(void 0!==n.name&&n.name.length>0),d=c()(m,2),b=d[0],v=d[1],g=Object(u.useState)(1),w=c()(g,2),h=w[0],y=w[1],E=function(e){a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e))},O=[{id:1,name:"General information",enableNext:b&&n.name&&n.name.length>0,component:s.a.createElement(ue,{formData:n,handleChange:E,setIsValid:v})},{id:2,name:"Set groups",canJumpTo:h>=2,enableNext:b&&n.name&&n.name.length>0,component:s.a.createElement(be,{formData:n,handleChange:E,options:i})},{id:3,canJumpTo:h>=3,enableNext:b&&n.name&&n.name.length>0,name:"Review",component:s.a.createElement(te,{formData:n,options:i}),nextButtonText:"Confirm"}];return s.a.createElement(_.Wizard,{title:"Create approval process",isOpen:!0,onClose:function(){r(Object(J.addNotification)({variant:"warning",title:"Creating approval process",dismissable:!0,description:"Creating approval process was cancelled by the user."})),o(ve.a.workflows.index)},onSave:function(){var e=n.name,t=n.description,a=n.wfGroups,c={name:e,description:t,group_refs:a&&a.length>0?a.map((function(e){return{name:e.label,uuid:e.value}})):[]};o(ve.a.workflows.index),r(B(c))},onNext:function(e){var t=e.id;y((function(e){return e<t?t:e}))},steps:O})};we.defaultProps={rbacGroups:[],initialValues:{}},we.propTypes={match:K.a.object,rbacGroups:K.a.arrayOf(K.a.shape({value:K.a.oneOfType([K.a.number,K.a.string]).isRequired,label:K.a.string.isRequired})).isRequired};var he=we,ye=n(81),Ee=n(397),Oe=n(356),ke=n(381),je=n(382),Se=function(e){var t=e.formData,n=e.handleChange,a=e.isValid,r=e.setIsValid,o=e.title,c=void 0===o?void 0:o,i=t.sequence;return s.a.createElement(u.Fragment,null,s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement($.Title,{size:"md"}," ",c||"Enter your information"," ")),s.a.createElement(X.StackItem,null,s.a.createElement(ne.Form,null,s.a.createElement(ae.FormGroup,{label:"Enter sequence",isRequired:!0,fieldId:"workflow-sequence",isValid:a,helperTextInvalid:"Enter a positive number"},s.a.createElement(re.TextInput,{isRequired:!0,type:"number",id:"workflow-sequence",isValid:a,name:"workflow-sequence","aria-describedby":"workflow-name",value:i,onChange:function(e,t){return function(e){r(e>=0),n({sequence:e})}(t.currentTarget.value)}}))))))};Se.propTypes={sequence:K.a.string,title:K.a.string,formData:K.a.object,handleChange:K.a.func.isRequired,setIsValid:K.a.func.isRequired,isValid:K.a.bool};var Te=Se,qe=n(353);function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce=function(e){var t=e.addNotification,n=e.fetchWorkflow,a=e.updateWorkflow,r=e.postMethod,o=e.workflow,i=e.isFetching,l=e.editType,p=Object(u.useState)({}),m=c()(p,2),d=m[0],b=m[1],g=Object(u.useState)({}),w=c()(g,2),h=w[0],y=w[1],E=Object(u.useState)(!0),O=c()(E,2),k=O[0],j=O[1],S=Object(f.k)().push,T=Object(qe.a)(["workflow"]),q=c()(T,1)[0].workflow,P=function(e){return b(xe({},d,{},e))};Object(u.useEffect)((function(){n(q).then((function(e){b(xe({},d,{},e.value)),y(xe({},e.value))}))}),[]);var x=function(){var e="sequence"===l?{title:"Edit approval process's sequence",description:"Edit approval process's sequence was cancelled by the user."}:{title:"Edit approval process's information",description:"Edit approval process's information was cancelled by the user."};t({variant:"warning",title:e.title,dismissable:!0,description:e.description}),S("/workflows")};return s.a.createElement(Oe.Modal,{title:"sequence"===l?"Edit sequence":"Edit information",width:"40%",isOpen:!0,onClose:x},s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement(ae.FormGroup,{fieldId:"edit-workflow-info-modal-info"},i&&s.a.createElement(fe.e,null),!i&&("info"===l?s.a.createElement(ue,{formData:d,initialValue:h,handleChange:P,setIsValid:j,title:"Make any changes to approval process ".concat(o.name)}):s.a.createElement(Te,{formData:d,initialValue:h,handleChange:P,isValid:k,setIsValid:j,title:"Set the sequence for the approval process ".concat(o.name)})))),s.a.createElement(X.StackItem,null,s.a.createElement(Ee.ActionGroup,null,s.a.createElement(ke.Split,{gutter:"md"},s.a.createElement(je.SplitItem,null,s.a.createElement(v.Button,{"aria-label":"Save",id:"save-edit-workflow-info",variant:"primary",type:"submit",onClick:function(){if(k){var e=d.name,t=d.description,n=d.sequence;a({id:q,name:e,description:t,sequence:n}).then((function(){return r()})).then((function(){return S("/workflows")}))}}},"Save")),s.a.createElement(je.SplitItem,null,s.a.createElement(v.Button,{id:"cancel-edit-workflow-info","aria-label":"Cancel",variant:"secondary",type:"button",onClick:x},"Cancel")))))))};Ce.defaultProps={isFetching:!1,editType:"info"},Ce.propTypes={addNotification:K.a.func.isRequired,fetchWorkflow:K.a.func.isRequired,postMethod:K.a.func.isRequired,updateWorkflow:K.a.func.isRequired,workflow:K.a.object,id:K.a.string,editType:K.a.string,isFetching:K.a.bool};var Re=Object(p.connect)((function(e){var t=e.workflowReducer;return{workflow:t.workflow,isFetching:t.isRecordLoading}}),(function(e){return Object(ye.a)({addNotification:J.addNotification,addWorkflow:B,updateWorkflow:A,fetchWorkflow:W},e)}))(Ce);function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ne=function(e){var t=e.addNotification,n=e.fetchWorkflow,a=e.updateWorkflow,r=e.postMethod,o=e.isFetching,i=Object(u.useState)({}),l=c()(i,2),p=l[0],m=l[1],d=Object(f.k)().push,b=Object(qe.a)(["workflow"]),g=c()(b,1)[0].workflow;Object(u.useEffect)((function(){n(g).then((function(e){return m((t=e.value,n=t.group_refs.map((function(e){return{label:e.name,value:e.uuid}})),De({},t,{wfGroups:n})));var t,n}))}),[]);var w=function(){t({variant:"warning",title:"Edit approval process's groups",dismissable:!0,description:"Edit approval process's groups was cancelled by the user."}),d("/workflows")};return s.a.createElement(Oe.Modal,{title:"Edit approval process's groups",width:"40%",isOpen:!0,onClose:w},s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement(ae.FormGroup,{fieldId:"workflow-groups-formgroup"},o&&s.a.createElement(fe.e,null),!o&&s.a.createElement(X.StackItem,{className:"groups-modal"},s.a.createElement(be,{className:"groups-modal",formData:p,handleChange:function(e){m(De({},p,{},e))},title:"Add or remove ".concat(p.name,"'s groups")})))),s.a.createElement(X.StackItem,null,s.a.createElement(Ee.ActionGroup,null,s.a.createElement(ke.Split,{gutter:"md"},s.a.createElement(je.SplitItem,null,s.a.createElement(v.Button,{"aria-label":"Save",variant:"primary",type:"submit",isDisabled:o,onClick:function(){var e=p.wfGroups,t={group_refs:e?e.map((function(e){return{name:e.label,uuid:e.value}})):[]};a(De({id:g},t)).then((function(){return r()})).then((function(){return d("/workflows")}))}},"Save")),s.a.createElement(je.SplitItem,null,s.a.createElement(v.Button,{"aria-label":"Cancel",variant:"secondary",type:"button",onClick:w},"Cancel")))))))};Ne.defaultProps={isFetching:!1},Ne.propTypes={addNotification:K.a.func.isRequired,fetchWorkflow:K.a.func.isRequired,postMethod:K.a.func.isRequired,updateWorkflow:K.a.func.isRequired,isFetching:K.a.bool};var Fe=Object(p.connect)((function(e){return{isFetching:e.workflowReducer.isRecordLoading}}),(function(e){return Object(ye.a)({addNotification:J.addNotification,addWorkflow:B,updateWorkflow:A,fetchWorkflow:W},e)}))(Ne),Ve=n(107),Ge=n(414),We=n.n(Ge),Be=function(e){var t=e.ids,n=e.removeWorkflow,a=e.removeWorkflows,r=e.fetchData,o=e.setSelectedWorkflows,i=Object(f.k)(),l=i.push,u=i.goBack,p=Object(qe.a)(["workflow"]),m=c()(p,1)[0].workflow;if(!(m||t&&0!==t.length))return null;var d=function(){return u()};return s.a.createElement(Oe.Modal,{isOpen:!0,isSmall:!0,width:"40%",title:"",onClose:d,actions:[s.a.createElement(v.Button,{id:"cancel-remove-workflow",key:"cancel",variant:"secondary",type:"button",onClick:d},"Cancel"),s.a.createElement(v.Button,{id:"submit-remove-workflow",key:"submit",variant:"primary",type:"button",onClick:function(){return(m?n(m):a(t)).then(o([])).then(r()).then(l(ve.a.workflows.index))}},"Confirm")]},s.a.createElement(ke.Split,{gutter:"md"},s.a.createElement(je.SplitItem,null,s.a.createElement(We.a,{size:"xl",fill:"#f0ab00"})),s.a.createElement(je.SplitItem,null,s.a.createElement(Z.TextContent,null,s.a.createElement(Y.Text,{component:Y.TextVariants.p},s.a.createElement(Ve.a,{id:"remove-workflow-modal",defaultMessage:"Removing {count, number} {count, plural,\n              one {approval process}\n              other {approval processes}\n            }",values:{count:m?1:t.length}}))))))};Be.propTypes={removeWorkflows:K.a.func.isRequired,removeWorkflow:K.a.func.isRequired,fetchData:K.a.func.isRequired,setSelectedWorkflows:K.a.func.isRequired,ids:K.a.array};var Ae=Object(p.connect)(null,(function(e){return Object(ye.a)({removeWorkflow:L,removeWorkflows:M},e)}))(Be),Le=n(21),Me=n.n(Le),ze=function(e){var t=e.description,n=e.groupRefs;return s.a.createElement(u.Fragment,null,s.a.createElement(Z.TextContent,null,s.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.small},"Description"),s.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.h5},t)),s.a.createElement(Z.TextContent,null,s.a.createElement(u.Fragment,null,s.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.small},"Groups"),s.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.h5},function(e){return e.map((function(e){return e.name}))}(n).join(",")))))};ze.propTypes={description:K.a.string,groupRefs:K.a.array.isRequired,id:K.a.string.isRequired};var Ke=ze,_e=function(e){return e.reduce((function(e,t,n){var a=t.id,r=t.name,o=t.description,c=t.sequence,i=t.group_refs;return[].concat(Me()(e),[{id:a,isOpen:!1,selected:!1,cells:[r,o,c]},{parent:2*n,cells:[{title:s.a.createElement(Ke,{description:o,groupRefs:i,id:a})}]}])}),[])},Je=n(417),Ue=n(374),He=n(398),Qe=n(42),Xe=n(412);function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $e=[{title:"Name",cellFormatters:[h.b]},"Description","Sequence"],et=Object(ce.a)((function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T.a;n(!0),t(G(e,a)).then((function(){return n(!1)}))}),1e3),tt={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},nt=function(e,t){switch(t.type){case"setFetching":return Ze({},e,{isFetching:t.payload});case"setFilterValue":return Ze({},e,{filterValue:t.payload});case"setFilteringFlag":return Ze({},e,{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(u.useState)([]),t=c()(e,2),n=t[0],a=t[1],o=Object(u.useReducer)(nt,tt),i=c()(o,2),l=i[0],g=l.filterValue,h=l.isFetching,E=l.isFiltering,O=i[1],k=Object(p.useSelector)((function(e){return e.workflowReducer.workflows})),j=k.data,S=k.meta,q=Object(p.useDispatch)(),P=Object(f.k)();Object(u.useEffect)((function(){q(G(g,T.a)).then((function(){return O({type:"setFetching",payload:!1})})),Object(Qe.g)()}),[]);var x=function(e){O({type:"setFilterValue",payload:e}),et(e,q,(function(e){return O({type:"setFilteringFlag",payload:e})}),Ze({},S,{offset:0}))},C=function(e,t){O({type:"setFetching",payload:!0}),q(G(g,t)).then((function(){return O({type:"setFetching",payload:!1})})).catch((function(){return O({type:"setFetching",payload:!1})}))},R=n.length>0;return s.a.createElement(u.Fragment,null,s.a.createElement(Ue.a,null,s.a.createElement(Ue.b,{title:"Approval"}),s.a.createElement(He.a,{tabItems:[{eventKey:0,title:"Request queue",name:"/requests"},{eventKey:1,title:"Approval processes",name:"/workflows"}]})),s.a.createElement(Je.a,{data:j,isSelectable:!0,createRows:_e,columns:$e,fetchData:C,routes:function(){return s.a.createElement(u.Fragment,null,s.a.createElement(f.d,{exact:!0,path:ve.a.workflows.add,render:function(e){return s.a.createElement(he,r()({},e,{postMethod:C}))}}),s.a.createElement(f.d,{exact:!0,path:ve.a.workflows.editInfo,render:function(e){return s.a.createElement(Re,r()({editType:"info"},e,{postMethod:C}))}}),s.a.createElement(f.d,{exact:!0,path:ve.a.workflows.editGroups,render:function(e){return s.a.createElement(Fe,r()({editType:"groups"},e,{postMethod:C}))}}),s.a.createElement(f.d,{exact:!0,path:ve.a.workflows.editSequence,render:function(e){return s.a.createElement(Re,r()({editType:"sequence"},e,{postMethod:C}))}}),s.a.createElement(f.d,{exact:!0,path:ve.a.workflows.remove,render:function(e){return s.a.createElement(Ae,r()({},e,{ids:n,fetchData:C,setSelectedWorkflows:a}))}}))},actionResolver:function(e,t){return t.rowIndex%2==1?null:[{title:"Edit info",onClick:function(e,t,n){return P.push({pathname:ve.a.workflows.editInfo,search:"?workflow=".concat(n.id)})}},{title:"Edit groups",onClick:function(e,t,n){return P.push({pathname:ve.a.workflows.editGroups,search:"?workflow=".concat(n.id)})}},{title:"Edit sequence",onClick:function(e,t,n){return P.push({pathname:ve.a.workflows.editSequence,search:"?workflow=".concat(n.id)})}},{title:"Delete",style:{color:"var(--pf-global--danger-color--100)"},onClick:function(e,t,n){return P.push({pathname:ve.a.workflows.remove,search:"?workflow=".concat(n.id)})}}]},titlePlural:"approval processes",titleSingular:"approval process",pagination:S,setCheckedItems:function(e){return a(e.map((function(e){return e.id})))},toolbarButtons:function(){return s.a.createElement(d.ToolbarGroup,{className:"pf-u-pl-lg top-toolbar"},s.a.createElement(b.ToolbarItem,null,s.a.createElement(m.Link,{id:"add-workflow-link",to:{pathname:ve.a.workflows.add}},s.a.createElement(v.Button,{variant:"primary","aria-label":"Create approval process"},"Create approval process"))),s.a.createElement(b.ToolbarItem,null,s.a.createElement(m.Link,{id:"remove-multiple-workflows",className:R?"":"disabled-link",to:{pathname:ve.a.workflows.remove}},s.a.createElement(v.Button,{variant:"link",isDisabled:!R,style:{color:R?"var(--pf-global--danger-color--100)":"var(--pf-global--disabled-color--100)"},"aria-label":"Delete approval process"},"Delete"))))},filterValue:g,onFilterChange:x,isLoading:h||E,onCollapse:function(e,t,n){q(function(e){return{type:y.d,payload:e}}(e)),t((function(t){return n(t,e)}))},renderEmptyState:function(){return s.a.createElement(Xe.a,{title:""===g?"No approval processes":"No results found",Icon:w.a,PrimaryAction:function(){return""!==g?s.a.createElement(v.Button,{onClick:function(){return x("")},variant:"link"},"Clear all filters"):null},description:""===g?"No approval processes.":"No results match the filter criteria. Remove all filters or clear all filters to show results."})}}))}},347:function(e,t,n){"use strict";t.a={requests:{index:"/requests",addComment:"/requests/add-comment",approve:"/requests/approve",deny:"/requests/deny"},request:{index:"/request",addComment:"/request/add-comment",approve:"/request/approve",deny:"/request/deny"},workflows:{index:"/workflows",add:"/workflows/add-workflow",remove:"/workflows/remove",editInfo:"/workflows/edit-info",editGroups:"/workflows/edit-groups",editSequence:"/workflows/edit-sequence"}}},353:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(18);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(o.l)(),n=t.search,a=new URLSearchParams(n);return[e.reduce((function(e,t){return i({},e,r()({},t,a.get(t)))}),{}),n,a]}},363:function(e,t,n){"use strict";var a=n(373);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(a.a)(e,t,n)}},366:function(e,t,n){},374:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),c=n.n(o),i=n(150),l=n(151),u=n(148),s=n(149),p=n(40),f=n(26),m=n(378),d=n(379),b=function(e){var t=e.breadcrumbs;return t?r.a.createElement(m.Breadcrumb,null,Object.values(t).map((function(e){return r.a.createElement(d.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r.a.createElement(f.NavLink,{isActive:function(){return!1},exact:!0,to:e.to},e.title)||e.title)}))):null};b.propTypes={breadcrumbs:c.a.arrayOf(c.a.shape({title:c.a.string.isRequired,isActive:c.a.bool,to:c.a.string}))};var v=b;n(366);n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return w}));var g=function(e){var t=e.children,n=e.breadcrumbs,a=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(a?"pf-u-pb-sm":""," top-toolbar")},n&&r.a.createElement(i.Level,{className:"pf-u-mb-md"},r.a.createElement(v,{breadcrumbs:n})),t)};g.propTypes={children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]).isRequired,breadcrumbs:c.a.array,paddingBottom:c.a.bool},g.defaultProps={paddingBottom:!1};var w=function(e){var t=e.title,n=e.description,o=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement(i.Level,null,r.a.createElement(l.LevelItem,null,r.a.createElement(s.TextContent,{className:"pf-u-mb-sm"},r.a.createElement(u.Text,{component:u.TextVariants.h1},t||r.a.createElement(p.d,null))),n&&r.a.createElement(s.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},r.a.createElement(u.Text,{component:u.TextVariants.p},n))),o))};w.propTypes={title:c.a.string,description:c.a.string,children:c.a.oneOfType([c.a.node,c.a.arrayOf(c.a.node)])}},398:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),c=n.n(o),i=n(18),l=n(396),u=n(395),s=function(e){var t=e.history.push,n=e.location.pathname,a=e.tabItems,o=a.find((function(e){var t=e.name;return n.includes(t)}));return r.a.createElement(l.Tabs,{className:"pf-u-mt-sm",activeKey:o?o.eventKey:0,onSelect:function(e,n){return t(a[n].name)}},a.map((function(e){return r.a.createElement(u.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}),history:c.a.shape({push:c.a.func.isRequired}),tabItems:c.a.array.isRequired},t.a=Object(i.o)(s)},412:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),c=n.n(o),i=(n(74),n(88)),l=n(96),u=n(89),s=n(413),p=n(148),f=n(149),m=n(369),d=(n(26),function(e){var t=e.title,n=e.Icon,a=e.description,o=e.PrimaryAction,c=e.renderDescription;return r.a.createElement(m.EmptyTable,{centered:!0,"aria-label":"No records"},r.a.createElement(i.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(l.EmptyStateIcon,{icon:n}),r.a.createElement(f.TextContent,null,r.a.createElement(p.Text,{component:p.TextVariants.h1},t)),r.a.createElement(u.EmptyStateBody,null,a,c()),r.a.createElement(s.EmptyStateSecondaryActions,null,o&&r.a.createElement(o,null))))});d.defaultProps={renderDescription:function(){return null}},d.propTypes={title:c.a.string.isRequired,Icon:c.a.any.isRequired,description:c.a.string.isRequired,PrimaryAction:c.a.any,renderDescription:c.a.func},t.a=d;c.a.string.isRequired,c.a.string.isRequired},417:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(47),c=n.n(o),i=n(0),l=n.n(i),u=n(1),s=n.n(u),p=n(399),f=n(380),m=n(358),d=n(150),b=n(151),v=n(359),g=n(476),w=n(475),h=n(76),y=n(368),E=n.n(y),O=n(153),k=n.n(O),j=n(357),S=function(e){var t=e.searchValue,n=e.onFilterChange,a=e.placeholder,r=e.isClearable;return l.a.createElement(m.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(j.TextInput,{placeholder:a,value:t,type:"text",onChange:n,"aria-label":a}),l.a.createElement("span",{className:"filter-icons-container"},r&&t&&l.a.createElement(k.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return n("")}})||l.a.createElement(E.a,null))))};S.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},S.defaultProps={searchValue:"",isClearable:!1};var T=S,q=n(369),P=n(40),x=n(31),C=n.n(x),R=n(50),I=n.n(R),D=n(373),N=n(155),F=function(e){var t=e.meta,n=t.limit,a=t.count,r=t.offset,o=e.apiProps,c=e.apiRequest,i=e.className,u=e.isCompact,s=I()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:i},l.a.createElement(N.Pagination,C()({perPage:n||50,itemCount:a||0,onPerPageSelect:function(e,t){return c(o,{offset:r,limit:t})},page:Object(h.b)(n,r),onSetPage:function(e,t,a){var r={offset:Object(h.c)(t,n),limit:n},i=function(){return c(o,r)};return a?Object(D.a)(i,250)():i()},direction:"down",isCompact:u},s)))};F.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},F.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1};var V=F,G=function(e){var t=e.children;return l.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};G.propTypes={children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)])};var W=G;function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return L}));var L=function(e){var t=e.isSelectable,n=e.createRows,a=e.columns,r=e.fetchData,o=e.toolbarButtons,u=e.data,s=e.actionResolver,h=e.routes,y=e.titlePlural,E=e.titleSingular,O=e.pagination,k=e.setCheckedItems,j=e.filterValue,S=e.onFilterChange,x=e.isLoading,C=e.onCollapse,R=e.renderEmptyState,I=Object(i.useState)([]),D=c()(I,2),N=D[0],F=D[1];Object(i.useEffect)((function(){F(n(u))}),[u]);var G=function(e,t){return e.map((function(e){return e.id===t?A({},e,{isOpen:!e.isOpen}):A({},e)}))},B=function(e,t){var n=e.map((function(e){return e.id===t?A({},e,{selected:!e.selected}):A({},e)})),a=n.filter((function(e){return e.id&&e.selected}));return k(a),n};return l.a.createElement(q.Section,{type:"content","page-type":"tab-".concat(y),id:"tab-".concat(y)},h(),function(e){return l.a.createElement(p.Toolbar,{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg pf-u-pb-lg top-toolbar"},l.a.createElement(d.Level,{style:{flex:1}},l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(T,{onFilterChange:S,searchValue:j,isClearable:!0,placeholder:"Filter by ".concat(E)}),o())),l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(f.ToolbarGroup,null,l.a.createElement(m.ToolbarItem,null,l.a.createElement(V,{apiRequest:r,isDisabled:e,meta:O,isCompact:!0})))))))}(x),x&&l.a.createElement(P.b,null),x||0!==N.length?l.a.createElement(i.Fragment,null,!x&&l.a.createElement(v.b,{"aria-label":"".concat(y," table"),onCollapse:function(e,t,n,a){var r=a.id;return C?C(r,F,G):F((function(e){return G(e,r)}))},rows:N,cells:a,onSelect:t&&function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=a.id;return F(-1===n?N.map((function(e){return A({},e,{selected:t})})):function(e){return B(e,r)})},actionResolver:s,className:"table-fix"},l.a.createElement(g.a,null),l.a.createElement(w.a,null)),O.count>0&&l.a.createElement(W,null,l.a.createElement(V,{dropDirection:"up",meta:O,apiRequest:r}))):R())};L.propTypes={isSelectable:s.a.bool,createRows:s.a.func.isRequired,columns:s.a.array.isRequired,toolbarButtons:s.a.func,fetchData:s.a.func.isRequired,data:s.a.array,pagination:s.a.shape({limit:s.a.number,offset:s.a.number,count:s.a.number}),titlePlural:s.a.string,titleSingular:s.a.string,routes:s.a.func,actionResolver:s.a.func,setCheckedItems:s.a.func,filterValue:s.a.string,onFilterChange:s.a.func,isLoading:s.a.bool,onCollapse:s.a.func,renderEmptyState:s.a.func},L.defaultProps={requests:[],isLoading:!1,pagination:h.a,toolbarButtons:function(){return null},isSelectable:null,routes:function(){return null},renderEmptyState:function(){return null}}}}]);
//# sourceMappingURL=../sourcemaps/workflows.js.map