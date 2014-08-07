'use strict';

/**
 * @ngdoc function
 * @name musicyaoBackendApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the musicyaoBackendApp
 */
define(['app/app','css!styles/sidebar'],function(app){
	app.register.controller('SidebarCtrl', function ($scope) {
		var index = 0;
		$scope.minimized = false;
		$scope.navs = [{
			name: "Dashbord",
			url: "#",
			iconStyle: "fa-tachometer"
		},{
			name: "UI & Elements",
			url: "#/UIAndElements",
			iconStyle: "fa-desktop"
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
			index = $index;
		}
		$scope.minimize = function(){
			$scope.minimized = true;
		}
		$scope.maximize = function(){
			$scope.minimized = false;
		}
	});
	return app;
});
