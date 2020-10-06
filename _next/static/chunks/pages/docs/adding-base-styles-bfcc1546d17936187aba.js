_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[50],{Eo0J:function(a,e,t){"use strict";t.r(e),t.d(e,"Layout",(function(){return O})),t.d(e,"meta",(function(){return u})),t.d(e,"tableOfContents",(function(){return N})),t.d(e,"default",(function(){return k}));var n=t("wx14"),c=t("Ff2n"),s=t("q1tI"),o=t.n(s),p=t("7ljp"),l=t("YFqc"),m=t.n(l),b=t("tc9R"),r=t("vRWG"),j=t("I6Nb"),O=(o.a.createElement,r.DocumentationLayout),u={title:"Adding Base Styles",description:"Best practices for adding your own global base styles on top of Tailwind."},N=[{title:"Using classes in your HTML",slug:"using-classes-in-your-html",children:[]},{title:"Using CSS",slug:"using-css",children:[{title:"@font-face rules",slug:"font-face-rules"}]},{title:"Using a plugin",slug:"using-a-plugin",children:[{title:"When to use a plugin",slug:"when-to-use-a-plugin"}]}],i={Layout:O,meta:u,tableOfContents:N},d=j.ContentsLayout;function k(a){var e=a.components,t=Object(c.a)(a,["components"]);return Object(p.a)(d,Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(p.a)("p",null,"Base (or global) styles are the styles at the beginning of a stylesheet that set useful defaults for basic HTML elements like ",Object(p.a)("inlineCode",{parentName:"p"},"<a>")," tags, headings, etc. or apply opinionated resets like the popular ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"https://www.paulirish.com/2012/box-sizing-border-box-ftw/"}),"box-sizing reset"),"."),Object(p.a)("p",null,"Tailwind includes a useful set of base styles out of the box that we call ",Object(p.a)(m.a,{href:"/docs/preflight",passHref:!0},Object(p.a)("a",null,"Preflight")),", which is really just ",Object(p.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/necolas/normalize.css/"}),"normalize.css")," plus a thin layer of additional more opinionated styles."),Object(p.a)("p",null,"Preflight is a great starting point for most projects, but if you'd ever like to add your own additional base styles, here are some recommendations for doing it idiomatically."),Object(p.a)("hr",null),Object(p.a)(b.a,{level:2,id:"using-classes-in-your-html",toc:!0},"Using classes in your HTML"),Object(p.a)("p",null,"If you just want to apply some global styling to the ",Object(p.a)("inlineCode",{parentName:"p"},"html")," or ",Object(p.a)("inlineCode",{parentName:"p"},"body")," elements, consider just adding existing classes to those elements in your HTML instead of writing new CSS:"),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token doctype"}),"<!doctype html>"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"html")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"lang"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"en",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"text-gray-900 antialiased leading-tight",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"body")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"min-h-screen bg-gray-100",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"body"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"html"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(p.a)("hr",null),Object(p.a)(b.a,{level:2,id:"using-css",toc:!0},"Using CSS"),Object(p.a)("p",null,"If you want to apply some base styles to specific elements, the easiest way is to simply add them in your CSS."),Object(p.a)("pre",{className:"language-css"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@layer")," base")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"h1")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@apply")," text-2",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token unit"}),"xl"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token selector"}),"h2")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@apply")," text-xl",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(p.a)("p",null,"By using the ",Object(p.a)("inlineCode",{parentName:"p"},"@layer")," directive, Tailwind will automatically move those styles to the same place as ",Object(p.a)("inlineCode",{parentName:"p"},"@tailwind base")," to avoid unintended specificity issues."),Object(p.a)("p",null,"Using the ",Object(p.a)("inlineCode",{parentName:"p"},"@layer")," directive will also instruct Tailwind to consider those styles for purging when purging the ",Object(p.a)("inlineCode",{parentName:"p"},"base")," layer. Read our ",Object(p.a)(m.a,{href:"/docs/controlling-file-size",passHref:!0},Object(p.a)("a",null,"Controlling File Size"))," documentation for more details."),Object(p.a)("p",null,"It's a good idea to use ",Object(p.a)(m.a,{href:"/docs/functions-and-directives#apply",passHref:!0},Object(p.a)("a",null,"@apply"))," or ",Object(p.a)(m.a,{href:"/docs/functions-and-directives#theme",passHref:!0},Object(p.a)("a",null,"theme()"))," to define these styles to avoid introducing new magic values or accidentally deviating from your design system."),Object(p.a)(b.a,{level:3,id:"font-face-rules",toc:!0},"@font-face rules"),Object(p.a)("p",null,"You can use the same approach to add your ",Object(p.a)("inlineCode",{parentName:"p"},"@font-face")," rules for any custom fonts you are using:"),Object(p.a)("pre",{className:"language-css"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@layer")," base")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@font-face"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"font-family"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," Proxima Nova",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"font-weight"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"400"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"src"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token url"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token function"}),"url"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),"/fonts/proxima-nova/400-regular.woff",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"format"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"woff"'),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@font-face"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"font-family"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," Proxima Nova",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"font-weight"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token number"}),"500"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property"}),"src"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token url"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token function"}),"url"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"("),"/fonts/proxima-nova/500-medium.woff",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),")"))," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"format"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"woff"'),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(p.a)("hr",null),Object(p.a)(b.a,{level:2,id:"using-a-plugin",toc:!0},"Using a plugin"),Object(p.a)("p",null,"You can also add base styles by ",Object(p.a)(m.a,{href:"/docs/plugins#adding-base-styles",passHref:!0},Object(p.a)("a",null,"writing a plugin"))," and using the ",Object(p.a)("inlineCode",{parentName:"p"},"addBase")," function:"),Object(p.a)("pre",{className:"language-js"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," plugin ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss/plugin'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  plugins",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"plugin"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"function"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token parameter"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{")," addBase",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," config ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}")),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"addBase"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'h1'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{")," fontSize",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"config"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'theme.fontSize.2xl'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'h2'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{")," fontSize",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"config"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'theme.fontSize.xl'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n        ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'h3'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{")," fontSize",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"config"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'theme.fontSize.lg'"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n    ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(p.a)("p",null,"Any styles you added using ",Object(p.a)("inlineCode",{parentName:"p"},"addBase")," will automatically be included in your ",Object(p.a)("inlineCode",{parentName:"p"},"@tailwind base")," styles."),Object(p.a)(b.a,{level:3,id:"when-to-use-a-plugin",toc:!0},"When to use a plugin"),Object(p.a)("p",null,"In general, it's simpler to add base styles to your project in CSS than it is to write a plugin."),Object(p.a)("p",null,"You should prefer a plugin if:"),Object(p.a)("ul",null,Object(p.a)("li",{parentName:"ul"},"You want to publish your base styles publicly and make them easy for other users to install."),Object(p.a)("li",{parentName:"ul"},"You want to re-use your base styles across multiple projects in your company and prefer sharing JS dependencies instead of CSS dependencies.")))}k.isMDXComponent=!0,k.layoutProps=i},iGeL:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/adding-base-styles",function(){return t("Eo0J")}])}},[["iGeL",0,2,1,3,4]]]);