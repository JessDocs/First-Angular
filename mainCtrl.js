var app = angular.module('friendsList');

app.controller('mainCtrl', function ($scope){
    $scope.friends = ['Amber', 'Toph', 'Daniel', 'Karl', 'Jaykob'];
    
    $scope.addFriend = function() {
       $scope.friends.push($scope.newFriend);
    }
});