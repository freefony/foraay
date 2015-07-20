'use strict';

(function(){

  function authService(log, pouch, config){
    var $this = this;
    var pouch = pouch.newInstance(config.db);
    $this.isLoggedIn = false;

    $this.login = function(user){
      pouch.logIn();
    };

    $this.signup = function(user){

      return pouch.signup(user.email, user.password, {
        metadata: {
          fullname : user.name,
          email: user.email,
          gender: user.gender
        }
      })
        .then(function(response){
          $this.isLoggedIn = true;
          return response;
        });
    }
  }

  if(angular){
    angular.module('auth').service('AuthService', authService);
  }else{
    module.export = authService;
  }
})();