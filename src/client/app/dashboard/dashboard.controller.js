var myapp;
(function (myapp) {
    var dashboard;
    (function (dashboard) {
        var DashboardController = (function () {
            function DashboardController(userDataService) {
                this.userDataService = userDataService;
                this.results = [];
                this.setText();
                this.getUser();
            }
            DashboardController.prototype.setText = function () {
                this.test = 'Hello World';
            };
            DashboardController.prototype.getUser = function () {
                var rawResults = this.userDataService.getUser();
                var that = this;
                rawResults.then(function success(response) {
                    console.log(response.data);
                    var user = response.data;
                    if (user) {
                        that.results = user;
                    }
                });
            };
            DashboardController.prototype.addUser = function () {
                var newUser = { id: this.id, password: this.password };
                var message = this.userDataService.addUser(newUser);
                this.id = '';
                this.password = '';
                var that = this;
                message.then(function success(response) {
                    if (response.status === 500) {
                        that.success = 'Failure';
                        return response;
                    }
                    else {
                        that.success = 'Success';
                        return response;
                    }
                });
                this.getUser();
            };
            DashboardController.$inject = [
                'userDataService'
            ];
            return DashboardController;
        })();
        angular
            .module('app.dashboard')
            .controller('DashboardController', DashboardController);
    })(dashboard = myapp.dashboard || (myapp.dashboard = {}));
})(myapp || (myapp = {}));
