_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"2c5R":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/align-self",function(){return e("Y9Rh")}])},"5xSE":function(n,t,e){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var a=e("rePB"),s=e("q1tI"),c=e.n(s),o=e("98BF"),p=e("Zb5r"),i=e("AOjV"),l=c.a.createElement;function r(n){var t=n.plugin,e=n.name,s=o.defaultConfig.variants[t]||["responsive"];e=e||t.replace(/([a-z])([A-Z])/g,(function(n,t,e){return"".concat(t," ").concat(e.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(n){return!s.includes(n)})).slice(0,2),r="By default, ".concat(s.length?"only ".concat(Object(p.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(e," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:r}}),l("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",l("code",null,t)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(p.a)(c)," variants:"),l(i.a,{path:"variants.extend",before:"...",add:Object(a.a)({},t,c)}))}},AOjV:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var a=e("q1tI"),s=e.n(a),c=(e("Btb4"),e("AI3G")),o=e("iuhU"),p=s.a.createElement;function i(n){var t=n.value;return"string"===typeof t?p("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?p(s.a.Fragment,null,p("span",{className:"token punctuation"},"["),t.map((function(n,e){return p(a.Fragment,{key:e},p(i,{value:n}),e===t.length-1?null:p("span",{className:"token punctuation"},", "))})),p("span",{className:"token punctuation"},"]")):"boolean"===typeof t?p("span",{className:"token boolean"},t.toString()):t.toString()}function l(n){var t=n.edits,e=n.indent,s=void 0===e?"":e,c=n.type,l=void 0===c?"inserted":c;return p("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(n,e){return p(a.Fragment,{key:e},p("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(c=n)?c:"'".concat(c,"'"),p("span",{className:"token operator"},":")," ",p(i,{value:t[n]}),p("span",{className:"token punctuation"},","),"\n");var c})))}function r(n){var t=n.path,e=n.add,s=n.remove,o=n.before,i=n.after;return t="string"===typeof t?t.split("."):t,p("div",{className:"prose"},p("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  ",p("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",p("span",{className:"token punctuation"},"."),p("span",{className:"token property-access"},"exports")," ",p("span",{className:"token operator"},"=")," ",p("span",{className:"token punctuation"},"{"),"\n",t.map((function(n,t){return p(a.Fragment,{key:t},"  ","  ".repeat(t+1),n,p("span",{className:"token operator"},":")," ",p("span",{className:"token punctuation"},"{"),"\n")})),o&&Object(c.a)(o).map((function(n,e){return p(a.Fragment,{key:e},"  ".repeat(t.length+2),p("span",{className:"token comment"},"// ".concat(n)),"\n")}))),s&&p(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),e&&p(l,{edits:e,type:"inserted",indent:"  ".repeat(t.length+1)}),p("span",{className:"token unchanged"},i&&Object(c.a)(i).map((function(n){return"".concat("  ".repeat(t.length+2)).concat(n,"\n")})),t.map((function(n,e){return p(a.Fragment,{key:e},"  ","  ".repeat(t.length-e),"}\n")})),"  }")))))}},Btb4:function(n,t,e){"use strict";const a=e("5xSE"),s=e("p+I8"),c=e("GAX2").default;n.exports=(n,t,e)=>{const o=[];return function n(t,e,p){let i;(e=e||{}).indent=e.indent||"\t",p=p||"",i=void 0===e.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+e.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=n=>{if(void 0===e.inlineCharacterLimit)return n;const t=n.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=e.inlineCharacterLimit?t:n.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),p).replace(new RegExp(i.indent,"g"),p+e.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const a="["+i.newLine+t.map((a,s)=>{const c=t.length-1===s?i.newLine:","+i.newLineOrSpace;let o=n(a,e,p+e.indent);return e.transform&&(o=e.transform(t,s,o)),i.indent+o+c}).join("")+i.pad+"]";return o.pop(),l(a)}if(s(t)){let a=Object.keys(t).concat(c(t));if(e.filter&&(a=a.filter(n=>e.filter(t,n))),0===a.length)return"{}";o.push(t);const s="{"+i.newLine+a.map((s,c)=>{const o=a.length-1===c?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof s,r=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||r?s:n(s,e);let d=n(t[s],e,p+e.indent);return e.transform&&(d=e.transform(t,s,d)),i.indent+String(u)+": "+d+o}).join("")+i.pad+"}";return o.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===e.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(n,t,e)}},GAX2:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n=>Object.getOwnPropertySymbols(n).filter(t=>Object.prototype.propertyIsEnumerable.call(n,t))},Y9Rh:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return j}));var a=e("wx14"),s=e("Ff2n"),c=e("q1tI"),o=e.n(c),p=e("7ljp"),i=e("YFqc"),l=e.n(i),r=e("tc9R"),u=e("pOT7"),d=e("vRWG"),g=e("I6Nb"),m=e("iWgA"),f=e.n(m),b=e("8C7G"),k=e("wH44"),v=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:f.a},meta:{title:"Align Self",description:"Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis."},tableOfContents:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Stretch",slug:"stretch",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=g.ContentsLayout;function j(n){var t=n.components,e=Object(s.a)(n,["components"]);return Object(p.a)(h,Object(a.a)({},v,e,{components:t,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"self-auto")," to align an item based on the value of the container's ",Object(p.a)("inlineCode",{parentName:"p"},"align-items")," property:")),Object(p.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-auto flex-1 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="flex-1 rounded-md bg-emerald-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"emerald",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"self-start")," to align an item to the start of the container's cross axis, despite the container's ",Object(p.a)("inlineCode",{parentName:"p"},"align-items")," value:")),Object(p.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-start flex-1 rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-amber-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-start</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"amber",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"self-center")," to align an item along the center of the container's cross axis, despite the container's ",Object(p.a)("inlineCode",{parentName:"p"},"align-items")," value:")),Object(p.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-purple-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-center flex-1 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-purple-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-center</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"purple",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"self-end")," to align an item to the end of the container's cross axis, despite the container's ",Object(p.a)("inlineCode",{parentName:"p"},"align-items")," value:")),Object(p.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-rose-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-end flex-1 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-rose-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-end</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"rose",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"self-stretch")," to stretch an item to fill the container's cross axis, despite the container's ",Object(p.a)("inlineCode",{parentName:"p"},"align-items")," value:")),Object(p.a)(u.a,{preview:'\n  <div class="flex items-stretch h-24 space-x-2">\n    <div class="flex-1 rounded-md bg-fuchsia-300 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="self-stretch flex-1 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="flex-1 rounded-md bg-fuchsia-300 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">self-stretch</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-6",color:"fuchsia",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the alignment of a flex item at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:self-end")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"self-end")," utility at only medium screen sizes and above."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"items-stretch ...",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"self-auto ",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:self-end")," ...",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(b.a,{plugin:"alignSelf",name:"align-self",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(k.a,{plugin:"alignSelf",name:"align-self",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=v},Zb5r:function(n,t,e){"use strict";function a(n){return n.reduce((function(t,e,a){return 0===a?e:a===n.length-1?"".concat(t," and ").concat(e):"".concat(t,", ").concat(e)}),"")}e.d(t,"a",(function(){return a}))},ap0H:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var a=e("q1tI"),s=e.n(a),c=e("8Kt/"),o=e.n(c),p=s.a.createElement;function i(n){var t=n.suffix,e=n.children+(t?" - ".concat(t):"");return p(o.a,null,p("title",{key:"title"},e),p("meta",{key:"twitter:title",name:"twitter:title",content:e}),p("meta",{key:"og:title",property:"og:title",content:e}))}},iWgA:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:n,variants:t}){n({".self-auto":{"align-self":"auto"},".self-start":{"align-self":"flex-start"},".self-end":{"align-self":"flex-end"},".self-center":{"align-self":"center"},".self-stretch":{"align-self":"stretch"}},t("alignSelf"))}}},"p+I8":function(n,t,e){"use strict";n.exports=function(n){var t=typeof n;return null!==n&&("object"===t||"function"===t)}},pOT7:function(n,t,e){"use strict";e.d(t,"a",(function(){return f})),e.d(t,"b",(function(){return b}));var a=e("wx14"),s=e("q1tI"),c=e.n(s),o=e("iuhU"),p=e("ZMKu"),i=c.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(n){var t=Object(s.useRef)(),e=Object(s.useState)(!1),c=e[0],o=e[1],p=Object(s.useState)({}),l=p[0],r=p[1];return Object(s.useEffect)((function(){if(c){var n=new window.ResizeObserver(e);return e(),n.observe(t.current.contentDocument.body),function(){n.disconnect()}}function e(){r({height:t.current.contentDocument.body.scrollHeight})}}),[c]),i("iframe",Object(a.a)({},n,{ref:t,onLoad:function(){return o(!0)},style:l}))}function m(n){var t=n.color,e=n.snippet;return i("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},i("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:e}})))}function f(n){var t=n.preview,e=n.src,a=n.snippet,s=n.previewClassName,c=n.color,p=void 0===c?"gray":c;return i("div",{className:"relative overflow-hidden mb-8"},t?i("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",r[p],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):i(g,{src:e,className:Object(o.a)("w-full rounded-t-xl",r[p])}),i(m,{color:p,snippet:a}))}function b(n){var t=n.preview,e=n.src,a=n.previewClassName,c=n.snippet,l=n.color,f=void 0===l?"gray":l,b=n.min,k=void 0!==b&&b,v=Object(s.useRef)(),h=Object(p.h)(0),j=Object(s.useRef)(),O=Object(s.useState)(!1),x=O[0],N=O[1];return Object(s.useEffect)((function(){var n=new window.ResizeObserver((function(){h.set(0)}));return n.observe(v.current),function(){n.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:v,className:"relative rounded-t-xl ".concat(u[f])},i("div",{className:k?"md:w-88":void 0},i(p.d.div,{className:"relative",style:{marginRight:Object(p.i)(h,(function(n){return-n}))}},t?i("div",{className:Object(o.a)("rounded-t-xl",a,r[f],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):i(g,{src:e,className:Object(o.a)("w-full rounded-t-xl",r[f],{"pointer-events-none":x})}))),i("div",{ref:j,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(p.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:j,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(k?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),N(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[f]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(m,{color:f,snippet:c}))}},vRWG:function(n,t,e){"use strict";e.r(t),e.d(t,"DocumentationLayout",(function(){return g}));var a=e("wx14"),s=e("q1tI"),c=e.n(s),o=e("ekQu"),p=e("8Kt/"),i=e.n(p),l=e("nOHt"),r=e("ap0H"),u=e("1Q1k"),d=c.a.createElement;function g(n){var t=Object(l.useRouter)();return d(c.a.Fragment,null,d(r.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},n.layoutProps.meta.metaTitle||n.layoutProps.meta.title),d(i.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(a.a)({nav:u.a},n)))}},wH44:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var a=e("rePB"),s=e("q1tI"),c=e.n(s),o=e("AOjV"),p=e("AI3G"),i=e("Zb5r"),l=c.a.createElement;function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function u(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){Object(a.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function d(n){var t=n.plugin,e=n.name,s=Object(p.a)(t);return e=e||t.replace(/([a-z])([A-Z])/g,(function(n,t,e){return"".concat(t," ").concat(e.toLowerCase())})),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",e," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(s.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(o.a,{path:"corePlugins",before:"...",add:s.reduce((function(n,t){return u(u({},n),{},Object(a.a)({},t,!1))}),{})}))}}},[["2c5R",0,2,6,1,3,4,5,7]]]);