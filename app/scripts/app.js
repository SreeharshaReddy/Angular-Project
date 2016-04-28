function TodoCtrl($scope) {
  $scope.todos = [
    {text:'Angular', done:true},
    {text:'built an angular app', done:false}];

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
}
