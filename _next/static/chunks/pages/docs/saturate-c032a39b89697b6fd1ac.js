_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[161],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("rePB"),r=a("q1tI"),c=a.n(r),s=a("98BF"),o=a("Zb5r"),i=a("AOjV"),p=c.a.createElement;function u(e){var t=e.plugin,a=e.name,r=s.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(e){return!r.includes(e)})).slice(0,2),u="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(r.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(o.a)(r).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(a,".");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:u}}),p("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",p("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",p("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",p("code",null,"tailwind.config.js"),"."),p("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",r.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(c),":"),p(i.a,{path:"variants.extend",before:"...",add:Object(n.a)({},t,c)}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),c=(a("Btb4"),a("AI3G")),s=a("iuhU"),o=r.a.createElement;function i(e){var t=e.value;return"string"===typeof t?o("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?o(r.a.Fragment,null,o("span",{className:"token punctuation"},"["),t.map((function(e,a){return o(n.Fragment,{key:a},o(i,{value:e}),a===t.length-1?null:o("span",{className:"token punctuation"},", "))})),o("span",{className:"token punctuation"},"]")):"boolean"===typeof t?o("span",{className:"token boolean"},t.toString()):t.toString()}function p(e){var t=e.edits,a=e.indent,r=void 0===a?"":a,c=e.type,p=void 0===c?"inserted":c;return o("span",{className:Object(s.a)("token",{"inserted-sign inserted":"inserted"===p,"deleted-sign deleted":"inserted"!==p})},Object.keys(t).map((function(e,a){return o(n.Fragment,{key:a},o("span",{className:Object(s.a)("token prefix",{inserted:"inserted"===p,deleted:"inserted"!==p})},"inserted"===p?"+":"-")," ",r,/^[a-z_$][a-z0-9_$]*$/i.test(c=e)?c:"'".concat(c,"'"),o("span",{className:"token operator"},":")," ",o(i,{value:t[e]}),o("span",{className:"token punctuation"},","),"\n");var c})))}function u(e){var t=e.path,a=e.add,r=e.remove,s=e.before,i=e.after;return t="string"===typeof t?t.split("."):t,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",t.map((function(e,t){return o(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")})),s&&Object(c.a)(s).map((function(e,a){return o(n.Fragment,{key:a},"  ".repeat(t.length+2),o("span",{className:"token comment"},"// ".concat(e)),"\n")}))),r&&o(p,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&o(p,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),o("span",{className:"token unchanged"},i&&Object(c.a)(i).map((function(e){return"".concat("  ".repeat(t.length+2)).concat(e,"\n")})),t.map((function(e,a){return o(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")})),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),r=a("p+I8"),c=a("GAX2").default;e.exports=(e,t,a)=>{const s=[];return function e(t,a,o){let i;(a=a||{}).indent=a.indent||"\t",o=o||"",i=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),o).replace(new RegExp(i.indent,"g"),o+a.indent)};if(-1!==s.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";s.push(t);const n="["+i.newLine+t.map((n,r)=>{const c=t.length-1===r?i.newLine:","+i.newLineOrSpace;let s=e(n,a,o+a.indent);return a.transform&&(s=a.transform(t,r,s)),i.indent+s+c}).join("")+i.pad+"]";return s.pop(),p(n)}if(r(t)){let n=Object.keys(t).concat(c(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";s.push(t);const r="{"+i.newLine+n.map((r,c)=>{const s=n.length-1===c?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof r,u=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(r),l=p||u?r:e(r,a);let m=e(t[r],a,o+a.indent);return a.transform&&(m=a.transform(t,r,m)),i.indent+String(l)+": "+m+s}).join("")+i.pad+"}";return s.pop(),p(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},"Hj/v":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a("wx14"),r=a("Ff2n"),c=a("q1tI"),s=a.n(c),o=a("7ljp"),i=a("YFqc"),p=a.n(i),u=a("tc9R"),l=a("vRWG"),m=a("I6Nb"),d=a("8C7G"),b=a("wH44"),O=(s.a.createElement,{Layout:l.DocumentationLayout,classes:{plugin:function(){return function(e){(0,e.addUtilities)({".saturate-0":{"--tw-saturate":"saturate(0)"},".saturate-50":{"--tw-saturate":"saturate(.5)"},".saturate-100":{"--tw-saturate":"saturate(1)"},".saturate-150":{"--tw-saturate":"saturate(1.5)"},".saturate-200":{"--tw-saturate":"saturate(2)"}})}}},meta:{title:"Saturate",description:"Utilities for applying saturation filters to an element.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),g=m.ContentsLayout;function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)(g,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"saturate-{amount}")," utilities alongside the ",Object(o.a)("inlineCode",{parentName:"p"},"filter")," utility to control an element's saturation."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter saturate-125 ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control an element's saturation at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing saturate utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:saturate-150")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"saturate-150")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter saturate-110 ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:saturate-150")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(u.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(d.a,{plugin:"saturate",name:"saturate",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(b.a,{plugin:"saturate",name:"saturate",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=O},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((function(t,a,n){return 0===n?a:n===e.length-1?"".concat(t," \u0438 ").concat(a):"".concat(t,", ").concat(a)}),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),r=a.n(n),c=a("8Kt/"),s=a.n(c),o=r.a.createElement;function i(e){var t=e.suffix,a=e.children+(t?" - ".concat(t):"");return o(s.a,null,o("title",{key:"title"},a),o("meta",{key:"twitter:title",name:"twitter:title",content:a}),o("meta",{key:"og:title",property:"og:title",content:a}))}},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},u2MY:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/saturate",function(){return a("Hj/v")}])},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return d}));var n=a("wx14"),r=a("q1tI"),c=a.n(r),s=a("ekQu"),o=a("8Kt/"),i=a.n(o),p=a("nOHt"),u=a("ap0H"),l=a("1Q1k"),m=c.a.createElement;function d(e){var t=Object(p.useRouter)();return m(c.a.Fragment,null,m(u.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),m(i.a,null,m("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),m("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),m(s.b,Object(n.a)({nav:l.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("rePB"),r=a("q1tI"),c=a.n(r),s=a("AOjV"),o=a("AI3G"),i=a("Zb5r"),p=c.a.createElement;function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e){var t=e.plugin,a=e.name,r=Object(o.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())})),p("div",{className:"prose"},p("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(r.map((function(e){return"<code>".concat(e,"</code>")})))}})," ",r.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",p("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",p("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),p(s.a,{path:"corePlugins",before:"...",add:r.reduce((function(e,t){return l(l({},e),{},Object(n.a)({},t,!1))}),{})}))}}},[["u2MY",0,2,1,3,4,5]]]);