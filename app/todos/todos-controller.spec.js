(function() {
  'use strict';

  describe('TodosController', function() {
    var ctrl, scope, localStorage;

    beforeEach(module('TodoWrangler'));

    beforeEach(inject(function(_$controller_, localStorageService) {
      localStorage = localStorageService;
      spyOn(localStorage, 'add').and.stub();
      ctrl = _$controller_('TodosController');
    }));

    describe('addTodo', function() {

      it('should add a todo to the list when text is set', function() {
        ctrl.todo = {text: 'Hello'};
        ctrl.addTodo();

        expect(ctrl.todos.length).toBe(1);
        expect(localStorage.add).toHaveBeenCalled();
      });

      it('should not add a todo to the list when text is empty', function() {
        ctrl.todo = {text: ''};
        ctrl.addTodo();

        expect(ctrl.todos.length).toBe(0);
        expect(localStorage.add).not.toHaveBeenCalled();
      });

    });

    describe('removeTodo', function() {
      var goodTodo;

      beforeEach(function() {
        goodTodo = {text: 'Good Todo', isDone: true};
        ctrl.todos.push(goodTodo);
      });

      it('should remove a todo from the list when todo is found', function() {
        ctrl.removeTodo(goodTodo);

        expect(ctrl.todos.length).toBe(0);
        expect(localStorage.add).toHaveBeenCalled();
      });

      it('should not remove a todo from the list when todo is not found', function() {
        expect(ctrl.todos.length).toBe(1);
        ctrl.removeTodo({text: 'Bad Todo', isDone: false});

        expect(ctrl.todos.length).toBe(1);
        expect(localStorage.add).not.toHaveBeenCalled();
      });

    });

    describe('check', function() {
      var finishedTodo, unfinishedTodo;

      beforeEach(function() {
        finishedTodo = {text: 'Finished', isDone: true};
        unfinishedTodo = {text: 'Unfinished', isDone: false};
        ctrl.todos.push(finishedTodo);
        ctrl.todos.push(unfinishedTodo);
      });

      it('should mark a completed todo as uncompleted', function() {
        ctrl.check(unfinishedTodo);

        expect(unfinishedTodo.isDone).toBe(true);
        expect(localStorage.add).toHaveBeenCalled();
      });

      it('should mark an uncompleted todo as completed', function() {
        ctrl.check(finishedTodo);

        expect(unfinishedTodo.isDone).toBe(false);
        expect(localStorage.add).toHaveBeenCalled();
      });

    });
  });
})();
