(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{604:function(e,t,a){"use strict";var r=(0,a(167).defineMessages)({createApprovalTitle:{id:"formMessages.createApprovalTitle",defaultMessage:"Create approval process"},generalInformation:{id:"formMessages.generalInformation",defaultMessage:"General information"},setGroups:{id:"formMessages.setGroups",defaultMessage:"Set groups"},enterInfo:{id:"formMessages.enterInfo",defaultMessage:"Enter your information"},approvalProcessName:{id:"formMessages.approvalProcessName",defaultMessage:"Name"},enterApprovalName:{id:"formMessages.enterApprovalName",defaultMessage:"Enter a name for the approval process"},description:{id:"formMessages.description",defaultMessage:"Description"},nameTaken:{id:"formMessages.nameTaken",defaultMessage:"Name has already been taken"},selectPlaceholder:{id:"formMessages.selectPlaceholder",defaultMessage:"Select..."},summary:{id:"formMessages.summary",defaultMessage:"Summary"},groups:{id:"formMessages.groups",defaultMessage:"Groups"},create:{id:"formMessages.create",defaultMessage:"Create"}});t.a=r},677:function(e,t,a){"use strict";a.r(t),a.d(t,"workflowsListState",(function(){return ot}));var r=a(169),s=a.n(r),n=a(76),o=a.n(n),c=a(96),l=a.n(c),i=a(10),u=a.n(i),f=a(0),p=a.n(f),d=a(95),m=a(17),g=a(57),w=a(177),v=a(176),b=a(93),k=a(550),h=a(553),y=a.n(h),M=a(253),O=a(65),P=a(15),E=a(84),j=a.n(E),S=a(136),T=a.n(S),D=a(172),A=a(168),F=a(78),x=Object(D.f)(),C=Object(D.e)();function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A.a,a="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),r="&filter[name][contains_i]=".concat(e);return Object(D.b)().get("".concat(F.a,"/workflows/?").concat(r).concat(a))}var q=function(e){return x.showWorkflow(e)};function R(e){return N.apply(this,arguments)}function N(){return(N=T()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return _.apply(this,arguments)}function _(){return(_=T()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=T()(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=(0,a(167).defineMessages)({edit:{id:"worfklowMessages.edit",defaultMessage:"Edit"},editInformation:{id:"worfklowMessages.editInformation",defaultMessage:"Edit information"},deleteApprovalTitle:{id:"worfklowMessages.deleteApprovalTitle",defaultMessage:"Delete approval process"},approvalProcess:{id:"worfklowMessages.approvalProcess",defaultMessage:"approval process"},approvalProcesses:{id:"worfklowMessages.approvalProcesses",defaultMessage:"approval processes"},noApprovalProcesses:{id:"worfklowMessages.noApprovalProcesses",defaultMessage:"No approval processes"},sequence:{id:"workflowMessages.sequence",defaultMessage:"Sequence"},enterSequence:{id:"workflowMessages.enterSequence",defaultMessage:"Enter sequence"},removeProcessTitle:{id:"workflowMessages.removeProcessTitle",defaultMessage:"Delete {count, plural, one {approval process} other {approval processes}}?"},removeProcessAriaLabel:{id:"workflowMessages.removeProcessTitle",defaultMessage:"Delete {count, plural, one {approval process} other {approval processes}} modal"},removeProcessDescription:{id:"workflowMessages.removeProcessDescription",defaultMessage:"{name} will be removed."},removeProcessDescriptionWithDeps:{id:"workflowMessages.removeProcessDescriptionWithDeps",defaultMessage:"{name} will be removed from the following applications: {dependenciesList}"},editProcessTitle:{id:"workflowMessages.editProcessTitle",defaultMessage:"Make any changes to approval process {name}"},addProcessSuccessTitle:{id:"workflowMessages.addProcessSuccessTitle",defaultMessage:"Success adding approval process"},addProcessSuccessDescription:{id:"workflowMessages.addProcessSuccessDescription",defaultMessage:"The approval process was added successfully."},updateProcessSuccessTitle:{id:"workflowMessages.updateProcessSuccessTitle",defaultMessage:"Success updating approval process"},updateProcessSuccessDescription:{id:"workflowMessages.updateProcessSuccessDescription",defaultMessage:"The approval process was updated successfully."},repositionProcessSuccessTitle:{id:"workflowMessages.repositionProcessSuccessTitle",defaultMessage:"Success updating approval process sequence"},repositionProcessSuccessDescription:{id:"workflowMessages.repositionProcessSuccessDescription",defaultMessage:"The approval process' sequence was updated successfully."},removeProcessSuccessTitle:{id:"workflowMessages.removeProcessSuccessTitle",defaultMessage:"Success removing approval process"},removeProcessSuccessDescription:{id:"workflowMessages.removeProcessSuccessDescription",defaultMessage:"The approval process was removed successfully."},removeProcessesSuccessTitle:{id:"workflowMessages.removeProcessesSuccessTitle",defaultMessage:"Success removing approval processes"},removeProcessesSuccessDescription:{id:"workflowMessages.removeProcessesSuccessDescription",defaultMessage:"The selected approval processes were removed successfully."},up:{id:"workflowMessages.up",defaultMessage:"up"},down:{id:"workflowMessages.down",defaultMessage:"down"}}),L=function(e){return function(t,a){var r=a().workflowReducer,s=r.workflows,n=r.filterValue,o=e;if(!e&&s){var c=s.meta;o={limit:c.limit,offset:c.offset}}return t({type:P.j,payload:W(n,o)})}},B=function(e){return{type:P.q,payload:e}},G=a(179),U=a.n(G),z=a(235),J=a(552),X=a(622),Q=a.n(X),H=a(45),K=a(611),Y=a(602),Z=a.n(Y),$=a(609),ee=a.n($),te=a(610),ae=a(604),re=Object(te.a)((function(e,t,a){return function(e){return W(e)}(e).then((function(r){var s=r.data;if(t?s.find((function(a){return e===a.name&&t!==a.id})):s.find((function(t){return e===t.name})))throw a.formatMessage(ae.a.nameTaken)}))})),se=function(e,t){return[{component:Z.a.TEXT_FIELD,name:"name",isRequired:!0,id:"workflow-name",label:e.formatMessage(ae.a.approvalProcessName),validate:[function(a){return re(a,t,e)},{type:ee.a.REQUIRED,message:e.formatMessage(ae.a.enterApprovalName)}]},{component:Z.a.TEXTAREA,name:"description",id:"workflow-description",label:e.formatMessage(ae.a.description)}]},ne=Object(te.a)((function(e){var t="&name=".concat(e);return Object(D.b)().get("".concat(F.c,'/groups/?role_names=",Approval Administrator,Approval Approver,"\n  ').concat(e&&e.length>0?t:"")).then((function(e){var t=e.data;return t&&t.length>0?t.map((function(e){var t=e.uuid;return{label:e.name,value:t}})):void 0}))})),oe=function(e){return{component:Z.a.SELECT,name:"group_refs",label:e.formatMessage(ae.a.setGroups),loadOptions:ne,noValueUpdates:!0,isMulti:!0,isSearchable:!0,simpleValue:!1,menuIsPortal:!0,isClearable:!0,placeholder:e.formatMessage(ae.a.selectPlaceholder)}},ce=function(e,t){return{fields:[].concat(l()(se(e,t)),[oe(e)])}};function le(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?le(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):le(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ue=function(){var e=Object(d.useDispatch)(),t=Object(m.g)().push,a=Object(z.a)(),r=function(){return t(H.a.workflows.index)};return p.a.createElement(J.Modal,{isOpen:!0,onClose:r,title:a.formatMessage(ae.a.createApprovalTitle),variant:"small"},p.a.createElement(K.a,{onSubmit:function(r){var s=r.group_refs,n=void 0===s?[]:s,o=U()(r,["group_refs"]);return t(H.a.workflows.index),e(function(e,t){return{type:P.a,payload:(a=e,C.listTemplates().then((function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id})).then((function(e){return x.addWorkflowToTemplate(e,a,{})}))),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(I.addProcessSuccessTitle),description:t.formatMessage(I.addProcessSuccessDescription)}}}};var a}(ie(ie({},o),{},{group_refs:n.length>0?n.map((function(e){return{name:e.label,uuid:e.value}})):[]}),a)).then((function(){return e(L())}))},onCancel:r,schema:ce(a),FormTemplate:function(e){return p.a.createElement(Q.a,s()({},e,{buttonClassName:"pf-u-mt-0",disableSubmit:["validating","pristine"]}))}}))},fe=a(8),pe=a.n(fe),de=a(56),me=a(94),ge=a(590),we=a(551),ve=a(589),be=a.n(ve),ke=a(603),he=function(e){var t=Object(d.useSelector)((function(e){return{workflows:e.workflowReducer.workflows}}),d.shallowEqual).workflows;return t&&t.data&&t.data.find((function(t){return t.id===e}))},ye=a(79),Me=a(601),Oe=a(635),Pe=a.n(Oe),Ee=function(e){var t=e.ids,a=void 0===t?[]:t,r=e.fetchData,s=e.resetSelectedWorkflows,n=Object(d.useDispatch)(),c=Object(f.useState)(),i=o()(c,2),u=i[0],g=i[1],w=Object(f.useState)(!1),v=o()(w,2),k=v[0],h=v[1],y=Object(m.g)().push,M=Object(ke.a)(["workflow"]),O=o()(M,1)[0].workflow||1===a.length&&a[0],E=Object(z.a)(),j=he(O);if(Object(f.useEffect)((function(){var e;O&&!j&&n((e=O,{type:P.i,payload:q(e)})).then((function(e){var t=e.value;return g(t)})).catch((function(){return y(H.a.workflows.index)}))}),[]),!O&&0===a.length)return null;var S=function(){return n(O?function(e,t){return{type:P.l,payload:R(e),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(I.removeProcessSuccessTitle),description:t.formatMessage(I.removeProcessSuccessDescription)}}}}}(O,E):function(e,t){return{type:P.m,payload:V(e),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(I.removeProcessesSuccessTitle),description:t.formatMessage(I.removeProcessesSuccessDescription)}}}}}(a,E)).catch((function(){return h(!1)})).then((function(){return y(H.a.workflows.index)})).then((function(){return s()})).then((function(){return r()}))},T=function(){return y(H.a.workflows.index)},D=function(){var e=j||u;return e&&!Pe()(e)&&e.metadata&&e.metadata.object_dependencies&&!Pe()(e.metadata.object_dependencies)?Object.keys(e.metadata.object_dependencies).reduce((function(e,t){return[].concat(l()(e),["".concat(F.b[t]||t)])}),[]):[]},A=p.a.createElement("b",{key:"remove-key"},O?u&&u.name||j&&j.name:p.a.createElement(p.a.Fragment,null,a.length," ",E.formatMessage(I.approvalProcesses))),x=O&&!j&&!u;return p.a.createElement(J.Modal,{isOpen:!0,variant:"small","aria-label":E.formatMessage(I.removeProcessAriaLabel,{count:O?1:a.length}),header:p.a.createElement(we.Title,{size:"2xl",headingLevel:"h1"},p.a.createElement(be.a,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),E.formatMessage(I.removeProcessTitle,{count:O?1:a.length})),onClose:T,actions:[p.a.createElement(b.Button,{id:"submit-remove-workflow",key:"submit",variant:"danger",type:"button",isDisabled:k,onClick:function(){return h(!0),S()}},k?p.a.createElement(p.a.Fragment,null,p.a.createElement(ge.Spinner,{size:"sm",className:"pf-u-mr-md"}),E.formatMessage(Me.a.deleting)):E.formatMessage(Me.a.delete)),p.a.createElement(b.Button,{id:"cancel-remove-workflow",key:"cancel",variant:"link",type:"button",isDisabled:k,onClick:T},E.formatMessage(Me.a.cancel))]},p.a.createElement(me.TextContent,null,p.a.createElement(de.Text,{component:de.TextVariants.p},x?p.a.createElement(ye.c,null):Pe()(D())?E.formatMessage(I.removeProcessDescription,{name:A}):E.formatMessage(I.removeProcessDescriptionWithDeps,{name:A,dependenciesList:p.a.createElement("span",{key:"span",className:"pf-u-mt-lg span-block"},D().map((function(e){return p.a.createElement("li",{key:e},e)})))}))))};Ee.propTypes={fetchData:pe.a.func.isRequired,ids:pe.a.array,resetSelectedWorkflows:pe.a.func.isRequired};var je=Ee,Se=a(562),Te=a(587),De=a(588),Ae=a(173),Fe=a(175),xe=a(586),Ce=a.n(xe),We=a(254),qe=a.n(We),Re=Object(f.createContext)({selectedWorkflows:[]}),Ne=function(e,t){return e[t]||(e[t]=Object(te.a)((function(e,t,a){return t(function(e,t){return{type:P.n,payload:(a=e,x.reposition(a.id,a.sequence)),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(I.repositionProcessSuccessTitle),description:t.formatMessage(I.repositionProcessSuccessDescription)}}}};var a}(e,a)).then((function(){return t(L())}))}),1500)),e[t]},Ve=function(e){var t=e.id,a=Object(f.useContext)(Re).cache,r=Object(d.useDispatch)(),s=Object(z.a)(),n=Object(d.useSelector)((function(e){var t=e.workflowReducer,a=t.isUpdating,r=t.isLoading;return{isUpdating:a>0||r,property:c}})),o=n.isUpdating,c=n.property,l=function(e){var n;return r((n={id:t,sequence:e},{type:P.k,payload:n})),Ne(a,t)({id:t,sequence:e},r,s)};return p.a.createElement(Ae.Stack,null,p.a.createElement(Fe.StackItem,null,p.a.createElement(b.Button,{variant:"plain","aria-label":s.formatMessage(I.up),id:"up-".concat(t),onClick:function(){return l({increment:-1})},isDisabled:o},p.a.createElement(Ce.a,null))),p.a.createElement(Fe.StackItem,null,p.a.createElement(b.Button,{variant:"plain","aria-label":s.formatMessage(I.down),id:"down-".concat(t),onClick:function(){return l({increment:1})},isDisabled:o},p.a.createElement(qe.a,null))))};Ve.propTypes={id:pe.a.string.isRequired,sequence:pe.a.number.isRequired};var _e=function(e){var t=e.group_refs,a=e.id;return p.a.createElement(Te.Flex,{key:a,className:"pf-u-mt-sm"},t.map((function(e){var t=e.name,a=e.uuid;return p.a.createElement(De.FlexItem,{key:a},p.a.createElement(Se.Label,{className:"group-label pf-u-mb-sm"},t))})))};_e.propTypes={id:pe.a.string,group_refs:pe.a.arrayOf(pe.a.shape({name:pe.a.string.isRequired,uuid:pe.a.string.isRequired}))};var Ie=function(e){var t=e.id,a=Object(f.useContext)(Re),r=a.selectedWorkflows,s=a.setSelectedWorkflows;return p.a.createElement(k.Checkbox,{id:"select-".concat(t),isChecked:r.includes(t),onChange:function(){return s(t)}})};Ie.propTypes={id:pe.a.string.isRequired};var Le=function(e){return e.map((function(e){var t=e.id,a=e.name,r=e.description,s=e.sequence,n=e.group_refs;return{id:t,cells:[p.a.createElement(p.a.Fragment,{key:"".concat(t,"-buttons")},p.a.createElement(Ve,{id:t,sequence:s})),p.a.createElement(p.a.Fragment,{key:"".concat(t,"-checkbox")},p.a.createElement(Ie,{id:t})),a,r,p.a.createElement(p.a.Fragment,{key:t},p.a.createElement(_e,{key:t,group_refs:n,id:t}))]}}))},Be=a(636),Ge=a(132),Ue=a(625),ze=a(38),Je=a(640),Xe=a(617);function Qe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function He(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Qe(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Qe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ke=function(e,t){var a=t.type,r=t.initialValues,s=t.schema;switch(a){case"loaded":return He(He({},e),{},{initialValues:r,schema:s,isLoading:!1});default:return e}},Ye=function(e){var t=e.group_refs.map((function(e){return{label:e.name,value:e.uuid}}));return He(He({},e),{},{group_refs:t})},Ze=function(){var e=Object(d.useDispatch)(),t=Object(m.g)().push,a=Object(z.a)(),r=Object(ke.a)(["workflow"]),n=o()(r,1)[0].workflow,c=he(n),l=Object(f.useReducer)(Ke,{isLoading:!0}),i=o()(l,2),u=i[0],g=u.initialValues,w=u.schema,v=u.isLoading,b=i[1];Object(f.useEffect)((function(){c?b({type:"loaded",initialValues:Ye(c),schema:ce(a,c.id)}):q(n).then((function(e){return b({type:"loaded",initialValues:Ye(e),schema:ce(a,e.id)})}))}),[]);var k=function(){return t(H.a.workflows.index)};return p.a.createElement(J.Modal,{isOpen:!0,onClose:k,title:a.formatMessage(I.editInformation),description:!v&&a.formatMessage(I.editProcessTitle,{name:g.name}),variant:"small"},v&&p.a.createElement(ye.f,null),!v&&p.a.createElement(K.a,{onSubmit:function(t){var r=t.group_refs,s=void 0===r?[]:r,n=U()(t,["group_refs"]);k();var o=He(He({},n),{},{group_refs:s.map((function(e){return{name:e.label,uuid:e.value}}))});return e(function(e,t){return{type:P.t,payload:(a=e,x.updateWorkflow(a.id,a)),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(I.updateProcessSuccessTitle),description:t.formatMessage(I.updateProcessSuccessDescription)}}}};var a}(o,a)).then((function(){return e(L())}))},onCancel:k,schema:w,initialValues:g,FormTemplate:function(e){return p.a.createElement(Q.a,s()({},e,{submitLabel:a.formatMessage(Me.a.save),buttonClassName:"pf-u-mt-0",disableSubmit:["validating","pristine"]}))}}))};function $e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function et(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(a),!0).forEach((function(t){u()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):$e(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var tt=function(e,t,a){return[{title:"",transforms:[Object(M.a)(1)]},{title:p.a.createElement(k.Checkbox,{onChange:a,isChecked:t,id:"select-all"}),transforms:[Object(M.a)(1)]},{title:e.formatMessage(Xe.a.name)},{title:e.formatMessage(ae.a.description),transforms:[Object(M.a)(35)],cellTransforms:[O.d]},{title:e.formatMessage(ae.a.groups)}]},at=Object(te.a)((function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:A.a;return a(!0),t(B(e)),t(L(r)).then((function(){return a(!1)}))}),1e3),rt=function(e,t){return e?[{category:t.formatMessage(Xe.a.name),key:"name",chips:[{name:e,value:e}]}]:[]},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){return t.includes(e.id)}))},nt=function(e,t,a){return a.indexOf(e)===t},ot=function(e,t){switch(t.type){case"setRows":return et(et({},e),{},{rows:t.payload,selectedAll:st(t.payload,e.selectedWorkflows)});case"setFetching":return et(et({},e),{},{isFetching:t.payload});case"setFilterValue":return et(et({},e),{},{filterValue:t.payload});case"select":return et(et({},e),{},{selectedAll:!1,selectedWorkflows:e.selectedWorkflows.includes(t.payload)?e.selectedWorkflows.filter((function(e){return e!==t.payload})):[].concat(l()(e.selectedWorkflows),[t.payload])});case"selectAll":return et(et({},e),{},{selectedWorkflows:[].concat(l()(e.selectedWorkflows),l()(t.payload)).filter(nt),selectedAll:!0});case"unselectAll":return et(et({},e),{},{selectedWorkflows:e.selectedWorkflows.filter((function(e){return!t.payload.includes(e)})),selectedAll:!1});case"resetSelected":return et(et({},e),{},{selectedWorkflows:[],selectedAll:!1});case"setFilteringFlag":return et(et({},e),{},{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(f.useRef)({}),t=Object(d.useSelector)((function(e){var t=e.workflowReducer;return{workflows:t.workflows,filterValueRedux:t.filterValue}}),d.shallowEqual),a=t.workflows,r=a.data,n=a.meta,c=t.filterValueRedux,l=Object(f.useReducer)(ot,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{filterValue:e,isFetching:!0,isFiltering:!1,selectedWorkflows:[],selectedAll:!1,rows:[]}}(c)),i=o()(l,2),u=i[0],k=u.filterValue,h=u.isFetching,M=u.isFiltering,O=u.selectedWorkflows,P=u.selectedAll,E=u.rows,j=i[1],S=Object(d.useDispatch)(),T=Object(m.g)(),D=Object(z.a)(),F=function(e){return j({type:"setFetching",payload:!0}),S(L(e)).then((function(){return j({type:"setFetching",payload:!1})})).catch((function(){return j({type:"setFetching",payload:!1})}))};Object(f.useEffect)((function(){F(A.a),Object(ze.g)()}),[]),Object(f.useEffect)((function(){j({type:"setRows",payload:Le(r)})}),[r]);var x=function(e){j({type:"setFilterValue",payload:e}),at(e,S,(function(e){return j({type:"setFilteringFlag",payload:e})}),et(et({},n),{},{offset:0}))},C=O.length>0;return p.a.createElement(f.Fragment,null,p.a.createElement(Ge.a,null,p.a.createElement(Ge.b,{title:D.formatMessage(Me.a.approvalTitle)}),p.a.createElement(Ue.a,null)),p.a.createElement(Re.Provider,{value:{selectedWorkflows:O,setSelectedWorkflows:function(e){return j({type:"select",payload:e})},cache:e.current}},p.a.createElement(Be.a,{rows:E,columns:tt(D,P,(function(){return j(P?{type:"unselectAll",payload:r.map((function(e){return e.id}))}:{type:"selectAll",payload:r.map((function(e){return e.id}))})})),fetchData:F,routes:function(){return p.a.createElement(f.Fragment,null,p.a.createElement(m.b,{exact:!0,path:H.a.workflows.add,render:function(e){return p.a.createElement(ue,s()({},e,{postMethod:F}))}}),p.a.createElement(m.b,{exact:!0,path:H.a.workflows.edit,component:Ze}),p.a.createElement(m.b,{exact:!0,path:H.a.workflows.remove,render:function(e){return p.a.createElement(je,s()({},e,{ids:O,fetchData:F,resetSelectedWorkflows:function(){return j({type:"resetSelected"})}}))}}))},actionResolver:function(){return[{title:D.formatMessage(I.edit),component:"button",onClick:function(e,t,a){return T.push({pathname:H.a.workflows.edit,search:"?workflow=".concat(a.id)})}},{title:D.formatMessage(Me.a.delete),component:"button",onClick:function(e,t,a){return T.push({pathname:H.a.workflows.remove,search:"?workflow=".concat(a.id)})}}]},titlePlural:D.formatMessage(I.approvalProcesses),titleSingular:D.formatMessage(I.approvalProcess),pagination:n,toolbarButtons:function(){return p.a.createElement(w.ToolbarGroup,{className:"pf-u-pl-lg top-toolbar"},p.a.createElement(v.ToolbarItem,null,p.a.createElement(g.b,{id:"add-workflow-link",to:{pathname:H.a.workflows.add}},p.a.createElement(b.Button,{variant:"primary","aria-label":D.formatMessage(ae.a.create)},D.formatMessage(ae.a.create)))),p.a.createElement(v.ToolbarItem,null,p.a.createElement(g.b,{id:"remove-multiple-workflows",className:C?"":"disabled-link",to:{pathname:H.a.workflows.remove}},p.a.createElement(b.Button,{variant:"secondary",isDisabled:!C,"aria-label":D.formatMessage(I.deleteApprovalTitle)},D.formatMessage(Me.a.delete)))))},filterValue:k,onFilterChange:x,isLoading:h||M,renderEmptyState:function(){return p.a.createElement(Je.a,{title:""===k?D.formatMessage(I.noApprovalProcesses):D.formatMessage(Xe.a.noResultsFound),Icon:y.a,PrimaryAction:function(){return""!==k?p.a.createElement(b.Button,{onClick:function(){return x("")},variant:"link"},D.formatMessage(Xe.a.clearAllFilters)):null},description:""===k?D.formatMessage(I.noApprovalProcesses):D.formatMessage(Xe.a.clearAllFiltersDescription)})},activeFiltersConfig:{filters:rt(k,D),onDelete:function(){return x("")}}})))}}}]);
//# sourceMappingURL=../sourcemaps/workflows~5a4d8549.js.map