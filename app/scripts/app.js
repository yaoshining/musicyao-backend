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
      .when('/:module', {
        template: function($routeParams){
          return "这是"+$routeParams.module+"页面。";
        },
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
