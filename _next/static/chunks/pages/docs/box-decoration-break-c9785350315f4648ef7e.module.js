(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[56],{"4R8O":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/box-decoration-break",function(){return n("wiIH")}])},"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),s=n("98BF"),o=n("Zb5r"),c=n("AOjV"),i=r.a.createElement;function l(e){var{plugin:t,name:n}=e,a=s.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase()));var r=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2),l="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(a.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(o.a)(a).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(n,".");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",i("code",null,t)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",i("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",i("code",null,"tailwind.config.js"),"."),i("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",a.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(r),":"),i(c.a,{path:"variants.extend",before:"...",add:{[t]:r}}))}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),s=(n("Btb4"),n("AI3G")),o=n("iuhU"),c=r.a.createElement;function i(e){var{value:t}=e;return"string"===typeof t?c("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?c(r.a.Fragment,null,c("span",{className:"token punctuation"},"["),t.map((e,n)=>c(a.Fragment,{key:n},c(i,{value:e}),n===t.length-1?null:c("span",{className:"token punctuation"},", "))),c("span",{className:"token punctuation"},"]")):"boolean"===typeof t?c("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var{edits:t,indent:n="",type:r="inserted"}=e;return c("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===r,"deleted-sign deleted":"inserted"!==r})},Object.keys(t).map((e,s)=>{return c(a.Fragment,{key:s},c("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===r,deleted:"inserted"!==r})},"inserted"===r?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(l=e)?l:"'".concat(l,"'"),c("span",{className:"token operator"},":")," ",c(i,{value:t[e]}),c("span",{className:"token punctuation"},","),"\n");var l}))}function p(e){var{path:t,add:n,remove:r,before:o,after:i}=e;return t="string"===typeof t?t.split("."):t,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>c(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n")),o&&Object(s.a)(o).map((e,n)=>c(a.Fragment,{key:n},"  ".repeat(t.length+2),c("span",{className:"token comment"},"// ".concat(e)),"\n"))),r&&c(l,{edits:r,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&c(l,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),c("span",{className:"token unchanged"},i&&Object(s.a)(i).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,n)=>c(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),r=n("p+I8"),s=n("GAX2").default;e.exports=(e,t,n)=>{const o=[];return function e(t,n,c){let i;(n=n||{}).indent=n.indent||"\t",c=c||"",i=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),c).replace(new RegExp(i.indent,"g"),c+n.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const a="["+i.newLine+t.map((a,r)=>{const s=t.length-1===r?i.newLine:","+i.newLineOrSpace;let o=e(a,n,c+n.indent);return n.transform&&(o=n.transform(t,r,o)),i.indent+o+s}).join("")+i.pad+"]";return o.pop(),l(a)}if(r(t)){let a=Object.keys(t).concat(s(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";o.push(t);const r="{"+i.newLine+a.map((r,s)=>{const o=a.length-1===s?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof r,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(r),u=l||p?r:e(r,n);let d=e(t[r],n,c+n.indent);return n.transform&&(d=n.transform(t,r,d)),i.indent+String(u)+": "+d+o}).join("")+i.pad+"}";return o.pop(),l(r)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},ODCF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".decoration-slice":{"box-decoration-break":"slice"},".decoration-clone":{"box-decoration-break":"clone"}},t("boxDecorationBreak"))}}},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((t,n,a)=>0===a?n:a===e.length-1?"".concat(t," \u0438 ").concat(n):"".concat(t,", ").concat(n),"")}n.d(t,"a",(function(){return a}))},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n("wx14"),r=n("q1tI"),s=n.n(r),o=n("iuhU"),c=n("ZMKu"),i=s.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){var t=Object(r.useRef)(),{0:n,1:s}=Object(r.useState)(!1),{0:o,1:c}=Object(r.useState)({});return Object(r.useEffect)(()=>{if(n){var e=new window.ResizeObserver(a);return a(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function a(){c({height:t.current.contentDocument.body.scrollHeight})}},[n]),i("iframe",Object(a.a)({},e,{ref:t,onLoad:()=>s(!0),style:o}))}function g(e){var{color:t,snippet:n}=e;return i("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},i("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m(e){var{preview:t,src:n,snippet:a,previewClassName:r,color:s="gray"}=e;return i("div",{className:"relative overflow-hidden mb-8"},t?i("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[s],r,{"p-10":!r}),dangerouslySetInnerHTML:{__html:t}}):i(b,{src:n,className:Object(o.a)("w-full rounded-t-xl",p[s])}),i(g,{color:s,snippet:a}))}function f(e){var{preview:t,src:n,previewClassName:a,snippet:s,color:l="gray",min:m=!1}=e,f=Object(r.useRef)(),O=Object(c.h)(0),j=Object(r.useRef)(),{0:N,1:v}=Object(r.useState)(!1);return Object(r.useEffect)(()=>{var e=new window.ResizeObserver(()=>{O.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),i("div",{className:"relative mb-8"},i("div",{ref:f,className:"relative rounded-t-xl ".concat(u[l])},i("div",{className:m?"md:w-88":void 0},i(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(O,e=>-e)}},t?i("div",{className:Object(o.a)("rounded-t-xl",a,p[l],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):i(b,{src:n,className:Object(o.a)("w-full rounded-t-xl",p[l],{"pointer-events-none":N})}))),i("div",{ref:j,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(c.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:j,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(m?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),v(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),v(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[l]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(g,{color:l,snippet:s}))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),r=n("q1tI"),s=n.n(r),o=n("AOjV"),c=n("AI3G"),i=n("Zb5r"),l=s.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var{plugin:t,name:n}=e,a=Object(c.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase())),l("div",{className:"prose"},l("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," ",a.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",l("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",l("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),l(o.a,{path:"corePlugins",before:"...",add:a.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}},wiIH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n("wx14"),r=n("Ff2n"),s=n("q1tI"),o=n.n(s),c=n("7ljp"),i=n("YFqc"),l=n.n(i),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),b=n("I6Nb"),g=n("ODCF"),m=n.n(g),f=n("8C7G"),O=n("wH44"),j=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m()},meta:{title:"\u0423\u043a\u0440\u0430\u0448\u0435\u043d\u0438\u0435 \u043a\u043e\u0440\u043e\u0431\u043a\u0438",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u0442\u0440\u043e\u043a\u0430\u0445, \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u0445 \u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445.",featureVersion:"v2.1+"},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),N=b.ContentsLayout;function v(e){var{components:t}=e,n=Object(r.a)(e,["components"]);return Object(c.a)(N,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(c.a)("inlineCode",{parentName:"p"},"decoration-slice")," \u0438 ",Object(c.a)("inlineCode",{parentName:"p"},"decoration-clone"),", \u0447\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c \u0442\u0430\u043a\u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432, \u043a\u0430\u043a ",Object(c.a)("inlineCode",{parentName:"p"},"background"),", ",Object(c.a)("inlineCode",{parentName:"p"},"border"),", ",Object(c.a)("inlineCode",{parentName:"p"},"border-image"),", ",Object(c.a)("inlineCode",{parentName:"p"},"box-shadow"),", ",Object(c.a)("inlineCode",{parentName:"p"},"clip-page"),", ",Object(c.a)("inlineCode",{parentName:"p"},"margin")," \u0438 ",Object(c.a)("inlineCode",{parentName:"p"},"padding"),", \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0431\u044b\u043b \u043e\u0434\u043d\u0438\u043c \u043d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u044b\u043c \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u043c \u0438\u043b\u0438 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u0431\u043b\u043e\u043a\u043e\u043c.")),Object(c.a)(u.a,{preview:'\n  <div class="text-center text-5xl font-extrabold leading-none tracking-tight">\n    <span class="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-red-500">\n      \u041f\u0440\u0438\u0432\u0435\u0442<br>\n      \u041c\u0438\u0440\n    </span>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">decoration-clone</span> bg-gradient-to-b from-yellow-400 to-red-500 text-transparent ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  \u041f\u0440\u0438\u0432\u0435\u0442<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n  \u041c\u0438\u0440\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(c.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c ",Object(c.a)("inlineCode",{parentName:"p"},"box-decoration-break")," \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"box-decoration-break"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"md:decoration-slice"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(c.a)("inlineCode",{parentName:"p"},"decoration-slice")," \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"decoration-clone ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:decoration-slice")," ...",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(c.a)(p.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(c.a)(p.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(c.a)(f.a,{plugin:"boxDecorationBreak",name:"box-decoration-break",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(c.a)(O.a,{plugin:"boxDecorationBreak",name:"box-decoration-break",mdxType:"Disabling"}))}v.isMDXComponent=!0,v.layoutProps=j}},[["4R8O",0,2,6,1,3,4,5,7]]]);