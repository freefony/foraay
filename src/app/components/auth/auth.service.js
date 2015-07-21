'use strict';

(function(){

  function authService(log, pouch, config){
    var $this = this;
    var pouch = pouch.newInstance(config.db);
    $this.isLoggedIn = false;

    var _xtractUserID = function(user){
      var userID = user.email || user.name || user.id || user._id;
      if(!userID){
        if(user.userCtx){
          userID = user.userCtx.name;
        }
      }
      return userID;
    };
    $this.login = function(user){
      var email = _xtractUserID(user);
      return pouch.logIn(email, user.password)
        .then($this.getUser)
        .then(function(user){
          $this.isLoggedIn = true;
          return user;
        });
    };
    $this.logout = function(){
      return pouch.logout();
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
          return $this.login(user);
        });
    };
    $this.getCurrentSession = function(){
      return pouch.getSession();
    };
    $this.getUser = function(user){
      var email = _xtractUserID(user);
      return pouch.getUser(email);
    };

    $this.resetPassword = function(user){

      return pouch.changePassword(name, user.password)
    }
  }

  if(angular){
    angular.module('auth').service('AuthService', authService);
  }else{
    module.exports = authService;
  }
})();