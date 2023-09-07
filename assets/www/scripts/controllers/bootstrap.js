!function(){"use strict";function a(a){var b=a;b.oneAtATime=!0,b.groups=[{title:"Accordion group header - #1",content:"Dynamic group body - #1"},{title:"Accordion group header - #2",content:"Dynamic group body - #2"}],b.items=["Item 1","Item 2","Item 3"],a.addItem=function(){var a=b.items.length+1;b.items.push("Item "+a)},b.status={isFirstOpen:!0,isFirstDisabled:!1}}function b(a){var b=a;b.alerts=[{type:"danger",msg:"Oh snap! Change a few things up and try submitting again."},{type:"success",msg:"Well done! You successfully read this important alert message."}],b.addAlert=function(){b.alerts.push({msg:"Another alert!"})},b.closeAlert=function(a){b.alerts.splice(a,1)}}function c(a){var b=a;b.singleModel=1,b.radioModel="Middle",b.checkModel={left:!1,middle:!0,right:!1},b.checkResults=[],b.$watchCollection("checkModel",function(){b.checkResults=[],angular.forEach(b.checkModel,function(a,c){a&&b.checkResults.push(c)})})}function d(a){var b=a;b.myInterval=5e3,b.noWrapSlides=!1;var c=b.slides=[];a.addSlide=function(){c.push({image:"../assets/images/c"+c.length+".jpg",text:["Carousel text #0","Carousel text #1","Carousel text #2","Carousel text #3"][c.length%4]})};for(var d=0;4>d;d++)b.addSlide()}function e(a){var b=a;b.items=["The first choice!","And another choice for you.","but wait! A third!"],b.status={isopen:!1},b.toggled=function(a){},b.toggleDropdown=function(a){a.preventDefault(),a.stopPropagation(),b.status.isopen=!b.status.isopen}}function f(a,b,c){a.items=c,a.selected={item:a.items[0]},a.ok=function(){b.close(a.selected.item)},a.cancel=function(){b.dismiss("cancel")}}function g(a,b,c){a.items=["item1","item2","item3"],a.open=function(d){var e=b.open({templateUrl:"myModalContent.html",controller:"ModalInstanceCtl",size:d,resolve:{items:function(){return a.items}}});e.result.then(function(b){a.selected=b},function(){c.info("Modal dismissed at: "+new Date)})}}function h(a){a.totalItems=64,a.currentPage=4,a.setPage=function(b){a.currentPage=b},a.pageChanged=function(){},a.maxSize=5,a.bigTotalItems=175,a.bigCurrentPage=1}function i(a){a.dynamicPopover="Hello, World!",a.dynamicPopoverTitle="Title"}function j(a){a.max=200,a.random=function(){var b,c=Math.floor(100*Math.random()+1);b=25>c?"success":50>c?"info":75>c?"warning":"danger",a.showWarning="danger"===b||"warning"===b,a.dynamic=c,a.type=b},a.random(),a.randomStacked=function(){a.stacked=[];for(var b=["success","info","warning","danger"],c=0,d=Math.floor(4*Math.random()+1);d>c;c++){var e=Math.floor(4*Math.random());a.stacked.push({value:Math.floor(30*Math.random()+1),type:b[e]})}},a.randomStacked()}function k(a){a.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1"},{title:"Dynamic Title 2",content:"Dynamic content 2",disabled:!0}]}function l(a){a.rate=7,a.max=10,a.isReadonly=!1,a.hoveringOver=function(b){a.overStar=b,a.percent=100*(b/a.max)}}function m(a){a.dynamicTooltip="Hello, World!",a.dynamicTooltipText="dynamic",a.htmlTooltip="I've been made <b>bold</b>!"}function n(a,b){a.selected=void 0,a.states=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],a.getLocation=function(a){return b.get("http://maps.googleapis.com/maps/api/geocode/json",{params:{address:a,sensor:!1}}).then(function(a){var b=[];return angular.forEach(a.data.results,function(a){b.push(a.formatted_address)}),b})}}function o(a){a.today=function(){a.dt=new Date},a.today(),a.clear=function(){a.dt=null},a.disabled=function(a,b){return"day"===b&&(0===a.getDay()||6===a.getDay())},a.toggleMin=function(){a.minDate=a.minDate?null:new Date},a.toggleMin(),a.open=function(b){b.preventDefault(),b.stopPropagation(),a.opened=!0},a.dateOptions={formatYear:"yy",startingDay:1,"class":"datepicker"},a.initDate=new Date("2016-15-20"),a.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],a.format=a.formats[0]}function p(a){a.mytime=new Date,a.hstep=1,a.mstep=15,a.options={hstep:[1,2,3],mstep:[1,5,10,15,25,30]},a.ismeridian=!0,a.toggleMode=function(){a.ismeridian=!a.ismeridian},a.update=function(){var b=new Date;b.setHours(14),b.setMinutes(0),a.mytime=b},a.changed=function(){},a.clear=function(){a.mytime=null}}angular.module("app").controller("AccordionCtl",a).controller("AlertCtl",b).controller("ButtonsCtl",c).controller("CarouselCtl",d).controller("DropdownCtl",e).controller("ModalInstanceCtl",f).controller("ModalCtl",g).controller("PaginationCtl",h).controller("PopoverCtl",i).controller("ProgressCtl",j).controller("TabsCtl",k).controller("RatingCtl",l).controller("TabsCtl",k).controller("TooltipCtl",m).controller("TypeaheadCtl",n).controller("DatepickerCtl",o).controller("TimepickerCtl",p),f.$inject=["$scope","$uibModalInstance","items"],g.$inject=["$scope","$uibModal","$log"],n.$inject=["$scope","$http"]}();