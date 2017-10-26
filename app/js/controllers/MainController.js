'use strict'

myApp.controller('mainController', function($scope) {
    $scope.title = "this is the title whooo";
    $scope.test = "test"
    microsoftTeams.initialize();
    microsoftTeams.settings.setSettings({
        entityId: "gmQA",
        contentUrl: "https://stark-chamber-28124.herokuapp.com",
        suggestedDisplayName: "GM Q/A",
        websiteUrl: "https://stark-chamber-28124.herokuapp.com"
     });
    //function onClick(){
    microsoftTeams.settings.setValidityState(true);
    //}
})