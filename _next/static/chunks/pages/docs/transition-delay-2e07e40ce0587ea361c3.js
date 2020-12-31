_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[153],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("rePB"),s=t("q1tI"),o=t.n(s),i=t("98BF"),c=t("Zb5r"),r=t("AOjV"),l=o.a.createElement;function p(e){var a=e.plugin,t=e.name,s=i.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var o=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),p="By default, ".concat(s.length?"only ".concat(Object(c.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:p}}),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,a)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(c.a)(o)," variants:"),l(r.a,{path:"variants.extend",before:"...",add:Object(n.a)({},a,o)}))}},DEqr:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t("wx14"),s=t("Ff2n"),o=t("q1tI"),i=t.n(o),c=t("7ljp"),r=t("YFqc"),l=t.n(r),p=t("tc9R"),u=t("pOT7"),d=t("vRWG"),b=t("I6Nb"),m=t("Y0DO"),g=t.n(m),j=t("8C7G"),O=t("wH44"),f=(i.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g.a},meta:{title:"Transition Delay",description:"Utilities for controlling the delay of CSS transitions."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Delay values",slug:"delay-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=b.ContentsLayout;function N(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(c.a)(h,Object(n.a)({},f,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"delay-{amount}")," utilities to control an element's transition-delay.")),Object(c.a)(u.a,{preview:'\n  <div class="flex justify-around items-center">\n    <button class="transition delay-150 duration-300 ease-in-out transform hover:scale-125 bg-amber-600 text-white font-semibold px-6 py-3 rounded-md">\n      Hover me\n    </button>\n    <button class="transition delay-300 duration-300 ease-in-out transform hover:scale-125 bg-amber-600 text-white font-semibold px-6 py-3 rounded-md">\n      Hover me\n    </button>\n    <button class="transition delay-700 duration-300 ease-in-out transform hover:scale-125 bg-amber-600 text-white font-semibold px-6 py-3 rounded-md">\n      Hover me\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">delay-150</span> duration-300 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">delay-300</span> duration-300 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">delay-700</span> duration-300 ease-in-out ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control an element's transition-delay at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transition-delay utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:delay-500")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"delay-500")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(p.a,{level:3,id:"delay-values",toc:!0},"Delay values"),Object(c.a)("p",null,"By default, Tailwind provides eight general purpose transition-delay utilities. You change, add, or remove these by customizing the ",Object(c.a)("inlineCode",{parentName:"p"},"transitionDelay")," section of your Tailwind theme config."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionDelay",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'0ms'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'2000'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'2000ms'"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(c.a)("p",null,"Learn more about customizing the default theme in the ",Object(c.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(c.a)("a",null,"theme customization documentation")),"."),Object(c.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(j.a,{plugin:"transitionDelay",name:"transition-delay",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(O.a,{plugin:"transitionDelay",name:"transition-delay",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=f},VVFC:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-delay",function(){return t("DEqr")}])},Y0DO:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("transitionDelay",[["delay",["transitionDelay"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return j}));var n=t("wx14"),s=t("q1tI"),o=t.n(s),i=t("iuhU"),c=t("ZMKu"),r=o.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){var a=Object(s.useRef)(),t=Object(s.useState)(!1),o=t[0],i=t[1],c=Object(s.useState)({}),l=c[0],p=c[1];return Object(s.useEffect)((function(){if(o){var e=new window.ResizeObserver(t);return t(),e.observe(a.current.contentDocument.body),function(){e.disconnect()}}function t(){p({height:a.current.contentDocument.body.scrollHeight})}}),[o]),r("iframe",Object(n.a)({},e,{ref:a,onLoad:function(){return i(!0)},style:l}))}function m(e){var a=e.color,t=e.snippet;return r("div",{className:Object(i.a)("overflow-hidden rounded-b-xl",l[a],{"bg-gray-800":!l[a]})},r("pre",{className:Object(i.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[a]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g(e){var a=e.preview,t=e.src,n=e.snippet,s=e.previewClassName,o=e.color,c=void 0===o?"gray":o;return r("div",{className:"relative overflow-hidden mb-8"},a?r("div",{className:Object(i.a)("rounded-t-xl overflow-hidden",p[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):r(b,{src:t,className:Object(i.a)("w-full rounded-t-xl",p[c])}),r(m,{color:c,snippet:n}))}function j(e){var a=e.preview,t=e.src,n=e.previewClassName,o=e.snippet,l=e.color,g=void 0===l?"gray":l,j=e.min,O=void 0!==j&&j,f=Object(s.useRef)(),h=Object(c.h)(0),N=Object(s.useRef)(),v=Object(s.useState)(!1),k=v[0],y=v[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){h.set(0)}));return e.observe(f.current),function(){e.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:f,className:"relative rounded-t-xl ".concat(u[g])},r("div",{className:O?"md:w-88":void 0},r(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(h,(function(e){return-e}))}},a?r("div",{className:Object(i.a)("rounded-t-xl",n,p[g],{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):r(b,{src:t,className:Object(i.a)("w-full rounded-t-xl",p[g],{"pointer-events-none":k})}))),r("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(c.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(O?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),y(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[g]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(m,{color:g,snippet:o}))}}},[["VVFC",0,2,6,1,3,4,5,7,8,9]]]);