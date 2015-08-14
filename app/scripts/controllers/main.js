'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, recipesearch, $localStorage) {
    $scope.recipesFound = recipesearch.find();
    // $scope.recipesFound.$promise.then(function(data){
    //   $scope.recipesreal=data;
    //   console.log(data);
    // });
    $scope.savedRecipes=localStorage.savedRecipes;
    $scope.findRecipes= function(){
        $scope.recipesFound = recipesearch.find({
            query: $scope.query

        });
    };

    $scope.saveRecipe = function(recipe){
      if ($localStorage.savedRecipes){
        $localStorage.savedRecipes.push(recipe);
      }  else {
        $localStorage.savedRecipes=[recipe];
      }
    };
});
