'use strict';

/**
 * @ngdoc service
 * @name musicyaoBackendApp.header
 * @description
 * # header
 * Service in the musicyaoBackendApp.
 */
define(['app/app'],function(app){
	app.service('header', ['$rootScope',function header($rootScope) {
    	return {
    		a: 123
    	}
	}]);
});
