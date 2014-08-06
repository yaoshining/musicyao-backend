'use strict';

/**
 * @ngdoc function
 * @name musicyaoBackendApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the musicyaoBackendApp
 */
define(['app/app','services/header'],function(app,header){
	app.controller('HeaderCtrl', function ($scope,header) {
		$scope.hello = 'This is header!';
	});
	return app;
});