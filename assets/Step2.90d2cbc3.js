var f=(p,s,i)=>new Promise((c,r)=>{var _=o=>{try{t(i.next(o))}catch(u){r(u)}},m=o=>{try{t(i.throw(o))}catch(u){r(u)}},t=o=>o.done?c(o.value):Promise.resolve(o.value).then(_,m);t((i=i.apply(p,s)).next())});import{B as v}from"./BasicForm.4cb19f9d.js";import{u as E}from"./useForm.61a15f9c.js";import{step2Schemas as b}from"./data.1866c55a.js";import{a as x,aw as g,ay as a,o as h,h as C,n as e,z as n,B as l}from"./index.58e3d8d0.js";import{A as B}from"./index.b979a466.js";import{D}from"./index.11572bd7.js";import{D as d}from"./index.f9b754c8.js";/* empty css              *//* empty css              */import"./index.a4363077.js";import"./Checkbox.08133fb4.js";import"./index.167d068a.js";import"./index.df748fb5.js";import"./index.136e576c.js";import"./index.4bd77d1c.js";import"./index.ff269ed8.js";import"./get.06733f17.js";import"./index.6a9803cf.js";import"./eagerComputed.5273b770.js";import"./index.419f32a1.js";import"./_baseIteratee.1bf4b788.js";import"./DeleteOutlined.212d5ad0.js";import"./index.b67a74c2.js";import"./useRefs.1d517a52.js";import"./Form.4c1ffd3f.js";import"./Col.9ae3040f.js";import"./useFlexGapSupport.79e4d221.js";import"./useSize.d5945e7b.js";import"./transButton.044dc68a.js";import"./index.6f5742a2.js";import"./index.86e796cd.js";import"./useWindowSizeFn.9dc32eeb.js";import"./FullscreenOutlined.773623fc.js";import"./index.c6f1546d.js";import"./uuid.2b29000c.js";import"./download.c2c94ec1.js";import"./base64Conver.08b9f4ec.js";import"./index.e6fd86c1.js";import"./index.e6e05c33.js";import"./uniqBy.7542f778.js";const y=x({components:{BasicForm:v,[B.name]:B,[D.name]:D,[d.name]:d,[d.Item.name]:d.Item},emits:["next","prev"],setup(p,{emit:s}){const[i,{validate:c,setProps:r}]=E({labelWidth:80,schemas:b,actionColOptions:{span:14},resetButtonOptions:{text:"\u4E0A\u4E00\u6B65"},submitButtonOptions:{text:"\u63D0\u4EA4"},resetFunc:_,submitFunc:m});function _(){return f(this,null,function*(){s("prev")})}function m(){return f(this,null,function*(){try{const t=yield c();r({submitButtonOptions:{loading:!0}}),setTimeout(()=>{r({submitButtonOptions:{loading:!1}}),s("next",t)},1500)}catch(t){}})}return{register:i}}}),A={class:"step2"};function w(p,s,i,c,r,_){const m=a("a-alert"),t=a("a-descriptions-item"),o=a("a-descriptions"),u=a("a-divider"),F=a("BasicForm");return h(),C("div",A,[e(m,{message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002","show-icon":""}),e(o,{column:1,class:"mt-5"},{default:n(()=>[e(t,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:n(()=>[l(" ant-design@alipay.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u8D26\u6237"},{default:n(()=>[l(" test@example.com ")]),_:1}),e(t,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D"},{default:n(()=>[l(" Vben ")]),_:1}),e(t,{label:"\u8F6C\u8D26\u91D1\u989D"},{default:n(()=>[l(" 500\u5143 ")]),_:1})]),_:1}),e(u),e(F,{onRegister:p.register},null,8,["onRegister"])])}var Bt=g(y,[["render",w],["__scopeId","data-v-01481d2f"]]);export{Bt as default};
