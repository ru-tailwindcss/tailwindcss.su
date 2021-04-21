(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[119],{AcGh:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),p=t("7ljp"),l=(t("YFqc"),t("tc9R")),r=t("vRWG"),i=t("I6Nb"),m=t("UyA5"),b=(t("U91C"),o.a.createElement,{Layout:r.DocumentationLayout,meta:{title:"Just-in-Time Mode",shortTitle:"Just-in-Time Mode",description:"A faster, more powerful, on-demand engine for Tailwind CSS v2.1+.",featureVersion:"v2.1+"},tableOfContents:[{title:"Overview",slug:"overview",children:[]},{title:"Enabling JIT mode",slug:"enabling-jit-mode",children:[]},{title:"Watch mode and one-off builds",slug:"watch-mode-and-one-off-builds",children:[]},{title:"New features",slug:"new-features",children:[{title:"All variants are enabled",slug:"all-variants-are-enabled"},{title:"Stackable variants",slug:"stackable-variants"},{title:"Arbitrary value support",slug:"arbitrary-value-support"},{title:"Built-in important modifier",slug:"built-in-important-modifier"}]},{title:"Known limitations",slug:"known-limitations",children:[]}]}),u=i.ContentsLayout;function j(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(p.a)(u,Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"overview",toc:!0,hidden:!0,mdxType:"Heading"},"Overview")),Object(p.a)(m.d,{mdxType:"TipInfo"},Object(p.a)("strong",{className:"font-semibold text-blue-900"},"This feature is currently in preview.")," Preview features are not covered by semantic versioning and some details may change as we continue to refine them."),Object(p.a)("div",{className:"prose"},Object(p.a)("p",null,"Tailwind CSS v2.1 introduces a new just-in-time compiler for Tailwind CSS that generates your styles on-demand as you author your templates instead of generating everything in advance at initial build time."),Object(p.a)("div",{className:"relative pb-[calc(9/16*100%)] my-12"},Object(p.a)("iframe",{className:"absolute inset-0 h-full w-full",src:"https://www.youtube.com/embed/3O_3X7InOw8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),Object(p.a)("p",null,"This comes with a lot of advantages:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"Lightning fast build times"),". Tailwind can take 3\u20138s to initially compile using our CLI, and upwards of 30\u201345s in webpack projects because webpack struggles with large CSS files. This library can compile even the biggest projects in about 800ms ",Object(p.a)("em",{parentName:"li"},"(with incremental rebuilds as fast as 3ms)"),", no matter what build tool you're using."),Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"Every variant is enabled out of the box"),". Variants like ",Object(p.a)("inlineCode",{parentName:"li"},"focus-visible"),", ",Object(p.a)("inlineCode",{parentName:"li"},"active"),", ",Object(p.a)("inlineCode",{parentName:"li"},"disabled"),", and others are not normally enabled by default due to file-size considerations. Since this library generates styles on demand, you can use any variant you want, whenever you want. You can even stack them like ",Object(p.a)("inlineCode",{parentName:"li"},"sm:hover:active:disabled:opacity-75"),". Never configure your variants again."),Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"Generate arbitrary styles without writing custom CSS.")," Ever needed some ultra-specific value that wasn't part of your design system, like ",Object(p.a)("inlineCode",{parentName:"li"},"top: -113px")," for a quirky background image? Since styles are generated on demand, you can just generate a utility for this as needed using square bracket notation like ",Object(p.a)("inlineCode",{parentName:"li"},"top-[-113px]"),". Works with variants too, like ",Object(p.a)("inlineCode",{parentName:"li"},"md:top-[-113px]"),"."),Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"Your CSS is identical in development and production"),". Since styles are generated as they are needed, you don't need to purge unused styles for production, which means you see the exact same CSS in all environments. Never worry about accidentally purging an important style in production again."),Object(p.a)("li",{parentName:"ul"},Object(p.a)("strong",{parentName:"li"},"Better browser performance in development"),". Since development builds are as small as production builds, the browser doesn't have to parse and manage multiple megabytes of pre-generated CSS. In projects with heavily extended configurations this makes dev tools a lot more responsive.")),Object(p.a)("p",null,"To see it in action, ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=3O_3X7InOw8"}),"watch our announcement video"),"."),Object(p.a)(l.a,{level:2,id:"enabling-jit-mode",toc:!0},"Enabling JIT mode"),Object(p.a)("p",null,"To enable just-in-time mode, set the ",Object(p.a)("inlineCode",{parentName:"p"},"mode")," option to ",Object(p.a)("inlineCode",{parentName:"p"},"'jit'")," in your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"   mode",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'jit'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   purge",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// ..."),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// ..."),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// ..."),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(p.a)("p",null,"Since JIT mode generates your CSS on-demand by scanning your template files, it's crucial that you configure the ",Object(p.a)("inlineCode",{parentName:"p"},"purge")," option in your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file with all of your template paths, otherwise your CSS will be empty:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   mode",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'jit'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// These paths are just examples, customize them to match your project structure"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"   purge",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./public/**/*.html'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./src/**/*.{js,jsx,ts,tsx,vue}'"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// ..."),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// ..."),"\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(p.a)("p",null,"Now when you start your development server or build runner, Tailwind will generate your styles on-demand instead of generating everything in advance."),Object(p.a)(l.a,{level:2,id:"watch-mode-and-one-off-builds",toc:!0},"Watch mode and one-off builds"),Object(p.a)("p",null,"Behind the scenes, the JIT engine uses its own file-watching system to watch your templates for changes as efficiently as possible."),Object(p.a)("p",null,"By default, Tailwind will start a long-running watch process if ",Object(p.a)("inlineCode",{parentName:"p"},"NODE_ENV=development"),", and it will run in one-off mode if ",Object(p.a)("inlineCode",{parentName:"p"},"NODE_ENV=production"),"."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// package.json"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// ..."),"\n  scripts",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Will start a long-running watch process"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"dev"'),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"NODE_ENV=development postcss tailwind.css -o ./dist/tailwind.css -w"'),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Will perform a one-off build"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"build"'),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"NODE_ENV=production postcss tailwind.css -o ./dist/tailwind.css"'),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// ..."),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)("p",null,"If it appears like your one-off build process is hanging, it's almost certainly because ",Object(p.a)("inlineCode",{parentName:"p"},"NODE_ENV=development")," in your build script. To fix this, you can either set ",Object(p.a)("inlineCode",{parentName:"p"},"NODE_ENV=production"),", or explicitly tell Tailwind not to start a watcher by setting ",Object(p.a)("inlineCode",{parentName:"p"},"TAILWIND_MODE=build")," as part of your script."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// package.json"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// ..."),"\n  scripts",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Will start a long-running watch process"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"dev"'),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"TAILWIND_MODE=watch NODE_ENV=development postcss tailwind.css -o ./dist/tailwind.css -w"'),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Will perform a one-off development build"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"build:dev"'),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"TAILWIND_MODE=build NODE_ENV=development postcss tailwind.css -o ./dist/tailwind.css"'),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// Will perform a one-off production build"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"build:prod"'),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"TAILWIND_MODE=build NODE_ENV=production postcss tailwind.css -o ./dist/tailwind.css"'),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// ..."),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(p.a)(l.a,{level:2,id:"new-features",toc:!0},"New features"),Object(p.a)(l.a,{level:3,id:"all-variants-are-enabled",toc:!0},"All variants are enabled"),Object(p.a)("p",null,"Since styles are generated on-demand, there's no need to configure which variants are available for each core plugin."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"disabled:opacity-75",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"You can use variants like ",Object(p.a)("inlineCode",{parentName:"p"},"focus-visible"),", ",Object(p.a)("inlineCode",{parentName:"p"},"active"),", ",Object(p.a)("inlineCode",{parentName:"p"},"disabled"),", ",Object(p.a)("inlineCode",{parentName:"p"},"even"),", and more in combination with any utility, without making any changes to your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(p.a)(l.a,{level:3,id:"stackable-variants",toc:!0},"Stackable variants"),Object(p.a)("p",null,"All variants can be combined together to easily target very specific situations without writing custom CSS."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"md:dark:disabled:focus:hover:bg-gray-400",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)(l.a,{level:3,id:"arbitrary-value-support",toc:!0},"Arbitrary value support"),Object(p.a)("p",null,'Many utilities support arbitrary values using a new square bracket notation to indicate that you\'re "breaking out" of your design system.'),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- Sizes and positioning --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"absolute w-[762px] h-[918px] top-[-325px] right-[62px] md:top-[-400px] md:right-[80px]",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"src"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"/crazy-background-image.png",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- Colors --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-[#1da1f1]",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Share on Twitter",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- Complex grids --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"grid-cols-[1fr,700px,2fr]",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"This is very useful for building pixel-perfect designs where there are a few elements that need hyper-specific styles, like a carefully positioned background image on a marketing site."),Object(p.a)("p",null,"We'll likely add some form of \"strict mode\" in the future for power-hungry team leads who don't trust their colleagues to use this feature responsibly."),Object(p.a)(l.a,{level:3,id:"built-in-important-modifier",toc:!0},"Built-in important modifier"),Object(p.a)("p",null,"You can make any utility important by adding a ",Object(p.a)("inlineCode",{parentName:"p"},"!")," character to the beginning:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"font-bold !font-medium",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  This will be medium even though bold comes later in the CSS.\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"The ",Object(p.a)("inlineCode",{parentName:"p"},"!")," always goes at the beginning of the utility name, after any variants, but before any prefix:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"sm:hover:!tw-font-bold",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"This can be useful in rare situations where you need to increase specificity because you're at war with some styles you don't control."),Object(p.a)(l.a,{level:2,id:"known-limitations",toc:!0},"Known limitations"),Object(p.a)("p",null,"This new engine is very close to feature parity with ",Object(p.a)("inlineCode",{parentName:"p"},"tailwindcss")," currently and for most projects I bet you'll find it works exactly as you'd expect."),Object(p.a)("p",null,"There are a few items still on our todo list though that we are actively working on:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},"Advanced PurgeCSS options like ",Object(p.a)("inlineCode",{parentName:"li"},"safelist")," aren't supported yet since we aren't actually using PurgeCSS. We'll add a way to safelist classes for sure though. For now, a ",Object(p.a)("inlineCode",{parentName:"li"},"safelist.txt")," file somewhere in your project with all the classes you want to safelist will work fine."),Object(p.a)("li",{parentName:"ul"},"You can only ",Object(p.a)("inlineCode",{parentName:"li"},"@apply")," classes that are part of core, generated by plugins, or defined within a ",Object(p.a)("inlineCode",{parentName:"li"},"@layer")," rule. You can't ",Object(p.a)("inlineCode",{parentName:"li"},"@apply")," arbitrary CSS classes that aren't defined within a ",Object(p.a)("inlineCode",{parentName:"li"},"@layer")," rule.")),Object(p.a)("p",null,"We are also ironing out some compatibility issues with certain build tools like Parcel and Snowpack, which you can follow in our ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/issues"}),"issue tracker"),"."),Object(p.a)("p",null,"If you run into any other issues or find any bugs, please ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/issues/new/choose"}),"open an issue")," so we can fix it.")))}j.isMDXComponent=!0,j.layoutProps=b},U91C:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),o=s.a.createElement,p={screens:"\u0410\u0434\u0430\u043f\u0442\u0438\u0432\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0435 \u0442\u043e\u0447\u043a\u0438 \u0412\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430",colors:"\u0426\u0432\u0435\u0442\u043e\u0432\u0430\u044f \u043f\u0430\u043b\u0438\u0442\u0440\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430",spacing:"\u0428\u043a\u0430\u043b\u0430 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430",container:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043f\u043b\u0430\u0433\u0438\u043d\u0430 `container`",inset:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432 `top`, `right`, `bottom` \u0438 `left`",placeholderColor:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u043b\u0430\u0433\u0438\u043d\u0430 `placeholderColor`",placeholderOpacity:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u043b\u0430\u0433\u0438\u043d\u0430 `placeholderOpacity`",rotate:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u043b\u0430\u0433\u0438\u043d\u0430 `rotate`",scale:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u043b\u0430\u0433\u0438\u043d\u0430 `scale`",skew:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u043b\u0430\u0433\u0438\u043d\u0430 `skew`",space:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u043b\u0430\u0433\u0438\u043d\u0430 `space`",textOpacity:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u043b\u0430\u0433\u0438\u043d\u0430 `textOpacity`",translate:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043f\u043b\u0430\u0433\u0438\u043d\u0430 `translate`"};function l(){return o("div",{className:"prose"},o("table",null,o("thead",null,o("tr",null,o("th",null,"Key"),o("th",null,"Description"))),o("tbody",null,Object.keys(c.defaultConfig.theme).map(e=>{var a;return o("tr",{key:e},o("td",null,o("code",null,e)),o("td",null,(null===(a=p[e])||void 0===a?void 0:a.split(/`([^`]+)`/).map((e,a)=>a%2===0?e:o("code",{key:a},e)))||o(s.a.Fragment,null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432"," ",o("code",null,e.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a,"-").concat(t.toLowerCase()))))))}))))}},"Ua/j":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/just-in-time-mode",function(){return t("AcGh")}])},UyA5:function(e,a,t){"use strict";t.d(a,"c",(function(){return c})),t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return p})),t.d(a,"d",(function(){return l}));var n=t("q1tI"),s=t.n(n).a.createElement;function c(e){var{children:a}=e;return s("p",{className:"flex items-start mt-8 mb-4 space-x-2"},s("svg",{className:"w-6 h-6 flex-none mt-0.5",fill:"none"},s("circle",{cx:"12",cy:"12",r:"12",fill:"#A7F3D0"}),s("path",{d:"M18 8l-8 8-4-4",stroke:"#047857",strokeWidth:"2"})),s("strong",{className:"flex-1 text-base leading-7 font-semibold text-gray-900"},a))}function o(e){var{children:a}=e;return s("p",{className:"flex items-start mt-8 mb-4 space-x-2"},s("svg",{className:"w-6 h-6 flex-none mt-0.5",fill:"none"},s("circle",{cx:"12",cy:"12",r:"12",fill:"#FECDD3"}),s("path",{d:"M8 8l8 8M16 8l-8 8",stroke:"#B91C1C",strokeWidth:"2"})),s("strong",{className:"flex-1 text-base leading-7 font-semibold text-gray-900"},a))}function p(e){var{children:a}=e;return s("div",{className:"text-sm bg-light-blue-100 text-light-blue-800 font-medium px-4 py-3 mb-4 rounded-xl"},s("div",{className:"flex items-start space-x-3"},s("svg",{width:"20",height:"20",className:"text-light-blue-500",fill:"currentColor"},s("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.998 2a1 1 0 00-.707 1.707l.707.707v3.758a1 1 0 01-.293.707l-4 4C.815 14.769 2.154 18 4.826 18H15.17c2.672 0 4.01-3.231 2.12-5.121l-4-4a1 1 0 01-.292-.707V4.414l.707-.707A1 1 0 0012.998 2h-6zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.992 1.992 0 00-.114-.035l1.063-1.063a3 3 0 00.879-2.121z"})),s("p",{class:"flex-1"},a)))}function l(e){var{children:a}=e;return s("div",{className:"text-sm leading-6 bg-blue-50 text-blue-800 px-6 py-4 mb-8 rounded-lg"},s("div",{className:"flex items-start space-x-3"},s("svg",{className:"mt-1",height:"40",width:"40",fill:"none",viewBox:"0 0 40 40"},s("path",{fill:"#93C5FD",d:"M5 5a3 3 0 013-3h13.757a3 3 0 012.122.879L30.12 9.12a3 3 0 01.88 2.123V31a3 3 0 01-3 3H8a3 3 0 01-3-3V5z"}),s("path",{fill:"#DBEAFE",d:"M7 5a1 1 0 011-1h13a1 1 0 011 1v5a1 1 0 001 1h5a1 1 0 011 1v19a1 1 0 01-1 1H8a1 1 0 01-1-1V5z"}),s("path",{stroke:"#93C5FD",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M17 18h7m-9 3h10m-8 3h7"}),s("path",{fill:"#60A5FA",fillRule:"evenodd",d:"M24.634 26.22a8.001 8.001 0 00-11.977-10.562A8 8 0 0023.22 27.635l2.872 2.872a1 1 0 000 1.414l5.657 5.657a1 1 0 001.414 0l1.414-1.414a1 1 0 000-1.415l-5.657-5.656a1 1 0 00-1.414 0l-2.872-2.873zm-2.078-.663a6 6 0 10-8.485-8.485 6 6 0 008.485 8.485z",clipRule:"evenodd"})),s("p",{class:"flex-1 min-w-0"},a)))}},ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=t("8Kt/"),o=t.n(c),p=s.a.createElement;function l(e){var{suffix:a,children:t}=e,n=t+(a?" - ".concat(a):"");return p(o.a,null,p("title",{key:"title"},n),p("meta",{key:"twitter:title",name:"twitter:title",content:n}),p("meta",{key:"og:title",property:"og:title",content:n}))}},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return u}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("ekQu"),p=t("8Kt/"),l=t.n(p),r=t("nOHt"),i=t("ap0H"),m=t("1Q1k"),b=c.a.createElement;function u(e){var a=Object(r.useRouter)();return b(c.a.Fragment,null,b(i.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),b(l.a,null,b("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),b("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.su".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),b(o.b,Object(n.a)({nav:m.a},e)))}}},[["Ua/j",0,2,1,3,4,5]]]);