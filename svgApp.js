angular.module('svgApp', [])
  .controller('myCtrl', function($scope, $http) {
    $scope.img = "hello";

  })
  .directive('svgSwap', function ($http, $compile) {
    return {
      restrict : 'EA',
      replace : true,
      templateUrl : function (elem, attr) {
        return attr.src;
      }
    }
  })
  ;
