
'use strict';

angular.module('foraay')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        abstract: true,
        views:{
          root: {
             templateUrl: 'app/index.html'
          }
        }

      })
      .state('index', {
        abstract: true,
        parent: 'root',
        views: {
          header: {
            templateUrl: 'app/components/navbar/navbar.html',
            controller: 'NavbarCtrl',
            controllerAs: 'navbarCtrl'
          },
          content: {},
          footer: {
            templateUrl: 'app/components/footer/footer.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  });