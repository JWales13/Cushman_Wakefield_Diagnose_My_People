myApp.service('AdminSurveyReviewService', ['$http', '$location', function ($http, $location, AdminSurveyReviewService) {

    var self = this;
    self.client = { survey: {} };
    self.categories = { list: [] };

    //GET selected KPI for each client and display them in their own view using $routeparams
    self.getClientSurvey = function (clientId) {
        $http({
            method: 'GET',
            url: '/admin-survey-review/',
            params: {
                clientId: clientId
            }
        }).then(function (response) {
            self.client.survey = response.data;
            console.log(response.data);
        });
    };

    //GET all KPIs
    self.getCategories = function () {
        $http({
            method: 'GET',
            url: '/admin-survey-review/all',
        }).then(function (response) {
            self.categories.list = response.data;
            console.log(response.data);
        });
    };

    self.compareCategories = function () {
        var all = self.categories.list;
        var selected = self.client.survey;
        console.log('all', all);


    }

    //edit or add a blurb to selected KPI on client's survey
    self.editBlurb = function (blurbToEdit, clientId) {
        console.log(blurbToEdit);

        $http({
            method: 'PUT',
            url: '/admin-survey-review/',
            data: blurbToEdit,
        }).then(function (response) {
            console.log('response', response);
            self.getClientSurvey(clientId);
        });
    }

    //add a KPI category to client survey
    self.addClientCategory = function (newCategory, clientId) {
        console.log('newCategory', newCategory);
        swal({
            text: "Category added!",
            icon: "success",
        });
        $http({
            method: 'POST',
            url: '/admin-survey-review/',
            data: { newCategory, clientId
            }
        }).then(function (response) {
            self.getClientSurvey(clientId);
        });
    }

    //remove a category from a client's survey
    self.removeCategory = function (categoryToDelete, clientId) {
        swal({
            title: "Are you sure?",
            text: "This category will be removed from the survey",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Category removed!", {
                        icon: "success",
                    });
                    $http({
                        method: 'DELETE',
                        url: '/admin-survey-review/' + categoryToDelete.id,
                    }).then(function (response) {
                        self.getClientSurvey(clientId);
                    });
                } else {
                    swal("File not deleted");
                }
            });
    };
}]);