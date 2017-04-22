angular.module('starter.services')
.factory('Tasks', function() {
	return {
		all: function() {
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				return angular.fromJson(taskString);
			}
			return [];
		},
		save: function(task) {
			var tasks = [];
			var taskString = window.localStorage['tasks'];
			if(taskString) {
				tasks = angular.fromJson(taskString);
			}
			tasks.push(task);
			window.localStorage['tasks'] = angular.toJson(tasks);
		},
		saveall:function (tasks) {
		  window.localStorage.clear();
      window.localStorage['tasks']=angular.toJson(tasks);
    },
		remove: function(index){
		  var tasks=[];
		  var taskString = window.localStorage['tasks'];
		  if(taskString){
		    tasks=angular.fromJson(taskString);
      }
      tasks.splice(index,1);
		  window.localStorage.clear();
		  window.localStorage['tasks']=angular.toJson(tasks);
    },
		clear: function(){
		  window.localStorage.clear();
    }
	}
})
