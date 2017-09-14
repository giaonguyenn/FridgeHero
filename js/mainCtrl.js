angular.module("app").controller("mainCtrl", function($scope, mainSrvc) {
	$scope.getRecipes = function(searchTerm1,searchTerm2,searchTerm3) {
			mainSrvc.addSearchTerm(searchTerm1,searchTerm2,searchTerm3)
	};
});
