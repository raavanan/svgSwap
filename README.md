# svgSwap
swap img with svg src with inline svg.

### The Problem.
 
 If you've ever used svg icons, you would have added it as an source, like so.
 
 ```
 <img src="circle.svg" />
 ```
 
 this takes away all the editability of the svg. you cannot use css selectors, etc.
 
### The solution

the Directive swaps this

 ```
 <img class="swap-svg" id="myid" src="circle.svg" />
 ```
 
 ```
 <svg class="swap-svg" id="myid" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="330px" height="400px" viewBox="0 0 330 400">
......
</svg>
```
now you can use your css selector to change colors, etc.

#### Usage.

1. Add the directive.
```
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
```

2. Add the directive to the element
```
<svg-swap id="svg" class="svg" src="BatmanHat.svg"></svg-swap>
<img svg-swap class="img-class" src="circlr.svg" alt="img" />
```
