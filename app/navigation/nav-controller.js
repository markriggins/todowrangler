(function() {
  'use strict';

  /**
   * @namespace Navigation
   */
  angular
    .module('TodoWrangler.Navigation', [])
    .controller('NavController', NavController);

  NavController.$inject = [
    '$rootScope',
    '$location'
  ];

  /**
   * @class
   * @classdesc Application wide navigation controller
   * @memberOf Navigation
   */
  function NavController($rootScope, $location) {
    let that = this;

    this.isActive = isActive;

    init();

    /**
     * @name isActive
     * @desc Checks if the page is current
     * @param {String} current Page to check
     * @returns {Bool}
     * @memberOf Controllers.NavController
     */
    function isActive(current) {
      return that.page === current;
    }

    /**
     * @private
     * @name init
     * @desc initializes the controller
     * @memberOf Controllers.NavController
     */
    function init() {
      $rootScope.$on('$routeChangeSuccess', function() {
        that.page = $location.$$path;
      });
    }
  }

})();
