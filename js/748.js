(self.webpackChunkapproval=self.webpackChunkapproval||[]).push([[748],{39748:(e,t,a)=>{"use strict";a.d(t,{Z:()=>ye});var n=a(22122),r=a(28481),c=a(96156),s=a(30624),l=a.n(s),o=a(334),i=a(58126),m=a(49287),u=a(18038),p=a(54213),d=a(42026),E=a(45697),f=a.n(E),y=a(2095),g=a(85962),h=a(36104),x=a(81159),Z=a(34023),q=a(63540),b=a(20018),v=a(34348),T=a(86896),k=a(27121),C=a(7248),N=a(87388),j=function(e){var t=e.request,a=e.requestContent,n=(0,T.Z)();return l().createElement(x.K,{hasGutter:!0},l().createElement(Z.v,{key:"request-detail-panel"},l().createElement(y.Zb,null,l().createElement(g.e,null,l().createElement(x.K,{hasGutter:!0},l().createElement(Z.v,{key:"request-summary"},l().createElement(v.Title,{headingLevel:"h5",size:"lg"},n.formatMessage(N.Z.summary))),l().createElement(Z.v,{key:"request-product"},l().createElement(b.TextContent,null,l().createElement(q.Text,{className:"font-14"},n.formatMessage(C.Z.product)),l().createElement(q.Text,{id:"portfolio-item-name",component:q.TextVariants.p},a?a.product:""))),l().createElement(Z.v,{key:"request-portfolio"},l().createElement(b.TextContent,null,l().createElement(q.Text,{className:"font-14"},n.formatMessage(C.Z.portfolio)),l().createElement(q.Text,{id:"portfolio-name",component:q.TextVariants.p},a?a.portfolio:""))),l().createElement(Z.v,{key:"request-platform"},l().createElement(b.TextContent,null,l().createElement(q.Text,{className:"font-14"},n.formatMessage(C.Z.platform)),l().createElement(q.Text,{id:"source-name",component:q.TextVariants.p},a?a.platform:" "))),l().createElement(Z.v,{key:"request-requester"},l().createElement(b.TextContent,null,l().createElement(q.Text,{className:"font-14"},n.formatMessage(k.Z.requesterColumn)),l().createElement(q.Text,{id:"requester_name",component:q.TextVariants.p},t.requester_name))),l().createElement(Z.v,{key:"request-order"},l().createElement(b.TextContent,null,l().createElement(q.Text,{className:"font-14"},n.formatMessage(k.Z.orderNumber)),l().createElement(q.Text,{id:"order_id",component:q.TextVariants.p},a?a.order_id:""))))))),l().createElement(Z.v,{key:"request-parameters"},l().createElement(y.Zb,null,l().createElement(h.l,null,l().createElement(v.Title,{headingLevel:"h5",size:"lg"},n.formatMessage(k.Z.parameters))),l().createElement(g.e,null,l().createElement(x.K,{hasGutter:!0},a.params&&Object.keys(a.params).map((function(e){return a.params[e]&&l().createElement(Z.v,{key:"request-".concat(a.params[e])},l().createElement(b.TextContent,null,l().createElement(q.Text,{key:e,className:"font-14"},"".concat(e)),l().createElement(q.Text,{id:e,component:q.TextVariants.p},"".concat(a.params[e]))))})))))))};j.propTypes={request:f().shape({requester_name:f().string,order_id:f().string}).isRequired,requestContent:f().object};const O=j;var M=a(85061),P=a(48716),R=a(39173),L=a(26940),_=a(11107),F=a(35451),w=a(67002),D=a(96893),B=a(85316),V=a(6569),G=a(41418),K=a(3235),S=a(84564),z=a(92223),A=a(84866),I={memo:{displayName:k.Z.commentFrom,icon:l().createElement(w.ZP,null)},approve:{displayName:k.Z.approvedBy,icon:l().createElement(F.ZP,{className:"pf-u-mr-0 icon-success-fill"})},deny:{displayName:k.Z.deniedBy,icon:l().createElement(B.ZP,{className:"pf-u-mr-sm icon-danger-fill"})},notify:{displayName:k.Z.notifiedBy,icon:l().createElement(D.ZP,null)},skip:{displayName:k.Z.skippedBy,icon:l().createElement(V.ZP,null)},start:{displayName:k.Z.startedBy,icon:l().createElement(G.ZP,null)},cancel:{displayName:k.Z.canceledBy,icon:l().createElement(K.ZP,{className:"pf-u-mr-sm icon-danger-fill"})},error:{displayName:k.Z.errorBy,icon:l().createElement(S.ZP,{className:"pf-u-mr-0 icon-danger-fill"})}},Q=function(e){var t=e.actionList,a=(0,T.Z)();return t?l().createElement(x.K,null,t.map((function(e){return l().createElement("div",{key:"".concat(e.id,"-action")},l().createElement(b.TextContent,null,l().createElement(q.Text,{key:"".concat(e.id,"-action-created_at"),className:"pf-u-mb-0",component:q.TextVariants.small},(0,_.Sy)(e.created_at)),l().createElement(q.Text,{key:"".concat(e.id,"-action-operation"),className:"pf-u-mb-md"},(t=e.operation,I[t]?I[t].icon:"")," ",a.formatMessage(function(e){return I[e]?I[e].displayName:(0,A.ZC)()}(e.operation),{by:e.processed_by})),e.comments&&l().createElement(q.Text,{key:"".concat(e.id,"-action-comments"),className:"pf-u-pt-0",component:q.TextVariants.p},e.comments)));var t}))):l().createElement(z.Z,{centered:!0,"aria-label":a.formatMessage(C.Z.noRecords)})};Q.propTypes={actionList:f().array};var U=a(48826),H=a(82224),Y=a(38243),J=a(76332),W=a(4867),X=a(21543),$=a(5469),ee=a(50409),te=a(47239),ae=function(e){var t=e.item,a=e.isExpanded,n=e.toggleExpand,r=e.indexpath,c=(0,s.useContext)($.Z).userRoles,o=(0,_.wM)(c),i=(0,T.Z)(),m=function(e,t){return!!o||e.metadata&&e.metadata.user_capabilities&&e.metadata.user_capabilities[t]};return l().createElement(U.L,{key:"request-".concat(t.id),"aria-labelledby":"check-request-".concat(t.id),isExpanded:a},l().createElement(H.V,null,l().createElement(J.p,{onClick:function(){return n("request-".concat(t.id))},isExpanded:a,id:"request-".concat(t.id),"aria-labelledby":"request-".concat(t.id," request-").concat(t.id),"aria-label":i.formatMessage(k.Z.toggleDetailsFor)}),l().createElement(W.p,{dataListCells:[l().createElement(Y.K,{key:t.id},l().createElement("span",{id:"".concat(t.id,"-name")},t.group_name?t.group_name:t.name)),l().createElement(Y.K,{key:"".concat(t.id,"-state")},l().createElement("span",{style:{textTransform:"capitalize"},id:"".concat(t.id,"-state")},i.formatMessage(k.Z[t.state]||(0,A.ZC)(t.state)))),l().createElement(Y.K,{key:"".concat(t.id,"-action")},l().createElement(te.Z,{approveLink:r.approve,denyLink:r.deny,commentLink:r.comment,request:t,canApproveDeny:m(t,"approve"),canComment:m(t,"memo")}))]})),l().createElement(X.m,{"aria-label":i.formatMessage(k.Z.requestContentDetails),isHidden:!a},l().createElement(x.K,{hasGutter:!0},l().createElement(Z.v,null,l().createElement(b.TextContent,{component:q.TextVariants.h6},l().createElement(Q,{actionList:t.actions}))))))};ae.propTypes={item:f().shape({id:f().string,name:f().string,state:f().string,actions:f().array,group_name:f().string.isRequired,requestActions:f().shape({data:f().array}),metadata:f().shape({user_capabilities:f().object})}).isRequired,isExpanded:f().bool.isRequired,toggleExpand:f().func.isRequired,indexpath:f().object},ae.defaultProps={indexpath:ee.Z.request};var ne=a(76690),re=function(e){var t=e.isLoading,a=e.items,n=e.noItems,c=e.indexpath,o=(0,s.useState)([]),i=(0,r.Z)(o,2),m=i[0],u=i[1],p=(0,T.Z)(),d=function(e){var t=m.indexOf(e),a=t>=0?[].concat((0,M.Z)(m.slice(0,t)),(0,M.Z)(m.slice(t+1,m.length))):[].concat((0,M.Z)(m),[e]);u(a)};return l().createElement(s.Fragment,null,l().createElement("div",null,t&&l().createElement(s.Fragment,null,l().createElement(P.Z,null,l().createElement(R.Z,{title:n})),l().createElement(ne.Eo,null))),a.length>0&&l().createElement(L.DataList,{"aria-label":p.formatMessage(k.Z.expandableDataList)},a.map((function(e,t){return l().createElement(ae,{key:e.id,item:e,idx:t,isActive:0===t,isExpanded:(a="request-".concat(e.id),m.includes(a)),toggleExpand:d,indexpath:c});var a}))))};re.propTypes={isLoading:f().bool,items:f().array,noItems:f().string,active_request:f().number,indexpath:f().object},re.defaultProps={items:[]};const ce=re;var se=function(e){var t=e.request,a=e.indexpath,n=(0,T.Z)();return l().createElement(s.Fragment,null,l().createElement(v.Title,{headingLevel:"h5",size:"lg",className:"pf-u-pl-lg pf-u-pb-lg"},n.formatMessage(k.Z.requestTranscript)),l().createElement(ce,{items:t.requests&&t.requests.length>0?t.requests:[t],indexpath:a}))};se.propTypes={request:f().shape({content:f().object,requests:f().array}).isRequired,indexpath:f().object};const le=se;var oe=a(38106),ie=a(37412),me=a(1054);function ue(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(a),!0).forEach((function(t){(0,c.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ue(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var de={isFetching:!0},Ee=function(e,t){switch(t.type){case"setFetching":return pe(pe({},e),{},{isFetching:t.payload});default:return e}},fe=function(e){var t=e.requestBreadcrumbs,a=e.indexpath,c=(0,s.useReducer)(Ee,de),E=(0,r.Z)(c,2),f=E[0].isFetching,y=E[1],g=(0,i.useSelector)((function(e){var t=e.requestReducer,a=t.requestContent;return{selectedRequest:t.selectedRequest,requestContent:a}})),h=g.selectedRequest,x=g.requestContent,Z=(0,me.Z)(["request"]),q=(0,r.Z)(Z,1)[0].request,b=(0,o.useLocation)(),v=(0,i.useDispatch)(),C=(0,s.useContext)($.Z).userRoles,N=(0,T.Z)();(0,s.useEffect)((function(){Promise.all([v((0,oe.t5)(q,(0,_.pu)(C))),v((0,oe.YQ)(q,(0,_.pu)(C)))]).then((function(){return y({type:"setFetching",payload:!1})}))}),[]);var j=function(e){return y({type:"setFetching",payload:!0}),v((0,oe.t5)(e,(0,_.pu)(C))),v((0,oe.YQ)(e,(0,_.pu)(C))).then((function(){return y({type:"setFetching",payload:!1})})).catch((function(){return y({type:"setFetching",payload:!1})}))};return l().createElement(s.Fragment,null,l().createElement(o.Switch,null,l().createElement(o.Route,{exact:!0,path:a.comment},l().createElement(d.Z,{actionType:"Comment",postMethod:function(){return j(h.id)},closeUrl:{pathname:a.index,search:"?request=".concat(h.id)}})),l().createElement(o.Route,{exact:!0,path:a.approve,render:function(e){return l().createElement(d.Z,(0,n.Z)({},e,{actionType:"Approve",postMethod:function(){return j(h.id)},closeUrl:{pathname:a.index,search:"?request=".concat(h.id)}}))}}),l().createElement(o.Route,{exact:!0,path:a.deny,render:function(e){return l().createElement(d.Z,(0,n.Z)({},e,{actionType:"Deny",postMethod:function(){return j(h.id)},closeUrl:{pathname:a.index,search:"?request=".concat(h.id)}}))}})),l().createElement(ie.Q,{breadcrumbs:t,paddingBottom:!0},l().createElement(ie.y,{title:N.formatMessage(k.Z.requestTitle,{id:q})})),l().createElement(p.Z,{type:"content"},l().createElement(m.Grid,{hasGutter:!0},f||!h||0===Object.keys(h).length?l().createElement(p.Z,{style:{backgroundColor:"white",minHeight:"100%"}},l().createElement(ne.vr,null)):l().createElement(s.Fragment,null,l().createElement(u.GridItem,{md:4,lg:3,className:"info-bar pf-u-p-0"},l().createElement(O,{request:h,requestContent:x})),l().createElement(u.GridItem,{md:8,lg:9,className:"detail-pane pf-u-p-lg"},l().createElement(le,{request:h,url:b.url,indexpath:a}))))))};fe.propTypes={requestBreadcrumbs:f().array,indexpath:f().object};const ye=fe}}]);
//# sourceMappingURL=../sourcemaps/748.185fe84ce56345a6c713.js.map