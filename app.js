function TodoCtrl($scope) {

    $scope.todos = [
        {
            text: "Theobald Landen",
            done: false
        },
        {
            text: "Weston Constant",
            done: true
        }
  ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        $scope.todos.push({
            text: $scope.formTodoText,
            done: false
        });
        $scope.formTodoText = '';
    };

    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function (todo) {
            return !todo.done;
        });
    };
}