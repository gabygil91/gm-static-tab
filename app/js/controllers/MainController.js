myApp.controller('mainController', function($scope, $location, $http) {
    $scope.title = "Unanswered Questions";
    $scope.masonryConfig = {
        'transitionDuration': '0.7s',
        'gutter': 5,
        'itemSelector': '.item',
        'isOriginTop': true,
        'isOriginLeft': true,
        'columnWidth': 10,
        'gridStyle': ''
    }
    $http.get("https://hackatron-api.herokuapp.com/api/getAllQuestions")
    .then(function(response) {
      $scope.results = response.data;
    })
 
})