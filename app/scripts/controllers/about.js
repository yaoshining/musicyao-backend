'use strict';

/**
 * @ngdoc function
 * @name musicyaoBackendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the musicyaoBackendApp
 */
define(['app/app'],function(app){
	app.register
	.controller('AboutCtrl', function ($scope) {
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
  	});
	return app;
});
  
