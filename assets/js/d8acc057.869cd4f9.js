"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[864],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,d=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(d,a(a({ref:t},m),{},{components:n})):o.createElement(d,a({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4188:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={},l="Commits",c={unversionedId:"engineering/commits",id:"engineering/commits",title:"Commits",description:"This article assumes you already understand basic Git workflow. If not, we suggest reading through the Git Handbook.",source:"@site/docs/engineering/commits.md",sourceDirName:"engineering",slug:"/engineering/commits",permalink:"/handbook/engineering/commits",draft:!1,editUrl:"https://github.com/odpf/handbook/edit/master/docs/docs/engineering/commits.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"CLI",permalink:"/handbook/design/cli"},next:{title:"Pull request",permalink:"/handbook/engineering/pull-request"}},m={},u=[{value:"Format",id:"format",level:2},{value:"Atomic commits",id:"atomic-commits",level:2},{value:"Active voice",id:"active-voice",level:2},{value:"Summary",id:"summary",level:2},{value:"References",id:"references",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"commits"},"Commits"),(0,r.kt)("p",null,"This article assumes you already understand basic Git workflow. If not, we suggest reading through the ",(0,r.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/git-handbook/"},"Git Handbook"),"."),(0,r.kt)("p",null,"The commit command is used to save changes to a local repository after staging in Git. However, before you can save changes in Git, you have to tell Git which changes you want to save as you might have made tons of edits. A great way to do that is by adding a commit message to identify your changes."),(0,r.kt)("p",null,"A well-crafted Git commit message is the best way to communicate context about a change to other developers working on that project, and indeed, to your future self."),(0,r.kt)("p",null,"The most important part of a commit message is that it should be clear and meaningful. In the long run, writing good commit messages shows how much of a collaborator you are. The benefits of writing good commit messages are not only limited to your team, but indeed expand to yourself and future contributors. The perfect commit message should have certain qualities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It should be understandable even by seeing only the header of the message."),(0,r.kt)("li",{parentName:"ul"},"It should be just enough, and not too detailed."),(0,r.kt)("li",{parentName:"ul"},"It should be unambiguous.")),(0,r.kt)("h2",{id:"format"},"Format"),(0,r.kt)("p",null,"To create a useful revision history, we use ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits")," format for all commits. Ideally, bot commits should also follow conventional format. The ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits")," specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n\nfeat: allow overriding of the application config\n^--^  ^------------^\n|     |\n|     +-> Summary in present tense.\n|\n+-------\x3e Type: chore, docs, feat, fix, refactor, style, or test.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"feat: allow provided config object to extend other configs\nrefactor!: drop support for Node 6\ndocs: correct spelling of CHANGELOG\nfeat(lang): add polish language\n")),(0,r.kt)("h2",{id:"atomic-commits"},"Atomic commits"),(0,r.kt)("p",null,"Although using a proper format is a good practice, it\u2019s not enough. Discipline is crucial. Our commits should be reasonably small and atomic."),(0,r.kt)("p",null,"If the commit consists of multiple changes that make the message too long or inefficient, it\u2019s good practice to separate it into several commits. In other words: we don\u2019t want to commit a change that changes too much."),(0,r.kt)("p",null,"If we commit two changes together, for example, a bug fix and a minor refactoring, it might not cause a very long commit message, but it can cause some other problems."),(0,r.kt)("p",null,"Let\u2019s say the bug fix created some other bugs. In that case, we need to roll back the production code to the previous. This will result in the loss of the refactoring as well. It\u2019s not efficient, and it\u2019s not atomic."),(0,r.kt)("p",null,"Also, if someone searches the commit history for the changes made for the refactoring, they have to figure out which files were touched for the refactoring and which for the bugfix. This will cost more time than necessary."),(0,r.kt)("p",null,"We recommend using atomic commits in development branches, these commits can then be sqaushed to a single improvement level commit when merging the pull request."),(0,r.kt)("h2",{id:"active-voice"},"Active voice"),(0,r.kt)("p",null,"Use the imperative, present tense. It is easier to read and scan quickly:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Right:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"feat: add feature to alert admin for new user registration")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wrong:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"feat: Added feature ...")," (past tense)"),(0,r.kt)("p",null,"We use an imperative verb because it\u2019s going to complete the sentence \u201cIf applied, this commit will \u2026\u201d (e.g. \u201cIf applied, this commit will add a feature to alert admin for new user registration\u201d)."),(0,r.kt)("p",null,"Using present tense and not past tense in commit messages has made a big thread of discussions between developers over the question \u201cWhy should it be present tense?\u201d."),(0,r.kt)("p",null,"The reason behind using present tense is that the commit message is answering the question \u201cWhat will happen after the commit is applied?\u201d. If we think of a commit as an independent patch, it doesn\u2019t matter if it applied in the past. What matters is that this patch is always supposed to make that particular change when it\u2019s applied."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Commit message should be in conventional format. Strcitly present tense. Not capitalized. No period in the end.\u201d, and imperative like the type."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.blog/2022-06-30-write-better-commits-build-better-projects/"},"https://github.blog/2022-06-30-write-better-commits-build-better-projects/"))))}h.isMDXComponent=!0}}]);