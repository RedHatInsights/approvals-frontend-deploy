(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{2285:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmptyStatePrimary=void 0;var r=p(n(1)),a=function(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}}n.default=t,e&&e.set(t,n);return n}(n(0)),o=n(2),l=p(n(397));function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function p(t){return t&&t.__esModule?t:{default:t}}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=function(t){var e=t.children,n=t.className,r=void 0===n?"":n,i=c(t,["children","className"]);return a.createElement("div",f({className:(0,o.css)(l.default.emptyStatePrimary,r)},i),e)};e.EmptyStatePrimary=s,s.propTypes={className:r.default.string,children:r.default.node.isRequired}},2290:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(29),l=n(92),i=n(391),p=n(421),f=n(422),c=n(423),s=n(2285),m=n(465),u=n.n(m),y=n(64),d={"/401":"Unauthorized","/403":"You do not have access to Approval"},g={"/401":"You are not authorized to access this section","/403":"Contact your organization administrator for more information"};e.default=function(){var t=Object(o.h)().pathname,e=Object(o.g)().history;return a.a.createElement(r.Fragment,null,a.a.createElement(y.a,{className:"pf-u-pb-md"},a.a.createElement(y.b,{title:"Approval"})),a.a.createElement("div",{className:"pf-u-mb-xl"},a.a.createElement(p.EmptyState,{className:"pf-u-ml-auto pf-u-mr-auto"},a.a.createElement("div",null,a.a.createElement(f.EmptyStateIcon,{icon:u.a})),a.a.createElement("div",null,a.a.createElement(i.Title,{size:"lg"},d[t])),a.a.createElement(c.EmptyStateBody,null,g[t]),a.a.createElement(s.EmptyStatePrimary,null,document.referrer?a.a.createElement(l.Button,{variant:"primary",onClick:function(){return e.back()}},"Return to previous page"):a.a.createElement(l.Button,{variant:"primary",component:"a",href:"."},"Go to landing page")))))}},391:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Title=e.TitleLevel=void 0;var r,a=f(n(1)),o=function(t){if(t&&t.__esModule)return t;var e=p();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}}n.default=t,e&&e.set(t,n);return n}(n(0)),l=n(2),i=f(n(413));function p(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return p=function(){return t},t}function f(t){return t&&t.__esModule?t:{default:t}}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}e.TitleLevel=r,function(t){t.h1="h1",t.h2="h2",t.h3="h3",t.h4="h4",t.h5="h5",t.h6="h6"}(r||(e.TitleLevel=r={}));var m=function(t){var e=t.size,n=t.className,r=void 0===n?"":n,a=t.children,p=void 0===a?"":a,f=t.headingLevel,m=void 0===f?"h1":f,u=s(t,["size","className","children","headingLevel"]);return o.createElement(m,c({},u,{className:(0,l.css)(i.default.title,(0,l.getModifier)(i.default,e),r)}),p)};e.Title=m,m.propTypes={size:a.default.oneOfType([a.default.any,a.default.oneOf(["xs"]),a.default.oneOf(["sm"]),a.default.oneOf(["md"]),a.default.oneOf(["lg"]),a.default.oneOf(["xl"]),a.default.oneOf(["2xl"]),a.default.oneOf(["3xl"]),a.default.oneOf(["4xl"])]).isRequired,children:a.default.node,className:a.default.string,headingLevel:a.default.oneOf(["h1","h2","h3","h4","h5","h6"])}},397:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(460),e.default={emptyState:"pf-c-empty-state",button:"pf-c-button",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",emptyStateBody:"pf-c-empty-state__body",emptyStateIcon:"pf-c-empty-state__icon",title:"pf-c-title",modifiers:{primary:"pf-m-primary",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",redhatFont:"pf-m-redhat-font"}}},413:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(442),e.default={title:"pf-c-title",modifiers:{"4xl":"pf-m-4xl","3xl":"pf-m-3xl","2xl":"pf-m-2xl",xl:"pf-m-xl",lg:"pf-m-lg",md:"pf-m-md",redhatFont:"pf-m-redhat-font"}}},421:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmptyState=e.EmptyStateVariant=void 0;var r,a=f(n(1)),o=function(t){if(t&&t.__esModule)return t;var e=p();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}}n.default=t,e&&e.set(t,n);return n}(n(0)),l=n(2),i=f(n(397));function p(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return p=function(){return t},t}function f(t){return t&&t.__esModule?t:{default:t}}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}e.EmptyStateVariant=r,function(t){t.xl="xl",t.large="large",t.small="small",t.full="full"}(r||(e.EmptyStateVariant=r={}));var m={xl:"xl",large:"lg",small:"sm",full:""},u=function(t){var e=t.children,n=t.className,a=void 0===n?"":n,p=t.variant,f=void 0===p?r.large:p,u=s(t,["children","className","variant"]),y=m[f];return o.createElement("div",c({className:(0,l.css)(i.default.emptyState,(0,l.getModifier)(i.default,y,null),a)},u),e)};e.EmptyState=u,u.propTypes={className:a.default.string,children:a.default.node.isRequired,variant:a.default.oneOf(["small","large","full","xl"])}},422:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmptyStateIcon=e.IconSize=void 0;var r,a=f(n(1)),o=function(t){if(t&&t.__esModule)return t;var e=p();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}}n.default=t,e&&e.set(t,n);return n}(n(0)),l=n(2),i=f(n(397));function p(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return p=function(){return t},t}function f(t){return t&&t.__esModule?t:{default:t}}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}e.IconSize=r,function(t){t.sm="sm",t.md="md",t.lg="lg",t.xl="xl"}(r||(e.IconSize=r={}));var m=function(t){var e=t.className,n=void 0===e?"":e,r=t.icon,a=void 0===r?null:r,p=t.component,f=void 0===p?null:p,m=t.variant,u=void 0===m?"icon":m,y=s(t,["className","icon","component","variant"]),d=(0,l.css)(i.default.emptyStateIcon,n);return"icon"===u?o.createElement(a,c({className:d},y,{"aria-hidden":"true"})):o.createElement("div",{className:d},o.createElement(f,null))};e.EmptyStateIcon=m,m.propTypes={color:a.default.string,size:a.default.oneOf(["sm","md","lg","xl"]),title:a.default.string,className:a.default.string,icon:a.default.oneOfType([a.default.string,a.default.any]),component:a.default.any,variant:a.default.oneOf(["icon","container"])}},423:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EmptyStateBody=void 0;var r=p(n(1)),a=function(t){if(t&&t.__esModule)return t;var e=i();if(e&&e.has(t))return e.get(t);var n={};if(null!=t){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}}n.default=t,e&&e.set(t,n);return n}(n(0)),o=n(2),l=p(n(397));function i(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return i=function(){return t},t}function p(t){return t&&t.__esModule?t:{default:t}}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=function(t){var e=t.children,n=t.className,r=void 0===n?"":n,i=c(t,["children","className"]);return a.createElement("div",f({className:(0,o.css)(l.default.emptyStateBody,r)},i),e)};e.EmptyStateBody=s,s.propTypes={children:r.default.node,className:r.default.string}},442:function(t,e,n){var r=n(5),a=n(443);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);t.exports=a.locals||{}},443:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".pf-c-title {\n  --pf-c-title--FontFamily: var(--pf-global--FontFamily--heading--sans-serif);\n  --pf-c-title--m-4xl--LineHeight: var(--pf-global--LineHeight--sm);\n  --pf-c-title--m-4xl--FontSize: var(--pf-global--FontSize--4xl);\n  --pf-c-title--m-4xl--FontWeight: var(--pf-global--FontWeight--normal);\n  --pf-c-title--m-3xl--LineHeight: var(--pf-global--LineHeight--sm);\n  --pf-c-title--m-3xl--FontSize: var(--pf-global--FontSize--3xl);\n  --pf-c-title--m-3xl--FontWeight: var(--pf-global--FontWeight--normal);\n  --pf-c-title--m-2xl--LineHeight: var(--pf-global--LineHeight--sm);\n  --pf-c-title--m-2xl--FontSize: var(--pf-global--FontSize--2xl);\n  --pf-c-title--m-2xl--FontWeight: var(--pf-global--FontWeight--normal);\n  --pf-c-title--m-xl--LineHeight: var(--pf-global--LineHeight--md);\n  --pf-c-title--m-xl--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-title--m-xl--FontWeight: var(--pf-global--FontWeight--normal);\n  --pf-c-title--m-lg--LineHeight: var(--pf-global--LineHeight--md);\n  --pf-c-title--m-lg--FontSize: var(--pf-global--FontSize--lg);\n  --pf-c-title--m-lg--FontWeight: var(--pf-global--FontWeight--semi-bold);\n  --pf-c-title--m-md--LineHeight: var(--pf-global--LineHeight--md);\n  --pf-c-title--m-md--FontSize: var(--pf-global--FontSize--md);\n  --pf-c-title--m-md--FontWeight: var(--pf-global--FontWeight--semi-bold);\n  font-family: var(--pf-c-title--FontFamily);\n  word-break: break-word; }\n\n.pf-c-title.pf-m-4xl {\n  font-size: var(--pf-c-title--m-4xl--FontSize);\n  font-weight: var(--pf-c-title--m-4xl--FontWeight);\n  line-height: var(--pf-c-title--m-4xl--LineHeight); }\n\n.pf-c-title.pf-m-3xl {\n  font-size: var(--pf-c-title--m-3xl--FontSize);\n  font-weight: var(--pf-c-title--m-3xl--FontWeight);\n  line-height: var(--pf-c-title--m-3xl--LineHeight); }\n\n.pf-c-title.pf-m-2xl {\n  font-size: var(--pf-c-title--m-2xl--FontSize);\n  font-weight: var(--pf-c-title--m-2xl--FontWeight);\n  line-height: var(--pf-c-title--m-2xl--LineHeight); }\n\n.pf-c-title.pf-m-xl {\n  font-size: var(--pf-c-title--m-xl--FontSize);\n  font-weight: var(--pf-c-title--m-xl--FontWeight);\n  line-height: var(--pf-c-title--m-xl--LineHeight); }\n\n.pf-c-title.pf-m-lg {\n  font-size: var(--pf-c-title--m-lg--FontSize);\n  font-weight: var(--pf-c-title--m-lg--FontWeight);\n  line-height: var(--pf-c-title--m-lg--LineHeight); }\n\n.pf-c-title.pf-m-md {\n  font-size: var(--pf-c-title--m-md--FontSize);\n  font-weight: var(--pf-c-title--m-md--FontWeight);\n  line-height: var(--pf-c-title--m-md--LineHeight); }\n\n.pf-m-redhat-font .pf-c-title {\n  --pf-c-title--m-lg--FontWeight: var(--pf-global--FontWeight--normal);\n  --pf-c-title--m-md--FontWeight: var(--pf-global--FontWeight--normal); }\n",""])},460:function(t,e,n){var r=n(5),a=n(461);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);t.exports=a.locals||{}},461:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".pf-c-empty-state {\n  --pf-c-empty-state--Padding: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-global--spacer--lg);\n  --pf-c-empty-state__icon--FontSize: var(--pf-global--icon--FontSize--xl);\n  --pf-c-empty-state__icon--Color: var(--pf-global--icon--Color--light);\n  --pf-c-empty-state__body--MarginTop: var(--pf-global--spacer--md);\n  --pf-c-empty-state__body--Color: var(--pf-global--Color--200);\n  --pf-c-empty-state--c-button--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-global--spacer--sm);\n  --pf-c-empty-state__secondary--MarginTop: var(--pf-global--spacer--xl);\n  --pf-c-empty-state__secondary--MarginRight: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--MarginBottom: calc(var(--pf-global--spacer--xs) * -1);\n  --pf-c-empty-state__secondary--c-button--MarginRight: var(--pf-global--spacer--xs);\n  --pf-c-empty-state__secondary--c-button--MarginBottom: var(--pf-global--spacer--xs);\n  --pf-c-empty-state--m-sm--MaxWidth: 25rem;\n  --pf-c-empty-state--m-lg--MaxWidth: 37.5rem;\n  --pf-c-empty-state--m-xl__body--FontSize: var(--pf-global--FontSize--xl);\n  --pf-c-empty-state--m-xl__body--MarginTop: var(--pf-global--spacer--lg);\n  --pf-c-empty-state--m-xl__icon--MarginBottom: var(--pf-global--spacer--xl);\n  --pf-c-empty-state--m-xl__icon--FontSize: 6.25rem;\n  --pf-c-empty-state--m-xl--c-button__secondary--MarginTop: var(--pf-global--spacer--md);\n  padding: var(--pf-c-empty-state--Padding);\n  text-align: center; }\n\n.pf-c-empty-state > .pf-c-button.pf-m-primary,\n.pf-c-empty-state .pf-c-empty-state__primary {\n  margin-top: var(--pf-c-empty-state--c-button--MarginTop); }\n\n.pf-c-empty-state > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n.pf-c-empty-state .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n  margin-top: var(--pf-c-empty-state--c-button__secondary--MarginTop); }\n\n.pf-c-empty-state.pf-m-sm {\n  max-width: var(--pf-c-empty-state--m-sm--MaxWidth); }\n\n.pf-c-empty-state.pf-m-lg {\n  max-width: var(--pf-c-empty-state--m-lg--MaxWidth); }\n\n.pf-c-empty-state.pf-m-xl {\n  --pf-c-empty-state__body--MarginTop: var(--pf-c-empty-state--m-xl__body--MarginTop);\n  --pf-c-empty-state__icon--MarginBottom: var(--pf-c-empty-state--m-xl__icon--MarginBottom);\n  --pf-c-empty-state__icon--FontSize: var(--pf-c-empty-state--m-xl__icon--FontSize); }\n\n.pf-c-empty-state.pf-m-xl .pf-c-empty-state__body {\n  font-size: var(--pf-c-empty-state--m-xl__body--FontSize); }\n\n.pf-c-empty-state.pf-m-xl > .pf-c-button.pf-m-primary + .pf-c-empty-state__secondary,\n.pf-c-empty-state.pf-m-xl .pf-c-empty-state__primary + .pf-c-empty-state__secondary {\n  --pf-c-empty-state--c-button__secondary--MarginTop: var(--pf-c-empty-state--m-xl--c-button__secondary--MarginTop); }\n\n.pf-c-empty-state__icon {\n  margin-bottom: var(--pf-c-empty-state__icon--MarginBottom);\n  font-size: var(--pf-c-empty-state__icon--FontSize);\n  color: var(--pf-c-empty-state__icon--Color); }\n\n.pf-c-empty-state__body {\n  margin-top: var(--pf-c-empty-state__body--MarginTop);\n  color: var(--pf-c-empty-state__body--Color); }\n\n.pf-c-empty-state__secondary {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: var(--pf-c-empty-state__secondary--MarginTop);\n  margin-right: var(--pf-c-empty-state__secondary--MarginRight);\n  margin-bottom: var(--pf-c-empty-state__secondary--MarginBottom); }\n\n.pf-c-empty-state__secondary > .pf-c-button {\n  margin-right: var(--pf-c-empty-state__secondary--c-button--MarginRight);\n  margin-bottom: var(--pf-c-empty-state__secondary--c-button--MarginBottom); }\n\n.pf-m-redhat-font .pf-c-empty-state > .pf-c-title.pf-m-lg {\n  font-size: var(--pf-global--FontSize--xl); }\n",""])},465:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.LockIconConfig=void 0;var r,a=(r=n(10))&&r.__esModule?r:{default:r};var o={name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:"",xOffset:"",transform:""};e.LockIconConfig=o;var l=(0,a.default)(o);e.default=l}}]);
//# sourceMappingURL=../sourcemaps/error-page.js.map