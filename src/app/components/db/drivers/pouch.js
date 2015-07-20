'use strict';

angular.module('pouchDB', [])
  .service('pouch', function($window){
    if(!$window.PouchDB){
      return 'err';
    }
    var pouch = {};

    var service = this;

    service.newInstance = function(config){
      return new $window.PouchDB(config);
    };
    service.get = function(id){
      //pouch.get
    }

  });