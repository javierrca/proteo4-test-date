angular.module('DateModule', []);

angular.module('DateModule')
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

angular.module('DateModule')
.controller('DateController',  function($scope) {
	//	alert($rootScope.jr);
	// alert('controller myDate '+$scope.dateCust);
    //    $scope.jr.firstName="pep";
    //  $scope.dateOpt = {dateIni:'1/1/2001',dateFin:'1/1/2001'};
   //   $scope.dateCust='1/4/2001';



	 $scope.validateDate= function (date) {
		alert("validateDate:"+date);
		$scope.onValidateDate(date);

		};


});

angular.module('DateModule').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/common/directives/date/date.tpl.html',
    "<div>\r" +
    "\n" +
    "<label>{{lab}}</label><input name=\"date\" ng-model=\"dateCust\">\r" +
    "\n" +
    "<button ng-click=\"onValidateDate(dateCust)\"> Validate it now</button>\r" +
    "\n" +
    "<div>\r" +
    "\n"
  );

}]);
