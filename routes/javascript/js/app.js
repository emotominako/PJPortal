var app = angular.module("app", ["xeditable", "ui.bootstrap"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.controller('Ctrl', function($scope, $http, name, employeeNumber, birthday, hasWorkExperience) {

  $scope.user = {id: 3,
	      name: name,
	      employeeNumber: employeeNumber,
	      birthday: new Date(birthday),
	      skills : {type : String, enum : ['java programming', 'c# programming', 'salesforce programming']},
		  hasWorkExperience: hasWorkExperience === 'true'};
  
  $scope.updateName = function(){
	  return $http.post('/?f=name&v=' + $scope.user.name);
  };
  
  $scope.updateEmpNo = function(){
	  return $http.post('/?f=employeeNumber&v=' + $scope.user.employeeNumber);
  };
  
  $scope.updateBirthday = function(){
	  return $http.post('/?f=birthday&v=' + $scope.user.birthday);
  };
  
  /*$scope.updateSkills = function(){
	  return $http.post('/?f=skills&v=' + $scope.user.skills);
  };*/
  
  $scope.updateWorkExperience = function(){
	  return $http.post('/?f=hasWorkExperience&v=' + $scope.user.hasWorkExperience);
  };
});