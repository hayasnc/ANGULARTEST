var app = angular.module('contrlModule',[]);
app.controller('myController', function($scope, $location, myDateService) {
    $scope.myUrl =  $location.absUrl();
    $scope.places = [
        { Country: 'Bangkok', name: 'fathu' }, { Country: 'Dubai', name: 'hijas' }, { Country: 'Qatar', name: 'Ramees' }, { Country: 'Vitenam', name: 'Nisham' }
    ];
    $scope.price = 4;
    $scope.orderByValue = function(x){
    	console.log('sss');
    	$scope.orderValue = x;
    };
    $scope.date = myDateService.todayDate();
});