app.controller('CarCtrl', ['$http','$scope', function NeedSellCtrl($http,$scope) {
	$scope.filterCity = '';
	$scope.order = 'price';

	//list catelog post
	$http.get('http://localhost/www/project/api/home/list_Catelog').
		success(function(data){
			$scope.listCatelogy = data;

		})
		.error(function(data){
			console.log('error');
		});
	
	//catelogy CAR list post
	$http.get('http://localhost/www/project/api/car/list_Post').
		success(function(data){
			$scope.listPost = data;
		})
		.error(function(data){
			console.log('error');
		});


	//list city post
	$http.get('http://localhost/www/project/api/home/list_City').
		error(function(data){
			console.log('error');
		}).
		success(function(data){	
			$scope.listCity = data;
		});
	
	// function check all	
	$scope.item = {
		checked_all : true,
		active : 1
	};
	$scope.toggleAll = function(items,list){
		// console.log(items.checked_all);
		var results = [];
		// console.log(list);
		if(items.checked_all){
			angular.forEach(list, function(value, key) {
				results.push(value.name);
				if(value.checkbox){
					value.checkbox = false;
				}
			});
		}else{
			items.checked_all = true;
			angular.forEach(list, function(value, key) {
				results.push(value.name);
			});
		}
		$scope.filterCity = JSON.stringify(results);
	}


	// function check all

	// check user have check city? 
	// yes then set check_all none
	// when lenght array result == length or lenght array == 0 array default 
	// then set check_all checked, donnt check City
	$scope.changeCity = function(item,list){
		
		var results = [];
		if(list){
			list.forEach(function(items){
				if(items.checkbox){
					results.push(items.name);
				}
			});
			$scope.item.checked_all = false;
			if(results.length == list.length || results.length == 0){
				
				$scope.item.checked_all = true;
				list.forEach(function(its){
					results.push(its.name);
					its.checkbox = false;
				});
				
			}
			$scope.filterCity = JSON.stringify(results);
		}

	}

	$scope.checkall = 1;
	$scope.nametoggle = [
		{ id: 1, name: 'show all' },
        { id: 2, name: 'hide' }
	];
	$scope.abc = function(){
		$scope.nametoggle.forEach(function(itm){
			if(itm.id == $scope.checkall){
				return itm.name;
			}
		});

	}

	$scope.toggleShow = function(list){
		// console.log($scope.item.checked_all);
		// console.log(item);

		if($scope.checkall == 1 ){
			console.log('lan dau');
			$scope.checkall = 2;
			
			console.log(list);
			list.forEach(function(itm){
				if(itm.active == 0){
					itm.active = 1;
				}
			});

		}else{
			console.log("lan thu 2");
			$scope.checkall = 1;
			
			console.log("list ",list);
			list.forEach(function(itm){
				if(itm.checkbox != true){
					itm.active = 0;
				}
			});


		}


	}



}]);

app.filter('FCity',function(){
	return function(input,condition) {
		var results = input;
		if (condition) 
		{
			var parse = JSON.parse(condition);
			results = input.filter(function(items){
				if(parse.indexOf(items.citys) > -1)
				{
					return items;
				}
			});
		}
		return results;

	}

});

