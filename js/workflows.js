(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{2174:function(e,t,a){"use strict";a.r(t);var n=a(33),r=a.n(n),o=a(71),c=a.n(o),i=a(3),l=a.n(i),u=a(0),s=a.n(u),p=a(1),f=a.n(p),d=a(18),m=a(19),b=a(43),h=a(370),g=a(338),v=a(70),w=a(339),y=a.n(w),E=a(342),k=a(4),O=a(37),j=a.n(O),T=a(52),S=a.n(T),R=a(82),q=a(26),x=Object(R.d)();function C(){return P.apply(this,arguments)}function P(){return(P=S()(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.listGroups();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return D.apply(this,arguments)}function D(){return(D=S()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",Promise.all(t.map(function(){var e=S()(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.getGroup(t);case 3:return a=e.sent,e.abrupt("return",a.name);case 7:if(e.prev=7,e.t0=e.catch(0),404===e.t0.status){e.next=13;break}throw e.t0;case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=a(72);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=Object(R.h)(),V=Object(R.g)();function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N.a,a="&limit=".concat(t.limit,"&offset=").concat(t.offset),n="&filter[name][contains_i]=".concat(e);return Object(R.b)().get("".concat(q.a,"/workflows/?").concat(n).concat(a))}function L(e){return A.apply(this,arguments)}function A(){return(A=S()(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.showWorkflow(t);case 2:return a=e.sent,e.next=5,I(a.group_refs);case 5:return n=e.sent,e.abrupt("return",F({},a,{group_names:n}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return _.apply(this,arguments)}function _(){return(_=S()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.showWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return K.apply(this,arguments)}function K(){return(K=S()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){return H.apply(this,arguments)}function H(){return(H=S()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=S()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(e,t){return{type:k.k,payload:B(e,t)}},U=function(e){return{type:k.j,payload:M(e)}},X=function(e){return{type:k.l,payload:L(e)}},Y=function(e){return{type:k.a,payload:(t=e,V.listTemplates().then((function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id})).then((function(e){return W.addWorkflowToTemplate(e,t,{})}))),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding approval process",description:"The approval process was added successfully."},rejected:{variant:"danger",title:"Failed adding approval process",description:"The approval process was not added successfuly."}}}};var t},Z=function(e){return{type:k.p,payload:(t=e,W.updateWorkflow(t.id,t)),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating approval process",description:"The approval process was updated successfully."},rejected:{variant:"danger",title:"Failed updating approval process",description:"The approval process was not updated successfuly."}}}};var t},$=function(e){return{type:k.m,payload:z(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval process",description:"The approval process was removed successfully."}}}}},ee=function(e){return{type:k.n,payload:J(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing approval processes",description:"The selected approval processes were removed successfully."}}}}},te=a(77),ae=a(2164),ne=a(35),re=a(79),oe=a(49),ce=a(329),ie=a(330),le=a(139),ue=a(140),se=a(327),pe=function(e){var t=e.formData,a=t||{name:"",description:"",wfGroups:[]},n=a.name,r=a.description,o=a.wfGroups;return s.a.createElement(u.Fragment,null,s.a.createElement(ce.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(se.Title,{size:"xl"}," Review ")),s.a.createElement(ie.StackItem,null,s.a.createElement(ce.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(ue.TextContent,null,s.a.createElement(le.Text,{className:"data-table-detail heading",component:le.TextVariants.h5},"Review and confirm your inputs. If there is anything incorrect, click Back and revise."))),s.a.createElement(ie.StackItem,null,s.a.createElement(re.Grid,{gutter:"md"},s.a.createElement(oe.GridItem,{span:2},s.a.createElement(le.Text,{className:"data-table-detail heading",component:le.TextVariants.h5},"Name")),s.a.createElement(oe.GridItem,{span:10},s.a.createElement(le.Text,{className:"data-table-detail content",component:le.TextVariants.p},n))),s.a.createElement(re.Grid,{gutter:"md"},s.a.createElement(oe.GridItem,{span:2},s.a.createElement(le.Text,{className:"data-table-detail heading",component:le.TextVariants.h5},"Description")),s.a.createElement(oe.GridItem,{span:10},s.a.createElement(le.Text,{className:"data-table-detail content",component:le.TextVariants.p},r))),void 0!==o&&o.map((function(e,t){return s.a.createElement(u.Fragment,{key:"Group-".concat(t)},s.a.createElement(re.Grid,{gutter:"md"},s.a.createElement(oe.GridItem,{span:2},s.a.createElement(le.Text,{key:e.value,className:"data-table-detail heading",component:le.TextVariants.h5},"Group ".concat(t+1))),s.a.createElement(oe.GridItem,{span:10},s.a.createElement(le.Text,{key:e.label,className:"data-table-detail content",component:le.TextVariants.p},"".concat(o[t].label)))))})))))))};pe.propTypes={formData:f.a.object};var fe=pe,de=a(84),me=a(45),be=a(333),he=a(399),ge=function(e){var t=e.formData,a=e.handleChange,n=e.isValid,r=e.title,o=void 0===r?void 0:r,c=t.name,i=t.description;return s.a.createElement(u.Fragment,null,s.a.createElement(ce.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(se.Title,{size:"md"}," ",o||"Enter your information"," ")),s.a.createElement(ie.StackItem,null,s.a.createElement(de.Form,null,s.a.createElement(me.FormGroup,{label:"Approval process name",isRequired:!0,fieldId:"workflow-name",isValid:n(),helperTextInvalid:"Enter a name for the approval process"},s.a.createElement(be.TextInput,{isRequired:!0,type:"text",id:"workflow-name",name:"workflow-name","aria-describedby":"workflow-name",value:c,isValid:n(),onChange:function(e,t){return a({name:t.currentTarget.value})}})),s.a.createElement(me.FormGroup,{label:"Description",fieldId:"workflow-description"},s.a.createElement(he.TextArea,{type:"text",id:"workflow-description",name:"workflow-description",value:i,onChange:function(e,t){return a({description:t.currentTarget.value})}}))))))};ge.propTypes={name:f.a.string,description:f.a.string,title:f.a.string,formData:f.a.object,handleChange:f.a.func.isRequired,isValid:f.a.func.isRequired};var ve=ge,we=a(24),ye=a.n(we),Ee=a(440),ke=a.n(Ee),Oe=a(441),je=a.n(Oe),Te=a(2170),Se=a(343),Re=a(41),qe=function(){return{type:k.f,payload:C().then((function(e){var t=e.data;return ye()(t.map((function(e){return{value:e.uuid,label:e.name}})))}))}},xe=function(e){var t=e.formData,a=e.handleChange,n=e.title,r=Object(u.useState)(!1),o=c()(r,2),i=o[0],l=o[1],p=Object(u.useState)([]),f=c()(p,2),m=f[0],b=f[1],h=Object(u.useState)(1),g=c()(h,2),w=g[0],y=g[1],E=Object(u.useState)([]),k=c()(E,2),O=k[0],j=k[1],T=Object(u.useState)([]),S=c()(T,2),x=S[0],C=S[1],P=Object(d.useSelector)((function(e){return e.groupReducer.groups||[]})),I=Object(d.useDispatch)();Object(u.useEffect)((function(){C(!0),I(qe()).then((function(){return C(!1)}))}),[]),Object(u.useEffect)((function(){b(t.wfGroups?t.wfGroups:[]),y(t.wfGroups?t.wfGroups.length:1)}),[t.wfGroups]);var D=function(e){l(e)},N=function(e){var t=parseInt(e.target.id),n=ye()(m.filter((function(e,a){return t!==a})));b(n),y(w-1),a({wfGroups:n})},G=function(e){return t=e,Object(R.b)().get("".concat(q.b,"/groups/").concat(t.length>0?"?name=".concat(t):"")).then((function(e){return e.data.map((function(e){var t=e.uuid;return{label:e.name,value:t}}))}));var t},F=function(e){return s.a.createElement(ie.StackItem,{key:"Stack_".concat(e+1)},s.a.createElement(me.FormGroup,{label:"Group ".concat(e+1),fieldId:"".concat(e+1,"_stage_label")},s.a.createElement(re.Grid,{gutter:"md"},s.a.createElement(oe.GridItem,{span:8},s.a.createElement(Te.a,{cacheOptions:!0,isClearable:!0,label:"".concat(e+1," Group"),"aria-label":"".concat(e+1," Group"),onToggle:D,key:"stage-".concat(e+1),onChange:function(t){return n=t,(r=m)[e]=n,b(r),void a({wfGroups:r});var n,r},value:m[e],inpuValue:O,isexpanded:i,loadOptions:Object(Se.a)(G),defaultOptions:P,onInputChange:function(e){return t=e.replace(/\W/g,""),void j(t);var t}})),s.a.createElement(oe.GridItem,{span:1,style:{display:"flex"}},e>0&&s.a.createElement(v.Button,{variant:"link",isInline:!0,key:e,id:e,onClick:N},s.a.createElement(je.a,null)," ","Remove")))))};return s.a.createElement(u.Fragment,null,s.a.createElement(ce.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(se.Title,{size:"md"},n||"Set groups")),s.a.createElement(ie.StackItem,null,x&&s.a.createElement(Re.e,null),!x&&s.a.createElement(ce.Stack,{gutter:"sm"},m.map((function(e,t){return F(t)})),s.a.createElement(ie.StackItem,{style:{borderTop:10}},s.a.createElement(v.Button,{id:"add-workflow-stage",variant:"link",isInline:!0,onClick:function(){b([].concat(ye()(m),[void 0])),y(w+1)}},s.a.createElement(ke.a,null)," ","Add ".concat(m.length>0?"another":"a"," group")))))))};xe.propTypes={name:f.a.string,description:f.a.string,title:f.a.string,formData:f.a.object,handleChange:f.a.func};var Ce=xe;function Pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Ie=function(e){var t=e.history.push,a=e.addWorkflow,n=e.addNotification,r=e.postMethod,o=e.rbacGroups,i=Object(u.useState)({}),p=c()(i,2),f=p[0],d=p[1],m=function(e){d(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Pe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},f,{},e))},b=[{name:"General information",component:s.a.createElement(ve,{formData:f,handleChange:m,isValid:function(){return f.name&&f.name.length>0}})},{name:"Set groups",component:s.a.createElement(Ce,{formData:f,handleChange:m,options:o})},{name:"Review",component:s.a.createElement(fe,{formData:f,options:o}),nextButtonText:"Confirm"}];return s.a.createElement(ae.Wizard,{title:"Create approval process",isOpen:!0,onClose:function(){n({variant:"warning",title:"Creating approval process",dismissable:!0,description:"Creating approval process was cancelled by the user."}),t("/workflows")},onSave:function(){var e=f.name,n=f.description,o=f.wfGroups,c={name:e,description:n,group_refs:o?o.map((function(e){return e.value})):[]};return a(c).then((function(){return r()})).then((function(){return t("/workflows")}))},steps:b})};Ie.defaultProps={rbacGroups:[],initialValues:{}},Ie.propTypes={history:f.a.shape({push:f.a.func.isRequired}).isRequired,addWorkflow:f.a.func.isRequired,match:f.a.object,addNotification:f.a.func.isRequired,fetchWorkflowWithGroupNames:f.a.func.isRequired,postMethod:f.a.func.isRequired,rbacGroups:f.a.arrayOf(f.a.shape({value:f.a.oneOfType([f.a.number,f.a.string]).isRequired,label:f.a.string.isRequired})).isRequired};var De=Object(m.o)(Object(d.connect)((function(e){return{rbacGroups:e.groupReducer.groups}}),(function(e){return Object(te.a)({addNotification:ne.addNotification,addWorkflow:Y,fetchWorkflowWithGroupNames:X},e)}))(Ie)),Ne=a(363),Ge=a(337),Fe=a(371),We=a(372),Ve=function(e){var t=e.formData,a=e.handleChange,n=e.isValid,r=e.title,o=void 0===r?void 0:r,c=t.sequence;return s.a.createElement(u.Fragment,null,s.a.createElement(ce.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(se.Title,{size:"md"}," ",o||"Enter your information"," ")),s.a.createElement(ie.StackItem,null,s.a.createElement(de.Form,null,s.a.createElement(me.FormGroup,{label:"Enter sequence",isRequired:!0,fieldId:"workflow-sequence",isValid:n(),helperTextInvalid:"Enter a positive number"},s.a.createElement(be.TextInput,{isRequired:!0,type:"number",id:"workflow-sequence",isValid:n(),name:"workflow-sequence","aria-describedby":"workflow-name",value:c,onChange:function(e,t){return a({sequence:t.currentTarget.value})}}))))))};Ve.propTypes={sequence:f.a.string,title:f.a.string,formData:f.a.object,handleChange:f.a.func.isRequired,isValid:f.a.func.isRequired};var Be=Ve;a(350);function Le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ae(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Me=function(e){var t=e.history.push,a=e.match.params.id,n=e.addNotification,r=e.fetchWorkflow,o=e.updateWorkflow,i=e.postMethod,l=e.workflow,p=e.isFetching,f=e.editType,d=Object(u.useState)({}),m=c()(d,2),b=m[0],h=m[1],g=function(e){return h(Ae({},b,{},e))};Object(u.useEffect)((function(){r(a).then((function(e){return h(Ae({},b,{},e.value))}))}),[]);var w=function(){return b.sequence&&b.sequence>=0},y=function(){return b.name&&b.name.length>0},E=function(){return"sequence"===f?w():y()},k=function(){var e="sequence"===f?{title:"Edit approval process's sequence",description:"Edit approval process's sequence was cancelled by the user."}:{title:"Edit approval process's information",description:"Edit approval process's information was cancelled by the user."};n({variant:"warning",title:e.title,dismissable:!0,description:e.description}),t("/workflows")};return s.a.createElement(Ge.Modal,{title:"sequence"===f?"Edit sequence":"Edit information",width:"40%",isOpen:!0,onClose:k},s.a.createElement(ce.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(me.FormGroup,{fieldId:"edit-workflow-info-modal-info"},p&&s.a.createElement(Re.e,null),!p&&("info"===f?s.a.createElement(ve,{formData:b,handleChange:g,isValid:y,title:"Make any changes to approval process ".concat(l.name)}):s.a.createElement(Be,{formData:b,handleChange:g,isValid:w,title:"Set the sequence for the approval process ".concat(l.name)})))),s.a.createElement(ie.StackItem,null,s.a.createElement(Ne.ActionGroup,null,s.a.createElement(Fe.Split,{gutter:"md"},s.a.createElement(We.SplitItem,null,s.a.createElement(v.Button,{"aria-label":"Save",id:"save-edit-workflow-info",variant:"primary",type:"submit",validated:!p&&E(),onClick:function(){if(E()){var e=b.name,n=b.description,r=b.sequence;o({id:a,name:e,description:n,sequence:r}).then((function(){return i()})).then((function(){return t("/workflows")}))}}},"Save")),s.a.createElement(We.SplitItem,null,s.a.createElement(v.Button,{id:"cancel-edit-workflow-info","aria-label":"Cancel",variant:"secondary",type:"button",onClick:k},"Cancel")))))))};Me.defaultProps={isFetching:!1,editType:"info"},Me.propTypes={history:f.a.shape({push:f.a.func.isRequired}).isRequired,match:f.a.object,addNotification:f.a.func.isRequired,fetchWorkflow:f.a.func.isRequired,postMethod:f.a.func.isRequired,updateWorkflow:f.a.func.isRequired,workflow:f.a.object,id:f.a.string,editType:f.a.string,isFetching:f.a.bool};var _e=Object(m.o)(Object(d.connect)((function(e){var t=e.workflowReducer;return{workflow:t.workflow,isFetching:t.isRecordLoading}}),(function(e){return Object(te.a)({addNotification:ne.addNotification,addWorkflow:Y,updateWorkflow:Z,fetchWorkflow:U},e)}))(Me));function ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ke(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ze(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Je=function(e){var t=e.history.push,a=e.match.params.id,n=e.addNotification,r=e.fetchWorkflowWithGroupNames,o=e.updateWorkflow,i=e.postMethod,l=e.isFetching,p=Object(u.useState)({}),f=c()(p,2),d=f[0],m=f[1];Object(u.useEffect)((function(){r(a).then((function(e){return m((t=e.value,a=t.group_refs.map((function(e,a){return{label:t.group_names[a]?t.group_names[a]:e,value:e}})),Ke({},t,{wfGroups:a})));var t,a}))}),[]);var b=function(){n({variant:"warning",title:"Edit approval process's groups",dismissable:!0,description:"Edit approval process's groups was cancelled by the user."}),t("/workflows")};return s.a.createElement(Ge.Modal,{title:"Edit approval process's groups",width:"40%",isOpen:!0,onClose:b},s.a.createElement(ce.Stack,{gutter:"md"},s.a.createElement(ie.StackItem,null,s.a.createElement(me.FormGroup,{fieldId:"workflow-stages-formgroup"},l&&s.a.createElement(Re.e,null),!l&&s.a.createElement(ie.StackItem,{className:"stages-modal"},s.a.createElement(Ce,{className:"stages-modal",formData:d,handleChange:function(e){m(Ke({},d,{},e))},title:"Add or remove ".concat(d.name,"'s groups")})))),s.a.createElement(ie.StackItem,null,s.a.createElement(Ne.ActionGroup,null,s.a.createElement(Fe.Split,{gutter:"md"},s.a.createElement(We.SplitItem,null,s.a.createElement(v.Button,{"aria-label":"Save",variant:"primary",type:"submit",isDisabled:l,onClick:function(){var e={group_refs:d.wfGroups.map((function(e){return e.value}))};o(Ke({id:a},e)).then((function(){return i()})).then((function(){return t("/workflows")}))}},"Save")),s.a.createElement(We.SplitItem,null,s.a.createElement(v.Button,{"aria-label":"Cancel",variant:"secondary",type:"button",onClick:b},"Cancel")))))))};Je.defaultProps={rbacGroups:[],isFetching:!1},Je.propTypes={history:f.a.shape({push:f.a.func.isRequired}),addWorkflow:f.a.func.isRequired,match:f.a.object,addNotification:f.a.func.isRequired,fetchWorkflowWithGroupNames:f.a.func.isRequired,fetchRbacGroups:f.a.func.isRequired,postMethod:f.a.func.isRequired,updateWorkflow:f.a.func.isRequired,id:f.a.string,editType:f.a.string,rbacGroups:f.a.arrayOf(f.a.shape({value:f.a.oneOfType([f.a.number,f.a.string]).isRequired,label:f.a.string.isRequired})).isRequired,isFetching:f.a.bool,item:f.a.shape({id:f.a.string,name:f.a.string})};var He=Object(m.o)(Object(d.connect)((function(e){return{isFetching:e.workflowReducer.isRecordLoading}}),(function(e){return Object(te.a)({addNotification:ne.addNotification,addWorkflow:Y,updateWorkflow:Z,fetchWorkflowWithGroupNames:X,fetchRbacGroups:qe},e)}))(Je)),Qe=a(101),Ue=a(362),Xe=function(e){var t=e.history,a=t.goBack,n=t.push,r=e.match.params.id,o=e.ids,c=e.removeWorkflow,i=e.removeWorkflows,l=e.fetchData,u=e.setSelectedWorkflows;if(!(r||o&&0!==o.length))return null;var p=function(){return a()};return s.a.createElement(Ge.Modal,{isOpen:!0,isSmall:!0,width:"40%",title:"",onClose:p,actions:[s.a.createElement(v.Button,{id:"cancel-remove-workflow",key:"cancel",variant:"secondary",type:"button",onClick:p},"Cancel"),s.a.createElement(v.Button,{id:"submit-remove-workflow",key:"submit",variant:"primary",type:"button",onClick:function(){return(r?c(r):i(o)).then(u([])).then(l()).then(n("/workflows"))}},"Confirm")]},s.a.createElement(Ue.Bullseye,null,s.a.createElement(ue.TextContent,null,s.a.createElement(le.Text,{component:le.TextVariants.h1},s.a.createElement(Qe.a,{id:"remove-workflow-modal",defaultMessage:"Removing {count, number} {count, plural,\n              one {approval process}\n              other {approval processes}\n            }",values:{count:void 0!==r?1:o.length}})))))};Xe.propTypes={history:f.a.shape({goBack:f.a.func.isRequired,push:f.a.func.isRequired}).isRequired,match:f.a.object,removeWorkflows:f.a.func.isRequired,removeWorkflow:f.a.func.isRequired,fetchData:f.a.func.isRequired,setSelectedWorkflows:f.a.func.isRequired,workflowId:f.a.string,ids:f.a.array};var Ye=Object(m.o)(Object(d.connect)(null,(function(e){return Object(te.a)({removeWorkflow:$,removeWorkflows:ee},e)}))(Xe)),Ze=a(2169),$e=function(e){var t=e.description,a=e.groupRefs,n=e.id,r=Object(u.useState)([]),o=c()(r,2),i=o[0],l=o[1],p=Object(u.useState)(),f=c()(p,2),m=f[0],b=f[1],h=Object(u.useState)(),g=c()(h,2),v=g[0],w=g[1],y=Object(d.useSelector)((function(e){return e.workflowReducer.expandedWorkflows})),E=function(){return Promise.all(a.map((function(e){return function(e){return Object(R.b)().get("".concat(q.b,"/groups/").concat(e,"/")).then((function(e){return e.name})).catch((function(t){if(404!==t.status)throw t;return e}))}(e)})))};return Object(u.useEffect)((function(){m||!y.includes(n)||v||(w(!0),E().then((function(e){l(e),b(!0)})).catch((function(){return b(!0)})))}),[y]),s.a.createElement(u.Fragment,null,s.a.createElement(ue.TextContent,null,s.a.createElement(le.Text,{className:"data-table-detail heading",component:le.TextVariants.small},"Description"),s.a.createElement(le.Text,{className:"data-table-detail content",component:le.TextVariants.h5},t)),s.a.createElement(ue.TextContent,null,s.a.createElement(u.Fragment,null,s.a.createElement(le.Text,{className:"data-table-detail heading",component:le.TextVariants.small},"Groups"),m?s.a.createElement(le.Text,{className:"data-table-detail content",component:le.TextVariants.h5},i.join(",")):s.a.createElement("div",null,s.a.createElement(Ze.Skeleton,{size:Ze.SkeletonSize.sm})))))};$e.propTypes={description:f.a.string,groupRefs:f.a.array.isRequired,id:f.a.string.isRequired};var et=$e,tt=function(e){return e.reduce((function(e,t,a){var n=t.id,r=t.name,o=t.description,c=t.sequence,i=t.group_refs;return[].concat(ye()(e),[{id:n,isOpen:!1,selected:!1,cells:[r,o,c]},{parent:2*a,cells:[{title:s.a.createElement(et,{description:o,groupRefs:i,id:n})}]}])}),[])},at=a(389),nt=a(352),rt=a(367),ot=a(74),ct=a(386);function it(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function lt(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?it(Object(a),!0).forEach((function(t){l()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):it(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ut=[{title:"Name",cellFormatters:[E.b]},"Description","Sequence"],st=Object(Se.a)((function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:N.a;a(!0),t(Q(e,n)).then((function(){return a(!1)}))}),1e3),pt={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},ft=function(e,t){switch(t.type){case"setFetching":return lt({},e,{isFetching:t.payload});case"setFilterValue":return lt({},e,{filterValue:t.payload});case"setFilteringFlag":return lt({},e,{isFiltering:t.payload});default:return e}},dt=function(){var e=Object(u.useState)([]),t=c()(e,2),a=t[0],n=t[1],o=Object(u.useReducer)(ft,pt),i=c()(o,2),l=i[0],p=l.filterValue,f=l.isFetching,w=l.isFiltering,E=i[1],O=Object(d.useSelector)((function(e){return e.workflowReducer.workflows})),j=O.data,T=O.meta,S=Object(d.useDispatch)(),R=Object(m.k)();Object(u.useEffect)((function(){S(Q(p,N.a)).then((function(){return E({type:"setFetching",payload:!1})})),Object(ot.c)()}),[]);var q=function(e){E({type:"setFilterValue",payload:e}),st(e,S,(function(e){return E({type:"setFilteringFlag",payload:e})}),lt({},T,{offset:0}))},x=function(e,t){E({type:"setFetching",payload:!0}),S(Q(p,t)).then((function(){return E({type:"setFetching",payload:!1})})).catch((function(){return E({type:"setFetching",payload:!1})}))},C=a.length>0;return s.a.createElement(u.Fragment,null,s.a.createElement(nt.a,null,s.a.createElement(nt.b,{title:"Approval"}),s.a.createElement(rt.a,{tabItems:[{eventKey:0,title:"Request queue",name:"/requests"},{eventKey:1,title:"Approval processes",name:"/workflows"}]})),s.a.createElement(at.a,{data:j,isSelectable:!0,createRows:tt,columns:ut,fetchData:x,routes:function(){return s.a.createElement(u.Fragment,null,s.a.createElement(m.d,{exact:!0,path:"/workflows/add-workflow",render:function(e){return s.a.createElement(De,r()({},e,{postMethod:x}))}}),s.a.createElement(m.d,{exact:!0,path:"/workflows/edit-info/:id",render:function(e){return s.a.createElement(_e,r()({editType:"info"},e,{postMethod:x}))}}),s.a.createElement(m.d,{exact:!0,path:"/workflows/edit-stages/:id",render:function(e){return s.a.createElement(He,r()({editType:"stages"},e,{postMethod:x}))}}),s.a.createElement(m.d,{exact:!0,path:"/workflows/edit-sequence/:id",render:function(e){return s.a.createElement(_e,r()({editType:"sequence"},e,{postMethod:x}))}}),s.a.createElement(m.d,{exact:!0,path:"/workflows/remove/:id",render:function(e){return s.a.createElement(Ye,r()({},e,{fetchData:x,setSelectedWorkflows:n}))}}),s.a.createElement(m.d,{exact:!0,path:"/workflows/remove",render:function(e){return s.a.createElement(Ye,r()({},e,{ids:a,fetchData:x,setSelectedWorkflows:n}))}}))},actionResolver:function(e,t){return t.rowIndex%2==1?null:[{title:"Edit info",onClick:function(e,t,a){return R.push("/workflows/edit-info/".concat(a.id))}},{title:"Edit groups",onClick:function(e,t,a){return R.push("/workflows/edit-stages/".concat(a.id))}},{title:"Edit sequence",onClick:function(e,t,a){return R.push("/workflows/edit-sequence/".concat(a.id))}},{title:"Delete",style:{color:"var(--pf-global--danger-color--100)"},onClick:function(e,t,a){return R.push("/workflows/remove/".concat(a.id))}}]},titlePlural:"approval processes",titleSingular:"approval process",pagination:T,setCheckedItems:function(e){return n(e.map((function(e){return e.id})))},toolbarButtons:function(){return s.a.createElement(h.ToolbarGroup,{className:"pf-u-pl-lg top-toolbar"},s.a.createElement(g.ToolbarItem,null,s.a.createElement(b.Link,{id:"add-workflow-link",to:"/workflows/add-workflow"},s.a.createElement(v.Button,{variant:"primary","aria-label":"Create approval process"},"Create approval process"))),s.a.createElement(g.ToolbarItem,null,s.a.createElement(b.Link,{id:"remove-multiple-workflows",className:C?"":"disabled-link",to:{pathname:"/workflows/remove"}},s.a.createElement(v.Button,{variant:"link",isDisabled:!C,style:{color:C?"var(--pf-global--danger-color--100)":"var(--pf-global--disabled-color--100)"},"aria-label":"Delete approval process"},"Delete"))))},filterValue:p,onFilterChange:q,isLoading:f||w,onCollapse:function(e,t,a){S(function(e){return{type:k.d,payload:e}}(e)),t((function(t){return a(t,e)}))},renderEmptyState:function(){return s.a.createElement(ct.a,{title:""===p?"No approval processes":"No results found",Icon:y.a,PrimaryAction:function(){return""!==p?s.a.createElement(v.Button,{onClick:function(){return q("")},variant:"link"},"Clear all filters"):null},description:""===p?"No approval processes.":"No results match the filter criteria. Remove all filters or clear all filters to show results."})}}))};dt.propTypes={history:f.a.shape({push:f.a.func.isRequired}).isRequired,workflows:f.a.array,isLoading:f.a.bool,selectedWorkflows:f.a.array},dt.defaultProps={workflows:[],rbacGroups:{},isLoading:!1};t.default=dt},343:function(e,t,a){"use strict";var n=a(351);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return Object(n.a)(e,t,a)}},350:function(e,t,a){},352:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),c=a.n(o),i=a(143),l=a(144),u=a(139),s=a(140),p=a(41),f=a(43),d=a(365),m=a(366),b=function(e){var t=e.breadcrumbs;return t?r.a.createElement(d.Breadcrumb,null,Object.values(t).map((function(e){return r.a.createElement(m.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r.a.createElement(f.NavLink,{exact:!0,to:e.to},e.title)||e.title)}))):null};b.propTypes={breadcrumbs:c.a.arrayOf(c.a.shape({title:c.a.string.isRequired,isActive:c.a.bool,to:c.a.string}))};var h=b;a(364);a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return v}));var g=function(e){var t=e.children,a=e.breadcrumbs,n=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(n?"pf-u-pb-sm":""," top-toolbar")},a&&r.a.createElement(i.Level,{className:"pf-u-mb-md"},r.a.createElement(h,{breadcrumbs:a})),t)};g.propTypes={children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]).isRequired,breadcrumbs:c.a.array,paddingBottom:c.a.bool},g.defaultProps={paddingBottom:!1};var v=function(e){var t=e.title,a=e.description,o=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(i.Level,null,r.a.createElement(l.LevelItem,null,r.a.createElement(s.TextContent,{className:"pf-u-mb-sm"},r.a.createElement(u.Text,{component:u.TextVariants.h1},t||r.a.createElement(p.d,null))),a&&r.a.createElement(s.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},r.a.createElement(u.Text,{component:u.TextVariants.p},a))),o))};v.propTypes={title:c.a.string,description:c.a.string,children:c.a.oneOfType([c.a.node,c.a.arrayOf(c.a.node)])}},364:function(e,t,a){},367:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),c=a.n(o),i=a(19),l=a(361),u=a(360),s=function(e){var t=e.history.push,a=e.location.pathname,n=e.tabItems,o=n.find((function(e){var t=e.name;return a.includes(t)}));return r.a.createElement(l.Tabs,{className:"pf-u-mt-sm",activeKey:o?o.eventKey:0,onSelect:function(e,a){return t(n[a].name)}},n.map((function(e){return r.a.createElement(u.Tab,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}),history:c.a.shape({push:c.a.func.isRequired}),tabItems:c.a.array.isRequired},t.a=Object(i.o)(s)},386:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),c=a.n(o),i=(a(70),a(434)),l=a(435),u=a(436),s=a(437),p=a(139),f=a(140),d=a(344),m=(a(43),function(e){var t=e.title,a=e.Icon,n=e.description,o=e.PrimaryAction,c=e.renderDescription;return r.a.createElement(d.EmptyTable,{centered:!0,"aria-label":"No records"},r.a.createElement(i.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},r.a.createElement(l.EmptyStateIcon,{icon:a}),r.a.createElement(f.TextContent,null,r.a.createElement(p.Text,{component:p.TextVariants.h1},t)),r.a.createElement(u.EmptyStateBody,null,n,c()),r.a.createElement(s.EmptyStateSecondaryActions,null,o&&r.a.createElement(o,null))))});m.defaultProps={renderDescription:function(){return null}},m.propTypes={title:c.a.string.isRequired,Icon:c.a.any.isRequired,description:c.a.string.isRequired,PrimaryAction:c.a.any,renderDescription:c.a.func},t.a=m;c.a.string.isRequired,c.a.string.isRequired},389:function(e,t,a){"use strict";var n=a(3),r=a.n(n),o=a(71),c=a.n(o),i=a(0),l=a.n(i),u=a(1),s=a.n(u),p=a(368),f=a(370),d=a(338),m=a(143),b=a(144),h=a(334),g=a(453),v=a(452),w=a(72),y=a(339),E=a.n(y),k=a(145),O=a.n(k),j=a(333),T=function(e){var t=e.searchValue,a=e.onFilterChange,n=e.placeholder,r=e.isClearable;return l.a.createElement(d.ToolbarItem,null,l.a.createElement("div",{className:"toolbar-filter-input-group"},l.a.createElement(j.TextInput,{placeholder:n,value:t,type:"text",onChange:a,"aria-label":n}),l.a.createElement("span",{className:"filter-icons-container"},r&&t&&l.a.createElement(O.a,{className:"clear-filter",width:"16",height:"16",onClick:function(){return a("")}})||l.a.createElement(E.a,null))))};T.propTypes={onFilterChange:s.a.func.isRequired,placeholder:s.a.string,searchValue:s.a.string,isClearable:s.a.bool},T.defaultProps={searchValue:"",isClearable:!1};var S=T,R=a(344),q=a(41),x=a(33),C=a.n(x),P=a(48),I=a.n(P),D=a(351),N=a(147),G=function(e){var t=e.meta,a=t.limit,n=t.count,r=t.offset,o=e.apiProps,c=e.apiRequest,i=e.className,u=e.isCompact,s=I()(e,["meta","apiProps","apiRequest","className","isCompact"]);return l.a.createElement("div",{className:i},l.a.createElement(N.Pagination,C()({perPage:a||50,itemCount:n||0,onPerPageSelect:function(e,t){return c(o,{offset:r,limit:t})},page:Object(w.b)(a,r),onSetPage:function(e,t,n){var r={offset:Object(w.c)(t,a),limit:a},i=function(){return c(o,r)};return n?Object(D.a)(i,250)():i()},direction:"down",isCompact:u},s)))};G.propTypes={meta:s.a.shape({count:s.a.number,limit:s.a.number.isRequired,offset:s.a.number.isRequired}),apiRequest:s.a.func.isRequired,apiProps:s.a.any,className:s.a.string,isCompact:s.a.bool},G.defaultProps={meta:{count:0,limit:50,offset:0},className:"",isCompact:!1};var F=G,W=function(e){var t=e.children;return l.a.createElement("div",{className:"pf-u-p-lg pf-u-pt-md pf-u-pb-md global-primary-background pf-u-mt-auto"},t)};W.propTypes={children:s.a.oneOfType([s.a.node,s.a.arrayOf(s.a.node)])};var V=W;function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a.d(t,"a",(function(){return A}));var A=function(e){var t=e.isSelectable,a=e.createRows,n=e.columns,r=e.fetchData,o=e.toolbarButtons,u=e.data,s=e.actionResolver,w=e.routes,y=e.titlePlural,E=e.titleSingular,k=e.pagination,O=e.setCheckedItems,j=e.filterValue,T=e.onFilterChange,x=e.isLoading,C=e.onCollapse,P=e.renderEmptyState,I=Object(i.useState)([]),D=c()(I,2),N=D[0],G=D[1];Object(i.useEffect)((function(){G(a(u))}),[u]);var W=function(e,t){return e.map((function(e){return e.id===t?L({},e,{isOpen:!e.isOpen}):L({},e)}))},B=function(e,t){var a=e.map((function(e){return e.id===t?L({},e,{selected:!e.selected}):L({},e)})),n=a.filter((function(e){return e.id&&e.selected}));return O(n),a};return l.a.createElement(R.Section,{type:"content","page-type":"tab-".concat(y),id:"tab-".concat(y)},w(),function(e){return l.a.createElement(p.Toolbar,{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg pf-u-pb-lg top-toolbar"},l.a.createElement(m.Level,{style:{flex:1}},l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(S,{onFilterChange:T,searchValue:j,isClearable:!0,placeholder:"Filter by ".concat(E)}),o())),l.a.createElement(b.LevelItem,null,l.a.createElement(p.Toolbar,null,l.a.createElement(f.ToolbarGroup,null,l.a.createElement(d.ToolbarItem,null,l.a.createElement(F,{apiRequest:r,isDisabled:e,meta:k,isCompact:!0})))))))}(x),x&&l.a.createElement(q.b,null),x||0!==N.length?l.a.createElement(i.Fragment,null,!x&&l.a.createElement(h.b,{"aria-label":"".concat(y," table"),onCollapse:function(e,t,a,n){var r=n.id;return C?C(r,G,W):G((function(e){return W(e,r)}))},rows:N,cells:n,onSelect:t&&function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n.id;return G(-1===a?N.map((function(e){return L({},e,{selected:t})})):function(e){return B(e,r)})},actionResolver:s,className:"table-fix"},l.a.createElement(g.a,null),l.a.createElement(v.a,null)),k.count>0&&l.a.createElement(V,null,l.a.createElement(F,{dropDirection:"up",meta:k,apiRequest:r}))):P())};A.propTypes={isSelectable:s.a.bool,createRows:s.a.func.isRequired,columns:s.a.array.isRequired,toolbarButtons:s.a.func,fetchData:s.a.func.isRequired,data:s.a.array,pagination:s.a.shape({limit:s.a.number,offset:s.a.number,count:s.a.number}),titlePlural:s.a.string,titleSingular:s.a.string,routes:s.a.func,actionResolver:s.a.func,setCheckedItems:s.a.func,filterValue:s.a.string,onFilterChange:s.a.func,isLoading:s.a.bool,onCollapse:s.a.func,renderEmptyState:s.a.func},A.defaultProps={requests:[],isLoading:!1,pagination:w.a,toolbarButtons:function(){return null},isSelectable:null,routes:function(){return null},renderEmptyState:function(){return null}}}}]);
//# sourceMappingURL=../sourcemaps/workflows.js.map