(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[186],{"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),s=n.n(a),i=n("98BF"),c=n("Zb5r"),o=n("AOjV"),r=s.a.createElement;function l(e){var{plugin:t,name:n}=e,a=i.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(a.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(c.a)(a).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(n,".");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:l}}),r("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",r("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",r("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",r("code",null,"tailwind.config.js"),"."),r("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",a.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(c.a)(s),":"),r(o.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),s=n.n(a),i=(n("Btb4"),n("AI3G")),c=n("iuhU"),o=s.a.createElement;function r(e){var{value:t}=e;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((e,n)=>o(a.Fragment,{key:n},o(r,{value:e}),n===t.length-1?null:o("span",{className:"token punctuation"},", "))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var{edits:t,indent:n="",type:s="inserted"}=e;return o("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,i)=>{return o(a.Fragment,{key:i},o("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(l=e)?l:"'".concat(l,"'"),o("span",{className:"token operator"},":")," ",o(r,{value:t[e]}),o("span",{className:"token punctuation"},","),"\n");var l}))}function p(e){var{path:t,add:n,remove:s,before:c,after:r}=e;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>o(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")),c&&Object(i.a)(c).map((e,n)=>o(a.Fragment,{key:n},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&o(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&o(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},r&&Object(i.a)(r).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,n)=>o(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),s=n("p+I8"),i=n("GAX2").default;e.exports=(e,t,n)=>{const c=[];return function e(t,n,o){let r;(n=n||{}).indent=n.indent||"\t",o=o||"",r=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),o).replace(new RegExp(r.indent,"g"),o+n.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const a="["+r.newLine+t.map((a,s)=>{const i=t.length-1===s?r.newLine:","+r.newLineOrSpace;let c=e(a,n,o+n.indent);return n.transform&&(c=n.transform(t,s,c)),r.indent+c+i}).join("")+r.pad+"]";return c.pop(),l(a)}if(s(t)){let a=Object.keys(t).concat(i(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";c.push(t);const s="{"+r.newLine+a.map((s,i)=>{const c=a.length-1===i?r.newLine:","+r.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,n);let d=e(t[s],n,o+n.indent);return n.transform&&(d=n.transform(t,s,d)),r.indent+String(u)+": "+d+c}).join("")+r.pad+"}";return c.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((t,n,a)=>0===a?n:a===e.length-1?"".concat(t," \u0438 ").concat(n):"".concat(t,", ").concat(n),"")}n.d(t,"a",(function(){return a}))},aP1M:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/visibility",function(){return n("fUQf")}])},cXWA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".visible":{visibility:"visible"},".invisible":{visibility:"hidden"}},t("visibility"))}}},fUQf:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n("wx14"),s=n("Ff2n"),i=n("q1tI"),c=n.n(i),o=n("7ljp"),r=n("YFqc"),l=n.n(r),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),g=n("I6Nb"),b=n("cXWA"),m=n.n(b),f=n("8C7G"),v=n("wH44"),O=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m()},meta:{title:"\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Invisible",slug:"invisible",children:[]},{title:"Visible",slug:"visible",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),k=g.ContentsLayout;function j(e){var{components:t}=e,n=Object(s.a)(e,["components"]);return Object(o.a)(k,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"invisible",toc:!0},"Invisible"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"invisible"),", \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u0440\u044b\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u043d\u043e \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0435\u0433\u043e \u043c\u0435\u0441\u0442\u043e \u0432 DOM, \u0432\u043b\u0438\u044f\u044f \u043d\u0430 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 (\u0441\u0440\u0430\u0432\u043d\u0438\u0442\u0435 \u0441 ",Object(o.a)("inlineCode",{parentName:"p"},".hidden")," \u0438\u0437 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 ",Object(o.a)(l.a,{href:"/docs/display#hidden",passHref:!0},Object(o.a)("a",null,"\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f")),").")),Object(o.a)(u.a,{preview:'\n  <div class="rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">1</div>\n  <div class="invisible rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">2</div>\n  <div class="rounded-md bg-indigo-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">3</div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex justify-center space-x-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">invisible</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-center p-10 space-x-4",color:"indigo",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"visible",toc:!0},"Visible"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"visible"),", \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0432\u0438\u0434\u0438\u043c\u044b\u043c. \u042d\u0442\u043e \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0434\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(o.a)("inlineCode",{parentName:"p"},"invisible")," \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0430\u0445 \u0440\u0430\u0437\u043d\u044b\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432.")),Object(o.a)(u.a,{preview:'\n  <div class="rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">1</div>\n  <div class="visible rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">2</div>\n  <div class="rounded-md bg-purple-500 w-32 h-16 flex items-center justify-center text-white text-3xl font-extrabold">3</div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex justify-center space-x-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">visible</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"flex justify-center p-10 space-x-4",color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(o.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u0438\u043c\u0435\u043d\u0438 \u043a\u043b\u0430\u0441\u0441\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(o.a)("inlineCode",{parentName:"p"},"md:invisible")," \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(o.a)("inlineCode",{parentName:"p"},"invisible")," \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"visible ",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:invisible")," ...",Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(o.a)(p.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(o.a)(p.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(o.a)(f.a,{plugin:"visibility",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(o.a)(v.a,{plugin:"visibility",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=O},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n("wx14"),s=n("q1tI"),i=n.n(s),c=n("iuhU"),o=n("ZMKu"),r=i.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var t=Object(s.useRef)(),{0:n,1:i}=Object(s.useState)(!1),{0:c,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var e=new window.ResizeObserver(a);return a(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function a(){o({height:t.current.contentDocument.body.scrollHeight})}},[n]),r("iframe",Object(a.a)({},e,{ref:t,onLoad:()=>i(!0),style:c}))}function b(e){var{color:t,snippet:n}=e;return r("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},r("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m(e){var{preview:t,src:n,snippet:a,previewClassName:s,color:i="gray"}=e;return r("div",{className:"relative overflow-hidden mb-8"},t?r("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",p[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):r(g,{src:n,className:Object(c.a)("w-full rounded-t-xl",p[i])}),r(b,{color:i,snippet:a}))}function f(e){var{preview:t,src:n,previewClassName:a,snippet:i,color:l="gray",min:m=!1}=e,f=Object(s.useRef)(),v=Object(o.h)(0),O=Object(s.useRef)(),{0:k,1:j}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{v.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),r("div",{className:"relative mb-8"},r("div",{ref:f,className:"relative rounded-t-xl ".concat(u[l])},r("div",{className:m?"md:w-88":void 0},r(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(v,e=>-e)}},t?r("div",{className:Object(c.a)("rounded-t-xl",a,p[l],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):r(g,{src:n,className:Object(c.a)("w-full rounded-t-xl",p[l],{"pointer-events-none":k})}))),r("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(o.d.div,{drag:"x",_dragX:v,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(m?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:v},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[l]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(b,{color:l,snippet:i}))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),s=n("q1tI"),i=n.n(s),c=n("AOjV"),o=n("AI3G"),r=n("Zb5r"),l=i.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var{plugin:t,name:n}=e,a=Object(o.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase())),l("div",{className:"prose"},l("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",l("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," ",a.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",l("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",l("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),l(c.a,{path:"corePlugins",before:"...",add:a.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}}},[["aP1M",0,2,6,1,3,4,5,7]]]);