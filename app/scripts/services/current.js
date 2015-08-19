'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.current
 * @description
 * # current
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('http://api.yummly.com/v1/api/recipes?_app_id=3ca00079&_app_key=51e01589489c5872d2b13c715aba12d8&q=plantain&requirePictures=true', {}, {
      query: {
        method:'GET',
        isArray:false,
        params: {
          q: "plantain"
        },
        headers: {
          'X-Yummly-App-ID': '3ca00079',
          'X-Yummly-App-Key': '51e01589489c5872d2b13c715aba12d8'
        }
      }
    });
  });
  
  // Recipe ID view
    angular.module('yourApp')
      .controller('CurrentCtrl', function ($scope, $routeParams, current) {
        $scope.recipeID = $routeParams.recipeID;

        $scope.savedRecipes = current.query({
            recipeID: $routeParams.recipeID
        });
      });
