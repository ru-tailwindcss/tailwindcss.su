_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("rePB"),c=a("q1tI"),o=a.n(c),r=a("98BF"),i=a("Zb5r"),p=a("AOjV"),s=o.a.createElement;function l(e){var t=e.plugin,a=e.name,c=r.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var o=["responsive","hover","focus","active","group-hover"].filter((function(e){return!c.includes(e)})).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(c.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(i.a)(c).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(a,".");return s("div",{className:"prose"},s("p",{dangerouslySetInnerHTML:{__html:l}}),s("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",s("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",s("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",s("code",null,"tailwind.config.js"),"."),s("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",c.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(i.a)(o),":"),s(p.a,{path:"variants.extend",before:"...",add:Object(n.a)({},t,o)}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),c=a.n(n),o=(a("Btb4"),a("AI3G")),r=a("iuhU"),i=c.a.createElement;function p(e){var t=e.value;return"string"===typeof t?i("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?i(c.a.Fragment,null,i("span",{className:"token punctuation"},"["),t.map((function(e,a){return i(n.Fragment,{key:a},i(p,{value:e}),a===t.length-1?null:i("span",{className:"token punctuation"},", "))})),i("span",{className:"token punctuation"},"]")):"boolean"===typeof t?i("span",{className:"token boolean"},t.toString()):t.toString()}function s(e){var t=e.edits,a=e.indent,c=void 0===a?"":a,o=e.type,s=void 0===o?"inserted":o;return i("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((function(e,a){return i(n.Fragment,{key:a},i("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",c,/^[a-z_$][a-z0-9_$]*$/i.test(o=e)?o:"'".concat(o,"'"),i("span",{className:"token operator"},":")," ",i(p,{value:t[e]}),i("span",{className:"token punctuation"},","),"\n");var o})))}function l(e){var t=e.path,a=e.add,c=e.remove,r=e.before,p=e.after;return t="string"===typeof t?t.split("."):t,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return i(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")})),r&&Object(o.a)(r).map((function(e,a){return i(n.Fragment,{key:a},"  ".repeat(t.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n")}))),c&&i(s,{edits:c,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&i(s,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),i("span",{className:"token unchanged"},p&&Object(o.a)(p).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,a){return i(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")})),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),c=a("p+I8"),o=a("GAX2").default;e.exports=(e,t,a)=>{const r=[];return function e(t,a,i){let p;(a=a||{}).indent=a.indent||"\t",i=i||"",p=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const s=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(p.newLine,"g"),"").replace(new RegExp(p.newLineOrSpace,"g")," ").replace(new RegExp(p.pad+"|"+p.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(p.newLine+"|"+p.newLineOrSpace,"g"),"\n").replace(new RegExp(p.pad,"g"),i).replace(new RegExp(p.indent,"g"),i+a.indent)};if(-1!==r.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";r.push(t);const n="["+p.newLine+t.map((n,c)=>{const o=t.length-1===c?p.newLine:","+p.newLineOrSpace;let r=e(n,a,i+a.indent);return a.transform&&(r=a.transform(t,c,r)),p.indent+r+o}).join("")+p.pad+"]";return r.pop(),s(n)}if(c(t)){let n=Object.keys(t).concat(o(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";r.push(t);const c="{"+p.newLine+n.map((c,o)=>{const r=n.length-1===o?p.newLine:","+p.newLineOrSpace,s="symbol"===typeof c,l=!s&&/^[a-z$_][a-z$_0-9]*$/i.test(c),u=s||l?c:e(c,a);let d=e(t[c],a,i+a.indent);return a.transform&&(d=a.transform(t,c,d)),p.indent+String(u)+": "+d+r}).join("")+p.pad+"}";return r.pop(),s(c)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},SbPd:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-opacity",function(){return a("ebfQ")}])},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((function(t,a,n){return 0===n?a:n===e.length-1?"".concat(t," \u0438 ").concat(a):"".concat(t,", ").concat(a)}),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),c=a.n(n),o=a("8Kt/"),r=a.n(o),i=c.a.createElement;function p(e){var t=e.suffix,a=e.children+(t?" - ".concat(t):"");return i(r.a,null,i("title",{key:"title"},a),i("meta",{key:"twitter:title",name:"twitter:title",content:a}),i("meta",{key:"og:title",property:"og:title",content:a}))}},ebfQ:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a("wx14"),c=a("Ff2n"),o=a("q1tI"),r=a.n(o),i=a("7ljp"),p=a("YFqc"),s=a.n(p),l=a("tc9R"),u=a("vRWG"),d=a("I6Nb"),b=a("8C7G"),m=a("wH44"),O=(r.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:function(){return function(e){(0,e.addUtilities)({".backdrop-opacity-0":{"--tw-backdrop-opacity":"opacity(0)"},".backdrop-opacity-5":{"--tw-backdrop-opacity":"opacity(0.05)"},".backdrop-opacity-10":{"--tw-backdrop-opacity":"opacity(0.1)"},".backdrop-opacity-20":{"--tw-backdrop-opacity":"opacity(0.2)"},".backdrop-opacity-25":{"--tw-backdrop-opacity":"opacity(0.25)"},".backdrop-opacity-30":{"--tw-backdrop-opacity":"opacity(0.3)"},".backdrop-opacity-40":{"--tw-backdrop-opacity":"opacity(0.4)"},".backdrop-opacity-50":{"--tw-backdrop-opacity":"opacity(0.5)"},".backdrop-opacity-60":{"--tw-backdrop-opacity":"opacity(0.6)"},".backdrop-opacity-70":{"--tw-backdrop-opacity":"opacity(0.7)"},".backdrop-opacity-75":{"--tw-backdrop-opacity":"opacity(0.75)"},".backdrop-opacity-80":{"--tw-backdrop-opacity":"opacity(0.8)"},".backdrop-opacity-90":{"--tw-backdrop-opacity":"opacity(0.9)"},".backdrop-opacity-95":{"--tw-backdrop-opacity":"opacity(0.95)"},".backdrop-opacity-100":{"--tw-backdrop-opacity":"opacity(1)"}})}}},meta:{title:"Backdrop Opacity",description:"Utilities for applying backdrop opacity filters to an element.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),g=d.ContentsLayout;function y(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(i.a)(g,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Use the ",Object(i.a)("inlineCode",{parentName:"p"},"backdrop-opacity-{amount}")," utilities alongside the ",Object(i.a)("inlineCode",{parentName:"p"},"backdrop-filter")," utility to control the opacity of other backdrop filters applied to an element."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-opacity-80 ...",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control an element's backdrop opacity at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing backdrop opacity utility. For example, use ",Object(i.a)("inlineCode",{parentName:"p"},"md:backdrop-opacity-lg")," to apply the ",Object(i.a)("inlineCode",{parentName:"p"},"backdrop-opacity-lg")," utility at only medium screen sizes and above."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-opacity-sm ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:backdrop-opacity-lg")," ...",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(s.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(b.a,{plugin:"backdropOpacity",name:"backdrop opacity",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(m.a,{plugin:"backdropOpacity",name:"backdrop opacity",mdxType:"Disabling"}))}y.isMDXComponent=!0,y.layoutProps=O},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return b}));var n=a("wx14"),c=a("q1tI"),o=a.n(c),r=a("ekQu"),i=a("8Kt/"),p=a.n(i),s=a("nOHt"),l=a("ap0H"),u=a("1Q1k"),d=o.a.createElement;function b(e){var t=Object(s.useRouter)();return d(o.a.Fragment,null,d(l.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(p.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(r.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("rePB"),c=a("q1tI"),o=a.n(c),r=a("AOjV"),i=a("AI3G"),p=a("Zb5r"),s=o.a.createElement;function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e){var t=e.plugin,a=e.name,c=Object(i.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())})),s("div",{className:"prose"},s("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",s("span",{dangerouslySetInnerHTML:{__html:Object(p.a)(c.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",c.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",s("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",s("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),s(r.a,{path:"corePlugins",before:"...",add:c.reduce((function(e,t){return u(u({},e),{},Object(n.a)({},t,!1))}),{})}))}}},[["SbPd",0,2,1,3,4,5]]]);