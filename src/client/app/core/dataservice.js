var myapp;
(function (myapp) {
    var core;
    (function (core) {
        var DataService = (function () {
            function DataService($http, $q, exception, logger) {
                this.$http = $http;
                this.$q = $q;
                this.exception = exception;
                this.logger = logger;
            }
            DataService.prototype.getMessageCount = function () {
                return this.$q.when(72);
            };
            DataService.prototype.getPeople = function () {
                var result;
                return this.$http.get('/api/people').then(function (response) {
                    result = response.data;
                    return result;
                });
            };
            DataService.prototype.getUser = function () {
                var result;
                return this.$http.get('/api/getuser').then(function (response) {
                    result = response.data;
                    return result;
                });
            };
            DataService.$inject = [
                '$http',
                '$q',
                'exception',
                'logger'];
            return DataService;
        })();
    })(core = myapp.core || (myapp.core = {}));
})(myapp || (myapp = {}));
