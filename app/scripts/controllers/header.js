'use strict';

/**
 * @ngdoc function
 * @name musicyaoBackendApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the musicyaoBackendApp
 */
define(['app/app','services/header','css!styles/header'],function(app,header){
	app.controller('HeaderCtrl', function ($scope,$log,header) {
		$log.debug(header);
		$scope.hello = 'This is header!';
	});
	return app;
});