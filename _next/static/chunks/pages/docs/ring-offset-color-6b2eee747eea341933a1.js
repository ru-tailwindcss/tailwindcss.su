_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[131],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("98BF"),r=t("Zb5r"),p=t("AOjV"),l=c.a.createElement;function i(e){var a=e.plugin,t=e.name,s=o.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),i="\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ".concat(s.length?"\u0442\u043e\u043b\u044c\u043a\u043e ".concat(Object(r.a)(s).replace("dark","\u0442\u0435\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c <em>(\u0435\u0441\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d)</em>")):"\u043d\u0435\u0442"," \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ").concat(t,".");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:i}}),l("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0442\u0438\u043b\u0438\u0442 ",t," \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"," ",l("code",null,a)," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",l("code",null,"variants")," \u0412\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"," ",l("code",null,"tailwind.config.js"),"."),l("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f ",s.length>0?"\u0442\u0430\u043a\u0436\u0435 ":"","\u0431\u0443\u0434\u0435\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b"," ",Object(r.a)(c),":"),l(p.a,{path:"variants.extend",before:"...",add:Object(n.a)({},a,c)}))}},"9Jru":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;const n=e=>Object.assign({},...Object.entries(e).flatMap(([e,a])=>"object"==typeof a?Object.entries(n(a)).map(([a,t])=>({[e+("DEFAULT"===a?"":"-"+a)]:t})):[{[""+e]:a}]));var s=n;a.default=s},DfYV:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,theme:a,variants:t}){const r=(0,s.default)(a("ringOffsetColor"));e(n.default.fromPairs(n.default.map(n.default.omit(r,"DEFAULT"),(e,a)=>[(0,c.default)("ring-offset",a),{"--tw-ring-offset-color":(0,o.default)(e)}])),t("ringOffsetColor"))}};var n=r(t("LvDl")),s=r(t("9Jru")),c=r(t("dzuX")),o=r(t("OiSs"));function r(e){return e&&e.__esModule?e:{default:e}}},IdEg:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return k}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),r=t("7ljp"),p=t("YFqc"),l=t.n(p),i=t("tc9R"),u=t("pOT7"),b=t("vRWG"),m=t("I6Nb"),d=t("DfYV"),j=t.n(d),O=t("8C7G"),g=t("wH44"),N=(o.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:j.a,transformProperties:function(e){e.selector;var a=e.properties;return a["box-shadow"]="0 0 0 var(--ring-offset-width) var(--ring-offset-color), var(--ring-shadow)",a}},meta:{title:"\u0426\u0432\u0435\u0442 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u044c\u0446\u0430",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u044b \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0446\u0432\u0435\u0442\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0443\u0440\u0430 \u043a\u043e\u043b\u044c\u0446\u0430."},tableOfContents:[{title:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435",slug:"primenenie",children:[]},{title:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c",slug:"adaptivnost",children:[]},{title:"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f",slug:"kastomizacziya",children:[{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b",slug:"varianty"},{title:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",slug:"otklyuchenie"}]}]}),f=m.ContentsLayout;function k(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.a)(f,Object(n.a)({},N,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:2,id:"primenenie",toc:!0},"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),Object(r.a)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b ",Object(r.a)("inlineCode",{parentName:"p"},"ring-offset-{color}"),", \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0446\u0432\u0435\u0442 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u044c\u0446\u0430. \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0441 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c \u0446\u0432\u0435\u0442\u043e\u043c \u0444\u043e\u043d\u0430, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0438\u0441\u0442\u0438\u043d\u043d\u044b\u0435 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0442\u0435\u043d\u0438 \u0431\u043b\u043e\u043a\u0430 \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b \u0432 CSS.")),Object(r.a)(u.a,{preview:'\n  <div class="bg-violet-100 grid grid-cols-1 gap-6 justify-items-center p-8 ">\n    <p class="font-semibold text-violet-600">bg-purple-100</p>\n    <button tabindex="-1" class="focus:outline-none text-sm px-5 py-3 rounded-md font-semibold text-white bg-violet-500 ring ring-violet-600 ring-offset-4 ring-offset-violet-100">\n      ring-offset-purple-100\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>... <span class="code-highlight bg-code-highlight">bg-purple-100</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>... ring ring-purple-600 <span class="code-highlight bg-code-highlight">ring-offset-4</span> <span class="code-highlight bg-code-highlight">ring-offset-purple-100</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    ring-offset-purple-100\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-0",color:"violet",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("hr",null),Object(r.a)(i.a,{level:2,id:"adaptivnost",toc:!0},"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"),Object(r.a)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0446\u0432\u0435\u0442\u043e\u043c \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u044c\u0446\u0430 \u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439 \u0442\u043e\u0447\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," \u043a \u043b\u044e\u0431\u043e\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0443\u0442\u0438\u043b\u0438\u0442\u0435 \u0446\u0432\u0435\u0442\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u044c\u0446\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"md:ring-offset-blue-500"),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0443\u0442\u0438\u043b\u0438\u0442\u0443 ",Object(r.a)("inlineCode",{parentName:"p"},"ring-offset-blue-500")," \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0440\u0430\u0437\u043c\u0435\u0440\u0430\u0445 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0432\u044b\u0448\u0435."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"ring-2 ring-offset-2 ring-offset-blue-300 ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:ring-offset-blue-500"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445 \u0430\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430 Tailwind \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0435\u0439 ",Object(r.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0430")),"."),Object(r.a)("hr",null),Object(r.a)(i.a,{level:2,id:"kastomizacziya",toc:!0},"\u041a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u044f"),Object(r.a)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c, \u043a\u0430\u043a\u0438\u0435 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0446\u0432\u0435\u0442\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u044c\u0446\u0430 \u0431\u0443\u0434\u0443\u0442 \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f, \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0432 \u0432\u0430\u0448\u0443 \u0446\u0432\u0435\u0442\u043e\u0432\u0443\u044e \u043f\u0430\u043b\u0438\u0442\u0440\u0443 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043b\u044e\u0447\u0430 ",Object(r.a)("inlineCode",{parentName:"p"},"colors")," \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",Object(r.a)("inlineCode",{parentName:"p"},"theme")," \u0432\u0430\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js"),":"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," colors ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss/colors'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      gray",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"blueGray"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      indigo",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"indigo"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      red",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"rose"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      yellow",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"yellow"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(r.a)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u0446\u0432\u0435\u0442\u0430 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u044c\u0446\u0430, \u043d\u0435 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u044f \u0432\u0430\u0448\u0443 \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0443\u044e \u0446\u0432\u0435\u0442\u043e\u0432\u0443\u044e \u043f\u0430\u043b\u0438\u0442\u0440\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u043a\u043b\u044e\u0447 ",Object(r.a)("inlineCode",{parentName:"p"},"ringOffsetColor"),":"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," colors ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss/colors'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ringOffsetColor",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      white",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"white"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      pink",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"fuchsia"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(r.a)("p",null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0442\u0435\u043c\u044b \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 ",Object(r.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u043f\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0442\u0435\u043c\u044b")),"."),Object(r.a)(i.a,{level:3,id:"varianty",toc:!0},"\u0412\u0430\u0440\u0438\u0430\u043d\u0442\u044b")),Object(r.a)(O.a,{plugin:"ringOffsetColor",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(i.a,{level:3,id:"otklyuchenie",toc:!0},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")),Object(r.a)(g.a,{plugin:"ringOffsetColor",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=N},OiSs:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return s.default.isFunction(e)?e({}):e};var n,s=(n=t("LvDl"))&&n.__esModule?n:{default:n}},"dy+Q":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/ring-offset-color",function(){return t("IdEg")}])},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return j})),t.d(a,"b",(function(){return O}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("iuhU"),r=t("ZMKu"),p=c.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},b={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var a=Object(s.useRef)(),t=Object(s.useState)(!1),c=t[0],o=t[1],r=Object(s.useState)({}),l=r[0],i=r[1];return Object(s.useEffect)((function(){if(c){var e=new window.ResizeObserver(t);return t(),e.observe(a.current.contentDocument.body),function(){e.disconnect()}}function t(){i({height:a.current.contentDocument.body.scrollHeight})}}),[c]),p("iframe",Object(n.a)({},e,{ref:a,onLoad:function(){return o(!0)},style:l}))}function d(e){var a=e.color,t=e.snippet;return p("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[a],{"bg-gray-800":!l[a]})},p("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[a]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function j(e){var a=e.preview,t=e.src,n=e.snippet,s=e.previewClassName,c=e.color,r=void 0===c?"gray":c;return p("div",{className:"relative overflow-hidden mb-8"},a?p("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",i[r],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):p(m,{src:t,className:Object(o.a)("w-full rounded-t-xl",i[r])}),p(d,{color:r,snippet:n}))}function O(e){var a=e.preview,t=e.src,n=e.previewClassName,c=e.snippet,l=e.color,j=void 0===l?"gray":l,O=e.min,g=void 0!==O&&O,N=Object(s.useRef)(),f=Object(r.h)(0),k=Object(s.useRef)(),v=Object(s.useState)(!1),h=v[0],y=v[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){f.set(0)}));return e.observe(N.current),function(){e.disconnect()}}),[]),p("div",{className:"relative mb-8"},p("div",{ref:N,className:"relative rounded-t-xl ".concat(u[j])},p("div",{className:g?"md:w-88":void 0},p(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(f,(function(e){return-e}))}},a?p("div",{className:Object(o.a)("rounded-t-xl",n,i[j],{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):p(m,{src:t,className:Object(o.a)("w-full rounded-t-xl",i[j],{"pointer-events-none":h})}))),p("div",{ref:k,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},p(r.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:k,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:function(){document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),y(!1)}},p("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},p("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(b[j]),style:{width:"0.4375rem"}},p("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),p(d,{color:j,snippet:c}))}}},[["dy+Q",0,2,6,10,1,3,4,5,7,8]]]);