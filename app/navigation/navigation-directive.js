(function() {
  'use strict';

  /**
   * @namespace Navigation
   */
  angular
    .module('TodoWrangler.Navigation', [])
    .directive('todoNavigation', TodoNavigation);

  TodoNavigation.$inject = ['$rootScope', '$location'];

  /**
   * @class
   * @classdesc Application wide navigation controller
   * @memberOf Navigation
   */
  function TodoNavigation($rootScope, $location) {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'app/navigation/navbar.html',
      link: TodoNav
    };

    function TodoNav(scope, element, attr) {
      scope.isActive = isActive;

      init();

      /**
       * @name isActive
       * @desc Checks if the page is current
       * @param {String} current Page to check
       * @returns {Bool}
       * @memberOf Controllers.NavController
       */
      function isActive(current) {
        return scope.page === current;
      }

      /**
       * @private
       * @name init
       * @desc initializes the controller
       * @memberOf Controllers.NavController
       */
      function init() {
        element.find('.brand-logo').text(attr.title);
        element.find('.button-collapse').sideNav();

        $rootScope.$on('$routeChangeSuccess', function() {
          scope.page = $location.$$path;
        });
      }
    }
  }
})();
