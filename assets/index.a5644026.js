import{aw as C,a as E,I as B,bd as _,v as D,f,k as n,ay as r,o as v,j as A,z as l,B as o,t as k,n as p,i as e}from"./index.58e3d8d0.js";import{P as h}from"./index.f64131dc.js";import"./index.5979f95e.js";import"./index.78a2e5b8.js";import"./useSize.d5945e7b.js";import"./eagerComputed.5273b770.js";import"./useWindowSizeFn.9dc32eeb.js";import"./useContentViewHeight.0badffd0.js";import"./ArrowLeftOutlined.335726f2.js";import"./index.79c036d8.js";import"./transButton.044dc68a.js";const b=E({name:"TestMenu",components:{PageWrapper:h,Input:B},setup(){const{currentRoute:u,replace:t}=_(),a=D("");return{value:a,handleClickGo:()=>{const{name:s}=n(u);t({name:s,params:{id:n(a)}})},params:f(()=>n(u).params)}}}),g=e("br",null,null,-1),y=e("br",null,null,-1),I=e("ul",null,[e("li",null,"\u53EF\u5237\u65B0\u9875\u9762\u6D4B\u8BD5\u8DEF\u7531\u53C2\u6570\u60C5\u51B5\u662F\u5426\u6B63\u5E38\u3002"),e("li",null,"\u53EF\u4E8E\u5DE6\u4FA7\u83DC\u5355\u4E2D\u5C55\u5F00\u5B50\u83DC\u5355\uFF0C\u70B9\u51FB\u6D4B\u8BD5\u53C2\u6570\u662F\u5426\u643A\u5E26\u6B63\u5E38\u3002")],-1);function P(u,t,a,i,s,$){const c=r("Input"),F=r("a-button"),m=r("PageWrapper");return v(),A(m,{title:"\u5E26\u53C2\u6570\u83DC\u5355\uFF08\u8DEF\u7531\uFF09",content:"\u652F\u6301\u591A\u7EA7\u53C2\u6570"},{default:l(()=>[o(" \u5F53\u524D\u53C2\u6570\uFF1A"+k(u.params)+" ",1),g,o(" \u8F93\u5165\u53C2\u6570\u5207\u6362\u8DEF\u7531\uFF1A "),p(c,{value:u.value,"onUpdate:value":t[0]||(t[0]=d=>u.value=d),placeholder:"\u5EFA\u8BAE\u4E3Aurl\u6807\u51C6\u5B57\u7B26\uFF0C\u8F93\u5165\u540E\u70B9\u51FB\u5207\u6362"},null,8,["value"]),p(F,{type:"primary",onClick:u.handleClickGo},{default:l(()=>[o("\u5207\u6362\u8DEF\u7531")]),_:1},8,["onClick"]),y,o(" \u5207\u6362\u8DEF\u7531\u540E "),I]),_:1})}var S=C(b,[["render",P]]);export{S as default};
