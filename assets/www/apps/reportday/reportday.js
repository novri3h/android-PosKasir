!function(){"use strict";function a(a,b){function c(){var a=new Date,b=a.getDate(),c=a.getMonth()+1,d=a.getFullYear();return 10>b&&(b="0"+b),10>c&&(c="0"+c),a=b+"/"+c+"/"+d}function d(){f.reportLoading=!0,$.ajax({context:b,type:"POST",url:g+"report_day/",dataType:"json",data:{date:f.todayDate},success:function(a){e(a)},complete:function(){f.reportLoading=!1,f.dateOnEdit=!1,f.$apply()},error:function(){f.reportLoading=!1,f.dateOnEdit=!1,f.$apply()}})}function e(a){a.report_transaction_sell_day&&(f.report_transaction_sell_day=a.report_transaction_sell_day),a.report_cashflows&&(f.report_cashflows=a.report_cashflows),a.report_cashflow_in?f.report_cashflow_in=a.report_cashflow_in:f.report_cashflow_in=0,a.report_cashflow_out?f.report_cashflow_out=a.report_cashflow_out:f.report_cashflow_out=0,a.report_cashflow_value?f.report_cashflow_value=a.report_cashflow_value:f.report_cashflow_value=0,a.report_cashflow_cashin?f.report_cashflow_cashin=a.report_cashflow_cashin:f.report_cashflow_cashin=0,a.report_cashflow_cashout?f.report_cashflow_cashout=a.report_cashflow_cashout:f.report_cashflow_cashout=0,a.report_profit_neto?f.report_profit_neto=a.report_profit_neto:f.report_profit_neto=0,a.report_operator_cashflows&&(f.report_operator_cashflows=a.report_operator_cashflows),a.report_product_ratings&&(f.report_product_ratings=a.report_product_ratings),f.$apply()}var f=b,g=a.api.url_report;f.dateOnEdit=!1,f.todayDate=c(),f.$watch("todayDate",function(a,b){(void 0!==a||null!==a)&&b!=a&&f.dateOnEdit&&d()},!0),f.reportLoading=!1,f.report_transaction_sell_day={transaction_profit:0,transaction_total:0},f.report_cashflows=[],f.report_cashflow_in=0,f.report_cashflow_out=0,f.report_cashflow_value=0,f.report_cashflow_cashin=0,f.report_cashflow_cashout=0,f.report_profit_neto=0,f.report_operator_cashflows=[],f.report_product_ratings=[],d()}angular.module("app",["datetimepicker"]).controller("ReportdayCtrl",a),a.$inject=["$rootScope","$scope"]}();