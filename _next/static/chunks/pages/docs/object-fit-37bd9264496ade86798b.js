_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[126],{"5xSE":function(e,a,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),c=n("98BF"),o=n("Zb5r"),p=n("AOjV"),l=s.a.createElement;function i({plugin:e,name:a}){const n=c.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,n)=>`${a} ${n.toLowerCase()}`));const t=["responsive","hover","focus","active","group-hover"].filter((e=>!n.includes(e))).slice(0,2),s=`\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ${n.length?`\u0442\u043e\u043b\u044c\u043a\u043e ${Object(o.a)(n).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")}`:"\u043d\u0435\u0442"} \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ${a}.`;return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:s}}),l("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",a," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",l("code",null,e)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",l("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",l("code",null,"tailwind.config.js"),"."),l("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",n.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(o.a)(t),":"),l(p.a,{path:"variants.extend",before:"...",add:{[e]:t}}))}},AOjV:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var t=n("q1tI"),s=n.n(t),c=(n("Btb4"),n("AI3G")),o=n("iuhU"),p=s.a.createElement;function l({value:e}){return"string"===typeof e?p("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?p(s.a.Fragment,null,p("span",{className:"token punctuation"},"["),e.map(((a,n)=>p(t.Fragment,{key:n},p(l,{value:a}),n===e.length-1?null:p("span",{className:"token punctuation"},", ")))),p("span",{className:"token punctuation"},"]")):"boolean"===typeof e?p("span",{className:"token boolean"},e.toString()):e.toString()}function i({edits:e,indent:a="",type:n="inserted"}){return p("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===n,"deleted-sign deleted":"inserted"!==n})},Object.keys(e).map(((s,c)=>{return p(t.Fragment,{key:c},p("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===n,deleted:"inserted"!==n})},"inserted"===n?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(i=s)?i:`'${i}'`,p("span",{className:"token operator"},":")," ",p(l,{value:e[s]}),p("span",{className:"token punctuation"},","),"\n");var i})))}function r({path:e,add:a,remove:n,before:s,after:o}){return e="string"===typeof e?e.split("."):e,p("div",{className:"prose"},p("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  ",p("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",p("span",{className:"token punctuation"},"."),p("span",{className:"token property-access"},"exports")," ",p("span",{className:"token operator"},"=")," ",p("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>p(t.Fragment,{key:a},"  ","  ".repeat(a+1),e,p("span",{className:"token operator"},":")," ",p("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(c.a)(s).map(((a,n)=>p(t.Fragment,{key:n},"  ".repeat(e.length+2),p("span",{className:"token comment"},`// ${a}`),"\n")))),n&&p(i,{edits:n,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&p(i,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),p("span",{className:"token unchanged"},o&&Object(c.a)(o).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,n)=>p(t.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n"))),"  }")))))}},Btb4:function(e,a,n){"use strict";const t=n("5xSE"),s=n("p+I8"),c=n("GAX2").default;e.exports=(e,a,n)=>{const o=[];return function e(a,n,p){let l;(n=n||{}).indent=n.indent||"\t",p=p||"",l=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===n.inlineCharacterLimit)return e;const a=e.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=n.inlineCharacterLimit?a:e.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),p).replace(new RegExp(l.indent,"g"),p+n.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const t="["+l.newLine+a.map(((t,s)=>{const c=a.length-1===s?l.newLine:","+l.newLineOrSpace;let o=e(t,n,p+n.indent);return n.transform&&(o=n.transform(a,s,o)),l.indent+o+c})).join("")+l.pad+"]";return o.pop(),i(t)}if(s(a)){let t=Object.keys(a).concat(c(a));if(n.filter&&(t=t.filter((e=>n.filter(a,e)))),0===t.length)return"{}";o.push(a);const s="{"+l.newLine+t.map(((s,c)=>{const o=t.length-1===c?l.newLine:","+l.newLineOrSpace,i="symbol"===typeof s,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||r?s:e(s,n);let d=e(a[s],n,p+n.indent);return n.transform&&(d=n.transform(a,s,d)),l.indent+String(u)+": "+d+o})).join("")+l.pad+"}";return o.pop(),i(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===n.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,n)}},GAX2:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},Zb5r:function(e,a,n){"use strict";function t(e){return e.reduce(((a,n,t)=>0===t?n:t===e.length-1?`${a} \u0438 ${n}`:`${a}, ${n}`),"")}n.d(a,"a",(function(){return t}))},cryp:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/object-fit",function(){return n("u+Ep")}])},"hv1/":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,variants:a}){e({".object-contain":{"object-fit":"contain"},".object-cover":{"object-fit":"cover"},".object-fill":{"object-fit":"fill"},".object-none":{"object-fit":"none"},".object-scale-down":{"object-fit":"scale-down"}},a("objectFit"))}}},"p+I8":function(e,a,n){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,n){"use strict";n.d(a,"a",(function(){return m})),n.d(a,"b",(function(){return j}));var t=n("HALo"),s=n("q1tI"),c=n.n(s),o=n("iuhU"),p=n("ZMKu"),l=c.a.createElement;const i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){const a=Object(s.useRef)(),{0:n,1:c}=Object(s.useState)(!1),{0:o,1:p}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!n)return;function e(){p({height:a.current.contentDocument.body.scrollHeight})}const t=new window.ResizeObserver(e);return e(),t.observe(a.current.contentDocument.body),()=>{t.disconnect()}}),[n]),l("iframe",Object(t.a)({},e,{ref:a,onLoad:()=>c(!0),style:o}))}function b({color:e,snippet:a}){return l("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",i[e],{"bg-gray-800":!i[e]})},l("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[e]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function m({preview:e,src:a,snippet:n,previewClassName:t,color:s="gray"}){return l("div",{className:"relative overflow-hidden mb-8"},e?l("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",r[s],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):l(g,{src:a,className:Object(o.a)("w-full rounded-t-xl",r[s])}),l(b,{color:s,snippet:n}))}function j({preview:e,src:a,previewClassName:n,snippet:t,color:c="gray",min:i=!1}){const m=Object(s.useRef)(),j=Object(p.h)(0),f=Object(s.useRef)(),{0:k,1:v}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{j.set(0)}));return e.observe(m.current),()=>{e.disconnect()}}),[]),l("div",{className:"relative mb-8"},l("div",{ref:m,className:`relative rounded-t-xl ${u[c]}`},l("div",{className:i?"md:w-88":void 0},l(p.d.div,{className:"relative",style:{marginRight:Object(p.i)(j,(e=>-e))}},e?l("div",{className:Object(o.a)("rounded-t-xl",n,r[c],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):l(g,{src:a,className:Object(o.a)("w-full rounded-t-xl",r[c],{"pointer-events-none":k})}))),l("div",{ref:f,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(p.d.div,{drag:"x",_dragX:j,dragMomentum:!1,dragElastic:0,dragConstraints:f,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(i?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:j},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),v(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),v(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[c]}`,style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(b,{color:c,snippet:t}))}},"u+Ep":function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return h}));var t=n("HALo"),s=n("dhJC"),c=n("q1tI"),o=n.n(c),p=n("7ljp"),l=n("YFqc"),i=n.n(l),r=n("tc9R"),u=n("pOT7"),d=n("vRWG"),g=n("I6Nb"),b=n("hv1/"),m=n.n(b),j=n("8C7G"),f=n("wH44");o.a.createElement;const k={Layout:d.DocumentationLayout,classes:{plugin:m()},meta:{title:"\u041f\u043e\u0434\u0433\u043e\u043d\u043a\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430."},tableOfContents:[{title:"Contain",slug:"contain",children:[]},{title:"Cover",slug:"cover",children:[]},{title:"Fill",slug:"fill",children:[]},{title:"None",slug:"none",children:[]},{title:"Scale Down",slug:"scale-down",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]},v=g.ContentsLayout;function h(e){let{components:a}=e,n=Object(s.a)(e,["components"]);return Object(p.a)(v,Object(t.a)({},k,n,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"contain",toc:!0},"Contain"),Object(p.a)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u043e \u043e\u0441\u0442\u0430\u0432\u0430\u043b\u043e\u0441\u044c \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(p.a)("inlineCode",{parentName:"p"},".object-contain"),".")),Object(p.a)(u.a,{preview:'\n  <div class="bg-rose-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-contain" src="/img/placeholder-rose.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-rose-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-contain</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"cover",toc:!0},"Cover"),Object(p.a)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(p.a)("inlineCode",{parentName:"p"},".object-cover"),".")),Object(p.a)(u.a,{preview:'\n  <div class="bg-indigo-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-cover" src="/img/placeholder-indigo.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-indigo-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-cover</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"fill",toc:!0},"Fill"),Object(p.a)("p",null,"\u0420\u0430\u0441\u0442\u044f\u043d\u0438\u0442\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u043b\u043e \u0435\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(p.a)("inlineCode",{parentName:"p"},".object-fill"),".")),Object(p.a)(u.a,{preview:'\n  <div class="bg-light-blue-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-fill" src="/img/placeholder-light-blue.png" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-light-blue-300 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-fill</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"none",toc:!0},"None"),Object(p.a)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0435, \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044f \u0440\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(p.a)("inlineCode",{parentName:"p"},".object-none"),".")),Object(p.a)(u.a,{preview:'\n  <div class="bg-amber-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-none" src="/img/placeholder-amber.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-yellow-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-none</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"scale-down",toc:!0},"Scale Down"),Object(p.a)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0435, \u043d\u043e \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u0435 \u0435\u0433\u043e \u0434\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",Object(p.a)("inlineCode",{parentName:"p"},".object-scale-down"),".")),Object(p.a)(u.a,{preview:'\n  <div class="bg-emerald-300 bg-stripes bg-stripes-white rounded-md overflow-hidden">\n    <img class="h-48 w-full object-scale-down" src="/img/placeholder-emerald.svg" alt="">\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-green-300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">object-scale-down</span> h-48 w-full ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(p.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u043f\u043e\u0434\u0433\u043e\u043d\u043a\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0441\u0441\u0430 ",Object(p.a)("inlineCode",{parentName:"p"},"md:object-scale-down")," \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044e \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(p.a)("inlineCode",{parentName:"p"},"object-scale-down")," \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"object-contain ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:object-scale-down")," ...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"src"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(p.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(p.a)(r.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(p.a)(r.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(p.a)(j.a,{plugin:"objectFit",name:"object-fit",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(r.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(p.a)(f.a,{plugin:"objectFit",name:"object-fit",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=k},wH44:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var t=n("cpVT"),s=n("q1tI"),c=n.n(s),o=n("AOjV"),p=n("AI3G"),l=n("Zb5r"),i=c.a.createElement;function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d({plugin:e,name:a}){const n=Object(p.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,n)=>`${a} ${n.toLowerCase()}`)),i("div",{className:"prose"},i("p",null,"\u0415\u0441\u043b\u0438 \u0412\u044b \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0432\u043e\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f ",a,", \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u0445, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0432 \u0434\u043b\u044f "," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(n.map((e=>`<code>${e}</code>`)))}})," ",n.length>1?"\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438":"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e"," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",i("code",null,"false")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435"," ",i("code",null,"corePlugins")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"),i(o.a,{path:"corePlugins",before:"...",add:n.reduce(((e,a)=>u(u({},e),{},{[a]:!1})),{})}))}}},[["cryp",0,2,6,1,3,4,5,7]]]);