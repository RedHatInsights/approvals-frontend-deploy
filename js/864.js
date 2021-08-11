(self.webpackChunkapproval=self.webpackChunkapproval||[]).push([[864],{31004:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(86244).defineMessages)({name:{id:"tableToolbar.name",defaultMessage:"Name"},filterByTitle:{id:"tableToolbar.filterByTitle",defaultMessage:"Filter by {title}"},noResultsFound:{id:"tableToolbar.noResultsFound",defaultMessage:"No results found"},noResult:{id:"tableToolbar.noResult",defaultMessage:"No {results}"},clearAllFilters:{id:"tableToolbar.clearAllFilters",defaultMessage:"Clear all filters"},clearAllFiltersDescription:{id:"tableToolbar.clearAllFiltersDescription",defaultMessage:"No results match the filter criteria. Remove all filters or clear all filters to show results."},ariaLabel:{id:"tableToolbar.ariaLabel",defaultMessage:"{title} table"}})},51403:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(30624),a=r.n(n),i=r(45697),l=r.n(i),o=r(92223),s=r(219),c=r(86728),u=r(74183),p=r(97446),f=r(63540),m=r(20018),d=function(e){var t=e.title,r=e.icon,n=e.description,i=e.PrimaryAction,l=e.renderDescription;return a().createElement(s.ub,{className:"pf-u-ml-auto pf-u-mr-auto"},a().createElement(c.k,{icon:r}),a().createElement(m.TextContent,null,a().createElement(f.Text,{component:f.TextVariants.h1},t)),a().createElement(u.B,null,n,l&&l()),a().createElement(p.i,null,i&&a().createElement(i,null)))};d.propTypes={title:l().string.isRequired,icon:l().any.isRequired,isSearch:l().bool,description:l().string.isRequired,PrimaryAction:l().any,renderDescription:l().func};const g=d;var b=function(e){var t=e.title,r=e.icon,n=e.isSearch,i=e.description,l=e.PrimaryAction,s=e.renderDescription;return n?a().createElement(o.Z,{centered:!0,"aria-label":"No records"},a().createElement(g,{title:t,icon:r,description:i,PrimaryAction:l,renderDescription:s})):a().createElement(g,{title:t,icon:r,description:i,PrimaryAction:l,renderDescription:s})};b.propTypes={title:l().string.isRequired,icon:l().any.isRequired,isSearch:l().bool,description:l().string.isRequired,PrimaryAction:l().any,renderDescription:l().func};const y=b},30060:(e,t,r)=>{"use strict";r.d(t,{M:()=>h});var n=r(22122),a=r(85061),i=r(96156),l=r(30624),o=r.n(l),s=r(45697),c=r.n(s),u=r(22160),p=r(61338),f=r(76690),m=r(86896),d=r(54213),g=r(57277),b=r(31004);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t,r=e.columns,i=e.fetchData,s=e.toolbarButtons,c=e.actionResolver,y=e.routes,h=e.titlePlural,E=e.titleSingular,P=e.pagination,T=e.filterValue,Z=e.onFilterChange,R=e.isLoading,O=e.renderEmptyState,C=e.sortBy,S=e.onSort,D=e.activeFiltersConfig,w=e.filterConfig,F=e.rows,M=e.ouiaId,j=(0,m.Z)(),q={itemCount:P.count,page:(0,p.FZ)(P.limit,P.offset),perPage:P.limit,onSetPage:function(e,t){return i(v(v({},P),{},{offset:(0,p.SJ)(t,P.limit)}))},onPerPageSelect:function(e,t){return i(v(v({},P),{},{limit:t}))},isDisabled:R};return o().createElement(d.Z,{type:"content","page-type":"tab-".concat(h),id:"tab-".concat(h)},y(),(0!==F.length||(null==D||null===(t=D.filters)||void 0===t?void 0:t.length)>0)&&o().createElement(g.Z,(0,n.Z)({className:"pf-u-p-lg ins__approval__primary_toolbar",pagination:q},s&&{actionsConfig:{dropdownProps:{position:"right"},actions:[s()]}},{filterConfig:{items:[{label:j.formatMessage(b.Z.name),filterValues:{id:"filter-by-name",placeholder:j.formatMessage(b.Z.filterByTitle,{title:E}),"aria-label":j.formatMessage(b.Z.filterByTitle,{title:E}),onChange:function(e,t){return Z(t)},value:T}}].concat((0,a.Z)(w))},activeFiltersConfig:D})),R&&o().createElement(f.Eo,null),R||0!==F.length?o().createElement(l.Fragment,null,!R&&o().createElement(u.Table,{"aria-label":j.formatMessage(b.Z.ariaLabel,{title:h}),rows:F,cells:r,actionResolver:c,className:"pf-u-pt-0 vertical-align-inherit",sortBy:C,onSort:S,ouiaId:M},o().createElement(u.TableHeader,null),o().createElement(u.TableBody,null)),P.count>0&&o().createElement(g.Z,{className:"pf-u-pl-lg pf-u-pr-lg ins__approval__primary_toolbar",pagination:v(v({},q),{},{dropDirection:"up",variant:"bottom",isCompact:!1,className:"pf-u-pr-0"})})):O())};h.propTypes={columns:c().array.isRequired,toolbarButtons:c().func,fetchData:c().func.isRequired,pagination:c().shape({limit:c().number,offset:c().number,count:c().number}),titlePlural:c().string,titleSingular:c().string,routes:c().func,actionResolver:c().func,filterValue:c().string,onFilterChange:c().func,isLoading:c().bool,renderEmptyState:c().func,sortBy:c().object,onSort:c().func,activeFiltersConfig:c().object,filterConfig:c().array,rows:c().array,ouiaId:c().string},h.defaultProps={requests:[],isLoading:!1,pagination:p.he,routes:function(){return null},renderEmptyState:function(){return null},filterConfig:[]}},12824:(e,t,r)=>{"use strict";r.d(t,{H:()=>d});var n=r(30624),a=r.n(n),i=r(45697),l=r.n(i),o=r(334),s=r(98378),c=r(82819),u=r(18061),p=r(49214),f=r(86896),m=[{eventKey:0,message:p.Z.myRequests,name:"/requests"},{eventKey:1,message:p.Z.allRequests,name:"/allrequests"},{eventKey:2,message:p.Z.approvalProccess,name:"/workflows"}],d=function(e){var t=e.tabItems,r=void 0===t?m:t,n=(0,f.Z)(),i=(0,o.useHistory)(),l=(0,o.useLocation)(),p=l.pathname,d=l.search,g=r.find((function(e){var t=e.name;return p.includes(t)}));return a().createElement(s.mQ,{className:"pf-u-mt-sm",activeKey:g?g.eventKey:0,onSelect:function(e,t){return i.push({pathname:r[t].name,search:d})}},r.map((function(e){return a().createElement(c.O,{title:a().createElement(u.T,null,n.formatMessage(e.message)),key:e.eventKey,eventKey:e.eventKey,name:e.name})})))};d.propTypes={tabItems:l().array}},57666:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(99166);const a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{onlyResolvesLast:!1};return(0,n.Z)(e,t,r)}}}]);
//# sourceMappingURL=../sourcemaps/864.849e08000dc5d2bd6320.js.map