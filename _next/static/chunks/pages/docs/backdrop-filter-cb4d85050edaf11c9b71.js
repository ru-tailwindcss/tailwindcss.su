_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("rePB"),r=a("q1tI"),c=a.n(r),o=a("98BF"),s=a("Zb5r"),i=a("AOjV"),p=c.a.createElement;function l(e){var t=e.plugin,a=e.name,r=o.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(e){return!r.includes(e)})).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(r.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(s.a)(r).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(a,".");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",p("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",p("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",p("code",null,"tailwind.config.js"),"."),p("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",r.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(s.a)(c),":"),p(i.a,{path:"variants.extend",before:"...",add:Object(n.a)({},t,c)}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),c=(a("Btb4"),a("AI3G")),o=a("iuhU"),s=r.a.createElement;function i(e){var t=e.value;return"string"===typeof t?s("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?s(r.a.Fragment,null,s("span",{className:"token punctuation"},"["),t.map((function(e,a){return s(n.Fragment,{key:a},s(i,{value:e}),a===t.length-1?null:s("span",{className:"token punctuation"},", "))})),s("span",{className:"token punctuation"},"]")):"boolean"===typeof t?s("span",{className:"token boolean"},t.toString()):t.toString()}function p(e){var t=e.edits,a=e.indent,r=void 0===a?"":a,c=e.type,p=void 0===c?"inserted":c;return s("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(t).map((function(e,a){return s(n.Fragment,{key:a},s("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",r,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),s("span",{className:"token operator"},":")," ",s(i,{value:t[e]}),s("span",{className:"token punctuation"},","),"\n");var c})))}function l(e){var t=e.path,a=e.add,r=e.remove,o=e.before,i=e.after;return t="string"===typeof t?t.split("."):t,s("div",{className:"prose"},s("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},s("pre",{className:"language-diff"},s("code",{className:"language-diff"},s("span",{className:"token unchanged"},"  ",s("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",s("span",{className:"token punctuation"},"."),s("span",{className:"token property-access"},"exports")," ",s("span",{className:"token operator"},"=")," ",s("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return s(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,s("span",{className:"token operator"},":")," ",s("span",{className:"token punctuation"},"{"),"\n")})),o&&Object(c.a)(o).map((function(e,a){return s(n.Fragment,{key:a},"  ".repeat(t.length+2),s("span",{className:"token comment"},"// ".concat(e)),"\n")}))),r&&s(p,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&s(p,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),s("span",{className:"token unchanged"},i&&Object(c.a)(i).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,a){return s(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")})),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),r=a("p+I8"),c=a("GAX2").default;e.exports=(e,t,a)=>{const o=[];return function e(t,a,s){let i;(a=a||{}).indent=a.indent||"\t",s=s||"",i=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:s,indent:s+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),s).replace(new RegExp(i.indent,"g"),s+a.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const n="["+i.newLine+t.map((n,r)=>{const c=t.length-1===r?i.newLine:","+i.newLineOrSpace;let o=e(n,a,s+a.indent);return a.transform&&(o=a.transform(t,r,o)),i.indent+o+c}).join("")+i.pad+"]";return o.pop(),p(n)}if(r(t)){let n=Object.keys(t).concat(c(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";o.push(t);const r="{"+i.newLine+n.map((r,c)=>{const o=n.length-1===c?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof r,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(r),u=p||l?r:e(r,a);let d=e(t[r],a,s+a.indent);return a.transform&&(d=a.transform(t,r,d)),i.indent+String(u)+": "+d+o}).join("")+i.pad+"}";return o.pop(),p(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},BuUr:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a("wx14"),r=a("Ff2n"),c=a("q1tI"),o=a.n(c),s=a("7ljp"),i=a("YFqc"),p=a.n(i),l=a("tc9R"),u=a("vRWG"),d=a("I6Nb"),m=a("8C7G"),b=a("wH44"),f=(o.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:function(){return function(e){(0,e.addUtilities)({".backdrop-filter":{"backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-filter-none":{"backdrop-filter":"none"}})}}},meta:{title:"Backdrop Filter",description:"Utilities for enabling and disabling backdrop filters on an element.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),O=d.ContentsLayout;function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.a)(O,Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(s.a)("div",{className:"prose"},Object(s.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(s.a)("p",null,"Use the ",Object(s.a)("inlineCode",{parentName:"p"},"backdrop-filter")," utility to enable backdrop filters (in combination with other backdrop filter utilities like ",Object(s.a)("inlineCode",{parentName:"p"},"backdrop-blur")," or ",Object(s.a)("inlineCode",{parentName:"p"},"backdrop-grayscale"),"), and the ",Object(s.a)("inlineCode",{parentName:"p"},"backdrop-filter-none")," utility to remove filters."),Object(s.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(s.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-200 ...",Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(s.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(s.a)("p",null,"To control backdrop filters at a specific breakpoint, add a ",Object(s.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing backdrop filter utility. For example, use ",Object(s.a)("inlineCode",{parentName:"p"},"md:backdrop-filter-none")," to apply the ",Object(s.a)("inlineCode",{parentName:"p"},"backdrop-filter-none")," utility at only medium screen sizes and above."),Object(s.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(s.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(s.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-blur-lg ",Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:backdrop-filter-none")," ...",Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(s.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(s.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(s.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(s.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(s.a)("a",null,"Responsive Design"))," documentation."),Object(s.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(s.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(s.a)(m.a,{plugin:"backdropFilter",name:"backdrop-filter",mdxType:"Variants"}),Object(s.a)("div",{className:"prose"},Object(s.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(s.a)(b.a,{plugin:"backdropFilter",name:"backdrop-filter",mdxType:"Disabling"}))}g.isMDXComponent=!0,g.layoutProps=f},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((function(t,a,n){return 0===n?a:n===e.length-1?"".concat(t," \u0438 ").concat(a):"".concat(t,", ").concat(a)}),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),r=a.n(n),c=a("8Kt/"),o=a.n(c),s=r.a.createElement;function i(e){var t=e.suffix,a=e.children+(t?" - ".concat(t):"");return s(o.a,null,s("title",{key:"title"},a),s("meta",{key:"twitter:title",name:"twitter:title",content:a}),s("meta",{key:"og:title",property:"og:title",content:a}))}},oymX:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-filter",function(){return a("BuUr")}])},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return m}));var n=a("wx14"),r=a("q1tI"),c=a.n(r),o=a("ekQu"),s=a("8Kt/"),i=a.n(s),p=a("nOHt"),l=a("ap0H"),u=a("1Q1k"),d=c.a.createElement;function m(e){var t=Object(p.useRouter)();return d(c.a.Fragment,null,d(l.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(i.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("rePB"),r=a("q1tI"),c=a.n(r),o=a("AOjV"),s=a("AI3G"),i=a("Zb5r"),p=c.a.createElement;function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e){var t=e.plugin,a=e.name,r=Object(s.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())})),p("div",{className:"prose"},p("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(r.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",r.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",p("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",p("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),p(o.a,{path:"corePlugins",before:"...",add:r.reduce((function(e,t){return u(u({},e),{},Object(n.a)({},t,!1))}),{})}))}}},[["oymX",0,2,1,3,4,5]]]);