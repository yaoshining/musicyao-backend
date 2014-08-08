'use strict';

/**
 * @ngdoc function
 * @name musicyaoBackendApp.controller:LeftCtrl
 * @description
 * # LeftCtrl
 * Controller of the musicyaoBackendApp
 */
define(['app/app'],function(app){
	app.controller('LeftCtrl', function ($scope) {
		$scope.minimized = false;
		$scope.minimize = function(){
			$scope.minimized = true;
		}
		$scope.maximize = function(){
			$scope.minimized = false;
		}
		require(['controllers/sidebar'],function(){
			$scope.templateUrl = "views/sidebar.html";
			$scope.$apply();
		});
	});
	return app;
});
  
