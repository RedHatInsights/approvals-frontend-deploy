(self.webpackChunkapproval=self.webpackChunkapproval||[]).push([[216],{8307:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(30624),a=r.n(n),s=r(11107),o=r(69739),l=r(50409);const i=function(){return a().createElement(o.Z,{persona:s.Fr,indexpath:l.Z.allrequest})}},69739:(e,t,r)=>{"use strict";r.d(t,{Z:()=>H});var n=r(22122),a=r(28481),s=r(96156),o=r(30624),l=r.n(o),i=r(45697),u=r.n(i),c=r(58126),m=r(6202),f=r(62691),p=r(86896),d=r(96733),g=r(48794),y=r(41609),Z=r.n(y),h=r(38106),v=r(85061),q=r(334),M=r(11107),E=r(50409),b=r(23218),C=r(84866),F=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},w=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E.Z.request,n=arguments.length>3?arguments[3]:void 0;return t.reduce((function(t,a){var s,i,u;return[].concat((0,v.Z)(t),[{id:a.id,state:a.state,number_of_children:a.number_of_children,cells:[l().createElement(o.Fragment,{key:a.id},l().createElement(q.Link,{to:{pathname:r.index,search:"?request=".concat(a.id)}},a.id)),a.name,a.requester_name,a.finished_at?(0,M.Sy)(a.finished_at):a.notified_at?(0,M.Sy)(a.notified_at):(0,M.Sy)(a.created_at),l().createElement(o.Fragment,{key:"decision-".concat(a.id)},e(a)||l().createElement(b._,{variant:"outline",icon:null===(s=C.Oj[a.decision])||void 0===s?void 0:s.icon,color:null===(i=C.Oj[a.decision])||void 0===i?void 0:i.color},F(n.formatMessage((null===(u=C.Oj[a.decision])||void 0===u?void 0:u.displayName)||(0,C.ZC)()))))]}])}),[])},O=r(30060),R=r(37412),k=r(12824),x=r(57666),V=r(51403),T=r(5469),j=r(31004),P=r(27121),L=function(e,t){var r=e.name,n=e.requester,a=e.decision;return[].concat((0,v.Z)(r?[{category:t.formatMessage(j.Z.name),key:"name",chips:[{name:r,value:r}]}]:[]),(0,v.Z)(n?[{category:t.formatMessage(P.Z.requesterColumn),key:"requester",chips:[{name:n,value:n}]}]:[]),(0,v.Z)(a&&a.length>0?[{category:t.formatMessage(P.Z.statusColumn),key:"decision",chips:a.map((function(e){return{name:e,value:e}}))}]:[]))},_=r(7248),D=r(42026);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=function(e){return[{title:e.formatMessage(P.Z.requestsIdColumn),transforms:[f.sortable,(0,f.cellWidth)(10)]},{title:e.formatMessage(j.Z.name),transforms:[f.sortable,f.wrappable,(0,f.cellWidth)(25)],cellTransforms:[f.breakWord]},{title:e.formatMessage(P.Z.requesterColumn),transforms:[f.sortable,f.wrappable,(0,f.cellWidth)(25)]},{title:e.formatMessage(P.Z.updatedColumn),transforms:[(0,f.cellWidth)(15)]},{title:e.formatMessage(P.Z.statusColumn),transforms:[f.sortable,(0,f.cellWidth)(25)]}]},A=(0,x.Z)((function(e,t,r,n){return t(!0),n&&n(),e((0,h.po)(r)).then((function(){return t(!1)}))}),1e3),N=function(e,t){switch(t.type){case"setFetching":return B(B({},e),{},{isFetching:t.payload});case"setNameValue":return B(B({},e),{},{nameValue:t.payload});case"setRequesterValue":return B(B({},e),{},{requesterValue:t.payload});case"clearFilters":return B(B({},e),{},{requesterValue:"",nameValue:"",isFetching:!0});case"setFilteringFlag":return B(B({},e),{},{isFiltering:t.payload});case"setRows":return B(B({},e),{},{rows:t.payload});default:return e}},I=function(e){var t=e.persona,r=e.indexpath,s=e.actionResolver,i=(0,c.useSelector)((function(e){var t=e.requestReducer;return{requests:t.requests,sortBy:t.sortBy,filterValue:t.filterValue}}),c.shallowEqual),u=i.requests,f=u.data,y=u.meta,v=i.sortBy,b=i.filterValue,C=(0,o.useReducer)(N,function(){return{nameValue:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",requesterValue:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",isOpen:!1,isFetching:!0,isFiltering:!1,rows:[]}}(b.name,b.requester)),F=(0,a.Z)(C,2),x=F[0],S=x.nameValue,B=x.isFetching,I=x.isFiltering,H=x.requesterValue,Q=x.rows,G=F[1],U=(0,o.useContext)(T.Z).userRoles,z=(0,c.useDispatch)(),J=(0,p.Z)(),K=(0,M.wM)(U),X=(0,M.LL)(U),Y=function(e){if(X||t!==M.pS)return G({type:"setFetching",payload:!0}),z((0,h.po)(t,e)).then((function(){return G({type:"setFetching",payload:!1})})).catch((function(){return G({type:"setFetching",payload:!1})}));G({type:"setFetching",payload:!1})};(0,o.useEffect)((function(){G({type:"clearFilters"}),z((0,h.Ox)()),z((0,h.ex)()),Y()}),[t]),(0,o.useEffect)((function(){G({type:"setRows",payload:w(s,f,r,J)})}),[f]);var $=function(e,r){var n=!1;return"name"===r?(G({type:"setNameValue",payload:e}),n=!0):"requester"===r&&(G({type:"setRequesterValue",payload:e}),n=!0),n||z((0,h.fs)(e,r)),A(z,(function(e){return G({type:"setFilteringFlag",payload:e})}),t,n&&function(){return z((0,h.fs)(e,r))})},ee=function(){return G({type:"clearFilters"}),z((0,h.Ox)()),Y()};return l().createElement(o.Fragment,null,l().createElement(R.Q,null,l().createElement(R.y,{title:J.formatMessage(_.Z.approvalTitle)}),K&&l().createElement(k.H,null)),l().createElement(O.M,{ouiaId:"requests-table",sortBy:v,onSort:function(e,t,r,n){var a=n.property;return G({type:"setFetching",payload:!0}),z((0,h.jW)({index:t,direction:r,property:a})),Y()},rows:Q,columns:W(J),fetchData:Y,routes:function(){return l().createElement(o.Fragment,null,l().createElement(q.Route,{exact:!0,path:E.Z.requests.comment,render:function(e){return l().createElement(D.Z,(0,n.Z)({},e,{actionType:"Comment",postMethod:function(){return Y(y)}}))}}),l().createElement(q.Route,{exact:!0,path:E.Z.requests.approve,render:function(e){return l().createElement(D.Z,(0,n.Z)({},e,{actionType:"Approve",postMethod:function(){return Y(y)}}))}}),l().createElement(q.Route,{exact:!0,path:E.Z.requests.deny,render:function(e){return l().createElement(D.Z,(0,n.Z)({},e,{actionType:"Deny",postMethod:function(){return Y(y)}}))}}))},titlePlural:J.formatMessage(P.Z.requests),titleSingular:J.formatMessage(P.Z.request),pagination:y,handlePagination:Y,filterValue:S,onFilterChange:function(e){return $(e,"name")},isLoading:B||I,renderEmptyState:function(){return l().createElement(V.Z,{title:Z()(b)?J.formatMessage(P.Z.emptyRequestsTitle):J.formatMessage(j.Z.noResultsFound),icon:Z()(b)?d.ZP:g.ZP,PrimaryAction:function(){return Z()(b)?r===E.Z.allrequest?J.formatMessage(P.Z.emptyAllRequestsDescription):J.formatMessage(P.Z.emptyRequestsDescription):l().createElement(m.Button,{onClick:ee,variant:"link",ouiaId:"clear-filter-requests"},J.formatMessage(j.Z.clearAllFilters))},description:Z()(b)?"":J.formatMessage(j.Z.clearAllFiltersDescription),isSearch:!Z()(b)})},activeFiltersConfig:{filters:L({name:S,requester:H,decision:b.decision},J),onDelete:function(e,t,r){return r?ee():(n=t,o=(s=(0,a.Z)(n,1)[0]).key,l=(0,a.Z)(s.chips,1)[0].value,i=["name","requester"].includes(o)?"":b[o].filter((function(e){return l!==e})),void $(i,o));var n,s,o,l,i}},filterConfig:[{label:J.formatMessage(P.Z.requesterColumn),filterValues:{placeholder:J.formatMessage(j.Z.filterByTitle,{title:J.formatMessage(P.Z.requesterColumn).toLowerCase()}),"aria-label":J.formatMessage(j.Z.filterByTitle,{title:J.formatMessage(P.Z.requesterColumn).toLowerCase()}),onChange:function(e,t){return $(t,"requester")},value:H}},{label:J.formatMessage(P.Z.statusColumn),type:"checkbox",filterValues:{placeholder:J.formatMessage(j.Z.filterByTitle,{title:J.formatMessage(P.Z.statusColumn).toLowerCase()}),"aria-label":J.formatMessage(j.Z.filterByTitle,{title:J.formatMessage(P.Z.statusColumn).toLowerCase()}),onChange:function(e,t){return $(t,"decision")},value:b.decision,items:["approved","canceled","denied","error","undecided"].map((function(e){return{label:J.formatMessage(P.Z[e]),value:e}}))}}]}))};I.propTypes={routes:u().func,persona:u().string,indexpath:u().shape({index:u().string}),actionResolver:u().func},I.defaultProps={indexpath:E.Z.request,actionResolver:function(){return!1}};const H=I},51321:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n=r(30624),a=r.n(n),s=r(11107),o=r(5469),l=r(50409),i=r(69739),u=r(37412),c=r(12824),m=r(219),f=r(74183),p=r(86728),d=r(97446),g=r(63540),y=r(20018),Z=r(86896),h=r(27121),v=r(7248),q=r(96733);const M=function(){var e=(0,n.useContext)(o.Z).userRoles,t=(0,s.wM)(e),r=(0,Z.Z)();return a().createElement(n.Fragment,null,a().createElement(u.Q,null,a().createElement(u.y,{title:r.formatMessage(v.Z.approvalTitle)}),t&&a().createElement(c.H,null)),a().createElement(m.ub,{className:"pf-u-ml-auto pf-u-mr-auto"},a().createElement(p.k,{icon:q.ZP}),a().createElement(y.TextContent,null,a().createElement(g.Text,{component:g.TextVariants.h1},r.formatMessage(h.Z.emptyRequestsTitle))),a().createElement(f.B,null,r.formatMessage(h.Z.emptyRequestsDescription))),a().createElement(d.i,null))};var E=r(47239);const b=function(){var e=(0,n.useContext)(o.Z).userRoles,t=(0,s.wM)(e),r=(0,s.LL)(e);return r?a().createElement(i.Z,{persona:s.pS,actionResolver:function(e){return e&&e.id&&(!(n=e)||!n.state||!(0,s.mG)(n.state)||n.number_of_children>0||!r&&!t)?null:a().createElement(E.Z,{commentLink:l.Z.requests.comment,approveLink:l.Z.requests.approve,denyLink:l.Z.requests.deny,request:e});var n}}):a().createElement(M,null)}}}]);
//# sourceMappingURL=../sourcemaps/requests.5d9c6901e80feb7f422c.js.map