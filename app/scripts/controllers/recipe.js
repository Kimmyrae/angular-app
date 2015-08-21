'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:RecipeCtrl
 * @description
 * # RecipeCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('RecipeCtrl', function($scope, $routeParams, $localStorage) {
    $scope.recipeID = $routeParams.recipeID;
      for (var i = 0; i < $localStorage.savedRecipes.length; i++) {
        if ($localStorage.savedRecipes[i].id === $scope.recipeID){}
      }

  });
