(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{784:function(e,t,a){"use strict";var n=a(89),r=a.n(n),s=a(10),o=a.n(s),i=a(0),u=a.n(i),l=a(8),c=a.n(l),m=a(109),f=a(196),p=a(285),d=a(300),g=a(79),y=a(265),b=a(683),h=a.n(b),v=a(780),O=a.n(v),j=a(765),q=a(72),E=a.n(q),M=a(66),C=a(38),F=a(52),x=a(724),w=a(91),V=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},R=function(e){return function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:F.a.request,r=arguments.length>3?arguments[3]:void 0;return t.reduce((function(t,a){var s,o,l;return[].concat(E()(t),[{id:a.id,state:a.state,number_of_children:a.number_of_children,cells:[u.a.createElement(i.Fragment,{key:a.id},u.a.createElement(M.b,{to:{pathname:n.index,search:"?request=".concat(a.id)}},a.id)),a.name,a.requester_name,a.finished_at?Object(C.h)(a.finished_at):a.notified_at?Object(C.h)(a.notified_at):Object(C.h)(a.created_at),u.a.createElement(i.Fragment,{key:"decision-".concat(a.id)},e(a)||u.a.createElement(x.Label,{variant:"outline",icon:null===(s=w.d[a.decision])||void 0===s?void 0:s.icon,color:null===(o=w.d[a.decision])||void 0===o?void 0:o.color},V(r.formatMessage((null===(l=w.d[a.decision])||void 0===l?void 0:l.displayName)||Object(w.e)()))))]}])}),[])}},k=a(781),T=a(153),P=a(772),_=a(763),S=a(785),B=a(53),D=a(758),L=a(70),A=function(e,t){var a=e.name,n=e.requester,r=e.decision;return[].concat(E()(a?[{category:t.formatMessage(D.a.name),key:"name",chips:[{name:a,value:a}]}]:[]),E()(n?[{category:t.formatMessage(L.a.requesterColumn),key:"requester",chips:[{name:n,value:n}]}]:[]),E()(r&&r.length>0?[{category:t.formatMessage(L.a.statusColumn),key:"decision",chips:r.map((function(e){return{name:e,value:e}}))}]:[]))},N=a(746);function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U=function(e){return[{title:e.formatMessage(L.a.requestsIdColumn),transforms:[p.a,Object(d.a)(5)]},{title:e.formatMessage(D.a.name),transforms:[p.a,g.e,Object(d.a)(25)]},{title:e.formatMessage(L.a.requesterColumn),transforms:[p.a,g.e,Object(d.a)(20)]},{title:e.formatMessage(L.a.updatedColumn),transforms:[Object(d.a)(10)]},{title:e.formatMessage(L.a.statusColumn),transforms:[p.a,Object(d.a)(15)]}]},z=Object(_.a)((function(e,t,a,n){return t(!0),n&&n(),e(Object(j.f)(a)).then((function(){return t(!1)}))}),1e3),G=function(e,t){switch(t.type){case"setFetching":return J(J({},e),{},{isFetching:t.payload});case"setNameValue":return J(J({},e),{},{nameValue:t.payload});case"setRequesterValue":return J(J({},e),{},{requesterValue:t.payload});case"clearFilters":return J(J({},e),{},{requesterValue:"",nameValue:"",isFetching:!0});case"setFilteringFlag":return J(J({},e),{},{isFiltering:t.payload});default:return e}},H=function(e){var t=e.routes,a=e.persona,n=e.indexpath,s=e.actionResolver,o=Object(m.useSelector)((function(e){var t=e.requestReducer;return{requests:t.requests,sortBy:t.sortBy,filterValue:t.filterValue}}),m.shallowEqual),l=o.requests,c=l.data,p=l.meta,d=o.sortBy,g=o.filterValue,b=Object(i.useReducer)(G,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{nameValue:e,requesterValue:t,isOpen:!1,isFetching:!0,isFiltering:!1}}(g.name,g.requester)),v=r()(b,2),q=v[0],E=q.nameValue,M=q.isFetching,F=q.isFiltering,x=q.requesterValue,w=v[1],V=Object(i.useContext)(B.a).userRoles,_=Object(m.useDispatch)(),I=Object(y.a)(),J=Object(C.i)(V),H=Object(C.j)(V),K=function(e){if(H||a!==C.b)return w({type:"setFetching",payload:!0}),_(Object(j.f)(a,e)).then((function(){return w({type:"setFetching",payload:!1})})).catch((function(){return w({type:"setFetching",payload:!1})}));w({type:"setFetching",payload:!1})};Object(i.useEffect)((function(){_(Object(j.g)()),K(),Object(C.g)()}),[a]);var Q=function(e,t){var n=!1;return"name"===t?(w({type:"setNameValue",payload:e}),n=!0):"requester"===t&&(w({type:"setRequesterValue",payload:e}),n=!0),n||_(Object(j.h)(e,t)),z(_,(function(e){return w({type:"setFilteringFlag",payload:e})}),a,n&&function(){return _(Object(j.h)(e,t))})},W=function(){return w({type:"clearFilters"}),_(Object(j.a)()),K()};return u.a.createElement(i.Fragment,null,u.a.createElement(T.a,null,u.a.createElement(T.b,{title:I.formatMessage(N.a.approvalTitle)}),J&&u.a.createElement(P.a,null)),u.a.createElement(k.a,{sortBy:d,onSort:function(e,t,a,n){var r=n.property;return w({type:"setFetching",payload:!0}),_(Object(j.i)({index:t,direction:a,property:r})),K()},data:c,createRows:R(s),indexpath:n,columns:U(I),fetchData:K,routes:t,titlePlural:I.formatMessage(L.a.requests),titleSingular:I.formatMessage(L.a.request),pagination:p,handlePagination:K,filterValue:E,onFilterChange:function(e){return Q(e,"name")},isLoading:M||F,onCollapse:function(e,t,a){_(Object(j.expandRequest)(e)),t((function(t){return a(t,e)}))},renderEmptyState:function(){return u.a.createElement(S.a,{title:O()(g)?I.formatMessage(D.a.noResultsFound,{results:I.formatMessage(L.a.requests)}):I.formatMessage(D.a.noResultsFound),Icon:h.a,PrimaryAction:function(){return O()(g)?null:u.a.createElement(f.Button,{onClick:W,variant:"link"},I.formatMessage(D.a.clearAllFilters))},description:O()(g)?"":I.formatMessage(D.a.clearAllFiltersDescription)})},activeFiltersConfig:{filters:A({name:E,requester:x,decision:g.decision},I),onDelete:function(e,t,a){return a?W():(n=t,s=r()(n,1)[0],o=s.key,i=r()(s.chips,1)[0].value,u=["name","requester"].includes(o)?"":g[o].filter((function(e){return i!==e})),void Q(u,o));var n,s,o,i,u}},filterConfig:[{label:I.formatMessage(L.a.requesterColumn),filterValues:{placeholder:I.formatMessage(D.a.filterByTitle,{title:I.formatMessage(L.a.requesterColumn).toLowerCase()}),"aria-label":I.formatMessage(D.a.filterByTitle,{title:I.formatMessage(L.a.requesterColumn).toLowerCase()}),onChange:function(e,t){return Q(t,"requester")},value:x}},{label:I.formatMessage(L.a.statusColumn),type:"checkbox",filterValues:{placeholder:I.formatMessage(D.a.filterByTitle,{title:I.formatMessage(L.a.statusColumn).toLowerCase()}),"aria-label":I.formatMessage(D.a.filterByTitle,{title:I.formatMessage(L.a.statusColumn).toLowerCase()}),onChange:function(e,t){return Q(t,"decision")},value:g.decision,items:["approved","canceled","denied","error","undecided"].map((function(e){return{label:I.formatMessage(L.a[e]),value:e}}))}}]}))};H.propTypes={routes:c.a.func,persona:c.a.string,indexpath:c.a.shape({index:c.a.string}),actionResolver:c.a.func},H.defaultProps={indexpath:F.a.request,actionResolver:function(){return!1}};t.a=H},831:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(38),o=a(784),i=a(52);t.default=function(){return r.a.createElement(o.a,{persona:s.a,indexpath:i.a.allrequest})}},834:function(e,t,a){"use strict";a.r(t);var n=a(197),r=a.n(n),s=a(0),o=a.n(s),i=a(16),u=a(765),l=a(786),c=a(38),m=a(53),f=a(52),p=a(784),d=a(683),g=a.n(d),y=a(153),b=a(772),h=a(696),v=a(698),O=a(697),j=a(716),q=a(65),E=a(108),M=a(265),C=a(70),F=a(746),x=function(){var e=Object(s.useContext)(m.a).userRoles,t=Object(c.i)(e),a=Object(M.a)();return o.a.createElement(s.Fragment,null,o.a.createElement(y.a,null,o.a.createElement(y.b,{title:a.formatMessage(F.a.approvalTitle)}),t&&o.a.createElement(b.a,null)),o.a.createElement("div",{className:"pf-u-mt-xl"},o.a.createElement(h.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},o.a.createElement(O.EmptyStateIcon,{icon:g.a}),o.a.createElement(E.TextContent,null,o.a.createElement(q.Text,{component:q.TextVariants.h1},a.formatMessage(C.a.emptyRequestsTitle))),o.a.createElement(v.EmptyStateBody,null,a.formatMessage(C.a.emptyRequestsDescription))),o.a.createElement(j.EmptyStateSecondaryActions,null)))},w=a(779);t.default=function(){var e=Object(s.useContext)(m.a).userRoles,t=Object(c.i)(e),a=Object(c.j)(e);return a?o.a.createElement(p.a,{routes:function(){return o.a.createElement(s.Fragment,null,o.a.createElement(i.b,{exact:!0,path:f.a.requests.addComment,render:function(e){return o.a.createElement(l.a,r()({},e,{actionType:"Add Comment",postMethod:u.f}))}}),o.a.createElement(i.b,{exact:!0,path:f.a.requests.approve,render:function(e){return o.a.createElement(l.a,r()({},e,{actionType:"Approve",postMethod:u.f}))}}),o.a.createElement(i.b,{exact:!0,path:f.a.requests.deny,render:function(e){return o.a.createElement(l.a,r()({},e,{actionType:"Deny",postMethod:u.f}))}}))},persona:c.b,actionResolver:function(e){return e&&e.id&&(!(n=e)||!n.state||!Object(c.f)(n.state)||n.number_of_children>0||!a&&!t)?null:o.a.createElement(w.a,{commentLink:f.a.requests.addComment,approveLink:f.a.requests.approve,denyLink:f.a.requests.deny,request:e});var n}}):o.a.createElement(x,null)}}}]);
//# sourceMappingURL=../sourcemaps/requests~3c3c4c71.js.map