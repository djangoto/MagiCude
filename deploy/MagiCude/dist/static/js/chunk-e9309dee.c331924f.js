(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9309dee"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,n){var a=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var o=n.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"2c57":function(t,e,n){"use strict";n("99af");var a=n("b775"),i="center",o="taskpluginconfig";e["a"]={getList:function(){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"get"})},search:function(t,e,n){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/search/").concat(t,"/").concat(e),method:"post",data:n})},save:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"post",data:t})},findById:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(t),method:"get"})},update:function(t,e){return null===t||""===t?this.save(e):Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(t),method:"put",data:e})},deleteById:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(t),method:"delete"})},deleteAllByIds:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/deleteids"),method:"post",data:t})},findAllByTaskid:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/task/").concat(t),method:"get"})},addAllByIds:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/plugin/ids"),method:"post",data:t})},deleteAllByTaskId:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/task/").concat(t),method:"delete"})},deleteAllIds:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/task/ids"),method:"post",data:t})}}},"3ca3":function(t,e,n){"use strict";var a=n("6547").charAt,i=n("69f3"),o=n("7dd0"),c="String Iterator",r=i.set,l=i.getterFor(c);o(String,"String",(function(t){r(this,{type:c,string:String(t),index:0})}),(function(){var t,e=l(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=a(n,i),e.index+=t.length,{value:t,done:!1})}))},"4ec9":function(t,e,n){"use strict";var a=n("6d61"),i=n("6566");t.exports=a("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},"5ad6":function(t,e,n){"use strict";n("99af");var a=n("b775"),i="center",o="pluginconfig";e["a"]={getList:function(){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"get"})},search:function(t,e,n){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/search/").concat(t,"/").concat(e),method:"post",data:n})},save:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"post",data:t})},findById:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(t),method:"get"})},update:function(t,e){return null===t||""===t?this.save(e):Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(t),method:"put",data:e})},deleteById:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(t),method:"delete"})},deleteAllByIds:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/deleteids"),method:"post",data:t})}}},6547:function(t,e,n){var a=n("a691"),i=n("1d80"),o=function(t){return function(e,n){var o,c,r=String(i(e)),l=a(n),s=r.length;return l<0||l>=s?t?"":void 0:(o=r.charCodeAt(l),o<55296||o>56319||l+1===s||(c=r.charCodeAt(l+1))<56320||c>57343?t?r.charAt(l):o:t?r.slice(l,l+2):c-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},6566:function(t,e,n){"use strict";var a=n("9bf2").f,i=n("7c73"),o=n("e2cc"),c=n("0366"),r=n("19aa"),l=n("2266"),s=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,g=n("69f3"),h=g.set,p=g.getterFor;t.exports={getConstructor:function(t,e,n,s){var u=t((function(t,a){r(t,u,e),h(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=a&&l(a,t[s],t,n)})),g=p(e),m=function(t,e,n){var a,i,o=g(t),c=v(t,e);return c?c.value=n:(o.last=c={index:i=f(e,!0),key:e,value:n,previous:a=o.last,next:void 0,removed:!1},o.first||(o.first=c),a&&(a.next=c),d?o.size++:t.size++,"F"!==i&&(o.index[i]=c)),t},v=function(t,e){var n,a=g(t),i=f(e);if("F"!==i)return a.index[i];for(n=a.first;n;n=n.next)if(n.key==e)return n};return o(u.prototype,{clear:function(){var t=this,e=g(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=g(e),a=v(e,t);if(a){var i=a.next,o=a.previous;delete n.index[a.index],a.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==a&&(n.first=i),n.last==a&&(n.last=o),d?n.size--:e.size--}return!!a},forEach:function(t){var e,n=g(this),a=c(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!v(this,t)}}),o(u.prototype,n?{get:function(t){var e=v(this,t);return e&&e.value},set:function(t,e){return m(this,0===t?0:t,e)}}:{add:function(t){return m(this,t=0===t?0:t,t)}}),d&&a(u.prototype,"size",{get:function(){return g(this).size}}),u},setStrong:function(t,e,n){var a=e+" Iterator",i=p(e),o=p(a);s(t,e,(function(t,e){h(this,{type:a,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(e)}}},"6d61":function(t,e,n){"use strict";var a=n("23e7"),i=n("da84"),o=n("94ca"),c=n("6eeb"),r=n("f183"),l=n("2266"),s=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),g=n("d44e"),h=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),v=p?"set":"add",b=i[t],x=b&&b.prototype,y=b,k={},w=function(t){var e=x[t];c(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(m&&!u(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!u(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!u(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof b||!(m||x.forEach&&!d((function(){(new b).entries().next()})))))y=n.getConstructor(e,t,p,v),r.REQUIRED=!0;else if(o(t,!0)){var j=new y,L=j[v](m?{}:-0,1)!=j,S=d((function(){j.has(1)})),O=f((function(t){new b(t)})),E=!m&&d((function(){var t=new b,e=5;while(e--)t[v](e,e);return!t.has(-0)}));O||(y=e((function(e,n){s(e,y,t);var a=h(new b,e,y);return void 0!=n&&l(n,a[v],a,p),a})),y.prototype=x,x.constructor=y),(S||E)&&(w("delete"),w("has"),p&&w("get")),(E||L)&&w(v),m&&x.clear&&delete x.clear}return k[t]=y,a({global:!0,forced:y!=b},k),g(y,t),m||n.setStrong(y,t,p),y}},7156:function(t,e,n){var a=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var o,c;return i&&"function"==typeof(o=e.constructor)&&o!==n&&a(c=o.prototype)&&c!==n.prototype&&i(t,c),t}},7276:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),n("el-form",{ref:"searchform",attrs:{inline:"",size:"small",model:t.searchMap}},[n("el-form-item",{attrs:{prop:"taskid",label:"任务"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入关键词","remote-method":t.getTaskNameList,loading:t.searchLoading},model:{value:t.searchMap.taskid,callback:function(e){t.$set(t.searchMap,"taskid",e)},expression:"searchMap.taskid"}},t._l(t.taskNameList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),n("el-form-item",{attrs:{prop:"pluginconfigid",label:"插件"}},[n("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",remote:"",clearable:"",placeholder:"请输入关键词","remote-method":t.getPluginConfigNameList,loading:t.searchLoading},model:{value:t.searchMap.pluginconfigid,callback:function(e){t.$set(t.searchMap,"pluginconfigid",e)},expression:"searchMap.pluginconfigid"}},t._l(t.pluginConfigNameList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.fetchData()}}},[t._v("查询")]),n("el-button",{attrs:{type:"info"},on:{click:function(e){return t.resetForm("searchform")}}},[t._v("重置")])],1),n("el-form-item",[n("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"默认名字：报告","prefix-icon":"el-icon-document"},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),n("el-button",{attrs:{loading:t.downloadLoading,type:"success",icon:"el-icon-document"},on:{click:t.handleDownload}},[t._v("导出已选")])],1),n("el-form-item",[n("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:t.handleDeleteAll}},[t._v("删除已选")])],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleEdit("")}}},[t._v("新增")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":"","element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",align:"center"}}),n("el-table-column",{attrs:{label:"序号",type:"index",index:1,align:"center",width:"50"}}),n("el-table-column",{attrs:{sortable:"",prop:"taskid",label:"任务"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.getTaskName(e.row.taskid))+" ")]}}])}),n("el-table-column",{attrs:{sortable:"",prop:"pluginconfigid",label:"插件"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.getPluginconfigName(e.row.pluginconfigid))+" ")]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(n){return t.handleEdit(e.row.id)}}}),n("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(n){return t.handleDelete(e.row.id)}}})]}}])})],1),n("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,200,500,1e3],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"size-change":t.handleSizeChange,"current-change":t.fetchData}}),n("el-dialog",{attrs:{title:"编辑",visible:t.dialogFormVisible,width:"40%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{attrs:{"label-width":"100px"}},[n("el-form-item",{attrs:{required:"",label:"任务"}},[n("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",clearable:"",placeholder:"请输入关键词"},model:{value:t.pojo.taskid,callback:function(e){t.$set(t.pojo,"taskid",e)},expression:"pojo.taskid"}},t._l(t.taskList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),n("el-form-item",{attrs:{required:"",label:"插件"}},[n("el-select",{staticStyle:{width:"300px"},attrs:{filterable:"",clearable:"",placeholder:"请输入关键词"},model:{value:t.pojo.pluginconfigid,callback:function(e){t.$set(t.pojo,"pluginconfigid",e)},expression:"pojo.pluginconfigid"}},t._l(t.pluginconfigList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSave()}}},[t._v("保存")]),n("el-button",{on:{click:function(e){return t.closeDialogForm()}}},[t._v("关闭")])],1)],1)],1)},i=[],o=(n("4de4"),n("c975"),n("d81d"),n("b0c0"),n("4ec9"),n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2c57")),c=n("5ad6"),r=n("b199"),l={data:function(){return{list:[],total:0,currentPage:1,pageSize:10,searchMap:{},dialogFormVisible:!1,pojo:{},id:"",filename:"",listLoading:!0,multipleSelection:[],downloadLoading:!1,searchLoading:!1,pluginconfigList:[],pluginconfigMap:new Map,taskList:[],taskMap:new Map,taskNameList:[],pluginConfigNameList:[]}},created:function(){this.fetchData(),this.getPluginconfig(),this.getTask()},methods:{getPluginconfig:function(){var t=this;c["a"].getList().then((function(e){t.pluginconfigList=e.data;for(var n=0;n<t.pluginconfigList.length;n++)t.pluginconfigMap.set(t.pluginconfigList[n].id,t.pluginconfigList[n].name)}))},getPluginconfigName:function(t){return this.pluginconfigMap.get(t)},getTask:function(){var t=this;r["a"].getList().then((function(e){t.taskList=e.data;for(var n=0;n<t.taskList.length;n++)t.taskMap.set(t.taskList[n].id,t.taskList[n].name)}))},getTaskName:function(t){return this.taskMap.get(t)},closeDialogForm:function(){this.dialogFormVisible=!1},getTaskNameList:function(t){var e=this;""!==t&&t?(this.searchLoading=!0,setTimeout((function(){e.searchLoading=!1,r["a"].search(1,10,{name:t}).then((function(n){e.taskNameList=n.data.rows.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))}))}),200)):this.taskNameList=[]},getPluginConfigNameList:function(t){var e=this;""!==t&&t?(this.searchLoading=!0,setTimeout((function(){e.searchLoading=!1,c["a"].search(1,10,{name:t}).then((function(n){e.pluginConfigNameList=n.data.rows.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1}))}))}),200)):this.pluginConfigNameList=[]},handleDeleteAll:function(){var t=this;this.multipleSelection&&this.multipleSelection.length?this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){for(var e=[],n=0;n<t.multipleSelection.length;n++)e.push(t.multipleSelection[n].id);o["a"].deleteAllByIds(e).then((function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.fetchData()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})})):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},handleSelectionChange:function(t){this.multipleSelection=t},handleDownload:function(){var t=this;this.multipleSelection&&this.multipleSelection.length?(this.downloadLoading=!0,Promise.all([n.e("chunk-3c2d6792"),n.e("chunk-ee77943a")]).then(n.bind(null,"4bf8")).then((function(e){for(var n=["任务","插件"],a=["taskid","pluginconfigid"],i=t.multipleSelection,o=0;o<i.length;o++)i[o].taskid=t.getTaskName(i[o].taskid),i[o].pluginconfigid=t.getPluginconfigName(i[o].pluginconfigid);var c=t.formatJson(a,i);e.export_json_to_excel({header:n,data:c,filename:t.filename}),t.$refs.multipleTable.clearSelection(),t.downloadLoading=!1})),this.fetchData()):this.$message({message:"^_^至少选择一条记录哦~",type:"info"})},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},resetForm:function(t){this.$refs[t].resetFields(),this.searchMap={},this.$message({message:"已清空搜索条件",type:"info"})},handleSizeChange:function(t){this.pageSize=t,this.fetchData()},formatBoolean:function(t){return t?"是":""},fetchData:function(){var t=this;this.listLoading=!0,o["a"].search(this.currentPage,this.pageSize,this.searchMap).then((function(e){t.list=e.data.rows,t.total=e.data.total,t.listLoading=!1}))},handleSave:function(){var t=this;o["a"].update(this.id,this.pojo).then((function(e){t.$message({message:e.message,type:e.flag?"success":"error"}),e.flag&&t.fetchData()})),this.closeDialogForm()},handleEdit:function(t){var e=this;this.id=t,this.dialogFormVisible=!0,""!==t?o["a"].findById(t).then((function(t){t.flag&&(e.pojo=t.data)})):this.pojo={}},handleDelete:function(t){var e=this;this.$confirm("此操作将永久删除已选记录, 是否继续?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){o["a"].deleteById(t).then((function(t){e.$message({message:t.message,type:t.flag?"success":"error"}),t.flag&&e.fetchData()}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},s=l,u=n("2877"),d=Object(u["a"])(s,a,i,!1,null,null,null);e["default"]=d.exports},"841c":function(t,e,n){"use strict";var a=n("d784"),i=n("825a"),o=n("1d80"),c=n("129f"),r=n("14c3");a("search",1,(function(t,e,n){return[function(e){var n=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,n):new RegExp(e)[t](String(n))},function(t){var a=n(e,t,this);if(a.done)return a.value;var o=i(t),l=String(this),s=o.lastIndex;c(s,0)||(o.lastIndex=0);var u=r(o,l);return c(o.lastIndex,s)||(o.lastIndex=s),null===u?-1:u.index}]}))},9263:function(t,e,n){"use strict";var a=n("ad6d"),i=n("9f7f"),o=RegExp.prototype.exec,c=String.prototype.replace,r=o,l=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||s;d&&(r=function(t){var e,n,i,r,d=this,f=s&&d.sticky,g=a.call(d),h=d.source,p=0,m=t;return f&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),m=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",m=" "+m,p++),n=new RegExp("^(?:"+h+")",g)),u&&(n=new RegExp("^"+h+"$(?!\\s)",g)),l&&(e=d.lastIndex),i=o.call(f?n:d,m),f?i?(i.input=i.input.slice(p),i[0]=i[0].slice(p),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:l&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),u&&i&&i.length>1&&c.call(i[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)})),i}),t.exports=r},"9f7f":function(t,e,n){"use strict";var a=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var a=n("23e7"),i=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b199:function(t,e,n){"use strict";n("99af");var a=n("b775"),i="center",o="task";e["a"]={getList:function(){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"get"})},search:function(t,e,n){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/search/").concat(t,"/").concat(e),method:"post",data:n})},findSearch:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/search"),method:"post",data:t})},save:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o),method:"post",data:t})},findById:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(t),method:"get"})},update:function(t,e){return null===t||""===t?this.save(e):Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(t),method:"put",data:e})},deleteById:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/").concat(t),method:"delete"})},executeTask:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/execute/").concat(t),method:"get"})},executeCheck:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/execute/check/").concat(t),method:"get"})},stopTask:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/stop/").concat(t),method:"get"})},repeatTask:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/repeat/").concat(t),method:"get"})},stopScheduleTask:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/schedule/").concat(t),method:"delete"})},getTaskStatus:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/status/").concat(t),method:"get"})},deleteTaskCache:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/cache/").concat(t),method:"delete"})},deleteAllByIds:function(t){return Object(a["a"])({url:"/".concat(i,"/").concat(o,"/deleteids"),method:"post",data:t})}}},bb2f:function(t,e,n){var a=n("d039");t.exports=!a((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),i=n("d039"),o=n("b622"),c=n("9263"),r=n("9112"),l=o("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=o("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),g=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=o(t),p=!i((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),m=p&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!p||!m||"replace"===t&&(!s||!u||f)||"split"===t&&!g){var v=/./[h],b=n(h,""[t],(function(t,e,n,a,i){return e.exec===c?p&&!i?{done:!0,value:v.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=b[0],y=b[1];a(String.prototype,t,x),a(RegExp.prototype,h,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}d&&r(RegExp.prototype[h],"sham",!0)}},f183:function(t,e,n){var a=n("d012"),i=n("861d"),o=n("5135"),c=n("9bf2").f,r=n("90e3"),l=n("bb2f"),s=r("meta"),u=0,d=Object.isExtensible||function(){return!0},f=function(t){c(t,s,{value:{objectID:"O"+ ++u,weakData:{}}})},g=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,s)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[s].objectID},h=function(t,e){if(!o(t,s)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[s].weakData},p=function(t){return l&&m.REQUIRED&&d(t)&&!o(t,s)&&f(t),t},m=t.exports={REQUIRED:!1,fastKey:g,getWeakData:h,onFreeze:p};a[s]=!0}}]);