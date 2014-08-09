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
	.controller('AboutCtrl', function ($scope,$rootScope,$routeParams) {
	    $rootScope.module = $routeParams.module;
  	});
	return app;
});
  
