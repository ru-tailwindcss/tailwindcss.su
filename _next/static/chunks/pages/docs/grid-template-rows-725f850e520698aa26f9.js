_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[109],{"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("KQm4"),s=a("rePB"),i=a("q1tI"),c=a.n(i),r=a("98BF"),o=a("Zb5r"),l=a("AOjV"),p=c.a.createElement;function u(e){var t=e.plugin,a=e.name,i=r.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(function(e,t,a){return"".concat(t," ").concat(a.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(e){return!i.includes(e)})).slice(0,2);return p(c.a.Fragment,null,p("p",null,"By default, ",i.length?"only ".concat(Object(o.a)(i)):"no"," variants are generated for ",a," utilities."),p("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",p("code",null,t)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",i.length>0?"also ":"","generate"," ",Object(o.a)(u)," variants:"),p(l.a,{path:"variants",before:"// ...",remove:Object(s.a)({},t,i),add:Object(s.a)({},t,[].concat(Object(n.a)(i),Object(n.a)(u)))}))}},C7gB:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/grid-template-rows",function(){return a("a+39")}])},"Ca+n":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),s=a.n(n),i=a("S5AU"),c=a.n(i),r=a("iuhU"),o=s.a.createElement,l=["","sm:","md:","lg:","xl:"];function p(e){var t=e.children,a=e.active,n=e.onClick;return o("button",{type:"button",className:Object(r.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":a,"text-gray-500":!a}),onClick:n},t)}var u=function(e){return'<div class="'.concat(e,'"></div>')};function d(e){var t=e.classNames,a=e.snippet,s=void 0===a?u:a,i=e.preview,d=e.previewClassName,m=Array.isArray(t[0])?t.length:1,g=Object(n.useState)(0),f=g[0],b=g[1];return o("div",{className:"mt-8"},o("div",{className:"flex justify-center"},o("div",{className:"grid grid-cols-5 mb-2 bg-white"},o(p,{active:0===f,onClick:function(){return b(0)}},o("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"all")),o(p,{active:1===f,onClick:function(){return b(1)}},o("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"sm")),o(p,{active:2===f,onClick:function(){return b(2)}},o("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"md")),o(p,{active:3===f,onClick:function(){return b(3)}},o("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"lg")),o(p,{active:4===f,onClick:function(){return b(4)}},o("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),o("p",{className:"text-xs"},"xl")))),o("div",{className:"overflow-hidden mb-8"},o("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},o("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},o("code",{className:"inline-block p-4"},c()(s(1===m?"{{CLASSNAMES}}":Array.from({length:m}).map((function(e,t){return"{{CLASSNAMES[".concat(t,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(e,a){if(a%2===1){var n=e.match(/\[([0-9]+)\]/);return(n?t[parseInt(n[1],10)]:t).map((function(e,t){return e?o("span",{key:"".concat(a,"-").concat(t),className:f===t?"text-code-yellow":""},0===t?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(e){return"".concat(l[t]).concat(e)})).join(" ")):null})).filter(Boolean)}return e}))))),o("div",{className:Object(r.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",d,{"p-4":!d})},i(function(e){if(m>1)return t.map((function(t){for(var a=e;a>=0;a--)if(t[a])return t[a].replace(/\(([^)]+)\)/g,"$1")}));for(var a=e;a>=0;a--)if(t[a])return t[a].replace(/\(([^)]+)\)/g,"$1")}(f)))))}},"IBu/":function(e,t,a){"use strict";const n=a("sQdO");e.exports=e=>{const t=n(e);if(0===t)return e;const a=new RegExp(`^[ \\t]{${t}}`,"gm");return e.replace(a,"")}},S5AU:function(e,t,a){"use strict";const n=a("IBu/"),s=a("S6im");e.exports=(e,t=0,a)=>s(n(e),t,a)},S6im:function(e,t,a){"use strict";e.exports=(e,t=1,a)=>{if(a={indent:" ",includeEmptyLines:!1,...a},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof t)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if("string"!==typeof a.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof a.indent}\``);if(0===t)return e;const n=a.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(n,a.indent.repeat(t))}},"a+39":function(e,t,a){"use strict";a.r(t),a.d(t,"Layout",(function(){return j})),a.d(t,"classes",(function(){return w})),a.d(t,"meta",(function(){return O})),a.d(t,"tableOfContents",(function(){return x})),a.d(t,"default",(function(){return k}));var n=a("wx14"),s=a("Ff2n"),i=a("q1tI"),c=a.n(i),r=a("7ljp"),o=a("YFqc"),l=a.n(o),p=a("tc9R"),u=a("pOT7"),d=a("vRWG"),m=a("I6Nb"),g=a("zOK1"),f=a.n(g),b=a("8C7G"),v=a("wH44"),h=a("Ca+n"),j=(c.a.createElement,d.DocumentationLayout),w={plugin:f.a},O={title:"Grid Template Rows",description:"Utilities for specifying the rows in a grid layout.",featureVersion:"v1.2.0+"},x=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],y={Layout:j,classes:w,meta:O,tableOfContents:x},N=m.ContentsLayout;function k(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(r.a)(N,Object(n.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"grid-rows-{n}")," utilities to create grids with ",Object(r.a)("em",{parentName:"p"},"n")," equally sized rows."),Object(r.a)(u.a,{preview:'\n  <div class="h-64 grid grid-rows-3 grid-flow-col gap-4">\n    <div class="bg-gray-300 flex items-center justify-center">1</div>\n    <div class="bg-gray-500 flex items-center justify-center">2</div>\n    <div class="bg-gray-300 flex items-center justify-center">3</div>\n    <div class="bg-gray-500 flex items-center justify-center">4</div>\n    <div class="bg-gray-300 flex items-center justify-center">5</div>\n    <div class="bg-gray-500 flex items-center justify-center">6</div>\n    <div class="bg-gray-300 flex items-center justify-center">7</div>\n    <div class="bg-gray-500 flex items-center justify-center">8</div>\n    <div class="bg-gray-300 flex items-center justify-center">9</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-64 grid grid-rows-3 grid-flow-col gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"bg-white p-8"}),Object(r.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the rows of a grid at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing grid-template-rows utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:grid-rows-6")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"grid-rows-6")," utility at only medium screen sizes and above."),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(h.a,{classNames:["grid-rows-2","grid-rows-3","grid-rows-4","grid-rows-5","grid-rows-6"],snippet:function(e){return'\n    <div class="grid grid-flow-col '.concat(e,' ...">\n      \x3c!-- ... --\x3e\n    </div>\n  ')},previewClassName:"p-8",preview:function(e){return Object(r.a)("div",{className:"h-64 grid grid-flow-col gap-4 ".concat(e)},Object(r.a)("div",{className:"bg-gray-300 flex items-center justify-center"},"1"),Object(r.a)("div",{className:"bg-gray-500 flex items-center justify-center"},"2"),Object(r.a)("div",{className:"bg-gray-300 flex items-center justify-center"},"3"),Object(r.a)("div",{className:"bg-gray-500 flex items-center justify-center"},"4"),Object(r.a)("div",{className:"bg-gray-300 flex items-center justify-center"},"5"),Object(r.a)("div",{className:"bg-gray-500 flex items-center justify-center"},"6"),Object(r.a)("div",{className:"bg-gray-300 flex items-center justify-center"},"7"),Object(r.a)("div",{className:"bg-gray-500 flex items-center justify-center"},"8"),Object(r.a)("div",{className:"bg-gray-300 flex items-center justify-center"},"9"))},mdxType:"ResponsiveCodeSample"}),Object(r.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)("p",null,"By default Tailwind includes grid-template-row utilities for creating basic grids with up to 6 equal width rows. You change, add, or remove these by customizing the ",Object(r.a)("inlineCode",{parentName:"p"},"gridTemplateRows")," section of your Tailwind theme config."),Object(r.a)("p",null,"You have direct access to the ",Object(r.a)("inlineCode",{parentName:"p"},"grid-template-rows")," CSS property here so you can make your custom rows values as generic or as complicated and site-specific as you like."),Object(r.a)("pre",{className:"language-diff"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       gridTemplateRows: {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"         // Simple 8 row grid\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '8': 'repeat(8, minmax(0, 1fr))',\n"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"         // Complex site-specific row configuration\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'layout': '200px minmax(900px, 1fr) 100px',\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(r.a)("p",null,"Learn more about customizing the default theme in the ",Object(r.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"theme customization documentation")),"."),Object(r.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(r.a)(b.a,{plugin:"gridTemplateRows",name:"grid-template-rows",mdxType:"Variants"}),Object(r.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(r.a)(v.a,{plugin:"gridTemplateRows",name:"grid-template-rows",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=y},sQdO:function(e,t,a){"use strict";e.exports=e=>{const t=e.match(/^[ \t]*(?=\S)/gm);return t?t.reduce((e,t)=>Math.min(e,t.length),1/0):0}},zOK1:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({target:e,...t}){"ie11"!==e("gridTemplateRows")&&(0,s.default)("gridTemplateRows",[["grid-rows",["gridTemplateRows"]]])({target:e,...t})}};var n,s=(n=a("y2+P"))&&n.__esModule?n:{default:n}}},[["C7gB",0,2,1,3,4,7]]]);