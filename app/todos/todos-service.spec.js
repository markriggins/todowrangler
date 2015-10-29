(function() {
  'use strict';

  describe('TodosService', function() {
    let service, localStorage;

    beforeEach(module('TodoWrangler'));

    beforeEach(inject(function($injector, localStorageService) {
      localStorage = localStorageService;
      spyOn(localStorage, 'add').and.stub();
      spyOn(localStorage, 'get').and.callFake(function(key) {
        if (key === 'todos') {
          return '[{"text":"Test","isDone":false},{"text":"Another Test","isDone":true}]';
        } else if (key === 'archived') {
          return '[{"text":"Maybe!","isDone":true}]';
        }
        return '';
      });
      service = $injector.get('TodosService');
    }));

    describe('addTodo', function() {

      it('should add a todo', function() {
        let todo = {text: 'My Todo 1', isDone: false};
        service.addTodo(todo);

        expect(localStorage.add).toHaveBeenCalled();
        expect(service.getTodos().length).toBe(3);
      });

    });

    describe('removeTodo', function() {

      it('should remove a todo', function() {
        let todo = {text: 'Test', isDone: false};
        service.removeTodo(todo);

        expect(localStorage.add).toHaveBeenCalled();
        expect(service.getTodos().length).toBe(1);
      });

    });

    describe('addArchivedTodo', function() {

      it('should add an archived todo', function() {
        let todo = {text: 'My Todo 1', isDone: false};
        service.addArchivedTodo(todo);

        expect(localStorage.add).toHaveBeenCalled();
        expect(service.getArchivedTodos().length).toBe(2);
      });

    });

    describe('removeArchivedTodo', function() {

      it('should remove an archived todo', function() {
        let todo = {text: 'Maybe!', isDone: true};
        service.removeArchivedTodo(todo);

        expect(localStorage.add).toHaveBeenCalled();
        expect(service.getArchivedTodos().length).toBe(0);
      });

    });

    describe('check', function() {

      it('should mark a completed todo as uncompleted', function() {
        let todo = {text: 'Maybe!', isDone: true};
        service.check(todo);

        expect(localStorage.add).toHaveBeenCalled();
        expect(todo.isDone).toBe(false);
      });

      it('should mark an uncompleted todo as completed', function() {
        let todo = {text: 'Maybe!', isDone: false};
        service.check(todo);

        expect(localStorage.add).toHaveBeenCalled();
        expect(todo.isDone).toBe(true);
      });

    });

  });
})();
