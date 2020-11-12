(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{691:function(e,t,r){"use strict";var a=(0,r(210).defineMessages)({createApprovalTitle:{id:"formMessages.createApprovalTitle",defaultMessage:"Create approval process"},generalInformation:{id:"formMessages.generalInformation",defaultMessage:"General information"},setGroups:{id:"formMessages.setGroups",defaultMessage:"Set groups"},enterInfo:{id:"formMessages.enterInfo",defaultMessage:"Enter your information"},approvalProcessName:{id:"formMessages.approvalProcessName",defaultMessage:"Name"},enterApprovalName:{id:"formMessages.enterApprovalName",defaultMessage:"Enter a name for the approval process"},description:{id:"formMessages.description",defaultMessage:"Description"},nameTaken:{id:"formMessages.nameTaken",defaultMessage:"Name has already been taken"},selectPlaceholder:{id:"formMessages.selectPlaceholder",defaultMessage:"Select..."},summary:{id:"formMessages.summary",defaultMessage:"Summary"},groups:{id:"formMessages.groups",defaultMessage:"Groups"},create:{id:"formMessages.create",defaultMessage:"Create"}});t.a=a},822:function(e,t,r){"use strict";r.r(t),r.d(t,"workflowsListState",(function(){return it}));var a=r(212),s=r.n(a),n=r(106),o=r.n(n),c=r(124),i=r.n(c),l=r(12),u=r.n(l),f=r(0),p=r.n(f),d=r(123),m=r(23),g=r(76),w=r(223),v=r(222),b=r(211),y=r(634),h=r(633),k=r.n(h),M=r(310),O=r(89),P=r(19),j=r(113),E=r.n(j),S=r(189),D=r.n(S),T=r(218),A=r(214),F=r(108),x=Object(T.f)(),C=Object(T.e)();function W(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:A.b,r="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),a="&filter[name][contains_i]=".concat(e);return Object(T.b)().get("".concat(F.a,"/workflows/?").concat(a).concat(r))}var q=function(e){return x.showWorkflow(e)};function R(e){return V.apply(this,arguments)}function V(){return(V=D()(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return _.apply(this,arguments)}function _(){return(_=D()(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=D()(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=(0,r(210).defineMessages)({edit:{id:"worfklowMessages.edit",defaultMessage:"Edit"},editInformation:{id:"worfklowMessages.editInformation",defaultMessage:"Edit information"},deleteApprovalTitle:{id:"worfklowMessages.deleteApprovalTitle",defaultMessage:"Delete approval process"},approvalProcess:{id:"worfklowMessages.approvalProcess",defaultMessage:"approval process"},approvalProcesses:{id:"worfklowMessages.approvalProcesses",defaultMessage:"approval processes"},noApprovalProcesses:{id:"worfklowMessages.noApprovalProcesses",defaultMessage:"No approval processes"},sequence:{id:"workflowMessages.sequence",defaultMessage:"Sequence"},enterSequence:{id:"workflowMessages.enterSequence",defaultMessage:"Enter sequence"},removeProcessTitle:{id:"workflowMessages.removeProcessTitle",defaultMessage:"Delete {count, plural, one {approval process} other {approval processes}}?"},removeProcessAriaLabel:{id:"workflowMessages.removeProcessTitle",defaultMessage:"Delete {count, plural, one {approval process} other {approval processes}} modal"},removeProcessDescription:{id:"workflowMessages.removeProcessDescription",defaultMessage:"{name} will be removed."},removeProcessDescriptionWithDeps:{id:"workflowMessages.removeProcessDescriptionWithDeps",defaultMessage:"{name} will be removed from the following applications: {dependenciesList}"},editProcessTitle:{id:"workflowMessages.editProcessTitle",defaultMessage:"Make any changes to approval process {name}"},addProcessSuccessTitle:{id:"workflowMessages.addProcessSuccessTitle",defaultMessage:"Success adding approval process"},addProcessSuccessDescription:{id:"workflowMessages.addProcessSuccessDescription",defaultMessage:"The approval process was added successfully."},updateProcessSuccessTitle:{id:"workflowMessages.updateProcessSuccessTitle",defaultMessage:"Success updating approval process"},updateProcessSuccessDescription:{id:"workflowMessages.updateProcessSuccessDescription",defaultMessage:"The approval process was updated successfully."},repositionProcessSuccessTitle:{id:"workflowMessages.repositionProcessSuccessTitle",defaultMessage:"Success updating approval process sequence"},repositionProcessSuccessDescription:{id:"workflowMessages.repositionProcessSuccessDescription",defaultMessage:"The approval process' sequence was updated successfully."},removeProcessSuccessTitle:{id:"workflowMessages.removeProcessSuccessTitle",defaultMessage:"Success removing approval process"},removeProcessSuccessDescription:{id:"workflowMessages.removeProcessSuccessDescription",defaultMessage:"The approval process was removed successfully."},removeProcessesSuccessTitle:{id:"workflowMessages.removeProcessesSuccessTitle",defaultMessage:"Success removing approval processes"},removeProcessesSuccessDescription:{id:"workflowMessages.removeProcessesSuccessDescription",defaultMessage:"The selected approval processes were removed successfully."},up:{id:"workflowMessages.up",defaultMessage:"up"},down:{id:"workflowMessages.down",defaultMessage:"down"}}),L=function(e){return function(t,r){var a=r().workflowReducer,s=a.workflows,n=a.filterValue,o=e;if(!e&&s){var c=s.meta;o={limit:c.limit,offset:c.offset}}return t({type:P.j,payload:W(n,o)})}},B=function(e){return{type:P.q,payload:e}},G=r(219),U=r.n(G),z=r(291),J=r(635),X=r(719),Q=r.n(X),H=r(66),K=r(714),Y=r(690),Z=r.n(Y),$=r(705),ee=r.n($),te=r(697),re=r(691),ae=Object(te.a)((function(e,t,r){return function(e){return W(e)}(e).then((function(a){var s=a.data;if(t?s.find((function(r){return e===r.name&&t!==r.id})):s.find((function(t){return e===t.name})))throw r.formatMessage(re.a.nameTaken)}))})),se=function(e,t){return[{component:Z.a.TEXT_FIELD,name:"name",isRequired:!0,id:"workflow-name",label:e.formatMessage(re.a.approvalProcessName),validate:[function(r){return ae(r,t,e)},{type:ee.a.REQUIRED,message:e.formatMessage(re.a.enterApprovalName)}]},{component:Z.a.TEXTAREA,name:"description",id:"workflow-description",label:e.formatMessage(re.a.description)}]},ne=Object(te.a)((function(e){var t="&name=".concat(e);return Object(T.b)().get("".concat(F.c,'/groups/?role_names=",Approval Administrator,Approval Approver,"\n  ').concat(e&&e.length>0?t:"")).then((function(e){var t=e.data;return t&&t.length>0?t.map((function(e){var t=e.uuid;return{label:e.name,value:t}})):void 0}))})),oe=function(e){return{component:Z.a.SELECT,name:"group_refs",label:e.formatMessage(re.a.setGroups),loadOptions:ne,initialValue:[],clearedValue:[],noValueUpdates:!0,isMulti:!0,isSearchable:!0,simpleValue:!1,menuIsPortal:!0,isClearable:!0,placeholder:e.formatMessage(re.a.selectPlaceholder)}},ce=function(e,t){return{fields:[].concat(i()(se(e,t)),[oe(e)])}};function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=function(){var e=Object(d.useDispatch)(),t=Object(m.g)().push,r=Object(z.a)(),a=function(){return t(H.a.workflows.index)};return p.a.createElement(J.Modal,{isOpen:!0,onClose:a,title:r.formatMessage(re.a.createApprovalTitle),variant:"small"},p.a.createElement(K.a,{onSubmit:function(a){var s=a.group_refs,n=void 0===s?[]:s,o=U()(a,["group_refs"]);return t(H.a.workflows.index),e(function(e,t){return{type:P.a,payload:(r=e,C.listTemplates().then((function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id})).then((function(e){return x.addWorkflowToTemplate(e,r,{})}))),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(I.addProcessSuccessTitle),description:t.formatMessage(I.addProcessSuccessDescription)}}}};var r}(le(le({},o),{},{group_refs:n.length>0?n.map((function(e){return{name:e.label,uuid:e.value}})):[]}),r)).then((function(){return e(L())}))},onCancel:a,schema:ce(r),FormTemplate:function(e){return p.a.createElement(Q.a,s()({},e,{buttonClassName:"pf-u-mt-0",disableSubmit:["validating","pristine"]}))}}))},fe=r(10),pe=r.n(fe),de=r(75),me=r(122),ge=r(365),we=r(632),ve=r(642),be=r.n(ve),ye=r(692),he=function(e){var t=Object(d.useSelector)((function(e){return{workflows:e.workflowReducer.workflows}}),d.shallowEqual).workflows;return t&&t.data&&t.data.find((function(t){return t.id===e}))},ke=r(109),Me=r(687),Oe=r(727),Pe=r.n(Oe);function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Se=function(e){var t=e.ids,r=void 0===t?[]:t,a=e.fetchData,s=e.pagination,n=void 0===s?A.b:s,c=e.resetSelectedWorkflows,l=Object(d.useDispatch)(),u=Object(f.useState)(),g=o()(u,2),w=g[0],v=g[1],y=Object(f.useState)(!1),h=o()(y,2),k=h[0],M=h[1],O=Object(m.g)().push,j=Object(ye.a)(["workflow"]),E=o()(j,1)[0].workflow||1===r.length&&r[0],S=Object(z.a)(),D=he(E);if(Object(f.useEffect)((function(){var e;E&&!D&&l((e=E,{type:P.i,payload:q(e)})).then((function(e){var t=e.value;return v(t)})).catch((function(){return O(H.a.workflows.index)}))}),[]),!E&&0===r.length)return null;var T=function(){return l(E?function(e,t){return{type:P.l,payload:R(e),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(I.removeProcessSuccessTitle),description:t.formatMessage(I.removeProcessSuccessDescription)}}}}}(E,S):function(e,t){return{type:P.m,payload:N(e),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(I.removeProcessesSuccessTitle),description:t.formatMessage(I.removeProcessesSuccessDescription)}}}}}(r,S)).catch((function(){return M(!1)})).then((function(){return O(H.a.workflows.index)})).then((function(){return c()})).then((function(){return a(Ee(Ee({},n),{},{offset:Object(A.a)(n,E?1:r.length)}))}))},x=function(){return O(H.a.workflows.index)},C=function(){var e=D||w;return e&&!Pe()(e)&&e.metadata&&e.metadata.object_dependencies&&!Pe()(e.metadata.object_dependencies)?Object.keys(e.metadata.object_dependencies).reduce((function(e,t){return[].concat(i()(e),["".concat(F.b[t]||t)])}),[]):[]},W=p.a.createElement("b",{key:"remove-key"},E?w&&w.name||D&&D.name:p.a.createElement(p.a.Fragment,null,r.length," ",S.formatMessage(I.approvalProcesses))),V=E&&!D&&!w;return p.a.createElement(J.Modal,{isOpen:!0,variant:"small","aria-label":S.formatMessage(I.removeProcessAriaLabel,{count:E?1:r.length}),header:p.a.createElement(we.Title,{size:"2xl",headingLevel:"h1"},p.a.createElement(be.a,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),S.formatMessage(I.removeProcessTitle,{count:E?1:r.length})),onClose:x,actions:[p.a.createElement(b.Button,{id:"submit-remove-workflow",key:"submit",variant:"danger",type:"button",isDisabled:k,onClick:function(){return M(!0),T()}},k?p.a.createElement(p.a.Fragment,null,p.a.createElement(ge.Spinner,{size:"sm",className:"pf-u-mr-md"}),S.formatMessage(Me.a.deleting)):S.formatMessage(Me.a.delete)),p.a.createElement(b.Button,{id:"cancel-remove-workflow",key:"cancel",variant:"link",type:"button",isDisabled:k,onClick:x},S.formatMessage(Me.a.cancel))]},p.a.createElement(me.TextContent,null,p.a.createElement(de.Text,{component:de.TextVariants.p},V?p.a.createElement(ke.c,null):Pe()(C())?S.formatMessage(I.removeProcessDescription,{name:W}):S.formatMessage(I.removeProcessDescriptionWithDeps,{name:W,dependenciesList:p.a.createElement("span",{key:"span",className:"pf-u-mt-lg span-block"},C().map((function(e){return p.a.createElement("li",{key:e},e)})))}))))};Se.propTypes={fetchData:pe.a.func.isRequired,ids:pe.a.array,resetSelectedWorkflows:pe.a.func.isRequired,pagination:pe.a.shape({limit:pe.a.number,offset:pe.a.number,count:pe.a.number})};var De=Se,Te=r(647),Ae=r(672),Fe=r(673),xe=r(216),Ce=r(221),We=r(670),qe=r.n(We),Re=r(671),Ve=r.n(Re),Ne=Object(f.createContext)({selectedWorkflows:[]}),_e=function(e,t){return e[t]||(e[t]=Object(te.a)((function(e,t,r){return t(function(e,t){return{type:P.n,payload:(r=e,x.reposition(r.id,r.sequence)),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(I.repositionProcessSuccessTitle),description:t.formatMessage(I.repositionProcessSuccessDescription)}}}};var r}(e,r)).then((function(){return t(L())}))}),1500)),e[t]},Ie=function(e){var t=e.id,r=Object(f.useContext)(Ne).cache,a=Object(d.useDispatch)(),s=Object(z.a)(),n=Object(d.useSelector)((function(e){var t=e.workflowReducer,r=t.isUpdating,a=t.isLoading;return{isUpdating:r>0||a,property:c}})),o=n.isUpdating,c=n.property,i=function(e){var n;return a((n={id:t,sequence:e},{type:P.k,payload:n})),_e(r,t)({id:t,sequence:e},a,s)};return p.a.createElement(xe.Stack,null,p.a.createElement(Ce.StackItem,null,p.a.createElement(b.Button,{variant:"plain","aria-label":s.formatMessage(I.up),id:"up-".concat(t),onClick:function(){return i({increment:-1})},isDisabled:o},p.a.createElement(qe.a,null))),p.a.createElement(Ce.StackItem,null,p.a.createElement(b.Button,{variant:"plain","aria-label":s.formatMessage(I.down),id:"down-".concat(t),onClick:function(){return i({increment:1})},isDisabled:o},p.a.createElement(Ve.a,null))))};Ie.propTypes={id:pe.a.string.isRequired};var Le=function(e){var t=e.group_refs,r=e.id;return p.a.createElement(Ae.Flex,{key:r,className:"pf-u-mt-sm"},t.map((function(e){var t=e.name,r=e.uuid;return p.a.createElement(Fe.FlexItem,{key:r},p.a.createElement(Te.Label,{className:"group-label pf-u-mb-sm"},t))})))};Le.propTypes={id:pe.a.string,group_refs:pe.a.arrayOf(pe.a.shape({name:pe.a.string.isRequired,uuid:pe.a.string.isRequired}))};var Be=function(e){var t=e.id,r=Object(f.useContext)(Ne),a=r.selectedWorkflows,s=r.setSelectedWorkflows;return p.a.createElement(y.Checkbox,{id:"select-".concat(t),isChecked:a.includes(t),onChange:function(){return s(t)}})};Be.propTypes={id:pe.a.string.isRequired};var Ge=function(e){return e.map((function(e){var t=e.id,r=e.name,a=e.description,s=e.sequence,n=e.group_refs;return{id:t,cells:[p.a.createElement(p.a.Fragment,{key:"".concat(t,"-buttons")},p.a.createElement(Ie,{id:t,sequence:s})),p.a.createElement(p.a.Fragment,{key:"".concat(t,"-checkbox")},p.a.createElement(Be,{id:t})),r,a,p.a.createElement(p.a.Fragment,{key:t},p.a.createElement(Le,{key:t,group_refs:n,id:t}))]}}))},Ue=r(743),ze=r(168),Je=r(709),Xe=r(53),Qe=r(755),He=r(700);function Ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ze=function(e,t){var r=t.type,a=t.initialValues,s=t.schema;switch(r){case"loaded":return Ye(Ye({},e),{},{initialValues:a,schema:s,isLoading:!1});default:return e}},$e=function(e){var t=e.group_refs.map((function(e){return{label:e.name,value:e.uuid}}));return Ye(Ye({},e),{},{group_refs:t})},et=function(){var e=Object(d.useDispatch)(),t=Object(m.g)().push,r=Object(z.a)(),a=Object(ye.a)(["workflow"]),n=o()(a,1)[0].workflow,c=he(n),i=Object(f.useReducer)(Ze,{isLoading:!0}),l=o()(i,2),u=l[0],g=u.initialValues,w=u.schema,v=u.isLoading,b=l[1];Object(f.useEffect)((function(){c?b({type:"loaded",initialValues:$e(c),schema:ce(r,c.id)}):q(n).then((function(e){return b({type:"loaded",initialValues:$e(e),schema:ce(r,e.id)})}))}),[]);var y=function(){return t(H.a.workflows.index)};return p.a.createElement(J.Modal,{isOpen:!0,onClose:y,title:r.formatMessage(I.editInformation),description:!v&&r.formatMessage(I.editProcessTitle,{name:g.name}),variant:"small"},v&&p.a.createElement(ke.f,null),!v&&p.a.createElement(K.a,{onSubmit:function(t){var a=t.group_refs,s=void 0===a?[]:a,n=t.description,o=void 0===n?"":n,c=U()(t,["group_refs","description"]);y();var i=Ye(Ye({},c),{},{description:o,group_refs:s.map((function(e){return{name:e.label,uuid:e.value}}))});return e(function(e,t){return{type:P.t,payload:(r=e,x.updateWorkflow(r.id,r)),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(I.updateProcessSuccessTitle),description:t.formatMessage(I.updateProcessSuccessDescription)}}}};var r}(i,r)).then((function(){return e(L())}))},onCancel:y,schema:w,initialValues:g,FormTemplate:function(e){return p.a.createElement(Q.a,s()({},e,{submitLabel:r.formatMessage(Me.a.save),buttonClassName:"pf-u-mt-0",disableSubmit:["validating","pristine"]}))}}))};function tt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function rt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?tt(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var at=function(e,t,r){return[{title:"",transforms:[Object(M.a)(1)]},{title:p.a.createElement(y.Checkbox,{onChange:r,isChecked:t,id:"select-all"}),transforms:[Object(M.a)(1)]},{title:e.formatMessage(He.a.name)},{title:e.formatMessage(re.a.description),transforms:[Object(M.a)(35)],cellTransforms:[O.d]},{title:e.formatMessage(re.a.groups)}]},st=Object(te.a)((function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:A.b;return r(!0),t(B(e)),t(L(a)).then((function(){return r(!1)}))}),1e3),nt=function(e,t){return e?[{category:t.formatMessage(He.a.name),key:"name",chips:[{name:e,value:e}]}]:[]},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){return t.includes(e.id)}))},ct=function(e,t,r){return r.indexOf(e)===t},it=function(e,t){switch(t.type){case"setRows":return rt(rt({},e),{},{rows:t.payload,selectedAll:ot(t.payload,e.selectedWorkflows)});case"setFetching":return rt(rt({},e),{},{isFetching:t.payload});case"setFilterValue":return rt(rt({},e),{},{filterValue:t.payload});case"select":return rt(rt({},e),{},{selectedAll:!1,selectedWorkflows:e.selectedWorkflows.includes(t.payload)?e.selectedWorkflows.filter((function(e){return e!==t.payload})):[].concat(i()(e.selectedWorkflows),[t.payload])});case"selectAll":return rt(rt({},e),{},{selectedWorkflows:[].concat(i()(e.selectedWorkflows),i()(t.payload)).filter(ct),selectedAll:!0});case"unselectAll":return rt(rt({},e),{},{selectedWorkflows:e.selectedWorkflows.filter((function(e){return!t.payload.includes(e)})),selectedAll:!1});case"resetSelected":return rt(rt({},e),{},{selectedWorkflows:[],selectedAll:!1});case"setFilteringFlag":return rt(rt({},e),{},{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(f.useRef)({}),t=Object(d.useSelector)((function(e){var t=e.workflowReducer;return{workflows:t.workflows,filterValueRedux:t.filterValue}}),d.shallowEqual),r=t.workflows,a=r.data,n=r.meta,c=t.filterValueRedux,i=Object(f.useReducer)(it,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{filterValue:e,isFetching:!0,isFiltering:!1,selectedWorkflows:[],selectedAll:!1,rows:[]}}(c)),l=o()(i,2),u=l[0],y=u.filterValue,h=u.isFetching,M=u.isFiltering,O=u.selectedWorkflows,P=u.selectedAll,j=u.rows,E=l[1],S=Object(d.useDispatch)(),D=Object(m.g)(),T=Object(z.a)(),F=function(e){return E({type:"setFetching",payload:!0}),S(L(e)).then((function(){return E({type:"setFetching",payload:!1})})).catch((function(){return E({type:"setFetching",payload:!1})}))};Object(f.useEffect)((function(){F(A.b),Object(Xe.g)()}),[]),Object(f.useEffect)((function(){E({type:"setRows",payload:Ge(a)})}),[a]);var x=function(e){E({type:"setFilterValue",payload:e}),st(e,S,(function(e){return E({type:"setFilteringFlag",payload:e})}),rt(rt({},n),{},{offset:0}))},C=O.length>0;return p.a.createElement(f.Fragment,null,p.a.createElement(ze.a,null,p.a.createElement(ze.b,{title:T.formatMessage(Me.a.approvalTitle)}),p.a.createElement(Je.a,null)),p.a.createElement(Ne.Provider,{value:{selectedWorkflows:O,setSelectedWorkflows:function(e){return E({type:"select",payload:e})},cache:e.current}},p.a.createElement(Ue.a,{rows:j,columns:at(T,P,(function(){return E(P?{type:"unselectAll",payload:a.map((function(e){return e.id}))}:{type:"selectAll",payload:a.map((function(e){return e.id}))})})),fetchData:F,routes:function(){return p.a.createElement(f.Fragment,null,p.a.createElement(m.b,{exact:!0,path:H.a.workflows.add,render:function(e){return p.a.createElement(ue,s()({},e,{postMethod:F}))}}),p.a.createElement(m.b,{exact:!0,path:H.a.workflows.edit,component:et}),p.a.createElement(m.b,{exact:!0,path:H.a.workflows.remove,render:function(e){return p.a.createElement(De,s()({},e,{ids:O,fetchData:F,pagination:n,resetSelectedWorkflows:function(){return E({type:"resetSelected"})}}))}}))},actionResolver:function(){return[{title:T.formatMessage(I.edit),component:"button",onClick:function(e,t,r){return D.push({pathname:H.a.workflows.edit,search:"?workflow=".concat(r.id)})}},{title:T.formatMessage(Me.a.delete),component:"button",onClick:function(e,t,r){return D.push({pathname:H.a.workflows.remove,search:"?workflow=".concat(r.id)})}}]},titlePlural:T.formatMessage(I.approvalProcesses),titleSingular:T.formatMessage(I.approvalProcess),pagination:n,toolbarButtons:function(){return p.a.createElement(w.ToolbarGroup,{className:"pf-u-pl-lg top-toolbar"},p.a.createElement(v.ToolbarItem,null,p.a.createElement(g.b,{id:"add-workflow-link",to:{pathname:H.a.workflows.add}},p.a.createElement(b.Button,{variant:"primary","aria-label":T.formatMessage(re.a.create)},T.formatMessage(re.a.create)))),p.a.createElement(v.ToolbarItem,null,p.a.createElement(g.b,{id:"remove-multiple-workflows",className:C?"":"disabled-link",to:{pathname:H.a.workflows.remove}},p.a.createElement(b.Button,{variant:"secondary",isDisabled:!C,"aria-label":T.formatMessage(I.deleteApprovalTitle)},T.formatMessage(Me.a.delete)))))},filterValue:y,onFilterChange:x,isLoading:h||M,renderEmptyState:function(){return p.a.createElement(Qe.a,{title:""===y?T.formatMessage(I.noApprovalProcesses):T.formatMessage(He.a.noResultsFound),Icon:k.a,PrimaryAction:function(){return""!==y?p.a.createElement(b.Button,{onClick:function(){return x("")},variant:"link"},T.formatMessage(He.a.clearAllFilters)):null},description:""===y?T.formatMessage(I.noApprovalProcesses):T.formatMessage(He.a.clearAllFiltersDescription)})},activeFiltersConfig:{filters:nt(y,T),onDelete:function(){return x("")}}})))}}}]);
//# sourceMappingURL=../sourcemaps/workflows~5a4d8549.js.map