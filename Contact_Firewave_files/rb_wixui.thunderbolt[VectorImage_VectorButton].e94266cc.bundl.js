!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[VectorImage_VectorButton]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[VectorImage_VectorButton]"]=t(require("react")):e["rb_wixui.thunderbolt[VectorImage_VectorButton]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){"use strict";n.r(a),n.d(a,{components:function(){return V}});var e=n(448),t=n.n(e),r=n(5329);function o(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=o(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}var i=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n};const l=e=>Object.entries(e).reduce(((e,[t,r])=>(t.includes("data-")&&(e[t]=r),e)),{});const c=new RegExp("<%= compId %>","g"),u=(e,t)=>e.replace(c,t),s=13,d=27;function p(e){return t=>{t.keyCode===e&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.click())}}const f=p(32),b=p(s),g=e=>{b(e),f(e)},v=(p(d),"wixui-"),m=(e,...t)=>{const r=[];return e&&r.push(`${v}${e}`),t.forEach((e=>{e&&(r.push(`${v}${e}`),r.push(e))})),r.join(" ")},y="<svg data-failed />",h=e=>e===y,k={root:"linkElement"},C=(e,n)=>{const{href:a,role:o,target:i,rel:c,className:u="",children:s,linkPopupId:d,anchorDataId:p,anchorCompId:v,tabIndex:m,dataTestId:y=k.root,title:h,onClick:C,onDoubleClick:x,onMouseEnter:I,onMouseLeave:M,onFocusCapture:O,onBlurCapture:w,"aria-live":S,"aria-disabled":_,"aria-label":E,"aria-labelledby":L,"aria-pressed":D,"aria-expanded":P,"aria-describedby":j,"aria-haspopup":T}=e,B=void 0!==e.activateByKey?e.activateByKey:(e=>e?"SpaceOrEnter":"Space")(d);let A;switch(B){case"Enter":A=b;break;case"Space":A=f;break;case"SpaceOrEnter":A=g;break;default:A=void 0}return void 0!==a?r.createElement("a",t()({},l(e),{"data-testid":y,"data-popupid":d,"data-anchor":p,"data-anchor-comp-id":v,href:a||void 0,target:i,role:d?"button":o,rel:c,className:u,onKeyDown:A,"aria-live":S,"aria-disabled":_,"aria-label":E,"aria-labelledby":L,"aria-pressed":D,"aria-expanded":P,"aria-haspopup":T,"aria-describedby":j,title:h,onClick:C,onMouseEnter:I,onMouseLeave:M,onDoubleClick:x,onFocusCapture:O,onBlurCapture:w,ref:n,tabIndex:d?0:m}),s):r.createElement("div",t()({},l(e),{"data-testid":y,className:u,tabIndex:m,"aria-label":E,"aria-labelledby":L,"aria-haspopup":T,"aria-disabled":_,"aria-expanded":P,title:h,role:o,onClick:C,onDoubleClick:x,onMouseEnter:I,onMouseLeave:M,ref:n}),s)};var x=r.forwardRef(C);var I={root:"vector-image"},M="u9k3ts",O="WQ4fSJ",w="aizuI7",S="TcoJIb",_="elfY4_",E="R8rhQA";var L=e=>{const{id:n,svgContent:a,shouldScaleStroke:o,withShadow:c,withStroke:s,link:d,ariaLabel:p,ariaExpanded:f,ariaAttributes:b,className:g="",customClassNames:v=[],containerClass:y="",onClick:k,onDblClick:C,onMouseEnter:L,onMouseLeave:D,hasPlatformClickHandler:P,onKeyDown:j,toggle:T,reportBiOnClick:B,tag:A="div"}=e,N=P||k,$=!(!(R=d)||0===Object.keys(R).length&&R.constructor===Object);var R;const V=i(w,{[S]:!o,[_]:c,[E]:s,[O]:N},g),K=r.useRef(null);r.useEffect((()=>{let e;const t=K.current;return T&&(e=()=>T(!1),null==t||t.addEventListener("click",e)),()=>{e&&(null==t||t.removeEventListener("click",e))}}),[K,T]);const U=r.useMemo((()=>{if(!a)return a;const e=((e,t)=>{const r={},n=e.replace(/\sid="([^"<]+)"/g,((e,n)=>{const a=n.endsWith(t)?n:`${n}_${t}`;return r[n]=a,` id="${a}"`}));return Object.keys(r).reduce(((e,n)=>e.replace(new RegExp(`(${n})(?!_${t})`,"g"),r[n])),n)})(a,n),t=null!=b&&b.label?((e,t)=>{let r=e;const n=/aria-label="[^"]*"/;return r=e.match(n)?e.replace(n,`aria-label="${t}"`):e.replace(/(<svg[^>]*)>/,`$1 aria-label="${t}">`),r})(e,null==b?void 0:b.label):e;return u(t,n)}),[n,a,null==b?void 0:b.label]),F=h(U)&&"undefined"==typeof window?null:r.createElement("div",{"data-testid":"svgRoot-"+n,className:V,dangerouslySetInnerHTML:{__html:U}}),G=(({reportBiOnClick:e,onClick:t})=>(0,r.useCallback)((r=>{e?.(r),t?.(r)}),[e,t]))({onClick:k,reportBiOnClick:B});return r.createElement(A,t()({id:n},l(e),((e={})=>{const t=e.tabIndex??e.tabindex??void 0;return void 0!==t?{tabIndex:Number(t)}:{}})(e.a11y),{className:i(y,g,m(I.root,...v)),onClick:N||$?G:void 0,onDoubleClick:C,onMouseEnter:L,onMouseLeave:D,onKeyDown:j,ref:K,"aria-expanded":f}),$?r.createElement(x,t()({className:M,"aria-label":p},d),F):F)};var D=e=>r.createElement(L,t()({},e,{tag:"button"}));const P=e=>e.replace(/([A-Z])/g,(e=>`-${e.toLowerCase()}`)),j=e=>"linkPopupId"in e,T=(e,t)=>{if(j(e))return e.linkPopupId;{const{pagesMap:r,mainPageId:n}=t||{};if(!r)return;const a=new URL(e.href??"");let o=Object.values(r).find((({pageUriSEO:e})=>!!e&&a.pathname?.includes(e)));return o||(o=n?r[n]:void 0),o?.pageId}},B=e=>{if(void 0!==e)return null===e?"None":e.type},A=(e,t)=>{if(!e?.type)return;const{type:r}=e;switch(r){case"AnchorLink":return e.anchorDataId;case"DocumentLink":return e.docInfo?.name;case"PageLink":const r=T(e,t);return r&&t?.pagesMap?.[r]?.title;default:return e.href}},N=(e,t,r)=>{const{link:n,value:a,details:o,actionName:i,elementType:l,trackClicksAnalytics:c,pagesMetadata:u,...s}=t;if(!c)return;const d=u&&{...u,pagesMap:window.viewerModel?.siteFeaturesConfigs?.router?.pagesMap},p=((e,t)=>{if(!e?.type)return;const{type:r}=e;switch(r){case"AnchorLink":return(e=>"anchorDataId"in e&&("SCROLL_TO_TOP"===e.anchorDataId||"SCROLL_TO_BOTTOM"===e.anchorDataId))(e)?void 0:{id:e.anchorDataId};case"DocumentLink":return{id:e.docInfo?.docId};case"PageLink":return{id:T(e,t),isLightbox:j(e)};default:return}})(n,d),f=o||p?JSON.stringify({...p,...o}):void 0;e({src:76,evid:1113,...{...s,bl:navigator.language,url:window.location.href,details:f,elementType:l??"Unknown",actionName:i??B(n),value:a??A(n,d)}},{endpoint:"pa",...r})};var $;!function(e){e.Text="Text",e.Menu="Menu",e.Image="Image",e.Input="Input",e.Login="Login",e.Button="Button",e.Social="Social",e.Gallery="Gallery",e.Community="Community",e.Decorative="Decorative",e.MenuAndSearch="MenuAndSearch",e.MenuAndAnchor="MenuAndAnchor"}($||($={}));var R;const V={VectorImage_VectorButton:{component:D,controller:(R=e=>{let{stateValues:t,mapperProps:r}=e;const{compId:n,language:a,mainPageId:o,fullNameCompType:i,trackClicksAnalytics:l,...c}=r,{toggle:u,reportBi:s}=t,d=e=>{const{link:t}=c;N(s,{link:t,language:a,trackClicksAnalytics:l,elementType:i,pagesMetadata:{mainPageId:o},element_id:null!=n?n:e.currentTarget.id,elementGroup:$.Decorative})};return u?{...c,toggle:u,reportBiOnClick:d,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||u(!1)}}:{...c,reportBiOnClick:d}},{useComponentProps:(e,t,r)=>{const n=(e=>({...e,updateStyles:t=>{const r=Object.entries(t).reduce(((e,[t,r])=>{return{...e,[(n=t,n.startsWith("--")?t:P(t))]:void 0===r?null:r};var n}),{});e.updateStyles(r)}}))(r);return R({mapperProps:e,stateValues:t,controllerUtils:n})}})}}}(),a}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[VectorImage_VectorButton].e94266cc.bundle.min.js.map