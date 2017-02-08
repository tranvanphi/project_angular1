angular.
	module('register').
	component('register',{
		templateUrl : 'layout/register/register.template.html',
		controller	: function(){
						this.review = {};
						this.addUser = function(user){
							// this.review.createdOn = Date.now();
							user.reviews.push(this.review);
							this.review = {};
						};
					},
		controllerAs: ' registerController'
		
	});