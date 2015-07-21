'use strict';

angular.module('auth')
  .controller('LogoutCtrl', function($state, AuthService, log){
    AuthService.logout()
      .then(function(response){
        $state.go('login'); //Todo: this should transit to state, 'main', instead of state, 'login';
      })
      .catch(function(err){
        log.error(err);
      });
  });