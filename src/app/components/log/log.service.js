'use strict';

(function(){
  function log(){
    var $this = this;

    $this.error = function(msg){
      console.error(msg);
    };
    $this.success = function(msg){
      console.log(msg);
    };

    $this.warn = function(msg){
      console.warn(msg);
    };
    $this.info = function(msg){
      console.info(msg);
    }
  }

  if(angular){
    angular.module('log').service('log', log);
  }else{
    module.export = log;
  }
})();