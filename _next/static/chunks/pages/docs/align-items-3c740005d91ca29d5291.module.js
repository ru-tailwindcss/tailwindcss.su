(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"5xSE":function(n,a,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,t){"use strict";t.d(a,"a",(function(){return i}));var e=t("q1tI"),s=t.n(e),p=t("98BF"),c=t("Zb5r"),o=t("AOjV"),l=s.a.createElement;function i(n){var{plugin:a,name:t}=n,e=p.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(n=>!e.includes(n)).slice(0,2),i="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(e.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(c.a)(e).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(t,".");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:i}}),l("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",t," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",l("code",null,a)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",l("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",l("code",null,"tailwind.config.js"),"."),l("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",e.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(c.a)(s),":"),l(o.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},AOjV:function(n,a,t){"use strict";t.d(a,"a",(function(){return r}));var e=t("q1tI"),s=t.n(e),p=(t("Btb4"),t("AI3G")),c=t("iuhU"),o=s.a.createElement;function l(n){var{value:a}=n;return"string"===typeof a?o("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),a.map((n,t)=>o(e.Fragment,{key:t},o(l,{value:n}),t===a.length-1?null:o("span",{className:"token punctuation"},", "))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof a?o("span",{className:"token boolean"},a.toString()):a.toString()}function i(n){var{edits:a,indent:t="",type:s="inserted"}=n;return o("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(a).map((n,p)=>{return o(e.Fragment,{key:p},o("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(i=n)?i:"'".concat(i,"'"),o("span",{className:"token operator"},":")," ",o(l,{value:a[n]}),o("span",{className:"token punctuation"},","),"\n");var i}))}function r(n){var{path:a,add:t,remove:s,before:c,after:l}=n;return a="string"===typeof a?a.split("."):a,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",a.map((n,a)=>o(e.Fragment,{key:a},"  ","  ".repeat(a+1),n,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")),c&&Object(p.a)(c).map((n,t)=>o(e.Fragment,{key:t},"  ".repeat(a.length+2),o("span",{className:"token comment"},"// ".concat(n)),"\n"))),s&&o(i,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&o(i,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),o("span",{className:"token unchanged"},l&&Object(p.a)(l).map(n=>"".concat("  ".repeat(a.length+2)).concat(n,"\n")),a.map((n,t)=>o(e.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")),"  }")))))}},Btb4:function(n,a,t){"use strict";const e=t("5xSE"),s=t("p+I8"),p=t("GAX2").default;n.exports=(n,a,t)=>{const c=[];return function n(a,t,o){let l;(t=t||{}).indent=t.indent||"\t",o=o||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=n=>{if(void 0===t.inlineCharacterLimit)return n;const a=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),o).replace(new RegExp(l.indent,"g"),o+t.indent)};if(-1!==c.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||e(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";c.push(a);const e="["+l.newLine+a.map((e,s)=>{const p=a.length-1===s?l.newLine:","+l.newLineOrSpace;let c=n(e,t,o+t.indent);return t.transform&&(c=t.transform(a,s,c)),l.indent+c+p}).join("")+l.pad+"]";return c.pop(),i(e)}if(s(a)){let e=Object.keys(a).concat(p(a));if(t.filter&&(e=e.filter(n=>t.filter(a,n))),0===e.length)return"{}";c.push(a);const s="{"+l.newLine+e.map((s,p)=>{const c=e.length-1===p?l.newLine:","+l.newLineOrSpace,i="symbol"===typeof s,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||r?s:n(s,t);let d=n(a[s],t,o+t.indent);return t.transform&&(d=t.transform(a,s,d)),l.indent+String(u)+": "+d+c}).join("")+l.pad+"}";return c.pop(),i(s)}return a=String(a).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,t)}},GAX2:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter(a=>Object.prototype.propertyIsEnumerable.call(n,a))},Iofc:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,variants:a}){n({".items-start":{"align-items":"flex-start"},".items-end":{"align-items":"flex-end"},".items-center":{"align-items":"center"},".items-baseline":{"align-items":"baseline"},".items-stretch":{"align-items":"stretch"}},a("alignItems"))}}},Zb5r:function(n,a,t){"use strict";function e(n){return n.reduce((a,t,e)=>0===e?t:e===n.length-1?"".concat(a," \u0438 ").concat(t):"".concat(a,", ").concat(t),"")}t.d(a,"a",(function(){return e}))},gXDe:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return x}));var e=t("wx14"),s=t("Ff2n"),p=t("q1tI"),c=t.n(p),o=t("7ljp"),l=t("YFqc"),i=t.n(l),r=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),m=t("Iofc"),b=t.n(m),k=t("8C7G"),f=t("wH44"),v=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u0444\u043b\u0435\u043a\u0441 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0438 \u0441\u0435\u0442\u043a\u0438 \u0432\u0434\u043e\u043b\u044c \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430."},tableOfContents:[{title:"Stretch",slug:"stretch",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Baseline",slug:"baseline",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),h=g.ContentsLayout;function x(n){var{components:a}=n,t=Object(s.a)(n,["components"]);return Object(o.a)(h,Object(e.a)({},v,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"items-stretch"),", \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0441\u0442\u044f\u043d\u0443\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0434\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-stretch p-4 space-x-4 bg-stripes bg-stripes-light-blue-500 rounded-lg">\n    <div class="flex-1 py-4 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="flex-1 py-12 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="flex-1 py-8 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">items-stretch</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>py-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>py-12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>py-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"lightBlue",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"items-start"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043f\u043e \u043d\u0430\u0447\u0430\u043b\u0443 \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-start p-4 space-x-4 bg-stripes bg-stripes-fuchsia-500 rounded-lg">\n    <div class="flex-1 py-2 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center">1</div>\n    <div class="flex-1 py-8 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center">2</div>\n    <div class="flex-1 py-5 rounded-md bg-fuchsia-500 text-white text-2xl font-extrabold flex items-center justify-center">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">items-start</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-24<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h-16<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"items-center")," \u0434\u043b\u044f \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443 \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-center p-4 space-x-4 bg-stripes bg-stripes-rose-500 rounded-lg">\n    <div class="flex-1 py-2 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">1</div>\n    <div class="flex-1 py-8 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">2</div>\n    <div class="flex-1 py-5 rounded-md bg-rose-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">items-center</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"items-end"),", \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043f\u043e \u043a\u043e\u043d\u0446\u0443 \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-end p-4 space-x-4 bg-stripes bg-stripes-purple-500 rounded-lg">\n    <div class="flex-1 py-2 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">1</div>\n    <div class="flex-1 py-8 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">2</div>\n    <div class="flex-1 py-5 rounded-md bg-purple-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">items-end</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"baseline",toc:!0},"Baseline"),Object(o.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"items-baseline")," \u0434\u043b\u044f \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e \u043f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u043e\u0439 \u043e\u0441\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430 \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u0438\u0445 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u043b\u0438\u043d\u0438\u0438 \u0431\u044b\u043b\u0438 \u0432\u044b\u0440\u043e\u0432\u043d\u0435\u043d\u044b:")),Object(o.a)(u.a,{preview:'\n  <div class="flex items-baseline p-4 space-x-4 bg-stripes bg-stripes-emerald-500 rounded-lg">\n    <div class="flex-1 pt-4 pb-6 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">1</div>\n    <div class="flex-1 pt-6 pb-10 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">2</div>\n    <div class="flex-1 pt-8 pb-4 rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center m-2">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">items-baseline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pt-4 pb-6 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pt-6 pb-10 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pt-8 pb-4 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(o.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u0433\u0438\u0431\u043a\u0438\u0445 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u043c\u0443 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c\u0443 \u0441\u043b\u0443\u0436\u0435\u0431\u043d\u043e\u043c\u0443 \u043a\u043b\u0430\u0441\u0441\u0443. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(o.a)("inlineCode",{parentName:"p"},"md:items-center"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(o.a)("inlineCode",{parentName:"p"},"items-center")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(e.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(e.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"'),"items-stretch ",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:items-center")," ...",Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(e.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(e.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(o.a)(r.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(o.a)(r.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(o.a)(k.a,{plugin:"alignItems",name:"align-items",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(o.a)(f.a,{plugin:"alignItems",name:"align-items",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=v},iZa5:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/align-items",function(){return t("gXDe")}])},"p+I8":function(n,a,t){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return k}));var e=t("wx14"),s=t("q1tI"),p=t.n(s),c=t("iuhU"),o=t("ZMKu"),l=p.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(n){var a=Object(s.useRef)(),{0:t,1:p}=Object(s.useState)(!1),{0:c,1:o}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var n=new window.ResizeObserver(e);return e(),n.observe(a.current.contentDocument.body),()=>{n.disconnect()}}function e(){o({height:a.current.contentDocument.body.scrollHeight})}},[t]),l("iframe",Object(e.a)({},n,{ref:a,onLoad:()=>p(!0),style:c}))}function m(n){var{color:a,snippet:t}=n;return l("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",i[a],{"bg-gray-800":!i[a]})},l("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[a]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function b(n){var{preview:a,src:t,snippet:e,previewClassName:s,color:p="gray"}=n;return l("div",{className:"relative overflow-hidden mb-8"},a?l("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",r[p],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):l(g,{src:t,className:Object(c.a)("w-full rounded-t-xl",r[p])}),l(m,{color:p,snippet:e}))}function k(n){var{preview:a,src:t,previewClassName:e,snippet:p,color:i="gray",min:b=!1}=n,k=Object(s.useRef)(),f=Object(o.h)(0),v=Object(s.useRef)(),{0:h,1:x}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var n=new window.ResizeObserver(()=>{f.set(0)});return n.observe(k.current),()=>{n.disconnect()}},[]),l("div",{className:"relative mb-8"},l("div",{ref:k,className:"relative rounded-t-xl ".concat(u[i])},l("div",{className:b?"md:w-88":void 0},l(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(f,n=>-n)}},a?l("div",{className:Object(c.a)("rounded-t-xl",e,r[i],{"p-10":!e}),dangerouslySetInnerHTML:{__html:a}}):l(g,{src:t,className:Object(c.a)("w-full rounded-t-xl",r[i],{"pointer-events-none":h})}))),l("div",{ref:v,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(o.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:v,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),x(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[i]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(m,{color:i,snippet:p}))}},wH44:function(n,a,t){"use strict";t.d(a,"a",(function(){return d}));var e=t("rePB"),s=t("q1tI"),p=t.n(s),c=t("AOjV"),o=t("AI3G"),l=t("Zb5r"),i=p.a.createElement;function r(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,e)}return t}function u(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){Object(e.a)(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}function d(n){var{plugin:a,name:t}=n,e=Object(o.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase())),i("div",{className:"prose"},i("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",t,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(e.map(n=>"<code>".concat(n,"</code>")))}})," ",e.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",i("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",i("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),i(c.a,{path:"corePlugins",before:"...",add:e.reduce((n,a)=>u(u({},n),{},{[a]:!1}),{})}))}}},[["iZa5",0,2,6,1,3,4,5,7]]]);