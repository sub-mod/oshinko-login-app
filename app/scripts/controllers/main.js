'use strict';

/**
 * @ngdoc function
 * @name mineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mineApp
 */
angular.module('mineApp')
  .controller('MainCtrl', function ($scope, DataService, AuthService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var watches = [];
    $scope.projects = {};
    $scope.alerts = $scope.alerts || {};
    $scope.showGetStarted = false;
    $scope.myname ="";
    $scope.mytoken = "";

    AuthService.withUser().then(function() {
      console.log(" AuthService.withUser()......");
      console.log(AuthService.UserStore().getUser());
      $scope.myname = AuthService.UserStore().getUser().metadata.name;
      $scope.mytoken = AuthService.UserStore().getToken();
      watches.push(DataService.watch("projects", $scope, function(projects) {
        $scope.projects = projects.by("metadata.name");
        console.log(" AuthService.withUser()......projects")
        //$scope.showGetStarted = hashSizeFilter($scope.projects) === 0;
      }));
    });


  });
