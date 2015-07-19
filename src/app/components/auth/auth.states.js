'use strict';

angular.module('auth')
  .config(function($stateProvider){
    $stateProvider
      .state('auth', {
        parent: 'index',
        abstract:  true,
        templateUrl: 'app/components/auth/partials/index.html'
      })
      .state('login', {
        parent: 'auth',
        url: '/login',
        templateUrl: 'app/components/auth/partials/login.html'
      })
  });