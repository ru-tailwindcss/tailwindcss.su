_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("q1tI"),s=t.n(a),r=t("98BF"),o=t("Zb5r"),c=t("AOjV"),i=s.a.createElement;function p({plugin:e,name:n}){const t=r.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,((e,n,t)=>`${n} ${t.toLowerCase()}`));const a=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${t.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${Object(o.a)(t).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${n}.`;return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:s}}),i("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",n," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",i("code",null,e)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",i("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",i("code",null,"tailwind.config.js"),"."),i("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",t.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(a),":"),i(c.a,{path:"variants.extend",before:"...",add:{[e]:a}}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("q1tI"),s=t.n(a),r=(t("Btb4"),t("AI3G")),o=t("iuhU"),c=s.a.createElement;function i({value:e}){return"string"===typeof e?c("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?c(s.a.Fragment,null,c("span",{className:"token punctuation"},"["),e.map(((n,t)=>c(a.Fragment,{key:t},c(i,{value:n}),t===e.length-1?null:c("span",{className:"token punctuation"},", ")))),c("span",{className:"token punctuation"},"]")):"boolean"===typeof e?c("span",{className:"token boolean"},e.toString()):e.toString()}function p({edits:e,indent:n="",type:t="inserted"}){return c("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(e).map(((s,r)=>{return c(a.Fragment,{key:r},c("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(p=s)?p:`'${p}'`,c("span",{className:"token operator"},":")," ",c(i,{value:e[s]}),c("span",{className:"token punctuation"},","),"\n");var p})))}function l({path:e,add:n,remove:t,before:s,after:o}){return e="string"===typeof e?e.split("."):e,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",e.map(((e,n)=>c(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(r.a)(s).map(((n,t)=>c(a.Fragment,{key:t},"  ".repeat(e.length+2),c("span",{className:"token comment"},`// ${n}`),"\n")))),t&&c(p,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),n&&c(p,{edits:n,type:"inserted",indent:"  ".repeat(e.length+1)}),c("span",{className:"token unchanged"},o&&Object(r.a)(o).map((n=>`${"  ".repeat(e.length+2)}${n}\n`)),e.map(((n,t)=>c(a.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n"))),"  }")))))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),r=t("GAX2").default;e.exports=(e,n,t)=>{const o=[];return function e(n,t,c){let i;(t=t||{}).indent=t.indent||"\t",c=c||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),c).replace(new RegExp(i.indent,"g"),c+t.indent)};if(-1!==o.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";o.push(n);const a="["+i.newLine+n.map(((a,s)=>{const r=n.length-1===s?i.newLine:","+i.newLineOrSpace;let o=e(a,t,c+t.indent);return t.transform&&(o=t.transform(n,s,o)),i.indent+o+r})).join("")+i.pad+"]";return o.pop(),p(a)}if(s(n)){let a=Object.keys(n).concat(r(n));if(t.filter&&(a=a.filter((e=>t.filter(n,e)))),0===a.length)return"{}";o.push(n);const s="{"+i.newLine+a.map(((s,r)=>{const o=a.length-1===r?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,t);let d=e(n[s],t,c+t.indent);return t.transform&&(d=t.transform(n,s,d)),i.indent+String(u)+": "+d+o})).join("")+i.pad+"}";return o.pop(),p(s)}return n=String(n).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter((n=>Object.prototype.propertyIsEnumerable.call(e,n)))},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce(((n,t,a)=>0===a?t:a===e.length-1?`${n} \u0438 ${t}`:`${n}, ${t}`),"")}t.d(n,"a",(function(){return a}))},mgSt:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-origin",function(){return t("zlCx")}])},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var a=t("HALo"),s=t("q1tI"),r=t.n(s),o=t("iuhU"),c=t("ZMKu"),i=r.a.createElement;const p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){const n=Object(s.useRef)(),{0:t,1:r}=Object(s.useState)(!1),{0:o,1:c}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function e(){c({height:n.current.contentDocument.body.scrollHeight})}const a=new window.ResizeObserver(e);return e(),a.observe(n.current.contentDocument.body),()=>{a.disconnect()}}),[t]),i("iframe",Object(a.a)({},e,{ref:n,onLoad:()=>r(!0),style:o}))}function b({color:e,snippet:n}){return i("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]})},i("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m({preview:e,src:n,snippet:t,previewClassName:a,color:s="gray"}){return i("div",{className:"relative overflow-hidden mb-8"},e?i("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[s],a,{"p-10":!a}),dangerouslySetInnerHTML:{__html:e}}):i(g,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[s])}),i(b,{color:s,snippet:t}))}function f({preview:e,src:n,previewClassName:t,snippet:a,color:r="gray",min:p=!1}){const m=Object(s.useRef)(),f=Object(c.h)(0),h=Object(s.useRef)(),{0:k,1:O}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{f.set(0)}));return e.observe(m.current),()=>{e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:m,className:`relative rounded-t-xl ${u[r]}`},i("div",{className:p?"md:w-88":void 0},i(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(f,(e=>-e))}},e?i("div",{className:Object(o.a)("rounded-t-xl",t,l[r],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):i(g,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[r],{"pointer-events-none":k})}))),i("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(c.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(p?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),O(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),O(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[r]}`,style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(b,{color:r,snippet:a}))}},qhWx:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".bg-origin-border":{"background-origin":"border-box"},".bg-origin-padding":{"background-origin":"padding-box"},".bg-origin-content":{"background-origin":"content-box"}},n("backgroundOrigin"))}}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("cpVT"),s=t("q1tI"),r=t.n(s),o=t("AOjV"),c=t("AI3G"),i=t("Zb5r"),p=r.a.createElement;function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d({plugin:e,name:n}){const t=Object(c.a)(e);return n=n||e.replace(/([a-z])([A-Z])/g,((e,n,t)=>`${n} ${t.toLowerCase()}`)),p("div",{className:"prose"},p("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",n,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",p("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",p("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),p(o.a,{path:"corePlugins",before:"...",add:t.reduce(((e,n)=>u(u({},e),{},{[n]:!1})),{})}))}},zlCx:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return j}));var a=t("HALo"),s=t("dhJC"),r=t("q1tI"),o=t.n(r),c=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),b=t("qhWx"),m=t.n(b),f=t("8C7G"),h=t("wH44");o.a.createElement;const k={Layout:d.DocumentationLayout,classes:{plugin:m()},meta:{title:"\u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u0430",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c \u0444\u043e\u043d\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0433\u0440\u0430\u043d\u0438\u0446, \u043e\u0442\u0441\u0442\u0443\u043f\u043e\u0432 \u0438 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e.",featureVersion:"v2.2+"},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},O=g.ContentsLayout;function j(e){let{components:n}=e,t=Object(s.a)(e,["components"]);return Object(c.a)(O,Object(a.a)({},k,t,{components:n,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(c.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"bg-origin-border"),", ",Object(c.a)("inlineCode",{parentName:"p"},"bg-origin-padding")," \u0438 ",Object(c.a)("inlineCode",{parentName:"p"},"bg-origin-content")," \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0435\u043c, \u0433\u0434\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0444\u043e\u043d \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.")),Object(c.a)(u.a,{preview:'\n  <div class="space-y-6 flex flex-col items-center justify-around sm:flex-row sm:space-y-0">\n    <div class="bg-origin-border grid place-items-center bg-cover h-32 w-32 p-4 border-4 border-white border-opacity-75 border-dashed rounded-xl shadow-xl bg-gray-300 bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80\')">\n      <span class="text-5xl text-white text-opacity-90 font-black">1</span>\n    </div>\n\n    <div class="bg-origin-padding grid place-items-center bg-cover h-32 w-32 p-4 border-4 border-white border-opacity-75 border-dashed rounded-xl shadow-xl bg-gray-300 bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80\')">\n      <span class="text-5xl text-white text-opacity-90 font-black">2</span>\n    </div>\n\n    <div class="bg-origin-content grid place-items-center bg-cover h-32 w-32 p-4 border-4 border-white border-opacity-75 border-dashed rounded-xl shadow-xl bg-gray-300 bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80\')">\n      <span class="text-5xl text-white text-opacity-90 font-black">3</span>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-origin-border</span> p-4 border-4 border-dashed ...<span class="token punctuation">"</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>\n  1\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-origin-padding</span> p-4 border-4 border-dashed ...<span class="token punctuation">"</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>\n  2\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-origin-content</span> p-4 border-4 border-dashed ...<span class="token punctuation">"</span></span> <span class="token style-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token style language-css"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>\n  3\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"gray",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(c.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\u043c background-origin \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 background-origin. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(c.a)("inlineCode",{parentName:"p"},"md:bg-origin-padding"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(c.a)("inlineCode",{parentName:"p"},"bg-origin-padding")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-origin-border ",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:bg-origin-padding")," ...",Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(c.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(c.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(c.a)(l.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(c.a)(l.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(c.a)(f.a,{plugin:"backgroundOrigin",name:"background-origin",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(c.a)(h.a,{plugin:"backgroundOrigin",name:"background-origin",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=k}},[["mgSt",0,2,6,1,3,4,5,7]]]);