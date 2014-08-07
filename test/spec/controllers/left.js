'use strict';

describe('Controller: LeftCtrl', function () {

  // load the controller's module
  beforeEach(module('musicyaoBackendApp'));

  var LeftCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeftCtrl = $controller('LeftCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
