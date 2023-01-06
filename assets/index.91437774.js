import{B as b}from"./TableImg.8d9a02f1.js";import{l as C}from"./BasicForm.4cb19f9d.js";import{u as g}from"./useTable.b33a5a06.js";import{d as T}from"./system.724bedb8.js";import{u as w}from"./index.dc8d35d3.js";import{M as D,c as _,s as S}from"./MenuDrawer.41935445.js";import{aw as B,a as k,ay as t,o as h,h as F,n as m,z as p,B as y,j as M,l as A,al as E}from"./index.58e3d8d0.js";import"./index.a4363077.js";import"./Checkbox.08133fb4.js";import"./index.167d068a.js";import"./index.6a9803cf.js";import"./eagerComputed.5273b770.js";import"./useForm.61a15f9c.js";import"./index.f64131dc.js";import"./index.5979f95e.js";import"./index.78a2e5b8.js";import"./useSize.d5945e7b.js";import"./useWindowSizeFn.9dc32eeb.js";import"./useContentViewHeight.0badffd0.js";import"./ArrowLeftOutlined.335726f2.js";import"./index.79c036d8.js";import"./transButton.044dc68a.js";import"./index.136e576c.js";import"./index.4bd77d1c.js";import"./index.df748fb5.js";import"./uuid.2b29000c.js";import"./index.419f32a1.js";import"./_baseIteratee.1bf4b788.js";import"./get.06733f17.js";import"./DeleteOutlined.212d5ad0.js";import"./index.b67a74c2.js";import"./useRefs.1d517a52.js";import"./Form.4c1ffd3f.js";import"./Col.9ae3040f.js";import"./useFlexGapSupport.79e4d221.js";import"./index.86e796cd.js";import"./FullscreenOutlined.773623fc.js";import"./index.11572bd7.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.5f1cf3ef.js";import"./index.c6f1546d.js";import"./fromPairs.84aabb58.js";import"./scrollTo.bcd3fa0a.js";import"./index.f61eae42.js";/* empty css              *//* empty css              */import"./index.ff269ed8.js";import"./index.6f5742a2.js";import"./index.b979a466.js";import"./download.c2c94ec1.js";import"./base64Conver.08b9f4ec.js";import"./index.e6fd86c1.js";import"./index.e6e05c33.js";import"./uniqBy.7542f778.js";import"./index.a1f47e5b.js";const R=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:D,TableAction:C},setup(){const[e,{openDrawer:r}]=w(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:_,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function s(){E(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:s}}});function v(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),s=t("MenuDrawer");return h(),F("div",null,[m(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[m(i,{type:"primary",onClick:e.handleCreate},{default:p(()=>[y(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:p(({column:o,record:f})=>[o.key==="action"?(h(),M(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),m(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var $e=B(R,[["render",v]]);export{$e as default};
