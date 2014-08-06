'use strict';
/**
 * @ngdoc overview
 * @name musicyaoBackendApp
 * @description
 * # musicyaoBackendApp
 *
 * Main module of the application.
 */
define(function(){
  var app = angular
  .module('musicyaoBackendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-lazyload'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerUrl: 'controllers/main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerUrl: 'controllers/about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$lazyload',function($lazyload){
    $lazyload.init(app,'requirejs');
    app.register = $lazyload.register;
  }]);
  return app;
  
});
