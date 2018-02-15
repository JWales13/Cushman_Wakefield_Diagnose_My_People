myApp.controller('BuildSurveyContactInfoController', ['$routeParams', 'BuildSurveyContactInfoService', '$scope', function ($routeParams, BuildSurveyContactInfoService,$scope) {
    console.log('BuildSurveyController created');
    console.log($routeParams)
    var self = this;

    //Booleans that track whether sections were added to survey.  They control whether a add or remove button appears on DOM
    //they also feed into the self.reviewBuildSurvey and act as indicators when constructing the $routeparams.
    self.kpisAdded = {
        amenitiesAdded: false,
        brandAdded: false,
        locationAdded: false,
        retainmentAdded: false
    };

    self.kpisAdded.amenitiesAdded = JSON.parse($routeParams.amenitiesAdded);
    self.kpisAdded.brandAdded = JSON.parse($routeParams.brandAdded);
    self.kpisAdded.locationAdded = JSON.parse($routeParams.locationAdded);
    self.kpisAdded.retainmentAdded = JSON.parse($routeParams.retainmentAdded);

    self.contactInformation = BuildSurveyContactInfoService.contactInformation;

    self.postNewSurveyAndClient = BuildSurveyContactInfoService.postNewSurveyAndClient;


    self.openPicker = function () {

        console.log('in openPicker()')
        //fileStack API Key is Af21bwxjPQiohogBxyEQsz
        var fsClient = filestack.init('Af21bwxjPQiohogBxyEQsz');
        fsClient.pick({
            fromSources: ["local_file_system", "url", "imagesearch", "googledrive", "dropbox", "onedrive", "clouddrive"],
            accept: ["image/*"],
            transformations: {
                crop: { force: true }
            }
        }).then(function (response) {
            // declare this function to handle response
            console.log(response)
            self.contactInformation.logoURL = response.filesUploaded[0].url
            console.log(self.contactInformation.logoURL)
            $scope.$apply()
        });

    }




    console.log(self.kpisAdded)

}]);