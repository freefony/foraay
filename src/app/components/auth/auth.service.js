'use strict';

(function(){

  function authService(){
    var $this = this;

    $this.isLoggedIn = false;
  }

  if(angular){
    angular.module('auth').service('AuthService', authService);
  }else{
    module.export = authService;
  }
})();