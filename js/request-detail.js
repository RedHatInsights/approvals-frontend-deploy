(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{2204:function(e,t,n){"use strict";n.r(t);var a=n(31),r=n.n(a),c=n(47),o=n.n(c),i=n(3),s=n.n(i),l=n(0),u=n.n(l),d=n(18),m=n(39),p=n(84),f=n(56),b=n(133),y=n(416),E=n(1),g=n.n(E),h=n(171),v=n(172),q=n(2183),O=n(348),x=n(351),j=n(148),T=n(149),k=n(75),w=function(e){var t=e.request,n=e.requestContent;return u.a.createElement(l.Fragment,null,u.a.createElement(O.Stack,{gutter:"md"},u.a.createElement(x.StackItem,{key:"request-detail-panel"},u.a.createElement(h.Card,null,u.a.createElement(v.CardBody,null,u.a.createElement(O.Stack,{gutter:"md"},u.a.createElement(x.StackItem,{key:"request-summary"},u.a.createElement(k.Title,{headingLevel:"h5",size:"lg"},"Summary")),u.a.createElement(x.StackItem,{key:"request-product"},u.a.createElement(T.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},"Product"),u.a.createElement(j.Text,{id:"portfolio-item-name",component:j.TextVariants.p},n?n.product:""))),u.a.createElement(x.StackItem,{key:"request-portfolio"},u.a.createElement(T.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},"Portfolio"),u.a.createElement(j.Text,{id:"portfolio-name",component:j.TextVariants.p},n?n.portfolio:""))),u.a.createElement(x.StackItem,{key:"request-platform"},u.a.createElement(T.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},"Platform"),u.a.createElement(j.Text,{id:"source-name",component:j.TextVariants.p},n?n.platform:" "))),u.a.createElement(x.StackItem,{key:"request-requester"},u.a.createElement(T.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},"Requester "),u.a.createElement(j.Text,{id:"requester_name",component:j.TextVariants.p},t.requester_name))),u.a.createElement(x.StackItem,{key:"request-order"},u.a.createElement(T.TextContent,null,u.a.createElement(j.Text,{className:"font-14"},"Order# "),u.a.createElement(j.Text,{id:"requester_name",component:j.TextVariants.p},n?n.order_id:""))))))),u.a.createElement(x.StackItem,{key:"request-parameters"},u.a.createElement(h.Card,null,u.a.createElement(q.CardHeader,null,u.a.createElement(k.Title,{headingLevel:"h5",size:"lg"},"Parameters")),u.a.createElement(v.CardBody,null,u.a.createElement(O.Stack,{gutter:"md"},n.params&&Object.keys(n.params).map((function(e){return n.params[e]&&u.a.createElement(x.StackItem,{key:"request-".concat(n.params[e])},u.a.createElement(T.TextContent,null,u.a.createElement(j.Text,{key:e,className:"font-14"},"".concat(e)),u.a.createElement(j.Text,{id:e,component:j.TextVariants.p},"".concat(n.params[e]))))}))))))))};w.propTypes={request:g.a.shape({requester_name:g.a.string,order_id:g.a.string}).isRequired,requestContent:g.a.object};var P=w,C=n(21),R=n.n(C),D=n(2184),_=n.n(D),N=n(2185),S=n.n(N),L=n(2186),I=n.n(L),A=n(2188),F=n.n(A),V=n(471),B=n.n(V),M=n(2189),U=n.n(M),G=n(2191),H=n(46),z=n(26),J=n(42),K=n(159),Q=n.n(K),X=n(466),W=n.n(X),Y=n(467),Z=n.n(Y),$=n(468),ee=n.n($),te=n(157),ne=n.n(te),ae=n(470),re=n.n(ae),ce=n(469),oe=n.n(ce),ie=n(154),se=n.n(ie),le=n(369),ue={memo:{displayName:"Comment from",icon:u.a.createElement(W.a,null)},approve:{displayName:"Approved by",icon:u.a.createElement(Q.a,{className:"pf-u-mr-sm icon-success-fill"})},deny:{displayName:"Denied by",icon:u.a.createElement(ee.a,{className:"pf-u-mr-sm icon-danger-fill"})},notify:{displayName:"Notified by",icon:u.a.createElement(Z.a,null)},skip:{displayName:"Skipped by",icon:u.a.createElement(ne.a,null)},start:{displayName:"Started by",icon:u.a.createElement(re.a,null)},cancel:{displayName:"Canceled by",icon:u.a.createElement(oe.a,{className:"pf-u-mr-sm icon-danger-fill"})},error:{displayName:"Error",icon:u.a.createElement(se.a,{className:"pf-u-mr-sm icon-danger-fill"})}},de=function(e){var t=e.actionList;return t?u.a.createElement(O.Stack,null,t.map((function(e){return u.a.createElement("div",{key:"".concat(e.id,"-action")},u.a.createElement(T.TextContent,null,u.a.createElement(j.Text,{key:"".concat(e.id,"-action-created_at"),style:{marginBottom:0},className:"data-table-detail content",component:j.TextVariants.small},Object(J.h)(e.created_at)),u.a.createElement(j.Text,{key:"".concat(e.id,"-action-operation"),style:{marginBottom:0},className:"data-table-detail content"},(t=e.operation,ue[t]?ue[t].icon:"")," ","".concat(function(e){return ue[e]?ue[e].displayName:""}(e.operation),"  ").concat(e.processed_by)),e.comments&&u.a.createElement(j.Text,{key:"".concat(e.id,"-action-comments"),style:{marginBottom:0},className:"data-table-detail content",component:j.TextVariants.h6},"".concat(e.comments))," "),u.a.createElement("br",null));var t}))):u.a.createElement(le.EmptyTable,{centered:!0,"aria-label":"No records"})},me=n(74),pe=n(66),fe=n(67),be=n(69),ye=n(2192),Ee=n(68),ge=n(2193),he=n(162),ve=n(161),qe=n(13),Oe=n(163),xe=n(150),je=n(151),Te=n(44),ke=n(347),we=function(e){var t,n=e.item,a=e.isExpanded,r=e.toggleExpand,c=Object(l.useState)(!1),i=o()(c,2),s=i[0],d=i[1],m=Object(l.useContext)(Te.a).userPersona,p=function(e){d(e)},f=function(){d((function(e){return!e}))},b=function(e,t){return!!Object(J.d)(m)||e.metadata&&e.metadata.user_capabilities&&e.metadata.user_capabilities[t]};return u.a.createElement(pe.DataListItem,{key:"request-".concat(n.id),"aria-labelledby":"check-request-".concat(n.id),isExpanded:a},u.a.createElement(fe.DataListItemRow,null,u.a.createElement(ye.DataListToggle,{onClick:function(){return r("request-".concat(n.id))},isExpanded:a,id:"request-".concat(n.id),"aria-labelledby":"request-".concat(n.id," request-").concat(n.id),"aria-label":"Toggle details for"}),u.a.createElement(Ee.DataListItemCells,{dataListCells:[u.a.createElement(be.DataListCell,{key:n.id},u.a.createElement("span",{id:"".concat(n.id,"-name")},"".concat(n.group_name?n.group_name:n.name)," ")),u.a.createElement(be.DataListCell,{key:"".concat(n.id,"-state")},u.a.createElement("span",{style:{textTransform:"capitalize"},id:"".concat(n.id,"-state")},"".concat(n.state)," ")),u.a.createElement(be.DataListCell,{key:"".concat(n.id,"-action")},u.a.createElement(xe.Level,null,u.a.createElement(je.LevelItem,null,Object(J.f)(n.state)&&b(n,"approve")&&u.a.createElement("div",null,u.a.createElement(z.Link,{id:"approve-".concat(n.id),to:{pathname:ke.a.request.approve,search:"?request=".concat(n.id)}},u.a.createElement(me.Button,{variant:"link","aria-label":"Approve Request"},"Approve")),u.a.createElement(z.Link,{id:"deny-".concat(n.id),to:{pathname:ke.a.request.deny,search:"?request=".concat(n.id)}},u.a.createElement(me.Button,{variant:"link",className:"destructive-color","aria-label":"Deny Request"},"Deny")))))),u.a.createElement(be.DataListCell,{key:"request-".concat(n.id),className:"pf-c-data-list__action","aria-labelledby":"request-".concat(n.id," check-request-action").concat(n.id),id:"workflow-".concat(n.id),"aria-label":"Actions"},Object(J.f)(n.state)&&b(n,"memo")&&(t=n,u.a.createElement(ve.Dropdown,{position:qe.DropdownPosition.right,onSelect:f,toggle:u.a.createElement(Oe.KebabToggle,{id:"request-request-dropdown-".concat(t.id),onToggle:p}),isOpen:s,dropdownItems:[u.a.createElement(he.DropdownItem,{"aria-label":"Add Comment",key:"add_comment_".concat(t.id)},u.a.createElement(z.Link,{id:"request-".concat(t.id,"-request-comment"),to:{pathname:ke.a.request.addComment,search:"?request=".concat(t.id)},className:"pf-c-dropdown__menu-item"},"Comment"))],isPlain:!0})))]})),u.a.createElement(ge.DataListContent,{"aria-label":"Request Content Details",isHidden:!a},u.a.createElement(O.Stack,{gutter:"md"},u.a.createElement(x.StackItem,null,u.a.createElement(T.TextContent,{component:j.TextVariants.h6},function(e){return u.a.createElement(de,{actionList:e.actions})}(n))))))};we.propTypes={isLoading:g.a.bool,item:g.a.shape({id:g.a.string,name:g.a.string,state:g.a.string,group_name:g.a.string.isRequired,requestActions:g.a.shape({data:g.a.array}),metadata:g.a.shape({user_capabilities:g.a.array})}).isRequired,idx:g.a.number,isExpanded:g.a.bool.isRequired,toggleExpand:g.a.func.isRequired,noItems:g.a.string};var Pe=n(40),Ce=function(e){function t(){var e,n;_()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return n=I()(this,(e=F()(t)).call.apply(e,[this].concat(r))),s()(B()(n),"state",{expanded:[]}),s()(B()(n),"toggleExpand",(function(e){return n.setState((function(t){var n=t.expanded,a=n.indexOf(e);return{expanded:a>=0?[].concat(R()(n.slice(0,a)),R()(n.slice(a+1,n.length))):[].concat(R()(n),[e])}}))})),s()(B()(n),"isExpanded",(function(e){return n.state.expanded.includes(e)})),n}return U()(t,e),S()(t,[{key:"render",value:function(){var e=this;return u.a.createElement(l.Fragment,null,u.a.createElement("div",null,this.props.isLoading&&u.a.createElement(l.Fragment,null,u.a.createElement(G.PageHeader,null,u.a.createElement(G.PageHeaderTitle,{title:this.props.noItems})),u.a.createElement(Pe.b,null))),this.props.items.length>0&&u.a.createElement(H.DataList,{"aria-label":"Expandable data list"},this.props.items.map((function(t,n){return u.a.createElement(we,{key:t.id,item:t,idx:n,isActive:0===n,isExpanded:e.isExpanded("request-".concat(t.id)),toggleExpand:e.toggleExpand})}))))}}]),t}(l.Component);Ce.propTypes={isLoading:g.a.bool,items:g.a.array,noItems:g.a.string,active_request:g.a.number},Ce.defaultProps={items:[]};var Re=Ce,De=function(e){var t=e.request;return u.a.createElement(l.Fragment,null,u.a.createElement(k.Title,{size:"sm",style:{paddingLeft:"32px"}}," Request transcript "),u.a.createElement(Re,{items:t.requests&&t.requests.length>0?t.requests:[t]}))};De.propTypes={request:g.a.shape({content:g.a.object,requests:g.a.array}).isRequired};var _e=De,Ne=n(364),Se=n(374),Le=n(353);function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Ae={isFetching:!0},Fe=function(e,t){switch(t.type){case"setFetching":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isFetching:t.payload});default:return e}};t.default=function(){var e=Object(l.useReducer)(Fe,Ae),t=o()(e,2),n=t[0].isFetching,a=t[1],c=Object(m.useSelector)((function(e){var t=e.requestReducer,n=t.requestContent;return{selectedRequest:t.selectedRequest,requestContent:n}})),i=c.selectedRequest,s=c.requestContent,E=Object(Le.a)(["request"]),g=o()(E,2),h=g[0].request,v=g[1],q=Object(d.l)(),O=Object(m.useDispatch)(),x=Object(l.useContext)(Te.a).userPersona;Object(l.useEffect)((function(){Promise.all([O(Object(Ne.c)(h,x)),O(Object(Ne.d)(h,x))]).then((function(){return a({type:"setFetching",payload:!1})}))}),[]);return u.a.createElement(l.Fragment,null,u.a.createElement(d.g,null,u.a.createElement(d.d,{exact:!0,path:ke.a.request.addComment},u.a.createElement(y.a,{actionType:"Add Comment",closeUrl:{pathname:ke.a.request.index,search:v}})),u.a.createElement(d.d,{exact:!0,path:ke.a.request.approve,render:function(e){return u.a.createElement(y.a,r()({},e,{actionType:"Approve",closeUrl:{pathname:ke.a.request.index,search:v}}))}}),u.a.createElement(d.d,{exact:!0,path:ke.a.request.deny,render:function(e){return u.a.createElement(y.a,r()({},e,{actionType:"Deny",closeUrl:{pathname:ke.a.request.index,search:v}}))}})),u.a.createElement(Se.a,{breadcrumbs:[{title:"Request queue",to:ke.a.requests.index,id:"requests"}],paddingBottom:!0},u.a.createElement(Se.b,{title:"Request ".concat(h)})),u.a.createElement(b.Section,{type:"content"},u.a.createElement(p.Grid,{gutter:"md"},n||!i||0===Object.keys(i).length?u.a.createElement(b.Section,{style:{backgroundColor:"white",minHeight:"100%"}},u.a.createElement(Pe.c,null)):u.a.createElement(l.Fragment,null,u.a.createElement(f.GridItem,{md:4,lg:3,className:"info-bar"},u.a.createElement(P,{request:i,requestContent:s})),u.a.createElement(f.GridItem,{md:8,lg:9,className:"detail-pane"},u.a.createElement(_e,{request:i,url:q.url}))))))}},347:function(e,t,n){"use strict";t.a={requests:{index:"/requests",addComment:"/requests/add-comment",approve:"/requests/approve",deny:"/requests/deny"},request:{index:"/request",addComment:"/request/add-comment",approve:"/request/approve",deny:"/request/deny"},workflows:{index:"/workflows",add:"/workflows/add-workflow",remove:"/workflows/remove",editInfo:"/workflows/edit-info",editGroups:"/workflows/edit-groups",editSequence:"/workflows/edit-sequence"}}},353:function(e,t,n){"use strict";var a=n(3),r=n.n(a),c=n(18);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.l)(),n=t.search,a=new URLSearchParams(n);return[e.reduce((function(e,t){return i({},e,r()({},t,a.get(t)))}),{}),n,a]}},364:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var a=n(4),r=n(376),c=function(e,t,n){return{type:a.h,payload:r.d(e,t,n)}},o=function(e,t){return{type:a.g,payload:r.c(e,t)}},i=function(e,t){return{type:a.i,payload:r.b(e,t)}},s=function(e,t,n){return{type:a.b,payload:r.a(t,n),meta:{notifications:{fulfilled:{variant:"success",title:"Success",description:"The ".concat(e," was successful.")},rejected:{variant:"danger",title:"".concat(e," error"),description:"The ".concat(e," action failed.")}}}}},l=function(e){return{type:a.c,payload:e}}},366:function(e,t,n){},374:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1),o=n.n(c),i=n(150),s=n(151),l=n(148),u=n(149),d=n(40),m=n(26),p=n(378),f=n(379),b=function(e){var t=e.breadcrumbs;return t?r.a.createElement(p.Breadcrumb,null,Object.values(t).map((function(e){return r.a.createElement(f.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&r.a.createElement(m.NavLink,{isActive:function(){return!1},exact:!0,to:e.to},e.title)||e.title)}))):null};b.propTypes={breadcrumbs:o.a.arrayOf(o.a.shape({title:o.a.string.isRequired,isActive:o.a.bool,to:o.a.string}))};var y=b;n(366);n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return g}));var E=function(e){var t=e.children,n=e.breadcrumbs,a=e.paddingBottom;return r.a.createElement("div",{className:"pf-u-pt-lg pf-u-pr-lg pf-u-pl-lg ".concat(a?"pf-u-pb-sm":""," top-toolbar")},n&&r.a.createElement(i.Level,{className:"pf-u-mb-md"},r.a.createElement(y,{breadcrumbs:n})),t)};E.propTypes={children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]).isRequired,breadcrumbs:o.a.array,paddingBottom:o.a.bool},E.defaultProps={paddingBottom:!1};var g=function(e){var t=e.title,n=e.description,c=e.children;return r.a.createElement(a.Fragment,null,r.a.createElement(i.Level,null,r.a.createElement(s.LevelItem,null,r.a.createElement(u.TextContent,{className:"pf-u-mb-sm"},r.a.createElement(l.Text,{component:l.TextVariants.h1},t||r.a.createElement(d.d,null))),n&&r.a.createElement(u.TextContent,{className:"pf-u-pt-sm pf-u-mb-md"},r.a.createElement(l.Text,{component:l.TextVariants.p},n))),c))};g.propTypes={title:o.a.string,description:o.a.string,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])}},376:function(e,t,n){"use strict";n.d(t,"d",(function(){return E})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return q})),n.d(t,"a",(function(){return x}));var a=n(34),r=n.n(a),c=n(3),o=n.n(c),i=n(51),s=n.n(i),l=n(82),u=n(23),d=n(76),m=n(42);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=Object(l.a)(),y=Object(l.c)();function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a="&limit=".concat(t.limit,"&offset=").concat(t.offset),r="filter[name][contains_i]=".concat(e),c="".concat(u.a,"/requests/?").concat(r).concat(a),o=n?{"x-rh-persona":n}:void 0;return Object(l.b)()({method:"get",url:c,headers:o})}var g=function(e,t){var n,a=t&&t!==m.a?{"x-rh-persona":t}:{"x-rh-persona":m.b};return y({method:"post",url:"".concat(u.a,"/graphql"),headers:a,data:{query:(n=e,'query {\n  requests(id: "'.concat(n,'") {\n    id\n    name\n    number_of_children\n    decision\n    description\n    group_name\n    number_of_finished_children\n    state\n    actions {\n      id\n      operation\n      comments\n      created_at\n      processed_by\n    }\n    requests {\n      id\n      name\n      number_of_children\n      decision\n      description\n      group_name\n      number_of_finished_children\n      state\n      workflow_id\n      parent_id\n      actions {\n        id\n        operation\n        comments\n        created_at\n        processed_by\n      }\n    }\n  }\n}'))}}).then((function(e){return e.data.requests}))},h=function(e){var t="".concat(u.a,"/requests/").concat(e,"/content"),n={"x-rh-persona":m.b};return Object(l.b)()({method:"get",url:t,headers:n})},v=function(e,t){var n="".concat(u.a,"/requests/").concat(e).concat(t?"/requests":""),a={"x-rh-persona":m.b};return Object(l.b)()({method:"get",url:n,headers:a})};function q(e,t){return O.apply(this,arguments)}function O(){return(O=s()(r.a.mark((function e(t,n){var a,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t,n);case 2:if((a=e.sent)&&0!==a.length){e.next=5;break}return e.abrupt("return",{});case 5:if(n!==m.a){e.next=17;break}if(!(a&&a.length>0&&a[0].number_of_children>0)){e.next=13;break}return e.next=9,v(t,!0);case 9:(c=e.sent)&&c.data&&(a[0].requests=a[0].requests.map((function(e){return f({},c.data.find((function(t){return t.id===e.id&&t.metadata})),{},e)}))),e.next=17;break;case 13:return e.next=15,v(t,!1);case 15:(o=e.sent)&&(a[0]=f({},a[0],{metadata:o.metadata}));case 17:return e.abrupt("return",f({},a[0]));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return j.apply(this,arguments)}function j(){return(j=s()(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.createAction(t,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},416:function(e,t,n){"use strict";var a=n(3),r=n.n(a),c=n(47),o=n.n(c),i=n(0),s=n.n(i),l=n(1),u=n.n(l),d=n(31),m=n.n(d),p=n(50),f=n.n(p),b=n(365),y=n.n(b),E=n(423),g=n(21),h=n.n(g),v=n(434),q=n(435),O=n(49),x=n(149),j=n(148),T=function(e){var t=e.input,n=e.options,a=e.isReadOnly,r=e.isDisabled,c=(e.FieldProvider,e.isRequired),o=f()(e,["input","options","isReadOnly","isDisabled","FieldProvider","isRequired"]);return s.a.createElement(v.FormSelect,m()({},t,o,{isDisabled:r||a}),function(e,t,n){if(t&&n)return e;var a=h()(e);return a.find((function(e){return void 0===e.value}))?h()(a):[{label:n?"Please choose":"None"}].concat(h()(a))}(n,t.value,c).map((function(e){return s.a.createElement(q.FormSelectOption,m()({key:e.value||e.label},e,{label:e.label.toString()}))})))};T.propTypes={input:u.a.object.isRequired,options:u.a.arrayOf(u.a.shape({value:u.a.any,label:u.a.string.isRequired})).isRequired,isReadOnly:u.a.bool,isDisabled:u.a.bool,isRequired:u.a.bool,FieldProvider:u.a.any};var k=function(e){e.componentType;var t=e.label,n=e.isRequired,a=e.helperText,r=e.meta,c=e.description,o=e.hideLabel,i=f()(e,["componentType","label","isRequired","helperText","meta","description","hideLabel"]),l=r.error,u=r.touched&&l;return s.a.createElement(O.FormGroup,{isRequired:n,label:!o&&t,fieldId:i.id,isValid:!u,helperText:a,helperTextInvalid:r.error},c&&s.a.createElement(x.TextContent,null,s.a.createElement(j.Text,{component:j.TextVariants.small},c)),s.a.createElement(T,m()({label:t,isValid:!u,isRequired:n},i)))};k.propTypes={componentType:u.a.string,label:u.a.string,isRequired:u.a.bool,helperText:u.a.string,meta:u.a.object,description:u.a.string,hideLabel:u.a.bool};var w=k;function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R={default:{},modal:{buttonOrder:["cancel","reset","save"],buttonClassName:"modal-form-right-align"}},D=function(e){var t=e.componentMapper,n=e.formContainer,a=f()(e,["componentMapper","formContainer"]);return s.a.createElement("div",{className:R[n].buttonClassName},s.a.createElement(y.a,m()({formFieldsMapper:C({},E.formFieldsMapper,r()({componentMapper:t},b.componentTypes.SELECT,w)),layoutMapper:E.layoutMapper},R[n],a)))};D.propTypes={componentMapper:u.a.object,formContainer:u.a.oneOf(["default","modal"])},D.defaultProps={componentMapper:{},formContainer:"default"};var _=D,N=n(18),S=n(39),L=n(81),I=n(356),A=n(32),F=n(364),V=function(e){return{component:b.componentTypes.TEXTAREA_FIELD,name:"comments",type:"text",isRequired:e,label:e?"Reason":"Comment"}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=V(e);return e&&(t.validate=[{type:b.validatorTypes.REQUIRED}]),{fields:[t]}},M=n(353),U=n(347);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=e.actionType,n=e.addNotification,a=e.createRequestAction,r=e.closeUrl,c=e.postMethod,i=Object(N.k)().push,l=Object(M.a)(["request"]),u=o()(l,1)[0].request,d=function(){var e="Add Comment"===t?t:"".concat(t," Request");n({variant:"warning",title:e,dismissable:!0,description:"".concat(e," was cancelled by the user.")}),i(r)};return s.a.createElement(I.Modal,{isLarge:!0,title:"Add Comment"===t?"Request #".concat(u):"".concat(t," Request #").concat(u),isOpen:!0,onClose:d},s.a.createElement(_,{schema:B("Deny"===t),schemaType:"default",onSubmit:function(e){var n={"Add Comment":"memo",Approve:"approve",Deny:"deny"},o="Add Comment"===t?t:"".concat(t," Request");return c?a(o,u,H({operation:n[t]},e)).then((function(){return c()})).then((function(){return i(r)})):a(o,u,H({operation:n[t]},e)).then((function(){return i(r)}))},onCancel:d,formContainer:"modal"}))};z.defaultProps={closeUrl:U.a.requests.index},z.propTypes={addNotification:u.a.func.isRequired,createRequestAction:u.a.func.isRequired,postMethod:u.a.func,id:u.a.string,actionType:u.a.string,closeUrl:u.a.string,match:u.a.object,location:u.a.object};t.a=Object(S.connect)(null,(function(e){return Object(L.a)({addNotification:A.addNotification,createRequestAction:F.a},e)}))(z)}}]);
//# sourceMappingURL=../sourcemaps/request-detail.js.map