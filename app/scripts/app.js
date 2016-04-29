var todos = angular.module('todos', []);
todos.controller('RandomController', RandomController);
todos.factory{'Todos', function() {
  return {
    get: function() {
      return {"Hello World!"};
    }
  };
});
function RandomController(Todo) {
  this.name = Todo.get();
}
todos.directive('hello', function(){
  return {
    restrict: 'E',
    template: '<h1> Hello World! </h1>'
  };
});
todos.directives('Jumbotron', function(){
  return{
    template: 
  };;
});
