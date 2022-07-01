"use strict";(self.webpackChunkfirehose=self.webpackChunkfirehose||[]).push([[813],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5313:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},u=void 0,c={unversionedId:"engineering/configurations",id:"engineering/configurations",title:"configurations",description:"Configurations",source:"@site/docs/engineering/configurations.md",sourceDirName:"engineering",slug:"/engineering/configurations",permalink:"/handbook/engineering/configurations",draft:!1,editUrl:"https://github.com/odpf/handbook/edit/master/docs/docs/engineering/configurations.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Commits",permalink:"/handbook/engineering/commits"},next:{title:"Overview",permalink:"/handbook/go/overview"}},s={},p=[{value:"Configurations",id:"configurations",level:3},{value:"Metrics",id:"metrics",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"Each of the configs should be namespaced according to the role/usage/context that they have followed by the type/implementation of it. For example - for statsd url - statsd is an implementation for metric collection hence the config would look like metric.statsd.url\nAny delimiters depending on the language/framework can be used. Like \u201c.\u201d or \u201c","_","\u201d or \u201c/\u201d etc. Default would be ",(0,o.kt)("inlineCode",{parentName:"p"},".")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,o.kt)("th",{parentName:"tr",align:null},"Type (optional)"),(0,o.kt)("th",{parentName:"tr",align:null},"Config Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"metric.statsd.url"),(0,o.kt)("td",{parentName:"tr",align:null},"metric"),(0,o.kt)("td",{parentName:"tr",align:null},"statsd"),(0,o.kt)("td",{parentName:"tr",align:null},"url")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"schema.proto.name"),(0,o.kt)("td",{parentName:"tr",align:null},"schema"),(0,o.kt)("td",{parentName:"tr",align:null},"proto"),(0,o.kt)("td",{parentName:"tr",align:null},"name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dlq.kafka.brokers"),(0,o.kt)("td",{parentName:"tr",align:null},"dlq"),(0,o.kt)("td",{parentName:"tr",align:null},"kafka"),(0,o.kt)("td",{parentName:"tr",align:null},"brokers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"dlq.enable"),(0,o.kt)("td",{parentName:"tr",align:null},"dlq"),(0,o.kt)("td",{parentName:"tr",align:null},"-"),(0,o.kt)("td",{parentName:"tr",align:null},"enable")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"source.kafka.consumer.config.auto.commit.enable"),(0,o.kt)("td",{parentName:"tr",align:null},"source"),(0,o.kt)("td",{parentName:"tr",align:null},"kafka"),(0,o.kt)("td",{parentName:"tr",align:null},"consumer.config.auto.commit.enable")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"schema.registry.stencil.urls"),(0,o.kt)("td",{parentName:"tr",align:null},"schema.registry"),(0,o.kt)("td",{parentName:"tr",align:null},"stencil"),(0,o.kt)("td",{parentName:"tr",align:null},"urls")))),(0,o.kt)("p",null,"These are just guidelines and might not be extensive enough to cover all use-cases. Please use this to give it a thought."),(0,o.kt)("h3",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"The metrics and labels must be compliant with the ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels"},"Prometheus data model"),".\nThe metric and label conventions presented in this document serve as both a;",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/naming/"},"style-guide")," and a collection of best practices."))}d.isMDXComponent=!0}}]);