'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.recipesearch
 * @description
 * # recipesearch
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('recipesearch', function ($resource) {
    // Service logic
    // ...

    var meaningOfLife = 42;

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
