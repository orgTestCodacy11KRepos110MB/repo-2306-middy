"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[3631],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,m=e.defaultValue,f=e.values,h=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,a.useState)(g),C=O[0],E=O[1],j=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=N[h];null!=P&&P!==C&&v.some((function(e){return e.value===P}))&&E(P)}var x=function(e){var t=e.currentTarget,n=j.indexOf(t),r=v[n].value;r!==C&&(S(t),E(r),null!=h&&T(h,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var o,l=j.indexOf(e.currentTarget)-1;n=null!=(o=j[l])?o:j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},7427:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5488),i=n(5162),s=["components"],u={title:"http-multipart-body-parser"},p=void 0,d={unversionedId:"middlewares/http-multipart-body-parser",id:"middlewares/http-multipart-body-parser",title:"http-multipart-body-parser",description:"Automatically parses HTTP requests with content type multipart/form-data and converts the body into an",source:"@site/docs/middlewares/http-multipart-body-parser.md",sourceDirName:"middlewares",slug:"/middlewares/http-multipart-body-parser",permalink:"/docs/middlewares/http-multipart-body-parser",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-multipart-body-parser.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"http-multipart-body-parser"},sidebar:"tutorialSidebar",previous:{title:"http-json-body-parser",permalink:"/docs/middlewares/http-json-body-parser"},next:{title:"http-partial-response",permalink:"/docs/middlewares/http-partial-response"}},c={},m=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Automatically parses HTTP requests with content type ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," and converts the body into an\nobject. Also handles gracefully broken JSON as UnprocessableEntity (422 errors)\nif used in combination with ",(0,o.kt)("inlineCode",{parentName:"p"},"httpErrorHandler"),"."),(0,o.kt)("p",null,"It can also be used in combination with validator so that the content can be validated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": by default this is going to parse only events that contain the header ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"content-type"),") set to ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data"),". If you want to support different casing for the header name (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-type"),") then you should use the ",(0,o.kt)("a",{parentName:"p",href:"#httpheadernormalizer"},(0,o.kt)("inlineCode",{parentName:"a"},"httpHeaderNormalizer"))," middleware before this middleware."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"To install this middleware you can use NPM:"),(0,o.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-multipart-body-parser\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-multipart-body-parser\n")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"busboy")," (",(0,o.kt)("inlineCode",{parentName:"li"},"object"),") (optional): defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"{}")," and it can be used to pass extraparameters to the internal ",(0,o.kt)("inlineCode",{parentName:"li"},"busboy")," instance at creation time. Checkout ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/busboy#busboy-methods"},"the official documentation")," for more information on the supported options.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": this middleware will buffer all the data as it is processed internally by ",(0,o.kt)("inlineCode",{parentName:"p"},"busboy"),", so, if you are using this approach to parse significantly big volumes of data, keep in mind that all the data will be allocated in memory. This is somewhat inevitable with Lambdas (as the data is already encoded into the JSON in memory as Base64), but it's good to keep this in mind and evaluate the impact on you application.",(0,o.kt)("br",{parentName:"p"}),"\n","If you really have to deal with big files, then you might also want to consider to allowing your users to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-UsingHTTPPOST.html"},"directly upload files to S3")),(0,o.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpHeaderNormalizer from '@middy/http-header-normalizer'\nimport httpMultipartBodyParser from '@middy/http-multipart-body-parser'\nconst handler = middy((event, context) => {\n  return {}\n})\nhandler\n  .use(httpHeaderNormalizer())\n  .use(httpMultipartBodyParser())\n\n// invokes the handler\nconst event = {\n  headers: {\n    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryppsQEwf2BVJeCe0M'\n  },\n  body: 'LS0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cHBzUUV3ZjJCVkplQ2UwTQ0KQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPSJmb28iDQoNCmJhcg0KLS0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cHBzUUV3ZjJCVkplQ2UwTS0t',\n  isBase64Encoded: true\n}\nhandler(event, {}, (_, body) => {\n  t.is(body,{ foo: 'bar' })\n})\n")))}h.isMDXComponent=!0}}]);