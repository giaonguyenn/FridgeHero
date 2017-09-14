angular.module("app", ["ui.router"])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "./views/home.html",
				controller: "mainCtrl"
			})
			.state("randomGenerator", {
				url: "/randomGenerator",
				templateUrl: "./views/randomGenerator.html",
			})
			.state("about", {
				url: "/about",
				templateUrl: "./views/about.html"
			})
			.state("recipes", {
				url: "/recipes",
				templateUrl: "./views/recipes.html",
				controller: "recipesCtrl"
			})
	});