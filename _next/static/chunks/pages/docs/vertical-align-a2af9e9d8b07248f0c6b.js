_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[163],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("rePB"),s=a("q1tI"),o=a.n(s),i=a("98BF"),r=a("Zb5r"),c=a("AOjV"),l=o.a.createElement;function p(e){var t=e.plugin,a=e.name,s=i.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var o=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),p="By default, ".concat(s.length?"only ".concat(Object(r.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(a," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:p}}),l("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",l("code",null,t)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(r.a)(o)," variants:"),l(c.a,{path:"variants.extend",before:"...",add:Object(n.a)({},t,o)}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),s=a.n(n),o=(a("Btb4"),a("AI3G")),i=a("iuhU"),r=s.a.createElement;function c(e){var t=e.value;return"string"===typeof t?r("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),t.map((function(e,a){return r(n.Fragment,{key:a},r(c,{value:e}),a===t.length-1?null:r("span",{className:"token punctuation"},", "))})),r("span",{className:"token punctuation"},"]")):"boolean"===typeof t?r("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var t=e.edits,a=e.indent,s=void 0===a?"":a,o=e.type,l=void 0===o?"inserted":o;return r("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(e,a){return r(n.Fragment,{key:a},r("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(o=e)?o:"'".concat(o,"'"),r("span",{className:"token operator"},":")," ",r(c,{value:t[e]}),r("span",{className:"token punctuation"},","),"\n");var o})))}function p(e){var t=e.path,a=e.add,s=e.remove,i=e.before,c=e.after;return t="string"===typeof t?t.split("."):t,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return r(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n")})),i&&Object(o.a)(i).map((function(e,a){return r(n.Fragment,{key:a},"  ".repeat(t.length+2),r("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&r(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&r(l,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),r("span",{className:"token unchanged"},c&&Object(o.a)(c).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,a){return r(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")})),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),s=a("p+I8"),o=a("GAX2").default;e.exports=(e,t,a)=>{const i=[];return function e(t,a,r){let c;(a=a||{}).indent=a.indent||"\t",r=r||"",c=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),r).replace(new RegExp(c.indent,"g"),r+a.indent)};if(-1!==i.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";i.push(t);const n="["+c.newLine+t.map((n,s)=>{const o=t.length-1===s?c.newLine:","+c.newLineOrSpace;let i=e(n,a,r+a.indent);return a.transform&&(i=a.transform(t,s,i)),c.indent+i+o}).join("")+c.pad+"]";return i.pop(),l(n)}if(s(t)){let n=Object.keys(t).concat(o(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";i.push(t);const s="{"+c.newLine+n.map((s,o)=>{const i=n.length-1===o?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,a);let d=e(t[s],a,r+a.indent);return a.transform&&(d=a.transform(t,s,d)),c.indent+String(u)+": "+d+i}).join("")+c.pad+"}";return i.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},EL43:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/vertical-align",function(){return a("yLNH")}])},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((function(t,a,n){return 0===n?a:n===e.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a)}),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),s=a.n(n),o=a("8Kt/"),i=a.n(o),r=s.a.createElement;function c(e){var t=e.suffix,a=e.children+(t?" - ".concat(t):"");return r(i.a,null,r("title",{key:"title"},a),r("meta",{key:"twitter:title",name:"twitter:title",content:a}),r("meta",{key:"og:title",property:"og:title",content:a}))}},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return f}));var n=a("wx14"),s=a("q1tI"),o=a.n(s),i=a("iuhU"),r=a("ZMKu"),c=o.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){var t=Object(s.useRef)(),a=Object(s.useState)(!1),o=a[0],i=a[1],r=Object(s.useState)({}),l=r[0],p=r[1];return Object(s.useEffect)((function(){if(o){var e=new window.ResizeObserver(a);return a(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function a(){p({height:t.current.contentDocument.body.scrollHeight})}}),[o]),c("iframe",Object(n.a)({},e,{ref:t,onLoad:function(){return i(!0)},style:l}))}function m(e){var t=e.color,a=e.snippet;return c("div",{className:Object(i.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},c("pre",{className:Object(i.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g(e){var t=e.preview,a=e.src,n=e.snippet,s=e.previewClassName,o=e.color,r=void 0===o?"gray":o;return c("div",{className:"relative overflow-hidden mb-8"},t?c("div",{className:Object(i.a)("rounded-t-xl overflow-hidden",p[r],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):c(b,{src:a,className:Object(i.a)("w-full rounded-t-xl",p[r])}),c(m,{color:r,snippet:n}))}function f(e){var t=e.preview,a=e.src,n=e.previewClassName,o=e.snippet,l=e.color,g=void 0===l?"gray":l,f=e.min,h=void 0!==f&&f,v=Object(s.useRef)(),O=Object(r.h)(0),j=Object(s.useRef)(),k=Object(s.useState)(!1),N=k[0],w=k[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){O.set(0)}));return e.observe(v.current),function(){e.disconnect()}}),[]),c("div",{className:"relative mb-8"},c("div",{ref:v,className:"relative rounded-t-xl ".concat(u[g])},c("div",{className:h?"md:w-88":void 0},c(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(O,(function(e){return-e}))}},t?c("div",{className:Object(i.a)("rounded-t-xl",n,p[g],{"p-10":!n}),dangerouslySetInnerHTML:{__html:t}}):c(b,{src:a,className:Object(i.a)("w-full rounded-t-xl",p[g],{"pointer-events-none":N})}))),c("div",{ref:j,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(r.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:j,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(h?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[g]),style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(m,{color:g,snippet:o}))}},qkm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".align-baseline":{"vertical-align":"baseline"},".align-top":{"vertical-align":"top"},".align-middle":{"vertical-align":"middle"},".align-bottom":{"vertical-align":"bottom"},".align-text-top":{"vertical-align":"text-top"},".align-text-bottom":{"vertical-align":"text-bottom"}},t("verticalAlign"))}}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return b}));var n=a("wx14"),s=a("q1tI"),o=a.n(s),i=a("ekQu"),r=a("8Kt/"),c=a.n(r),l=a("nOHt"),p=a("ap0H"),u=a("1Q1k"),d=o.a.createElement;function b(e){var t=Object(l.useRouter)();return d(o.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(c.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(i.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("rePB"),s=a("q1tI"),o=a.n(s),i=a("AOjV"),r=a("AI3G"),c=a("Zb5r"),l=o.a.createElement;function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e){var t=e.plugin,a=e.name,s=Object(r.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())})),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(i.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,t){return u(u({},e),{},Object(n.a)({},t,!1))}),{})}))}},yLNH:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a("wx14"),s=a("Ff2n"),o=a("q1tI"),i=a.n(o),r=a("7ljp"),c=a("YFqc"),l=a.n(c),p=a("tc9R"),u=a("pOT7"),d=a("vRWG"),b=a("I6Nb"),m=a("qkm3"),g=a.n(m),f=a("8C7G"),h=a("wH44"),v=(i.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g.a},meta:{title:"Vertical Alignment",shortTitle:"Vertical Align",description:"Utilities for controlling the vertical alignment of an inline or table-cell box.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Baseline",slug:"baseline",children:[]},{title:"Top",slug:"top",children:[]},{title:"Middle",slug:"middle",children:[]},{title:"Bottom",slug:"bottom",children:[]},{title:"Text Top",slug:"text-top",children:[]},{title:"Text Bottom",slug:"text-bottom",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),O=b.ContentsLayout;function j(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.a)(O,Object(n.a)({},v,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"baseline",toc:!0},"Baseline"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"align-baseline")," to align the baseline of an element with the baseline of its parent.")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-baseline">\n      <span class="absolute top-0 border-light-blue-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-light-blue-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-light-blue-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-baseline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"top",toc:!0},"Top"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"align-top")," to align the top of an element and its descendants with the top of the entire line.")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-top">\n      <span class="absolute top-0 border-emerald-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-emerald-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-emerald-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-top</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"middle",toc:!0},"Middle"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"align-middle")," to align the middle of an element with the baseline plus half the x-height of the parent.")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-middle">\n      <span class="absolute top-0 border-purple-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-purple-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-purple-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-middle</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"bottom",toc:!0},"Bottom"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"align-bottom")," to align the bottom of an element and its descendants with the bottom of the entire line.")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-bottom">\n      <span class="absolute top-0 border-rose-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-rose-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-rose-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-bottom</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"text-top",toc:!0},"Text Top"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"align-text-top")," to align the top of an element with the top of the parent element's font.")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-text-top">\n      <span class="absolute top-0 border-amber-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-amber-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-amber-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-text-top</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"text-bottom",toc:!0},"Text Bottom"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},"align-text-bottom")," to align the bottom of an element with the bottom of the parent element's font.")),Object(r.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-0 h-8 inline-block align-text-bottom">\n      <span class="absolute top-0 border-fuchsia-300 border-t border-b border-dashed w-full h-8"></span>\n      <span class="absolute top-0 border-fuchsia-300 border-t border-b border-dashed w-full h-4"></span>\n    </span>\n    <span class="relative z-10 text-fuchsia-600 font-medium">The quick brown fox jumped over the lazy dog.</span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block <span class="code-highlight bg-code-highlight">align-text-bottom</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the vertical alignment only at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing vertical align utility. For example, adding the class ",Object(r.a)("inlineCode",{parentName:"p"},"md:align-top")," to an element would apply the ",Object(r.a)("inlineCode",{parentName:"p"},"align-top")," utility at medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"relative",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"align-middle ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:align-top")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"...",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"span"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"span"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"span"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(f.a,{plugin:"verticalAlign",name:"vertical-alignment",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(h.a,{plugin:"verticalAlign",name:"vertical-alignment",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=v}},[["EL43",0,2,6,1,3,4,5,7]]]);