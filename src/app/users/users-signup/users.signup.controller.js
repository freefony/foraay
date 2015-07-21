'use strict';

angular.module('users')
  .controller('UserSignupCtrl', function($rootScope, log, AuthService, $state){

    var vm = this;

    vm.user = {};

    vm.save = function(){
      AuthService.signup(vm.user)
        .then(function(response){
          $rootScope.$broadcast('newLogIn', response);
          $state.go('home');
        })
        .catch(log.error);
    }
  });