var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {

	$scope.friends = ['Steve Jobs', 'Mark Zuckerberg', 'Bill Gates', 'Steve Wozniak'];

});