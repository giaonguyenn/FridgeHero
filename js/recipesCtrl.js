angular.module('app').controller('recipesCtrl', function($scope, mainSrvc){
	angular.element(document).ready(function(){
    	$('.modal').modal();
  	});

	var searchTerm1 = mainSrvc.search.searchTerm1;
	var searchTerm2 = mainSrvc.search.searchTerm2;
	var searchTerm3 = mainSrvc.search.searchTerm3;
	if (searchTerm1) {
		mainSrvc.getRecipes(searchTerm1,searchTerm2,searchTerm3).then(function(response) {
				$scope.recipes = response;	
				$scope.first = searchTerm1;
				$scope.second = searchTerm2;
				$scope.third = searchTerm3;
				$scope.show = true;
			}
		);	
	} else {
		$("#searchTerm1").css("border", "solid 1px red");
	}
	$scope.selectRecipe = function(recipe){

		//go get the infomation
		// and THEN open the modal, and inject the values
		$('#modal1').modal('open');
		$('#title').text(recipe.title);
		$("#ingredients").text(recipe.recipe_id);
	}
});
