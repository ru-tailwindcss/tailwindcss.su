_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{"5wHl":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/box-sizing",function(){return n("xiNK")}])},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("rePB"),r=n("q1tI"),s=n.n(r),i=n("98BF"),o=n("Zb5r"),c=n("AOjV"),l=s.a.createElement;function p(e){var t=e.plugin,n=e.name,r=i.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())}));var s=["responsive","hover","focus","active","group-hover"].filter((function(e){return!r.includes(e)})).slice(0,2),p="By default, ".concat(r.length?"only ".concat(Object(o.a)(r).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:p}}),l("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",l("code",null,t)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",r.length>0?"also ":"","generate"," ",Object(o.a)(s)," variants:"),l(c.a,{path:"variants.extend",before:"...",add:Object(a.a)({},t,s)}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),s=(n("Btb4"),n("AI3G")),i=n("iuhU"),o=r.a.createElement;function c(e){var t=e.value;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(r.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((function(e,n){return o(a.Fragment,{key:n},o(c,{value:e}),n===t.length-1?null:o("span",{className:"token punctuation"},", "))})),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var t=e.edits,n=e.indent,r=void 0===n?"":n,s=e.type,l=void 0===s?"inserted":s;return o("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(e,n){return o(a.Fragment,{key:n},o("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",r,/^[a-z_$][a-z0-9_$]*$/i.test(s=e)?s:"'".concat(s,"'"),o("span",{className:"token operator"},":")," ",o(c,{value:t[e]}),o("span",{className:"token punctuation"},","),"\n");var s})))}function p(e){var t=e.path,n=e.add,r=e.remove,i=e.before,c=e.after;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return o(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")})),i&&Object(s.a)(i).map((function(e,n){return o(a.Fragment,{key:n},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n")}))),r&&o(l,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&o(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},c&&Object(s.a)(c).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,n){return o(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")})),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),r=n("p+I8"),s=n("GAX2").default;e.exports=(e,t,n)=>{const i=[];return function e(t,n,o){let c;(n=n||{}).indent=n.indent||"\t",o=o||"",c=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),o).replace(new RegExp(c.indent,"g"),o+n.indent)};if(-1!==i.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";i.push(t);const a="["+c.newLine+t.map((a,r)=>{const s=t.length-1===r?c.newLine:","+c.newLineOrSpace;let i=e(a,n,o+n.indent);return n.transform&&(i=n.transform(t,r,i)),c.indent+i+s}).join("")+c.pad+"]";return i.pop(),l(a)}if(r(t)){let a=Object.keys(t).concat(s(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";i.push(t);const r="{"+c.newLine+a.map((r,s)=>{const i=a.length-1===s?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof r,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(r),u=l||p?r:e(r,n);let d=e(t[r],n,o+n.indent);return n.transform&&(d=n.transform(t,r,d)),c.indent+String(u)+": "+d+i}).join("")+c.pad+"}";return i.pop(),l(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((function(t,n,a){return 0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n)}),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),s=n("8Kt/"),i=n.n(s),o=r.a.createElement;function c(e){var t=e.suffix,n=e.children+(t?" - ".concat(t):"");return o(i.a,null,o("title",{key:"title"},n),o("meta",{key:"twitter:title",name:"twitter:title",content:n}),o("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n("wx14"),r=n("q1tI"),s=n.n(r),i=n("iuhU"),o=n("ZMKu"),c=s.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){var t=Object(r.useRef)(),n=Object(r.useState)(!1),s=n[0],i=n[1],o=Object(r.useState)({}),l=o[0],p=o[1];return Object(r.useEffect)((function(){if(s){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),function(){e.disconnect()}}function n(){p({height:t.current.contentDocument.body.scrollHeight})}}),[s]),c("iframe",Object(a.a)({},e,{ref:t,onLoad:function(){return i(!0)},style:l}))}function g(e){var t=e.color,n=e.snippet;return c("div",{className:Object(i.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},c("pre",{className:Object(i.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m(e){var t=e.preview,n=e.src,a=e.snippet,r=e.previewClassName,s=e.color,o=void 0===s?"gray":s;return c("div",{className:"relative overflow-hidden mb-8"},t?c("div",{className:Object(i.a)("rounded-t-xl overflow-hidden",p[o],r,{"p-10":!r}),dangerouslySetInnerHTML:{__html:t}}):c(b,{src:n,className:Object(i.a)("w-full rounded-t-xl",p[o])}),c(g,{color:o,snippet:a}))}function f(e){var t=e.preview,n=e.src,a=e.previewClassName,s=e.snippet,l=e.color,m=void 0===l?"gray":l,f=e.min,h=void 0!==f&&f,v=Object(r.useRef)(),O=Object(o.h)(0),j=Object(r.useRef)(),w=Object(r.useState)(!1),y=w[0],x=w[1];return Object(r.useEffect)((function(){var e=new window.ResizeObserver((function(){O.set(0)}));return e.observe(v.current),function(){e.disconnect()}}),[]),c("div",{className:"relative mb-8"},c("div",{ref:v,className:"relative rounded-t-xl ".concat(u[m])},c("div",{className:h?"md:w-88":void 0},c(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(O,(function(e){return-e}))}},t?c("div",{className:Object(i.a)("rounded-t-xl",a,p[m],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):c(b,{src:n,className:Object(i.a)("w-full rounded-t-xl",p[m],{"pointer-events-none":y})}))),c("div",{ref:j,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(o.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:j,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(h?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:function(){document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),x(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[m]),style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(g,{color:m,snippet:s}))}},sOsq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".box-border":{"box-sizing":"border-box"},".box-content":{"box-sizing":"content-box"}},t("boxSizing"))}}},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return b}));var a=n("wx14"),r=n("q1tI"),s=n.n(r),i=n("ekQu"),o=n("8Kt/"),c=n.n(o),l=n("nOHt"),p=n("ap0H"),u=n("1Q1k"),d=s.a.createElement;function b(e){var t=Object(l.useRouter)();return d(s.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(c.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(i.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),r=n("q1tI"),s=n.n(r),i=n("AOjV"),o=n("AI3G"),c=n("Zb5r"),l=s.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.plugin,n=e.name,r=Object(o.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(function(e,t,n){return"".concat(t," ").concat(n.toLowerCase())})),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(r.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",r.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(i.a,{path:"corePlugins",before:"...",add:r.reduce((function(e,t){return u(u({},e),{},Object(a.a)({},t,!1))}),{})}))}},xiNK:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("wx14"),r=n("Ff2n"),s=n("q1tI"),i=n.n(s),o=n("7ljp"),c=n("YFqc"),l=n.n(c),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),b=n("I6Nb"),g=n("sOsq"),m=n.n(g),f=n("8C7G"),h=n("wH44"),v=(i.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m.a},meta:{title:"Box Sizing",description:"Utilities for controlling how the browser should calculate an element's total size."},tableOfContents:[{title:"Include borders and padding",slug:"include-borders-and-padding",children:[]},{title:"Exclude borders and padding",slug:"exclude-borders-and-padding",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),O=b.ContentsLayout;function j(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.a)(O,Object(a.a)({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"include-borders-and-padding",toc:!0},"Include borders and padding"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"box-border")," to set an element's ",Object(o.a)("inlineCode",{parentName:"p"},"box-sizing")," to ",Object(o.a)("inlineCode",{parentName:"p"},"border-box"),", telling the browser to include the element's borders and padding when you give it a height or width."),Object(o.a)("p",null,"This means a 100px ","\xd7"," 100px element with a 2px border and 4px of padding on all sides will be rendered as 100px ","\xd7"," 100px, with an internal content area of 88px ","\xd7"," 88px."),Object(o.a)("p",null,"Tailwind makes this the default for all elements in our ",Object(o.a)(l.a,{href:"/docs/preflight",passHref:!0},Object(o.a)("a",null,"preflight base styles")),".")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-center justify-around">\n    <div class="box-border h-32 w-32 p-4 border-4 border-light-blue-400 bg-light-blue-200 rounded-md">\n      <div class="h-full w-full bg-light-blue-400 bg-stripes bg-stripes-white"></div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">box-border</span> h-32 w-32 p-4 border-4 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"exclude-borders-and-padding",toc:!0},"Exclude borders and padding"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"box-content")," to set an element's ",Object(o.a)("inlineCode",{parentName:"p"},"box-sizing")," to ",Object(o.a)("inlineCode",{parentName:"p"},"content-box"),", telling the browser to add borders and padding on top of the element's specified width or height."),Object(o.a)("p",null,"This means a 100px ","\xd7"," 100px element with a 2px border and 4px of padding on all sides will actually be rendered as 112px ","\xd7"," 112px, with an internal content area of 100px ","\xd7"," 100px.")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-center justify-around">\n    <div class="box-content h-32 w-32 p-4 border-4 border-emerald-400 bg-emerald-200 rounded-md">\n      <div class="h-full w-full bg-emerald-400 bg-stripes bg-stripes-white"></div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">box-content</span> h-32 w-32 p-4 border-4 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the box-sizing at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing box-sizing utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:box-content")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"box-content")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"box-border ",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:box-content")," ...",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(f.a,{plugin:"boxSizing",name:"box-sizing",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(h.a,{plugin:"boxSizing",name:"box-sizing",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=v}},[["5wHl",0,2,6,1,3,4,5,7]]]);