'use strict';

var app = angular.module('app', []);

app.controller('appController', function appController($scope) {
  $scope.num = null;
  $scope.percents = [];

  $scope.submit = function () {
    if ($scope.num) {
      var num = Math.round($scope.num * 100);
      $scope.percents.push(num);

      $scope.num = null;
    }
  };

  $scope.random = function () {
    var rand = Math.round(Math.random() * 100);
    $scope.percents.push(rand);
  };

  $scope.clear = function () {
    $scope.percents = [];
  };
});