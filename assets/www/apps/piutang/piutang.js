!function(){"use strict";function a(a,b,c,d){function e(){return Math.floor((new Date).getTime()/1e3)}function f(a){a=a||"";var b=_.random(100,999);b+="";var c=e();c="M"+c;var d=c.slice(-5),f=_.uniqueId(a);return f+b+d}function g(){var a=new Date,b=a.getDate(),c=a.getMonth()+1,d=a.getFullYear();return 10>b&&(b="0"+b),10>c&&(c="0"+c),a=b+"/"+c+"/"+d}function h(a){var b=".",c=",",d="";a+="",a=a.replace(new RegExp(",","g"),"");for(var e=a.split(b),f=e[0].split("").reverse(),g=Array(),h=0;h<f.length;h++)g[g.length]=h%3===2&&h<f.length-1?c+f[h]:f[h];var i=g.reverse().join("");return a.indexOf(b)>=0&&parseInt(e[1])&&(i+=b+e[1]),d=i}function i(){H.customerLoading=!0,$.ajax({context:b,type:"GET",url:F+"customer_list/",dataType:"json",data:{last_count:H.customers.length},success:function(a){a.customers&&a.customers.forEach(function(a){if(H.customers.length){var b=_.findIndex(H.customers,function(b){return b.customer_uxid==a.customer_uxid});-1===b?H.customers.push(a):H.customers[b]=a}else H.customers.push(a)}),H.customers.length?H.customerEmpty=!1:H.customerEmpty=!0,H.$apply()},complete:function(){H.customerLoading=!1,H.$apply()},error:function(){H.customerLoading=!1,H.$apply()}})}function j(){H.customerLoading=!0,$.ajax({context:b,type:"GET",url:F+"customer_search/",dataType:"json",data:{last_count:H.customers.length,search:H.customerSearch},success:function(a){a.customers&&a.customers.forEach(function(a){if(H.customers.length){var b=_.findIndex(H.customers,function(b){return b.customer_uxid==a.customer_uxid});-1===b?H.customers.push(a):H.customers[b]=a}else H.customers.push(a)}),H.customers.length?H.customerEmpty=!1:H.customerEmpty=!0,H.$apply()},complete:function(){H.customerLoading=!1,H.$apply()},error:function(){H.customerLoading=!1,H.$apply()}})}function k(){H.piutangSearch="",""==H.customerUxidSelected?u():(H.customerUxidSelected="",angular.forEach(H.customers,function(a){a.selected=!1}))}function l(a){angular.forEach(H.customers,function(a){a.selected=!1}),H.customer=a,H.customer.selected=!0,H.piutangSearch="",H.customerUxidSelected=a.customer_uxid}function m(){H.customerEmpty=!1,H.customerSearch.length?(H.customers=[],j()):(H.customers=[],i())}function n(){H.customerEmpty=!1,H.customerSearch.length?j():i()}function o(){if(H.cashboxs=[],H.customerUxidSelected.length&&H.customers.length){var a=_.findIndex(H.customers,function(a){return a.customer_uxid==H.customerUxidSelected});a>=0&&(H.piutangCreateObj.piutang_date_start=g(),H.piutangCreateObj.piutang_tempo_day=30,H.piutangCreateObj.piutang_customer_uxid=H.customers[a].customer_uxid,H.piutangCreateObj.piutang_customer_realname=H.customers[a].customer_realname,H.piutangCreateObj.piutang_detail="Piutang "+H.customers[a].customer_realname,H.piutangLoading=!0,$.ajax({context:b,type:"GET",url:G+"cashbox_list/",dataType:"json",success:function(a){a.cashboxs&&(a.cashboxs.forEach(function(a){if(H.cashboxs.length){var b=_.findIndex(H.cashboxs,function(b){return b.cashbox_uxid==a.cashbox_uxid});-1===b?H.cashboxs.push(a):H.cashboxs[b]=a}else H.cashboxs.push(a)}),H.optionCashboxSelected=H.cashboxs[0],H.piutangCreateObj.piutang_cashbox_uxid=H.optionCashboxSelected.cashbox_uxid,H.piutangCreateForm=!0),H.$apply()},complete:function(){H.piutangLoading=!1,H.$apply()},error:function(){H.piutangLoading=!1,H.$apply()}}))}}function p(){H.piutangSaveLoading||(H.piutangCreateObj.piutang_token=H.piutang_token,H.piutangCreateObj.piutang_cashbox_uxid=H.optionCashboxSelected.cashbox_uxid,H.piutangCreateObj.piutang_cashbox_name=H.optionCashboxSelected.cashbox_name,H.piutangSaveLoading=!0,$.ajax({context:b,type:"POST",url:E+"piutang_save/",dataType:"json",data:H.piutangCreateObj,success:function(a){a.message&&(a.status?"OK"==a.status?d.pop("success","Info",a.message):d.pop("error","Error",a.message):d.pop("info","Message",a.message),H.$apply()),a.status&&"OK"==a.status&&(H.piutang_token=f("PIU"),u(),H.piutangCreateForm=!1,H.$apply())},complete:function(){H.piutangSaveLoading=!1,H.$apply()},error:function(){H.piutangSaveLoading=!1,H.$apply()}}))}function q(){H.piutangLoading=!0,$.ajax({context:b,type:"GET",url:E+"piutang_list/",dataType:"json",data:{last_count:H.piutangs.length},success:function(a){H.piutangLoading=!1,a.total_nilai?H.total_nilai=a.total_nilai:H.total_nilai=0,a.total_bayar?H.total_bayar=a.total_bayar:H.total_bayar=0,a.total_saldo?H.total_saldo=a.total_saldo:H.total_saldo=0,a.piutangs&&a.piutangs.forEach(function(a){if(H.piutangs.length){var b=_.findIndex(H.piutangs,function(b){return b.piutang_uxid==a.piutang_uxid});-1===b?H.piutangs.push(a):H.piutangs[b]=a}else H.piutangs.push(a)}),H.piutangs.length?H.piutangEmpty=!1:H.piutangEmpty=!0,H.$apply()},complete:function(){H.piutangLoading=!1,H.$apply()},error:function(){H.piutangLoading=!1,H.$apply()}})}function r(){H.piutangLoading=!0,$.ajax({context:b,type:"GET",url:E+"piutang_list/",dataType:"json",data:{last_count:H.piutangs.length,customer_uxid:H.customerUxidSelected},success:function(a){H.piutangLoading=!1,a.total_nilai?H.total_nilai=a.total_nilai:H.total_nilai=0,a.total_bayar?H.total_bayar=a.total_bayar:H.total_bayar=0,a.total_saldo?H.total_saldo=a.total_saldo:H.total_saldo=0,a.piutangs&&a.piutangs.forEach(function(a){if(H.piutangs.length){var b=_.findIndex(H.piutangs,function(b){return b.piutang_uxid==a.piutang_uxid});-1===b?H.piutangs.push(a):H.piutangs[b]=a}else H.piutangs.push(a)}),H.piutangs.length?H.piutangEmpty=!1:H.piutangEmpty=!0,H.$apply()},complete:function(){H.piutangLoading=!1,H.$apply()},error:function(){H.piutangLoading=!1,H.$apply()}})}function s(){H.piutangLoading=!0,$.ajax({context:b,type:"GET",url:E+"piutang_search/",dataType:"json",data:{last_count:H.piutangs.length,search:H.piutangSearch},success:function(a){H.piutangLoading=!1,a.total_nilai?H.total_nilai=a.total_nilai:H.total_nilai=0,a.total_bayar?H.total_bayar=a.total_bayar:H.total_bayar=0,a.total_saldo?H.total_saldo=a.total_saldo:H.total_saldo=0,a.piutangs&&a.piutangs.forEach(function(a){if(H.piutangs.length){var b=_.findIndex(H.piutangs,function(b){return b.piutang_uxid==a.piutang_uxid});-1===b?H.piutangs.push(a):H.piutangs[b]=a}else H.piutangs.push(a)}),H.piutangs.length?H.piutangEmpty=!1:H.piutangEmpty=!0,H.$apply()},complete:function(){H.piutangLoading=!1,H.$apply()},error:function(){H.piutangLoading=!1,H.$apply()}})}function t(){H.piutangLoading=!0,$.ajax({context:b,type:"GET",url:E+"piutang_search/",dataType:"json",data:{last_count:H.piutangs.length,customer_uxid:H.customerUxidSelected,search:H.piutangSearch},success:function(a){H.piutangLoading=!1,a.total_nilai?H.total_nilai=a.total_nilai:H.total_nilai=0,a.total_bayar?H.total_bayar=a.total_bayar:H.total_bayar=0,a.total_saldo?H.total_saldo=a.total_saldo:H.total_saldo=0,a.piutangs&&a.piutangs.forEach(function(a){if(H.piutangs.length){var b=_.findIndex(H.piutangs,function(b){return b.piutang_uxid==a.piutang_uxid});-1===b?H.piutangs.push(a):H.piutangs[b]=a}else H.piutangs.push(a)}),H.piutangs.length?H.piutangEmpty=!1:H.piutangEmpty=!0,H.$apply()},complete:function(){H.piutangLoading=!1,H.$apply()},error:function(){H.piutangLoading=!1,H.$apply()}})}function u(){H.piutangEmpty=!1,(void 0!==H.customerUxidSelected||null!==H.customerUxidSelected)&&(H.customerUxidSelected.length?H.piutangSearch.length?(H.piutangs=[],t()):(H.piutangs=[],r()):H.piutangSearch.length?(H.piutangs=[],s()):(H.piutangs=[],q()))}function v(){H.piutangEmpty=!1,(void 0!==H.customerUxidSelected||null!==H.customerUxidSelected)&&(H.customerUxidSelected.length?H.piutangSearch.length?t():r():H.piutangSearch.length?s():q())}function w(a){angular.forEach(H.piutangs,function(a){a.selected=!1}),H.piutang=a,H.piutang.selected=!0}function x(a){H.piutangDeleteConfirm=!0,H.piutangObjDelete.piutang_uxid=a.piutang_uxid,H.piutangObjDelete.piutang_detail=a.piutang_detail,H.piutangObjDelete.piutang_reference_uxid=a.piutang_reference_uxid}function y(){H.piutangDeleteLoading=!0,$.ajax({context:b,type:"GET",url:E+"piutang_delete/",dataType:"json",data:H.piutangObjDelete,success:function(a){a.message&&(a.status?"OK"==a.status?d.pop("success","Info",a.message):d.pop("error","Error",a.message):d.pop("info","Message",a.message),H.$apply()),a.status&&"OK"==a.status&&(H.piutangs=_.reject(H.piutangs,function(a){return a.piutang_uxid==H.piutangObjDelete.piutang_uxid}),H.piutangDeleteConfirm=!1,H.piutangs.length?H.piutangEmpty=!1:H.piutangEmpty=!0,H.$apply())},complete:function(){H.piutangDeleteLoading=!1,H.$apply()},error:function(){H.piutangDeleteLoading=!1,H.$apply()}})}function z(a){H.bayarLoading=!0,$.ajax({context:b,type:"GET",url:E+"bayar_list/",dataType:"json",data:{piutang_uxid:a},success:function(a){H.bayarLoading=!1,a.bayars&&(H.bayars=a.bayars,H.bayarListForm=!0),H.bayars.length?H.bayarEmpty=!1:H.bayarEmpty=!0,H.$apply()},complete:function(){H.bayarLoading=!1,H.$apply()},error:function(){H.bayarLoading=!1,H.$apply()}})}function A(a){H.cashboxs=[],H.bayarObjCreate.bayar_date=g(),H.bayarObjCreate.bayar_piutang_uxid=a.piutang_uxid,H.bayarObjCreate.bayar_piutang_customer_realname=a.piutang_customer_realname,H.bayarObjCreate.bayar_piutang_saldo=h(a.piutang_saldo),H.bayarObjCreate.bayar_nilai=h(a.piutang_saldo),H.bayarLoading=!0,$.ajax({context:b,type:"GET",url:G+"cashbox_list/",dataType:"json",success:function(a){a.cashboxs&&(a.cashboxs.forEach(function(a){if(H.cashboxs.length){var b=_.findIndex(H.cashboxs,function(b){return b.cashbox_uxid==a.cashbox_uxid});-1===b?H.cashboxs.push(a):H.cashboxs[b]=a}else H.cashboxs.push(a)}),H.optionCashboxSelected=H.cashboxs[0],H.bayarObjCreate.bayar_cashbox_uxid=H.optionCashboxSelected.cashbox_uxid,H.bayarCreateForm=!0),H.$apply()},complete:function(){H.bayarLoading=!1,H.$apply()},error:function(){H.bayarLoading=!1,H.$apply()}})}function B(){H.bayarSaveLoading||(H.bayarObjCreate.bayar_token=H.piutang_bayar_token,H.bayarObjCreate.bayar_cashbox_uxid=H.optionCashboxSelected.cashbox_uxid,H.bayarObjCreate.bayar_cashbox_name=H.optionCashboxSelected.cashbox_name,H.bayarSaveLoading=!0,$.ajax({context:b,type:"POST",url:E+"bayar_save/",dataType:"json",data:H.bayarObjCreate,success:function(a){a.message&&(a.status?"OK"==a.status?d.pop("success","Info",a.message):d.pop("error","Error",a.message):d.pop("info","Message",a.message),H.$apply()),a.status&&"OK"==a.status&&(H.piutang_bayar_token=f("PIUB"),H.bayarCreateForm=!1,u(),z(H.bayarObjCreate.bayar_piutang_uxid),H.$apply())},complete:function(){H.bayarSaveLoading=!1,H.$apply()},error:function(){H.bayarSaveLoading=!1,H.$apply()}}))}function C(a){H.bayarDeleteConfirm=!0,H.bayarObjDelete.bayar_uxid=a.bayar_uxid}function D(){H.bayarDeleteLoading=!0,$.ajax({context:b,type:"GET",url:E+"bayar_delete/",dataType:"json",data:H.bayarObjDelete,success:function(a){a.message&&(a.status?"OK"==a.status?d.pop("success","Info",a.message):d.pop("error","Error",a.message):d.pop("info","Message",a.message),H.$apply()),a.status&&"OK"==a.status&&(H.bayars=_.reject(H.bayars,function(a){return a.bayar_uxid==H.bayarObjDelete.bayar_uxid}),H.bayarDeleteConfirm=!1,H.bayars.length?H.bayarEmpty=!1:H.bayarEmpty=!0,u(),H.$apply())},complete:function(){H.bayarDeleteLoading=!1,H.$apply()},error:function(){H.bayarDeleteLoading=!1,H.$apply()}})}var E=a.api.url_piutang,F=a.api.url_customer,G=a.api.url_cashflow,H=b;H.windowHeight=function(){var a=$(window).height(),b=a/4,c=a-b;return c-80},H.piutangEmpty=!1,H.customerEmpty=!1,H.customerLoading=!1,H.customers=[],H.customerClearSelect=k,H.customerUxidSelected="",H.customerSelect=l,H.customerSearch="",H.customerListLoad=m,H.customerListMoreCall=function(){n()},H.cashboxs=[],H.optionCashboxSelected={cashbox_uxid:"",cashbox_name:""},H.piutang_token=f("PIU"),angular.isDefined(c.piutang_token)?H.piutang_token=c.piutang_token:c.piutang_token=H.piutang_token,H.$watch("piutang_token",function(){c.piutang_token=H.piutang_token},!0),H.piutangCreateObj={piutang_date_start:"",piutang_tempo_day:30,piutang_customer_uxid:"",piutang_customer_realname:"",piutang_cashbox_uxid:"",piutang_cashbox_name:"",piutang_detail:"",piutang_nilai:"",piutang_token:""},H.piutangCreateForm=!1,H.piutangCreate=o,H.piutangSaveLoading=!1,H.piutangSave=p,H.total_nilai=0,H.total_bayar=0,H.total_saldo=0,H.piutangLoading=!1,H.piutangs=[],H.piutangList=q,H.piutangSearch="",H.piutangListLoad=u,H.piutangListMoreCall=function(){v()},H.piutangSelect=w,b.$watch("customerUxidSelected",function(a){(void 0!==a||null!==a)&&u()},!0),H.piutangObjDelete={piutang_uxid:"",piutang_detail:"",piutang_reference_uxid:""},H.piutangDeleteConfirm=!1,H.piutangDelete=x,H.piutangDeleteLoading=!1,H.piutangDeleteYes=y,H.bayarListForm=!1,H.bayarLoading=!1,H.bayars=[],H.bayarList=z,H.piutang_bayar_token=f("PIUB"),angular.isDefined(c.piutang_bayar_token)?H.piutang_bayar_token=c.piutang_bayar_token:c.piutang_bayar_token=H.piutang_bayar_token,H.$watch("piutang_bayar_token",function(){c.piutang_bayar_token=H.piutang_bayar_token},!0),H.bayarObjCreate={bayar_date:"",bayar_piutang_uxid:"",bayar_piutang_customer_realname:"",bayar_piutang_saldo:"",bayar_cashbox_uxid:"",bayar_cashbox_name:"",bayar_nilai:"",bayar_token:""},H.bayarCreateForm=!1,H.bayarCreate=A,H.bayarSaveLoading=!1,H.bayarSave=B,H.bayarObjDelete={bayar_uxid:""},H.bayarDeleteConfirm=!1,H.bayarDelete=C,H.bayarDeleteLoading=!1,H.bayarDeleteYes=D,m()}angular.module("app").controller("PiutangCtrl",a),a.$inject=["$rootScope","$scope","$localStorage","toaster"]}();