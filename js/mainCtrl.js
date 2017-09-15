angular.module("app").controller("mainCtrl", function($scope, mainSrvc, $state) {
	$scope.getRecipes = function(searchTerm1,searchTerm2,searchTerm3) {
		if(searchTerm1) {
			mainSrvc.addSearchTerm(searchTerm1,searchTerm2,searchTerm3)
			$state.go("recipes");
		} else {
			$("#searchTerm1").css("border", "1px solid red");
		}
	};
});
