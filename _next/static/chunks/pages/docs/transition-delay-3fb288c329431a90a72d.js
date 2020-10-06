_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[162],{"8C7G":function(a,n,e){"use strict";e.d(n,"a",(function(){return r}));var t=e("KQm4"),s=e("rePB"),o=e("q1tI"),i=e.n(o),c=e("98BF"),l=e("Zb5r"),p=e("AOjV"),u=i.a.createElement;function r(a){var n=a.plugin,e=a.name,o=c.defaultConfig.variants[n]||["responsive"];e=e||n.replace(/([a-z])([A-Z])/g,(function(a,n,e){return"".concat(n," ").concat(e.toLowerCase())}));var r=["responsive","hover","focus","active","group-hover"].filter((function(a){return!o.includes(a)})).slice(0,2);return u(i.a.Fragment,null,u("p",null,"By default, ",o.length?"only ".concat(Object(l.a)(o)):"no"," variants are generated for ",e," utilities."),u("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",u("code",null,n)," property in the ",u("code",null,"variants")," section of your"," ",u("code",null,"tailwind.config.js")," file."),u("p",null,"For example, this config will ",o.length>0?"also ":"","generate"," ",Object(l.a)(r)," variants:"),u(p.a,{path:"variants",before:"// ...",remove:Object(s.a)({},n,o),add:Object(s.a)({},n,[].concat(Object(t.a)(o),Object(t.a)(r)))}))}},DEqr:function(a,n,e){"use strict";e.r(n),e.d(n,"Layout",(function(){return j})),e.d(n,"classes",(function(){return v})),e.d(n,"meta",(function(){return y})),e.d(n,"tableOfContents",(function(){return k})),e.d(n,"default",(function(){return x}));var t=e("wx14"),s=e("Ff2n"),o=e("q1tI"),i=e.n(o),c=e("7ljp"),l=e("YFqc"),p=e.n(l),u=e("tc9R"),r=e("pOT7"),d=e("vRWG"),b=e("I6Nb"),m=e("Y0DO"),g=e.n(m),f=e("8C7G"),O=e("wH44"),j=(i.a.createElement,d.DocumentationLayout),v={plugin:g.a},y={title:"Transition Delay",description:"Utilities for controlling the delay of CSS transitions.",featureVersion:"v1.3.0+"},k=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Delay values",slug:"delay-values"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],h={Layout:j,classes:v,meta:y,tableOfContents:k},N=b.ContentsLayout;function x(a){var n=a.components,e=Object(s.a)(a,["components"]);return Object(c.a)(N,Object(t.a)({},h,e,{components:n,mdxType:"MDXLayout"}),Object(c.a)(u.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"delay-{amount}")," utilities to control an element's transition-delay."),Object(c.a)(r.a,{preview:'\n  <button class="transition delay-150 duration-300 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n  <button class="transition delay-300 duration-300 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n  <button class="transition delay-700 duration-300 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition delay-150 duration-300 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition delay-300 duration-300 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition delay-700 duration-300 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"bg-white flex justify-around items-center p-4 py-12"}),Object(c.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control an element's transition-delay at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transition-delay utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:delay-500")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"delay-500")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(u.a,{level:3,id:"delay-values",toc:!0},"Delay values"),Object(c.a)("p",null,"By default Tailwind provides eight general purpose transition-delay utilities. You change, add, or remove these by customizing the ",Object(c.a)("inlineCode",{parentName:"p"},"transitionDelay")," section of your Tailwind theme config."),Object(c.a)("pre",{className:"language-diff"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionDelay: {\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '0': '0ms',\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '2000': '2000ms',\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(c.a)("p",null,"Learn more about customizing the default theme in the ",Object(c.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(c.a)("a",null,"theme customization documentation")),"."),Object(c.a)(u.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(f.a,{plugin:"transitionDelay",name:"transition-delay",mdxType:"Variants"}),Object(c.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(O.a,{plugin:"transitionDelay",name:"transition-delay",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=h},VVFC:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-delay",function(){return e("DEqr")}])},Y0DO:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return(0,s.default)("transitionDelay",[["delay",["transitionDelay"]]])};var t,s=(t=e("y2+P"))&&t.__esModule?t:{default:t}}},[["VVFC",0,2,1,3,4,7]]]);