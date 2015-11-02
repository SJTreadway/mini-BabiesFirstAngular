var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {

	$scope.friends = ['Steve Jobs', 'Mark Zuckerberg', 'Bill Gates', 'Steve Wozniak'];

	$scope.addFriends = function() {
        if(!$scope.newFriend) {
            return;
        }

        for (var i = 0; i < this.friends.length; i++) {
        	if (this.friends[i] === this.newFriend) {
        		alert("Friend already exists!");
        		$scope.newFriend = '';
        		return;
        	}
        }

        $scope.friends.push($scope.newFriend);
        $scope.newFriend = '';
	}

});