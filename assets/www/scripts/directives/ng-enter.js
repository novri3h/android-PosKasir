!function(){"use strict";function a(){return function(a,b,c){b.bind("keydown keypress",function(b){13===b.which&&(a.$apply(function(){a.$eval(c.ngEnter,{event:b})}),b.preventDefault())})}}angular.module("app").directive("ngEnter",a)}();