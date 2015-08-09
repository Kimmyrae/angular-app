'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.recipesearch
 * @description
 * # recipesearch
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('recipesearch', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
