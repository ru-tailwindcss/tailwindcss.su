_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"3HRN":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-repeat",function(){return t("sfaT")}])},"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("rePB"),s=t("q1tI"),r=t.n(s),c=t("98BF"),o=t("Zb5r"),p=t("AOjV"),i=r.a.createElement;function l(e){var n=e.plugin,t=e.name,s=c.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())}));var r=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(s.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(o.a)(s).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(t,".");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",t," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",i("code",null,n)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",i("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",i("code",null,"tailwind.config.js"),"."),i("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",s.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(r),":"),i(p.a,{path:"variants.extend",before:"...",add:Object(a.a)({},n,r)}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("q1tI"),s=t.n(a),r=(t("Btb4"),t("AI3G")),c=t("iuhU"),o=s.a.createElement;function p(e){var n=e.value;return"string"===typeof n?o("span",{className:"token string"},"'",n,"'"):Array.isArray(n)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),n.map((function(e,t){return o(a.Fragment,{key:t},o(p,{value:e}),t===n.length-1?null:o("span",{className:"token punctuation"},", "))})),o("span",{className:"token punctuation"},"]")):"boolean"===typeof n?o("span",{className:"token boolean"},n.toString()):n.toString()}function i(e){var n=e.edits,t=e.indent,s=void 0===t?"":t,r=e.type,i=void 0===r?"inserted":r;return o("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===i,"deleted-sign deleted":"inserted"!==i})},Object.keys(n).map((function(e,t){return o(a.Fragment,{key:t},o("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===i,deleted:"inserted"!==i})},"inserted"===i?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(r=e)?r:"'".concat(r,"'"),o("span",{className:"token operator"},":")," ",o(p,{value:n[e]}),o("span",{className:"token punctuation"},","),"\n");var r})))}function l(e){var n=e.path,t=e.add,s=e.remove,c=e.before,p=e.after;return n="string"===typeof n?n.split("."):n,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",n.map((function(e,n){return o(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")})),c&&Object(r.a)(c).map((function(e,t){return o(a.Fragment,{key:t},"  ".repeat(n.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n")}))),s&&o(i,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&o(i,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),o("span",{className:"token unchanged"},p&&Object(r.a)(p).map((function(e){return"".concat("  ".repeat(n.length+2)).concat(e,"\n")})),n.map((function(e,t){return o(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")})),"  }")))))}},"BK/B":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".bg-repeat":{"background-repeat":"repeat"},".bg-no-repeat":{"background-repeat":"no-repeat"},".bg-repeat-x":{"background-repeat":"repeat-x"},".bg-repeat-y":{"background-repeat":"repeat-y"},".bg-repeat-round":{"background-repeat":"round"},".bg-repeat-space":{"background-repeat":"space"}},n("backgroundRepeat"))}}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),r=t("GAX2").default;e.exports=(e,n,t)=>{const c=[];return function e(n,t,o){let p;(t=t||{}).indent=t.indent||"\t",o=o||"",p=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(p.newLine,"g"),"").replace(new RegExp(p.newLineOrSpace,"g")," ").replace(new RegExp(p.pad+"|"+p.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(p.newLine+"|"+p.newLineOrSpace,"g"),"\n").replace(new RegExp(p.pad,"g"),o).replace(new RegExp(p.indent,"g"),o+t.indent)};if(-1!==c.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";c.push(n);const a="["+p.newLine+n.map((a,s)=>{const r=n.length-1===s?p.newLine:","+p.newLineOrSpace;let c=e(a,t,o+t.indent);return t.transform&&(c=t.transform(n,s,c)),p.indent+c+r}).join("")+p.pad+"]";return c.pop(),i(a)}if(s(n)){let a=Object.keys(n).concat(r(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";c.push(n);const s="{"+p.newLine+a.map((s,r)=>{const c=a.length-1===r?p.newLine:","+p.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||l?s:e(s,t);let g=e(n[s],t,o+t.indent);return t.transform&&(g=t.transform(n,s,g)),p.indent+String(u)+": "+g+c}).join("")+p.pad+"}";return c.pop(),i(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((function(n,t,a){return 0===a?t:a===e.length-1?"".concat(n," \u0438 ").concat(t):"".concat(n,", ").concat(t)}),"")}t.d(n,"a",(function(){return a}))},ap0H:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("q1tI"),s=t.n(a),r=t("8Kt/"),c=t.n(r),o=s.a.createElement;function p(e){var n=e.suffix,t=e.children+(n?" - ".concat(n):"");return o(c.a,null,o("title",{key:"title"},t),o("meta",{key:"twitter:title",name:"twitter:title",content:t}),o("meta",{key:"og:title",property:"og:title",content:t}))}},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var a=t("wx14"),s=t("q1tI"),r=t.n(s),c=t("iuhU"),o=t("ZMKu"),p=r.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},g={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(e){var n=Object(s.useRef)(),t=Object(s.useState)(!1),r=t[0],c=t[1],o=Object(s.useState)({}),i=o[0],l=o[1];return Object(s.useEffect)((function(){if(r){var e=new window.ResizeObserver(t);return t(),e.observe(n.current.contentDocument.body),function(){e.disconnect()}}function t(){l({height:n.current.contentDocument.body.scrollHeight})}}),[r]),p("iframe",Object(a.a)({},e,{ref:n,onLoad:function(){return c(!0)},style:i}))}function b(e){var n=e.color,t=e.snippet;return p("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",i[n],{"bg-gray-800":!i[n]})},p("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[n]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function m(e){var n=e.preview,t=e.src,a=e.snippet,s=e.previewClassName,r=e.color,o=void 0===r?"gray":r;return p("div",{className:"relative overflow-hidden mb-8"},n?p("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}):p(d,{src:t,className:Object(c.a)("w-full rounded-t-xl",l[o])}),p(b,{color:o,snippet:a}))}function f(e){var n=e.preview,t=e.src,a=e.previewClassName,r=e.snippet,i=e.color,m=void 0===i?"gray":i,f=e.min,k=void 0!==f&&f,v=Object(s.useRef)(),O=Object(o.h)(0),h=Object(s.useRef)(),j=Object(s.useState)(!1),y=j[0],N=j[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){O.set(0)}));return e.observe(v.current),function(){e.disconnect()}}),[]),p("div",{className:"relative mb-8"},p("div",{ref:v,className:"relative rounded-t-xl ".concat(u[m])},p("div",{className:k?"md:w-88":void 0},p(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(O,(function(e){return-e}))}},n?p("div",{className:Object(c.a)("rounded-t-xl",a,l[m],{"p-10":!a}),dangerouslySetInnerHTML:{__html:n}}):p(d,{src:t,className:Object(c.a)("w-full rounded-t-xl",l[m],{"pointer-events-none":y})}))),p("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},p(o.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(k?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:function(){document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),N(!1)}},p("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},p("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(g[m]),style:{width:"0.4375rem"}},p("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),p(b,{color:m,snippet:r}))}},sfaT:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var a=t("wx14"),s=t("Ff2n"),r=t("q1tI"),c=t.n(r),o=t("7ljp"),p=t("YFqc"),i=t.n(p),l=t("tc9R"),u=t("pOT7"),g=t("vRWG"),d=t("I6Nb"),b=t("BK/B"),m=t.n(b),f=t("8C7G"),k=t("wH44"),v=(c.a.createElement,{Layout:g.DocumentationLayout,classes:{plugin:m.a},meta:{title:"\u041f\u043e\u0432\u0442\u043e\u0440 \u0444\u043e\u043d\u0430",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0435\u043c \u0444\u043e\u043d\u043e\u0432\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c",slug:"povtoryat",children:[]},{title:"\u041d\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c",slug:"ne-povtoryat",children:[]},{title:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438",slug:"povtoryat-po-gorizontali",children:[]},{title:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438",slug:"povtoryat-po-vertikali",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),O=d.ContentsLayout;function h(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(o.a)(O,Object(a.a)({},v,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"povtoryat",toc:!0},"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"bg-repeat")," \u0434\u043b\u044f \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u044f \u0444\u043e\u043d\u043e\u0432\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043a\u0430\u043a \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438, \u0442\u0430\u043a \u0438 \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438.")),Object(o.a)(u.a,{preview:'\n  <div class="w-full bg-fuchsia-300 h-96 bg-repeat" style="background-image:url(\'/img/placeholder-fuchsia.svg\');">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-repeat</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"ne-povtoryat",toc:!0},"\u041d\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"bg-no-repeat"),", \u0435\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0444\u043e\u043d\u043e\u0432\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.")),Object(o.a)(u.a,{preview:'\n  <div class="w-full bg-rose-200 h-48 bg-center bg-no-repeat" style="background-image:url(\'/img/placeholder-rose.svg\');">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-no-repeat</span> bg-center ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"povtoryat-po-gorizontali",toc:!0},"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"bg-repeat-x"),", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0444\u043e\u043d\u043e\u0432\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438.")),Object(o.a)(u.a,{preview:'\n  <div class="w-full bg-purple-300 h-48 bg-center bg-repeat-x" style="background-image:url(\'/img/placeholder-purple.svg\');">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-repeat-x</span> bg-center ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"povtoryat-po-vertikali",toc:!0},"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"bg-repeat-y"),", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c \u0444\u043e\u043d\u043e\u0432\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438.")),Object(o.a)(u.a,{preview:'\n  <div class="w-full bg-indigo-200 h-96 bg-center bg-repeat-y" style="background-image:url(\'/img/placeholder-indigo.svg\');">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-repeat-y</span> bg-center ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(o.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u043e\u0432\u043e\u0433\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u044f \u0444\u043e\u043d\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(o.a)("inlineCode",{parentName:"p"},"md:bg-repeat-x")," \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(o.a)("inlineCode",{parentName:"p"},"bg-repeat-x")," \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-repeat ",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:bg-repeat-x")," ...",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(o.a)(l.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(o.a)(l.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(o.a)(f.a,{plugin:"backgroundRepeat",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(o.a)(k.a,{plugin:"backgroundRepeat",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=v},vRWG:function(e,n,t){"use strict";t.r(n),t.d(n,"DocumentationLayout",(function(){return d}));var a=t("wx14"),s=t("q1tI"),r=t.n(s),c=t("ekQu"),o=t("8Kt/"),p=t.n(o),i=t("nOHt"),l=t("ap0H"),u=t("1Q1k"),g=r.a.createElement;function d(e){var n=Object(i.useRouter)();return g(r.a.Fragment,null,g(l.a,{suffix:"/"===n.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),g(p.a,null,g("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),g("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),g(c.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t("rePB"),s=t("q1tI"),r=t.n(s),c=t("AOjV"),o=t("AI3G"),p=t("Zb5r"),i=r.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e){var n=e.plugin,t=e.name,s=Object(o.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(function(e,n,t){return"".concat(n," ").concat(t.toLowerCase())})),i("div",{className:"prose"},i("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",t,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",i("span",{dangerouslySetInnerHTML:{__html:Object(p.a)(s.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",s.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",i("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",i("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),i(c.a,{path:"corePlugins",before:"...",add:s.reduce((function(e,n){return u(u({},e),{},Object(a.a)({},n,!1))}),{})}))}}},[["3HRN",0,2,6,1,3,4,5,7]]]);