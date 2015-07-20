'use strict';

angular.module('db', ['pouchDB', 'log'])
  .service('dbService', function(pouch, log){
    //Todo: move this to config
    var dbUrl = 'http://localhost:5984/foraay';
    var db = pouch.newInstance(dbUrl);

    var service = this;

    /**
     * method to configure datasource module on which database to use
     * @param driver: database driver to use e.g pouchdb or couchbase
     * @param config
     */
    service.use = function(driver, config){

    };
    service.get = function(){
      log.info(db);
    }
  });