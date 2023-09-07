angular.module("summernote",[]).controller("SummernoteController",["$scope","$attrs","$timeout",function(a,b,c){"use strict";var d,e=a.summernoteConfig||{};if(angular.isDefined(b.height)&&(e.height=b.height),angular.isDefined(b.focus)&&(e.focus=!0),angular.isDefined(b.airmode)&&(e.airMode=!0),angular.isDefined(b.lang)){if(!angular.isDefined($.summernote.lang[b.lang]))throw new Error('"'+b.lang+'" lang file must be exist.');e.lang=b.lang}e.onInit=a.init,e.onEnter=function(b){a.enter({evt:b})},e.onFocus=function(b){a.focus({evt:b})},e.onPaste=function(b){a.paste({evt:b})},e.onKeyup=function(b){a.keyup({evt:b})},e.onKeydown=function(b){a.keydown({evt:b})},angular.isDefined(b.onImageUpload)&&(e.onImageUpload=function(b){a.imageUpload({files:b,editable:a.editable})}),this.activate=function(f,g,h){var i=function(){var a=g.code();g.summernote("isEmpty")&&(a=""),h&&h.$viewValue!==a&&c(function(){h.$setViewValue(a)},0)};e.onChange=function(b){g.summernote("isEmpty")&&(b=""),i(),a.change({contents:b,editable:a.editable})},e.onBlur=function(b){!e.airMode&&g.blur(),a.blur({evt:b})},angular.isDefined(b.onToolbarClick)&&g.on("summernote.toolbar.click",function(b){a.toolbarClick({evt:b})}),g.summernote(e);var j,k=g.next(".note-editor");k.find(".note-toolbar").click(function(){i(),k.hasClass("codeview")?(k.on("keyup",i),h&&(j=f.$watch(function(){return h.$modelValue},function(a){k.find(".note-codable").val(a)}))):(k.off("keyup",i),angular.isFunction(j)&&j())}),h&&(h.$render=function(){g.code(h.$viewValue||"")}),angular.isDefined(b.editable)&&(a.editable=k.find(".note-editable")),angular.isDefined(b.editor)&&(a.editor=g),d=g,g.on("$destroy",function(){g.destroy(),a.summernoteDestroyed=!0})},a.$on("$destroy",function(){a.summernoteDestroyed||d.destroy()})}]).directive("summernote",[function(){"use strict";return{restrict:"EA",transclude:!0,replace:!0,require:["summernote","^?ngModel"],controller:"SummernoteController",scope:{summernoteConfig:"=config",editable:"=",editor:"=",init:"&onInit",enter:"&onEnter",focus:"&onFocus",blur:"&onBlur",paste:"&onPaste",keyup:"&onKeyup",keydown:"&onKeydown",change:"&onChange",toolbarClick:"&onToolbarClick",imageUpload:"&onImageUpload"},template:'<div class="summernote"></div>',link:function(a,b,c,d){var e=d[0],f=d[1];e.activate(a,b,f)}}}]);