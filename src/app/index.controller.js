'use strict';

angular.module('foraay')
  .controller('indexCtrl', function(){
     function stateChangeError(event) {
      log.error('stateChangeError', event);
    }

    $rootScope.$on('$stateChangeError', stateChangeError);
  });