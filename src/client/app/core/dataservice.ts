module myapp.core {

        interface IDataservice {

        }

        class DataService implements IDataservice {

                static $inject: any[] = [
                        '$http',
                        '$q',
                        'exception',
                        'logger'];

                constructor(
                        private $http: angular.IHttpService,
                        private $q: angular.IQService,
                        private exception: angular.IExceptionHandlerService,
                        private logger: angular.ILogService) {

                }
                getMessageCount() : angular.IPromise<number> {
                        return this.$q.when(72);
                }
                getPeople() : angular.IPromise<any> {
                        var result : any;
                        return this.$http.get('/api/people').then(( response : any) : angular.IPromise<any> => {
                                result = response.data;
                                return result;
                        });
                }
                getUser() : angular.IPromise<any> {
                        var result : any;
                        return this.$http.get('/api/getuser').then(( response : any) : angular.IPromise<any> => {
                                result = response.data;
                                return result;
                        });
                }
        }
}
