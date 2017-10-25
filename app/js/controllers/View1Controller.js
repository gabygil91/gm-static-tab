'use strict';

myApp.controller('View1Controller',
    function ProjectsController($scope, $location) {
        console.log('this is the view 1 controller');

        microsoftTeams.initialize();
        microsoftTeams.settings.registerOnSaveHandler(function(saveEvent){
            microsoftTeams.settings.setSettings({
                 entityId: "gmQA",
                 contentUrl: "https://stark-chamber-28124.herokuapp.com/main",
                 suggestedDisplayName: "GM Q/A",
                 websiteUrl: "https://stark-chamber-28124.herokuapp.com/main",
                 removeUrl: "https://teams-get-started-sample.azurewebsites.net/tabremove.html",
              });
            saveEvent.notifySuccess();
        });
        
        //function onClick() {
            microsoftTeams.settings.setValidityState(true);
        //}
});