var E=Object.defineProperty,M=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var F=(e,n,a)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,b=(e,n)=>{for(var a in n||(n={}))A.call(n,a)&&F(e,a,n[a]);if(B)for(var a of B(n))I.call(n,a)&&F(e,a,n[a]);return e},C=(e,n)=>M(e,y(n));import{P as S}from"./index.f64131dc.js";import{a as N,aG as u,v as Y,c as H,eM as P,a7 as R,eN as j,eu as k,dD as h,aw as O,cz as U,aH as W,br as z,o as $,h as V,t as q,aF as G,cD as J,w as K,bc as L,ay as w,j as Q,z as f,n as i,i as _}from"./index.58e3d8d0.js";import"./index.5979f95e.js";import"./index.78a2e5b8.js";import"./useSize.d5945e7b.js";import"./eagerComputed.5273b770.js";import"./useWindowSizeFn.9dc32eeb.js";import"./useContentViewHeight.0badffd0.js";import"./ArrowLeftOutlined.335726f2.js";import"./index.79c036d8.js";import"./transButton.044dc68a.js";const p=1e3,d=p*60,v=d*60,D=v*24,X=N({name:"Time",props:{value:u.oneOfType([u.number,u.instanceOf(Date),u.string]).isRequired,step:u.number.def(60),mode:u.oneOf(["date","datetime","relative"]).def("relative")},setup(e){const n=Y(""),{t:a}=H();P(m,e.step*p),R(()=>e.value,()=>{m()},{immediate:!0});function T(){const{value:t}=e;let s=0;if(U(t)){const l=t.toString().length>10?t:t*1e3;s=new Date(l).getTime()}else W(t)?s=new Date(t).getTime():z(t)&&(s=t.getTime());return s}function m(){const{mode:t,value:s}=e,l=T();t==="relative"?n.value=g(l):t==="datetime"?n.value=j(s):t==="date"&&(n.value=k(s))}function g(t){const s=new Date().getTime(),l=h(t).isBefore(s);let o=s-t;l||(o=-o);let r="",c=a(l?"component.time.before":"component.time.after");return o<p?r=a("component.time.just"):o<d?r=parseInt(o/p)+a("component.time.seconds")+c:o>=d&&o<v?r=Math.floor(o/d)+a("component.time.minutes")+c:o>=v&&o<D?r=Math.floor(o/v)+a("component.time.hours")+c:o>=D&&o<262386e4?r=Math.floor(o/D)+a("component.time.days")+c:o>=262386e4&&o<=3156786e4&&l?r=h(t).format("MM-DD-HH-mm"):r=h(t).format("YYYY"),r}return{date:n}}});function Z(e,n,a,T,m,g){return $(),V("span",null,q(e.date),1)}var x=O(X,[["render",Z]]);const ee=G(x),te=N({components:{PageWrapper:S,Time:ee,CollapseContainer:J},setup(){const e=new Date().getTime(),n=K({time1:e-60*3*1e3,time2:e-86400*3*1e3});return C(b({},L(n)),{now:e})}}),ne=_("br",null,null,-1),ae=_("br",null,null,-1),oe=_("br",null,null,-1),se=_("br",null,null,-1);function ie(e,n,a,T,m,g){const t=w("Time"),s=w("CollapseContainer"),l=w("PageWrapper");return $(),Q(l,{title:"\u65F6\u95F4\u7EC4\u4EF6\u793A\u4F8B"},{default:f(()=>[i(s,{title:"\u57FA\u7840\u793A\u4F8B"},{default:f(()=>[i(t,{value:e.time1},null,8,["value"]),ne,i(t,{value:e.time2},null,8,["value"])]),_:1}),i(s,{title:"\u5B9A\u65F6\u66F4\u65B0",class:"my-4"},{default:f(()=>[i(t,{value:e.now,step:1},null,8,["value"]),ae,i(t,{value:e.now,step:5},null,8,["value"])]),_:1}),i(s,{title:"\u5B9A\u65F6\u66F4\u65B0"},{default:f(()=>[i(t,{value:e.now,mode:"date"},null,8,["value"]),oe,i(t,{value:e.now,mode:"datetime"},null,8,["value"]),se,i(t,{value:e.now},null,8,["value"])]),_:1})]),_:1})}var he=O(te,[["render",ie]]);export{he as default};
