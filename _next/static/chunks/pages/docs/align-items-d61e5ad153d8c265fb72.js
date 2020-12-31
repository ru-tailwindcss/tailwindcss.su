_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"5xSE":function(n,t,a){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,t,a){"use strict";a.d(t,"a",(function(){return r}));var e=a("rePB"),s=a("q1tI"),c=a.n(s),p=a("98BF"),o=a("Zb5r"),i=a("AOjV"),l=c.a.createElement;function r(n){var t=n.plugin,a=n.name,s=p.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(n,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(n){return!s.includes(n)})).slice(0,2),r="By default, ".concat(s.length?"only ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(a," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:r}}),l("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",l("code",null,t)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(c)," variants:"),l(i.a,{path:"variants.extend",before:"...",add:Object(e.a)({},t,c)}))}},AOjV:function(n,t,a){"use strict";a.d(t,"a",(function(){return r}));var e=a("q1tI"),s=a.n(e),c=(a("Btb4"),a("AI3G")),p=a("iuhU"),o=s.a.createElement;function i(n){var t=n.value;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((function(n,a){return o(e.Fragment,{key:a},o(i,{value:n}),a===t.length-1?null:o("span",{className:"token punctuation"},", "))})),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function l(n){var t=n.edits,a=n.indent,s=void 0===a?"":a,c=n.type,l=void 0===c?"inserted":c;return o("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(n,a){return o(e.Fragment,{key:a},o("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(c=n)?c:"'".concat(c,"'"),o("span",{className:"token operator"},":")," ",o(i,{value:t[n]}),o("span",{className:"token punctuation"},","),"\n");var c})))}function r(n){var t=n.path,a=n.add,s=n.remove,p=n.before,i=n.after;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((function(n,t){return o(e.Fragment,{key:t},"  ","  ".repeat(t+1),n,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")})),p&&Object(c.a)(p).map((function(n,a){return o(e.Fragment,{key:a},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(n)),"\n")}))),s&&o(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&o(l,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},i&&Object(c.a)(i).map((function(n){return"".concat("  ".repeat(t.length+2)).concat(n,"\n")})),t.map((function(n,a){return o(e.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")})),"  }")))))}},Btb4:function(n,t,a){"use strict";const e=a("5xSE"),s=a("p+I8"),c=a("GAX2").default;n.exports=(n,t,a)=>{const p=[];return function n(t,a,o){let i;(a=a||{}).indent=a.indent||"\t",o=o||"",i=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=n=>{if(void 0===a.inlineCharacterLimit)return n;const t=n.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:n.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),o).replace(new RegExp(i.indent,"g"),o+a.indent)};if(-1!==p.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||e(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";p.push(t);const e="["+i.newLine+t.map((e,s)=>{const c=t.length-1===s?i.newLine:","+i.newLineOrSpace;let p=n(e,a,o+a.indent);return a.transform&&(p=a.transform(t,s,p)),i.indent+p+c}).join("")+i.pad+"]";return p.pop(),l(e)}if(s(t)){let e=Object.keys(t).concat(c(t));if(a.filter&&(e=e.filter(n=>a.filter(t,n))),0===e.length)return"{}";p.push(t);const s="{"+i.newLine+e.map((s,c)=>{const p=e.length-1===c?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof s,r=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||r?s:n(s,a);let d=n(t[s],a,o+a.indent);return a.transform&&(d=a.transform(t,s,d)),i.indent+String(u)+": "+d+p}).join("")+i.pad+"}";return p.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(n,t,a)}},GAX2:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n=>Object.getOwnPropertySymbols(n).filter(t=>Object.prototype.propertyIsEnumerable.call(n,t))},Iofc:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:n,variants:t}){n({".items-start":{"align-items":"flex-start"},".items-end":{"align-items":"flex-end"},".items-center":{"align-items":"center"},".items-baseline":{"align-items":"baseline"},".items-stretch":{"align-items":"stretch"}},t("alignItems"))}}},Zb5r:function(n,t,a){"use strict";function e(n){return n.reduce((function(t,a,e){return 0===e?a:e===n.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a)}),"")}a.d(t,"a",(function(){return e}))},ap0H:function(n,t,a){"use strict";a.d(t,"a",(function(){return i}));var e=a("q1tI"),s=a.n(e),c=a("8Kt/"),p=a.n(c),o=s.a.createElement;function i(n){var t=n.suffix,a=n.children+(t?" - ".concat(t):"");return o(p.a,null,o("title",{key:"title"},a),o("meta",{key:"twitter:title",name:"twitter:title",content:a}),o("meta",{key:"og:title",property:"og:title",content:a}))}},gXDe:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var e=a("wx14"),s=a("Ff2n"),c=a("q1tI"),p=a.n(c),o=a("7ljp"),i=a("YFqc"),l=a.n(i),r=a("tc9R"),u=a("pOT7"),d=a("vRWG"),g=a("I6Nb"),m=a("Iofc"),b=a.n(m),f=a("8C7G"),k=a("wH44"),v=(p.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b.a},meta:{title:"Align Items",description:"Utilities for controlling how flex and grid items are positioned along a container's cross axis."},tableOfContents:[{title:"Stretch",slug:"stretch",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Baseline",slug:"baseline",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=g.ContentsLayout;function x(n){var t=n.components,a=Object(s.a)(n,["components"]);return Object(o.a)(h,Object(e.a)({},v,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"items-stretch")," to stretch items to fill the container's cross axis:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch p-4 space-x-4 bg-stripes bg-stripes-light-blue-500 rounded-lg">\n    <div class="flex-1 py-4 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="flex-1 py-12 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="flex-1 py-8 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">items-stretch</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>py-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>py-12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>py-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"items-start")," to align items to the start of the container's cross axis:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-start p-4 space-x-4 bg-stripes bg-stripes-fuchsia-500 rounded-lg">\n    <div class="flex-1 py-2 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="flex-1 py-8 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="flex-1 py-5 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">items-start</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"items-center")," to align items along the center of the container's cross axis:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-center p-4 space-x-4 bg-stripes bg-stripes-rose-500 rounded-lg">\n    <div class="flex-1 py-2 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">1</div>\n    <div class="flex-1 py-8 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">2</div>\n    <div class="flex-1 py-5 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">items-center</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"items-end")," to align items to the end of the container's cross axis:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-end p-4 space-x-4 bg-stripes bg-stripes-purple-500 rounded-lg">\n    <div class="flex-1 py-2 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">1</div>\n    <div class="flex-1 py-8 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">2</div>\n    <div class="flex-1 py-5 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">items-end</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"baseline",toc:!0},"Baseline"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"items-baseline")," to align items along the container's cross axis such that all of their baselines align:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-baseline p-4 space-x-4 bg-stripes bg-stripes-emerald-500 rounded-lg">\n    <div class="flex-1 pt-4 pb-6 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">1</div>\n    <div class="flex-1 pt-6 pb-10 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">2</div>\n    <div class="flex-1 pt-8 pb-4 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">items-baseline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pt-4 pb-6 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pt-6 pb-10 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pt-8 pb-4 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the alignment of flex items at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:items-center")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"items-center")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(e.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"items-stretch ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:items-center")," ...",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(f.a,{plugin:"alignItems",name:"align-items",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(k.a,{plugin:"alignItems",name:"align-items",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=v},iZa5:function(n,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/align-items",function(){return a("gXDe")}])},"p+I8":function(n,t,a){"use strict";n.exports=function(n){var t=typeof n;return null!==n&&("object"===t||"function"===t)}},pOT7:function(n,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return f}));var e=a("wx14"),s=a("q1tI"),c=a.n(s),p=a("iuhU"),o=a("ZMKu"),i=c.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(n){var t=Object(s.useRef)(),a=Object(s.useState)(!1),c=a[0],p=a[1],o=Object(s.useState)({}),l=o[0],r=o[1];return Object(s.useEffect)((function(){if(c){var n=new window.ResizeObserver(a);return a(),n.observe(t.current.contentDocument.body),function(){n.disconnect()}}function a(){r({height:t.current.contentDocument.body.scrollHeight})}}),[c]),i("iframe",Object(e.a)({},n,{ref:t,onLoad:function(){return p(!0)},style:l}))}function m(n){var t=n.color,a=n.snippet;return i("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},i("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function b(n){var t=n.preview,a=n.src,e=n.snippet,s=n.previewClassName,c=n.color,o=void 0===c?"gray":c;return i("div",{className:"relative overflow-hidden mb-8"},t?i("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",r[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):i(g,{src:a,className:Object(p.a)("w-full rounded-t-xl",r[o])}),i(m,{color:o,snippet:e}))}function f(n){var t=n.preview,a=n.src,e=n.previewClassName,c=n.snippet,l=n.color,b=void 0===l?"gray":l,f=n.min,k=void 0!==f&&f,v=Object(s.useRef)(),h=Object(o.h)(0),x=Object(s.useRef)(),j=Object(s.useState)(!1),O=j[0],y=j[1];return Object(s.useEffect)((function(){var n=new window.ResizeObserver((function(){h.set(0)}));return n.observe(v.current),function(){n.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:v,className:"relative rounded-t-xl ".concat(u[b])},i("div",{className:k?"md:w-88":void 0},i(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(h,(function(n){return-n}))}},t?i("div",{className:Object(p.a)("rounded-t-xl",e,r[b],{"p-10":!e}),dangerouslySetInnerHTML:{__html:t}}):i(g,{src:a,className:Object(p.a)("w-full rounded-t-xl",r[b],{"pointer-events-none":O})}))),i("div",{ref:x,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(o.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:x,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(k?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),y(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[b]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(m,{color:b,snippet:c}))}},vRWG:function(n,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return g}));var e=a("wx14"),s=a("q1tI"),c=a.n(s),p=a("ekQu"),o=a("8Kt/"),i=a.n(o),l=a("nOHt"),r=a("ap0H"),u=a("1Q1k"),d=c.a.createElement;function g(n){var t=Object(l.useRouter)();return d(c.a.Fragment,null,d(r.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},n.layoutProps.meta.metaTitle||n.layoutProps.meta.title),d(i.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(p.b,Object(e.a)({nav:u.a},n)))}},wH44:function(n,t,a){"use strict";a.d(t,"a",(function(){return d}));var e=a("rePB"),s=a("q1tI"),c=a.n(s),p=a("AOjV"),o=a("AI3G"),i=a("Zb5r"),l=c.a.createElement;function r(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,e)}return a}function u(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(e.a)(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}function d(n){var t=n.plugin,a=n.name,s=Object(o.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(function(n,t,a){return"".concat(t," ").concat(a.toLowerCase())})),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(s.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(p.a,{path:"corePlugins",before:"...",add:s.reduce((function(n,t){return u(u({},n),{},Object(e.a)({},t,!1))}),{})}))}}},[["iZa5",0,2,6,1,3,4,5,7]]]);