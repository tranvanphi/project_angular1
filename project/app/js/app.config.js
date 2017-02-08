angular.
	module('app').
	config(['$locationProvider','$routeProvider',
			function config($locationProvider, $routeProvider){
				$locationProvider.hashPrefix('!');

				$routeProvider.
					when('/home',{
						templateUrl: 'layout/content/content.template.html'
					}).
					when('/car',{
						templateUrl: 'layout/content/content.template.html',
						controller: "CarCtrl"
					}).
					// when('/register',{
					// 	template: '<register></register>'
					// }).
					otherwise('/car');
			}
	]);