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
    return $resource('http://api.yummly.com/v1/api/recipes?_app_id=app-id&_app_key=app-key&your _search_parameters', {}, {
      query: {
        method:'GET',
        isArray:false,
        params: {
          query: "plantain"
        },
        headers: {
          'X-Yummly-App-ID': '3ca00079',
          'X-Yummly-App-Key': '51e01589489c5872d2b13c715aba12d8'
        }
      }
    });
  });
