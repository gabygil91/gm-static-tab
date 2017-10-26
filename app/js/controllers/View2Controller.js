'use strict'

myApp.controller('view2Controller', function($scope) {
    $scope.title = "View 2";
    $scope.onClick = onClick;
    
    microsoftTeams.initialize();
    microsoftTeams.settings.setSettings({
        entityId: "gmQA",
        contentUrl: "https://stark-chamber-28124.herokuapp.com",
        suggestedDisplayName: "GM Q/A",
        websiteUrl: "https://stark-chamber-28124.herokuapp.com"
     });
    function onClick(){
        microsoftTeams.settings.setValidityState(true);
    }
})