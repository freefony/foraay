'use strict';

angular.module('config', [])
  .service('config', function(){
    this.db = 'http://localhost:5984/foraay'
  });