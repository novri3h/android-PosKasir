!function(){"use strict";function uiJp(uiJpConfig,MODULE_CONFIG,uiLoad,$timeout){function compile(tElm,tAttrs){function link(scope,elm,attrs){function getOptions(){var linkOptions=[];return attrs.uiOptions?(linkOptions=eval("["+attrs.uiOptions+"]"),angular.isObject(options)&&angular.isObject(linkOptions[0])&&(linkOptions[0]=angular.extend({},options,linkOptions[0]))):options&&(linkOptions=[options]),linkOptions}function callPlugin(){$timeout(function(){$(elm)[attrs.uiJp].apply($(elm),getOptions())},0,!1)}function refresh(){attrs.uiRefresh&&scope.$watch(attrs.uiRefresh,function(a,b){a!=b&&callPlugin()})}function reload(){scope.$watch(attrs.uiReload,function(a,b){a!=b&&1==a&&callPlugin()})}attrs.ngModel&&elm.is("select,input,textarea")&&elm.bind("change",function(){elm.trigger("input")});var jp=!1;angular.forEach(MODULE_CONFIG,function(a){a.name==attrs.uiJp&&(jp=a.files)}),jp?uiLoad.load(jp).then(function(){callPlugin(),refresh(),reload()})["catch"](function(){}):(callPlugin(),refresh())}var options=uiJpConfig&&uiJpConfig[tAttrs.uiJp],link=link;return link}var directive={restrict:"A",compile:compile};return directive}angular.module("ui.jp",["ui.load"]).value("uiJpConfig",{}).directive("uiJp",uiJp),uiJp.$inject=["uiJpConfig","MODULE_CONFIG","uiLoad","$timeout"]}();