import{_ as h}from"./index.5ccad32d.js";import{t as C}from"./data.ec134722.js";import{P as B}from"./index.f64131dc.js";import{aw as k,a as E,b1 as A,v as p,ay as u,o as v,j as K,z as n,n as e,B as D,ah as g,al as R,k as _,dr as $,ba as L}from"./index.58e3d8d0.js";import{C as b}from"./index.9532e770.js";import"./index.a954669a.js";/* empty css              */import{R as w,C as P}from"./index.e6e05c33.js";import"./fromPairs.84aabb58.js";import"./index.6a9803cf.js";import"./eagerComputed.5273b770.js";import"./useContextMenu.0639b7e5.js";import"./index.11572bd7.js";import"./get.06733f17.js";import"./index.5979f95e.js";import"./index.78a2e5b8.js";import"./useSize.d5945e7b.js";import"./useWindowSizeFn.9dc32eeb.js";import"./useContentViewHeight.0badffd0.js";import"./ArrowLeftOutlined.335726f2.js";import"./index.79c036d8.js";import"./transButton.044dc68a.js";import"./index.57b3cc30.js";import"./useRefs.1d517a52.js";import"./PlusOutlined.8c017148.js";import"./Col.9ae3040f.js";import"./useFlexGapSupport.79e4d221.js";const x=E({components:{BasicTree:h,PageWrapper:B,Card:b,Row:w,Col:P,Spin:A},setup(){const t=p(null),d=p(null),F=p(null),c=p([]),l=p(!1);function y(a,i){}function o(){l.value=!0,setTimeout(()=>{c.value=g(C),l.value=!1,R(()=>{var a;_(d),(a=_(d))==null||a.expandAll(!0)})},2e3)}function r(){l.value=!0,setTimeout(()=>{c.value=g(C),l.value=!1},2e3)}const m=p([{title:"parent ",key:"0-0"}]);function f(a){return new Promise(i=>{if($(a.children)&&a.children.length>0){i();return}setTimeout(()=>{const s=_(t);if(s){const T=[{title:`Child Node ${a.eventKey}-0`,key:`${a.eventKey}-0`},{title:`Child Node ${a.eventKey}-1`,key:`${a.eventKey}-1`}];s.updateNodeByKey(a.eventKey,{children:T}),s.setExpandedKeys(L([a.eventKey,...s.getExpandedKeys()]))}i()},300)})}return{treeData:C,handleCheck:y,tree:m,onLoadData:f,asyncTreeRef:t,asyncExpandTreeRef:d,loadTreeRef:F,tree2:c,loadTreeData:o,treeLoading:l,loadTreeData2:r}}});function S(t,d,F,c,l,y){const o=u("BasicTree"),r=u("Col"),m=u("a-button"),f=u("Spin"),a=u("Card"),i=u("Row"),s=u("PageWrapper");return v(),K(s,{title:"Tree\u57FA\u7840\u793A\u4F8B"},{default:n(()=>[e(i,{gutter:[16,16]},{default:n(()=>[e(r,{span:8},{default:n(()=>[e(o,{title:"\u57FA\u7840\u793A\u4F8B\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B2C\u4E00\u5C42",treeData:t.treeData,defaultExpandLevel:"1"},{title:n(()=>[D(" 123123 ")]),_:1},8,["treeData"])]),_:1}),e(r,{span:8},{default:n(()=>[e(o,{title:"\u53EF\u52FE\u9009\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5C55\u5F00",treeData:t.treeData,checkable:!0,defaultExpandAll:"",onCheck:t.handleCheck},null,8,["treeData","onCheck"])]),_:1}),e(r,{span:8},{default:n(()=>[e(o,{title:"\u6307\u5B9A\u9ED8\u8BA4\u5C55\u5F00/\u52FE\u9009\u793A\u4F8B",treeData:t.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),e(r,{span:8},{default:n(()=>[e(o,{title:"\u61D2\u52A0\u8F7D\u5F02\u6B65\u6811",ref:"asyncTreeRef",treeData:t.tree,"load-data":t.onLoadData},null,8,["treeData","load-data"])]),_:1}),e(r,{span:8},{default:n(()=>[e(a,{title:"\u5F02\u6B65\u6570\u636E\uFF0C\u9ED8\u8BA4\u5C55\u5F00"},{extra:n(()=>[e(m,{onClick:t.loadTreeData,loading:t.treeLoading},{default:n(()=>[D("\u52A0\u8F7D\u6570\u636E")]),_:1},8,["onClick","loading"])]),default:n(()=>[e(f,{spinning:t.treeLoading},{default:n(()=>[e(o,{ref:"asyncExpandTreeRef",treeData:t.tree2},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),e(r,{span:8},{default:n(()=>[e(a,{title:"BasicTree\u5185\u7F6E\u52A0\u8F7D"},{extra:n(()=>[e(m,{onClick:t.loadTreeData2,loading:t.treeLoading},{default:n(()=>[D("\u8BF7\u6C42\u6570\u636E")]),_:1},8,["onClick","loading"])]),default:n(()=>[e(o,{ref:"loadTreeRef",treeData:t.tree2,loading:t.treeLoading},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}var pe=k(x,[["render",S]]);export{pe as default};
