angular.module('DateModule', [])
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
