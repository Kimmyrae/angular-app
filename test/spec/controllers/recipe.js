'use strict';

describe('Controller: RecipeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var RecipeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecipeCtrl = $controller('RecipeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RecipeCtrl.awesomeThings.length).toBe(3);
  });
});
