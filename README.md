# svgSwap
swap img with svg src with inline svg.

```
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
```
