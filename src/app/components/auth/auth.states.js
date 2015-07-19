'use strict';

angular.module('auth')
  .config(function($stateProvider){
    $stateProvider
      .state('login', {
        parent: 'index',
        url: '/login',
        templateUrl: 'app/components/auth/partials/login.html'
      })
      .state('signup', {
        parent: 'index',
        url: '/signup',
        templateUrl: 'app/components/auth/partials/signup.html'
      })
  });