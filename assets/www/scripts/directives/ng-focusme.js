!function(){"use strict";function a(a,b){return{link:function(c,d,e){var f=b(e.focusMe);c.$watch(f,function(b){b===!0&&a(function(){d[0].focus(),d[0].select()})})}}}angular.module("app").directive("focusMe",a),a.$inject=["$timeout","$parse"]}();