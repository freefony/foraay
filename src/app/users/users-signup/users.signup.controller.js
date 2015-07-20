'use strict';

angular.module('users')
  .controller('UserSignupCtrl', function(log, AuthService, $state){

    var vm = this;

    vm.user = {};

    vm.save = function(){
      AuthService.signup(vm.user)
        .then(function(response){
          $state.go('home');
        })
        .catch(log.error);
    }
  });