_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[77],{"5xSE":function(e,a,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("rePB"),c=n("q1tI"),s=n.n(c),r=n("98BF"),p=n("Zb5r"),o=n("AOjV"),i=s.a.createElement;function l(e){var a=e.plugin,n=e.name,c=r.defaultConfig.variants[a]||["responsive"];n=n||a.replace(/([a-z])([A-Z])/g,(function(e,a,n){return"".concat(a," ").concat(n.toLowerCase())}));var s=["responsive","hover","focus","active","group-hover"].filter((function(e){return!c.includes(e)})).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(c.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(p.a)(c).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(n,".");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",i("code",null,a)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",i("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",i("code",null,"tailwind.config.js"),"."),i("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",c.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(p.a)(s),":"),i(o.a,{path:"variants.extend",before:"...",add:Object(t.a)({},a,s)}))}},AOjV:function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("q1tI"),c=n.n(t),s=(n("Btb4"),n("AI3G")),r=n("iuhU"),p=c.a.createElement;function o(e){var a=e.value;return"string"===typeof a?p("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?p(c.a.Fragment,null,p("span",{className:"token punctuation"},"["),a.map((function(e,n){return p(t.Fragment,{key:n},p(o,{value:e}),n===a.length-1?null:p("span",{className:"token punctuation"},", "))})),p("span",{className:"token punctuation"},"]")):"boolean"===typeof a?p("span",{className:"token boolean"},a.toString()):a.toString()}function i(e){var a=e.edits,n=e.indent,c=void 0===n?"":n,s=e.type,i=void 0===s?"inserted":s;return p("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===i,"deleted-sign deleted":"inserted"!==i})},Object.keys(a).map((function(e,n){return p(t.Fragment,{key:n},p("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===i,deleted:"inserted"!==i})},"inserted"===i?"+":"-")," ",c,/^[a-z_$][a-z0-9_$]*$/i.test(s=e)?s:"'".concat(s,"'"),p("span",{className:"token operator"},":")," ",p(o,{value:a[e]}),p("span",{className:"token punctuation"},","),"\n");var s})))}function l(e){var a=e.path,n=e.add,c=e.remove,r=e.before,o=e.after;return a="string"===typeof a?a.split("."):a,p("div",{className:"prose"},p("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  ",p("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",p("span",{className:"token punctuation"},"."),p("span",{className:"token property-access"},"exports")," ",p("span",{className:"token operator"},"=")," ",p("span",{className:"token punctuation"},"{"),"\n",a.map((function(e,a){return p(t.Fragment,{key:a},"  ","  ".repeat(a+1),e,p("span",{className:"token operator"},":")," ",p("span",{className:"token punctuation"},"{"),"\n")})),r&&Object(s.a)(r).map((function(e,n){return p(t.Fragment,{key:n},"  ".repeat(a.length+2),p("span",{className:"token comment"},"// ".concat(e)),"\n")}))),c&&p(i,{edits:c,type:"deleted",indent:"  ".repeat(a.length+1)}),n&&p(i,{edits:n,type:"inserted",indent:"  ".repeat(a.length+1)}),p("span",{className:"token unchanged"},o&&Object(s.a)(o).map((function(e){return"".concat("  ".repeat(a.length+2)).concat(e,"\n")})),a.map((function(e,n){return p(t.Fragment,{key:n},"  ","  ".repeat(a.length-n),"}\n")})),"  }")))))}},Btb4:function(e,a,n){"use strict";const t=n("5xSE"),c=n("p+I8"),s=n("GAX2").default;e.exports=(e,a,n)=>{const r=[];return function e(a,n,p){let o;(n=n||{}).indent=n.indent||"\t",p=p||"",o=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===n.inlineCharacterLimit)return e;const a=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return a.length<=n.inlineCharacterLimit?a:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),p).replace(new RegExp(o.indent,"g"),p+n.indent)};if(-1!==r.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";r.push(a);const t="["+o.newLine+a.map((t,c)=>{const s=a.length-1===c?o.newLine:","+o.newLineOrSpace;let r=e(t,n,p+n.indent);return n.transform&&(r=n.transform(a,c,r)),o.indent+r+s}).join("")+o.pad+"]";return r.pop(),i(t)}if(c(a)){let t=Object.keys(a).concat(s(a));if(n.filter&&(t=t.filter(e=>n.filter(a,e))),0===t.length)return"{}";r.push(a);const c="{"+o.newLine+t.map((c,s)=>{const r=t.length-1===s?o.newLine:","+o.newLineOrSpace,i="symbol"===typeof c,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(c),d=i||l?c:e(c,n);let m=e(a[c],n,p+n.indent);return n.transform&&(m=n.transform(a,c,m)),o.indent+String(d)+": "+m+r}).join("")+o.pad+"}";return r.pop(),i(c)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,n)}},GAX2:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},M0Gs:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/drop-shadow",function(){return n("Wrjh")}])},Wrjh:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return N}));var t=n("wx14"),c=n("Ff2n"),s=n("q1tI"),r=n.n(s),p=n("7ljp"),o=n("YFqc"),i=n.n(o),l=n("tc9R"),d=n("vRWG"),m=n("I6Nb"),u=n("8C7G"),b=n("wH44"),O=(r.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:function(){return function(e){(0,e.addUtilities)({".drop-shadow-sm":{"--tw-drop-shadow":"drop-shadow(0 1px 1px rgba(0,0,0,0.05))"},".drop-shadow":{"--tw-drop-shadow":"drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06))"},".drop-shadow-md":{"--tw-drop-shadow":"drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))"},".drop-shadow-lg":{"--tw-drop-shadow":"drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1))"},".drop-shadow-xl":{"--tw-drop-shadow":"drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))"},".drop-shadow-2xl":{"--tw-drop-shadow":"drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))"},".drop-shadow-none":{"--tw-drop-shadow":"drop-shadow(0 0 #0000)"}})}}},meta:{title:"\u041f\u0430\u0434\u0430\u044e\u0449\u0430\u044f \u0442\u0435\u043d\u044c",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0439 \u0442\u0435\u043d\u0438 \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443."},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),j=m.ContentsLayout;function N(e){var a=e.components,n=Object(c.a)(e,["components"]);return Object(p.a)(j,Object(t.a)({},O,n,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(p.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(p.a)("inlineCode",{parentName:"p"},"drop-shadow-{amount}")," \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439 ",Object(p.a)("inlineCode",{parentName:"p"},"filter"),", \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043d\u044c \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter drop-shadow-lg ...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)(l.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(p.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0439 \u0442\u0435\u043d\u044c\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 ",Object(p.a)("inlineCode",{parentName:"p"},"drop-shadow"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(p.a)("inlineCode",{parentName:"p"},"md:drop-shadow-xl"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(p.a)("inlineCode",{parentName:"p"},"drop-shadow-xl")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter drop-shadow-md ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:drop-shadow-xl")," ...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(p.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(p.a)(l.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(p.a)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(p.a)("inlineCode",{parentName:"p"},"drop-shadow")," \u0431\u0443\u0434\u0443\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043b\u044e\u0447 ",Object(p.a)("inlineCode",{parentName:"p"},"dropShadow")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",Object(p.a)("inlineCode",{parentName:"p"},"theme")," \u0432\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js"),"."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     extend",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       dropShadow",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'3xl'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0 35px 35px rgba(0, 0, 0, 0.25)'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(p.a)("p",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0442\u0435\u043c\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 ",Object(p.a)(i.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(p.a)("a",null,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043f\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0442\u0435\u043c\u044b")),"."),Object(p.a)(l.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(p.a)(u.a,{plugin:"dropShadow",name:"drop-shadow",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(p.a)(b.a,{plugin:"dropShadow",name:"drop-shadow",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},Zb5r:function(e,a,n){"use strict";function t(e){return e.reduce((function(a,n,t){return 0===t?n:t===e.length-1?"".concat(a," \u0438 ").concat(n):"".concat(a,", ").concat(n)}),"")}n.d(a,"a",(function(){return t}))},"p+I8":function(e,a,n){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},wH44:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n("rePB"),c=n("q1tI"),s=n.n(c),r=n("AOjV"),p=n("AI3G"),o=n("Zb5r"),i=s.a.createElement;function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e){var a=e.plugin,n=e.name,c=Object(p.a)(a);return n=n||a.replace(/([a-z])([A-Z])/g,(function(e,a,n){return"".concat(a," ").concat(n.toLowerCase())})),i("div",{className:"prose"},i("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",i("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(c.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",c.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",i("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",i("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),i(r.a,{path:"corePlugins",before:"...",add:c.reduce((function(e,a){return d(d({},e),{},Object(t.a)({},a,!1))}),{})}))}}},[["M0Gs",0,2,1,3,4,5]]]);