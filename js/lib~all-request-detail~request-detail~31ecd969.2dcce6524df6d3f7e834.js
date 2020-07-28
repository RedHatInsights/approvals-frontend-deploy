(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{783:function(e,t,a){"use strict";var n=a(197),r=a.n(n),c=a(89),s=a.n(c),l=a(10),i=a.n(l),o=a(0),m=a.n(o),u=a(16),p=a(109),d=a(198),E=a(152),f=a(209),g=a(786),y=a(8),b=a.n(y),h=a(158),x=a(160),q=a(725),T=a(202),k=a(206),j=a(65),v=a(108),O=a(327),C=a(265),N=a(70),_=a(746),L=a(750),P=function(e){var t=e.request,a=e.requestContent,n=Object(C.a)();return m.a.createElement(T.Stack,{hasGutter:!0},m.a.createElement(k.StackItem,{key:"request-detail-panel"},m.a.createElement(h.Card,null,m.a.createElement(x.CardBody,null,m.a.createElement(T.Stack,{hasGutter:!0},m.a.createElement(k.StackItem,{key:"request-summary"},m.a.createElement(O.Title,{headingLevel:"h5",size:"lg"},n.formatMessage(L.a.summary))),m.a.createElement(k.StackItem,{key:"request-product"},m.a.createElement(v.TextContent,null,m.a.createElement(j.Text,{className:"font-14"},n.formatMessage(_.a.product)),m.a.createElement(j.Text,{id:"portfolio-item-name",component:j.TextVariants.p},a?a.product:""))),m.a.createElement(k.StackItem,{key:"request-portfolio"},m.a.createElement(v.TextContent,null,m.a.createElement(j.Text,{className:"font-14"},n.formatMessage(_.a.portfolio)),m.a.createElement(j.Text,{id:"portfolio-name",component:j.TextVariants.p},a?a.portfolio:""))),m.a.createElement(k.StackItem,{key:"request-platform"},m.a.createElement(v.TextContent,null,m.a.createElement(j.Text,{className:"font-14"},n.formatMessage(_.a.platform)),m.a.createElement(j.Text,{id:"source-name",component:j.TextVariants.p},a?a.platform:" "))),m.a.createElement(k.StackItem,{key:"request-requester"},m.a.createElement(v.TextContent,null,m.a.createElement(j.Text,{className:"font-14"},n.formatMessage(N.a.requesterColumn)),m.a.createElement(j.Text,{id:"requester_name",component:j.TextVariants.p},t.requester_name))),m.a.createElement(k.StackItem,{key:"request-order"},m.a.createElement(v.TextContent,null,m.a.createElement(j.Text,{className:"font-14"},n.formatMessage(N.a.orderNumber)),m.a.createElement(j.Text,{id:"requester_name",component:j.TextVariants.p},a?a.order_id:""))))))),m.a.createElement(k.StackItem,{key:"request-parameters"},m.a.createElement(h.Card,null,m.a.createElement(q.CardTitle,null,m.a.createElement(O.Title,{headingLevel:"h5",size:"lg"},n.formatMessage(N.a.parameters))),m.a.createElement(x.CardBody,null,m.a.createElement(T.Stack,{hasGutter:!0},a.params&&Object.keys(a.params).map((function(e){return a.params[e]&&m.a.createElement(k.StackItem,{key:"request-".concat(a.params[e])},m.a.createElement(v.TextContent,null,m.a.createElement(j.Text,{key:e,className:"font-14"},"".concat(e)),m.a.createElement(j.Text,{id:e,component:j.TextVariants.p},"".concat(a.params[e]))))})))))))};P.propTypes={request:b.a.shape({requester_name:b.a.string,order_id:b.a.string}).isRequired,requestContent:b.a.object};var S=P,D=a(72),I=a.n(D),w=a(828),R=a(173),M=a(38),B=a(269),F=a.n(B),V=a(728),G=a.n(V),H=a(730),z=a.n(H),A=a(729),U=a.n(A),J=a(695),W=a.n(J),K=a(731),Q=a.n(K),X=a(270),Y=a.n(X),Z=a(181),$=a.n(Z),ee=a(782),te=a(91),ae={memo:{displayName:N.a.commentFrom,icon:m.a.createElement(G.a,null)},approve:{displayName:N.a.approvedBy,icon:m.a.createElement(F.a,{className:"pf-u-mr-0 icon-success-fill"})},deny:{displayName:N.a.deniedBy,icon:m.a.createElement(U.a,{className:"pf-u-mr-sm icon-danger-fill"})},notify:{displayName:N.a.notifiedBy,icon:m.a.createElement(z.a,null)},skip:{displayName:N.a.skippedBy,icon:m.a.createElement(W.a,null)},start:{displayName:N.a.startedBy,icon:m.a.createElement(Q.a,null)},cancel:{displayName:N.a.canceledBy,icon:m.a.createElement(Y.a,{className:"pf-u-mr-sm icon-danger-fill"})},error:{displayName:N.a.errorBy,icon:m.a.createElement($.a,{className:"pf-u-mr-0 icon-danger-fill"})}},ne=function(e){var t=e.actionList,a=Object(C.a)();return t?m.a.createElement(T.Stack,null,t.map((function(e){return m.a.createElement("div",{key:"".concat(e.id,"-action")},m.a.createElement(v.TextContent,null,m.a.createElement(j.Text,{key:"".concat(e.id,"-action-created_at"),className:"pf-u-mb-0",component:j.TextVariants.small},Object(M.h)(e.created_at)),m.a.createElement(j.Text,{key:"".concat(e.id,"-action-operation"),className:"pf-u-mb-md"},(t=e.operation,ae[t]?ae[t].icon:"")," ",a.formatMessage(function(e){return ae[e]?ae[e].displayName:Object(te.e)()}(e.operation),{by:e.processed_by})),e.comments&&m.a.createElement(j.Text,{key:"".concat(e.id,"-action-comments"),className:"pf-u-pt-0",component:j.TextVariants.p},e.comments)));var t}))):m.a.createElement(ee.EmptyTable,{centered:!0,"aria-label":a.formatMessage(_.a.noRecords)})};ne.propTypes={actionList:b.a.array};var re=a(271),ce=a(274),se=a(276),le=a(726),ie=a(275),oe=a(727),me=a(53),ue=a(52),pe=a(779),de=function(e){var t=e.item,a=e.isExpanded,n=e.toggleExpand,r=e.indexpath,c=Object(o.useContext)(me.a).userRoles,s=Object(M.i)(c),l=Object(C.a)(),i=function(e,t){return!!s||e.metadata&&e.metadata.user_capabilities&&e.metadata.user_capabilities[t]};return m.a.createElement(re.DataListItem,{key:"request-".concat(t.id),"aria-labelledby":"check-request-".concat(t.id),isExpanded:a},m.a.createElement(ce.DataListItemRow,null,m.a.createElement(le.DataListToggle,{onClick:function(){return n("request-".concat(t.id))},isExpanded:a,id:"request-".concat(t.id),"aria-labelledby":"request-".concat(t.id," request-").concat(t.id),"aria-label":l.formatMessage(N.a.toogleDetailsFor)}),m.a.createElement(ie.DataListItemCells,{dataListCells:[m.a.createElement(se.DataListCell,{key:t.id},m.a.createElement("span",{id:"".concat(t.id,"-name")},t.group_name?t.group_name:t.name)),m.a.createElement(se.DataListCell,{key:"".concat(t.id,"-state")},m.a.createElement("span",{style:{textTransform:"capitalize"},id:"".concat(t.id,"-state")},l.formatMessage(N.a[t.state]||Object(te.e)(t.state)))),m.a.createElement(se.DataListCell,{key:"".concat(t.id,"-action")},m.a.createElement(pe.a,{approveLink:r.approve,denyLink:r.deny,commentLink:r.addComment,request:t,canApproveDeny:i(t,"approve"),canComment:i(t,"memo")}))]})),m.a.createElement(oe.DataListContent,{"aria-label":l.formatMessage(N.a.requestContentDetails),isHidden:!a},m.a.createElement(T.Stack,{hasGutter:!0},m.a.createElement(k.StackItem,null,m.a.createElement(v.TextContent,{component:j.TextVariants.h6},m.a.createElement(ne,{actionList:t.actions}))))))};de.propTypes={item:b.a.shape({id:b.a.string,name:b.a.string,state:b.a.string,actions:b.a.array,group_name:b.a.string.isRequired,requestActions:b.a.shape({data:b.a.array}),metadata:b.a.shape({user_capabilities:b.a.object})}).isRequired,isExpanded:b.a.bool.isRequired,toggleExpand:b.a.func.isRequired,indexpath:b.a.object},de.defaultProps={indexpath:ue.a.request};var Ee=a(92),fe=function(e){var t=e.isLoading,a=e.items,n=e.noItems,r=e.indexpath,c=Object(o.useState)([]),l=s()(c,2),i=l[0],u=l[1],p=Object(C.a)(),d=function(e){var t=i.indexOf(e),a=t>=0?[].concat(I()(i.slice(0,t)),I()(i.slice(t+1,i.length))):[].concat(I()(i),[e]);u(a)};return m.a.createElement(o.Fragment,null,m.a.createElement("div",null,t&&m.a.createElement(o.Fragment,null,m.a.createElement(w.PageHeader,null,m.a.createElement(w.PageHeaderTitle,{title:n})),m.a.createElement(Ee.b,null))),a.length>0&&m.a.createElement(R.DataList,{"aria-label":p.formatMessage(N.a.expandableDataList)},a.map((function(e,t){return m.a.createElement(de,{key:e.id,item:e,idx:t,isActive:0===t,isExpanded:(a="request-".concat(e.id),i.includes(a)),toggleExpand:d,indexpath:r});var a}))))};fe.propTypes={isLoading:b.a.bool,items:b.a.array,noItems:b.a.string,active_request:b.a.number,indexpath:b.a.object},fe.defaultProps={items:[]};var ge=fe,ye=function(e){var t=e.request,a=e.indexpath,n=Object(C.a)();return m.a.createElement(o.Fragment,null,m.a.createElement(O.Title,{headingLevel:"h5",size:"lg",className:"pf-u-pl-lg pf-u-pb-lg"},n.formatMessage(N.a.requestTranscript)),m.a.createElement(ge,{items:t.requests&&t.requests.length>0?t.requests:[t],indexpath:a}))};ye.propTypes={request:b.a.shape({content:b.a.object,requests:b.a.array}).isRequired,indexpath:b.a.object};var be=ye,he=a(765),xe=a(153),qe=a(751);function Te(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ke(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(a),!0).forEach((function(t){i()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Te(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var je={isFetching:!0},ve=function(e,t){switch(t.type){case"setFetching":return ke(ke({},e),{},{isFetching:t.payload});default:return e}},Oe=function(e){var t=e.requestBreadcrumbs,a=e.indexpath,n=Object(o.useReducer)(ve,je),c=s()(n,2),l=c[0].isFetching,i=c[1],y=Object(p.useSelector)((function(e){var t=e.requestReducer,a=t.requestContent;return{selectedRequest:t.selectedRequest,requestContent:a}})),b=y.selectedRequest,h=y.requestContent,x=Object(qe.a)(["request"]),q=s()(x,1)[0].request,T=Object(u.h)(),k=Object(p.useDispatch)(),j=Object(o.useContext)(me.a).userRoles,v=Object(C.a)();Object(o.useEffect)((function(){Promise.all([k(Object(he.d)(q,Object(M.d)(j))),k(Object(he.e)(q,Object(M.d)(j)))]).then((function(){return i({type:"setFetching",payload:!1})}))}),[]);return m.a.createElement(o.Fragment,null,m.a.createElement(u.d,null,m.a.createElement(u.b,{exact:!0,path:a.addComment},m.a.createElement(g.a,{actionType:"Add Comment",closeUrl:{pathname:a.index,search:"?request=".concat(b.id)}})),m.a.createElement(u.b,{exact:!0,path:a.approve,render:function(e){return m.a.createElement(g.a,r()({},e,{actionType:"Approve",closeUrl:{pathname:a.index,search:"?request=".concat(b.id)}}))}}),m.a.createElement(u.b,{exact:!0,path:a.deny,render:function(e){return m.a.createElement(g.a,r()({},e,{actionType:"Deny",closeUrl:{pathname:a.index,search:"?request=".concat(b.id)}}))}})),m.a.createElement(xe.a,{breadcrumbs:t,paddingBottom:!0},m.a.createElement(xe.b,{title:v.formatMessage(N.a.requestTitle,{id:q})})),m.a.createElement(f.Section,{type:"content"},m.a.createElement(d.Grid,{hasGutter:!0},l||!b||0===Object.keys(b).length?m.a.createElement(f.Section,{style:{backgroundColor:"white",minHeight:"100%"}},m.a.createElement(Ee.d,null)):m.a.createElement(o.Fragment,null,m.a.createElement(E.GridItem,{md:4,lg:3,className:"info-bar pf-u-p-0"},m.a.createElement(S,{request:b,requestContent:h})),m.a.createElement(E.GridItem,{md:8,lg:9,className:"detail-pane pf-u-p-lg"},m.a.createElement(be,{request:b,url:T.url,indexpath:a}))))))};Oe.propTypes={requestBreadcrumbs:b.a.array,indexpath:b.a.object};t.a=Oe},828:function(e,t,a){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),a(90);var r=a(151),c=a(150),s=a(199),l=n(a(0)),i=n(a(8)),o=n(a(37)),m=a(344),u=a(327),p=function(e){var t=e.className,a=e.children,n=s._objectWithoutProperties(e,["className","children"]),i=o(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return l.createElement(m.ThemeContext.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=o(c._defineProperty({},"pf-m-".concat(e,"-200"),"dark"===e),c._defineProperty({},"pf-m-light","light"===e));return l.createElement("section",r._extends({},n,{className:"".concat(i," ").concat(t),"widget-type":"InsightsPageHeader"}),a)}))};p.propTypes={children:i.any.isRequired,className:i.string};var d=function(e){var t=e.className,a=e.title,n=o(t);return l.createElement(u.Title,{headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle"}," ",a," ")};d.propTypes={title:i.node.isRequired,className:i.string},t.PageHeader=p,t.PageHeaderTitle=d}}]);
//# sourceMappingURL=../sourcemaps/lib~all-request-detail~request-detail~31ecd969.js.map