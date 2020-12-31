_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[119],{"5xSE":function(n,t,a){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,t,a){"use strict";a.d(t,"a",(function(){return r}));var e=a("rePB"),s=a("q1tI"),p=a.n(s),c=a("98BF"),o=a("Zb5r"),i=a("AOjV"),l=p.a.createElement;function r(n){var t=n.plugin,a=n.name,s=c.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(n,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(n){return!s.includes(n)})).slice(0,2),r="By default, ".concat(s.length?"only ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(a," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:r}}),l("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",l("code",null,t)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(p)," variants:"),l(i.a,{path:"variants.extend",before:"...",add:Object(e.a)({},t,p)}))}},AOjV:function(n,t,a){"use strict";a.d(t,"a",(function(){return r}));var e=a("q1tI"),s=a.n(e),p=(a("Btb4"),a("AI3G")),c=a("iuhU"),o=s.a.createElement;function i(n){var t=n.value;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((function(n,a){return o(e.Fragment,{key:a},o(i,{value:n}),a===t.length-1?null:o("span",{className:"token punctuation"},", "))})),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function l(n){var t=n.edits,a=n.indent,s=void 0===a?"":a,p=n.type,l=void 0===p?"inserted":p;return o("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(t).map((function(n,a){return o(e.Fragment,{key:a},o("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(p=n)?p:"'".concat(p,"'"),o("span",{className:"token operator"},":")," ",o(i,{value:t[n]}),o("span",{className:"token punctuation"},","),"\n");var p})))}function r(n){var t=n.path,a=n.add,s=n.remove,c=n.before,i=n.after;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((function(n,t){return o(e.Fragment,{key:t},"  ","  ".repeat(t+1),n,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")})),c&&Object(p.a)(c).map((function(n,a){return o(e.Fragment,{key:a},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(n)),"\n")}))),s&&o(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&o(l,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},i&&Object(p.a)(i).map((function(n){return"".concat("  ".repeat(t.length+2)).concat(n,"\n")})),t.map((function(n,a){return o(e.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")})),"  }")))))}},BHwf:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var e=a("wx14"),s=a("Ff2n"),p=a("q1tI"),c=a.n(p),o=a("7ljp"),i=a("YFqc"),l=a.n(i),r=a("tc9R"),u=a("pOT7"),d=a("vRWG"),g=a("I6Nb"),m=a("zmQS"),k=a.n(m),b=a("8C7G"),f=a("wH44"),v=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:k.a},meta:{title:"Place Items",description:"Utilities for controlling how items are justified and aligned at the same time."},tableOfContents:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"End",slug:"end",children:[]},{title:"Center",slug:"center",children:[]},{title:"Stretch",slug:"stretch",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=g.ContentsLayout;function x(n){var t=n.components,a=Object(s.a)(n,["components"]);return Object(o.a)(h,Object(e.a)({},v,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-auto")," to place grid items automatically in their grid areas:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-2 place-items-auto h-48">\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">1</div>\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">2</div>\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">3</div>\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">4</div>\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">5</div>\n    <div class="rounded-md bg-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">6</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-2 <span class="code-highlight bg-code-highlight">place-items-auto</span> h-48 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-start")," to place grid items on the start of their grid areas on both axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-2 place-items-start h-48">\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">1</div>\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">2</div>\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">3</div>\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">4</div>\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">5</div>\n    <div class="rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">6</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-2 <span class="code-highlight bg-code-highlight">place-items-start</span> h-48 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-end")," to place grid items on the end of their grid areas on both axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-2 place-items-end h-48">\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">1</div>\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">2</div>\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">3</div>\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">4</div>\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">5</div>\n    <div class="rounded-md bg-amber-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">6</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-2 <span class="code-highlight bg-code-highlight">place-items-end</span> h-48 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-center")," to place grid items on the center of their grid areas on both axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-2 place-items-center h-48">\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">1</div>\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">2</div>\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">3</div>\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">4</div>\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">5</div>\n    <div class="rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center h-16 w-16">6</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-2 <span class="code-highlight bg-code-highlight">place-items-center</span> h-48 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-stretch")," to stretch items along their grid areas on both axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-2 place-items-stretch h-48">\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">4</div>\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">5</div>\n    <div class="rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">6</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-2 <span class="code-highlight bg-code-highlight">place-items-stretch</span> h-48 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To place items at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing ",Object(o.a)("inlineCode",{parentName:"p"},"place-items")," utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:place-items-center")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-center")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(e.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"place-items-start md:place-items-center",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(b.a,{plugin:"placeItems",name:"place-items",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(f.a,{plugin:"placeItems",name:"place-items",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=v},Btb4:function(n,t,a){"use strict";const e=a("5xSE"),s=a("p+I8"),p=a("GAX2").default;n.exports=(n,t,a)=>{const c=[];return function n(t,a,o){let i;(a=a||{}).indent=a.indent||"\t",o=o||"",i=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=n=>{if(void 0===a.inlineCharacterLimit)return n;const t=n.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:n.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),o).replace(new RegExp(i.indent,"g"),o+a.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||e(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const e="["+i.newLine+t.map((e,s)=>{const p=t.length-1===s?i.newLine:","+i.newLineOrSpace;let c=n(e,a,o+a.indent);return a.transform&&(c=a.transform(t,s,c)),i.indent+c+p}).join("")+i.pad+"]";return c.pop(),l(e)}if(s(t)){let e=Object.keys(t).concat(p(t));if(a.filter&&(e=e.filter(n=>a.filter(t,n))),0===e.length)return"{}";c.push(t);const s="{"+i.newLine+e.map((s,p)=>{const c=e.length-1===p?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof s,r=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||r?s:n(s,a);let d=n(t[s],a,o+a.indent);return a.transform&&(d=a.transform(t,s,d)),i.indent+String(u)+": "+d+c}).join("")+i.pad+"}";return c.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(n,t,a)}},GAX2:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n=>Object.getOwnPropertySymbols(n).filter(t=>Object.prototype.propertyIsEnumerable.call(n,t))},OF2o:function(n,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/place-items",function(){return a("BHwf")}])},Zb5r:function(n,t,a){"use strict";function e(n){return n.reduce((function(t,a,e){return 0===e?a:e===n.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a)}),"")}a.d(t,"a",(function(){return e}))},ap0H:function(n,t,a){"use strict";a.d(t,"a",(function(){return i}));var e=a("q1tI"),s=a.n(e),p=a("8Kt/"),c=a.n(p),o=s.a.createElement;function i(n){var t=n.suffix,a=n.children+(t?" - ".concat(t):"");return o(c.a,null,o("title",{key:"title"},a),o("meta",{key:"twitter:title",name:"twitter:title",content:a}),o("meta",{key:"og:title",property:"og:title",content:a}))}},"p+I8":function(n,t,a){"use strict";n.exports=function(n){var t=typeof n;return null!==n&&("object"===t||"function"===t)}},pOT7:function(n,t,a){"use strict";a.d(t,"a",(function(){return k})),a.d(t,"b",(function(){return b}));var e=a("wx14"),s=a("q1tI"),p=a.n(s),c=a("iuhU"),o=a("ZMKu"),i=p.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(n){var t=Object(s.useRef)(),a=Object(s.useState)(!1),p=a[0],c=a[1],o=Object(s.useState)({}),l=o[0],r=o[1];return Object(s.useEffect)((function(){if(p){var n=new window.ResizeObserver(a);return a(),n.observe(t.current.contentDocument.body),function(){n.disconnect()}}function a(){r({height:t.current.contentDocument.body.scrollHeight})}}),[p]),i("iframe",Object(e.a)({},n,{ref:t,onLoad:function(){return c(!0)},style:l}))}function m(n){var t=n.color,a=n.snippet;return i("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},i("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function k(n){var t=n.preview,a=n.src,e=n.snippet,s=n.previewClassName,p=n.color,o=void 0===p?"gray":p;return i("div",{className:"relative overflow-hidden mb-8"},t?i("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",r[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):i(g,{src:a,className:Object(c.a)("w-full rounded-t-xl",r[o])}),i(m,{color:o,snippet:e}))}function b(n){var t=n.preview,a=n.src,e=n.previewClassName,p=n.snippet,l=n.color,k=void 0===l?"gray":l,b=n.min,f=void 0!==b&&b,v=Object(s.useRef)(),h=Object(o.h)(0),x=Object(s.useRef)(),j=Object(s.useState)(!1),O=j[0],w=j[1];return Object(s.useEffect)((function(){var n=new window.ResizeObserver((function(){h.set(0)}));return n.observe(v.current),function(){n.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:v,className:"relative rounded-t-xl ".concat(u[k])},i("div",{className:f?"md:w-88":void 0},i(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(h,(function(n){return-n}))}},t?i("div",{className:Object(c.a)("rounded-t-xl",e,r[k],{"p-10":!e}),dangerouslySetInnerHTML:{__html:t}}):i(g,{src:a,className:Object(c.a)("w-full rounded-t-xl",r[k],{"pointer-events-none":O})}))),i("div",{ref:x,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(o.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:x,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(f?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[k]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(m,{color:k,snippet:p}))}},vRWG:function(n,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return g}));var e=a("wx14"),s=a("q1tI"),p=a.n(s),c=a("ekQu"),o=a("8Kt/"),i=a.n(o),l=a("nOHt"),r=a("ap0H"),u=a("1Q1k"),d=p.a.createElement;function g(n){var t=Object(l.useRouter)();return d(p.a.Fragment,null,d(r.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},n.layoutProps.meta.metaTitle||n.layoutProps.meta.title),d(i.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(c.b,Object(e.a)({nav:u.a},n)))}},wH44:function(n,t,a){"use strict";a.d(t,"a",(function(){return d}));var e=a("rePB"),s=a("q1tI"),p=a.n(s),c=a("AOjV"),o=a("AI3G"),i=a("Zb5r"),l=p.a.createElement;function r(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,e)}return a}function u(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(e.a)(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}function d(n){var t=n.plugin,a=n.name,s=Object(o.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(function(n,t,a){return"".concat(t," ").concat(a.toLowerCase())})),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(s.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(c.a,{path:"corePlugins",before:"...",add:s.reduce((function(n,t){return u(u({},n),{},Object(e.a)({},t,!1))}),{})}))}},zmQS:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:n,variants:t}){n({".place-items-auto":{"place-items":"auto"},".place-items-start":{"place-items":"start"},".place-items-end":{"place-items":"end"},".place-items-center":{"place-items":"center"},".place-items-stretch":{"place-items":"stretch"}},t("placeItems"))}}}},[["OF2o",0,2,6,1,3,4,5,7]]]);