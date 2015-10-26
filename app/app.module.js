(function() {
  'use strict';

  /**
   * @namespace Application
   */
  angular.module('TodoWrangler', [
    'TodoWrangler.Navigation',
    'TodoWrangler.Todos',

    'ngRoute',
    'LocalStorageModule'
  ]);
})();
