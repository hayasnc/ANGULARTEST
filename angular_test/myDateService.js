var app = angular.module('dateService',[]);
app.service('myDateService', function () {
	this.todayDate = function(){
	 var d = new Date();
	 var n = d.getDate();
	 return n;
	}
});