angular.module('starter.controllers')
.controller('TasksController', function ($rootScope, $scope, Tasks) {
	$scope.tasks = Tasks.all();
  //$scope.tasks=[{title:'Collect coins'},{title:'Eat mushrooms'}]
  $scope.clearTasks=function () {
    Tasks.clear();
    location.reload();
  };
  $scope.completeTask=function(task,index){
    task.checked=!task.checked;
    if(task.checked){
      $scope.tasks.splice(index,1);
      $scope.tasks.push(task);
    }
    Tasks.saveall($scope.tasks);
    location.reload();
    //console.log(index);
    //console.log(task.checked);
  }
});
