'use strict';
var libDir = '../../bower_components/';
requirejs.config({
	baseUrl: libDir,
	paths: {
		app: '../scripts',
		styles: '../styles',
		controllers: '../scripts/controllers',
		services: '../scripts/services',
		directives: '../scripts/directives',
		jquery: [
			'http://code.jquery.com/jquery-1.11.1.min',
			libDir+'jquery/dist/jquery'
		],
		bootstrap: [
			'http://cdn.bootcss.com/bootstrap/3.2.0/js/bootstrap.min',
			libDir+'bootstrap/dist/js/bootstrap'
		],
		underscore: [
			'http://cdn.bootcss.com/underscore.js/1.6.0/underscore',
			libDir+'underscore/underscore'
		],
		angular: libDir+'angular/angular',
		'angular-resource': libDir+'angular-resource/angular-resource',
		'angular-cookies': libDir+'angular-cookies/angular-cookies',
		'angular-sanitize': libDir+'angular-sanitize/angular-sanitize',
		'angular-animate': libDir+'angular-animate/angular-animate',
		'angular-touch': libDir+'angular-touch/angular-touch',
		'angular-route': libDir+'angular-route/angular-route',
		'angular-lazyload': libDir+'angular-lazyload/dist/angular-lazyload'
	},
	shim: {
		bootstrap: ['jquery'],
		angular: {
			exports: 'angular'
		},
		underscore: {
			exports: "_"
		},
		'angular-resource': ['angular'],
		'angular-cookies': ['angular'],
		'angular-sanitize': ['angular'],
		'angular-animate': ['angular'],
		'angular-touch': ['angular'],
		'angular-route': ['angular'],	
		'angular-lazyload': ['angular'],	
		'app/app': ['angular','angular-animate','angular-cookies','angular-resource','angular-route','angular-sanitize','angular-touch']
	},
	config: {
		'app/app': {
			size: 123
		}
	},
	map: {
		'*': {
			css: libDir+'require-css/css'
		}
	}
});
requirejs([
	'jquery',
	'underscore',
	'angular',
	'angular-resource',
	'angular-cookies',
	'angular-sanitize',
	'angular-animate',
	'angular-touch',
	'angular-route',
	'angular-lazyload',
	'app/app',
	'controllers/header',
	'controllers/left',
	'bootstrap'
],function($){
	angular.bootstrap(document,['musicyaoBackendApp']);
});