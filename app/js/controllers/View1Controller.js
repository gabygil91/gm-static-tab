'use strict'

myApp.controller('view1Controller', function($scope, $location, $http) {
  $http.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(response) {
      console.log(response.data)
      $scope.myWelcome = response.data
    })
})
