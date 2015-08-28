'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of What can I do with a plantain
 */
angular.module('angularAppApp')
  .controller('MainCtrl', function ($scope, recipesearch, $localStorage) {
    $scope.recipesFound = recipesearch.find();
    $scope.storage = $localStorage;
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
        if($localStorage.savedRecipes.indexOf(recipe) >= 0){
          console.log(" Recipe Already Saved");
        } else {
          $localStorage.savedRecipes.push(recipe);

        }

      }  else {
        $localStorage.savedRecipes=[recipe];
      }
    };
    $scope.delete = function(recipe){
      var recipeIndex = $localStorage.savedRecipes.indexOf(recipe);
      $localStorage.savedRecipes.pop(recipeIndex);
      if ($localStorage.savedRecipes.length === 0){
        delete $localStorage.savedRecipes;
      }

    };

});
