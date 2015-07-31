'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
  angular.module('angularAppApp')
    .controller('MainCtrl', function ($scope, current) {
      $scope.current = current.query();
      $scope.test = "test";
    });
