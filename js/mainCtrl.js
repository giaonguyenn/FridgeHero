angular.module("app").controller("mainCtrl", function($scope, mainSrvc, $state) {

	$scope.showMore = mainSrvc.showMore;

	$scope.getRecipes = function(searchTerm1,searchTerm2,searchTerm3,searchTerm4,searchTerm5,searchTerm6) {
		if(searchTerm1) {
			mainSrvc.addSearchTerm(searchTerm1,searchTerm2,searchTerm3,searchTerm4,searchTerm5,searchTerm6)
			$state.go("recipes");
		} else {
			$("#searchTerm1").css("border", "1px solid red");
		}
	};
});
