!function(e){function t(t){for(var a,i,l=t[0],s=t[1],c=t[2],p=0,f=[];p<l.length;p++)i=l[p],r[i]&&f.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(u&&u(t);f.length;)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/beta/apps/approval/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([391,1]),n()}({119:function(e,t,n){"use strict";var a=n(3),r=n.n(a),o=n(0),i=n.n(o),l=n(140),s=n(141),c=n(142),u=n(70),p=function(e){var t=e.searchValue,n=e.onFilterChange,a=e.placeholder;return r.a.createElement(l.a,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:"pf-c-input-group"},r.a.createElement(c.a,{placeholder:a,value:t,type:"text",onChange:n,"aria-label":"Find product button"}),r.a.createElement(u.c,{variant:"tertiary",id:"searchProductButton",onClick:function(){return n(t)}},r.a.createElement("i",{className:"fas fa-search","aria-hidden":"true"})))))};p.propTypes={onFilterChange:i.a.func.isRequired,placeholder:i.a.string,searchValue:i.a.string},p.defaultProps={searchValue:""},t.a=p},123:function(e,t,n){"use strict";var a=n(51),r=n.n(a),o=n(9),i=n.n(o),l=n(16),s=n.n(l),c=n(44),u=n.n(c),p=n(3),f=n.n(p),d=n(0),m=n.n(d),h=n(54),w=n.n(h),g=n(95),b=n(30),v=n.n(b),y=n(198),E=n(201),k=n(200),R=n(181),q=n(128),O=function(e){var t=e.input,n=e.options,a=e.isReadOnly,o=e.isDisabled,i=(e.FieldProvider,e.isRequired),l=u()(e,["input","options","isReadOnly","isDisabled","FieldProvider","isRequired"]);return f.a.createElement(y.a,r()({},t,l,{isDisabled:o||a}),function(e,t,n){if(t&&n)return e;var a=v()(e);return a.find(function(e){return void 0===e.value})?v()(a):[{label:n?"Please choose":"None"}].concat(v()(a))}(n,t.value,i).map(function(e){return f.a.createElement(E.a,r()({key:e.value||e.label},e,{label:e.label.toString()}))}))};O.propTypes={input:m.a.object.isRequired,options:m.a.arrayOf(m.a.shape({value:m.a.any,label:m.a.string.isRequired})).isRequired,isReadOnly:m.a.bool,isDisabled:m.a.bool,isRequired:m.a.bool,FieldProvider:m.a.any};var T=function(e){e.componentType;var t=e.label,n=e.isRequired,a=e.helperText,o=e.meta,i=e.description,l=e.hideLabel,s=u()(e,["componentType","label","isRequired","helperText","meta","description","hideLabel"]),c=o.error,p=o.touched&&c;return f.a.createElement(k.a,{isRequired:n,label:!l&&t,fieldId:s.id,isValid:!p,helperText:a,helperTextInvalid:o.error},i&&f.a.createElement(R.a,null,f.a.createElement(q.b,{component:q.a.small},i)),f.a.createElement(O,r()({label:t,isValid:!p,isRequired:n},s)))};T.propTypes={componentType:m.a.string,label:m.a.string,isRequired:m.a.bool,helperText:m.a.string,meta:m.a.object,description:m.a.string,hideLabel:m.a.bool};var C=T,x={default:{},modal:{buttonOrder:["cancel","reset","save"],buttonClassName:"modal-form-right-align"}},F=function(e){var t=e.componentMapper,n=e.formContainer,a=u()(e,["componentMapper","formContainer"]);return f.a.createElement("div",{className:x[n].buttonClassName},f.a.createElement(w.a,r()({formFieldsMapper:s()({},g.formFieldsMapper,i()({componentMapper:t},h.componentTypes.SELECT,C)),layoutMapper:g.layoutMapper},x[n],a)))};F.propTypes={componentMapper:m.a.object,formContainer:m.a.oneOf(["default","modal"])},F.defaultProps={componentMapper:{},formContainer:"default"};t.a=F},25:function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"e",function(){return r}),n.d(t,"f",function(){return o}),n.d(t,"g",function(){return i}),n.d(t,"a",function(){return l}),n.d(t,"i",function(){return s}),n.d(t,"h",function(){return c}),n.d(t,"c",function(){return u});var a="FETCH_REQUEST",r="FETCH_REQUESTS",o="FETCH_WORKFLOW",i="FETCH_WORKFLOWS",l="ADD_WORKFLOW",s="UPDATE_WORKFLOW",c="REMOVE_WORKFLOW",u="FETCH_RBAC_GROUPS"},382:function(e,t,n){var a=n(383);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(231)(a,r);a.locals&&(e.exports=a.locals)},383:function(e,t,n){(t=e.exports=n(136)(!1)).i(n(384),""),t.push([e.i,":root {\n  --ins-color--orange: #ec7a08; }\n\nbutton:focus {\n  outline: none; }\n\n.modal-form-right-align .pf-m-action:last-child .data-driven-forms__pf4-button-group:first-child {\n  margin-left: auto; }\n\n.data-table-detail.heading {\n  margin: 0 !important; }\n\n.data-table-detail.content {\n  margin-top: 0 !important; }\n",""])},390:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n.n(a),o=n(56),i=n.n(o),l=n(57),s=n.n(l),c=n(58),u=n.n(c),p=n(59),f=n.n(p),d=n(18),m=n.n(d),h=n(60),w=n.n(h),g=n(9),b=n.n(g),v=n(3),y=n.n(v),E=n(36),k=n(0),R=n.n(k),q=n(41),O=n(75),T=n(113),C=n.n(T),x=n(254),F=n(238),S=n(209),L=n(210),W=n(140),j=n(141),_=n(70),D=n(103),P=n(122),N=n(396),I=n(397),A=n(252),K=n(25),V=n(22),M=n.n(V),G=n(39),U=n.n(G),B=n(76),H=Object(B.a)();function z(){return Q.apply(this,arguments)}function Q(){return(Q=U()(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.listGroups();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(e){return X.apply(this,arguments)}function X(){return(X=U()(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",Promise.all(t.map(function(){var e=U()(M.a.mark(function e(t){var n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.getGroup(t);case 2:return n=e.sent,e.abrupt("return",n.name);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Z=Object(B.d)(),Y=Object(B.c)();function $(e){return ee.apply(this,arguments)}function ee(){return(ee=U()(M.a.mark(function e(t){var n,a,o,i,l,s;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.limit,a=void 0===n?10:n,o=t.offset,i=void 0===o?0:o,e.next=3,Z.listWorkflows(a,i);case 3:return l=e.sent,s=l.data,e.abrupt("return",Promise.all(s.map(function(){var e=U()(M.a.mark(function e(t){var n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(t.group_refs);case 2:return n=e.sent,e.abrupt("return",r()({},t,{group_names:n}));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())).then(function(e){return r()({},l,{data:e})}));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function te(e){return ne.apply(this,arguments)}function ne(){return(ne=U()(M.a.mark(function e(t){var n,a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.showWorkflow(t);case 2:return n=e.sent,e.next=5,J(n.group_refs);case 5:return a=e.sent,e.abrupt("return",r()({},n,{group_names:a}));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ae(e){return re.apply(this,arguments)}function re(){return(re=U()(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.updateWorkflow(t.id,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function oe(e){return ie.apply(this,arguments)}function ie(){return(ie=U()(M.a.mark(function e(t){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:K.g,payload:$(e)}},se=function(e){return{type:K.f,payload:te(e)}},ce=function(e){return{type:K.a,payload:(t=e,Y.listTemplates().then(function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id}).then(function(e){return Z.addWorkflowToTemplate(e,t,{})})),meta:{notifications:{fulfilled:{variant:"success",title:"Success adding workflow",description:"The workflow was added successfully."},rejected:{variant:"danger",title:"Failed adding workflow",description:"The workflow was not added successfuly."}}}};var t},ue=function(e){return{type:K.i,payload:ae(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success updating workflow",description:"The workflow was updated successfully."},rejected:{variant:"danger",title:"Failed updating workflow",description:"The workflow was not updated successfuly."}}}}},pe=function(e){return{type:K.h,payload:oe(e),meta:{notifications:{fulfilled:{variant:"success",title:"Success removing workflow",description:"The workflow was removed successfully."}}}}},fe=n(30),de=n.n(fe),me=n(44),he=n.n(me),we=n(55),ge=n(202),be=n(65),ve=n(95),ye=n(123),Ee=n(54),ke=function(e,t){return{fields:[{component:Ee.componentTypes.WIZARD,name:"workflow_wizard",fields:[{title:"Workflow information",name:"wf_step_info",stepKey:1,nextStep:"wf_step_stages",fields:[{component:Ee.componentTypes.TEXTAREA_FIELD,name:"name",type:"text",isRequired:!0,label:"Name",validate:[{type:Ee.validatorTypes.REQUIRED}]},{component:Ee.componentTypes.TEXTAREA_FIELD,name:"description",type:"text",label:"Description"}]},{stepKey:"wf_step_stages",title:"Set Approval Stages",name:"wf_step_stages",nextStep:"summary",fields:[{component:Ee.componentTypes.SELECT,name:"stage-1",isRequired:!1,label:"1st Stage",options:t},{component:Ee.componentTypes.SELECT,name:"stage-2",label:"2nd Stage",options:t},{component:Ee.componentTypes.SELECT,name:"stage-3",label:"3rd Stage",options:t}]},{fields:[{name:"summary",component:"summary"}],stepKey:"summary",name:"summary"}]}]}},Re=n(181),qe=n(128),Oe=function(e){var t=e.values,n=t.name,a=t.description,r=he()(t,["name","description"]);return y.a.createElement(v.Fragment,null,y.a.createElement(Re.a,null,y.a.createElement(qe.b,{className:"data-table-detail heading",component:qe.a.h5},"Please review the workflow details")),y.a.createElement(Re.a,null,y.a.createElement(qe.b,{className:"data-table-detail heading",component:qe.a.h5},"Name"),y.a.createElement(qe.b,{className:"data-table-detail content",component:qe.a.p},n)),y.a.createElement(Re.a,null,y.a.createElement(qe.b,{className:"data-table-detail heading",component:qe.a.h5},"Description"),y.a.createElement(qe.b,{className:"data-table-detail content",component:qe.a.p},a)),y.a.createElement(Re.a,null,y.a.createElement(qe.b,{className:"data-table-detail heading",component:qe.a.h5},"Approval Stages"),Object.keys(r).map(function(t){return t.startsWith("stage")&&y.a.createElement(qe.b,{key:t,className:"data-table-detail content",component:qe.a.p},"".concat(t," : ").concat(e.groupOptions.find(function(e){return e.value===r[t]}).label))})))};Oe.propTypes={name:R.a.string,description:R.a.string,groups:R.a.array};var Te=Oe,Ce=function(e){var t=e.history.push,n=e.addWorkflow,a=e.addNotification,o=e.fetchWorkflow,i=e.fetchWorkflows,l=e.initialValues,s=e.updateWorkflow,c=e.initialGroups,u=e.workflowId,p=e.rbacGroups;Object(v.useEffect)(function(){u&&o(u).then(function(e){return m(e)})},[u]);var f=function(){a({variant:"warning",title:l?"Editing workflow":"Creating workflow",description:l?"Edit workflow was cancelled by the user.":"Creating workflow was cancelled by the user."}),t("/workflows")},d=[].concat(de()(p),[{value:void 0,label:"None"}]),m=function(e){return e.value.group_refs.map(function(e,t){return b()({},"stage-".concat(t+1),e)}).reduce(function(e,t){return r()({},e,t)},{})};return y.a.createElement(ge.a,{title:l?"Edit workflow":"Create workflow",isOpen:!0,onClose:f,isSmall:!0},y.a.createElement("div",{style:{padding:8}},y.a.createElement(ye.a,{schema:ke(0,d),schemaType:"default",onSubmit:function(e){var a=e.name,r=e.description,o=he()(e,["name","description"]),c={name:a,description:r,group_refs:Object.values(o)};l?s(c).then(t("/workflosws")).then(function(){return i()}):n(c).then(t("/workflows")).then(function(){return i()})},onCancel:f,initialValues:r()({},l,c),formFieldsMapper:r()({},ve.formFieldsMapper,{summary:function(e){return y.a.createElement(Te,{values:e.formOptions.getState().values,groupOptions:d})}}),formContainer:"modal",showFormControls:!1,buttonsLabels:{submitLabel:"Confirm"}})))};Ce.defaultProps={rbacGroups:[],initialGroups:[]},Ce.propTypes={history:R.a.shape({goBack:R.a.func.isRequired}).isRequired,addWorkflow:R.a.func.isRequired,addNotification:R.a.func.isRequired,fetchWorkflow:R.a.func.isRequired,fetchWorkflows:R.a.func.isRequired,initialValues:R.a.object,updateWorkflow:R.a.func.isRequired,workflowId:R.a.string,initialGroups:R.a.array,rbacGroups:R.a.arrayOf(R.a.shape({value:R.a.oneOfType([R.a.number,R.a.string]).isRequired,label:R.a.string.isRequired})).isRequired};var xe=Object(O.f)(Object(E.connect)(function(e,t){var n=t.match.params.id,a=e.workflowReducer.selectedWorkflow;return{rbacGroups:e.groupReducer.groups,initialValues:n&&a,workflowId:n}},function(e){return Object(we.bindActionCreators)({addNotification:be.addNotification,addWorkflow:ce,updateWorkflow:ue,fetchWorkflows:le,fetchWorkflow:se},e)})(Ce)),Fe=n(82),Se=function(e){var t=e.history,n=t.goBack,a=t.push,r=e.removeWorkflow,o=e.fetchWorkflows,i=e.fetchWorkflow,l=e.workflowId,s=e.workflow;if(Object(v.useEffect)(function(){l&&i(l)},[l]),!s)return null;var c=function(){return n()};return y.a.createElement(ge.a,{isOpen:!0,isSmall:!0,title:"",onClose:c,actions:[y.a.createElement(_.c,{key:"cancel",variant:"secondary",type:"button",onClick:c},"Cancel"),y.a.createElement(_.c,{key:"submit",variant:"primary",type:"button",onClick:function(){return r(l).then(function(){o(),a("/workflows")})}},"Confirm")]},y.a.createElement(Fe.a,null,y.a.createElement(Re.a,null,y.a.createElement(qe.b,{component:qe.a.h1},"Removing Workflow:  ",s.name))))};Se.propTypes={history:R.a.shape({goBack:R.a.func.isRequired,push:R.a.func.isRequired}).isRequired,removeWorkflow:R.a.func.isRequired,fetchWorkflows:R.a.func.isRequired,fetchWorkflow:R.a.func.isRequired,workflowId:R.a.string,workflow:R.a.object};var Le=Object(O.f)(Object(E.connect)(function(e,t){var n=e.workflowReducer,a=n.selectedWorkflow,r=n.isLoading;return{workflowId:t.match.params.id,workflow:a,isLoading:r}},function(e){return Object(we.bindActionCreators)({fetchWorkflow:se,fetchWorkflows:le,removeWorkflow:pe},e)})(Se)),We=n(91),je=function(e){var t=e.description,n=e.groups;return y.a.createElement(v.Fragment,null,y.a.createElement(Re.a,null,y.a.createElement(qe.b,{className:"data-table-detail heading",component:qe.a.small},"Description"),y.a.createElement(qe.b,{className:"data-table-detail content",component:qe.a.h5},t)),y.a.createElement(Re.a,null,y.a.createElement(qe.b,{className:"data-table-detail heading",component:qe.a.small},"Groups"),y.a.createElement(qe.b,{className:"data-table-detail content",component:qe.a.h5},n.join(","))))};je.propTypes={description:R.a.string,groups:R.a.array};var _e=je,De=function(e){return e.filter(function(e){return"Always approve"!==e.name}).reduce(function(e,t,n){var a=t.id,r=t.name,o=t.description,i=t.group_names;return[].concat(de()(e),[{id:a,isOpen:!1,cells:[r,o,i.length]},{parent:2*n,cells:[{title:y.a.createElement(_e,{description:o,groups:i})}]}])},[])},Pe=n(119),Ne=n(121),Ie=[{title:"Name",cellFormatters:[D.b]},"Description","Groups"],Ae=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=u()(this,(e=f()(t)).call.apply(e,[this].concat(o))),b()(m()(n),"state",{filteredItems:[],isOpen:!1,filterValue:"",rows:[]}),b()(m()(n),"fetchData",function(){n.props.fetchRbacGroups(),n.props.fetchWorkflows().then(function(){return n.setState({rows:De(n.props.workflows)})})}),b()(m()(n),"handleOnPerPageSelect",function(e){return n.props.fetchWorkflows({offset:n.props.pagination.offset,limit:e}).then(function(){return n.setState({rows:De(n.props.workflows)})})}),b()(m()(n),"handleSetPage",function(e,t){var a={offset:Object(We.b)(e,n.props.pagination.limit),limit:n.props.pagination.limit},r=function(){return n.props.fetchWorkflows(a)};return t?Object(x.a)(r,250)():r().then(function(){return n.setState({rows:De(n.props.workflows)})})}),b()(m()(n),"setOpen",function(e,t){return e.map(function(e){return e.id===t?r()({},e,{isOpen:!e.isOpen}):r()({},e)})}),b()(m()(n),"setSelected",function(e,t){return e.map(function(e){return e.id===t?r()({},e,{selected:!e.selected}):r()({},e)})}),b()(m()(n),"onFilterChange",function(e){return n.setState({filterValue:e})}),b()(m()(n),"onCollapse",function(e,t,a,r){var o=r.id;return n.setState(function(e){var t=e.rows;return{rows:n.setOpen(t,o)}})}),b()(m()(n),"selectRow",function(e,t,a){var o=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).id;return-1===a?n.setState(function(e){return{rows:e.rows.map(function(e){return r()({},e,{selected:t})})}}):n.setState(function(e){var t=e.rows;return{rows:n.setSelected(t,o)}})}),b()(m()(n),"actionResolver",function(e,t){return 1===t.rowIndex?null:[{title:"Edit",onClick:function(e,t,a){return n.props.history.push("/workflows/edit/".concat(a.id))}},{title:"Delete",style:{color:"var(--pf-global--danger-color--100)"},onClick:function(e,t,a){return n.props.history.push("/workflows/remove/".concat(a.id))}}]}),n}return w()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.fetchData(),Object(We.c)()}},{key:"componentDidUpdate",value:function(e){C()(this.props.workflows,e.workflows)||this.setState({rows:De(this.props.workflows)})}},{key:"renderToolbar",value:function(){return y.a.createElement(Ne.TableToolbar,null,y.a.createElement(F.a,{style:{flex:1}},y.a.createElement(S.a,null,y.a.createElement(L.a,null,y.a.createElement(Pe.a,{onFilterChange:this.onFilterChange,searchValue:this.state.filterValue,placeholder:"Find a Workflow"}),y.a.createElement(W.a,null,y.a.createElement(j.a,null,y.a.createElement(q.b,{to:"/workflows/add-workflow"},y.a.createElement(_.c,{variant:"primary","aria-label":"Create Workflow"},"Create Workflow")))))),y.a.createElement(S.a,null,y.a.createElement(L.a,null,y.a.createElement(W.a,null,y.a.createElement(j.a,null,y.a.createElement(A.Pagination,{itemsPerPage:this.props.pagination.limit||50,numberOfItems:this.props.pagination.count||50,onPerPageSelect:this.handleOnPerPageSelect,page:Object(We.a)(this.props.pagination.limit,this.props.pagination.offset),onSetPage:this.handleSetPage,direction:"down"})))))))}},{key:"render",value:function(){return y.a.createElement(v.Fragment,null,y.a.createElement(O.b,{exact:!0,path:"/workflows/add-workflow",component:xe}),y.a.createElement(O.b,{exact:!0,path:"/workflows/edit/:id",component:xe}),y.a.createElement(O.b,{exact:!0,path:"/workflows/remove/:id",component:Le}),this.renderToolbar(),y.a.createElement(P.b,{"aria-label":"Approval Workflows table",onCollapse:this.onCollapse,rows:this.state.rows,cells:Ie,onSelect:this.selectRow,actionResolver:this.actionResolver},y.a.createElement(N.a,null),y.a.createElement(I.a,null)))}}]),t}(v.Component);Ae.propTypes={history:R.a.shape({goBack:R.a.func.isRequired,push:R.a.func.isRequired}).isRequired,filteredItems:R.a.array,workflows:R.a.array,platforms:R.a.array,isLoading:R.a.bool,searchFilter:R.a.string,fetchWorkflows:R.a.func.isRequired,fetchRbacGroups:R.a.func.isRequired,pagination:R.a.shape({limit:R.a.number.isRequired,offset:R.a.number.isRequired,count:R.a.number.isRequired})},Ae.defaultProps={workflows:[],pagination:{}};t.default=Object(E.connect)(function(e){var t=e.workflowReducer,n=t.workflows,a=t.isLoading,r=e.groupReducer,o=r.groups,i=r.filterValue;return{workflows:n.data,pagination:n.meta,rbacGroups:o,isLoading:a,searchFilter:i}},function(e){return{fetchWorkflows:function(t){return e(le(t))},fetchRbacGroups:function(t){return e({type:K.c,payload:z().then(function(e){var t=e.data;return de()(t.map(function(e){return{value:e.uuid,label:e.name}}))})})}}})(Ae)},391:function(e,t,n){"use strict";n.r(t);var a,r,o,i=n(3),l=n.n(i),s=n(8),c=n.n(s),u=n(41),p=n(36),f=n(255),d=n(52),m=n(65),h=n(245),w=n.n(h),g=n(246),b=n(9),v=n.n(b),y=n(16),E=n.n(y),k=n(25),R=function(e){return E()({},e,{isRequestDataLoading:!0})},q=(a={},v()(a,"".concat(k.e,"_PENDING"),R),v()(a,"".concat(k.e,"_FULFILLED"),function(e,t){var n=t.payload;return E()({},e,{requests:n,isRequestDataLoading:!1})}),v()(a,"".concat(k.d,"_PENDING"),R),v()(a,"".concat(k.d,"_FULFILLED"),function(e,t){var n=t.payload;return E()({},e,{selectedRequest:n,isRequestDataLoading:!1})}),a),O=function(e){return E()({},e,{isLoading:!0})},T=(r={},v()(r,"".concat(k.g,"_PENDING"),O),v()(r,"".concat(k.g,"_FULFILLED"),function(e,t){var n=t.payload;return E()({},e,{workflows:n,isLoading:!1})}),v()(r,"".concat(k.f,"_PENDING"),O),v()(r,"".concat(k.f,"_FULFILLED"),function(e,t){var n=t.payload;return E()({},e,{selectedWorkflow:n,isLoading:!1})}),r),C=(o={},v()(o,"".concat(k.c,"_PENDING"),function(e){return E()({},e,{isLoading:!0})}),v()(o,"".concat(k.c,"_FULFILLED"),function(e,t){var n=t.payload;return E()({},e,{groups:n,isLoading:!1})}),o),x=new d.ReducerRegistry({},[g.a,Object(f.a)(),Object(m.notificationsMiddleware)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]}),w.a]);x.register({requestReducer:Object(d.applyReducerHash)(q,{requests:[],request:{},filterValue:"",isRequestDataLoading:!1}),workflowReducer:Object(d.applyReducerHash)(T,{workflows:{data:[],meta:{count:0,limit:10,offset:0}},workflow:{},filterValue:"",isLoading:!1}),groupReducer:Object(d.applyReducerHash)(C,{groups:[],isLoading:!1}),notifications:m.notifications});var F=x.getStore(),S=n(56),L=n.n(S),W=n(57),j=n.n(W),_=n(58),D=n.n(_),P=n(59),N=n.n(P),I=n(18),A=n.n(I),K=n(60),V=n.n(K),M=n(0),G=n.n(M),U=n(75),B=n(44),H=n.n(B),z=n(146),Q=n.n(z),J=n(51),X=n.n(J),Z=n(30),Y=n.n(Z),$=n(147),ee=n(168),te=n(169),ne=n(170),ae=n(171),re=function(e){var t=e.items,n=H()(e,["items"]);return l.a.createElement(ee.a,{gutter:"md"},l.a.createElement(te.a,{sm:12,style:{padding:24}},l.a.createElement(ee.a,{gutter:"md"},Y()(Array(t)).map(function(e,t){return l.a.createElement(te.a,{sm:12,md:6,lg:3,key:t},l.a.createElement(ne.a,null,l.a.createElement(ae.a,null,l.a.createElement($.a,X()({height:160,width:300,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},n),l.a.createElement("rect",{x:"2",y:"99",rx:"3",ry:"3",width:"300",height:"6.4"})))))}))))};re.propTypes={items:G.a.number},re.defaultProps={items:1};var oe=function(e){return l.a.createElement("div",null,l.a.createElement($.a,X()({height:16,width:300,speed:2,primaryColor:"#FFFFFF",secondaryColor:"#FFFFFF"},e),l.a.createElement("rect",{x:"0",y:"0",rx:"0",ry:"0",width:"420",height:"10"})),l.a.createElement(re,null))},ie=Object(i.lazy)(function(){return Promise.resolve().then(function(){return Q()(n(392))})}),le=Object(i.lazy)(function(){return Promise.resolve().then(function(){return Q()(n(390))})}),se="/requests",ce="/workflows",ue=function(e){var t=e.rootClass,n=H()(e,["rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(t),"pf-l-page__main","pf-c-page__main"),a.setAttribute("role","main"),l.a.createElement(U.b,n)};ue.propTypes={rootClass:G.a.string};var pe=function(){return l.a.createElement(i.Suspense,{fallback:l.a.createElement(oe,null)},l.a.createElement(U.d,null,l.a.createElement(ue,{path:se,component:ie,rootClass:"requests"}),l.a.createElement(ue,{path:ce,component:le,rootClass:"workflows"}),l.a.createElement(U.b,{render:function(){return l.a.createElement(U.a,{to:ce})}})))},fe=(n(382),n(237)),de=n(208),me=[{eventKey:0,title:"Requests",name:"/requests"},{eventKey:1,title:"Workflows",name:"/workflows"}],he=function(e){var t=e.history.push,n=e.location.pathname,a=me.find(function(e){var t=e.name;return n.includes(t)});return l.a.createElement(fe.a,{className:"pf-u-mt-md",activeKey:a?a.eventKey:0,onSelect:function(e,n){return t(me[n].name)}},me.map(function(e){return l.a.createElement(de.a,{title:e.title,key:e.eventKey,eventKey:e.eventKey,name:e.name})}))};he.propTypes={children:G.a.oneOfType([G.a.node,G.a.arrayOf(G.a.node)]),location:G.a.shape({pathname:G.a.string.isRequired}),history:G.a.shape({push:G.a.func.isRequired})};var we=Object(U.f)(he),ge=n(139),be=(n(386),function(e){function t(){var e,n;L()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=D()(this,(e=N()(t)).call.apply(e,[this].concat(r))),v()(A()(n),"state",{chromeNavAvailable:!0,auth:!1}),n}return V()(t,e),j()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.auth.getUser().then(function(){return e.setState({auth:!0})}),insights.chrome.identifyApp("approval")}},{key:"render",value:function(){return this.state.auth?l.a.createElement(l.a.Fragment,null,l.a.createElement(m.NotificationsPortal,null),l.a.createElement(d.PageHeader,{style:{paddingBottom:0}},l.a.createElement(ge.a,{headingLevel:"h1",size:"2xl"},"Approval"),l.a.createElement(we,null)),l.a.createElement(d.Main,null,l.a.createElement(pe,null))):l.a.createElement(oe,null)}}]),t}(i.Component));be.propTypes={history:G.a.object};var ve=Object(U.f)(Object(p.connect)()(be)),ye=window.location.pathname.split("/");ye.shift();var Ee="/";"beta"===ye[0]&&(Ee="/".concat(ye.shift(),"/")),c.a.render(l.a.createElement(p.Provider,{store:F},l.a.createElement(u.a,{basename:"".concat(Ee).concat(ye[0],"/").concat(ye[1])},l.a.createElement(ve,null))),document.getElementById("root"))},392:function(e,t,n){"use strict";n.r(t);var a=n(51),r=n.n(a),o=n(56),i=n.n(o),l=n(57),s=n.n(l),c=n(58),u=n.n(c),p=n(59),f=n.n(p),d=n(18),m=n.n(d),h=n(60),w=n.n(h),g=n(9),b=n.n(g),v=n(3),y=n.n(v),E=n(36),k=n(0),R=n.n(k),q=n(75),O=n(238),T=n(210),C=n(140),x=n(30),F=n.n(x),S=n(52),L=n(182),W=n(41),j=n(239),_=n(21),D=n(172),P=n(173),N=n(174),I=n(175),A=n(176),K=n(177),V=n(178),M=n(179),G=n(180),U=n(139),B=n(181),H=n(128),z=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=u()(this,(e=f()(t)).call.apply(e,[this].concat(r))),b()(m()(n),"state",{isKebabOpen:!1}),b()(m()(n),"onKebabToggle",function(e){n.setState({isKebabOpen:e})}),b()(m()(n),"onKebabSelect",function(){n.setState({isKebabOpen:!n.state.isKebabOpen})}),b()(m()(n),"buildRequestActionKebab",function(e){return y.a.createElement(j.a,{position:_.d.right,onSelect:n.onKebabSelect,toggle:y.a.createElement(D.a,{onToggle:n.onKebabToggle}),isOpen:n.state.isKebabOpen,dropdownItems:[y.a.createElement(P.a,{"aria-label":"Edit Request",key:"edit-request"},y.a.createElement(W.b,{to:"/requests/edit/".concat(e.id)},"Edit")),y.a.createElement(P.a,{component:"link","aria-label":"Remove Request",key:"remove-request"},y.a.createElement(W.b,{to:"/requests/remove/".concat(e.id)},"Delete"))],isPlain:!0})}),b()(m()(n),"fetchRequestDetails",function(e){return"Details for ".concat(e.name)}),n}return w()(t,e),s()(t,[{key:"render",value:function(){var e=this,t=this.props.item;return y.a.createElement(N.a,{key:"request-".concat(t.id),"aria-labelledby":"check-request-".concat(t.id),isExpanded:this.props.isExpanded("request-".concat(t.id))},y.a.createElement(I.a,{onClick:function(){return e.props.toggleExpand("request-".concat(t.id))},isExpanded:this.props.isExpanded("request-".concat(t.id)),id:"request-".concat(t.id),"aria-labelledby":"request-".concat(t.id," request-").concat(t.id),"aria-label":"Toggle details for"}),y.a.createElement(A.a,{"aria-labelledby":"check-request-".concat(t.id),name:"check-request-".concat(t.id)}),y.a.createElement(K.a,null,y.a.createElement(V.a,null,y.a.createElement("span",{id:t.id},"".concat(t.name)," ")),y.a.createElement(V.a,null,y.a.createElement("span",{id:t.description},"".concat(t.description)," "))),y.a.createElement(K.a,null,this.fetchRequestDetails(t)),y.a.createElement(M.a,{"aria-label":"Request Content Details",isHidden:!this.props.isExpanded("request-".concat(t.id))},y.a.createElement(G.a,{gutter:"md"},y.a.createElement(V.a,null,y.a.createElement(U.a,{size:"md"},"Details")),y.a.createElement(V.a,null,y.a.createElement(B.a,{component:H.a.h6},this.fetchRequestDetails(t))))))}}]),t}(v.Component);z.propTypes={isLoading:R.a.bool,item:R.a.object,isExpanded:R.a.func.isRequired,toggleExpand:R.a.func.isRequired,noItems:R.a.string};var Q=z,J=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=u()(this,(e=f()(t)).call.apply(e,[this].concat(r))),b()(m()(n),"state",{expanded:[]}),b()(m()(n),"toggleExpand",function(e){var t=n.state.expanded,a=t.indexOf(e),r=a>=0?[].concat(F()(t.slice(0,a)),F()(t.slice(a+1,t.length))):[].concat(F()(t),[e]);n.setState(function(){return{expanded:r}})}),b()(m()(n),"isExpanded",function(e){return n.state.expanded.includes(e)}),n}return w()(t,e),s()(t,[{key:"render",value:function(){var e=this;return this.props.isLoading||0===this.props.items.length?y.a.createElement(S.PageHeader,null,y.a.createElement(S.PageHeaderTitle,{title:this.props.noItems})):y.a.createElement(y.a.Fragment,null,this.props.items&&this.props.items.length>0&&y.a.createElement(L.a,{"aria-label":"Expandable data list"},this.props.items.map(function(t){return y.a.createElement(Q,{key:t.id,item:t,isExpanded:e.isExpanded,toggleExpand:e.toggleExpand})})))}}]),t}(v.Component);J.propTypes={isLoading:R.a.bool,items:R.a.array,noItems:R.a.string};var X=J,Z=n(119),Y=n(25),$=(n(22),n(39),n(76)),ee=Object($.b)();var te=function(){return function(e,t){if(!t().requestReducer.isRequestDataLoading)return e({type:Y.e,payload:ee.listRequests().then(function(e){var t=e.data;return F()(t)})})}},ne=n(16),ae=n.n(ne),re=n(256),oe=n(123),ie=n(55),le=n(202),se=n(168),ce=n(169),ue=n(65),pe=function(e){var t=e.history.goBack,n=e.addNotification,a=e.fetchRequests,r=e.initialValues,o=e.workflows,i=e.updateRequest,l=function(){n({variant:"warning",title:"Editing request",description:"Edit request was cancelled by the user."}),t()},s=o.map(function(e){return{value:e.id,label:e.name,id:e.id}}),c={type:"object",properties:{email:{title:r?"Email":"New Email",type:"string"},first_name:{title:"First Name",type:"string"},last_name:{title:"Last Name",type:"string"}},required:["email"]};return y.a.createElement(le.a,{isLarge:!0,title:r?"Update approver":"Create approver",isOpen:!0,onClose:l},y.a.createElement(se.a,{gutter:"md",style:{minWidth:"800px"}},y.a.createElement(ce.a,{sm:6},y.a.createElement(oe.a,{schema:c,schemaType:"mozilla",onSubmit:function(e){i(e).then(function(){return a()}).then(t)},onCancel:l,formContainer:"modal",initialValues:ae()({},r)})),y.a.createElement(ce.a,{sm:6},y.a.createElement(B.a,null,y.a.createElement(H.b,{component:H.a.h6},"Select the workflows for this request.")),y.a.createElement(re.a,{isMulti:!0,placeholders:"Select workflows",options:s,onChange:function(){},closeMenuOnSelect:!1}))))};pe.propTypes={history:R.a.shape({goBack:R.a.func.isRequired}).isRequired,addNotification:R.a.func.isRequired,fetchRequests:R.a.func.isRequired,initialValues:R.a.object,workflows:R.a.array,updateRequest:R.a.func.isRequired};var fe=Object(q.f)(Object(E.connect)(function(e,t){var n=t.match.params.id,a=e.requestReducer.requests;return{workflows:e.workflowReducer.workflows,initialValues:n&&a.find(function(e){return e.id===n}),requestId:n}},function(e){return Object(ie.bindActionCreators)({addNotification:ue.addNotification,fetchRequests:te},e)})(pe)),de=n(91),me=n(121),he=function(e){function t(){var e,n;i()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=u()(this,(e=f()(t)).call.apply(e,[this].concat(r))),b()(m()(n),"state",{filteredItems:[],isOpen:!1,filterValue:""}),b()(m()(n),"fetchData",function(){n.props.fetchRequests()}),b()(m()(n),"onFilterChange",function(e){return n.setState({filterValue:e})}),n}return w()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.fetchData(),Object(de.c)()}},{key:"renderToolbar",value:function(){return y.a.createElement(me.TableToolbar,null,y.a.createElement(O.a,{style:{flex:1}},y.a.createElement(T.a,null,y.a.createElement(C.a,null,y.a.createElement(T.a,null,y.a.createElement(Z.a,{onFilterChange:this.onFilterChange,searchValue:this.state.filterValue,placeholder:"Find a Request"}))))))}},{key:"render",value:function(){var e={items:this.props.requests,isLoading:this.props.isLoading&&0===this.props.requests.length};return y.a.createElement(v.Fragment,null,y.a.createElement(q.b,{exact:!0,path:"/requests/edit/:id",component:fe}),this.renderToolbar(),y.a.createElement(X,r()({},e,{noItems:"No Requests"})))}}]),t}(v.Component);he.propTypes={filteredItems:R.a.array,requests:R.a.array,isLoading:R.a.bool,searchFilter:R.a.string,fetchRequests:R.a.func.isRequired},he.defaultProps={requests:[]};t.default=Object(E.connect)(function(e){return{requests:e.requestReducer.requests,isLoading:e.requestReducer.isRequestDataLoading,workflows:e.workflowReducer.workflows,searchFilter:e.requestReducer.filterValue}},function(e){return{fetchRequests:function(t){return e(te())}}})(he)},76:function(e,t,n){"use strict";var a=n(105),r=n.n(a),o="".concat("/api","/approval/v1.0"),i="".concat("/api","/rbac/v1"),l=n(124),s=n(96);n.d(t,"b",function(){return m}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return w}),n.d(t,"a",function(){return g});var c=r.a.create();c.interceptors.response.use(function(e){return e.data||e});var u=new s.WorkflowApi(void 0,o,c),p=(new s.ActionApi(void 0,o,c),new s.RequestApi(void 0,o,c)),f=new s.TemplateApi(void 0,o,c),d=(new l.AccessApi(void 0,i,c),new l.PrincipalApi(void 0,i,c),new l.GroupApi(void 0,i,c));function m(){return p}function h(){return f}function w(){return u}function g(){return d}},91:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o});var a=function(){return document.getElementById("root").scrollTo({behavior:"smooth",top:0,left:0})},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(t/e)+1},o=function(){return((arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)-1)*(arguments.length>1?arguments[1]:void 0)}}});
//# sourceMappingURL=../sourcemaps/App.js.map