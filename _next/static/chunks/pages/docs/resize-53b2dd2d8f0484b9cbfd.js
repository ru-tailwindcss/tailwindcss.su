_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[128],{"/WC5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".resize-none":{resize:"none"},".resize-y":{resize:"vertical"},".resize-x":{resize:"horizontal"},".resize":{resize:"both"}},t("resize"))}}},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("rePB"),r=n("q1tI"),s=n.n(r),i=n("98BF"),o=n("Zb5r"),c=n("AOjV"),l=s.a.createElement;function p(e){var t=e.plugin,n=e.name,r=i.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())}));var s=["responsive","hover","focus","active","group-hover"].filter((function(e){return!r.includes(e)})).slice(0,2),p="By default, ".concat(r.length?"only ".concat(Object(o.a)(r).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:p}}),l("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",l("code",null,t)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",r.length>0?"also ":"","generate"," ",Object(o.a)(s)," variants:"),l(c.a,{path:"variants.extend",before:"...",add:Object(a.a)({},t,s)}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),s=(n("Btb4"),n("AI3G")),i=n("iuhU"),o=r.a.createElement;function c(e){var t=e.value;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(r.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((function(e,n){return o(a.Fragment,{key:n},o(c,{value:e}),n===t.length-1?null:o("span",{className:"token punctuation"},", "))})),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var t=e.edits,n=e.indent,r=void 0===n?"":n,s=e.type,l=void 0===s?"inserted":s;return o("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(e,n){return o(a.Fragment,{key:n},o("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",r,/^[a-z_$][a-z0-9_$]*$/i.test(s=e)?s:"'".concat(s,"'"),o("span",{className:"token operator"},":")," ",o(c,{value:t[e]}),o("span",{className:"token punctuation"},","),"\n");var s})))}function p(e){var t=e.path,n=e.add,r=e.remove,i=e.before,c=e.after;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return o(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")})),i&&Object(s.a)(i).map((function(e,n){return o(a.Fragment,{key:n},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n")}))),r&&o(l,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&o(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},c&&Object(s.a)(c).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,n){return o(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")})),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),r=n("p+I8"),s=n("GAX2").default;e.exports=(e,t,n)=>{const i=[];return function e(t,n,o){let c;(n=n||{}).indent=n.indent||"\t",o=o||"",c=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),o).replace(new RegExp(c.indent,"g"),o+n.indent)};if(-1!==i.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";i.push(t);const a="["+c.newLine+t.map((a,r)=>{const s=t.length-1===r?c.newLine:","+c.newLineOrSpace;let i=e(a,n,o+n.indent);return n.transform&&(i=n.transform(t,r,i)),c.indent+i+s}).join("")+c.pad+"]";return i.pop(),l(a)}if(r(t)){let a=Object.keys(t).concat(s(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";i.push(t);const r="{"+c.newLine+a.map((r,s)=>{const i=a.length-1===s?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof r,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(r),u=l||p?r:e(r,n);let d=e(t[r],n,o+n.indent);return n.transform&&(d=n.transform(t,r,d)),c.indent+String(u)+": "+d+i}).join("")+c.pad+"}";return i.pop(),l(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},KIci:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n("wx14"),r=n("Ff2n"),s=n("q1tI"),i=n.n(s),o=n("7ljp"),c=(n("YFqc"),n("tc9R")),l=n("pOT7"),p=n("vRWG"),u=n("I6Nb"),d=n("/WC5"),g=n.n(d),m=n("8C7G"),b=n("wH44"),f=(i.a.createElement,{Layout:p.DocumentationLayout,classes:{plugin:g.a},meta:{title:"Resize",description:"Utilities for controlling how an element can be resized."},tableOfContents:[{title:"Resize in all directions",slug:"resize-in-all-directions",children:[]},{title:"Resize vertically",slug:"resize-vertically",children:[]},{title:"Resize horizontally",slug:"resize-horizontally",children:[]},{title:"Prevent resizing",slug:"prevent-resizing",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),v=u.ContentsLayout;function y(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)(v,Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(c.a,{level:2,id:"resize-in-all-directions",toc:!0},"Resize in all directions"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"resize")," to make an element horizontally and vertically resizable.")),Object(o.a)(l.a,{preview:'\n  <textarea class="resize border rounded-md"></textarea>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resize border rounded-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(c.a,{level:2,id:"resize-vertically",toc:!0},"Resize vertically"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"resize-y")," to make an element vertically resizable.")),Object(o.a)(l.a,{preview:'\n  <textarea class="resize-y border rounded-md"></textarea>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resize-y border rounded-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(c.a,{level:2,id:"resize-horizontally",toc:!0},"Resize horizontally"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"resize-x")," to make an element horizontally resizable.")),Object(o.a)(l.a,{preview:'\n  <textarea class="resize-x border rounded-md"></textarea>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resize-x border rounded-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(c.a,{level:2,id:"prevent-resizing",toc:!0},"Prevent resizing"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"resize-none")," to prevent an element from being resizable.")),Object(o.a)(l.a,{preview:'\n  <textarea class="resize-none border rounded-md"></textarea>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>resize-none border rounded-md<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(c.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(c.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(m.a,{plugin:"resize",name:"resizing",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(c.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(b.a,{plugin:"resize",name:"resizing",mdxType:"Disabling"}))}y.isMDXComponent=!0,y.layoutProps=f},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((function(t,n,a){return 0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n)}),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),s=n("8Kt/"),i=n.n(s),o=r.a.createElement;function c(e){var t=e.suffix,n=e.children+(t?" - ".concat(t):"");return o(i.a,null,o("title",{key:"title"},n),o("meta",{key:"twitter:title",name:"twitter:title",content:n}),o("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n("wx14"),r=n("q1tI"),s=n.n(r),i=n("iuhU"),o=n("ZMKu"),c=s.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var t=Object(r.useRef)(),n=Object(r.useState)(!1),s=n[0],i=n[1],o=Object(r.useState)({}),l=o[0],p=o[1];return Object(r.useEffect)((function(){if(s){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function n(){p({height:t.current.contentDocument.body.scrollHeight})}}),[s]),c("iframe",Object(a.a)({},e,{ref:t,onLoad:function(){return i(!0)},style:l}))}function m(e){var t=e.color,n=e.snippet;return c("div",{className:Object(i.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},c("pre",{className:Object(i.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function b(e){var t=e.preview,n=e.src,a=e.snippet,r=e.previewClassName,s=e.color,o=void 0===s?"gray":s;return c("div",{className:"relative overflow-hidden mb-8"},t?c("div",{className:Object(i.a)("rounded-t-xl overflow-hidden",p[o],r,{"p-10":!r}),dangerouslySetInnerHTML:{__html:t}}):c(g,{src:n,className:Object(i.a)("w-full rounded-t-xl",p[o])}),c(m,{color:o,snippet:a}))}function f(e){var t=e.preview,n=e.src,a=e.previewClassName,s=e.snippet,l=e.color,b=void 0===l?"gray":l,f=e.min,v=void 0!==f&&f,y=Object(r.useRef)(),h=Object(o.h)(0),O=Object(r.useRef)(),k=Object(r.useState)(!1),j=k[0],w=k[1];return Object(r.useEffect)((function(){var e=new window.ResizeObserver((function(){h.set(0)}));return e.observe(y.current),function(){e.disconnect()}}),[]),c("div",{className:"relative mb-8"},c("div",{ref:y,className:"relative rounded-t-xl ".concat(u[b])},c("div",{className:v?"md:w-88":void 0},c(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(h,(function(e){return-e}))}},t?c("div",{className:Object(i.a)("rounded-t-xl",a,p[b],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):c(g,{src:n,className:Object(i.a)("w-full rounded-t-xl",p[b],{"pointer-events-none":j})}))),c("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(o.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(v?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[b]),style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(m,{color:b,snippet:s}))}},r9Ns:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/resize",function(){return n("KIci")}])},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return g}));var a=n("wx14"),r=n("q1tI"),s=n.n(r),i=n("ekQu"),o=n("8Kt/"),c=n.n(o),l=n("nOHt"),p=n("ap0H"),u=n("1Q1k"),d=s.a.createElement;function g(e){var t=Object(l.useRouter)();return d(s.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(c.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(i.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),r=n("q1tI"),s=n.n(r),i=n("AOjV"),o=n("AI3G"),c=n("Zb5r"),l=s.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.plugin,n=e.name,r=Object(o.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())})),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(r.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",r.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(i.a,{path:"corePlugins",before:"...",add:r.reduce((function(e,t){return u(u({},e),{},Object(a.a)({},t,!1))}),{})}))}}},[["r9Ns",0,2,6,1,3,4,5,7]]]);