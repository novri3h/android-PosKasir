!function(){"use strict";function a(a,b,c){function d(){var a=new Date,b=(a.getDate(),a.getMonth()+1),c=a.getFullYear();return 10>b&&(b="0"+b),a=b+"/"+c}function e(){g.reportLoading=!0,g.chartSellReload=!1,$.ajax({context:b,type:"POST",url:h+"report_month/",dataType:"json",data:{date:g.todayMonthYear},success:function(a){f(a)},complete:function(){g.reportLoading=!1,g.dateOnEdit=!1,g.$apply()},error:function(){g.reportLoading=!1,g.dateOnEdit=!1,g.$apply()}})}function f(a){var b=[],c=[],d=[];a.report_sell_chart_points&&(b=a.report_sell_chart_points,angular.forEach(a.report_sell_chart_points,function(a){var b=[a[0],a[0]];d.push(b);var e=[a[0],"0"];c.push(e)})),a.report_rsell_chart_points&&angular.forEach(a.report_rsell_chart_points,function(a){var e=[a[0],a[0]],f=_.findIndex(g.chart_ticks,function(a){return a[0]==e[0]});-1===f?d.push(e):d[f]=e;var h=[a[0],a[1]],i=_.findIndex(c,function(a){return a[0]==h[0]});if(-1===i){c.push(h);var j=[a[0],"0"];b.push(j)}else c[i]=h}),b.length&&c.length&&d.length?(g.chart_month.report_sell_chart_points=b,g.chart_month.report_rsell_chart_points=c,g.chart_month.ticks=d):(g.chart_month.report_sell_chart_points=[["01","0"]],g.chart_month.report_rsell_chart_points=[["01","0"]],g.chart_month.ticks=[["01","01"]]),g.chartSellReload=!0,a.report_sell_values&&(g.report_sell_values=a.report_sell_values),a.report_sell_profit?g.report_sell_profit=a.report_sell_profit:g.report_sell_profit=0,a.report_sell_total?g.report_sell_total=a.report_sell_total:g.report_sell_total=0,a.report_rsell_values&&(g.report_rsell_values=a.report_rsell_values),a.report_rsell_profit?g.report_rsell_profit=a.report_rsell_profit:g.report_rsell_profit=0,a.report_rsell_total?g.report_rsell_total=a.report_rsell_total:g.report_rsell_total=0,a.report_buy_values&&(g.report_buy_values=a.report_buy_values),a.report_buy_total?g.report_buy_total=a.report_buy_total:g.report_buy_total=0,a.report_rbuy_values&&(g.report_rbuy_values=a.report_rbuy_values),a.report_rbuy_total?g.report_rbuy_total=a.report_rbuy_total:g.report_rbuy_total=0,a.report_cashflows&&(g.report_cashflows=a.report_cashflows),a.report_cashflow_in?g.report_cashflow_in=a.report_cashflow_in:g.report_cashflow_in=0,a.report_cashflow_out?g.report_cashflow_out=a.report_cashflow_out:g.report_cashflow_out=0,a.report_cashflow_value?g.report_cashflow_value=a.report_cashflow_value:g.report_cashflow_value=0,a.report_cashflow_cashin?g.report_cashflow_cashin=a.report_cashflow_cashin:g.report_cashflow_cashin=0,a.report_cashflow_cashout?g.report_cashflow_cashout=a.report_cashflow_cashout:g.report_cashflow_cashout=0,a.report_profit_neto?g.report_profit_neto=a.report_profit_neto:g.report_profit_neto=0,a.report_operator_cashflows&&(g.report_operator_cashflows=a.report_operator_cashflows),a.report_supplier_ratings&&(g.report_supplier_ratings=a.report_supplier_ratings),a.report_customer_ratings&&(g.report_customer_ratings=a.report_customer_ratings),a.report_product_ratings&&(g.report_product_ratings=a.report_product_ratings),g.transaction_profit=g.report_sell_profit-g.report_rsell_profit,g.transaction_total=g.report_sell_total-g.report_rsell_total,g.$apply()}var g=b,h=a.api.url_report;g.chartSellReload=!1,g.dateOnEdit=!1,g.todayMonthYear=d(),g.$watch("todayMonthYear",function(a,b){(void 0!==a||null!==a)&&b!=a&&g.dateOnEdit&&e()},!0),g.chart_month={report_sell_chart_points:[],report_rsell_chart_points:[],ticks:[]},angular.isDefined(c.chart_month)?g.chart_month=c.chart_month:c.chart_month=g.chart_month,b.$watch("chart_month",function(){c.chart_month=g.chart_month},!0),g.reportLoading=!1,g.report_sell_values=[],g.report_sell_profit=0,g.report_sell_total=0,g.report_rsell_values=[],g.report_rsell_profit=0,g.report_rsell_total=0,g.report_buy_values=[],g.report_buy_total=0,g.report_rbuy_values=[],g.report_rbuy_total=0,g.report_cashflows=[],g.report_cashflow_in=0,g.report_cashflow_out=0,g.report_cashflow_value=0,g.report_cashflow_cashin=0,g.report_cashflow_cashout=0,g.report_profit_neto=0,g.report_operator_cashflows=[],g.report_supplier_ratings=[],g.report_customer_ratings=[],g.report_product_ratings=[],g.transaction_profit=0,g.transaction_total=0,e()}angular.module("app",["datetimepicker"]).controller("ReportmonthCtrl",a),a.$inject=["$rootScope","$scope","$localStorage"]}();