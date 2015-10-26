(function() {
  'use strict';

  angular
    .module('TodoWrangler.Todos')
    .controller('TodosController', TodosController);

  TodosController.$inject = [
    'TodosService'
  ];

  /**
   * @class
   * @classdesc Handles todo list view
   * @param {TodosService} TodosService - Service for accessing todos
   * @param {ArchivesService} ArchivesService - Service for accessing archived todos
   * @memberOf Todos
   */
  function TodosController(TodosService) {
    var that = this;

    this.title = 'Todos';
    this.canAdd = true;
    this.todo = {};
    this.todos = TodosService.getTodos();
    this.check = check;
    this.addTodo = addTodo;
    this.removeTodo = removeTodo;

    /**
     * @name addTodo
     * @desc adds a todo
     * @memberOf Todos.TodosController
     */
    function addTodo() {
      if (that.todo.text.length < 1) return;

      that.todo.isDone = false;
      TodosService.addTodo(that.todo);
      that.todo = {};
    }

    /**
     * @name check
     * @desc Flips the isDone flag
     * @param {Todo} the todo to update
     * @memberOf Todos.TodosController
     */
    function check(todo) {
      TodosService.check(todo);
    }

    /**
     * @name removeTodo
     * @desc removes a todo
     * @param {Todo} the todo to remove
     * @memberOf Todos.TodosController
     */
    function removeTodo(todo) {
      if (that.todos.indexOf(todo) < 0) return;

      TodosService.addArchivedTodo(todo);
      TodosService.removeTodo(todo);
    }
  }
})();
