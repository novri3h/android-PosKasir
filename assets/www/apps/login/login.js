!function(){"use strict";function a(a,b,c,d){var e=a,f=b;f.loginPassword="",f.loginLoading=!1,f.loginSave=function(){f.loginPassword&&(f.loginLoading=!0,$.ajax({context:e,type:"POST",url:e.api.url_account+"account_login/",dataType:"json",data:{password:f.loginPassword},success:function(a){a.message&&(a.status?"OK"==a.status?d.pop("success","Info",a.message):d.pop("error","Error",a.message):d.pop("info","Message",a.message),f.$apply()),a.login_detail&&(e.login_detail=a.login_detail,e.$apply(),c.go("app.welcome")),f.loginLoading=!1,f.$apply()},complete:function(){f.loginLoading=!1,f.$apply()},error:function(){f.loginLoading=!1,f.$apply()}}))}}angular.module("app").controller("LoginCtrl",a),a.$inject=["$rootScope","$scope","$state","toaster"]}();