(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6da27a10"],{4194:function(t,e,n){"use strict";var i=n("1c8b"),s=n("5dfd").find,a=n("258f"),l=n("ff9c"),o="find",r=!0,c=l(o);o in[]&&Array(1)[o]((function(){r=!1})),i({target:"Array",proto:!0,forced:r||!c},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a(o)},"55c3":function(t,e,n){"use strict";n("dbb3"),n("4194"),n("3466"),n("fe59"),n("ecb4"),n("9302"),n("77ad"),n("ea69"),n("08ba");var i=n("ed08");e["a"]={data:function(){return{list:[],type:"全部",searchVal:"",current:1,pageSize:10,visible:!1,form:{},loading:!1,selectionRows:[],mockConfig:null,typeSearchKey:"status",searchKey:"name"}},created:function(){var t=this;console.log(this.mockConfig),this.mockConfig&&(this.loading=!0,setTimeout((function(){t.list=t.$mock(t.mockConfig),t.loading=!1}),500))},methods:{getList:function(){var t=this;this.loading=!0,setTimeout((function(){t.list=t.$mock(t.mockConfig,t.pageSize),t.loading=!1}),500)},handleSizeChange:function(t){this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.current=t,this.getList()},submit:function(){var t=this;if(this.form.id){var e=this.list.find((function(e){return e.id===t.form.id}));if(-1!==e)return this.list.splice(e,1,Object.assign({},this.form)),void this.close()}void 0!==this.form.date&&(this.form.date=Object(i["b"])(new Date,"{y}-{m}-{d} {h}:{i}:{s}")),this.list.push(Object.assign({},{id:(new Date).getTime()},this.form)),this.close(),this.listCache=this.list.slice(0)},close:function(){this.visible=!1,Object.assign(this.form,this.formInit)},edit:function(){this.selectionRows.length?(Object.assign(this.form,this.selectionRows[0]),this.visible=!0,this.selectionRows.pop()):this.$message.error("请选择数据")},handleSelectionChange:function(t){this.selectionRows=t},editItem:function(t){Object.assign(this.form,t),this.visible=!0},delItem:function(t){var e=this;this.$confirm("确认删除这条数据?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.list.splice(t,1)}))},del:function(){var t=this;this.selectionRows.length?this.$confirm("确认删除这 ".concat(this.selectionRows.length," 条数据?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){setTimeout((function(){t.selectionRows.forEach((function(e){var n=t.list.findIndex((function(t){return t.id===e.id}));-1!==n&&t.list.splice(n,1),t.selectionRows=[]})),t.listCache=t.list.slice(0),t.$message.success("删除成功")}),500)})):this.$message.error("请选择数据")},listSearch:function(){this.searchVal?(this.listCache||(this.listCache=this.list.slice(0)),this.list=this.listCache.filter(this.filterFn)):this.list=this.listCache},filterChange:function(){this.listCache||(this.listCache=this.list.slice(0)),"全部"===this.type?this.list=this.listCache.slice(0):this.list=this.listCache.filter(this.filterTypeFn)},filterTypeFn:function(t){return t[this.typeSearchKey]===this.type},filterFn:function(t){return-1!==t[this.searchKey].indexOf(this.searchVal)},formatDateRange:function(t,e,n,i){return n.join("-")}}}},7166:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xcxxgl app-container common-list"},[n("div",{staticClass:"table-head"},[n("span",{staticClass:"t"},[t._v("各单位宣传信息列表")]),n("span",[n("span",[n("el-button",{attrs:{icon:"el-icon-plus",type:"primary",size:"small"},on:{click:function(e){t.visible=!0}}},[t._v("创建")]),n("el-button",{attrs:{icon:"el-icon-position",type:"primary",size:"small"}},[t._v("发放")]),n("el-button",{attrs:{icon:"el-icon-position",type:"primary",size:"small"}},[t._v("撤回")]),n("el-button",{attrs:{icon:"el-icon-edit",type:"primary",size:"small"},on:{click:t.edit}},[t._v("编辑")]),n("el-button",{attrs:{icon:"el-icon-delete",type:"danger",size:"small"},on:{click:t.del}},[t._v("删除")])],1),n("el-radio-group",{staticClass:"radio-grp",attrs:{size:"small"},on:{change:t.filterChange},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[n("el-radio-button",{attrs:{label:"全部"}}),n("el-radio-button",{attrs:{label:"发布"}}),n("el-radio-button",{attrs:{label:"待发布"}}),n("el-radio-button",{attrs:{label:"已撤回"}})],1),n("el-input",{staticClass:"search-inp",attrs:{size:"small",placeholder:"请输入搜索内容","suffix-icon":"el-icon-search"},on:{change:t.listSearch},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}})],1)]),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.list,"header-cell-style":{background:"#fafafa",color:"#999"}},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),n("el-table-column",{attrs:{label:"宣传信息名称",prop:"name"}}),n("el-table-column",{attrs:{label:"类型",prop:"type"}}),n("el-table-column",{attrs:{label:"状态",prop:"status"}}),n("el-table-column",{attrs:{label:"提交单位",prop:"unit"}}),n("el-table-column",{attrs:{label:"提交人",prop:"person"}}),n("el-table-column",{attrs:{label:"创建时间",sortable:"",prop:"date"}})],1),n("div",{staticClass:"table-footer tar"},[n("el-pagination",{attrs:{"current-page":t.current,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),n("el-dialog",{attrs:{title:"宣传信息创建",visible:t.visible,width:"500px","show-close":!1,"close-on-click-modal":!1}},[n("el-form",{attrs:{model:t.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"宣传信息名称"}},[n("el-input",{attrs:{placeholder:"请输入宣传信息名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"宣传信息类型"}},[n("el-select",{attrs:{placeholder:"请选择宣传信息类型"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[n("el-option",{attrs:{label:"单位宣传信息",value:"单位宣传信息"}}),n("el-option",{attrs:{label:"产品宣传信息",value:"产品宣传信息"}}),n("el-option",{attrs:{label:"赛事宣传信息",value:"赛事宣传信息"}})],1)],1),n("el-form-item",{attrs:{label:"所属单位"}},[n("el-select",{attrs:{placeholder:"请选择所属单位"},model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}},[n("el-option",{attrs:{label:"体育馆",value:"体育馆"}}),n("el-option",{attrs:{label:"文化馆",value:"文化馆"}}),n("el-option",{attrs:{label:"博物馆",value:"博物馆"}}),n("el-option",{attrs:{label:"文旅局办公室",value:"文旅局办公室"}})],1)],1),n("el-form-item",{attrs:{label:"宣传信息内容"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入宣传信息内容"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("确 定")])],1)],1)],1)},s=[],a=n("2ba1"),l=n("55c3"),o={mixins:[l["a"]],data:function(){return this.formInit={name:"",type:"",unit:"",content:"",status:"待发布",person:"",date:""},{list:[{name:"新美术馆已经建设完成，即将开馆",type:"单位宣传信息",unit:"文化馆",content:"",status:"发布",person:"陆涛",date:"2020.2.1 10:11:22"},{name:"文化馆即将出售一批陶艺工艺品",type:"产品宣传信息",unit:"文化馆",content:"",status:"发布",person:"胡艺",date:"2020.3.5 9:13:20"},{name:"2020年青少年羽毛球“青芽杯”将在4月15日开赛",type:"赛事宣传信息",unit:"体育馆",content:"",status:"发布",person:"彭少宇",date:"2020.3.25 15:26:37"},{name:"2020年5月14日义乌市博物馆将举办“重回丝路”主题展会",type:"单位宣传信息",unit:"博物馆",content:"",status:"发布",person:"张思玉",date:"2020.4.30 14:56:22"},{name:"第25界估计围棋大赛将在6月16日在我市文化馆B馆举办",type:"赛事宣传信息",unit:"文旅局办公室",content:"",status:"发布",person:"刘敏君",date:"2020.5.20 16:46:31"},{name:"2020年端午节婺剧文化表演",type:"单位宣传信息",unit:"文化馆",content:"",status:"发布",person:"胡艺",date:"2020.6.20 16:46:31"},{name:"义乌文化广场剧院2019年下半年演出剧目发布会——用艺术温暖一座城",type:"单位宣传信息",unit:"文化馆",content:"",status:"发布",person:"陆涛",date:"2019.5.20 14:30:31"},{name:"2018义乌第十三届足协杯火热开战",type:"赛事宣传信息",unit:"体育馆",content:"",status:"发布",person:"彭少宇",date:"2018.4.11 9:15:33"},{name:"占地约50亩！义乌即将迎来一座大型体育文化综合体",type:"单位宣传信息",unit:"文旅局办公室",content:"",status:"发布",person:"刘敏君",date:"2018.9.11 15:15:33"},{name:"苏溪镇文化礼堂开展“端午节”系列活动",type:"单位宣传信息",unit:"文旅局办公室",content:"",status:"发布",person:"刘敏君",date:"2018.6.11 15:15:33"}],type:"全部",searchVal:"",current:1,form:Object(a["a"])({},this.formInit),visible:!1}},methods:{}},r=o,c=n("9ca4"),u=Object(c["a"])(r,i,s,!1,null,null,null);e["default"]=u.exports},ed08:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));n("fe59"),n("98e0"),n("ecb4"),n("9302"),n("6ae3"),n("2eeb"),n("77ad"),n("fe8a"),n("e18c"),n("84c2"),n("e35a"),n("1c2e"),n("34d9"),n("96db"),n("f4e3"),n("898e"),n("5e9f"),n("0d7a"),n("08ba"),n("af86");var i=n("f0ee");function s(t,e){if(0===arguments.length||!t)return null;var n,s=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(i["a"])(t)?n=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var a={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},l=s.replace(/{([ymdhisa])+}/g,(function(t,e){var n=a[e];return"a"===e?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")}));return l}function a(t,e,n){var i,s,a,l,o,r=function r(){var c=+new Date-l;c<e&&c>0?i=setTimeout(r,e-c):(i=null,n||(o=t.apply(a,s),i||(a=s=null)))};return function(){for(var s=arguments.length,c=new Array(s),u=0;u<s;u++)c[u]=arguments[u];a=this,l=+new Date;var h=n&&!i;return i||(i=setTimeout(r,e)),h&&(o=t.apply(a,c),a=c=null),o}}}}]);