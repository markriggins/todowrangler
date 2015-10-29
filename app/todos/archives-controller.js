(function() {
  'use strict';

  angular
    .module('TodoWrangler.Todos')
    .controller('ArchivesController', ArchivesController);

  ArchivesController.$inject = [
    'TodosService'
  ];

  /**
   * @class
   * @classdesc Handles todo list view
   * @param {TodosService} TodosService - Service for accessing todos
   * @memberOf Todos
   */
  function ArchivesController(TodosService) {
    let that = this;

    this.title = 'Archived';
    this.canAdd = false;
    this.todos = TodosService.getArchivedTodos();
    this.check = check;
    this.removeTodo = removeTodo;

    /**
     * @name check
     * @desc Flips the isDone flag
     * @param {Todo} the todo to update
     * @memberOf Todos.ArchivesController
     */
    function check(todo) {
      todo.isDone = false;
      that.removeTodo(todo);
      TodosService.addTodo(todo);
    }

    /**
     * @name removeTodo
     * @desc removes a todo
     * @param {Todo} the todo to remove
     * @memberOf Todos.ArchivesController
     */
    function removeTodo(todo) {
      if (that.todos.indexOf(todo) < 0) return;
      TodosService.removeArchivedTodo(todo);
    }
  }
})();
