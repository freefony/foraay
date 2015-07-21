'use strict';

angular.module('users')
  .service('userService', function(dbService){

    var service = this;

    service.get = function(){
      dbService.get();
    }

  });