import{aw as I,a as w,cD as E,b6 as D,s as S,f as F,ay as r,o as n,h as c,n as t,z as o,q as s,i as l,F as i,aB as d,fb as P,fc as z,B as x,t as u,j as m,aI as V}from"./index.58e3d8d0.js";import{T as L}from"./index.df748fb5.js";import{T as C}from"./index.a954669a.js";/* empty css              */import N from"./Article.75e7e516.js";import j from"./Application.6ba79c8d.js";import A from"./Project.01397b43.js";import{h as R}from"./header.d801b988.js";import{tags as U,teams as q,details as G,achieveList as H}from"./data.53a0f0fb.js";import{R as b,C as h}from"./index.e6e05c33.js";import"./useRefs.1d517a52.js";import"./PlusOutlined.8c017148.js";import"./index.8c738fc0.js";import"./Col.9ae3040f.js";import"./useFlexGapSupport.79e4d221.js";import"./eagerComputed.5273b770.js";import"./index.9532e770.js";import"./index.57b3cc30.js";const J=w({components:{CollapseContainer:E,Icon:D,Tag:L,Tabs:C,TabPane:C.TabPane,Article:N,Application:j,Project:A,[b.name]:b,[h.name]:h},setup(){const a=S(),_=F(()=>a.getUserInfo.avatar||R);return{prefixCls:"account-center",avatar:_,tags:U,teams:q,details:G,achieveList:H}}}),T=a=>(P("data-v-5384e32e"),a=a(),z(),a),K=["src"],M=T(()=>l("span",null,"Vben",-1)),O=T(()=>l("div",null,"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",-1));function Q(a,_,W,X,Y,Z){const p=r("a-col"),f=r("Icon"),v=r("a-row"),$=r("Tag"),g=r("CollapseContainer"),k=r("TabPane"),y=r("Tabs");return n(),c("div",{class:s(a.prefixCls)},[t(v,{class:s(`${a.prefixCls}-top`)},{default:o(()=>[t(p,{span:9,class:s(`${a.prefixCls}-col`)},{default:o(()=>[t(v,null,{default:o(()=>[t(p,{span:8},{default:o(()=>[l("div",{class:s(`${a.prefixCls}-top__avatar`)},[l("img",{width:"70",src:a.avatar},null,8,K),M,O],2)]),_:1}),t(p,{span:16},{default:o(()=>[l("div",{class:s(`${a.prefixCls}-top__detail`)},[(n(!0),c(i,null,d(a.details,e=>(n(),c("p",{key:e.title},[t(f,{icon:e.icon},null,8,["icon"]),x(" "+u(e.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),t(p,{span:7,class:s(`${a.prefixCls}-col`)},{default:o(()=>[t(g,{title:"\u6807\u7B7E",canExpan:!1},{default:o(()=>[(n(!0),c(i,null,d(a.tags,e=>(n(),m($,{key:e,class:"mb-2"},{default:o(()=>[x(u(e),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),t(p,{span:8,class:s(`${a.prefixCls}-col`)},{default:o(()=>[t(g,{class:s(`${a.prefixCls}-top__team`),title:"\u56E2\u961F",canExpan:!1},{default:o(()=>[(n(!0),c(i,null,d(a.teams,(e,B)=>(n(),c("div",{key:B,class:s(`${a.prefixCls}-top__team-item`)},[t(f,{icon:e.icon,color:e.color},null,8,["icon","color"]),l("span",null,u(e.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),l("div",{class:s(`${a.prefixCls}-bottom`)},[t(y,null,{default:o(()=>[(n(!0),c(i,null,d(a.achieveList,e=>(n(),m(k,{key:e.key,tab:e.name},{default:o(()=>[(n(),m(V(e.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)}var xa=I(J,[["render",Q],["__scopeId","data-v-5384e32e"]]);export{xa as default};
