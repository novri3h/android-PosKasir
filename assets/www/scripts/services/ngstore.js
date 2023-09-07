!function(){"use strict";function a(){return{$get:["ngStoreFactory",function(a){return{model:function(b){var c=new a(b);return c}}}]}}function b(){function a(a,b){if(!this.localStorage)throw"localStorage: Environment does not support localStorage.";this.name=a,this.serializer=b||{serialize:function(a){return d(a)?JSON.stringify(a):a},deserialize:function(a){return a&&JSON.parse(a)}};var c=this.localStorage().getItem(this.name);this.records=c&&c.split(",")||[]}function b(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function c(){return b()+b()+"-"+b()+"-"+b()+"-"+b()+"-"+b()+b()+b()}function d(a){return a===Object(a)}function e(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1}return a.prototype={save:function(){this.localStorage().setItem(this.name,this.records.join(","))},create:function(a){return a.id||0===a.id||(a.id=c(),a.set(a.idAttribute,a.id)),this.localStorage().setItem(this._itemName(a.id),this.serializer.serialize(a)),this.records.push(a.id.toString()),this.save(),this.find(a)},update:function(a){this.localStorage().setItem(this._itemName(a.id),this.serializer.serialize(a));var b=a.id.toString();return e(this.records,b)||(this.records.push(b),this.save()),this.find(a)},find:function(a){return this.serializer.deserialize(this.localStorage().getItem(this._itemName(a.id)))},findAll:function(){for(var a,b,c=[],d=0;d<this.records.length;d++)a=this.records[d],b=this.serializer.deserialize(this.localStorage().getItem(this._itemName(a))),null!=b&&c.push(b);return c},destroy:function(a){this.localStorage().removeItem(this._itemName(a.id));for(var b=a.id.toString(),c=0;c<this.records.length;c++)this.records[c]===b&&this.records.splice(c,1);return this.save(),a},nextId:function(){return 0==this.records.length?1:Number(this.records[this.records.length-1])+1},localStorage:function(){return localStorage},_clear:function(){var a=this.localStorage(),b=new RegExp("^"+this.name+"-");a.removeItem(this.name);for(var c in a)b.test(c)&&a.removeItem(c);this.records.length=0},_storageSize:function(){return this.localStorage().length},_itemName:function(a){return this.name+"-"+a}},a}angular.module("ngStore",[]).provider("ngStore",a).factory("ngStoreFactory",b)}();