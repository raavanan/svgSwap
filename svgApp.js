angular.module('svgApp', [])
  .controller('myCtrl', function($scope, $http) {
    $scope.img = "hello";

  })
  .directive('svgSwap', function ($http, $compile) {
    return {
      restrict : 'EA',
      replace : true,
      templateUrl : function (elem, attr) {
        var ext = attr.src.split('.').pop();
        if(ext == 'svg'){
            return attr.src;
        }
      }
    }
  })
  ;
