_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[110],{"5xSE":function(e,a,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),c=n("98BF"),p=n("Zb5r"),r=n("AOjV"),o=s.a.createElement;function i({plugin:e,name:a}){const n=c.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,n)=>`${a} ${n.toLowerCase()}`));const t=["responsive","hover","focus","active","group-hover"].filter((e=>!n.includes(e))).slice(0,2),s=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${n.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${Object(p.a)(n).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${a}.`;return o("div",{className:"prose"},o("p",{dangerouslySetInnerHTML:{__html:s}}),o("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",o("code",null,e)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",o("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",o("code",null,"tailwind.config.js"),"."),o("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",n.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(p.a)(t),":"),o(r.a,{path:"variants.extend",before:"...",add:{[e]:t}}))}},AOjV:function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("q1tI"),s=n.n(t),c=(n("Btb4"),n("AI3G")),p=n("iuhU"),r=s.a.createElement;function o({value:e}){return"string"===typeof e?r("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),e.map(((a,n)=>r(t.Fragment,{key:n},r(o,{value:a}),n===e.length-1?null:r("span",{className:"token punctuation"},", ")))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof e?r("span",{className:"token boolean"},e.toString()):e.toString()}function i({edits:e,indent:a="",type:n="inserted"}){return r("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===n,"deleted-sign deleted":"inserted"!==n})},Object.keys(e).map(((s,c)=>{return r(t.Fragment,{key:c},r("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===n,deleted:"inserted"!==n})},"inserted"===n?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(i=s)?i:`'${i}'`,r("span",{className:"token operator"},":")," ",r(o,{value:e[s]}),r("span",{className:"token punctuation"},","),"\n");var i})))}function l({path:e,add:a,remove:n,before:s,after:p}){return e="string"===typeof e?e.split("."):e,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>r(t.Fragment,{key:a},"  ","  ".repeat(a+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(c.a)(s).map(((a,n)=>r(t.Fragment,{key:n},"  ".repeat(e.length+2),r("span",{className:"token comment"},`// ${a}`),"\n")))),n&&r(i,{edits:n,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&r(i,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),r("span",{className:"token unchanged"},p&&Object(c.a)(p).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,n)=>r(t.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n"))),"  }")))))}},Btb4:function(e,a,n){"use strict";const t=n("5xSE"),s=n("p+I8"),c=n("GAX2").default;e.exports=(e,a,n)=>{const p=[];return function e(a,n,r){let o;(n=n||{}).indent=n.indent||"\t",r=r||"",o=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===n.inlineCharacterLimit)return e;const a=e.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return a.length<=n.inlineCharacterLimit?a:e.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),r).replace(new RegExp(o.indent,"g"),r+n.indent)};if(-1!==p.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";p.push(a);const t="["+o.newLine+a.map(((t,s)=>{const c=a.length-1===s?o.newLine:","+o.newLineOrSpace;let p=e(t,n,r+n.indent);return n.transform&&(p=n.transform(a,s,p)),o.indent+p+c})).join("")+o.pad+"]";return p.pop(),i(t)}if(s(a)){let t=Object.keys(a).concat(c(a));if(n.filter&&(t=t.filter((e=>n.filter(a,e)))),0===t.length)return"{}";p.push(a);const s="{"+o.newLine+t.map(((s,c)=>{const p=t.length-1===c?o.newLine:","+o.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),m=i||l?s:e(s,n);let b=e(a[s],n,r+n.indent);return n.transform&&(b=n.transform(a,s,b)),o.indent+String(m)+": "+b+p})).join("")+o.pad+"}";return p.pop(),i(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===n.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,n)}},GAX2:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},Zb5r:function(e,a,n){"use strict";function t(e){return e.reduce(((a,n,t)=>0===t?n:t===e.length-1?`${a} \u0438 ${n}`:`${a}, ${n}`),"")}n.d(a,"a",(function(){return t}))},aZ6q:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/invert",function(){return n("y7BL")}])},"p+I8":function(e,a,n){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},wH44:function(e,a,n){"use strict";n.d(a,"a",(function(){return b}));var t=n("cpVT"),s=n("q1tI"),c=n.n(s),p=n("AOjV"),r=n("AI3G"),o=n("Zb5r"),i=c.a.createElement;function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function b({plugin:e,name:a}){const n=Object(r.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,n)=>`${a} ${n.toLowerCase()}`)),i("div",{className:"prose"},i("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",i("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(n.map((e=>`<code>${e}</code>`)))}})," ",n.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",i("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",i("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),i(p.a,{path:"corePlugins",before:"...",add:n.reduce(((e,a)=>m(m({},e),{},{[a]:!1})),{})}))}},y7BL:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return d}));var t=n("HALo"),s=n("dhJC"),c=n("q1tI"),p=n.n(c),r=n("7ljp"),o=n("YFqc"),i=n.n(o),l=n("tc9R"),m=n("vRWG"),b=n("I6Nb"),u=n("8C7G"),O=n("wH44");p.a.createElement;const j={Layout:m.DocumentationLayout,classes:{plugin:function(){return function({addUtilities:e}){e({".invert-0":{"--tw-invert":"invert(0)"},".invert":{"--tw-invert":"invert(1)"}})}}},meta:{title:"\u0418\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443.",featureVersion:"v2.1+"},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},N=b.ContentsLayout;function d(e){let{components:a}=e,n=Object(s.a)(e,["components"]);return Object(r.a)(N,Object(t.a)({},j,n,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(r.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(r.a)("inlineCode",{parentName:"p"},"invert")," \u0438 ",Object(r.a)("inlineCode",{parentName:"p"},"invert-0")," \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0443\u0442\u0438\u043b\u0438\u0442\u043e\u0439 ",Object(r.a)("inlineCode",{parentName:"p"},"filter"),", \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u0434\u043e\u043b\u0436\u0435\u043d \u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0441 \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0446\u0432\u0435\u0442\u0430\u043c\u0438 \u0438\u043b\u0438 \u0432 \u043e\u0431\u044b\u0447\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter invert ...",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)(l.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(r.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u043c \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0438\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"md:invert-0"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"invert-0")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter invert ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:invert-0")," ...",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(r.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(r.a)(l.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(r.a)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(r.a)("inlineCode",{parentName:"p"},"invert")," \u0431\u0443\u0434\u0443\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043b\u044e\u0447 ",Object(r.a)("inlineCode",{parentName:"p"},"invert")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"theme")," \u0432\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js"),"."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(r.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     extend",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       invert",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token number"}),"25"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'.25'"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token number"}),"50"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'.5'"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token number"}),"75"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'.75'"),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(r.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(r.a)("p",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0442\u0435\u043c\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 ",Object(r.a)(i.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043f\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0442\u0435\u043c\u044b")),"."),Object(r.a)(l.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(r.a)(u.a,{plugin:"invert",name:"invert",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(r.a)(O.a,{plugin:"invert",name:"invert",mdxType:"Disabling"}))}d.isMDXComponent=!0,d.layoutProps=j}},[["aZ6q",0,2,1,3,4,5]]]);