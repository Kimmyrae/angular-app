'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.recipe
 * @description
 * # recipe
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('recipe', function () {
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
