(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{2200:function(e,t,n){"use strict";n.r(t);var a=n(31),r=n.n(a),o=n(47),i=n.n(o),c=n(3),l=n.n(c),u=n(0),s=n.n(u),p=n(39),f=n(18),m=n(26),d=n(396),b=n(362),g=n(74),v=n(363),w=n.n(v),h=n(368),y=n(4),E=n(35),O=n.n(E),k=n(54),j=n.n(k),S=n(83),T=n(76),P=n(23),q=Object(S.g)(),x=Object(S.f)();function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.a,n="&limit=".concat(t.limit,"&offset=").concat(t.offset),a="&filter[name][contains_i]=".concat(e);return Object(S.b)().get("".concat(P.a,"/workflows/?").concat(a).concat(n))}function R(e){return I.apply(this,arguments)}function I(){return(I=j()(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.showWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return N.apply(this,arguments)}function N(){return(N=j()(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return V.apply(this,arguments)}function V(){return(V=j()(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=j()(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(e,t){return{type:y.k,payload:C(e,t)}},W=function(e){return{type:y.j,payload:R(e)}},B=function(e){return{type:y.a,payload:(t=e,x.listTemplates().then((function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id})).then((function(e){return q.addWorkflowToTemplate(e,t,{})}))),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding approval process",description:"The approval process was added successfully."}}}};var t},A=function(e){return{type:y.n,payload:(t=e,q.updateWorkflow(t.id,t)),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating approval process",description:"The approval process was updated successfully."}}}};var t},L=function(e){return{type:y.l,payload:D(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval process",description:"The approval process was removed successfully."}}}}},M=function(e){return{type:y.m,payload:F(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval processes",description:"The selected approval processes were removed successfully."}}}}},z=n(1),K=n.n(z),_=n(2192),J=n(33),U=n(84),H=n(56),Q=n(346),X=n(350),Y=n(148),Z=n(149),$=n(75),ee=function(e){var t=e.formData,n=t||{name:"",description:"",wfGroups:[]},a=n.name,r=n.description,o=n.wfGroups;return s.a.createElement(u.Fragment,null,s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement($.Title,{size:"xl"}," Review ")),s.a.createElement(X.StackItem,null,s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement(Z.TextContent,null,s.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.h5},"Review and confirm your inputs. If there is anything incorrect, click Back and revise."))),s.a.createElement(X.StackItem,null,s.a.createElement(U.Grid,{gutter:"md"},s.a.createElement(H.GridItem,{span:2},s.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.h5},"Name")),s.a.createElement(H.GridItem,{span:10},s.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.p},a))),s.a.createElement(U.Grid,{gutter:"md"},s.a.createElement(H.GridItem,{span:2},s.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.h5},"Description")),s.a.createElement(H.GridItem,{span:10},s.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.p},r))),o&&o.length>0&&o.map((function(e,t){return s.a.createElement(u.Fragment,{key:"Groups"},s.a.createElement(U.Grid,{gutter:"md"},s.a.createElement(H.GridItem,{span:2},s.a.createElement(Y.Text,{key:e.value,className:"data-table-detail heading",component:Y.TextVariants.h5},0===t?"Groups":"")),s.a.createElement(H.GridItem,{span:10},s.a.createElement(Y.Text,{key:e.label,className:"data-table-detail content",component:Y.TextVariants.p},"".concat(o[t].label)))))})))))))};ee.propTypes={formData:K.a.object};var te=ee,ne=n(86),ae=n(49),re=n(355),oe=n(418),ie=n(360),ce=function(e){return function(e){return C(e)}(e).then((function(t){return t.data.find((function(t){return e===t.name}))?"Name has already been taken":void 0}))},le=function(e){var t=e.formData,n=e.initialValue,a=e.handleChange,r=e.setIsValid,o=e.title,c=void 0===o?void 0:o,l=t.name||"",p=t.description||"",f=Object(u.useState)(void 0),m=i()(f,2),d=m[0],b=m[1],g=function(e){b(e),r(!e)},v=function(e){var t,a;!e||e.length<1?b("Enter a name for the approval process"):n&&n.name===e?b(void 0):(t=e,a=g,Object(ie.a)(ce(t).then((function(e){return a(e)}))))};return s.a.createElement(u.Fragment,null,s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement($.Title,{size:"md"}," ",c||"Enter your information"," ")),s.a.createElement(X.StackItem,null,s.a.createElement(ne.Form,null,s.a.createElement(ae.FormGroup,{label:"Approval process name",isRequired:!0,fieldId:"workflow-name",isValid:!d,helperTextInvalid:d},s.a.createElement(re.TextInput,{isRequired:!0,type:"text",id:"workflow-name",name:"workflow-name","aria-describedby":"workflow-name",value:l,isValid:!d,onBlur:function(){return v(l)},onChange:function(e,t){return function(e){b(!e||e.length<1?"Enter a name for the approval process":void 0),a({name:e})}(t.currentTarget.value)}})),s.a.createElement(ae.FormGroup,{label:"Description",fieldId:"workflow-description"},s.a.createElement(oe.TextArea,{type:"text",id:"workflow-description",name:"workflow-description",value:p,onChange:function(e,t){return a({description:t.currentTarget.value})}}))))))};le.propTypes={name:K.a.string,description:K.a.string,title:K.a.string,formData:K.a.object,handleChange:K.a.func.isRequired,isValid:K.a.bool,setIsValid:K.a.func.isRequired,initialValue:K.a.shape({name:K.a.string})};var ue=le,se=n(2197);Object(S.d)();var pe=function(e){var t="&name=".concat(e);return Object(S.b)().get("".concat(P.b,'/groups/?role_names=",Approval Administrator,Approval Approver,"\n  ').concat(e&&e.length>0?t:"")).then((function(e){var t=e.data;return t&&t.length>0?t.map((function(e){var t=e.uuid;return{label:e.name,value:t}})):void 0}))},fe=n(41);function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var de=function(e){var t=e.formData,n=e.handleChange,a=e.title,r=Object(u.useState)(!1),o=i()(r,2),c=o[0],f=o[1],m=Object(u.useState)([]),d=i()(m,2),b=d[0],g=d[1],v=Object(u.useState)([]),w=i()(v,2),h=w[0],E=w[1],O=Object(u.useState)([]),k=i()(O,2),j=k[0],S=k[1],T=Object(p.useSelector)((function(e){return e.groupReducer.groups||[]})),P=Object(p.useDispatch)();Object(u.useEffect)((function(){S(!0),P({type:y.f,payload:pe()}).then((function(){return S(!1)}))}),[]),Object(u.useEffect)((function(){g(t.wfGroups?t.wfGroups:[])}),[t.wfGroups]);return s.a.createElement(u.Fragment,null,s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,{key:"title"},s.a.createElement($.Title,{size:"md"},a||"Set groups")),s.a.createElement(X.StackItem,{key:"group"},j&&s.a.createElement(fe.e,null),!j&&s.a.createElement(se.a,{cacheOptions:!0,isClearable:!0,isMulti:!0,styles:{menuPortal:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{zIndex:9999})}},menuPortalTarget:document.body,menuPosition:"fixed",menuPlacement:"bottom",label:"Group","aria-label":"Group",onToggle:function(e){f(e)},key:"groups",onChange:function(e){return g(t=e),void n({wfGroups:t});var t},value:b,inpuValue:h,isexpanded:c,loadOptions:Object(ie.a)(pe),defaultOptions:T,onInputChange:function(e){return t=e.replace(/\W/g,""),void E(t);var t}}))))};de.propTypes={name:K.a.string,description:K.a.string,title:K.a.string,formData:K.a.object,handleChange:K.a.func};var be=de,ge=n(348);function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var we=function(){var e=Object(u.useState)({wfGroups:[]}),t=i()(e,2),n=t[0],a=t[1],r=Object(p.useDispatch)(),o=Object(f.k)().push,c=Object(p.useSelector)((function(e){return e.groupReducer.groups})),m=Object(u.useState)(void 0!==n.name&&n.name.length>0),d=i()(m,2),b=d[0],g=d[1],v=Object(u.useState)(1),w=i()(v,2),h=w[0],y=w[1],E=function(e){a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{},e))},O=[{id:1,name:"General information",enableNext:b&&n.name&&n.name.length>0,component:s.a.createElement(ue,{formData:n,handleChange:E,setIsValid:g})},{id:2,name:"Set groups",canJumpTo:h>=2,enableNext:b&&n.name&&n.name.length>0,component:s.a.createElement(be,{formData:n,handleChange:E,options:c})},{id:3,canJumpTo:h>=3,enableNext:b&&n.name&&n.name.length>0,name:"Review",component:s.a.createElement(te,{formData:n,options:c}),nextButtonText:"Confirm"}];return s.a.createElement(_.Wizard,{title:"Create approval process",isOpen:!0,onClose:function(){r(Object(J.addNotification)({variant:"warning",title:"Creating approval process",dismissable:!0,description:"Creating approval process was cancelled by the user."})),o(ge.a.workflows.index)},onSave:function(){var e=n.name,t=n.description,a=n.wfGroups,i={name:e,description:t,group_refs:a&&a.length>0?a.map((function(e){return{name:e.label,uuid:e.value}})):[]};o(ge.a.workflows.index),r(B(i)).then((function(){return r((function(e,t){var n=t().workflowReducer,a=n.filterValue,r=n.workflows.meta,o=r.limit,i=r.offset;e(G(a,{limit:o,offset:i}))}))}))},onNext:function(e){var t=e.id;y((function(e){return e<t?t:e}))},steps:O})};we.defaultProps={rbacGroups:[],initialValues:{}},we.propTypes={match:K.a.object,rbacGroups:K.a.arrayOf(K.a.shape({value:K.a.oneOfType([K.a.number,K.a.string]).isRequired,label:K.a.string.isRequired})).isRequired};var he=we,ye=n(81),Ee=n(389),Oe=n(361),ke=n(370),je=n(371),Se=function(e){var t=e.formData,n=e.handleChange,a=e.isValid,r=e.setIsValid,o=e.title,i=void 0===o?void 0:o,c=t.sequence;return s.a.createElement(u.Fragment,null,s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement($.Title,{size:"md"}," ",i||"Enter your information"," ")),s.a.createElement(X.StackItem,null,s.a.createElement(ne.Form,null,s.a.createElement(ae.FormGroup,{label:"Enter sequence",isRequired:!0,fieldId:"workflow-sequence",isValid:a,helperTextInvalid:"Enter a positive number"},s.a.createElement(re.TextInput,{isRequired:!0,type:"number",id:"workflow-sequence",isValid:a,name:"workflow-sequence","aria-describedby":"workflow-name",value:c,onChange:function(e,t){return function(e){r(e>=0),n({sequence:e})}(t.currentTarget.value)}}))))))};Se.propTypes={sequence:K.a.string,title:K.a.string,formData:K.a.object,handleChange:K.a.func.isRequired,setIsValid:K.a.func.isRequired,isValid:K.a.bool};var Te=Se,Pe=n(352);n(376);function qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce=function(e){var t=e.addNotification,n=e.fetchWorkflow,a=e.updateWorkflow,r=e.postMethod,o=e.workflow,c=e.isFetching,l=e.editType,p=Object(u.useState)({}),m=i()(p,2),d=m[0],b=m[1],v=Object(u.useState)({}),w=i()(v,2),h=w[0],y=w[1],E=Object(u.useState)(!0),O=i()(E,2),k=O[0],j=O[1],S=Object(f.k)().push,T=Object(Pe.a)(["workflow"]),P=i()(T,1)[0].workflow,q=function(e){return b(xe({},d,{},e))};Object(u.useEffect)((function(){n(P).then((function(e){b(xe({},d,{},e.value)),y(xe({},e.value))}))}),[]);var x=function(){var e="sequence"===l?{title:"Edit approval process's sequence",description:"Edit approval process's sequence was cancelled by the user."}:{title:"Edit approval process's information",description:"Edit approval process's information was cancelled by the user."};t({variant:"warning",title:e.title,dismissable:!0,description:e.description}),S("/workflows")};return s.a.createElement(Oe.Modal,{title:"sequence"===l?"Edit sequence":"Edit information",width:"40%",isOpen:!0,onClose:x},s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement(ae.FormGroup,{fieldId:"edit-workflow-info-modal-info"},c&&s.a.createElement(fe.e,null),!c&&("info"===l?s.a.createElement(ue,{formData:d,initialValue:h,handleChange:q,setIsValid:j,title:"Make any changes to approval process ".concat(o.name)}):s.a.createElement(Te,{formData:d,initialValue:h,handleChange:q,isValid:k,setIsValid:j,title:"Set the sequence for the approval process ".concat(o.name)})))),s.a.createElement(X.StackItem,null,s.a.createElement(Ee.ActionGroup,null,s.a.createElement(ke.Split,{gutter:"md"},s.a.createElement(je.SplitItem,null,s.a.createElement(g.Button,{"aria-label":"Save",id:"save-edit-workflow-info",variant:"primary",type:"submit",onClick:function(){if(k){var e=d.name,t=d.description,n=d.sequence;a({id:P,name:e,description:t,sequence:n}).then((function(){return r()})).then((function(){return S("/workflows")}))}}},"Save")),s.a.createElement(je.SplitItem,null,s.a.createElement(g.Button,{id:"cancel-edit-workflow-info","aria-label":"Cancel",variant:"secondary",type:"button",onClick:x},"Cancel")))))))};Ce.defaultProps={isFetching:!1,editType:"info"},Ce.propTypes={addNotification:K.a.func.isRequired,fetchWorkflow:K.a.func.isRequired,postMethod:K.a.func.isRequired,updateWorkflow:K.a.func.isRequired,workflow:K.a.object,id:K.a.string,editType:K.a.string,isFetching:K.a.bool};var Re=Object(p.connect)((function(e){var t=e.workflowReducer;return{workflow:t.workflow,isFetching:t.isRecordLoading}}),(function(e){return Object(ye.a)({addNotification:J.addNotification,addWorkflow:B,updateWorkflow:A,fetchWorkflow:W},e)}))(Ce);function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ne=function(e){var t=e.addNotification,n=e.fetchWorkflow,a=e.updateWorkflow,r=e.postMethod,o=e.isFetching,c=Object(u.useState)({}),l=i()(c,2),p=l[0],m=l[1],d=Object(f.k)().push,b=Object(Pe.a)(["workflow"]),v=i()(b,1)[0].workflow;Object(u.useEffect)((function(){n(v).then((function(e){return m((t=e.value,n=t.group_refs.map((function(e){return{label:e.name,value:e.uuid}})),De({},t,{wfGroups:n})));var t,n}))}),[]);var w=function(){t({variant:"warning",title:"Edit approval process's groups",dismissable:!0,description:"Edit approval process's groups was cancelled by the user."}),d("/workflows")};return s.a.createElement(Oe.Modal,{title:"Edit approval process's groups",width:"40%",isOpen:!0,onClose:w},s.a.createElement(Q.Stack,{gutter:"md"},s.a.createElement(X.StackItem,null,s.a.createElement(ae.FormGroup,{fieldId:"workflow-groups-formgroup"},o&&s.a.createElement(fe.e,null),!o&&s.a.createElement(X.StackItem,{className:"groups-modal"},s.a.createElement(be,{className:"groups-modal",formData:p,handleChange:function(e){m(De({},p,{},e))},title:"Add or remove ".concat(p.name,"'s groups")})))),s.a.createElement(X.StackItem,null,s.a.createElement(Ee.ActionGroup,null,s.a.createElement(ke.Split,{gutter:"md"},s.a.createElement(je.SplitItem,null,s.a.createElement(g.Button,{"aria-label":"Save",variant:"primary",type:"submit",isDisabled:o,onClick:function(){var e=p.wfGroups,t={group_refs:e?e.map((function(e){return{name:e.label,uuid:e.value}})):[]};a(De({id:v},t)).then((function(){return r()})).then((function(){return d("/workflows")}))}},"Save")),s.a.createElement(je.SplitItem,null,s.a.createElement(g.Button,{"aria-label":"Cancel",variant:"secondary",type:"button",onClick:w},"Cancel")))))))};Ne.defaultProps={isFetching:!1},Ne.propTypes={addNotification:K.a.func.isRequired,fetchWorkflow:K.a.func.isRequired,postMethod:K.a.func.isRequired,updateWorkflow:K.a.func.isRequired,isFetching:K.a.bool};var Fe=Object(p.connect)((function(e){return{isFetching:e.workflowReducer.isRecordLoading}}),(function(e){return Object(ye.a)({addNotification:J.addNotification,addWorkflow:B,updateWorkflow:A,fetchWorkflow:W},e)}))(Ne),Ve=n(107),Ge=n(461),We=n.n(Ge),Be=function(e){var t=e.ids,n=e.removeWorkflow,a=e.removeWorkflows,r=e.fetchData,o=e.setSelectedWorkflows,c=Object(f.k)(),l=c.push,u=c.goBack,p=Object(Pe.a)(["workflow"]),m=i()(p,1)[0].workflow;if(!(m||t&&0!==t.length))return null;var d=function(){return u()};return s.a.createElement(Oe.Modal,{isOpen:!0,isSmall:!0,width:"40%",title:"",onClose:d,actions:[s.a.createElement(g.Button,{id:"cancel-remove-workflow",key:"cancel",variant:"secondary",type:"button",onClick:d},"Cancel"),s.a.createElement(g.Button,{id:"submit-remove-workflow",key:"submit",variant:"primary",type:"button",onClick:function(){return(m?n(m):a(t)).then(o([])).then(r()).then(l(ge.a.workflows.index))}},"Confirm")]},s.a.createElement(ke.Split,{gutter:"md"},s.a.createElement(je.SplitItem,null,s.a.createElement(We.a,{size:"xl",fill:"#f0ab00"})),s.a.createElement(je.SplitItem,null,s.a.createElement(Z.TextContent,null,s.a.createElement(Y.Text,{component:Y.TextVariants.p},s.a.createElement(Ve.a,{id:"remove-workflow-modal",defaultMessage:"Removing {count, number} {count, plural,\n              one {approval process}\n              other {approval processes}\n            }",values:{count:m?1:t.length}}))))))};Be.propTypes={removeWorkflows:K.a.func.isRequired,removeWorkflow:K.a.func.isRequired,fetchData:K.a.func.isRequired,setSelectedWorkflows:K.a.func.isRequired,ids:K.a.array};var Ae=Object(p.connect)(null,(function(e){return Object(ye.a)({removeWorkflow:L,removeWorkflows:M},e)}))(Be),Le=n(21),Me=n.n(Le),ze=function(e){var t=e.description,n=e.groupRefs;return s.a.createElement(u.Fragment,null,s.a.createElement(Z.TextContent,null,s.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.small},"Description"),s.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.h5},t)),s.a.createElement(Z.TextContent,null,s.a.createElement(u.Fragment,null,s.a.createElement(Y.Text,{className:"data-table-detail heading",component:Y.TextVariants.small},"Groups"),s.a.createElement(Y.Text,{className:"data-table-detail content",component:Y.TextVariants.h5},function(e){return e.map((function(e){return e.name}))}(n).join(",")))))};ze.propTypes={description:K.a.string,groupRefs:K.a.array.isRequired,id:K.a.string.isRequired};var Ke=ze,_e=function(e){return e.reduce((function(e,t,n){var a=t.id,r=t.name,o=t.description,i=t.sequence,c=t.group_refs;return[].concat(Me()(e),[{id:a,isOpen:!1,selected:!1,cells:[r,o,i]},{parent:2*n,cells:[{title:s.a.createElement(Ke,{description:o,groupRefs:c,id:a})}]}])}),[])},Je=n(411),Ue=n(378),He=n(393),Qe=n(42),Xe=n(409);function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $e=[{title:"Name",cellFormatters:[h.b]},"Description","Sequence"],et=Object(ie.a)((function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:T.a;n(!0),t(G(e,a)).then((function(){return n(!1)}))}),1e3),tt={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},nt=function(e,t){switch(t.type){case"setFetching":return Ze({},e,{isFetching:t.payload});case"setFilterValue":return Ze({},e,{filterValue:t.payload});case"setFilteringFlag":return Ze({},e,{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(u.useState)([]),t=i()(e,2),n=t[0],a=t[1],o=Object(u.useReducer)(nt,tt),c=i()(o,2),l=c[0],v=l.filterValue,h=l.isFetching,E=l.isFiltering,O=c[1],k=Object(p.useSelector)((function(e){return e.workflowReducer.workflows}),p.shallowEqual),j=k.data,S=k.meta,P=Object(p.useDispatch)(),q=Object(f.k)();Object(u.useEffect)((function(){P(G(v,T.a)).then((function(){return O({type:"setFetching",payload:!1})})),Object(Qe.g)()}),[]);var x=function(e){O({type:"setFilterValue",payload:e}),et(e,P,(function(e){return O({type:"setFilteringFlag",payload:e})}),Ze({},S,{offset:0}))},C=function(e,t){O({type:"setFetching",payload:!0}),P(G(v,t)).then((function(){return O({type:"setFetching",payload:!1})})).catch((function(){return O({type:"setFetching",payload:!1})}))},R=n.length>0;return s.a.createElement(u.Fragment,null,s.a.createElement(Ue.a,null,s.a.createElement(Ue.b,{title:"Approval"}),s.a.createElement(He.a,{tabItems:[{eventKey:0,title:"Request queue",name:"/requests"},{eventKey:1,title:"Approval processes",name:"/workflows"}]})),s.a.createElement(Je.a,{data:j,isSelectable:!0,createRows:_e,columns:$e,fetchData:C,routes:function(){return s.a.createElement(u.Fragment,null,s.a.createElement(f.d,{exact:!0,path:ge.a.workflows.add,render:function(e){return s.a.createElement(he,r()({},e,{postMethod:C}))}}),s.a.createElement(f.d,{exact:!0,path:ge.a.workflows.editInfo,render:function(e){return s.a.createElement(Re,r()({editType:"info"},e,{postMethod:C}))}}),s.a.createElement(f.d,{exact:!0,path:ge.a.workflows.editGroups,render:function(e){return s.a.createElement(Fe,r()({editType:"groups"},e,{postMethod:C}))}}),s.a.createElement(f.d,{exact:!0,path:ge.a.workflows.editSequence,render:function(e){return s.a.createElement(Re,r()({editType:"sequence"},e,{postMethod:C}))}}),s.a.createElement(f.d,{exact:!0,path:ge.a.workflows.remove,render:function(e){return s.a.createElement(Ae,r()({},e,{ids:n,fetchData:C,setSelectedWorkflows:a}))}}))},actionResolver:function(e,t){return t.rowIndex%2==1?null:[{title:"Edit info",onClick:function(e,t,n){return q.push({pathname:ge.a.workflows.editInfo,search:"?workflow=".concat(n.id)})}},{title:"Edit groups",onClick:function(e,t,n){return q.push({pathname:ge.a.workflows.editGroups,search:"?workflow=".concat(n.id)})}},{title:"Edit sequence",onClick:function(e,t,n){return q.push({pathname:ge.a.workflows.editSequence,search:"?workflow=".concat(n.id)})}},{title:"Delete",style:{color:"var(--pf-global--danger-color--100)"},onClick:function(e,t,n){return q.push({pathname:ge.a.workflows.remove,search:"?workflow=".concat(n.id)})}}]},titlePlural:"approval processes",titleSingular:"approval process",pagination:S,setCheckedItems:function(e){return a(e.map((function(e){return e.id})))},toolbarButtons:function(){return s.a.createElement(d.ToolbarGroup,{className:"pf-u-pl-lg top-toolbar"},s.a.createElement(b.ToolbarItem,null,s.a.createElement(m.Link,{id:"add-workflow-link",to:{pathname:ge.a.workflows.add}},s.a.createElement(g.Button,{variant:"primary","aria-label":"Create approval process"},"Create approval process"))),s.a.createElement(b.ToolbarItem,null,s.a.createElement(m.Link,{id:"remove-multiple-workflows",className:R?"":"disabled-link",to:{pathname:ge.a.workflows.remove}},s.a.createElement(g.Button,{variant:"link",isDisabled:!R,style:{color:R?"var(--pf-global--danger-color--100)":"var(--pf-global--disabled-color--100)"},"aria-label":"Delete approval process"},"Delete"))))},filterValue:v,onFilterChange:x,isLoading:h||E,onCollapse:function(e,t,n){P(function(e){return{type:y.d,payload:e}}(e)),t((function(t){return n(t,e)}))},renderEmptyState:function(){return s.a.createElement(Xe.a,{title:""===v?"No approval processes":"No results found",Icon:w.a,PrimaryAction:function(){return""!==v?s.a.createElement(g.Button,{onClick:function(){return x("")},variant:"link"},"Clear all filters"):null},description:""===v?"No approval processes.":"No results match the filter criteria. Remove all filters or clear all filters to show results."})}}))}},348:function(e,t,n){"use strict";t.a={requests:{index:"/requests",addComment:"/requests/add-comment",approve:"/requests/approve",deny:"/requests/deny"},workflows:{index:"/workflows",add:"/workflows/add-workflow",remove:"/workflows/remove",editInfo:"/workflows/edit-info",editGroups:"/workflows/edit-groups",editSequence:"/workflows/edit-sequence"}}},352:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(18);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(o.l)(),n=t.search,a=new URLSearchParams(n);return[e.reduce((function(e,t){return c({},e,r()({},t,a.get(t)))}),{}),n,a]}},360:function(e,t,n){"use strict";var a=n(377);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(a.a)(e,t,n)}},376:function(e,t,n){},378:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(151),l=n(152),u=n(148),s=n(149),p=n(41),f=n(26),m=n(391),d=n(392),b=function(e){var t=e.breadcrumbs;return t?r.a.createElement(m.Breadcrumb,null,t.map((function(e,n){var a=e.to,o=e.id,i=e.title;return r.a.createElement(d.BreadcrumbItem,{key:i,isActive:n===t.length-1,id:o},a&&r.a.createElement(f.NavLink,{isActive:function(){return!1},exact:!0,to:a},i)||i)}))):null};b.propTypes={breadcrumbs:i.a.arrayOf(i.a.shape({title:i.a.string.isRequired,to:i.a.string}))};var g=b;n(390);n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return w}));var v=function(e){var t=e.children,n=e.breadcrumbs,a=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(a?"pf-u-pb-sm":""," top-toolbar")},n&&r.a.createElement(c.Level,{className:"pf-u-mb-md"},r.a.createElement(g,{breadcrumbs:n})),t)};v.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired,breadcrumbs:i.a.array,paddingBottom:i.a.bool},v.defaultProps={paddingBottom:!1};var w=function(e){var t=e.title,n=e.description,o=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement(c.Level,null,r.a.createElement(l.LevelItem,null,r.a.createElement(s.TextContent,{className:"pf-u-mb-sm"},r.a.createElement(u.Text,{component:u.TextVariants.h1},t||r.a.createElement(p.d,null))),n&&r.a.createElement(s.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},r.a.createElement(u.Text,{component:u.TextVariants.p},n))),o))};w.propTypes={title:i.a.string,description:i.a.string,children:i.a.oneOfType([i.a.node,i.a.arrayOf(i.a.node)])}},390:function(e,t,n){},393:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=n(18),l=n(388),u=n(387),s=function(e){var t=e.history.push,n=e.location.pathname,a=e.tabItems,o=a.find((function(e){var t=e.name;return n.includes(t)}));return r.a.createElement(l.Tabs,{className:"pf-u-mt-sm",activeKey:o?o.eventKey:0,onSelect:function(e,n){return t(a[n].name)}},a.map((function(e){return r.a.createElement(u.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}),history:i.a.shape({push:i.a.func.isRequired}),tabItems:i.a.array.isRequired},t.a=Object(c.o)(s)},409:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(1),i=n.n(o),c=(n(74),n(88)),l=n(96),u=n(89),s=n(457),p=n(148),f=n(149),m=n(364),d=(n(26),function(e){var t=e.title,n=e.Icon,a=e.description,o=e.PrimaryAction,i=e.renderDescription;return r.a.createElement(m.EmptyTable,{centered:!0,"aria-label":"No records"},r.a.createElement(c.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(l.EmptyStateIcon,{icon:n}),r.a.createElement(f.TextContent,null,r.a.createElement(p.Text,{component:p.TextVariants.h1},t)),r.a.createElement(u.EmptyStateBody,null,a,i()),r.a.createElement(s.EmptyStateSecondaryActions,null,o&&r.a.createElement(o,null))))});d.defaultProps={renderDescription:function(){return null}},d.propTypes={title:i.a.string.isRequired,Icon:i.a.any.isRequired,description:i.a.string.isRequired,PrimaryAction:i.a.any,renderDescription:i.a.func},t.a=d;i.a.string.isRequired,i.a.string.isRequired},411:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(47),i=n.n(o),c=n(0),l=n.n(c),u=n(1),s=n.n(u),p=n(394),f=n(396),m=n(362),d=n(151),b=n(152),g=n(356),v=n(469),w=n(468),h=n(76),y=n(363),E=n.n(y),O=n(153),k=n.n(O),j=n(355),S=function(e){var t=e.searchValue,n=e.onFilterChange,a=e.placeholder,r=e.isClearable;return l.a.createElement(m.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(j.TextInput,{placeholder:a,value:t,type:"text",onChange:n,"aria-label":a}),l.a.createElement("span",{className:"filter-icons-container"},r&&t&&l.a.createElement(k.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return n("")}})||l.a.createElement(E.a,null))))};S.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},S.defaultProps={searchValue:"",isClearable:!1};var T=S,P=n(364),q=n(41),x=n(31),C=n.n(x),R=n(50),I=n.n(R),D=n(377),N=n(155),F=function(e){var t=e.meta,n=t.limit,a=t.count,r=t.offset,o=e.apiProps,i=e.apiRequest,c=e.className,u=e.isCompact,s=I()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:c},l.a.createElement(N.Pagination,C()({perPage:n||50,itemCount:a||0,onPerPageSelect:function(e,t){return i(o,{offset:r,limit:t})},page:Object(h.b)(n,r),onSetPage:function(e,t,a){var r={offset:Object(h.c)(t,n),limit:n},c=function(){return i(o,r)};return a?Object(D.a)(c,250)():c()},direction:"down",isCompact:u},s)))};F.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},F.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1};var V=F,G=function(e){var t=e.children;return l.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};G.propTypes={children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)])};var W=G;function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return L}));var L=function(e){var t=e.isSelectable,n=e.createRows,a=e.columns,r=e.fetchData,o=e.toolbarButtons,u=e.data,s=e.actionResolver,h=e.routes,y=e.titlePlural,E=e.titleSingular,O=e.pagination,k=e.setCheckedItems,j=e.filterValue,S=e.onFilterChange,x=e.isLoading,C=e.onCollapse,R=e.renderEmptyState,I=Object(c.useState)([]),D=i()(I,2),N=D[0],F=D[1];Object(c.useEffect)((function(){F(n(u))}),[u]);var G=function(e,t){return e.map((function(e){return e.id===t?A({},e,{isOpen:!e.isOpen}):A({},e)}))},B=function(e,t){var n=e.map((function(e){return e.id===t?A({},e,{selected:!e.selected}):A({},e)})),a=n.filter((function(e){return e.id&&e.selected}));return k(a),n};return l.a.createElement(P.Section,{type:"content","page-type":"tab-".concat(y),id:"tab-".concat(y)},h(),function(e){return l.a.createElement(p.Toolbar,{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg pf-u-pb-lg top-toolbar"},l.a.createElement(d.Level,{style:{flex:1}},l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(T,{onFilterChange:S,searchValue:j,isClearable:!0,placeholder:"Filter by ".concat(E)}),o())),l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(f.ToolbarGroup,null,l.a.createElement(m.ToolbarItem,null,l.a.createElement(V,{apiRequest:r,isDisabled:e,meta:O,isCompact:!0})))))))}(x),x&&l.a.createElement(q.b,null),x||0!==N.length?l.a.createElement(c.Fragment,null,!x&&l.a.createElement(g.b,{"aria-label":"".concat(y," table"),onCollapse:function(e,t,n,a){var r=a.id;return C?C(r,F,G):F((function(e){return G(e,r)}))},rows:N,cells:a,onSelect:t&&function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=a.id;return F(-1===n?N.map((function(e){return A({},e,{selected:t})})):function(e){return B(e,r)})},actionResolver:s,className:"table-fix"},l.a.createElement(v.a,null),l.a.createElement(w.a,null)),O.count>0&&l.a.createElement(W,null,l.a.createElement(V,{dropDirection:"up",meta:O,apiRequest:r}))):R())};L.propTypes={isSelectable:s.a.bool,createRows:s.a.func.isRequired,columns:s.a.array.isRequired,toolbarButtons:s.a.func,fetchData:s.a.func.isRequired,data:s.a.array,pagination:s.a.shape({limit:s.a.number,offset:s.a.number,count:s.a.number}),titlePlural:s.a.string,titleSingular:s.a.string,routes:s.a.func,actionResolver:s.a.func,setCheckedItems:s.a.func,filterValue:s.a.string,onFilterChange:s.a.func,isLoading:s.a.bool,onCollapse:s.a.func,renderEmptyState:s.a.func},L.defaultProps={requests:[],isLoading:!1,pagination:h.a,toolbarButtons:function(){return null},isSelectable:null,routes:function(){return null},renderEmptyState:function(){return null}}}}]);
//# sourceMappingURL=../sourcemaps/workflows.js.map