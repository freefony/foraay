'use strict';

angular.module('auth')
  .controller('AuthCtrl',  function($scope, $rootScope, $state, AuthService, log){

    var vm = this;

    vm.user = {};

    vm.login = function (){
      AuthService.login(vm.user)
        .then(function(response){
          $rootScope.$broadcast('newLogIn', response);
          $state.go('home');
        })
        .catch(function(err){
          console.log(err);
        });
    }
  });