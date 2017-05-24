/*globals $:false */
'use strict';

/**
 * @ngdoc overview
 * @name dawartzApp
 * @description
 * # dawartzApp
 *
 * Main module of the application.
 */
angular
  .module('dawartzApp', ['ui.router', 'ngAnimate'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  	// setting default view
  	$urlRouterProvider.otherwise('/');

  	// handling state of the view
  	$stateProvider
  	.state('home', {
  		url: '/',
  		templateUrl: 'views/main.html'
  	})
  	.state('me', {
  		url: '/me',
  		templateUrl: 'views/me.html',
  		controller: 'MeCtrl',
  		controllerAs: 'me'
  	})
  	.state('projects', {
  		url: '/projects',
  		templateUrl: 'views/projects.html',
  		controller: 'ProjectsCtrl',
  		controllerAs: 'project'
  	});
	}])
	.animation('.fade-project', function() {
  return {
    enter: function(element, done) {
      element.css('display', 'none');
      $(element).fadeIn(1500, function() {
        done();
      });
    },
    leave: function(element, done) {
      $(element).fadeOut(1000, function() {
        done();
      });
    },
    move: function(element, done) {
      element.css('display', 'none');
      $(element).fadeOut(500, function() {
        done();
      });
    }
  };
});
