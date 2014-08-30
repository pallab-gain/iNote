'use strict';

describe('Directive: createNote', function () {

  // load the directive's module and view
  beforeEach(module('iNoteApp'));
  beforeEach(module('app/createNote/createNote.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<create-note></create-note>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the createNote directive');
  }));
});