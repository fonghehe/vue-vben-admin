import{aw as m,a as _,cV as S,ez as f,eA as T,eB as x,eC as h,eD as R,eE as X,eF as y,eG as b,eH as w,eI as B,eJ as C,eK as E,eL as Y,v as n,ay as o,o as r,j as i,z as t,i as l,n as p,B as g,aI as k,x as F,y as $}from"./index.58e3d8d0.js";import{P as A}from"./index.f64131dc.js";import"./index.5979f95e.js";import"./index.78a2e5b8.js";import"./useSize.d5945e7b.js";import"./eagerComputed.5273b770.js";import"./useWindowSizeFn.9dc32eeb.js";import"./useContentViewHeight.0badffd0.js";import"./ArrowLeftOutlined.335726f2.js";import"./index.79c036d8.js";import"./transButton.044dc68a.js";const P=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],V=P.map(e=>({label:e,value:e,key:e})),D=_({components:{Select:S,PageWrapper:A,FadeTransition:f,ScaleTransition:T,SlideYTransition:x,ScrollYTransition:h,SlideYReverseTransition:R,ScrollYReverseTransition:X,SlideXTransition:y,ScrollXTransition:b,SlideXReverseTransition:w,ScrollXReverseTransition:B,ScaleRotateTransition:C,ExpandXTransition:E,ExpandTransition:Y},setup(){const e=n("Fade"),a=n(!0);function s(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:V,value:e,start:s,show:a}}}),I={class:"flex"},N={class:"box"};function W(e,a,s,z,L,j){const c=o("Select"),d=o("a-button"),u=o("PageWrapper");return r(),i(u,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:t(()=>[l("div",I,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(d,{type:"primary",class:"ml-4",onClick:e.start},{default:t(()=>[g(" start ")]),_:1},8,["onClick"])]),(r(),i(k(`${e.value}Transition`),null,{default:t(()=>[F(l("div",N,null,512),[[$,e.show]])]),_:1}))]),_:1})}var ae=m(D,[["render",W],["__scopeId","data-v-45b1f032"]]);export{ae as default};
