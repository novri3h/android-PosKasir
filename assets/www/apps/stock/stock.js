!function(){"use strict";function a(a,b,c,d){function e(){return Math.floor((new Date).getTime()/1e3)}function f(a){a=a||"";var b=_.random(100,999);b+="";var c=e();c="M"+c;var d=c.slice(-5),f=_.uniqueId(a);return f+b+d}function g(){var a=new Date,b=a.getDate(),c=a.getMonth()+1,d=a.getFullYear();return 10>b&&(b="0"+b),10>c&&(c="0"+c),a=b+"/"+c+"/"+d}function h(){y.categoryLoading=!0,$.ajax({context:b,type:"GET",url:x+"category_list/",dataType:"json",data:{last_count:y.categorys.length},success:function(a){y.categoryLoading=!1,a.categorys&&a.categorys.forEach(function(a){if(y.categorys.length){var b=_.findIndex(y.categorys,function(b){return b.category_uxid==a.category_uxid});-1===b?y.categorys.push(a):y.categorys[b]=a}else y.categorys.push(a)}),y.$apply()},complete:function(){y.categoryLoading=!1,y.$apply()},error:function(){y.categoryLoading=!1,y.$apply()}})}function i(a){angular.forEach(y.categorys,function(a){a.selected=!1}),y.category=a,y.category.selected=!0,y.productSearch="",y.categoryNameSelected=a.category_name}function j(){y.productSearch="",""==y.categoryNameSelected?k():y.categoryNameSelected=""}function k(){y.productEmpty=!1,(void 0!==y.categoryNameSelected||null!==y.categoryNameSelected)&&(y.categoryNameSelected.length?y.productSearch.length?(y.products=[],p()):(y.products=[],n()):y.productSearch.length?(y.products=[],o(),angular.forEach(y.categorys,function(a){a.selected=!1})):(y.products=[],m(),angular.forEach(y.categorys,function(a){a.selected=!1})))}function l(){y.productEmpty=!1,(void 0!==y.categoryNameSelected||null!==y.categoryNameSelected)&&(y.categoryNameSelected.length?y.productSearch.length?p():n():y.productSearch.length?(o(),angular.forEach(y.categorys,function(a){a.selected=!1})):(m(),angular.forEach(y.categorys,function(a){a.selected=!1})))}function m(){y.productLoading=!0,$.ajax({context:b,type:"GET",url:x+"product_stock_list/",dataType:"json",data:{last_count:y.products.length},success:function(a){y.productLoading=!1,a.products&&a.products.forEach(function(a){if(y.products.length){var b=_.findIndex(y.products,function(b){return b.product_uxid==a.product_uxid});-1===b?y.products.push(a):y.products[b]=a}else y.products.push(a)}),y.products.length?y.productEmpty=!1:y.productEmpty=!0,y.$apply()},complete:function(){y.productLoading=!1,y.$apply()},error:function(){y.productLoading=!1,y.$apply()}})}function n(){y.productLoading=!0,$.ajax({context:b,type:"GET",url:x+"product_stock_list/",dataType:"json",data:{last_count:y.products.length,category_name:y.categoryNameSelected},success:function(a){y.productLoading=!1,a.products&&a.products.forEach(function(a){if(y.products.length){var b=_.findIndex(y.products,function(b){return b.product_uxid==a.product_uxid});-1===b?y.products.push(a):y.products[b]=a}else y.products.push(a)}),y.products.length?y.productEmpty=!1:y.productEmpty=!0,y.$apply()},complete:function(){y.productLoading=!1,y.$apply()},error:function(){y.productLoading=!1,y.$apply()}})}function o(){y.productLoading=!0,$.ajax({context:b,type:"GET",url:x+"product_stock_search/",dataType:"json",data:{last_count:y.products.length,search:y.productSearch},success:function(a){y.productLoading=!1,a.products&&a.products.forEach(function(a){if(y.products.length){var b=_.findIndex(y.products,function(b){return b.product_uxid==a.product_uxid});-1===b?y.products.push(a):y.products[b]=a}else y.products.push(a)}),y.products.length?y.productEmpty=!1:y.productEmpty=!0,y.$apply()},complete:function(){y.productLoading=!1,y.$apply()},error:function(){y.productLoading=!1,y.$apply()}})}function p(){y.productLoading=!0,$.ajax({context:b,type:"GET",url:x+"product_stock_search/",dataType:"json",data:{last_count:y.products.length,category_name:y.categoryNameSelected,search:y.productSearch},success:function(a){y.productLoading=!1,a.products&&a.products.forEach(function(a){if(y.products.length){var b=_.findIndex(y.products,function(b){return b.product_uxid==a.product_uxid});-1===b?y.products.push(a):y.products[b]=a}else y.products.push(a)}),y.products.length?y.productEmpty=!1:y.productEmpty=!0,y.$apply()},complete:function(){y.productLoading=!1,y.$apply()},error:function(){y.productLoading=!1,y.$apply()}})}function q(a){angular.forEach(y.products,function(a){a.selected=!1}),y.product=a,y.product.selected=!0}function r(){y.stockPlusLoading||(y.stockObjPlus.stock_token=y.stock_plus_token,y.stockPlusLoading=!0,$.ajax({context:b,type:"POST",url:x+"product_stock_plus_save/",dataType:"json",data:y.stockObjPlus,success:function(a){if(a.message&&(a.status?"OK"==a.status?d.pop("success","Info",a.message):d.pop("error","Error",a.message):d.pop("info","Message",a.message),y.$apply()),a.product){var b=a.product;if(y.products.length){var c=_.findIndex(y.products,function(a){return a.product_uxid==b.product_uxid});c>=0&&(y.products[c]=b)}}a.status&&"OK"==a.status&&(y.stock_plus_token=f("STK_plus"),y.stockFormPlus=!1,y.$apply()),y.$apply()},complete:function(){y.stockPlusLoading=!1,y.$apply()},error:function(){y.stockPlusLoading=!1,y.$apply()}}))}function s(){y.stockMinusLoading||(y.stockObjMinus.stock_token=y.stock_minus_token,y.stockMinusLoading=!0,$.ajax({context:b,type:"POST",url:x+"product_stock_minus_save/",dataType:"json",data:y.stockObjMinus,success:function(a){if(a.message&&(a.status?"OK"==a.status?d.pop("success","Info",a.message):d.pop("error","Error",a.message):d.pop("info","Message",a.message),y.$apply()),a.product){var b=a.product;if(y.products.length){var c=_.findIndex(y.products,function(a){return a.product_uxid==b.product_uxid});c>=0&&(y.products[c]=b)}}a.status&&"OK"==a.status&&(y.stock_minus_token=f("STK_minus"),y.stockFormMinus=!1,y.$apply())},complete:function(){y.stockMinusLoading=!1,y.$apply()},error:function(){y.stockMinusLoading=!1,y.$apply()}}))}function t(){y.cartLoading=!0,$.ajax({context:b,type:"GET",url:x+"product_stock_history/",dataType:"json",data:{product_uxid:y.product.product_uxid,last_count:y.carts.length},success:function(a){y.cartLoading=!1,a.carts&&a.carts.forEach(function(a){if(y.carts.length){var b=_.findIndex(y.carts,function(b){return b.cart_uxid==a.cart_uxid});-1===b?y.carts.push(a):y.carts[b]=a}else y.carts.push(a)}),y.carts.length?y.cartEmpty=!1:y.cartEmpty=!0,y.$apply()},complete:function(){y.cartLoading=!1,y.$apply()},error:function(){y.cartLoading=!1,y.$apply()}})}function u(){y.carts=[],t()}function v(){t()}function w(a){angular.forEach(y.carts,function(a){a.selected=!1}),y.cart=a,y.cart.selected=!0}var x=a.api.url_product,y=b;y.windowHeight=function(){var a=$(window).height(),b=a/4,c=a-b;return c-80},y.productEmpty=!1,y.categoryLoading=!1,y.categorys=[],y.categoryListMoreCall=function(){h()},y.categoryNameSelected="",y.categorySelect=i,y.categoryClearSelect=j,b.$watch("categoryNameSelected",function(a){(void 0!==a||null!==a)&&k()},!0),y.productListLoad=k,y.productListMoreCall=function(){l()},y.productLoading=!1,y.products=[],y.productList=m,y.productSearch="",y.productSelect=q,y.stock_plus_token=f("STK_plus"),angular.isDefined(c.stock_plus_token)?y.stock_plus_token=c.stock_plus_token:c.stock_plus_token=y.stock_plus_token,y.$watch("stock_plus_token",function(){c.stock_plus_token=y.stock_plus_token},!0),y.stockObjPlus={product_uxid:"",product_name:"",product_code:"",product_unit:"PCS",stock_date:"",stock_value:"",stock_token:""},y.stockFormPlus=!1,y.stockPlus=function(a){y.stockObjPlus.product_uxid=a.product_uxid,y.stockObjPlus.product_name=a.product_name,y.stockObjPlus.product_code=a.product_code,y.stockObjPlus.product_unit=a.product_unit,y.stockObjPlus.stock_date=g(),y.stockObjPlus.stock_value="",y.stockFormPlus=!0},y.stockPlusLoading=!1,y.stockPlusSave=r,y.stock_minus_token=f("STK_minus"),angular.isDefined(c.stock_minus_token)?y.stock_minus_token=c.stock_minus_token:c.stock_minus_token=y.stock_minus_token,y.$watch("stock_minus_token",function(){c.stock_minus_token=y.stock_minus_token},!0),y.stockObjMinus={product_uxid:"",product_name:"",product_code:"",product_unit:"PCS",stock_date:"",stock_value:"",stock_token:""},y.stockFormMinus=!1,y.stockMinus=function(a){y.stockObjMinus.product_uxid=a.product_uxid,y.stockObjMinus.product_name=a.product_name,y.stockObjMinus.product_code=a.product_code,y.stockObjMinus.product_unit=a.product_unit,y.stockObjMinus.stock_date=g(),y.stockObjMinus.stock_value="",y.stockFormMinus=!0},y.stockMinusLoading=!1,y.stockMinusSave=s,y.product=!1,y.stockHistoryForm=!1,y.stockHistory=function(a){y.product=a,u(),y.stockHistoryForm=!0},y.cartLoading=!1,y.carts=[],y.cartList=t,y.stockHistoryMore=function(){v()},y.cartSelect=w,h()}angular.module("app").controller("StockCtrl",a),a.$inject=["$rootScope","$scope","$localStorage","toaster"]}();