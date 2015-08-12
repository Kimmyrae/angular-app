'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, recipesearch) {
    $scope.recipesFound = recipesearch.find();
    $scope.recipesFound.$promise.then(function(data){
      $scope.recipesreal=data;
      console.log(data);
    });

    $scope.findRecipes= function(){
        $scope.recipesFound = recipesearch.find({
            query: $scope.ingredients
        });
        $scope.searchQuery = $scope.recipeName;
    };
  });
