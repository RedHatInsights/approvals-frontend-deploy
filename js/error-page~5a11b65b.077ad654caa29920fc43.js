(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{742:function(e,a,t){"use strict";var o=(0,t(206).defineMessages)({approvalTitle:{id:"commonMessages.approvalTitle",defaultMessage:"Approval"},product:{id:"commonMessages.product",defaultMessage:"Product"},portfolio:{id:"commonMessages.portfolio",defaultMessage:"Portfolio"},platform:{id:"commonMessages.platform",defaultMessage:"Platform"},order:{id:"commonMessages.order",defaultMessage:"Order"},unknown:{id:"commonMessages.unknown",defaultMessage:"Unknown"},actions:{id:"commonMessages.actions",defaultMessage:"Actions"},noRecords:{id:"commonMessages.noRecords",defaultMessage:"No records"},delete:{id:"commonMessages.delete",defaultMessage:"Delete"},deleting:{id:"commonMessages.deleting",defaultMessage:"Deleting"},cancel:{id:"commonMessages.cancel",defaultMessage:"Cancel"},save:{id:"commonMessages.save",defaultMessage:"Save"}});a.a=o},821:function(e,a,t){"use strict";t.r(a);var o=t(0),s=t.n(o),n=t(16),r=t(207),i=t(685),l=t(689),d=t(690),c=t(691),m=t(729),u=t(728),g=t.n(u),p=t(157),f=t(281),M=(0,t(206).defineMessages)({unathorizedTitle:{id:"commonApiError.401Title",defaultMessage:"Unauthorized"},unathorizedDescription:{id:"commonApiError.401Description",defaultMessage:"You are not authorized to access this section"},forbiddenTitle:{id:"commonApiError.403Title",defaultMessage:"You do not have access to Approval"},forbiddenDescription:{id:"commonApiError.403Description",defaultMessage:"Contact your organization administrator for more information"},returnBack:{id:"commonApiError.returnBack",defaultMessage:"Return to previous page"},goToLanding:{id:"commonApiError.goToLanding",defaultMessage:"Go to landing page"}}),E=t(742),v={"/401":M.unathorizedTitle,"/403":M.forbiddenTitle},h={"/401":M.unathorizedDescription,"/403":M.forbiddenDescription};a.default=function(){var e=Object(f.a)(),a=Object(n.h)().pathname,t=Object(n.g)();return s.a.createElement(o.Fragment,null,s.a.createElement(p.a,{className:"pf-u-pb-md"},s.a.createElement(p.b,{title:e.formatMessage(E.a.approvalTitle)})),s.a.createElement("div",{className:"pf-u-mb-xl"},s.a.createElement(l.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},s.a.createElement("div",null,s.a.createElement(d.EmptyStateIcon,{icon:g.a})),s.a.createElement("div",null,s.a.createElement(i.Title,{headingLevel:"h1",size:"lg"},e.formatMessage(v[a]))),s.a.createElement(c.EmptyStateBody,null,e.formatMessage(h[a])),s.a.createElement(m.EmptyStatePrimary,null,document.referrer?s.a.createElement(r.Button,{variant:"primary",onClick:function(){return t.goBack()}},e.formatMessage(M.returnBack)):s.a.createElement(r.Button,{variant:"primary",component:"a",href:"."},e.formatMessage(M.goToLanding))))))}}}]);
//# sourceMappingURL=../sourcemaps/error-page~5a11b65b.js.map