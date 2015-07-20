'use strict';

angular.module('foraay', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ui.router',
  'ngMaterial',
  'auth',
  'log',
  'users',
  'db',
  'config'
])
  .run(function($rootScope, $state, log, AuthService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      if (!AuthService.isLoggedIn && toState.name !== 'login' && toState.name !=='signup') {
        $state.go('login');
        event.preventDefault();
      }
    });
  });

