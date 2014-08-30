'use strict';

angular.module('iNoteApp')
  .directive('createNote', function () {
    return {
      templateUrl: 'app/createNote/createNote.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });