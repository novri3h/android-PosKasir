!function(){"use strict";function a(){return{require:"?ngModel",link:function(a,b,c,d){b.mask("99/99/9999",{completed:function(){d.$setViewValue(Date.parse(this.val(),"dd/MM/yyyy")),a.$apply()}})}}}angular.module("app").directive("uiDate",a)}();