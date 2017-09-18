angular.module('app').controller('recipesCtrl', function($scope, mainSrvc,$timeout, $state){

	var startTime = new Date().getTime();
	angular.element(document).ready(function(){
    	$('.modal').modal();
  	});

	var searchTerm1 = mainSrvc.search.searchTerm1;
	var searchTerm2 = mainSrvc.search.searchTerm2;
	var searchTerm3 = mainSrvc.search.searchTerm3;
	var searchTerm4 = mainSrvc.search.searchTerm4;
	var searchTerm5 = mainSrvc.search.searchTerm5;
	var searchTerm6 = mainSrvc.search.searchTerm6;
	if (searchTerm1) {
		mainSrvc.getRecipes(searchTerm1,searchTerm2,searchTerm3,searchTerm4,searchTerm5,searchTerm6).then(function(response) {
			var newTime = new Date().getTime();
				$scope.recipes = response;	
				$scope.first = searchTerm1;
				$scope.second = searchTerm2;
				$scope.third = searchTerm3;
				$scope.fourth = searchTerm4;
				$scope.fifth = searchTerm5;
				$scope.sixth = searchTerm6;
				var timeToWait = 2000 - (newTime - startTime);
				$timeout(function(){
					angular.element(document.querySelector(".loading")).remove();
					$scope.show = true;
					if (!response.length) {
						$("#now-showing").css("display", "none");
						$("#noMatchesMessage").css("display", "initial");	
					}
				}, timeToWait); 
			}
		);	
	} 
	else {
		$state.go("home");
	}

	$("#noMatchesMessage").css("display", "none !important");

	$scope.selectRecipe = function(recipe){
		mainSrvc.getIngredients(recipe.recipe_id).then(function(response) {
		$('#modal1').modal('open');
		$('#title').text(recipe.title);
		$("#ingredients").empty();
			response.ingredients.forEach(function(cur){
				$("#ingredients").append("<p>"+ cur +"</p>");	
			});
		});
		$("#modalImages").attr("src", recipe.image_url);
		$("#source_url").attr("href", recipe.source_url);
	};
});
