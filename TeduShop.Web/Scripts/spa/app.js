/// <reference path="../plugins/angular/angular.js" />


var myApp = angular.module('myModule', []);

myApp.controller("schoolController", schoolController);
myApp.controller("studentController", studentController);
myApp.controller("teacherController", teacherController);

//myController.$inject = ['$scope'];

//declare
function schoolController($scope) {
    $scope.message = "This is my message from SCHOOL.";
}

function studentController($scope) {
    $scope.message = "This is my message from studentController.";
}
function teacherController($scope) {
    $scope.message = "This is my message from teacherController.";
}