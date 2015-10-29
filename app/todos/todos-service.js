(function() {
  'use strict';

  angular
    .module('TodoWrangler.Todos')
    .factory('TodosService', TodosService);

  TodosService.$inject = [
    'localStorageService'
  ];

  /**
   * @typedef {function} TodosService
   */

  /**
   * @class
   * @classdesc Handles Todo CRUD
   * @param {localStorageService} localStorageService - Service for accessing local storage [External]{@link https://github.com/grevory/angular-local-storage}
   * @memberOf Todos
   */
  function TodosService(localStorageService) {
      let that = this;
      init();

      return {
        addTodo: addTodo,
        addArchivedTodo: addArchivedTodo,
        check: check,
        getTodos: getTodos,
        getArchivedTodos: getArchivedTodos,
        removeTodo: removeTodo,
        removeArchivedTodo: removeArchivedTodo
      };

      /**
       * @name addTodo
       * @desc adds a todo
       * @memberOf Todos.TodosService
       */
      function addTodo(todo) {
        that.todos.push(todo);
        save();
      }

      /**
       * @name addTodo
       * @desc adds an archived todo
       * @memberOf Todos.TodosService
       */
      function addArchivedTodo(todo) {
        todo.isDone = true;
        that.archived.push(todo);
        save();
      }

      /**
       * @name check
       * @desc gets all todos
       * @memberOf Todos.TodosService
       */
      function check(todo) {
        todo.isDone = !todo.isDone;
        save();
      }

      /**
       * @name getTodos
       * @desc gets all todos
       * @memberOf Todos.TodosService
       */
      function getTodos() {
        return that.todos;
      }

      /**
       * @name getArchivedTodos
       * @desc gets all archived todos
       * @memberOf Todos.TodosService
       */
      function getArchivedTodos() {
        return that.archived;
      }

      /**
       * @name removeTodo
       * @desc removes a todo
       * @param {Todo} the todo to remove
       * @memberOf Todos.TodosService
       */
      function removeTodo(todo) {
        that.todos.splice(that.todos.indexOf(todo), 1);
        save();
      }

      /**
       * @name removeArchivedTodo
       * @desc removes an archived todo
       * @param {Todo} the todo to remove
       * @memberOf Todos.TodosService
       */
      function removeArchivedTodo(todo) {
        that.archived.splice(that.archived.indexOf(todo), 1);
        save();
      }

      /**
       * @private
       * @name save
       * @desc saves to localstorage
       * @memberOf Todos.TodosService
       */
      function save() {
        localStorageService.add('todos', JSON.stringify(that.todos, function(key, value) {
          if (key === '$$hashKey') {
            return undefined;
          }
          return value;
        }));

        localStorageService.add('archived', JSON.stringify(that.archived, function(key, value) {
          if (key === '$$hashKey') {
            return undefined;
          }
          return value;
        }));
      }

      /**
       * @private
       * @name init
       * @desc initializes the service
       * @memberOf Todos.TodosService
       */
      function init() {
        let todosInStorage = localStorageService.get('todos');
        that.todos = todosInStorage && JSON.parse(todosInStorage) || [];

        let archivedInStorage = localStorageService.get('archived');
        that.archived = archivedInStorage && JSON.parse(archivedInStorage) || [];
      }
  }
})();
