myApp.controller('SurveyController', function(SurveyService) {
    console.log('SurveyController created');
    var vm = this;

    //SurveyService.js 
    vm.surveyService = SurveyService;
    vm.demographics = SurveyService.demographics;  
    SurveyService.getDemographics();      

  });