(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{801:function(e,t,a){"use strict";var r=a(229),n=a.n(r),s=a(118),o=a.n(s),i=a(13),c=a.n(i),u=a(0),l=a.n(u),m=a(9),f=a.n(m),p=a(135),d=a(228),g=a(151),y=a(99),b=a(97),h=a(309),v=a(681),O=a.n(v),j=a(775),q=a.n(j),E=a(773),M=a(136),F=a.n(M),C=a(86),w=a(50),R=a(67),V=a(695),x=a(120),T=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},k=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R.a.request,r=arguments.length>3?arguments[3]:void 0;return t.reduce((function(t,n){var s,o,i;return[].concat(F()(t),[{id:n.id,state:n.state,number_of_children:n.number_of_children,cells:[l.a.createElement(u.Fragment,{key:n.id,ouiaId:n.id},l.a.createElement(C.b,{to:{pathname:a.index,search:"?request=".concat(n.id)}},n.id)),n.name,n.requester_name,n.finished_at?Object(w.h)(n.finished_at):n.notified_at?Object(w.h)(n.notified_at):Object(w.h)(n.created_at),l.a.createElement(u.Fragment,{key:"decision-".concat(n.id),ouiaId:"decision-".concat(n.id)},e(n)||l.a.createElement(V.Label,{variant:"outline",icon:null===(s=x.d[n.decision])||void 0===s?void 0:s.icon,color:null===(o=x.d[n.decision])||void 0===o?void 0:o.color},T(r.formatMessage((null===(i=x.d[n.decision])||void 0===i?void 0:i.displayName)||Object(x.e)()))))]}])}),[])},D=a(791),P=a(182),_=a(757),S=a(745),B=a(802),L=a(68),A=a(748),I=a(93),N=function(e,t){var a=e.name,r=e.requester,n=e.decision;return[].concat(F()(a?[{category:t.formatMessage(A.a.name),key:"name",chips:[{name:a,value:a}]}]:[]),F()(r?[{category:t.formatMessage(I.a.requesterColumn),key:"requester",chips:[{name:r,value:r}]}]:[]),F()(n&&n.length>0?[{category:t.formatMessage(I.a.statusColumn),key:"decision",chips:n.map((function(e){return{name:e,value:e}}))}]:[]))},J=a(735),U=a(24),z=a(803);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var K=function(e){return[{title:e.formatMessage(I.a.requestsIdColumn),transforms:[g.a,Object(y.a)(10)]},{title:e.formatMessage(A.a.name),transforms:[g.a,b.e,Object(y.a)(25)],cellTransforms:[b.a]},{title:e.formatMessage(I.a.requesterColumn),transforms:[g.a,b.e,Object(y.a)(25)]},{title:e.formatMessage(I.a.updatedColumn),transforms:[Object(y.a)(15)]},{title:e.formatMessage(I.a.statusColumn),transforms:[g.a,Object(y.a)(25)]}]},Q=Object(S.a)((function(e,t,a,r){return t(!0),r&&r(),e(Object(E.e)(a)).then((function(){return t(!1)}))}),1e3),W=function(e,t){switch(t.type){case"setFetching":return H(H({},e),{},{isFetching:t.payload});case"setNameValue":return H(H({},e),{},{nameValue:t.payload});case"setRequesterValue":return H(H({},e),{},{requesterValue:t.payload});case"clearFilters":return H(H({},e),{},{requesterValue:"",nameValue:"",isFetching:!0});case"setFilteringFlag":return H(H({},e),{},{isFiltering:t.payload});case"setRows":return H(H({},e),{},{rows:t.payload});default:return e}},X=function(e){var t=e.persona,a=e.indexpath,r=e.actionResolver,s=Object(p.useSelector)((function(e){var t=e.requestReducer;return{requests:t.requests,sortBy:t.sortBy,filterValue:t.filterValue}}),p.shallowEqual),i=s.requests,c=i.data,m=i.meta,f=s.sortBy,g=s.filterValue,y=Object(u.useReducer)(W,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{nameValue:e,requesterValue:t,isOpen:!1,isFetching:!0,isFiltering:!1,rows:[]}}(g.name,g.requester)),b=o()(y,2),v=b[0],j=v.nameValue,M=v.isFetching,F=v.isFiltering,C=v.requesterValue,V=v.rows,x=b[1],T=Object(u.useContext)(L.a).userRoles,S=Object(p.useDispatch)(),G=Object(h.a)(),H=Object(w.i)(T),X=Object(w.j)(T),Y=function(e){if(X||t!==w.b)return x({type:"setFetching",payload:!0}),S(Object(E.e)(t,e)).then((function(){return x({type:"setFetching",payload:!1})})).catch((function(){return x({type:"setFetching",payload:!1})}));x({type:"setFetching",payload:!1})};Object(u.useEffect)((function(){S(Object(E.f)()),Y(),Object(w.g)()}),[t]),Object(u.useEffect)((function(){x({type:"setRows",payload:k(r,c,a,G)})}),[c]);var Z=function(e,a){var r=!1;return"name"===a?(x({type:"setNameValue",payload:e}),r=!0):"requester"===a&&(x({type:"setRequesterValue",payload:e}),r=!0),r||S(Object(E.g)(e,a)),Q(S,(function(e){return x({type:"setFilteringFlag",payload:e})}),t,r&&function(){return S(Object(E.g)(e,a))})},$=function(){return x({type:"clearFilters"}),S(Object(E.a)()),Y()};return l.a.createElement(u.Fragment,null,l.a.createElement(P.a,null,l.a.createElement(P.b,{title:G.formatMessage(J.a.approvalTitle)}),H&&l.a.createElement(_.a,null)),l.a.createElement(D.a,{ouiaId:"requests-table",sortBy:f,onSort:function(e,t,a,r){var n=r.property;return x({type:"setFetching",payload:!0}),S(Object(E.h)({index:t,direction:a,property:n})),Y()},rows:V,columns:K(G),fetchData:Y,routes:function(){return l.a.createElement(u.Fragment,null,l.a.createElement(U.b,{exact:!0,path:R.a.requests.comment,render:function(e){return l.a.createElement(z.a,n()({},e,{actionType:"Comment",postMethod:function(){return Y(m)}}))}}),l.a.createElement(U.b,{exact:!0,path:R.a.requests.approve,render:function(e){return l.a.createElement(z.a,n()({},e,{actionType:"Approve",postMethod:function(){return Y(m)}}))}}),l.a.createElement(U.b,{exact:!0,path:R.a.requests.deny,render:function(e){return l.a.createElement(z.a,n()({},e,{actionType:"Deny",postMethod:function(){return Y(m)}}))}}))},titlePlural:G.formatMessage(I.a.requests),titleSingular:G.formatMessage(I.a.request),pagination:m,handlePagination:Y,filterValue:j,onFilterChange:function(e){return Z(e,"name")},isLoading:M||F,renderEmptyState:function(){return l.a.createElement(B.a,{title:q()(g)?G.formatMessage(I.a.emptyRequestsTitle):G.formatMessage(A.a.noResultsFound),Icon:O.a,PrimaryAction:function(){return q()(g)?a===R.a.allrequest?G.formatMessage(I.a.emptyAllRequestsDescription):G.formatMessage(I.a.emptyRequestsDescription):l.a.createElement(d.Button,{onClick:$,variant:"link",ouiaId:"clear-filter-requests"},G.formatMessage(A.a.clearAllFilters))},description:q()(g)?"":G.formatMessage(A.a.clearAllFiltersDescription)})},activeFiltersConfig:{filters:N({name:j,requester:C,decision:g.decision},G),onDelete:function(e,t,a){return a?$():(r=t,n=o()(r,1)[0],s=n.key,i=o()(n.chips,1)[0].value,c=["name","requester"].includes(s)?"":g[s].filter((function(e){return i!==e})),void Z(c,s));var r,n,s,i,c}},filterConfig:[{label:G.formatMessage(I.a.requesterColumn),filterValues:{placeholder:G.formatMessage(A.a.filterByTitle,{title:G.formatMessage(I.a.requesterColumn).toLowerCase()}),"aria-label":G.formatMessage(A.a.filterByTitle,{title:G.formatMessage(I.a.requesterColumn).toLowerCase()}),onChange:function(e,t){return Z(t,"requester")},value:C}},{label:G.formatMessage(I.a.statusColumn),type:"checkbox",filterValues:{placeholder:G.formatMessage(A.a.filterByTitle,{title:G.formatMessage(I.a.statusColumn).toLowerCase()}),"aria-label":G.formatMessage(A.a.filterByTitle,{title:G.formatMessage(I.a.statusColumn).toLowerCase()}),onChange:function(e,t){return Z(t,"decision")},value:g.decision,items:["approved","canceled","denied","error","undecided"].map((function(e){return{label:G.formatMessage(I.a[e]),value:e}}))}}]}))};X.propTypes={routes:f.a.func,persona:f.a.string,indexpath:f.a.shape({index:f.a.string}),actionResolver:f.a.func},X.defaultProps={indexpath:R.a.request,actionResolver:function(){return!1}};t.a=X},869:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(50),o=a(801),i=a(67);t.default=function(){return n.a.createElement(o.a,{persona:s.a,indexpath:i.a.allrequest})}},871:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(50),o=a(68),i=a(67),c=a(801),u=a(681),l=a.n(u),m=a(182),f=a(757),p=a(685),d=a(687),g=a(686),y=a(689),b=a(85),h=a(134),v=a(309),O=a(93),j=a(735),q=function(){var e=Object(r.useContext)(o.a).userRoles,t=Object(s.i)(e),a=Object(v.a)();return n.a.createElement(r.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(m.b,{title:a.formatMessage(j.a.approvalTitle)}),t&&n.a.createElement(f.a,null)),n.a.createElement("div",{className:"pf-u-mt-xl"},n.a.createElement(p.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},n.a.createElement(g.EmptyStateIcon,{icon:l.a}),n.a.createElement(h.TextContent,null,n.a.createElement(b.Text,{component:b.TextVariants.h1},a.formatMessage(O.a.emptyRequestsTitle))),n.a.createElement(d.EmptyStateBody,null,a.formatMessage(O.a.emptyRequestsDescription))),n.a.createElement(y.EmptyStateSecondaryActions,null)))},E=a(774);t.default=function(){var e=Object(r.useContext)(o.a).userRoles,t=Object(s.i)(e),a=Object(s.j)(e);return a?n.a.createElement(c.a,{persona:s.b,actionResolver:function(e){return e&&e.id&&(!(r=e)||!r.state||!Object(s.f)(r.state)||r.number_of_children>0||!a&&!t)?null:n.a.createElement(E.a,{commentLink:i.a.requests.comment,approveLink:i.a.requests.approve,denyLink:i.a.requests.deny,request:e});var r}}):n.a.createElement(q,null)}}}]);
//# sourceMappingURL=../sourcemaps/requests~3c3c4c71.js.map