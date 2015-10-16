angular.module('DateModule', [])
.directive('mydate', function() {
  return {
   //require:"^customer",
//   require:"customer",
    scope:
    {
      dateCust:'=dt',
	    lab:'@',
	    onValidateDate:'&'
    },
    restrict: "E",
//	transclude: true,
	templateUrl: 'common/directives/date/date.tpl.html',

     link: function(scope, iElement, iAttrs, outerController) {
        // This can be passed to ng-click in the template
//        $scope.chosen = function() {
//          outerController.chosen(something);
    //  scope.dateCust='1/5/2111';
	//  alert('link myDate '+scope.dateCust);
//	  outerController.setDate('1/5/2001');
	 // 	  alert('link myDate fin'+scope.dateCust);
        }

	  };

});
