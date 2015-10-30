(function() {
  'use strict';

  angular
    .module('TodoWrangler')
    .config(Router);

  Router.$inject = [
    '$routeProvider'
  ];

  /**
   * @class
   * @classdesc Handles routing
   * @memberOf Application
   */
  function Router($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'app/todos/todos.html',
        controller: 'TodosController',
        controllerAs: 'todosController'
      })
      .when('/archive', {
        templateUrl: 'app/todos/todos.html',
        controller: 'ArchivesController',
        controllerAs: 'todosController'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html'
      })
      .otherwise('/');
  }
})();
