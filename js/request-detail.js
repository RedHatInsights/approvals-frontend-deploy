(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{2298:function(e,t,n){"use strict";n.r(t);var a=n(90),r=n.n(a),c=n(55),o=n.n(c),i=n(5),s=n.n(i),l=n(0),u=n.n(l),m=n(26),d=n(46),p=n(91),f=n(58),b=n(112),y=n(480),E=n(1),g=n.n(E),h=n(71),O=n(72),q=n(2279),v=n(94),j=n(97),x=n(28),k=n(45),w=n(89),T=function(e){var t=e.request,n=e.requestContent;return u.a.createElement(v.Stack,{gutter:"md"},u.a.createElement(j.StackItem,{key:"request-detail-panel"},u.a.createElement(h.Card,null,u.a.createElement(O.CardBody,null,u.a.createElement(v.Stack,{gutter:"md"},u.a.createElement(j.StackItem,{key:"request-summary"},u.a.createElement(w.Title,{headingLevel:"h5",size:"lg"},"Summary")),u.a.createElement(j.StackItem,{key:"request-product"},u.a.createElement(k.TextContent,null,u.a.createElement(x.Text,{className:"font-14"},"Product"),u.a.createElement(x.Text,{id:"portfolio-item-name",component:x.TextVariants.p},n?n.product:""))),u.a.createElement(j.StackItem,{key:"request-portfolio"},u.a.createElement(k.TextContent,null,u.a.createElement(x.Text,{className:"font-14"},"Portfolio"),u.a.createElement(x.Text,{id:"portfolio-name",component:x.TextVariants.p},n?n.portfolio:""))),u.a.createElement(j.StackItem,{key:"request-platform"},u.a.createElement(k.TextContent,null,u.a.createElement(x.Text,{className:"font-14"},"Platform"),u.a.createElement(x.Text,{id:"source-name",component:x.TextVariants.p},n?n.platform:" "))),u.a.createElement(j.StackItem,{key:"request-requester"},u.a.createElement(k.TextContent,null,u.a.createElement(x.Text,{className:"font-14"},"Requester "),u.a.createElement(x.Text,{id:"requester_name",component:x.TextVariants.p},t.requester_name))),u.a.createElement(j.StackItem,{key:"request-order"},u.a.createElement(k.TextContent,null,u.a.createElement(x.Text,{className:"font-14"},"Order# "),u.a.createElement(x.Text,{id:"requester_name",component:x.TextVariants.p},n?n.order_id:""))))))),u.a.createElement(j.StackItem,{key:"request-parameters"},u.a.createElement(h.Card,null,u.a.createElement(q.CardHeader,null,u.a.createElement(w.Title,{headingLevel:"h5",size:"lg"},"Parameters")),u.a.createElement(O.CardBody,null,u.a.createElement(v.Stack,{gutter:"md"},n.params&&Object.keys(n.params).map((function(e){return n.params[e]&&u.a.createElement(j.StackItem,{key:"request-".concat(n.params[e])},u.a.createElement(k.TextContent,null,u.a.createElement(x.Text,{key:e,className:"font-14"},"".concat(e)),u.a.createElement(x.Text,{id:e,component:x.TextVariants.p},"".concat(n.params[e]))))})))))))};T.propTypes={request:g.a.shape({requester_name:g.a.string,order_id:g.a.string}).isRequired,requestContent:g.a.object};var P=T,C=n(35),_=n.n(C),D=n(2280),S=n.n(D),N=n(2281),R=n.n(N),I=n(2282),L=n.n(I),A=n(2284),V=n.n(A),G=n(528),F=n.n(G),B=n(2285),U=n.n(B),z=n(2287),H=n(78),M=n(22),J=n(47),K=n(64),Q=n.n(K),X=n(476),W=n.n(X),Y=n(477),Z=n.n(Y),$=n(115),ee=n.n($),te=n(177),ne=n.n(te),ae=n(478),re=n.n(ae),ce=n(116),oe=n.n(ce),ie=n(61),se=n.n(ie),le=n(474),ue={memo:{displayName:"Comment from",icon:u.a.createElement(W.a,null)},approve:{displayName:"Approved by",icon:u.a.createElement(Q.a,{className:"pf-u-mr-sm icon-success-fill"})},deny:{displayName:"Denied by",icon:u.a.createElement(ee.a,{className:"pf-u-mr-sm icon-danger-fill"})},notify:{displayName:"Notified by",icon:u.a.createElement(Z.a,null)},skip:{displayName:"Skipped by",icon:u.a.createElement(ne.a,null)},start:{displayName:"Started by",icon:u.a.createElement(re.a,null)},cancel:{displayName:"Canceled by",icon:u.a.createElement(oe.a,{className:"pf-u-mr-sm icon-danger-fill"})},error:{displayName:"Error",icon:u.a.createElement(se.a,{className:"pf-u-mr-sm icon-danger-fill"})}},me=function(e){var t=e.actionList;return t?u.a.createElement(v.Stack,null,t.map((function(e){return u.a.createElement("div",{key:"".concat(e.id,"-action")},u.a.createElement(k.TextContent,null,u.a.createElement(x.Text,{key:"".concat(e.id,"-action-created_at"),style:{marginBottom:0},className:"data-table-detail content",component:x.TextVariants.small},Object(J.i)(e.created_at)),u.a.createElement(x.Text,{key:"".concat(e.id,"-action-operation"),style:{marginBottom:0},className:"data-table-detail content"},(t=e.operation,ue[t]?ue[t].icon:"")," ","".concat(function(e){return ue[e]?ue[e].displayName:""}(e.operation),"  ").concat(e.processed_by)),e.comments&&u.a.createElement(x.Text,{key:"".concat(e.id,"-action-comments"),style:{marginBottom:0},className:"data-table-detail content",component:x.TextVariants.h6},"".concat(e.comments))," "),u.a.createElement("br",null));var t}))):u.a.createElement(le.EmptyTable,{centered:!0,"aria-label":"No records"})},de=n(88),pe=n(154),fe=n(157),be=n(159),ye=n(2288),Ee=n(158),ge=n(2289),he=n(181),Oe=n(180),qe=n(18),ve=n(182),je=n(52),xe=n(66),ke=n(49),we=n(386),Te=function(e){var t,n=e.item,a=e.isExpanded,r=e.toggleExpand,c=Object(l.useState)(!1),i=o()(c,2),s=i[0],m=i[1],d=Object(l.useContext)(ke.a).userPersona,p=function(e){m(e)},f=function(){m((function(e){return!e}))},b=function(e,t){return!!Object(J.e)(d)||e.metadata&&e.metadata.user_capabilities&&e.metadata.user_capabilities[t]};return u.a.createElement(pe.DataListItem,{key:"request-".concat(n.id),"aria-labelledby":"check-request-".concat(n.id),isExpanded:a},u.a.createElement(fe.DataListItemRow,null,u.a.createElement(ye.DataListToggle,{onClick:function(){return r("request-".concat(n.id))},isExpanded:a,id:"request-".concat(n.id),"aria-labelledby":"request-".concat(n.id," request-").concat(n.id),"aria-label":"Toggle details for"}),u.a.createElement(Ee.DataListItemCells,{dataListCells:[u.a.createElement(be.DataListCell,{key:n.id},u.a.createElement("span",{id:"".concat(n.id,"-name")},"".concat(n.group_name?n.group_name:n.name)," ")),u.a.createElement(be.DataListCell,{key:"".concat(n.id,"-state")},u.a.createElement("span",{style:{textTransform:"capitalize"},id:"".concat(n.id,"-state")},"".concat(n.state)," ")),u.a.createElement(be.DataListCell,{key:"".concat(n.id,"-action")},u.a.createElement(je.Level,null,u.a.createElement(xe.LevelItem,null,Object(J.g)(n.state)&&b(n,"approve")&&u.a.createElement("div",null,u.a.createElement(M.Link,{id:"approve-".concat(n.id),to:{pathname:we.a.request.approve,search:"?request=".concat(n.id)}},u.a.createElement(de.Button,{variant:"link","aria-label":"Approve Request"},"Approve")),u.a.createElement(M.Link,{id:"deny-".concat(n.id),to:{pathname:we.a.request.deny,search:"?request=".concat(n.id)}},u.a.createElement(de.Button,{variant:"link",className:"destructive-color","aria-label":"Deny Request"},"Deny")))))),u.a.createElement(be.DataListCell,{key:"request-".concat(n.id),className:"pf-c-data-list__action","aria-labelledby":"request-".concat(n.id," check-request-action").concat(n.id),id:"workflow-".concat(n.id),"aria-label":"Actions"},Object(J.g)(n.state)&&b(n,"memo")&&(t=n,u.a.createElement(Oe.Dropdown,{position:qe.DropdownPosition.right,onSelect:f,toggle:u.a.createElement(ve.KebabToggle,{id:"request-request-dropdown-".concat(t.id),onToggle:p}),isOpen:s,dropdownItems:[u.a.createElement(he.DropdownItem,{"aria-label":"Add Comment",key:"add_comment_".concat(t.id),component:"button"},u.a.createElement(M.Link,{id:"request-".concat(t.id,"-request-comment"),to:{pathname:we.a.request.addComment,search:"?request=".concat(t.id)},className:"pf-c-dropdown__menu-item"},"Comment"))],isPlain:!0})))]})),u.a.createElement(ge.DataListContent,{"aria-label":"Request Content Details",isHidden:!a},u.a.createElement(v.Stack,{gutter:"md"},u.a.createElement(j.StackItem,null,u.a.createElement(k.TextContent,{component:x.TextVariants.h6},function(e){return u.a.createElement(me,{actionList:e.actions})}(n))))))};Te.propTypes={isLoading:g.a.bool,item:g.a.shape({id:g.a.string,name:g.a.string,state:g.a.string,group_name:g.a.string.isRequired,requestActions:g.a.shape({data:g.a.array}),metadata:g.a.shape({user_capabilities:g.a.object})}).isRequired,idx:g.a.number,isExpanded:g.a.bool.isRequired,toggleExpand:g.a.func.isRequired,noItems:g.a.string};var Pe=n(37),Ce=function(e){function t(){var e,n;S()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=L()(this,(e=V()(t)).call.apply(e,[this].concat(r))),s()(F()(n),"state",{expanded:[]}),s()(F()(n),"toggleExpand",(function(e){return n.setState((function(t){var n=t.expanded,a=n.indexOf(e);return{expanded:a>=0?[].concat(_()(n.slice(0,a)),_()(n.slice(a+1,n.length))):[].concat(_()(n),[e])}}))})),s()(F()(n),"isExpanded",(function(e){return n.state.expanded.includes(e)})),n}return U()(t,e),R()(t,[{key:"render",value:function(){var e=this;return u.a.createElement(l.Fragment,null,u.a.createElement("div",null,this.props.isLoading&&u.a.createElement(l.Fragment,null,u.a.createElement(z.PageHeader,null,u.a.createElement(z.PageHeaderTitle,{title:this.props.noItems})),u.a.createElement(Pe.b,null))),this.props.items.length>0&&u.a.createElement(H.DataList,{"aria-label":"Expandable data list"},this.props.items.map((function(t,n){return u.a.createElement(Te,{key:t.id,item:t,idx:n,isActive:0===n,isExpanded:e.isExpanded("request-".concat(t.id)),toggleExpand:e.toggleExpand})}))))}}]),t}(l.Component);Ce.propTypes={isLoading:g.a.bool,items:g.a.array,noItems:g.a.string,active_request:g.a.number},Ce.defaultProps={items:[]};var _e=Ce,De=function(e){var t=e.request;return u.a.createElement(l.Fragment,null,u.a.createElement(w.Title,{size:"sm",style:{paddingLeft:"32px"}}," Request transcript "),u.a.createElement(_e,{items:t.requests&&t.requests.length>0?t.requests:[t]}))};De.propTypes={request:g.a.shape({content:g.a.object,requests:g.a.array}).isRequired};var Se=De,Ne=n(406),Re=n(67),Ie=n(394);function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ae={isFetching:!0},Ve=function(e,t){switch(t.type){case"setFetching":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isFetching:t.payload});default:return e}};t.default=function(){var e=Object(l.useReducer)(Ve,Ae),t=o()(e,2),n=t[0].isFetching,a=t[1],c=Object(d.useSelector)((function(e){var t=e.requestReducer,n=t.requestContent;return{selectedRequest:t.selectedRequest,requestContent:n}})),i=c.selectedRequest,s=c.requestContent,E=Object(Ie.a)(["request"]),g=o()(E,2),h=g[0].request,O=g[1],q=Object(m.l)(),v=Object(d.useDispatch)(),j=Object(l.useContext)(ke.a).userPersona;Object(l.useEffect)((function(){Promise.all([v(Object(Ne.d)(h,j)),v(Object(Ne.e)(h,j))]).then((function(){return a({type:"setFetching",payload:!1})}))}),[]);return u.a.createElement(l.Fragment,null,u.a.createElement(m.g,null,u.a.createElement(m.d,{exact:!0,path:we.a.request.addComment},u.a.createElement(y.a,{actionType:"Add Comment",closeUrl:{pathname:we.a.request.index,search:O}})),u.a.createElement(m.d,{exact:!0,path:we.a.request.approve,render:function(e){return u.a.createElement(y.a,r()({},e,{actionType:"Approve",closeUrl:{pathname:we.a.request.index,search:O}}))}}),u.a.createElement(m.d,{exact:!0,path:we.a.request.deny,render:function(e){return u.a.createElement(y.a,r()({},e,{actionType:"Deny",closeUrl:{pathname:we.a.request.index,search:O}}))}})),u.a.createElement(Re.a,{breadcrumbs:[{title:"Request queue",to:we.a.requests.index,id:"requests"},{title:"Request ".concat(h),id:h}],paddingBottom:!0},u.a.createElement(Re.b,{title:"Request ".concat(h)})),u.a.createElement(b.Section,{type:"content"},u.a.createElement(p.Grid,{gutter:"md"},n||!i||0===Object.keys(i).length?u.a.createElement(b.Section,{style:{backgroundColor:"white",minHeight:"100%"}},u.a.createElement(Pe.c,null)):u.a.createElement(l.Fragment,null,u.a.createElement(f.GridItem,{md:4,lg:3,className:"info-bar"},u.a.createElement(P,{request:i,requestContent:s})),u.a.createElement(f.GridItem,{md:8,lg:9,className:"detail-pane"},u.a.createElement(Se,{request:i,url:q.url}))))))}},386:function(e,t,n){"use strict";t.a={requests:{index:"/requests",addComment:"/requests/add-comment",approve:"/requests/approve",deny:"/requests/deny"},request:{index:"/request",addComment:"/request/add-comment",approve:"/request/approve",deny:"/request/deny"},workflows:{index:"/workflows",add:"/workflows/add-workflow",remove:"/workflows/remove",editInfo:"/workflows/edit-info",editGroups:"/workflows/edit-groups",editSequence:"/workflows/edit-sequence"}}},394:function(e,t,n){"use strict";var a=n(5),r=n.n(a),c=n(26);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.l)(),n=t.search,a=new URLSearchParams(n);return[e.reduce((function(e,t){return i({},e,r()({},t,a.get(t)))}),{}),n,a]}},399:function(e,t,n){"use strict";var a=n(90),r=n.n(a),c=n(103),o=n.n(c),i=n(5),s=n.n(i),l=n(0),u=n.n(l),m=n(1),d=n.n(m),p=n(434),f=n.n(p),b=n(438),y=n.n(b),E=n(416),g=n.n(E),h=n(91),O=n(58),q=n(94),v=n(97),j=n(28),x=n(45),k=n(89),w=n(390),T=n.n(w),P=function(){var e=(0,T()().getState)().values,t=e.name,n=e.description,a=e.wfGroups;return u.a.createElement(l.Fragment,null,u.a.createElement(q.Stack,{gutter:"md"},u.a.createElement(v.StackItem,null,u.a.createElement(k.Title,{size:"xl"}," Review ")),u.a.createElement(v.StackItem,null,u.a.createElement(q.Stack,{gutter:"md"},u.a.createElement(v.StackItem,null,u.a.createElement(x.TextContent,null,u.a.createElement(j.Text,{className:"data-table-detail heading",component:j.TextVariants.h5},"Review and confirm your inputs. If there is anything incorrect, click Back and revise."))),u.a.createElement(v.StackItem,null,u.a.createElement(h.Grid,{gutter:"md"},u.a.createElement(O.GridItem,{span:2},u.a.createElement(j.Text,{className:"data-table-detail heading",component:j.TextVariants.h5},"Name")),u.a.createElement(O.GridItem,{span:10},u.a.createElement(j.Text,{className:"data-table-detail content",component:j.TextVariants.p},t))),u.a.createElement(h.Grid,{gutter:"md"},u.a.createElement(O.GridItem,{span:2},u.a.createElement(j.Text,{className:"data-table-detail heading",component:j.TextVariants.h5},"Description")),u.a.createElement(O.GridItem,{span:10},u.a.createElement(j.Text,{className:"data-table-detail content",component:j.TextVariants.p},n))),a&&a.length>0&&a.map((function(e,t){return u.a.createElement(l.Fragment,{key:e.value},u.a.createElement(h.Grid,{gutter:"md"},u.a.createElement(O.GridItem,{span:2},u.a.createElement(j.Text,{className:"data-table-detail heading",component:j.TextVariants.h5},0===t?"Groups":"")),u.a.createElement(O.GridItem,{span:10},u.a.createElement(j.Text,{className:"data-table-detail content",component:j.TextVariants.p},e.label))))})))))))};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var _={default:{},modal:{buttonOrder:["cancel","reset","save"],buttonClassName:"modal-form-right-align"}},D=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y.a,{summary:P}),S=function(e){var t=e.formContainer,n=o()(e,["formContainer"]);return u.a.createElement("div",{className:_[t].buttonClassName},u.a.createElement(f.a,r()({componentMapper:D,FormTemplate:function(e){return u.a.createElement(g.a,r()({},e,_[t]))}},n)))};S.propTypes={formContainer:d.a.oneOf(["default","modal"])},S.defaultProps={formContainer:"default"};t.a=S},406:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return m})),n.d(t,"g",(function(){return d})),n.d(t,"a",(function(){return p}));var a=n(7),r=n(428),c=n(92),o=function(e,t){return function(n,o){var i=o().requestReducer,s=i.sortBy,l=i.requests,u=i.filterValue,m=t||c.a;if(!t&&l){var d=l.meta;m={limit:d.limit,offset:d.offset}}return n({type:a.i,payload:r.d(u,m,e,s)})}},i=function(e,t){return{type:a.h,payload:r.c(e,t)}},s=function(e,t){return{type:a.j,payload:r.b(e,t)}},l=function(e,t,n){return{type:a.c,payload:r.a(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success",description:"The ".concat(e," was successful.")},rejected:{variant:"danger",title:"".concat(e," error"),description:"The ".concat(e," action failed.")}}}}},u=function(e){return{type:a.d,payload:e}},m=function(e){return{type:a.q,payload:e}},d=function(e,t){return{type:a.o,payload:{filterValue:e,type:t}}},p=function(){return{type:a.b}}},428:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return q})),n.d(t,"c",(function(){return j})),n.d(t,"a",(function(){return k}));var a=n(40),r=n.n(a),c=n(5),o=n.n(c),i=n(62),s=n.n(i),l=n(102),u=n(32),m=n(92),d=n(47);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=Object(l.a)(),y=Object(l.c)(),E=function(e){return{"request-id":"id",opened:"created_at",requester:"requester_name",status:"state"}[e]||e},g=function(e){var t=[];return e.name&&t.push("filter[name][contains_i]=".concat(e.name)),e.requester&&t.push("filter[requester_name][contains_i]=".concat(e.requester)),e.status&&e.status.forEach((function(e){t.push("filter[state][eq][]=".concat(e))})),e.decision&&e.decision.forEach((function(e){t.push("filter[decision][eq][]=".concat(e))})),t.join("&")};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,r="&limit=".concat(Math.max(t.limit,10),"&offset=").concat(t.offset),c="&sort_by=".concat(E(a.property),":").concat(a.direction),o="".concat(u.a,"/requests/?").concat(g(e)).concat(r).concat(c),i=n?{"x-rh-persona":n}:void 0;return Object(l.b)()({method:"get",url:o,headers:i})}var O=function(e,t){var n,a=t&&t!==d.b?{"x-rh-persona":t}:{"x-rh-persona":d.c};return y({method:"post",url:"".concat(u.a,"/graphql"),headers:a,data:{query:(n=e,'query {\n  requests(id: "'.concat(n,'") {\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    state\n    actions {\n      id\n      operation\n      comments\n      created_at\n      processed_by\n    }\n    requests {\n      id\n      name\n      number_of_children\n      decision\n      description\n      group_name\n      number_of_finished_children\n      state\n      workflow_id\n      parent_id\n      actions {\n        id\n        operation\n        comments\n        created_at\n        processed_by\n      }\n    }\n  }\n}'))}}).then((function(e){return e.data.requests}))},q=function(e){var t="".concat(u.a,"/requests/").concat(e,"/content"),n={"x-rh-persona":d.c};return Object(l.b)()({method:"get",url:t,headers:n})},v=function(e,t){var n="".concat(u.a,"/requests/").concat(e).concat(t?"/requests":""),a={"x-rh-persona":d.c};return Object(l.b)()({method:"get",url:n,headers:a})};function j(e,t){return x.apply(this,arguments)}function x(){return(x=s()(r.a.mark((function e(t,n){var a,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t,n);case 2:if((a=e.sent)&&0!==a.length){e.next=5;break}return e.abrupt("return",{});case 5:if(n!==d.b){e.next=17;break}if(!(a&&a.length>0&&a[0].number_of_children>0)){e.next=13;break}return e.next=9,v(t,!0);case 9:(c=e.sent)&&c.data&&(a[0].requests=a[0].requests.map((function(e){return f({},c.data.find((function(t){return t.id===e.id&&t.metadata})),{},e)}))),e.next=17;break;case 13:return e.next=15,v(t,!1);case 15:(o=e.sent)&&(a[0]=f({},a[0],{metadata:o.metadata}));case 17:return e.abrupt("return",f({},a[0]));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t){return w.apply(this,arguments)}function w(){return(w=s()(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.createAction(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},480:function(e,t,n){"use strict";var a=n(5),r=n.n(a),c=n(55),o=n.n(c),i=n(0),s=n.n(i),l=n(1),u=n.n(l),m=n(399),d=n(26),p=n(46),f=n(101),b=n(400),y=n(38),E=n(406),g=n(391),h=n.n(g),O=n(402),q=n.n(O);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return{fields:[j({component:h.a.TEXTAREA,name:"comments",isRequired:e,label:e?"Reason":"Comment"},e&&{validate:[{type:q.a.REQUIRED}]})]}},k=n(394),w=n(386);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.actionType,n=e.addNotification,a=e.createRequestAction,r=e.closeUrl,c=e.postMethod,i=Object(d.k)().push,l=Object(k.a)(["request"]),u=o()(l,1)[0].request,p=function(){var e="Add Comment"===t?t:"".concat(t," Request");n({variant:"warning",title:e,dismissable:!0,description:"".concat(e," was cancelled by the user.")}),i(r)};return s.a.createElement(b.Modal,{isLarge:!0,title:"Add Comment"===t?"Request #".concat(u):"".concat(t," Request #").concat(u),isOpen:!0,onClose:p},s.a.createElement(m.a,{schema:x("Deny"===t),onSubmit:function(e){var n={"Add Comment":"memo",Approve:"approve",Deny:"deny"},o="Add Comment"===t?t:"".concat(t," Request");return c?a(o,u,P({operation:n[t]},e)).then((function(){return c()})).then((function(){return i(r)})):a(o,u,P({operation:n[t]},e)).then((function(){return i(r)}))},onCancel:p,formContainer:"modal"}))};C.defaultProps={closeUrl:w.a.requests.index},C.propTypes={addNotification:u.a.func.isRequired,createRequestAction:u.a.func.isRequired,postMethod:u.a.func,id:u.a.string,actionType:u.a.string,closeUrl:u.a.string,match:u.a.object,location:u.a.object};t.a=Object(p.connect)(null,(function(e){return Object(f.a)({addNotification:y.addNotification,createRequestAction:E.b},e)}))(C)}}]);
//# sourceMappingURL=../sourcemaps/request-detail.js.map