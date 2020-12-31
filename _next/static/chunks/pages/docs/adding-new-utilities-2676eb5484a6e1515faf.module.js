(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{NTZh:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/adding-new-utilities",function(){return t("fB4b")}])},UyA5:function(a,e,t){"use strict";t.d(e,"c",(function(){return s})),t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return p}));var n=t("q1tI"),c=t.n(n).a.createElement;function s(a){var{children:e}=a;return c("p",{className:"flex items-start mt-8 mb-4 space-x-2"},c("svg",{className:"w-6 h-6 flex-none mt-0.5",fill:"none"},c("circle",{cx:"12",cy:"12",r:"12",fill:"#A7F3D0"}),c("path",{d:"M18 8l-8 8-4-4",stroke:"#047857",strokeWidth:"2"})),c("strong",{className:"text-base leading-7 font-semibold text-gray-900"},e))}function o(a){var{children:e}=a;return c("p",{className:"flex items-start mt-8 mb-4 space-x-2"},c("svg",{className:"w-6 h-6 flex-none mt-0.5",fill:"none"},c("circle",{cx:"12",cy:"12",r:"12",fill:"#FECDD3"}),c("path",{d:"M8 8l8 8M16 8l-8 8",stroke:"#B91C1C",strokeWidth:"2"})),c("strong",{className:"text-base leading-7 font-semibold text-gray-900"},e))}function p(a){var{children:e}=a;return c("div",{className:"text-sm bg-light-blue-100 text-light-blue-800 font-medium px-4 py-3 mb-4 rounded-xl"},c("div",{className:"flex items-start space-x-3"},c("svg",{width:"20",height:"20",className:"text-light-blue-500",fill:"currentColor"},c("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.998 2a1 1 0 00-.707 1.707l.707.707v3.758a1 1 0 01-.293.707l-4 4C.815 14.769 2.154 18 4.826 18H15.17c2.672 0 4.01-3.231 2.12-5.121l-4-4a1 1 0 01-.292-.707V4.414l.707-.707A1 1 0 0012.998 2h-6zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.992 1.992 0 00-.114-.035l1.063-1.063a3 3 0 00.879-2.121z"})),c("p",null,e)))}},ap0H:function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));var n=t("q1tI"),c=t.n(n),s=t("8Kt/"),o=t.n(s),p=c.a.createElement;function r(a){var{suffix:e,children:t}=a,n=t+(e?" - ".concat(e):"");return p(o.a,null,p("title",{key:"title"},n),p("meta",{key:"twitter:title",name:"twitter:title",content:n}),p("meta",{key:"og:title",property:"og:title",content:n}))}},fB4b:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return N}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),o=t.n(s),p=t("7ljp"),r=t("YFqc"),l=t.n(r),m=t("tc9R"),b=t("vRWG"),i=t("I6Nb"),j=(t("UyA5"),o.a.createElement,{Layout:b.DocumentationLayout,meta:{title:"Adding New Utilities",description:"Extending Tailwind with your own custom utility classes."},tableOfContents:[{title:"Using CSS",slug:"using-css",children:[{title:"Generating responsive variants",slug:"generating-responsive-variants"},{title:"Generating dark mode variants",slug:"generating-dark-mode-variants"},{title:"Generating state variants",slug:"generating-state-variants"}]},{title:"Using a plugin",slug:"using-a-plugin",children:[]}]}),O=i.ContentsLayout;function N(a){var{components:e}=a,t=Object(c.a)(a,["components"]);return Object(p.a)(O,Object(n.a)({},j,t,{components:e,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)("p",null,"Although Tailwind provides a pretty comprehensive set of utility classes out of the box, you may run into situations where you need to add a few of your own."),Object(p.a)("p",null,"Deciding on the best way to extend a framework can be paralyzing, so here are some best practices to help you add your own utilities in the most idiomatic way possible."),Object(p.a)("hr",null),Object(p.a)(m.a,{level:2,id:"using-css",toc:!0},"Using CSS"),Object(p.a)("p",null,"The easiest way to add your own utilities to Tailwind is to simply add them to your CSS."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@layer")," utilities")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".scroll-snap-none"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"scroll-snap-type"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," none",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".scroll-snap-x"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"scroll-snap-type"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," x",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".scroll-snap-y"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"scroll-snap-type"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," y",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"By using the ",Object(p.a)("inlineCode",{parentName:"p"},"@layer")," directive, Tailwind will automatically move those styles to the same place as ",Object(p.a)("inlineCode",{parentName:"p"},"@tailwind utilities")," to avoid unintended specificity issues."),Object(p.a)("p",null,"Using the ",Object(p.a)("inlineCode",{parentName:"p"},"@layer")," directive will also instruct Tailwind to consider those styles for purging when purging the ",Object(p.a)("inlineCode",{parentName:"p"},"utilities")," layer. Read our ",Object(p.a)(l.a,{href:"/docs/optimizing-for-production",passHref:!0},Object(p.a)("a",null,"documentation on optimizing for production"))," for more details."),Object(p.a)(m.a,{level:3,id:"generating-responsive-variants",toc:!0},"Generating responsive variants"),Object(p.a)("p",null,"If you'd like to generate ",Object(p.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"responsive variants"))," of your own utilities based on the breakpoints defined in your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, wrap your utilities in the ",Object(p.a)("inlineCode",{parentName:"p"},"@variants")," directive and add ",Object(p.a)("inlineCode",{parentName:"p"},"responsive")," to the list of variants:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@layer")," utilities")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@variants")," responsive")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".scroll-snap-none"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"scroll-snap-type"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," none",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".scroll-snap-x"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"scroll-snap-type"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," x",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".scroll-snap-y"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"scroll-snap-type"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," y",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"Tailwind will automatically generate prefixed versions of each custom utility that you can use to conditionally apply those styles at different breakpoints:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- Use `scroll-snap-type: none` by default, then use `scroll-snap-type: x` on medium screens and up --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"scroll-snap-none ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:scroll-snap-x"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"Learn more about responsive utilities in the ",Object(p.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"responsive design documentation")),"."),Object(p.a)(m.a,{level:3,id:"generating-dark-mode-variants",toc:!0},"Generating dark mode variants"),Object(p.a)("p",null,"If you'd like to generate ",Object(p.a)(l.a,{href:"/docs/dark-mode",passHref:!0},Object(p.a)("a",null,"dark mode variants"))," of your own utilities, first make sure ",Object(p.a)("inlineCode",{parentName:"p"},"darkMode")," is set to either ",Object(p.a)("inlineCode",{parentName:"p"},"media")," or ",Object(p.a)("inlineCode",{parentName:"p"},"class")," in your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  darkMode",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'media'"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// ..."),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"Next, wrap your utilities in the ",Object(p.a)("inlineCode",{parentName:"p"},"@variants")," directive and add ",Object(p.a)("inlineCode",{parentName:"p"},"dark")," to the list of variants:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@layer")," utilities")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@variants")," dark")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".filter-none"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"filter"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," none",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".filter-grayscale"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"filter"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"grayscale"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"100"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unit"}),"%"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"Tailwind will automatically generate prefixed versions of each custom utility that you can use to conditionally apply those styles at different states:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter-grayscale ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"dark:filter-none"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"Learn more about dark mode utilities in the ",Object(p.a)(l.a,{href:"/docs/dark-mode",passHref:!0},Object(p.a)("a",null,"dark mode documentation")),"."),Object(p.a)(m.a,{level:3,id:"generating-state-variants",toc:!0},"Generating state variants"),Object(p.a)("p",null,"If you'd like to create ",Object(p.a)(l.a,{href:"/docs/hover-focus-and-other-states",passHref:!0},Object(p.a)("a",null,"state variants"))," for your own utilities, wrap your utilities in the ",Object(p.a)("inlineCode",{parentName:"p"},"@variants")," directive and list the variants you'd like to enable:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@layer")," utilities")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@variants")," hover",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," focus")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".filter-none"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"filter"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," none",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".filter-grayscale"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"filter"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"grayscale"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"100"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unit"}),"%"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"Tailwind will automatically generate prefixed versions of each custom utility that you can use to conditionally apply those styles at different states:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter-grayscale ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"hover:filter-none"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"State variants are generated in the same order you list them in the ",Object(p.a)("inlineCode",{parentName:"p"},"@variants")," directive, so if you'd like one variant to take precedence over another, make sure you list that one last:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/* Focus will take precedence over hover */"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@variants")," hover",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," focus")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".filter-grayscale"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"filter"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"grayscale"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"100"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unit"}),"%"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/* ... */"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/* Hover will take precedence over focus */"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@variants")," focus",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," hover")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token class"}),".filter-grayscale"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"filter"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"grayscale"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"100"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unit"}),"%"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/* ... */"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"Learn more about state variants in the ",Object(p.a)(l.a,{href:"/docs/hover-focus-and-other-states",passHref:!0},Object(p.a)("a",null,"state variants documentation")),"."),Object(p.a)("hr",null),Object(p.a)(m.a,{level:2,id:"using-a-plugin",toc:!0},"Using a plugin"),Object(p.a)("p",null,"In addition to adding new utility classes directly in your CSS files, you can also add utilities to Tailwind by writing your own plugin:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," plugin ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss/plugin'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  plugins",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"plugin"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"function"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{")," addUtilities ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}")),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," newUtilities ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'.filter-none'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n          filter",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'none'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'.filter-grayscale'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n          filter",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'grayscale(100%)'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"addUtilities"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),"newUtilities",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'responsive'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'hover'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n"))),Object(p.a)("p",null,"This can be a good choice if you want to publish your custom utilities as a library or make it easier to share them across multiple projects."),Object(p.a)("p",null,"Learn more in the ",Object(p.a)(l.a,{href:"/docs/plugins#adding-utilities",passHref:!0},Object(p.a)("a",null,"utility plugin documentation")),".")))}N.isMDXComponent=!0,N.layoutProps=j},vRWG:function(a,e,t){"use strict";t.r(e),t.d(e,"DocumentationLayout",(function(){return j}));var n=t("wx14"),c=t("q1tI"),s=t.n(c),o=t("ekQu"),p=t("8Kt/"),r=t.n(p),l=t("nOHt"),m=t("ap0H"),b=t("1Q1k"),i=s.a.createElement;function j(a){var e=Object(l.useRouter)();return i(s.a.Fragment,null,i(m.a,{suffix:"/"===e.pathname?void 0:"Tailwind CSS"},a.layoutProps.meta.metaTitle||a.layoutProps.meta.title),i(r.a,null,i("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),i("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),i(o.b,Object(n.a)({nav:b.a},a)))}}},[["NTZh",0,2,1,3,4,5]]]);