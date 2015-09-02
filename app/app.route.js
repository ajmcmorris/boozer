angular.module('boozer',['ngRoute']).config(['$routeProvider', function($routeProvider){
				$routeProvider.when('/',{
						templateUrl:'/js/views/home.html'
					}).when('/findBeer',{
						templateUrl:'/js/views/find-home.html',
					}).when('/sign-up',{
						templateUrl:'/js/views/sign-up.html',
					}).when('/light-results',{
						templateUrl:'/js/views/light-results.html',
					}).when('/fruit-results',{
						templateUrl:'/js/views/fruit-results.html',
					}).when('/dark-results',{
						templateUrl:'/js/views/dark-results.html',
					});
			}]);