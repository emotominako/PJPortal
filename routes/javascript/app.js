var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.controller('Ctrl', function($scope, $http) {
  var name = 'awesome user';
  
  $scope.user = {
    id: 3,
    name: name
  };
  
  $scope.updateDatabase = function(){
	  return $http.post('/?name=' + $scope.user.name + '&id=3&email=null&birthday=null');
  };
});