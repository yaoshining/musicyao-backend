'use strict';

/**
 * @ngdoc function
 * @name musicyaoBackendApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the musicyaoBackendApp
 */
define(['app/app','css!styles/sidebar','directives/navs'],function(app){
	app.register.controller('SidebarCtrl', function ($scope) {
		var index = 0;
		$scope.navs = [{
			name: "Dashbord",
			url: "#",
			iconStyle: "fa-tachometer"
		},{
			name: "Tracks",
			url: "",
			iconStyle: "fa-desktop",
			children: [{
				name: "Layouts",
				url: "",
				children: [1,2,3]
			},{
				name: "Typography",
				url: "#/Typography"
			},{
				name: "Elements",
				url: "#/elements"
			}]
		},{
			name: "Tables",
			url: "#/tables",
			iconStyle: "fa-list"
		},{
			name: "Forms",
			url: "#/forms",
			iconStyle: "fa-pencil-square-o"
		},{
			name: "Calendar",
			url: "#/calendar",
			iconStyle: "fa-calendar"
		},{
			name: "Gallery",
			url: "#/gallery",
			iconStyle: "fa-picture-o"
		},{
			name: "Other pages",
			url: "#/others",
			iconStyle: "fa-file-o"
		}];
		$scope.isSelected = function($index){
			return $index === index;
		}
		$scope.select = function($index){
			var nav = $scope.navs[$index];
			var children = nav.children;
			if(children && children.length>0){
				nav.expand = !nav.expand;
			}else {
				index = $index;
			}	
		}
	});
	return app;
});
