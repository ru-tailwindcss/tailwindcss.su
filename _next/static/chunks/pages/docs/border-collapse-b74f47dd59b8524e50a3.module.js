(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{"5xSE":function(n,a,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,t){"use strict";t.d(a,"a",(function(){return r}));var s=t("q1tI"),e=t.n(s),p=t("98BF"),o=t("Zb5r"),c=t("AOjV"),l=e.a.createElement;function r(n){var{plugin:a,name:t}=n,s=p.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var e=["responsive","hover","focus","active","group-hover"].filter(n=>!s.includes(n)).slice(0,2),r="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(s.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(o.a)(s).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(t,".");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:r}}),l("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",t," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",l("code",null,a)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",l("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",l("code",null,"tailwind.config.js"),"."),l("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",s.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(e),":"),l(c.a,{path:"variants.extend",before:"...",add:{[a]:e}}))}},AOjV:function(n,a,t){"use strict";t.d(a,"a",(function(){return u}));var s=t("q1tI"),e=t.n(s),p=(t("Btb4"),t("AI3G")),o=t("iuhU"),c=e.a.createElement;function l(n){var{value:a}=n;return"string"===typeof a?c("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?c(e.a.Fragment,null,c("span",{className:"token punctuation"},"["),a.map((n,t)=>c(s.Fragment,{key:t},c(l,{value:n}),t===a.length-1?null:c("span",{className:"token punctuation"},", "))),c("span",{className:"token punctuation"},"]")):"boolean"===typeof a?c("span",{className:"token boolean"},a.toString()):a.toString()}function r(n){var{edits:a,indent:t="",type:e="inserted"}=n;return c("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===e,"deleted-sign deleted":"inserted"!==e})},Object.keys(a).map((n,p)=>{return c(s.Fragment,{key:p},c("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===e,deleted:"inserted"!==e})},"inserted"===e?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(r=n)?r:"'".concat(r,"'"),c("span",{className:"token operator"},":")," ",c(l,{value:a[n]}),c("span",{className:"token punctuation"},","),"\n");var r}))}function u(n){var{path:a,add:t,remove:e,before:o,after:l}=n;return a="string"===typeof a?a.split("."):a,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",a.map((n,a)=>c(s.Fragment,{key:a},"  ","  ".repeat(a+1),n,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n")),o&&Object(p.a)(o).map((n,t)=>c(s.Fragment,{key:t},"  ".repeat(a.length+2),c("span",{className:"token comment"},"// ".concat(n)),"\n"))),e&&c(r,{edits:e,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&c(r,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),c("span",{className:"token unchanged"},l&&Object(p.a)(l).map(n=>"".concat("  ".repeat(a.length+2)).concat(n,"\n")),a.map((n,t)=>c(s.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")),"  }")))))}},Btb4:function(n,a,t){"use strict";const s=t("5xSE"),e=t("p+I8"),p=t("GAX2").default;n.exports=(n,a,t)=>{const o=[];return function n(a,t,c){let l;(t=t||{}).indent=t.indent||"\t",c=c||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=n=>{if(void 0===t.inlineCharacterLimit)return n;const a=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),c).replace(new RegExp(l.indent,"g"),c+t.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||s(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const s="["+l.newLine+a.map((s,e)=>{const p=a.length-1===e?l.newLine:","+l.newLineOrSpace;let o=n(s,t,c+t.indent);return t.transform&&(o=t.transform(a,e,o)),l.indent+o+p}).join("")+l.pad+"]";return o.pop(),r(s)}if(e(a)){let s=Object.keys(a).concat(p(a));if(t.filter&&(s=s.filter(n=>t.filter(a,n))),0===s.length)return"{}";o.push(a);const e="{"+l.newLine+s.map((e,p)=>{const o=s.length-1===p?l.newLine:","+l.newLineOrSpace,r="symbol"===typeof e,u=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(e),i=r||u?e:n(e,t);let d=n(a[e],t,c+t.indent);return t.transform&&(d=t.transform(a,e,d)),l.indent+String(i)+": "+d+o}).join("")+l.pad+"}";return o.pop(),r(e)}return a=String(a).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,t)}},GAX2:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter(a=>Object.prototype.propertyIsEnumerable.call(n,a))},Vhtw:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return h}));var s=t("wx14"),e=t("Ff2n"),p=t("q1tI"),o=t.n(p),c=t("7ljp"),l=(t("YFqc"),t("tc9R")),r=t("pOT7"),u=t("vRWG"),i=t("I6Nb"),d=t("sEq3"),k=t.n(d),g=t("8C7G"),b=t("wH44"),m=(o.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:k()},meta:{title:"\u0413\u0440\u0430\u043d\u0438\u0446\u044b \u0432\u043e\u043a\u0440\u0443\u0433 \u044f\u0447\u0435\u0435\u043a",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0442\u043e\u0433\u043e, \u0434\u043e\u043b\u0436\u043d\u044b \u043b\u0438 \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0438\u043b\u0438 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c\u0441\u044f."},tableOfContents:[{title:"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c",slug:"razdelit",children:[]},{title:"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c",slug:"svernut",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),f=i.ContentsLayout;function h(n){var{components:a}=n,t=Object(e.a)(n,["components"]);return Object(c.a)(f,Object(s.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"razdelit",toc:!0},"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"border-separate"),", \u0447\u0442\u043e\u0431\u044b \u043a\u0430\u0436\u0434\u0430\u044f \u044f\u0447\u0435\u0439\u043a\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u043b\u0430 \u0441\u0432\u043e\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0433\u0440\u0430\u043d\u0438\u0446\u044b.")),Object(c.a)(r.a,{preview:'\n  <table class="border-separate w-full border-2 border-emerald-800">\n    <thead class="bg-emerald-200">\n      <tr>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">\u041e\u0431\u043b\u0430\u0441\u0442\u044c</th>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">\u0413\u043e\u0440\u043e\u0434</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u0418\u043d\u0434\u0438\u0430\u043d\u0430</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u0418\u043d\u0434\u0438\u0430\u043d\u0430\u043f\u043e\u043b\u0438\u0441</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u041e\u0433\u0430\u0439\u043e</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u041a\u043e\u043b\u0443\u043c\u0431\u0443\u0441</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u041c\u0438\u0447\u0438\u0433\u0430\u043d</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u0414\u0435\u0442\u0440\u043e\u0439\u0442</td>\n      </tr>\n    </tbody>\n  </table>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-separate</span> border border-green-800 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041e\u0431\u043b\u0430\u0441\u0442\u044c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0413\u043e\u0440\u043e\u0434<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0418\u043d\u0434\u0438\u0430\u043d\u0430<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0418\u043d\u0434\u0438\u0430\u043d\u0430\u043f\u043e\u043b\u0438\u0441<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041e\u0433\u0430\u0439\u043e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041a\u043e\u043b\u0443\u043c\u0431\u0443\u0441<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041c\u0438\u0447\u0438\u0433\u0430\u043d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0414\u0435\u0442\u0440\u043e\u0439\u0442<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"svernut",toc:!0},"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"border-collapse"),", \u0447\u0442\u043e\u0431\u044b \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0441\u043c\u0435\u0436\u043d\u044b\u0445 \u044f\u0447\u0435\u0435\u043a \u0432 \u0435\u0434\u0438\u043d\u0443\u044e \u0433\u0440\u0430\u043d\u0438\u0446\u0443, \u043a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u044d\u0442\u043e \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0441\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0430\u043d\u0438\u0446 \u0442\u0435\u0433\u0430 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f ",Object(c.a)("inlineCode",{parentName:"p"},"<table>"),".")),Object(c.a)(r.a,{preview:'\n  <table class="border-collapse w-full border-2 border-emerald-800">\n    <thead class="bg-emerald-200">\n      <tr>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">\u041e\u0431\u043b\u0430\u0441\u0442\u044c</th>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">\u0413\u043e\u0440\u043e\u0434</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u0418\u043d\u0434\u0438\u0430\u043d\u0430</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u0418\u043d\u0434\u0438\u0430\u043d\u0430\u043f\u043e\u043b\u0438\u0441</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u041e\u0433\u0430\u0439\u043e</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u041a\u043e\u043b\u0443\u043c\u0431\u0443\u0441</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u041c\u0438\u0447\u0438\u0433\u0430\u043d</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">\u0414\u0435\u0442\u0440\u043e\u0439\u0442</td>\n      </tr>\n    </tbody>\n  </table>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-collapse</span> border border-green-800 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041e\u0431\u043b\u0430\u0441\u0442\u044c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0413\u043e\u0440\u043e\u0434<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0418\u043d\u0434\u0438\u0430\u043d\u0430<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0418\u043d\u0434\u0438\u0430\u043d\u0430\u043f\u043e\u043b\u0438\u0441<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041e\u0433\u0430\u0439\u043e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041a\u043e\u043b\u0443\u043c\u0431\u0443\u0441<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u041c\u0438\u0447\u0438\u0433\u0430\u043d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u0414\u0435\u0442\u0440\u043e\u0439\u0442<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(c.a)(l.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(c.a)(g.a,{plugin:"borderCollapse",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(c.a)(b.a,{plugin:"borderCollapse",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=m},Zb5r:function(n,a,t){"use strict";function s(n){return n.reduce((a,t,s)=>0===s?t:s===n.length-1?"".concat(a," \u0438 ").concat(t):"".concat(a,", ").concat(t),"")}t.d(a,"a",(function(){return s}))},ap0H:function(n,a,t){"use strict";t.d(a,"a",(function(){return l}));var s=t("q1tI"),e=t.n(s),p=t("8Kt/"),o=t.n(p),c=e.a.createElement;function l(n){var{suffix:a,children:t}=n,s=t+(a?" - ".concat(a):"");return c(o.a,null,c("title",{key:"title"},s),c("meta",{key:"twitter:title",name:"twitter:title",content:s}),c("meta",{key:"og:title",property:"og:title",content:s}))}},dam5:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-collapse",function(){return t("Vhtw")}])},"p+I8":function(n,a,t){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return m}));var s=t("wx14"),e=t("q1tI"),p=t.n(e),o=t("iuhU"),c=t("ZMKu"),l=p.a.createElement,r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},u={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},i={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function k(n){var a=Object(e.useRef)(),{0:t,1:p}=Object(e.useState)(!1),{0:o,1:c}=Object(e.useState)({});return Object(e.useEffect)(()=>{if(t){var n=new window.ResizeObserver(s);return s(),n.observe(a.current.contentDocument.body),()=>{n.disconnect()}}function s(){c({height:a.current.contentDocument.body.scrollHeight})}},[t]),l("iframe",Object(s.a)({},n,{ref:a,onLoad:()=>p(!0),style:o}))}function g(n){var{color:a,snippet:t}=n;return l("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",r[a],{"bg-gray-800":!r[a]})},l("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[a]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function b(n){var{preview:a,src:t,snippet:s,previewClassName:e,color:p="gray"}=n;return l("div",{className:"relative overflow-hidden mb-8"},a?l("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",u[p],e,{"p-10":!e}),dangerouslySetInnerHTML:{__html:a}}):l(k,{src:t,className:Object(o.a)("w-full rounded-t-xl",u[p])}),l(g,{color:p,snippet:s}))}function m(n){var{preview:a,src:t,previewClassName:s,snippet:p,color:r="gray",min:b=!1}=n,m=Object(e.useRef)(),f=Object(c.h)(0),h=Object(e.useRef)(),{0:v,1:y}=Object(e.useState)(!1);return Object(e.useEffect)(()=>{var n=new window.ResizeObserver(()=>{f.set(0)});return n.observe(m.current),()=>{n.disconnect()}},[]),l("div",{className:"relative mb-8"},l("div",{ref:m,className:"relative rounded-t-xl ".concat(i[r])},l("div",{className:b?"md:w-88":void 0},l(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(f,n=>-n)}},a?l("div",{className:Object(o.a)("rounded-t-xl",s,u[r],{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):l(k,{src:t,className:Object(o.a)("w-full rounded-t-xl",u[r],{"pointer-events-none":v})}))),l("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(c.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),y(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[r]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(g,{color:r,snippet:p}))}},sEq3:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,variants:a}){n({".border-collapse":{"border-collapse":"collapse"},".border-separate":{"border-collapse":"separate"}},a("borderCollapse"))}}},vRWG:function(n,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return k}));var s=t("wx14"),e=t("q1tI"),p=t.n(e),o=t("ekQu"),c=t("8Kt/"),l=t.n(c),r=t("nOHt"),u=t("ap0H"),i=t("1Q1k"),d=p.a.createElement;function k(n){var a=Object(r.useRouter)();return d(p.a.Fragment,null,d(u.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},n.layoutProps.meta.metaTitle||n.layoutProps.meta.title),d(l.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(s.a)({nav:i.a},n)))}},wH44:function(n,a,t){"use strict";t.d(a,"a",(function(){return d}));var s=t("rePB"),e=t("q1tI"),p=t.n(e),o=t("AOjV"),c=t("AI3G"),l=t("Zb5r"),r=p.a.createElement;function u(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,s)}return t}function i(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){Object(s.a)(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}function d(n){var{plugin:a,name:t}=n,s=Object(c.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(n,a,t)=>"".concat(a," ").concat(t.toLowerCase())),r("div",{className:"prose"},r("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",t,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",r("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(s.map(n=>"<code>".concat(n,"</code>")))}})," ",s.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",r("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",r("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),r(o.a,{path:"corePlugins",before:"...",add:s.reduce((n,a)=>i(i({},n),{},{[a]:!1}),{})}))}}},[["dam5",0,2,6,1,3,4,5,7]]]);