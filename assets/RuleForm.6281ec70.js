var f=(e,o,r)=>new Promise((m,i)=>{var d=u=>{try{l(r.next(u))}catch(s){i(s)}},t=u=>{try{l(r.throw(u))}catch(s){i(s)}},l=u=>u.done?m(u.value):Promise.resolve(u.value).then(d,t);l((r=r.apply(e,o)).next())});import{B as b}from"./BasicForm.4cb19f9d.js";import{u as g}from"./useForm.61a15f9c.js";import{aw as A,a as P,cD as E,ay as B,o as _,j as k,z as n,i as v,n as p,B as c,E as D}from"./index.58e3d8d0.js";import{P as h}from"./index.f64131dc.js";import{i as V}from"./system.724bedb8.js";/* empty css              *//* empty css              */import"./index.11572bd7.js";import"./index.a4363077.js";import"./Checkbox.08133fb4.js";import"./index.167d068a.js";import"./index.df748fb5.js";import"./index.136e576c.js";import"./index.4bd77d1c.js";import"./index.ff269ed8.js";import"./get.06733f17.js";import"./index.6a9803cf.js";import"./eagerComputed.5273b770.js";import"./index.419f32a1.js";import"./_baseIteratee.1bf4b788.js";import"./DeleteOutlined.212d5ad0.js";import"./index.b67a74c2.js";import"./useRefs.1d517a52.js";import"./Form.4c1ffd3f.js";import"./Col.9ae3040f.js";import"./useFlexGapSupport.79e4d221.js";import"./useSize.d5945e7b.js";import"./transButton.044dc68a.js";import"./index.6f5742a2.js";import"./index.86e796cd.js";import"./useWindowSizeFn.9dc32eeb.js";import"./FullscreenOutlined.773623fc.js";import"./index.b979a466.js";import"./index.c6f1546d.js";import"./uuid.2b29000c.js";import"./download.c2c94ec1.js";import"./base64Conver.08b9f4ec.js";import"./index.e6fd86c1.js";import"./index.e6e05c33.js";import"./uniqBy.7542f778.js";import"./index.5979f95e.js";import"./index.78a2e5b8.js";import"./useContentViewHeight.0badffd0.js";import"./ArrowLeftOutlined.335726f2.js";import"./index.79c036d8.js";const C=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(e,o)=>f(void 0,null,function*(){return o?o==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,o){return new Promise((r,m)=>{V(o).then(()=>r()).catch(i=>{m(i.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]}],y=P({components:{BasicForm:b,CollapseContainer:E,PageWrapper:h},setup(){const{createMessage:e}=D(),[o,{validateFields:r,clearValidate:m,getFieldsValue:i,resetFields:d,setFieldsValue:t}]=g({labelWidth:120,schemas:C,actionColOptions:{span:24}});function l(){return f(this,null,function*(){try{const a=yield r()}catch(a){}})}function u(){return f(this,null,function*(){m()})}function s(){const a=i();e.success("values:"+JSON.stringify(a))}function F(){t({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:o,schemas:C,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},getFormValues:s,setFormValues:F,validateForm:l,resetValidate:u,resetFields:d}}}),q={class:"mb-4"};function S(e,o,r,m,i,d){const t=B("a-button"),l=B("BasicForm"),u=B("CollapseContainer"),s=B("PageWrapper");return _(),k(s,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:n(()=>[v("div",q,[p(t,{onClick:e.validateForm,class:"mr-2"},{default:n(()=>[c(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 ")]),_:1},8,["onClick"]),p(t,{onClick:e.resetValidate,class:"mr-2"},{default:n(()=>[c(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F ")]),_:1},8,["onClick"]),p(t,{onClick:e.getFormValues,class:"mr-2"},{default:n(()=>[c(" \u83B7\u53D6\u8868\u5355\u503C ")]),_:1},8,["onClick"]),p(t,{onClick:e.setFormValues,class:"mr-2"},{default:n(()=>[c(" \u8BBE\u7F6E\u8868\u5355\u503C ")]),_:1},8,["onClick"]),p(t,{onClick:e.resetFields,class:"mr-2"},{default:n(()=>[c(" \u91CD\u7F6E ")]),_:1},8,["onClick"])]),p(u,{title:"\u8868\u5355\u6821\u9A8C"},{default:n(()=>[p(l,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ke=A(y,[["render",S]]);export{ke as default};
