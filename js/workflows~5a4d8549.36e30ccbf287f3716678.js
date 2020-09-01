(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{724:function(e,t,r){"use strict";var a=(0,r(193).defineMessages)({createApprovalTitle:{id:"formMessages.createApprovalTitle",defaultMessage:"Create approval process"},generalInformation:{id:"formMessages.generalInformation",defaultMessage:"General information"},setGroups:{id:"formMessages.setGroups",defaultMessage:"Set groups"},enterInfo:{id:"formMessages.enterInfo",defaultMessage:"Enter your information"},approvalProcessName:{id:"formMessages.approvalProcessName",defaultMessage:"Name"},enterApprovalName:{id:"formMessages.enterApprovalName",defaultMessage:"Enter a name for the approval process"},description:{id:"formMessages.description",defaultMessage:"Description"},nameTaken:{id:"formMessages.nameTaken",defaultMessage:"Name has already been taken"},selectPlaceholder:{id:"formMessages.selectPlaceholder",defaultMessage:"Select..."},summary:{id:"formMessages.summary",defaultMessage:"Summary"},groups:{id:"formMessages.groups",defaultMessage:"Groups"},create:{id:"formMessages.create",defaultMessage:"Create"}});t.a=a},796:function(e,t,r){"use strict";r.r(t),r.d(t,"workflowsListState",(function(){return lt}));var a=r(196),s=r.n(a),n=r(87),o=r.n(n),c=r(108),l=r.n(c),i=r(10),u=r.n(i),f=r(0),p=r.n(f),d=r(107),m=r(16),g=r(66),w=r(203),v=r(202),b=r(194),y=r(667),k=r(670),h=r.n(k),M=r(298),O=r(283),E=r(76),P=r(14),j=r(99),S=r.n(j),D=r(153),T=r.n(D),A=r(198),F=r(195),x=r(89),C=Object(A.f)(),W=Object(A.e)();function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F.a,r=arguments.length>2?arguments[2]:void 0,a="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),s="&filter[name][contains_i]=".concat(e),n=r?"&sort_by=".concat(r.property,":").concat(r.direction):"";return Object(A.b)().get("".concat(x.a,"/workflows/?").concat(s).concat(a).concat(n))}var R=function(e){return C.showWorkflow(e)};function _(e){return N.apply(this,arguments)}function N(){return(N=T()(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return I.apply(this,arguments)}function I(){return(I=T()(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=T()(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=(0,r(193).defineMessages)({edit:{id:"worfklowMessages.edit",defaultMessage:"Edit"},editInformation:{id:"worfklowMessages.editInformation",defaultMessage:"Edit information"},deleteApprovalTitle:{id:"worfklowMessages.deleteApprovalTitle",defaultMessage:"Delete approval process"},approvalProcess:{id:"worfklowMessages.approvalProcess",defaultMessage:"approval process"},approvalProcesses:{id:"worfklowMessages.approvalProcesses",defaultMessage:"approval processes"},noApprovalProcesses:{id:"worfklowMessages.noApprovalProcesses",defaultMessage:"No approval processes"},sequence:{id:"workflowMessages.sequence",defaultMessage:"Sequence"},enterSequence:{id:"workflowMessages.enterSequence",defaultMessage:"Enter sequence"},removeProcessTitle:{id:"workflowMessages.removeProcessTitle",defaultMessage:"Delete {count, plural, one {approval process} other {approval processes}}?"},removeProcessAriaLabel:{id:"workflowMessages.removeProcessTitle",defaultMessage:"Delete {count, plural, one {approval process} other {approval processes}} modal"},removeProcessDescription:{id:"workflowMessages.removeProcessDescription",defaultMessage:"{name} will be removed."},removeProcessDescriptionWithDeps:{id:"workflowMessages.removeProcessDescriptionWithDeps",defaultMessage:"{name} will be removed from the following applications: {dependenciesList}"},editProcessTitle:{id:"workflowMessages.editProcessTitle",defaultMessage:"Make any changes to approval process {name}"},addProcessSuccessTitle:{id:"workflowMessages.addProcessSuccessTitle",defaultMessage:"Success adding approval process"},addProcessSuccessDescription:{id:"workflowMessages.addProcessSuccessDescription",defaultMessage:"The approval process was added successfully."},updateProcessSuccessTitle:{id:"workflowMessages.updateProcessSuccessTitle",defaultMessage:"Success updating approval process"},updateProcessSuccessDescription:{id:"workflowMessages.updateProcessSuccessDescription",defaultMessage:"The approval process was updated successfully."},removeProcessSuccessTitle:{id:"workflowMessages.removeProcessSuccessTitle",defaultMessage:"Success removing approval process"},removeProcessSuccessDescription:{id:"workflowMessages.removeProcessSuccessDescription",defaultMessage:"The approval process was removed successfully."},removeProcessesSuccessTitle:{id:"workflowMessages.removeProcessesSuccessTitle",defaultMessage:"Success removing approval processes"},removeProcessesSuccessDescription:{id:"workflowMessages.removeProcessesSuccessDescription",defaultMessage:"The selected approval processes were removed successfully."},up:{id:"workflowMessages.up",defaultMessage:"up"},down:{id:"workflowMessages.down",defaultMessage:"down"}}),B=function(e){return function(t,r){var a=r().workflowReducer,s=a.sortBy,n=a.workflows,o=a.filterValue,c=e;if(!e&&n){var l=n.meta;c={limit:l.limit,offset:l.offset}}return t({type:P.j,payload:q(o,c,s)})}},G=function(e,t){return{type:P.s,payload:(r=e,C.updateWorkflow(r.id,r)),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(L.updateProcessSuccessTitle),description:t.formatMessage(L.updateProcessSuccessDescription)}}}};var r},U=function(e){return{type:P.p,payload:e}},z=r(205),X=r.n(z),J=r(264),Q=r(669),H=r(742),K=r.n(H),Y=r(52),Z=r(731),$=r(720),ee=r.n($),te=r(727),re=r.n(te),ae=r(730),se=r(724),ne=Object(ae.a)((function(e,t,r){return function(e){return q(e)}(e).then((function(a){var s=a.data;if(t?s.find((function(r){return e===r.name&&t!==r.id})):s.find((function(t){return e===t.name})))throw r.formatMessage(se.a.nameTaken)}))})),oe=function(e,t){return[{component:ee.a.TEXT_FIELD,name:"name",isRequired:!0,id:"workflow-name",label:e.formatMessage(se.a.approvalProcessName),validate:[function(r){return ne(r,t,e)},{type:re.a.REQUIRED,message:e.formatMessage(se.a.enterApprovalName)}]},{component:ee.a.TEXTAREA,name:"description",id:"workflow-description",label:e.formatMessage(se.a.description)}]},ce=Object(ae.a)((function(e){var t="&name=".concat(e);return Object(A.b)().get("".concat(x.c,'/groups/?role_names=",Approval Administrator,Approval Approver,"\n  ').concat(e&&e.length>0?t:"")).then((function(e){var t=e.data;return t&&t.length>0?t.map((function(e){var t=e.uuid;return{label:e.name,value:t}})):void 0}))})),le=function(e){return{component:ee.a.SELECT,name:"group_refs",label:e.formatMessage(se.a.setGroups),loadOptions:ce,noValueUpdates:!0,isMulti:!0,isSearchable:!0,simpleValue:!1,menuIsPortal:!0,isClearable:!0,placeholder:e.formatMessage(se.a.selectPlaceholder)}},ie=function(e){return{component:ee.a.TEXT_FIELD,name:"sequence",label:e.formatMessage(L.enterSequence),isRequired:!0,validate:[{type:re.a.REQUIRED}]}},ue=function(e,t){return{fields:[].concat(l()(oe(e,t)),[le(e)],l()(t?[ie(e)]:[]))}};function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de=function(){var e=Object(d.useDispatch)(),t=Object(m.g)().push,r=Object(J.a)(),a=function(){return t(Y.a.workflows.index)};return p.a.createElement(Q.Modal,{isOpen:!0,onClose:a,title:r.formatMessage(se.a.createApprovalTitle),variant:"small"},p.a.createElement(Z.a,{onSubmit:function(a){var s=a.group_refs,n=void 0===s?[]:s,o=X()(a,["group_refs"]);return t(Y.a.workflows.index),e(function(e,t){return{type:P.a,payload:(r=e,W.listTemplates().then((function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id})).then((function(e){return C.addWorkflowToTemplate(e,r,{})}))),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(L.addProcessSuccessTitle),description:t.formatMessage(L.addProcessSuccessDescription)}}}};var r}(pe(pe({},o),{},{group_refs:n.length>0?n.map((function(e){return{name:e.label,uuid:e.value}})):[]}),r)).then((function(){return e(B())}))},onCancel:a,schema:ue(r),FormTemplate:function(e){return p.a.createElement(K.a,s()({},e,{buttonClassName:"pf-u-mt-0",disableSubmit:["validating","pristine"]}))}}))},me=r(8),ge=r.n(me),we=r(65),ve=r(106),be=r(710),ye=r(668),ke=r(709),he=r.n(ke),Me=r(723),Oe=function(e){var t=Object(d.useSelector)((function(e){return{workflows:e.workflowReducer.workflows}}),d.shallowEqual).workflows;return t&&t.data&&t.data.find((function(t){return t.id===e}))},Ee=r(90),Pe=r(722),je=r(755),Se=r.n(je),De=function(e){var t=e.ids,r=void 0===t?[]:t,a=e.fetchData,s=e.resetSelectedWorkflows,n=Object(d.useDispatch)(),c=Object(f.useState)(),i=o()(c,2),u=i[0],g=i[1],w=Object(f.useState)(!1),v=o()(w,2),y=v[0],k=v[1],h=Object(m.g)().push,M=Object(Me.a)(["workflow"]),O=o()(M,1)[0].workflow||1===r.length&&r[0],E=Object(J.a)(),j=Oe(O);if(Object(f.useEffect)((function(){var e;O&&!j&&n((e=O,{type:P.i,payload:R(e)})).then((function(e){var t=e.value;return g(t)})).catch((function(){return h(Y.a.workflows.index)}))}),[]),!O&&0===r.length)return null;var S=function(){return n(O?function(e,t){return{type:P.l,payload:_(e),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(L.removeProcessSuccessTitle),description:t.formatMessage(L.removeProcessSuccessDescription)}}}}}(O,E):function(e,t){return{type:P.m,payload:V(e),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(L.removeProcessesSuccessTitle),description:t.formatMessage(L.removeProcessesSuccessDescription)}}}}}(r,E)).catch((function(){return k(!1)})).then((function(){return h(Y.a.workflows.index)})).then((function(){return s()})).then((function(){return a()}))},D=function(){return h(Y.a.workflows.index)},T=function(){var e=j||u;return e&&!Se()(e)&&e.metadata&&e.metadata.object_dependencies&&!Se()(e.metadata.object_dependencies)?Object.keys(e.metadata.object_dependencies).reduce((function(e,t){return[].concat(l()(e),["".concat(x.b[t]||t)])}),[]):[]},A=p.a.createElement("b",{key:"remove-key"},O?u&&u.name||j&&j.name:p.a.createElement(p.a.Fragment,null,r.length," ",E.formatMessage(L.approvalProcesses))),F=O&&!j&&!u;return p.a.createElement(Q.Modal,{isOpen:!0,variant:"small","aria-label":E.formatMessage(L.removeProcessAriaLabel,{count:O?1:r.length}),header:p.a.createElement(ye.Title,{size:"2xl",headingLevel:"h1"},p.a.createElement(he.a,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),E.formatMessage(L.removeProcessTitle,{count:O?1:r.length})),onClose:D,actions:[p.a.createElement(b.Button,{id:"submit-remove-workflow",key:"submit",variant:"danger",type:"button",isDisabled:y,onClick:function(){return k(!0),S()}},y?p.a.createElement(p.a.Fragment,null,p.a.createElement(be.Spinner,{size:"sm",className:"pf-u-mr-md"}),E.formatMessage(Pe.a.deleting)):E.formatMessage(Pe.a.delete)),p.a.createElement(b.Button,{id:"cancel-remove-workflow",key:"cancel",variant:"link",type:"button",isDisabled:y,onClick:D},E.formatMessage(Pe.a.cancel))]},p.a.createElement(ve.TextContent,null,p.a.createElement(we.Text,{component:we.TextVariants.p},F?p.a.createElement(Ee.c,null):Se()(T())?E.formatMessage(L.removeProcessDescription,{name:A}):E.formatMessage(L.removeProcessDescriptionWithDeps,{name:A,dependenciesList:p.a.createElement("span",{key:"span",className:"pf-u-mt-lg span-block"},T().map((function(e){return p.a.createElement("li",{key:e},e)})))}))))};De.propTypes={fetchData:ge.a.func.isRequired,ids:ge.a.array,resetSelectedWorkflows:ge.a.func.isRequired};var Te=De,Ae=r(681),Fe=r(707),xe=r(708),Ce=r(199),We=r(201),qe=r(705),Re=r.n(qe),_e=r(706),Ne=r.n(_e),Ve=Object(f.createContext)({selectedWorkflows:[]}),Ie=function(e){var t=e.id,r=e.sequence,a=Object(f.useContext)(Ve).cache,s=Object(d.useDispatch)(),n=Object(J.a)(),o=Object(d.useSelector)((function(e){var t=e.workflowReducer,r=t.isUpdating,a=t.isLoading,s=t.sortBy;return{isUpdating:r>0||a,direction:s.direction,property:s.property}})),c=o.isUpdating,l=o.direction,i=o.property,u=function(e){var r;return s((r={id:t,sequence:e},{type:P.k,payload:r})),function(e,t){return e[t]||(e[t]=Object(ae.a)((function(e,t,r){return t(G(e,r)).then((function(){return t(B())}))}),1500)),e[t]}(a,t)({id:t,sequence:e},s,n)};return"sequence"!==i?null:p.a.createElement(Ce.Stack,null,p.a.createElement(We.StackItem,null,p.a.createElement(b.Button,{variant:"plain","aria-label":n.formatMessage(L.up),id:"up-".concat(t),onClick:function(){return u("asc"===l?r-1:r+1)},isDisabled:"asc"===l&&1===r||c},p.a.createElement(Re.a,null))),p.a.createElement(We.StackItem,null,p.a.createElement(b.Button,{variant:"plain","aria-label":n.formatMessage(L.down),id:"down-".concat(t),onClick:function(){return u("asc"===l?r+1:r-1)},isDisabled:"desc"===l&&1===r||c},p.a.createElement(Ne.a,null))))};Ie.propTypes={id:ge.a.string.isRequired,sequence:ge.a.number.isRequired};var Le=function(e){var t=e.group_refs,r=e.id;return p.a.createElement(Fe.Flex,{key:r,className:"pf-u-mt-sm"},t.map((function(e){var t=e.name,r=e.uuid;return p.a.createElement(xe.FlexItem,{key:r},p.a.createElement(Ae.Label,{className:"group-label pf-u-mb-sm"},t))})))};Le.propTypes={id:ge.a.string,group_refs:ge.a.arrayOf(ge.a.shape({name:ge.a.string.isRequired,uuid:ge.a.string.isRequired}))};var Be=function(e){var t=e.id,r=Object(f.useContext)(Ve),a=r.selectedWorkflows,s=r.setSelectedWorkflows;return p.a.createElement(y.Checkbox,{id:"select-".concat(t),isChecked:a.includes(t),onChange:function(){return s(t)}})};Be.propTypes={id:ge.a.string.isRequired};var Ge=function(e){return e.map((function(e){var t=e.id,r=e.name,a=e.description,s=e.sequence,n=e.group_refs;return{id:t,cells:[p.a.createElement(p.a.Fragment,{key:"".concat(t,"-buttons")},p.a.createElement(Ie,{id:t,sequence:s})),p.a.createElement(p.a.Fragment,{key:"".concat(t,"-checkbox")},p.a.createElement(Be,{id:t})),s,r,a,p.a.createElement(p.a.Fragment,{key:t},p.a.createElement(Le,{key:t,group_refs:n,id:t}))]}}))},Ue=r(756),ze=r(149),Xe=r(745),Je=r(38),Qe=r(760),He=r(737);function Ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ze=function(e,t){var r=t.type,a=t.initialValues,s=t.schema;switch(r){case"loaded":return Ye(Ye({},e),{},{initialValues:a,schema:s,isLoading:!1});default:return e}},$e=function(e){var t=e.group_refs.map((function(e){return{label:e.name,value:e.uuid}}));return Ye(Ye({},e),{},{group_refs:t})},et=function(){var e=Object(d.useDispatch)(),t=Object(m.g)().push,r=Object(J.a)(),a=Object(Me.a)(["workflow"]),n=o()(a,1)[0].workflow,c=Oe(n),l=Object(f.useReducer)(Ze,{isLoading:!0}),i=o()(l,2),u=i[0],g=u.initialValues,w=u.schema,v=u.isLoading,b=i[1];Object(f.useEffect)((function(){c?b({type:"loaded",initialValues:$e(c),schema:ue(r,c.id)}):R(n).then((function(e){return b({type:"loaded",initialValues:$e(e),schema:ue(r,e.id)})}))}),[]);var y=function(){return t(Y.a.workflows.index)};return p.a.createElement(Q.Modal,{isOpen:!0,onClose:y,title:r.formatMessage(L.editInformation),description:!v&&r.formatMessage(L.editProcessTitle,{name:g.name}),variant:"small"},v&&p.a.createElement(Ee.f,null),!v&&p.a.createElement(Z.a,{onSubmit:function(t){var a=t.group_refs,s=void 0===a?[]:a,n=X()(t,["group_refs"]);y();var o=Ye(Ye({},n),{},{group_refs:s.map((function(e){return{name:e.label,uuid:e.value}}))});return e(G(o,r)).then((function(){return e(B())}))},onCancel:y,schema:w,initialValues:g,FormTemplate:function(e){return p.a.createElement(K.a,s()({},e,{submitLabel:r.formatMessage(Pe.a.save),buttonClassName:"pf-u-mt-0",disableSubmit:["validating","pristine"]}))}}))};function tt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function rt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?tt(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var at=function(e,t,r){return[{title:"",transforms:[Object(M.a)(1)]},{title:p.a.createElement(y.Checkbox,{onChange:r,isChecked:t,id:"select-all"}),transforms:[Object(M.a)(1)]},{title:e.formatMessage(L.sequence),transforms:[O.a,E.e]},{title:e.formatMessage(He.a.name),transforms:[O.a]},{title:e.formatMessage(se.a.description),transforms:[O.a,Object(M.a)(35)],cellTransforms:[E.d]},{title:e.formatMessage(se.a.groups)}]},st=Object(ae.a)((function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:F.a;return r(!0),t(U(e)),t(B(a)).then((function(){return r(!1)}))}),1e3),nt=function(e,t){return e?[{category:t.formatMessage(He.a.name),key:"name",chips:[{name:e,value:e}]}]:[]},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){return t.includes(e.id)}))},ct=function(e,t,r){return r.indexOf(e)===t},lt=function(e,t){switch(t.type){case"setRows":return rt(rt({},e),{},{rows:t.payload,selectedAll:ot(t.payload,e.selectedWorkflows)});case"setFetching":return rt(rt({},e),{},{isFetching:t.payload});case"setFilterValue":return rt(rt({},e),{},{filterValue:t.payload});case"select":return rt(rt({},e),{},{selectedAll:!1,selectedWorkflows:e.selectedWorkflows.includes(t.payload)?e.selectedWorkflows.filter((function(e){return e!==t.payload})):[].concat(l()(e.selectedWorkflows),[t.payload])});case"selectAll":return rt(rt({},e),{},{selectedWorkflows:[].concat(l()(e.selectedWorkflows),l()(t.payload)).filter(ct),selectedAll:!0});case"unselectAll":return rt(rt({},e),{},{selectedWorkflows:e.selectedWorkflows.filter((function(e){return!t.payload.includes(e)})),selectedAll:!1});case"resetSelected":return rt(rt({},e),{},{selectedWorkflows:[],selectedAll:!1});case"setFilteringFlag":return rt(rt({},e),{},{isFiltering:t.payload});default:return e}};t.default=function(){var e=Object(f.useRef)({}),t=Object(d.useSelector)((function(e){var t=e.workflowReducer;return{workflows:t.workflows,sortBy:t.sortBy,filterValueRedux:t.filterValue}}),d.shallowEqual),r=t.workflows,a=r.data,n=r.meta,c=t.sortBy,l=t.filterValueRedux,i=Object(f.useReducer)(lt,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{filterValue:e,isFetching:!0,isFiltering:!1,selectedWorkflows:[],selectedAll:!1,rows:[]}}(l)),u=o()(i,2),y=u[0],k=y.filterValue,M=y.isFetching,O=y.isFiltering,E=y.selectedWorkflows,j=y.selectedAll,S=y.rows,D=u[1],T=Object(d.useDispatch)(),A=Object(m.g)(),x=Object(J.a)(),C=function(e){return D({type:"setFetching",payload:!0}),T(B(e)).then((function(){return D({type:"setFetching",payload:!1})})).catch((function(){return D({type:"setFetching",payload:!1})}))};Object(f.useEffect)((function(){C(F.a),Object(Je.g)()}),[]),Object(f.useEffect)((function(){D({type:"setRows",payload:Ge(a)})}),[a]);var W=function(e){D({type:"setFilterValue",payload:e}),st(e,T,(function(e){return D({type:"setFilteringFlag",payload:e})}),rt(rt({},n),{},{offset:0}))},q=E.length>0;return p.a.createElement(f.Fragment,null,p.a.createElement(ze.a,null,p.a.createElement(ze.b,{title:x.formatMessage(Pe.a.approvalTitle)}),p.a.createElement(Xe.a,null)),p.a.createElement(Ve.Provider,{value:{selectedWorkflows:E,setSelectedWorkflows:function(e){return D({type:"select",payload:e})},cache:e.current}},p.a.createElement(Ue.a,{sortBy:c,onSort:function(e,t,r,a){var s=a.property;return T(function(e){return{type:P.r,payload:e}}({index:t,direction:r,property:s})),C()},rows:S,columns:at(x,j,(function(){return D(j?{type:"unselectAll",payload:a.map((function(e){return e.id}))}:{type:"selectAll",payload:a.map((function(e){return e.id}))})})),fetchData:C,routes:function(){return p.a.createElement(f.Fragment,null,p.a.createElement(m.b,{exact:!0,path:Y.a.workflows.add,render:function(e){return p.a.createElement(de,s()({},e,{postMethod:C}))}}),p.a.createElement(m.b,{exact:!0,path:Y.a.workflows.edit,component:et}),p.a.createElement(m.b,{exact:!0,path:Y.a.workflows.remove,render:function(e){return p.a.createElement(Te,s()({},e,{ids:E,fetchData:C,resetSelectedWorkflows:function(){return D({type:"resetSelected"})}}))}}))},actionResolver:function(){return[{title:x.formatMessage(L.edit),component:"button",onClick:function(e,t,r){return A.push({pathname:Y.a.workflows.edit,search:"?workflow=".concat(r.id)})}},{title:x.formatMessage(Pe.a.delete),component:"button",onClick:function(e,t,r){return A.push({pathname:Y.a.workflows.remove,search:"?workflow=".concat(r.id)})}}]},titlePlural:x.formatMessage(L.approvalProcesses),titleSingular:x.formatMessage(L.approvalProcess),pagination:n,toolbarButtons:function(){return p.a.createElement(w.ToolbarGroup,{className:"pf-u-pl-lg top-toolbar"},p.a.createElement(v.ToolbarItem,null,p.a.createElement(g.b,{id:"add-workflow-link",to:{pathname:Y.a.workflows.add}},p.a.createElement(b.Button,{variant:"primary","aria-label":x.formatMessage(se.a.create)},x.formatMessage(se.a.create)))),p.a.createElement(v.ToolbarItem,null,p.a.createElement(g.b,{id:"remove-multiple-workflows",className:q?"":"disabled-link",to:{pathname:Y.a.workflows.remove}},p.a.createElement(b.Button,{variant:"secondary",isDisabled:!q,"aria-label":x.formatMessage(L.deleteApprovalTitle)},x.formatMessage(Pe.a.delete)))))},filterValue:k,onFilterChange:W,isLoading:M||O,renderEmptyState:function(){return p.a.createElement(Qe.a,{title:""===k?x.formatMessage(L.noApprovalProcesses):x.formatMessage(He.a.noResultsFound),Icon:h.a,PrimaryAction:function(){return""!==k?p.a.createElement(b.Button,{onClick:function(){return W("")},variant:"link"},x.formatMessage(He.a.clearAllFilters)):null},description:""===k?x.formatMessage(L.noApprovalProcesses):x.formatMessage(He.a.clearAllFiltersDescription)})},activeFiltersConfig:{filters:nt(k,x),onDelete:function(){return W("")}}})))}}}]);
//# sourceMappingURL=../sourcemaps/workflows~5a4d8549.js.map