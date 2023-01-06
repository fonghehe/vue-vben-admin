import{aw as _,a as k,cD as g,I as D,aZ as A,v as b,bW as T,ay as r,o as d,j as v,z as t,n as u,i as h,B as o,h as P,F as $,aB as y,t as w,E as W}from"./index.58e3d8d0.js";import{P as L}from"./index.f64131dc.js";import{A as B}from"./index.b979a466.js";import"./index.5979f95e.js";import"./index.78a2e5b8.js";import"./useSize.d5945e7b.js";import"./eagerComputed.5273b770.js";import"./useWindowSizeFn.9dc32eeb.js";import"./useContentViewHeight.0badffd0.js";import"./ArrowLeftOutlined.335726f2.js";import"./index.79c036d8.js";import"./transButton.044dc68a.js";const N=k({name:"TabsDemo",components:{CollapseContainer:g,PageWrapper:L,[D.name]:D,[B.name]:B},setup(){const e=A(),l=b(""),{closeAll:m,closeLeft:C,closeRight:F,closeOther:f,closeCurrent:i,refreshPage:a,setTitle:c}=T(),{createMessage:n}=W();function p(){l.value?c(l.value):n.error("\u8BF7\u8F93\u5165\u8981\u8BBE\u7F6E\u7684Tab\u6807\u9898\uFF01")}function s(E){e(`/feat/tabs/detail/${E}`)}return{closeAll:m,closeLeft:C,closeRight:F,closeOther:f,closeCurrent:i,toDetail:s,refreshPage:a,setTabTitle:p,title:l}}}),V={class:"mt-2 flex flex-grow-0"};function I(e,l,m,C,F,f){const i=r("a-alert"),a=r("a-button"),c=r("a-input"),n=r("CollapseContainer"),p=r("PageWrapper");return d(),v(p,{title:"\u6807\u7B7E\u9875\u64CD\u4F5C\u793A\u4F8B"},{default:t(()=>[u(n,{title:"\u5728\u4E0B\u9762\u8F93\u5165\u6846\u8F93\u5165\u6587\u672C,\u5207\u6362\u540E\u56DE\u6765\u5185\u5BB9\u4F1A\u4FDD\u5B58"},{default:t(()=>[u(i,{banner:"",message:"\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u9875\u9762\u6807\u9898\uFF0C\u4EC5\u4FEE\u6539Tab\u6807\u9898"}),h("div",V,[u(a,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:t(()=>[o(" \u8BBE\u7F6ETab\u6807\u9898 ")]),_:1},8,["onClick"]),u(c,{placeholder:"\u8BF7\u8F93\u5165",value:e.title,"onUpdate:value":l[0]||(l[0]=s=>e.title=s),class:"mr-4 w-12"},null,8,["value"])])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u64CD\u4F5C"},{default:t(()=>[u(a,{class:"mr-2",onClick:e.closeAll},{default:t(()=>[o(" \u5173\u95ED\u6240\u6709 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeLeft},{default:t(()=>[o(" \u5173\u95ED\u5DE6\u4FA7 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeRight},{default:t(()=>[o(" \u5173\u95ED\u53F3\u4FA7 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeOther},{default:t(()=>[o(" \u5173\u95ED\u5176\u4ED6 ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.closeCurrent},{default:t(()=>[o(" \u5173\u95ED\u5F53\u524D ")]),_:1},8,["onClick"]),u(a,{class:"mr-2",onClick:e.refreshPage},{default:t(()=>[o(" \u5237\u65B0\u5F53\u524D ")]),_:1},8,["onClick"])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u590D\u7528\u8D85\u51FA\u9650\u5236\u81EA\u52A8\u5173\u95ED(\u4F7F\u7528\u573A\u666F: \u52A8\u6001\u8DEF\u7531)"},{default:t(()=>[(d(),P($,null,y(6,s=>u(a,{key:s,class:"mr-2",onClick:E=>e.toDetail(s)},{default:t(()=>[o(" \u6253\u5F00"+w(s)+"\u8BE6\u60C5\u9875 ",1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}var K=_(N,[["render",I]]);export{K as default};
