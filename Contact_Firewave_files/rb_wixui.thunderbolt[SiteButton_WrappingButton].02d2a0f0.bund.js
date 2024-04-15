!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[SiteButton_WrappingButton]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[SiteButton_WrappingButton]"]=t(require("react")):e["rb_wixui.thunderbolt[SiteButton_WrappingButton]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return function(){"use strict";r.r(n),r.d(n,{components:function(){return H}});var e=r(448),t=r.n(e),a=r(5329),o=r.n(a);const i=13,l=27;function s(e){return t=>{t.keyCode===e&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.click())}}const u=s(32),c=s(i),d=e=>{c(e),u(e)},p=(s(l),e=>Object.entries(e).reduce(((e,[t,a])=>(t.includes("data-")&&(e[t]=a),e)),{}));const f=(e,t)=>e?{"data-comp":t,"data-aid":t}:{},b={root:"linkElement"},m=(e,r)=>{const{href:n,role:o,target:i,rel:l,className:s="",children:f,linkPopupId:m,anchorDataId:y,anchorCompId:v,tabIndex:k,dataTestId:h=b.root,title:g,onClick:C,onDoubleClick:x,onMouseEnter:I,onMouseLeave:B,onFocusCapture:P,onBlurCapture:M,"aria-live":w,"aria-disabled":L,"aria-label":O,"aria-labelledby":S,"aria-pressed":D,"aria-expanded":E,"aria-describedby":T,"aria-haspopup":_}=e,N=void 0!==e.activateByKey?e.activateByKey:(e=>e?"SpaceOrEnter":"Space")(m);let F;switch(N){case"Enter":F=c;break;case"Space":F=u;break;case"SpaceOrEnter":F=d;break;default:F=void 0}return void 0!==n?a.createElement("a",t()({},p(e),{"data-testid":h,"data-popupid":m,"data-anchor":y,"data-anchor-comp-id":v,href:n||void 0,target:i,role:m?"button":o,rel:l,className:s,onKeyDown:F,"aria-live":w,"aria-disabled":L,"aria-label":O,"aria-labelledby":S,"aria-pressed":D,"aria-expanded":E,"aria-haspopup":_,"aria-describedby":T,title:g,onClick:C,onMouseEnter:I,onMouseLeave:B,onDoubleClick:x,onFocusCapture:P,onBlurCapture:M,ref:r,tabIndex:m?0:k}),f):a.createElement("div",t()({},p(e),{"data-testid":h,className:s,tabIndex:k,"aria-label":O,"aria-labelledby":S,"aria-haspopup":_,"aria-disabled":L,"aria-expanded":E,title:g,role:o,onClick:C,onDoubleClick:x,onMouseEnter:I,onMouseLeave:B,ref:r}),f)};var y=a.forwardRef(m);const v="buttonElement",k="linkElement";let h=function(e){return e.Link="Link",e.Button="Button",e}({});const g=()=>{},C=(e,t)=>e===h.Link&&!(e=>Boolean(e&&(e.href||e.linkPopupId)))(t),x=(e,t)=>e===h.Link&&t,I=(e,t)=>{var r,n,o;const{id:i,className:l,customClassNames:s=[],autoFocus:u,label:c="",skin:d,hasPlatformClickHandler:b=!1,link:m,ariaLabel:y,isQaMode:v,fullNameCompType:k,reportBiOnClick:I,onFocus:B,onBlur:P,onClick:M=g,onDblClick:w=g,onMouseEnter:L=g,onMouseLeave:O=g,ariaAttributes:S,a11y:D={}}=e;let{isDisabled:E=!1}=e;!0!==E&&(E=!1);const T=b?h.Button:h.Link,{tabIndex:_,...N}=(({pressed:e,expanded:t,haspopup:a,label:r,live:n,relevant:o,current:i,owns:l,controls:s,roleDescription:u,hidden:c,disabled:d,describedBy:p,labelledBy:f,errorMessage:b,atomic:m,role:y,busy:v,...k}={})=>{const h=k.tabIndex??k.tabindex,g={};return r&&(g["aria-label"]=r),n&&(g["aria-live"]=n),i&&(g["aria-current"]=i),e&&(g["aria-pressed"]=e),"boolean"==typeof c&&(g["aria-hidden"]=c),"boolean"==typeof t&&(g["aria-expanded"]=t),"boolean"==typeof d&&(g["aria-disabled"]=d),"boolean"==typeof m&&(g["aria-atomic"]=m),"boolean"==typeof v&&(g["aria-busy"]=v),"string"==typeof o&&(g["aria-relevant"]=o),"string"==typeof l&&(g["aria-owns"]=l),"string"==typeof s&&(g["aria-controls"]=s),"string"==typeof u&&(g["aria-roledescription"]=u),a&&(g["aria-haspopup"]=a),"number"==typeof h&&(g.tabIndex=h),y&&(g.role=y),p&&(g["aria-describedby"]=p),f&&(g["aria-labelledby"]=f),b&&(g["aria-errormessage"]=b),g})({...S,...D,disabled:null!=(r=D.disabled)?r:E,label:null!=(n=null!=(o=null==S?void 0:S.label)?o:D.label)?n:y}),F=((e,t,a,r)=>a?-1:e===h.Button?r:C(e,t)?null!=r?r:0:r)(T,m,E,_),j=((e,t,a)=>C(e,t)||x(e,a)?"button":void 0)(T,m,E),A=m&&{href:E?void 0:m.href,target:m.target,rel:m.rel,linkPopupId:m.linkPopupId,anchorDataId:m.anchorDataId,anchorCompId:m.anchorCompId,activateByKey:"Enter"},R=(({reportBiOnClick:e,onClick:t})=>(0,a.useCallback)((a=>{e?.(a),t?.(a)}),[e,t]))({reportBiOnClick:I,onClick:E?g:M});return a.createElement(d,{wrapperProps:{...p(e),className:l,id:i,role:j,tabIndex:F,"aria-disabled":N["aria-disabled"],onClick:R,onDoubleClick:E?g:w,onMouseEnter:L,onMouseLeave:O,...f(v,k)},autoFocus:u,elementType:T,linkProps:A,a11yProps:N,label:c,onFocus:E?void 0:B,onBlur:E?void 0:P,ref:t,customClassNames:s})};var B=a.forwardRef(I);const P="wixui-",M=(e,...t)=>{const a=[];return e&&a.push(`${P}${e}`),t.forEach((e=>{e&&(a.push(`${P}${e}`),a.push(e))})),a.join(" ")};function w(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=w(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var L=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=w(e))&&(r&&(r+=" "),r+=t);return r};var O={root:"button",buttonLabel:"button__label"},S="PlZyDq";const D=(e,a)=>{let{elementType:r,linkProps:n,a11yProps:i,className:l,children:s,autoFocus:u,onBlur:c,onFocus:p,disabled:f}=e;const b=o().useRef(null);o().useImperativeHandle(a,(()=>({focus:()=>{var e;return null==(e=b.current)?void 0:e.focus()},blur:()=>{var e;return null==(e=b.current)?void 0:e.blur()}})));const m=L(l,S);switch(r){case h.Link:return o().createElement(y,t()({},n||{},i,{className:m,ref:b,"data-testid":k,onFocusCapture:p,onBlurCapture:c}),s);case h.Button:return o().createElement("button",t()({},i,{ref:b,"data-testid":v,className:m,autoFocus:u,onFocus:p,onBlur:c,disabled:f,onKeyDown:d}),s);default:return null}};var E=o().forwardRef(D);const T=(e,r)=>{let{wrapperProps:n,linkProps:o,a11yProps:i,elementType:l,skinsStyle:s,label:u,autoFocus:c,customClassNames:d=[],onFocus:p,onBlur:f}=e;return a.createElement("div",t()({},n,{className:L(n.className,s.root)}),a.createElement(E,{disabled:!!i["aria-disabled"]||void 0,linkProps:o,a11yProps:i,elementType:l,className:L(s.link,M(O.root,...d)),autoFocus:c,onFocus:p,onBlur:f,ref:r},a.createElement("span",{className:L(s.label,M(O.buttonLabel))},u)))};var _=a.forwardRef(T),N={link:"VU4Mnk",root:"UHSxqn",label:"w4Vxx6"};const F=a.forwardRef(((e,r)=>a.createElement(_,t()({},e,{skinsStyle:N,ref:r})))),j=(e,r)=>a.createElement(B,t()({},e,{skin:F,ref:r}));var A=a.forwardRef(j);const R=e=>e.replace(/([A-Z])/g,(e=>`-${e.toLowerCase()}`)),U=e=>"linkPopupId"in e,K=(e,t)=>{if(U(e))return e.linkPopupId;{const{pagesMap:a,mainPageId:r}=t||{};if(!a)return;const n=new URL(e.href??"");let o=Object.values(a).find((({pageUriSEO:e})=>!!e&&n.pathname?.includes(e)));return o||(o=r?a[r]:void 0),o?.pageId}},W=e=>{if(void 0!==e)return null===e?"None":e.type},$=(e,t)=>{if(!e?.type)return;const{type:a}=e;switch(a){case"AnchorLink":return e.anchorDataId;case"DocumentLink":return e.docInfo?.name;case"PageLink":const a=K(e,t);return a&&t?.pagesMap?.[a]?.title;default:return e.href}},q=(e,t,a)=>{const{link:r,value:n,details:o,actionName:i,elementType:l,trackClicksAnalytics:s,pagesMetadata:u,...c}=t;if(!s)return;const d=u&&{...u,pagesMap:window.viewerModel?.siteFeaturesConfigs?.router?.pagesMap},p=((e,t)=>{if(!e?.type)return;const{type:a}=e;switch(a){case"AnchorLink":return(e=>"anchorDataId"in e&&("SCROLL_TO_TOP"===e.anchorDataId||"SCROLL_TO_BOTTOM"===e.anchorDataId))(e)?void 0:{id:e.anchorDataId};case"DocumentLink":return{id:e.docInfo?.docId};case"PageLink":return{id:K(e,t),isLightbox:U(e)};default:return}})(r,d),f=o||p?JSON.stringify({...p,...o}):void 0;e({src:76,evid:1113,...{...c,bl:navigator.language,url:window.location.href,details:f,elementType:l??"Unknown",actionName:i??W(r),value:n??$(r,d)}},{endpoint:"pa",...a})};var V;!function(e){e.Text="Text",e.Menu="Menu",e.Image="Image",e.Input="Input",e.Login="Login",e.Button="Button",e.Social="Social",e.Gallery="Gallery",e.Community="Community",e.Decorative="Decorative",e.MenuAndSearch="MenuAndSearch",e.MenuAndAnchor="MenuAndAnchor"}(V||(V={}));var G;const H={SiteButton_WrappingButton:{component:A,controller:(G=e=>{let{mapperProps:t,stateValues:a}=e;const{trackClicksAnalytics:r,compId:n,language:o,mainPageId:i,...l}=t;return{...l,reportBiOnClick:e=>{const{fullNameCompType:t,label:s,link:u,isDisabled:c}=l,{reportBi:d}=a;q(d,{link:u,language:o,trackClicksAnalytics:r,elementTitle:s,elementType:t,pagesMetadata:{mainPageId:i},elementGroup:V.Button,details:{isDisabled:null!=c&&c},element_id:null!=n?n:e.currentTarget.id})}}},{useComponentProps:(e,t,a)=>{const r=(e=>({...e,updateStyles:t=>{const a=Object.entries(t).reduce(((e,[t,a])=>{return{...e,[(r=t,r.startsWith("--")?t:R(t))]:void 0===a?null:a};var r}),{});e.updateStyles(a)}}))(a);return G({mapperProps:e,stateValues:t,controllerUtils:r})}})}}}(),n}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[SiteButton_WrappingButton].02d2a0f0.bundle.min.js.map