var myapp;
(function (myapp) {
    var core;
    (function (core) {
        'use strict';
        var UserDataService = (function () {
            function UserDataService($http) {
                this.$http = $http;
                this.GET_USER_URL = '/api/getuser';
                this.ADD_USER_URL = '/api/adduser';
            }
            UserDataService.prototype.getUser = function () {
                return this.$http.get(this.GET_USER_URL);
            };
            UserDataService.prototype.addUser = function (newUser) {
                return this.$http.post(this.ADD_USER_URL, newUser);
            };
            UserDataService.$inject = ['$http'];
            return UserDataService;
        })();
        core.UserDataService = UserDataService;
        angular
            .module('app.core')
            .service('userDataService', UserDataService);
    })(core = myapp.core || (myapp.core = {}));
})(myapp || (myapp = {}));
