_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("rePB"),c=t("q1tI"),r=t.n(c),s=t("98BF"),o=t("Zb5r"),i=t("AOjV"),p=r.a.createElement;function l(e){var a=e.plugin,t=e.name,c=s.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var r=["responsive","hover","focus","active","group-hover"].filter((function(e){return!c.includes(e)})).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(c.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(o.a)(c).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(t,".");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",t," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",p("code",null,a)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",p("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",p("code",null,"tailwind.config.js"),"."),p("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",c.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(r),":"),p(i.a,{path:"variants.extend",before:"...",add:Object(n.a)({},a,r)}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),c=t.n(n),r=(t("Btb4"),t("AI3G")),s=t("iuhU"),o=c.a.createElement;function i(e){var a=e.value;return"string"===typeof a?o("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?o(c.a.Fragment,null,o("span",{className:"token punctuation"},"["),a.map((function(e,t){return o(n.Fragment,{key:t},o(i,{value:e}),t===a.length-1?null:o("span",{className:"token punctuation"},", "))})),o("span",{className:"token punctuation"},"]")):"boolean"===typeof a?o("span",{className:"token boolean"},a.toString()):a.toString()}function p(e){var a=e.edits,t=e.indent,c=void 0===t?"":t,r=e.type,p=void 0===r?"inserted":r;return o("span",{className:Object(s.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(a).map((function(e,t){return o(n.Fragment,{key:t},o("span",{className:Object(s.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",c,/^[a-z_$][a-z0-9_$]*$/i.test(r=e)?r:"'".concat(r,"'"),o("span",{className:"token operator"},":")," ",o(i,{value:a[e]}),o("span",{className:"token punctuation"},","),"\n");var r})))}function l(e){var a=e.path,t=e.add,c=e.remove,s=e.before,i=e.after;return a="string"===typeof a?a.split("."):a,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",a.map((function(e,a){return o(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")})),s&&Object(r.a)(s).map((function(e,t){return o(n.Fragment,{key:t},"  ".repeat(a.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n")}))),c&&o(p,{edits:c,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&o(p,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),o("span",{className:"token unchanged"},i&&Object(r.a)(i).map((function(e){return"".concat("  ".repeat(a.length+2)).concat(e,"\n")})),a.map((function(e,t){return o(n.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")})),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),c=t("p+I8"),r=t("GAX2").default;e.exports=(e,a,t)=>{const s=[];return function e(a,t,o){let i;(t=t||{}).indent=t.indent||"\t",o=o||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),o).replace(new RegExp(i.indent,"g"),o+t.indent)};if(-1!==s.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";s.push(a);const n="["+i.newLine+a.map((n,c)=>{const r=a.length-1===c?i.newLine:","+i.newLineOrSpace;let s=e(n,t,o+t.indent);return t.transform&&(s=t.transform(a,c,s)),i.indent+s+r}).join("")+i.pad+"]";return s.pop(),p(n)}if(c(a)){let n=Object.keys(a).concat(r(a));if(t.filter&&(n=n.filter(e=>t.filter(a,e))),0===n.length)return"{}";s.push(a);const c="{"+i.newLine+n.map((c,r)=>{const s=n.length-1===r?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof c,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(c),u=p||l?c:e(c,t);let m=e(a[c],t,o+t.indent);return t.transform&&(m=t.transform(a,c,m)),i.indent+String(u)+": "+m+s}).join("")+i.pad+"}";return s.pop(),p(c)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce((function(a,t,n){return 0===n?t:n===e.length-1?"".concat(a," \u0438 ").concat(t):"".concat(a,", ").concat(t)}),"")}t.d(a,"a",(function(){return n}))},ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),c=t.n(n),r=t("8Kt/"),s=t.n(r),o=c.a.createElement;function i(e){var a=e.suffix,t=e.children+(a?" - ".concat(a):"");return o(s.a,null,o("title",{key:"title"},t),o("meta",{key:"twitter:title",name:"twitter:title",content:t}),o("meta",{key:"og:title",property:"og:title",content:t}))}},"b/tz":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-grayscale",function(){return t("yRXd")}])},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return d}));var n=t("wx14"),c=t("q1tI"),r=t.n(c),s=t("ekQu"),o=t("8Kt/"),i=t.n(o),p=t("nOHt"),l=t("ap0H"),u=t("1Q1k"),m=r.a.createElement;function d(e){var a=Object(p.useRouter)();return m(r.a.Fragment,null,m(l.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),m(i.a,null,m("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),m("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),m(s.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("rePB"),c=t("q1tI"),r=t.n(c),s=t("AOjV"),o=t("AI3G"),i=t("Zb5r"),p=r.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e){var a=e.plugin,t=e.name,c=Object(o.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())})),p("div",{className:"prose"},p("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",t,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(c.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",c.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",p("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",p("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),p(s.a,{path:"corePlugins",before:"...",add:c.reduce((function(e,a){return u(u({},e),{},Object(n.a)({},a,!1))}),{})}))}},yRXd:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t("wx14"),c=t("Ff2n"),r=t("q1tI"),s=t.n(r),o=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("vRWG"),m=t("I6Nb"),d=t("8C7G"),b=t("wH44"),g=(s.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:function(){return function(e){(0,e.addUtilities)({".backdrop-grayscale-0":{"--tw-backdrop-grayscale":"grayscale(0)"},".backdrop-grayscale":{"--tw-backdrop-grayscale":"grayscale(1)"}})}}},meta:{title:"Backdrop Grayscale",description:"Utilities for applying backdrop grayscale filters to an element.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),O=m.ContentsLayout;function f(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(o.a)(O,Object(n.a)({},g,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-grayscale")," and ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-grayscale-0")," utilities alongside the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-filter")," utility to whether an element's backdrop should be rendered as grayscale or in full color."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-grayscale ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control an element's backdrop grayscale filter at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing backdrop grayscale utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:backdrop-grayscale-0")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-grayscale-0")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-grayscale ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:backdrop-grayscale-0")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(d.a,{plugin:"backdropGrayscale",name:"backdrop grayscale",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(b.a,{plugin:"backdropGrayscale",name:"backdrop grayscale",mdxType:"Disabling"}))}f.isMDXComponent=!0,f.layoutProps=g}},[["b/tz",0,2,1,3,4,5]]]);