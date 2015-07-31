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
    return $resource('https://webknox-recipes.p.mashape.com/recipes/search', {}, {
      query: {
        method:'GET',
        isArray:false,
        params: {
          query: "plantain"
        },
        headers: {
          'X-Mashape-Key': 'TiZDcA3gXXmshknG5D824ApWXYGyp1UipJgjsnevBYCeykZQSL',
          'Accept': 'application/json'
        }
      }
    });
  });
