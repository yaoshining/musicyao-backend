'use strict';

/**
 * @ngdoc function
 * @name musicyaoBackendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the musicyaoBackendApp
 */
define(['app/app','css!styles/main'],function(app){
	app.register
	.controller('MainCtrl', function ($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});
	return app;
});
