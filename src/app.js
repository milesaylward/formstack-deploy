var app = angular.module('app', []);

app.controller('appController', function appController($scope) {
  $scope.percents = [];
  $scope.error = '';

  $scope.submit = function(num) {
    $scope.error = '';
    if(!isNaN(num) && num <= 1 && num >= 0 ) {
      let percent = Math.round(num * 100);
      console.log(percent);
      $scope.percents.push(percent);
      $scope.num = null;
    }
    else if (isNaN($scope.num)) {
      $scope.num = null;
      $scope.error = 'You must enter a number!';
    }
    else {
      $scope.error = 'Your number must be between 0 and 1!';
      $scope.num = null;
    }
  }

  $scope.random = function() {
    $scope.error = '';
    let rand = Math.round(Math.random() * 100);
    $scope.percents.push(rand);
  }

  $scope.clear = function() {
    $scope.percents = [];
    $scope.error = '';
  }
});
