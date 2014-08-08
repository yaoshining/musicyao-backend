'use strict';

/**
 * @ngdoc directive
 * @name musicyaoBackendApp.directive:navs
 * @description
 * # navs
 */
define(["app/app"],function(app){
	app.register.directive('navs', function(){
		return {
			templateUrl: 'views/navs.html',
			restrict: 'E',
			replace: true,
			scope: {
				items: "="
			},
			link: function postLink(scope,element,attrs){
				// element.text('this is the navs directive');
			}
		}
	});
});
