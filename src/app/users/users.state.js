'use strict';

angular.module('users')
  .config(function($stateProvider){
    $stateProvider
      .state('signup', {
        parent: 'auth',
        url: '/users/signup',
        templateUrl: 'app/users/users-signup/signup.html',
        controller: 'UserSignupCtrl',
        controllerAs: 'userSignupCtrl'
      })
  });