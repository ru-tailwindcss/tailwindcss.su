_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=s,e.useAmp=function(){return s(r.default.useContext(i.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},i=n("lwAK");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,o=t.hybrid,r=void 0!==o&&o,i=t.hasQuery,s=void 0!==i&&i;return n||r&&s}},0:function(t,e,n){n("GcxT"),t.exports=n("nOHt")},"3o5W":function(t,e){t.exports={tailwindVersion:"2.0.2"}},"5fIB":function(t,e,n){var o=n("7eYB");t.exports=function(t){if(Array.isArray(t))return o(t)}},"8Kt/":function(t,e,n){"use strict";n("oI91");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var o,r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var i=o?Object.getOwnPropertyDescriptor(t,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=t[r]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),i=(o=n("Xuae"))&&o.__esModule?o:{default:o},s=n("lwAK"),a=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var f=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,o={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var s=r.key.slice(r.key.indexOf("$")+1);t.has(s)?i=!1:t.add(s)}switch(r.type){case"title":case"base":e.has(r.type)?i=!1:e.add(r.type);break;case"meta":for(var a=0,c=f.length;a<c;a++){var u=f[a];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var l=r.props[u],d=o[u]||new Set;d.has(l)?i=!1:(d.add(l),o[u]=d)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}function p(t){var e=t.children,n=(0,r.useContext)(s.AmpStateContext),o=(0,r.useContext)(a.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:h,headManager:o,inAmpMode:(0,c.isInAmpMode)(n)},e)}p.rewind=function(){};var v=p;e.default=v},GcxT:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return it}));var o=n("q1tI"),r=n.n(o),i=(n("WF7/"),n("lfCk"),n("YFqc")),s=n.n(i),a=n("fhQF"),c=n("II4a"),u=n("iuhU"),l=n("nOHt"),d=n.n(l),f=n("F7AD"),h=r.a.createElement;function p(t){var e=t.navIsOpen,n=t.onNavToggle;return h(r.a.Fragment,null,h("div",{className:"sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex-none flex"},h("div",{className:"flex-none pl-4 sm:pl-6 xl:pl-8 flex items-center border-b border-gray-200 lg:border-b-0 lg:w-60 xl:w-72"},h(s.a,{href:"/"},h("a",{className:"overflow-hidden w-10 md:w-auto",onContextMenu:function(t){t.preventDefault(),d.a.push("/brand")}},h("span",{className:"sr-only"},"Tailwind CSS home page"),h(f.a,{className:"w-auto h-6"})))),h("div",{className:"flex-auto border-b border-gray-200 h-18 flex items-center justify-between px-4 sm:px-6 lg:mx-6 lg:px-0 xl:mx-8"},h(c.a,null),h("div",{className:"flex items-center space-x-6 ml-auto"},h(a.a,{className:"hidden lg:block"}),h("a",{href:"https://github.com/tailwindlabs/tailwindcss",target:"_blank",className:"text-gray-400 hover:text-gray-500 transition-colors duration-200"},h("span",{className:"sr-only"},"Tailwind CSS \u043d\u0430 GitHub"),h("svg",{width:"20",height:"20",viewBox:"0 0 16 16",fill:"currentColor"},h("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"}))),h("a",{href:"https://t.me/tailwindcss_rus",target:"_blank",className:"text-gray-400 hover:text-gray-500 transition-colors duration-200"},h("span",{className:"sr-only"},"Tailwind CSS \u0432 Telegram"),h("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},h("path",{d:"m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z"})))))),h("button",{type:"button",className:"fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 text-white block lg:hidden",onClick:function(){return n(!e)}},h("span",{className:"sr-only"},"Open site navigation"),h("svg",{width:"24",height:"24",fill:"none",className:Object(u.a)("absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform",{"opacity-0 scale-80":e})},h("path",{d:"M4 8h16M4 16h16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),h("svg",{width:"24",height:"24",fill:"none",className:Object(u.a)("absolute top-1/2 left-1/2 -mt-3 -ml-3 transition duration-300 transform",{"opacity-0 scale-80":!e})},h("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))))}var v,m=n("ap0H"),g=n("8Kt/"),b=n.n(g),y="/_next/static/media/twitter-large-card.85c0ff9e455da585949ff0aa50981857.jpg",w=[],E="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(v||(v={}));var _,x=function(){function t(t,e,n,o){return this.x=t,this.y=e,this.width=n,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),T=function(t){return t instanceof SVGElement&&"getBBox"in t},O=function(t){if(T(t)){var e=t.getBBox(),n=e.width,o=e.height;return!n&&!o}var r=t,i=r.offsetWidth,s=r.offsetHeight;return!(i||s||t.getClientRects().length)},C=function(t){var e,n,o=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(o&&t instanceof o.Element)},R="undefined"!==typeof window?window:{},I=new WeakMap,k=/auto|scroll/,N=/^tb|vertical/,S=/msie|trident/i.test(R.navigator&&R.navigator.userAgent),L=function(t){return parseFloat(t||"0")},M=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},z=Object.freeze({devicePixelContentBoxSize:M(),borderBoxSize:M(),contentBoxSize:M(),contentRect:new x(0,0,0,0)}),B=function(t,e){if(void 0===e&&(e=!1),I.has(t)&&!e)return I.get(t);if(O(t))return I.set(t,z),z;var n=getComputedStyle(t),o=T(t)&&t.ownerSVGElement&&t.getBBox(),r=!S&&"border-box"===n.boxSizing,i=N.test(n.writingMode||""),s=!o&&k.test(n.overflowY||""),a=!o&&k.test(n.overflowX||""),c=o?0:L(n.paddingTop),u=o?0:L(n.paddingRight),l=o?0:L(n.paddingBottom),d=o?0:L(n.paddingLeft),f=o?0:L(n.borderTopWidth),h=o?0:L(n.borderRightWidth),p=o?0:L(n.borderBottomWidth),v=d+u,m=c+l,g=(o?0:L(n.borderLeftWidth))+h,b=f+p,y=a?t.offsetHeight-b-t.clientHeight:0,w=s?t.offsetWidth-g-t.clientWidth:0,E=r?v+g:0,_=r?m+b:0,C=o?o.width:L(n.width)-E-w,R=o?o.height:L(n.height)-_-y,B=C+v+w+g,A=R+m+y+b,D=Object.freeze({devicePixelContentBoxSize:M(Math.round(C*devicePixelRatio),Math.round(R*devicePixelRatio),i),borderBoxSize:M(B,A,i),contentBoxSize:M(C,R,i),contentRect:new x(d,c,C,R)});return I.set(t,D),D},A=function(t,e,n){var o=B(t,n),r=o.borderBoxSize,i=o.contentBoxSize,s=o.devicePixelContentBoxSize;switch(e){case v.DEVICE_PIXEL_CONTENT_BOX:return s;case v.BORDER_BOX:return r;default:return i}},D=function(t){var e=B(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},P=function(t){if(O(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},j=function(){var t=1/0,e=[];w.forEach((function(n){if(0!==n.activeTargets.length){var o=[];n.activeTargets.forEach((function(e){var n=new D(e.target),r=P(e.target);o.push(n),e.lastReportedSize=A(e.target,e.observedBox),r<t&&(t=r)})),e.push((function(){n.callback.call(n.observer,o,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,o=e;n<o.length;n++){(0,o[n])()}return t},F=function(t){w.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(P(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},H=function(){var t=0;for(F(t);w.some((function(t){return t.activeTargets.length>0}));)t=j(),F(t);return w.some((function(t){return t.skippedTargets.length>0}))&&function(){var t;"function"===typeof ErrorEvent?t=new ErrorEvent("error",{message:E}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=E),window.dispatchEvent(t)}(),t>0},U=[],W=function(t){if(!_){var e=0,n=document.createTextNode("");new MutationObserver((function(){return U.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),_=function(){n.textContent=""+(e?e--:e++)}}U.push(t),_()},V=0,q={attributes:!0,characterData:!0,childList:!0,subtree:!0},X=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],K=function(t){return void 0===t&&(t=0),Date.now()+t},G=!1,J=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!G){G=!0;var n,o=K(t);n=function(){var n=!1;try{n=H()}finally{if(G=!1,t=o-K(),!V)return;n?e.run(1e3):t>0?e.run(t):e.start()}},W((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,q)};document.body?e():R.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),X.forEach((function(e){return R.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),X.forEach((function(e){return R.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),Y=function(t){!V&&t>0&&J.start(),!(V+=t)&&J.stop()},Q=function(){function t(t,e){this.target=t,this.observedBox=e||v.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=A(this.target,this.observedBox,!0);return t=this.target,T(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),$=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},Z=new WeakMap,tt=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},et=function(){function t(){}return t.connect=function(t,e){var n=new $(t,e);Z.set(t,n)},t.observe=function(t,e,n){var o=Z.get(t),r=0===o.observationTargets.length;tt(o.observationTargets,e)<0&&(r&&w.push(o),o.observationTargets.push(new Q(e,n&&n.box)),Y(1),J.schedule())},t.unobserve=function(t,e){var n=Z.get(t),o=tt(n.observationTargets,e),r=1===n.observationTargets.length;o>=0&&(r&&w.splice(w.indexOf(n),1),n.observationTargets.splice(o,1),Y(-1))},t.disconnect=function(t){var e=this,n=Z.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),nt=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");et.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!C(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");et.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!C(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");et.unobserve(this,t)},t.prototype.disconnect=function(){et.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}(),ot=(n("Wr5T"),r.a.createElement);"ResizeObserver"in window||(window.ResizeObserver=nt);var rt=new function(t){var e=function(t,e){Object.keys(e).forEach((function(n){t[n]=e[n]}))},n={size:2,color:"#29e",className:"bar-of-progress",delay:80};t&&e(n,t);var o,r,i={position:"fixed",top:0,left:0,margin:0,padding:0,border:"none",borderRadius:0,backgroundColor:"currentColor",zIndex:1e4,height:"number"==typeof n.size?n.size+"px":n.size,color:n.color,opacity:0,width:"0%"},s={opacity:1,width:"99%",transition:"width 10s cubic-bezier(0.1, 0.05, 0, 1)"},a={opacity:0,width:"100%",transition:"width 0.1s ease-out, opacity 0.5s ease 0.2s"},c={opacity:.4,boxShadow:"3px 0 8px",height:"100%"};this.start=function(){r&&r.parentNode&&r.parentNode.removeChild(r),(r=document.body.appendChild(document.createElement("div"))).className=n.className+" stopped",e(r.style,i);var t=r.appendChild(document.createElement("div"));t.className="glow",e(t.style,c),null!=o&&clearTimeout(o),o=setTimeout((function(){o=null,r.className=n.className+" started",e(r.style,s)}),n.delay),r.scrollTop=0},this.finish=function(){null!=o&&(clearTimeout(o),o=null),r&&(r.className=n.className+" finished",e(r.style,a))}}({size:2,color:"#22D3EE",className:"bar-of-progress",delay:100});function it(t){var e,n,i,s=t.Component,a=t.pageProps,c=t.router,u=Object(o.useState)(!1),l=u[0],f=u[1];Object(o.useEffect)((function(){if(l)return d.a.events.on("routeChangeComplete",t),function(){d.a.events.off("routeChangeComplete",t)};function t(){f(!1)}}),[l]);var h=(null===(e=s.layoutProps)||void 0===e?void 0:e.Layout)||o.Fragment,v=(null===(n=s.layoutProps)||void 0===n?void 0:n.Layout)?{layoutProps:s.layoutProps,navIsOpen:l,setNavIsOpen:f}:{},g=(null===(i=s.layoutProps)||void 0===i?void 0:i.meta)||{},w=g.metaDescription||g.description||"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u043e CSS-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0443 Tailwind.";return c.pathname.startsWith("/examples/")?ot(s,a):ot(r.a.Fragment,null,ot(m.a,{suffix:"Tailwind CSS"},g.metaTitle||g.title),ot(b.a,null,ot("meta",{key:"twitter:card",name:"twitter:card",content:"summary_large_image"}),ot("meta",{key:"twitter:site",name:"twitter:site",content:"@tailwindcss"}),ot("meta",{key:"twitter:description",name:"twitter:description",content:w}),ot("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat(y)}),ot("meta",{key:"twitter:creator",name:"twitter:creator",content:"@tailwindcss"}),ot("meta",{key:"og:url",property:"og:url",content:"https://tailwindcss.su".concat(c.pathname)}),ot("meta",{key:"og:type",property:"og:type",content:"article"}),ot("meta",{key:"og:description",property:"og:description",content:w}),ot("meta",{key:"og:image",property:"og:image",content:"https://tailwindcss.su".concat(y)})),"/"!==c.pathname&&ot(p,{navIsOpen:l,onNavToggle:function(t){return f(t)}}),ot(h,v,ot(s,a)))}rt.start(),rt.finish(),d.a.events.on("routeChangeStart",rt.start),d.a.events.on("routeChangeComplete",(function(){rt.finish(),window.scrollTo(0,0)})),d.a.events.on("routeChangeError",rt.finish)},"WF7/":function(t,e,n){},Wr5T:function(t,e){!function(){"use strict";if("object"===typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var t=function(t){for(var e=window.document,n=r(e);n;)n=r(e=n.ownerDocument);return e}(),e=[],n=null,o=null;s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return n||(n=function(t,n){o=t&&n?f(t,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},e.forEach((function(t){t._checkForIntersections()}))}),n},s._resetCrossOriginUpdater=function(){n=null,o=null},s.prototype.observe=function(t){if(!this._observationTargets.some((function(e){return e.element==t}))){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter((function(e){return e.element!=t})),this._unmonitorIntersections(t.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},s.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))},s.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},s.prototype._monitorIntersections=function(e){var n=e.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(e)){var o=this._checkForIntersections,i=null,s=null;if(this.POLL_INTERVAL?i=n.setInterval(o,this.POLL_INTERVAL):(a(n,"resize",o,!0),a(e,"scroll",o,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(s=new n.MutationObserver(o)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push((function(){var t=e.defaultView;t&&(i&&t.clearInterval(i),c(t,"resize",o,!0)),c(e,"scroll",o,!0),s&&s.disconnect()})),e!=(this.root&&this.root.ownerDocument||t)){var u=r(e);u&&this._monitorIntersections(u.ownerDocument)}}},s.prototype._unmonitorIntersections=function(e){var n=this._monitoringDocuments.indexOf(e);if(-1!=n){var o=this.root&&this.root.ownerDocument||t;if(!this._observationTargets.some((function(t){var n=t.element.ownerDocument;if(n==e)return!0;for(;n&&n!=o;){var i=r(n);if((n=i&&i.ownerDocument)==e)return!0}return!1}))){var i=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),i(),e!=o){var s=r(e);s&&this._unmonitorIntersections(s.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var e=0;e<t.length;e++)t[e]()},s.prototype._checkForIntersections=function(){if(this.root||!n||o){var t=this._rootIsInDom(),e=t?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(o){var r=o.element,s=l(r),a=this._rootContainsTarget(r),c=o.entry,u=t&&a&&this._computeTargetAndRootIntersection(r,s,e),d=o.entry=new i({time:window.performance&&performance.now&&performance.now(),target:r,boundingClientRect:s,rootBounds:n&&!this.root?null:e,intersectionRect:u});c?t&&a?this._hasCrossedThreshold(c,d)&&this._queuedEntries.push(d):c&&c.isIntersecting&&this._queuedEntries.push(d):this._queuedEntries.push(d)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(e,r,i){if("none"!=window.getComputedStyle(e).display){for(var s=r,a=p(e),c=!1;!c&&a;){var d=null,h=1==a.nodeType?window.getComputedStyle(a):{};if("none"==h.display)return null;if(a==this.root||9==a.nodeType)if(c=!0,a==this.root||a==t)n&&!this.root?!o||0==o.width&&0==o.height?(a=null,d=null,s=null):d=o:d=i;else{var v=p(a),m=v&&l(v),g=v&&this._computeTargetAndRootIntersection(v,m,i);m&&g?(a=v,d=f(m,g)):(a=null,s=null)}else{var b=a.ownerDocument;a!=b.body&&a!=b.documentElement&&"visible"!=h.overflow&&(d=l(a))}if(d&&(s=u(d,s)),!s)break;a=a&&p(a)}return s}},s.prototype._getRootRect=function(){var e;if(this.root)e=l(this.root);else{var n=t.documentElement,o=t.body;e={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(e)},s.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map((function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100})),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},s.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!==i<o)return!0}},s.prototype._rootIsInDom=function(){return!this.root||h(t,this.root)},s.prototype._rootContainsTarget=function(e){return h(this.root||t,e)&&(!this.root||this.root.ownerDocument==e.ownerDocument)},s.prototype._registerInstance=function(){e.indexOf(this)<0&&e.push(this)},s.prototype._unregisterInstance=function(){var t=e.indexOf(this);-1!=t&&e.splice(t,1)},window.IntersectionObserver=s,window.IntersectionObserverEntry=i}function r(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(e){return null}}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=d(t.rootBounds),this.boundingClientRect=d(t.boundingClientRect),this.intersectionRect=d(t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function s(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=function(t,e){var n=null;return function(){n||(n=setTimeout((function(){t(),n=null}),e))}}(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map((function(t){return t.value+t.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function a(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function u(t,e){var n=Math.max(t.top,e.top),o=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),i=Math.min(t.right,e.right),s=i-r,a=o-n;return s>=0&&a>=0&&{top:n,bottom:o,left:r,right:i,width:s,height:a}||null}function l(t){var e;try{e=t.getBoundingClientRect()}catch(n){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function d(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function f(t,e){var n=e.top-t.top,o=e.left-t.left;return{top:n,left:o,height:e.height,width:e.width,bottom:n+e.height,right:o+e.width}}function h(t,e){for(var n=e;n;){if(n==t)return!0;n=p(n)}return!1}function p(e){var n=e.parentNode;return 9==e.nodeType&&e!=t?r(e):n&&11==n.nodeType&&n.host?n.host:n&&n.assignedSlot?n.assignedSlot.parentNode:n}}()},Xuae:function(t,e,n){"use strict";var o=n("mPvQ"),r=n("/GRZ"),i=n("i2R6"),s=(n("qXWd"),n("48fX")),a=n("tCBg"),c=n("T0f4");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=c(t);if(e){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),d=function(t){s(n,t);var e=u(n);function n(t){var i;return r(this,n),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(o(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);e.default=d},YFqc:function(t,e,n){t.exports=n("cTJO")},ap0H:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("q1tI"),r=n.n(o),i=n("8Kt/"),s=n.n(i),a=r.a.createElement;function c(t){var e=t.suffix,n=t.children+(e?" - ".concat(e):"");return a(s.a,null,a("title",{key:"title"},n),a("meta",{key:"twitter:title",name:"twitter:title",content:n}),a("meta",{key:"og:title",property:"og:title",content:n}))}},cTJO:function(t,e,n){"use strict";var o=n("zoAU"),r=n("7KCV");e.__esModule=!0,e.default=void 0;var i,s=r(n("q1tI")),a=n("elyg"),c=n("nOHt"),u=new Map,l=window.IntersectionObserver,d={};var f=function(t,e){var n=i||(l?i=new l((function(t){t.forEach((function(t){if(u.has(t.target)){var e=u.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(i.unobserve(t.target),u.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(t),u.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}u.delete(t)}):function(){}};function h(t,e,n,o){(0,a.isLocalURL)(e)&&(t.prefetch(e,n,o).catch((function(t){0})),d[e+"%"+n]=!0)}var p=function(t){var e=!1!==t.prefetch,n=(0,c.useRouter)(),r=n&&n.pathname||"/",i=s.default.useMemo((function(){var e=(0,a.resolveHref)(r,t.href,!0),n=o(e,2),i=n[0],s=n[1];return{href:i,as:t.as?(0,a.resolveHref)(r,t.as):s||i}}),[r,t.href,t.as]),u=i.href,p=i.as,v=t.children,m=t.replace,g=t.shallow,b=t.scroll,y=t.locale;"string"===typeof v&&(v=s.default.createElement("a",null,v));var w=s.Children.only(v),E=w&&"object"===typeof w&&w.ref,_=s.default.useRef(),x={ref:s.default.useCallback((function(t){(_.current&&(_.current(),_.current=void 0),e&&l&&t&&t.tagName&&(0,a.isLocalURL)(u))&&(d[u+"%"+p]||(_.current=f(t,(function(){h(n,u,p,{locale:"undefined"!==typeof y?y:n&&n.locale})}))));E&&("function"===typeof E?E(t):"object"===typeof E&&(E.current=t))}),[e,E,u,p,n,y]),onClick:function(t){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(t),t.defaultPrevented||function(t,e,n,o,r,i,s,c){("A"!==t.currentTarget.nodeName||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&(0,a.isLocalURL)(n))&&(t.preventDefault(),null==s&&(s=o.indexOf("#")<0),e[r?"replace":"push"](n,o,{shallow:i,locale:c}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())})))}(t,n,u,p,m,g,b,y)}};return e&&(x.onMouseEnter=function(t){(0,a.isLocalURL)(u)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(t),h(n,u,p,{priority:!0}))}),(t.passHref||"a"===w.type&&!("href"in w.props))&&(x.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof y?y:n&&n.locale,n&&n.defaultLocale))),s.default.cloneElement(w,x)};e.default=p},fhQF:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var o=n("q1tI"),r=n.n(o),i=n("3o5W"),s=n("iuhU"),a=r.a.createElement;function c(t){var e=t.className,n=Object(o.useRef)();function r(t){t.preventDefault(),"v1"===n.current.value&&(window.location="https://v1.tailwindcss.com/")}return a("form",{onSubmit:r,className:Object(s.a)("relative",e)},a("label",null,a("span",{className:"sr-only"},"Tailwind CSS Version"),a("select",{ref:n,className:"appearance-none block bg-transparent pr-7 py-1 text-gray-500 font-medium text-sm focus:outline-none focus:text-gray-900 transition-colors duration-200",onChange:r},a("option",{value:"v2"},"v",i.tailwindVersion))),a("svg",{className:"w-5 h-5 text-gray-400 absolute top-1/2 right-0 -mt-2.5 pointer-events-none",fill:"currentColor"},a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"})))}},iuhU:function(t,e,n){"use strict";function o(t){var e,n,r="";if("string"===typeof t||"number"===typeof t)r+=t;else if("object"===typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=o(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}e.a=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=o(t))&&(r&&(r+=" "),r+=e);return r}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lfCk:function(t,e,n){!function(){"use strict";function t(t){var e=!0,n=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}function s(t){var e=t.type,n=t.tagName;return!("INPUT"!==n||!r[e]||t.readOnly)||"TEXTAREA"===n&&!t.readOnly||!!t.isContentEditable}function a(t){t.classList.contains("focus-visible")||(t.classList.add("focus-visible"),t.setAttribute("data-focus-visible-added",""))}function c(t){t.hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added"))}function u(n){n.metaKey||n.altKey||n.ctrlKey||(i(t.activeElement)&&a(t.activeElement),e=!0)}function l(t){e=!1}function d(t){i(t.target)&&(e||s(t.target))&&a(t.target)}function f(t){i(t.target)&&(t.target.classList.contains("focus-visible")||t.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),c(t.target))}function h(t){"hidden"===document.visibilityState&&(n&&(e=!0),p())}function p(){document.addEventListener("mousemove",m),document.addEventListener("mousedown",m),document.addEventListener("mouseup",m),document.addEventListener("pointermove",m),document.addEventListener("pointerdown",m),document.addEventListener("pointerup",m),document.addEventListener("touchmove",m),document.addEventListener("touchstart",m),document.addEventListener("touchend",m)}function v(){document.removeEventListener("mousemove",m),document.removeEventListener("mousedown",m),document.removeEventListener("mouseup",m),document.removeEventListener("pointermove",m),document.removeEventListener("pointerdown",m),document.removeEventListener("pointerup",m),document.removeEventListener("touchmove",m),document.removeEventListener("touchstart",m),document.removeEventListener("touchend",m)}function m(t){t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,v())}document.addEventListener("keydown",u,!0),document.addEventListener("mousedown",l,!0),document.addEventListener("pointerdown",l,!0),document.addEventListener("touchstart",l,!0),document.addEventListener("visibilitychange",h,!0),p(),t.addEventListener("focus",d,!0),t.addEventListener("blur",f,!0),t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host?t.host.setAttribute("data-js-focus-visible",""):t.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!==typeof window&&"undefined"!==typeof document){var e;window.applyFocusVisiblePolyfill=t;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!==typeof document&&t(document)}()},lwAK:function(t,e,n){"use strict";var o;e.__esModule=!0,e.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});e.AmpStateContext=r},mPvQ:function(t,e,n){var o=n("5fIB"),r=n("rlHP"),i=n("KckH"),s=n("kG2m");t.exports=function(t){return o(t)||r(t)||i(t)||s()}},oI91:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},rePB:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},wx14:function(t,e,n){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return o}))}},[[0,0,2,1,13]]]);