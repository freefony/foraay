'use strict';

angular.module('foraay')
  .controller('NavbarCtrl', function ($scope) {
    var vm = this;
    vm.user = false;
    $scope.$on('newLogIn', function(event, user){
      vm.user = user;
      $scope.$digest();
    })
  });
