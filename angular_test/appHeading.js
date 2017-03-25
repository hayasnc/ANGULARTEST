var app = angular.module('myDirective',[]);
app.directive('appHeading', function(){
	return {
		template:'<h1 align="center padding=40px">Searching for </h1>'
	}
});
