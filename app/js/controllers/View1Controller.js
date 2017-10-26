'use strict'

myApp.controller('view1Controller', function($scope, $location, $http) {
    $scope.title = "this is the title whooo";
    //$scope.onClick = onClick;
  $http.get("https://jsonplaceholder.typicode.com/posts/1")
    .then(function(response) {
      console.log(response.data)
      $scope.myWelcome = response.data
    })

    // microsoftTeams.initialize();
    // microsoftTeams.settings.setSettings({
    //     entityId: "gmQA",
    //     contentUrl: "https://stark-chamber-28124.herokuapp.com",
    //     suggestedDisplayName: "GM Q/A",
    //     websiteUrl: "https://stark-chamber-28124.herokuapp.com"
    //  });
    // function onClick(){
    //     microsoftTeams.settings.setValidityState(true);
    // }
})