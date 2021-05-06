(self.webpackChunkapproval=self.webpackChunkapproval||[]).push([[893],{40729:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Ke,workflowsListState:()=>Qe});var n=r(22122),s=r(28481),o=r(85061),a=r(96156),c=r(30624),i=r.n(c),l=r(58126),u=r(334),f=r(32895),p=r(59505),d=r(6202),m=r(32752),g=r(20777),w=r(71070),v=r(66543),y=r(36580),h=r(92137),k=r(87757),b=r.n(k),P=r(96692),M=r(61338),O=r(84866),E=(0,P.xZ)(),Z=(0,P.VZ)();function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M.he,r="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),n="&filter[name][contains_i]=".concat(e);return(0,P.Hx)().get("".concat(O._R,"/workflows/?").concat(n).concat(r))}var D=function(e){return E.showWorkflow(e)};function j(e){return T.apply(this,arguments)}function T(){return(T=(0,h.Z)(b().mark((function e(t){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return F.apply(this,arguments)}function F(){return(F=(0,h.Z)(b().mark((function e(t){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=(0,h.Z)(b().mark((function e(t){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.destroyWorkflow(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const x=(0,r(86244).defineMessages)({edit:{id:"worfklowMessages.edit",defaultMessage:"Edit"},editInformation:{id:"worfklowMessages.editInformation",defaultMessage:"Edit information"},deleteApprovalTitle:{id:"worfklowMessages.deleteApprovalTitle",defaultMessage:"Delete approval process"},approvalProcess:{id:"worfklowMessages.approvalProcess",defaultMessage:"approval process"},approvalProcesses:{id:"worfklowMessages.approvalProcesses",defaultMessage:"approval processes"},noApprovalProcesses:{id:"worfklowMessages.noApprovalProcesses",defaultMessage:"No approval processes"},createApprovalProcess:{id:"worfklowMessages.createApprovalProcess",defaultMessage:"Create approval process"},sequence:{id:"workflowMessages.sequence",defaultMessage:"Sequence"},enterSequence:{id:"workflowMessages.enterSequence",defaultMessage:"Enter sequence"},removeProcessTitle:{id:"workflowMessages.removeProcessTitle",defaultMessage:"Delete {count, plural, one {approval process} other {approval processes}}?"},removeProcessAriaLabel:{id:"workflowMessages.removeProcessTitle",defaultMessage:"Delete {count, plural, one {approval process} other {approval processes}} modal"},removeProcessDescription:{id:"workflowMessages.removeProcessDescription",defaultMessage:"{name} will be removed."},removeProcessDescriptionWithDeps:{id:"workflowMessages.removeProcessDescriptionWithDeps",defaultMessage:"{name} will be removed from the following applications: {dependenciesList}"},editProcessTitle:{id:"workflowMessages.editProcessTitle",defaultMessage:"Make any changes to approval process {name}"},addProcessSuccessTitle:{id:"workflowMessages.addProcessSuccessTitle",defaultMessage:"Success adding approval process"},addProcessSuccessDescription:{id:"workflowMessages.addProcessSuccessDescription",defaultMessage:"The approval process was added successfully."},updateProcessSuccessTitle:{id:"workflowMessages.updateProcessSuccessTitle",defaultMessage:"Success updating approval process"},updateProcessSuccessDescription:{id:"workflowMessages.updateProcessSuccessDescription",defaultMessage:"The approval process was updated successfully."},repositionProcessSuccessTitle:{id:"workflowMessages.repositionProcessSuccessTitle",defaultMessage:"Success updating approval process sequence"},repositionProcessSuccessDescription:{id:"workflowMessages.repositionProcessSuccessDescription",defaultMessage:"The approval process' sequence was updated successfully."},removeProcessSuccessTitle:{id:"workflowMessages.removeProcessSuccessTitle",defaultMessage:"Success removing approval process"},removeProcessSuccessDescription:{id:"workflowMessages.removeProcessSuccessDescription",defaultMessage:"The approval process was removed successfully."},removeProcessesSuccessTitle:{id:"workflowMessages.removeProcessesSuccessTitle",defaultMessage:"Success removing approval processes"},removeProcessesSuccessDescription:{id:"workflowMessages.removeProcessesSuccessDescription",defaultMessage:"The selected approval processes were removed successfully."},up:{id:"workflowMessages.up",defaultMessage:"up"},down:{id:"workflowMessages.down",defaultMessage:"down"}});var W=function(e){return function(t,r){var n=r().workflowReducer,s=n.workflows,o=n.filterValue,a=e;if(!e&&s){var c=s.meta;a={limit:c.limit,offset:c.offset}}return t({type:y.DI,payload:S(o,a)})}},_=function(e){return{type:y.dp,payload:e}},C=r(81253),R=r(86896),q=r(78826),V=r(26196),L=r(50409),I=r(18393),N=r(46182),B=r(94330),H=r(57666),U=r(87388);const X=(0,H.Z)((function(e,t,r){return function(e){return S(e)}(e).then((function(n){var s=n.data;if(t?s.find((function(r){return e===r.name&&t!==r.id})):s.find((function(t){return e===t.name})))throw r.formatMessage(U.Z.nameTaken)}))})),z=function(e,t){return[{component:N.default.TEXT_FIELD,name:"name",isRequired:!0,id:"workflow-name",label:e.formatMessage(U.Z.approvalProcessName),validate:[function(r){return X(r,t,e)},{type:B.default.REQUIRED,message:e.formatMessage(U.Z.enterApprovalName)}]},{component:N.default.TEXTAREA,name:"description",id:"workflow-description",label:e.formatMessage(U.Z.description)}]},J=(0,H.Z)((function(e){var t="&name=".concat(e);return(0,P.Hx)().get("".concat(O.OJ,'/groups/?role_names=",Approval Administrator,Approval Approver,"\n  ').concat(e&&e.length>0?t:"")).then((function(e){var t=e.data;return t&&t.length>0?t.map((function(e){var t=e.uuid;return{label:e.name,value:t}})):void 0}))}));function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=function(e,t,r){var n=r.getState().values.current_groups||[];return{key:n.length,loadOptions:function(){return e.loadOptions.apply(e,arguments).then((function(e){return e.map((function(e){return Q(Q({},e),n.find((function(t){return t.value===e.value}))?{isDisabled:!0}:{})}))}))}}};const $=function(e){return{component:N.default.SELECT,name:"group_refs",label:e.formatMessage(U.Z.setGroups),loadOptions:J,initialValue:[],clearedValue:[],noValueUpdates:!0,isMulti:!0,isSearchable:!0,simpleValue:!1,menuIsPortal:!0,isClearable:!0,placeholder:e.formatMessage(U.Z.selectPlaceholder),resolveProps:K}},Y=function(e){return{component:"initial-chips",name:"current_groups",label:e.formatMessage(U.Z.existingGroupsMessage),initialValues:[]}},ee=function(e,t){return{fields:[].concat((0,o.Z)(z(e,t)),[$(e),Y(e)])}};function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const ne=function(){var e=(0,l.useDispatch)(),t=(0,u.useHistory)().push,r=(0,R.Z)(),s=function(){return t(L.Z.workflows.index)};return i().createElement(q.u_,{isOpen:!0,onClose:s,title:r.formatMessage(U.Z.createApprovalTitle),variant:"small"},i().createElement(I.Z,{onSubmit:function(n){var s=n.group_refs,o=void 0===s?[]:s,a=(0,C.Z)(n,["group_refs"]);return t(L.Z.workflows.index),e(function(e,t){return{type:y.hu,payload:(r=e,Z.listTemplates().then((function(e){var t=e.data;if(!t[0])throw new Error("No template exists");return t[0].id})).then((function(e){return E.addWorkflowToTemplate(e,r,{})}))),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(x.addProcessSuccessTitle),description:t.formatMessage(x.addProcessSuccessDescription)}}}};var r}(re(re({},a),{},{group_refs:o.length>0?o.map((function(e){return{name:e.label,uuid:e.value}})):[]}),r)).then((function(){return e(W())}))},onCancel:s,schema:ee(r),FormTemplate:function(e){return i().createElement(V.ZP,(0,n.Z)({},e,{buttonClassName:"pf-u-mt-0",disableSubmit:["validating","pristine"]}))}}))};var se=r(45697),oe=r.n(se),ae=r(63540),ce=r(20018),ie=r(67463),le=r(34348),ue=r(19694),fe=r(1054);const pe=function(e){var t=(0,l.useSelector)((function(e){return{workflows:e.workflowReducer.workflows}}),l.shallowEqual).workflows;return t&&t.data&&t.data.find((function(t){return t.id===e}))};var de=r(19571),me=r(7248),ge=r(41609),we=r.n(ge);function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he=function(e){var t=e.ids,r=void 0===t?[]:t,n=e.fetchData,a=e.pagination,f=void 0===a?M.he:a,p=e.resetSelectedWorkflows,m=(0,l.useDispatch)(),g=(0,c.useState)(),w=(0,s.Z)(g,2),v=w[0],h=w[1],k=(0,c.useState)(!1),b=(0,s.Z)(k,2),P=b[0],E=b[1],Z=(0,u.useHistory)().push,S=(0,fe.Z)(["workflow"]),T=(0,s.Z)(S,1)[0].workflow||1===r.length&&r[0],F=(0,R.Z)(),W=pe(T);if((0,c.useEffect)((function(){var e;T&&!W&&m((e=T,{type:y.Cb,payload:D(e)})).then((function(e){var t=e.value;return h(t)})).catch((function(){return Z(L.Z.workflows.index)}))}),[]),!T&&0===r.length)return null;var _=function(){return Z(L.Z.workflows.index)},C=function(){var e=W||v;return e&&!we()(e)&&e.metadata&&e.metadata.object_dependencies&&!we()(e.metadata.object_dependencies)?Object.keys(e.metadata.object_dependencies).reduce((function(e,t){return[].concat((0,o.Z)(e),["".concat(O.Fe[t]||t)])}),[]):[]},V=i().createElement("b",{key:"remove-key"},T?v&&v.name||W&&W.name:i().createElement(i().Fragment,null,r.length," ",F.formatMessage(x.approvalProcesses))),I=T&&!W&&!v;return i().createElement(q.u_,{isOpen:!0,variant:"small","aria-label":F.formatMessage(x.removeProcessAriaLabel,{count:T?1:r.length}),header:i().createElement(le.Title,{size:"2xl",headingLevel:"h1"},i().createElement(ue.default,{size:"sm",fill:"#f0ab00",className:"pf-u-mr-sm"}),F.formatMessage(x.removeProcessTitle,{count:T?1:r.length})),onClose:_,actions:[i().createElement(d.Button,{id:"submit-remove-workflow",ouiaId:"submit-remove-workflow",key:"submit",variant:"danger",type:"button",isDisabled:P,onClick:function(){return E(!0),m(T?function(e,t){return{type:y.J4,payload:j(e),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(x.removeProcessSuccessTitle),description:t.formatMessage(x.removeProcessSuccessDescription)}}}}}(T,F):function(e,t){return{type:y.qi,payload:A(e),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(x.removeProcessesSuccessTitle),description:t.formatMessage(x.removeProcessesSuccessDescription)}}}}}(r,F)).catch((function(){return E(!1)})).then((function(){return Z(L.Z.workflows.index)})).then((function(){return p()})).then((function(){return n(ye(ye({},f),{},{offset:(0,M.Vq)(f,T?1:r.length)}))}))}},P?i().createElement(i().Fragment,null,i().createElement(ie.Spinner,{size:"sm",className:"pf-u-mr-md"}),F.formatMessage(me.Z.deleting)):F.formatMessage(me.Z.delete)),i().createElement(d.Button,{id:"cancel-remove-workflow",ouiaId:"cancel-remove-workflow",key:"cancel",variant:"link",type:"button",isDisabled:P,onClick:_},F.formatMessage(me.Z.cancel))]},i().createElement(ce.TextContent,null,i().createElement(ae.Text,{component:ae.TextVariants.p},I?i().createElement(de.Z0,null):we()(C())?F.formatMessage(x.removeProcessDescription,{name:V}):F.formatMessage(x.removeProcessDescriptionWithDeps,{name:V,dependenciesList:i().createElement("span",{key:"span",className:"pf-u-mt-lg span-block"},C().map((function(e){return i().createElement("li",{key:e},e)})))}))))};he.propTypes={fetchData:oe().func.isRequired,ids:oe().array,resetSelectedWorkflows:oe().func.isRequired,pagination:oe().shape({limit:oe().number,offset:oe().number,count:oe().number})};const ke=he;var be=r(23218),Pe=r(36001),Me=r(42057),Oe=r(81159),Ee=r(34023),Ze=r(14132),Se=r(81875);const De=(0,c.createContext)({selectedWorkflows:[]});var je=function(e){var t=e.id,r=(0,c.useContext)(De).cache,n=(0,l.useDispatch)(),s=(0,R.Z)(),o=(0,l.useSelector)((function(e){var t=e.workflowReducer,r=t.isUpdating,n=t.isLoading;return{isUpdating:r>0||n,property:u}})),a=o.isUpdating,u=o.property,f=function(e){var o;return n((o={id:t,sequence:e},{type:y.vd,payload:o})),function(e,t){return e[t]||(e[t]=(0,H.Z)((function(e,t,r){return t(function(e,t){return{type:y.gJ,payload:(r=e,E.reposition(r.id,r.sequence)),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(x.repositionProcessSuccessTitle),description:t.formatMessage(x.repositionProcessSuccessDescription)}}}};var r}(e,r)).then((function(){return t(W())}))}),1500)),e[t]}(r,t)({id:t,sequence:e},n,s)};return i().createElement(Oe.K,null,i().createElement(Ee.v,null,i().createElement(d.Button,{ouiaId:"up-".concat(t),variant:"plain","aria-label":s.formatMessage(x.up),id:"up-".concat(t),onClick:function(){return f({increment:-1})},isDisabled:a},i().createElement(Ze.ZP,null))),i().createElement(Ee.v,null,i().createElement(d.Button,{variant:"plain","aria-label":s.formatMessage(x.down),id:"down-".concat(t),onClick:function(){return f({increment:1})},isDisabled:a,ouiaId:"down-".concat(t)},i().createElement(Se.ZP,null))))};je.propTypes={id:oe().string.isRequired};var Te=function(e){var t=e.group_refs,r=e.id;return i().createElement(Pe.k,{key:r,className:"pf-u-mt-sm"},t.map((function(e){var t=e.name,r=e.uuid;return i().createElement(Me.B,{key:r},i().createElement(be._,{className:"group-label pf-u-mb-sm"},t))})))};Te.propTypes={id:oe().string,group_refs:oe().arrayOf(oe().shape({name:oe().string.isRequired,uuid:oe().string.isRequired}))};var Ae=function(e){var t=e.id,r=(0,c.useContext)(De),n=r.selectedWorkflows,s=r.setSelectedWorkflows;return i().createElement(m.X,{id:"select-".concat(t),isChecked:n.includes(t),onChange:function(){return s(t)}})};Ae.propTypes={id:oe().string.isRequired};var Fe=function(e){return e.map((function(e){var t=e.id,r=e.name,n=e.description,s=e.sequence,o=e.group_refs;return{id:t,cells:[i().createElement(i().Fragment,{key:"".concat(t,"-buttons")},i().createElement(je,{id:t,ouiaId:"".concat(t,"-buttons"),sequence:s})),i().createElement(i().Fragment,{key:"".concat(t,"-checkbox")},i().createElement(Ae,{id:t})),r,n,i().createElement(i().Fragment,{key:t},i().createElement(Te,{key:t,group_refs:o,id:t}))]}}))},xe=r(30060),We=r(39553),_e=r(12824),Ce=r(51403),Re=r(31004);function qe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Le=function(e,t){var r=t.type,n=t.initialValues,s=t.schema;switch(r){case"loaded":return Ve(Ve({},e),{},{initialValues:n,schema:s,isLoading:!1});default:return e}},Ie=function(e){var t=e.group_refs.map((function(e){return{label:e.name,value:e.uuid}}));return Ve(Ve({},e),{},{group_refs:[],current_groups:t})};const Ne=function(){var e=(0,l.useDispatch)(),t=(0,u.useHistory)().push,r=(0,R.Z)(),o=(0,fe.Z)(["workflow"]),a=(0,s.Z)(o,1)[0].workflow,f=pe(a),p=(0,c.useReducer)(Le,{isLoading:!0}),d=(0,s.Z)(p,2),m=d[0],g=m.initialValues,w=m.schema,v=m.isLoading,h=d[1];(0,c.useEffect)((function(){f?h({type:"loaded",initialValues:Ie(f),schema:ee(r,f.id)}):D(a).then((function(e){return h({type:"loaded",initialValues:Ie(e),schema:ee(r,e.id)})}))}),[]);var k=function(){return t(L.Z.workflows.index)};return i().createElement(q.u_,{isOpen:!0,onClose:k,title:r.formatMessage(x.editInformation),description:!v&&r.formatMessage(x.editProcessTitle,{name:g.name}),variant:"small"},v&&i().createElement(de.q3,null),!v&&i().createElement(I.Z,{onSubmit:function(t){var n=t.group_refs,s=void 0===n?[]:n,o=t.description,a=void 0===o?"":o,c=(0,C.Z)(t,["group_refs","description"]);k();var i=c.current_groups?c.current_groups.concat(null==s?void 0:s.filter((function(e){return c.current_groups.indexOf(e)<0}))):s,l=Ve(Ve({},c),{},{description:a,group_refs:i.map((function(e){return{name:e.label,uuid:e.value}}))});return delete l.current_groups,e(function(e,t){return{type:y.$O,payload:(r=e,E.updateWorkflow(r.id,r)),meta:{notifications:{fulfilled:{variant:"success",title:t.formatMessage(x.updateProcessSuccessTitle),description:t.formatMessage(x.updateProcessSuccessDescription)}}}};var r}(l,r)).then((function(){return e(W())}))},onCancel:k,schema:w,initialValues:g,FormTemplate:function(e){return i().createElement(V.ZP,(0,n.Z)({},e,{submitLabel:r.formatMessage(me.Z.save),buttonClassName:"pf-u-mt-0",disableSubmit:["validating","pristine"]}))}}))};function Be(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function He(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Be(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Be(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ue=function(e,t,r){return[{title:"",transforms:[(0,v.cellWidth)(1)]},{title:i().createElement(m.X,{onChange:r,isChecked:t,id:"select-all"}),transforms:[(0,v.cellWidth)(1)]},{title:e.formatMessage(Re.Z.name)},{title:e.formatMessage(U.Z.description),transforms:[(0,v.cellWidth)(35)],cellTransforms:[v.truncate]},{title:e.formatMessage(U.Z.groups)}]},Xe=(0,H.Z)((function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:M.he;return r(!0),t(_(e)),t(W(n)).then((function(){return r(!1)}))}),1e3),ze=function(e,t){return e?[{category:t.formatMessage(Re.Z.name),key:"name",chips:[{name:e,value:e}]}]:[]},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.every((function(e){return t.includes(e.id)}))},Ge=function(e,t,r){return r.indexOf(e)===t},Qe=function(e,t){switch(t.type){case"setRows":return He(He({},e),{},{rows:t.payload,selectedAll:Je(t.payload,e.selectedWorkflows)});case"setFetching":return He(He({},e),{},{isFetching:t.payload});case"setFilterValue":return He(He({},e),{},{filterValue:t.payload});case"select":return He(He({},e),{},{selectedAll:!1,selectedWorkflows:e.selectedWorkflows.includes(t.payload)?e.selectedWorkflows.filter((function(e){return e!==t.payload})):[].concat((0,o.Z)(e.selectedWorkflows),[t.payload])});case"selectAll":return He(He({},e),{},{selectedWorkflows:[].concat((0,o.Z)(e.selectedWorkflows),(0,o.Z)(t.payload)).filter(Ge),selectedAll:!0});case"unselectAll":return He(He({},e),{},{selectedWorkflows:e.selectedWorkflows.filter((function(e){return!t.payload.includes(e)})),selectedAll:!1});case"resetSelected":return He(He({},e),{},{selectedWorkflows:[],selectedAll:!1});case"setFilteringFlag":return He(He({},e),{},{isFiltering:t.payload});case"clearFilters":return He(He({},e),{},{filterValue:"",isFetching:!0});default:return e}};const Ke=function(){var e=(0,c.useRef)({}),t=(0,l.useSelector)((function(e){var t=e.workflowReducer;return{workflows:t.workflows,filterValueRedux:t.filterValue}}),l.shallowEqual),r=t.workflows,o=r.data,a=r.meta,m=t.filterValueRedux,v=(0,c.useReducer)(Qe,function(){return{filterValue:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",isFetching:!0,isFiltering:!1,selectedWorkflows:[],selectedAll:!1,rows:[]}}(m)),h=(0,s.Z)(v,2),k=h[0],b=k.filterValue,P=k.isFetching,O=k.isFiltering,E=k.selectedWorkflows,Z=k.selectedAll,S=k.rows,D=h[1],j=(0,l.useDispatch)(),T=(0,u.useHistory)(),A=(0,R.Z)(),F=function(e){return D({type:"setFetching",payload:!0}),j(W(e)).then((function(){return D({type:"setFetching",payload:!1})})).catch((function(){return D({type:"setFetching",payload:!1})}))};(0,c.useEffect)((function(){F(M.he)}),[]),(0,c.useEffect)((function(){D({type:"setRows",payload:Fe(o)})}),[o]);var _=function(){return D({type:"clearFilters"}),j({type:y.fB}),F(a)},C=function(e){e&&""!==e?D({type:"setFilterValue",payload:e}):_(),Xe(e,j,(function(e){return D({type:"setFilteringFlag",payload:e})}),He(He({},a),{},{offset:0}))},q=E.length>0;return i().createElement(c.Fragment,null,i().createElement(We.Q,null,i().createElement(We.y,{title:A.formatMessage(me.Z.approvalTitle)}),i().createElement(_e.H,null)),i().createElement(De.Provider,{value:{selectedWorkflows:E,setSelectedWorkflows:function(e){return D({type:"select",payload:e})},cache:e.current}},i().createElement(xe.M,{ouiaId:"approval-process-table",rows:S,columns:Ue(A,Z,(function(){return D(Z?{type:"unselectAll",payload:o.map((function(e){return e.id}))}:{type:"selectAll",payload:o.map((function(e){return e.id}))})})),fetchData:F,routes:function(){return i().createElement(c.Fragment,null,i().createElement(u.Route,{exact:!0,path:L.Z.workflows.add,render:function(e){return i().createElement(ne,(0,n.Z)({},e,{postMethod:F}))}}),i().createElement(u.Route,{exact:!0,path:L.Z.workflows.edit,component:Ne}),i().createElement(u.Route,{exact:!0,path:L.Z.workflows.remove,render:function(e){return i().createElement(ke,(0,n.Z)({},e,{ids:E,fetchData:F,pagination:a,resetSelectedWorkflows:function(){return D({type:"resetSelected"})}}))}}))},actionResolver:function(){return[{title:A.formatMessage(x.edit),component:"button",onClick:function(e,t,r){return T.push({pathname:L.Z.workflows.edit,search:"?workflow=".concat(r.id)})}},{title:A.formatMessage(me.Z.delete),component:"button",onClick:function(e,t,r){return T.push({pathname:L.Z.workflows.remove,search:"?workflow=".concat(r.id)})}}]},titlePlural:A.formatMessage(x.approvalProcesses),titleSingular:A.formatMessage(x.approvalProcess),pagination:a,toolbarButtons:function(){return i().createElement(f.ki,{className:"pf-u-pl-lg top-toolbar"},i().createElement(p.Eg,null,i().createElement(u.Link,{id:"add-workflow-link",to:{pathname:L.Z.workflows.add}},i().createElement(d.Button,{ouiaId:"add-workflow-link",variant:"primary","aria-label":A.formatMessage(U.Z.create)},A.formatMessage(U.Z.create)))),i().createElement(p.Eg,null,i().createElement(u.Link,{id:"remove-multiple-workflows",className:q?"":"disabled-link",to:{pathname:L.Z.workflows.remove}},i().createElement(d.Button,{variant:"secondary",isDisabled:!q,"aria-label":A.formatMessage(x.deleteApprovalTitle)},A.formatMessage(me.Z.delete)))))},filterValue:b,onFilterChange:C,isLoading:P||O,renderEmptyState:function(){return i().createElement(Ce.Z,{title:""===b?A.formatMessage(x.noApprovalProcesses):A.formatMessage(Re.Z.noResultsFound),icon:we()(b)?g.ZP:w.ZP,PrimaryAction:function(){return""!==b?i().createElement(d.Button,{onClick:function(){return _()},variant:"link"},A.formatMessage(Re.Z.clearAllFilters)):i().createElement(u.Link,{id:"create-workflow-link",to:{pathname:L.Z.workflows.add}},i().createElement(d.Button,{ouiaId:"create-workflow-link",variant:"primary","aria-label":A.formatMessage(x.createApprovalProcess)},A.formatMessage(x.createApprovalProcess)))},description:""===b?A.formatMessage(x.noApprovalProcesses):A.formatMessage(Re.Z.clearAllFiltersDescription),isSearch:!we()(b)})},activeFiltersConfig:{filters:ze(b,A),onDelete:function(){return C("")}}})))}}}]);
//# sourceMappingURL=../sourcemaps/workflows.82d662c89d81435f179f.js.map