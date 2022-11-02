var employeeAppModule=angular.module("employeeApp",[]);
angular.module('myModule', ['ui.bootstrap']);


employeeAppModule.controller("employeeCtrl",function($scope,$http) {
    $http.get('employee.json').success(function(data) {
        $scope.employees=data;
    })
    .error(function(data,status) {
        console.error('Failed to load data',status,data);
        $scope.employees={};
    })
})