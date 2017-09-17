angular.module("app").service("mainSrvc", function($http) {
	var baseUrl = "http://food2fork.com/api/";
	var apiKey = "4cc8742059649d4518b7105ffb4dc984";

	var results=[];

	this.showMore = function() {
		$(".additional-input").css("display", "initial");
	};

	this.search = {}
	this.addSearchTerm = function(searchTerm1,searchTerm2,searchTerm3,searchTerm4,searchTerm5,searchTerm6) {
		this.search = {
			searchTerm1: searchTerm1,
			searchTerm2: searchTerm2,
			searchTerm3: searchTerm3,
			searchTerm4: searchTerm4,
			searchTerm5: searchTerm5,
			searchTerm6: searchTerm6
		}
	};

	this.getRecipes = function(searchTerm1,searchTerm2,searchTerm3,searchTerm4,searchTerm5,searchTerm6){
		return $http
		.get(baseUrl + "search?key=" + apiKey + "&q=" + searchTerm1 + "," + searchTerm2 + "," + searchTerm3 + "," + searchTerm4 + "," + searchTerm5 + "," + searchTerm6)
		.then(function(response) {
			results=response.data.recipes;	
			return response.data.recipes;
		});
	};

	this.getIngredients = function(itemId) {
		return $http.get(baseUrl + "get?key=" + apiKey + "&rId=" + itemId).then(function(response) {
			return response.data.recipe;
		});
	};

	this.generateRecipe = function(searchTerm1,searchTerm2,searchTerm3,searchTerm4,searchTerm5,searchTerm6) {
		return results[Math.floor(Math.random()*results.length)];
	};
});