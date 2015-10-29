(function() {
  'use strict';

  describe('ArchivesController', function() {
    let ctrl, scope, localStorage;

    beforeEach(module('TodoWrangler'));

    beforeEach(inject(function(_$controller_, localStorageService) {
      localStorage = localStorageService;
      spyOn(localStorage, 'add').and.stub();
      ctrl = _$controller_('ArchivesController');
    }));

    describe('removeTodo', function() {
      let goodTodo;

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
      let finishedTodo, unfinishedTodo;

      beforeEach(function() {
        finishedTodo = {text: 'Finished', isDone: true};
        ctrl.todos.push(finishedTodo);
      });

      it('should move completed todos out of the archive', function() {
        ctrl.check(finishedTodo);

        expect(finishedTodo.isDone).toBe(false);
        expect(localStorage.add).toHaveBeenCalled();
      });

    });
  });
})();
