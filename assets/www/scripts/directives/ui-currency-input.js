!function(){"use strict";function a(){return{restrict:"A",scope:{field:"=ngModel"},link:function(a,b,c){$(b).bind("keyup",function(c){for(var d=b.find("input"),e=(d.val(),a.field);"0"==a.field.charAt(0);)a.field=a.field.substr(1);a.field=a.field.replace(/[^\d.\',']/g,"");var f=a.field.indexOf(".");f>=0&&(a.field=a.field.slice(0,f+3));var g=a.field.split("."),h=g[0],i=g[1];if(h=h.replace(/[^\d]/g,""),h.length>3)for(var j=Math.floor(h.length/3);j>0;){var k=h.indexOf(",");0>k&&(k=h.length),k-3>0&&(h=h.splice(k-3,0,",")),j--}i=void 0===i?"":"."+i,0==h.length&&(h="0"==e?"0":f>=0?"0":"");var l=h+i;a.$apply(function(){a.field=l})})}}}angular.module("app").directive("currencyInput",a)}();