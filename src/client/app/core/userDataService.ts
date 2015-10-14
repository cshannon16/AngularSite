module myapp.core {
    'use strict';

    export interface IUserDataService {
        getUser(): angular.IPromise<core.IUser>;
        addUser(newUser: core.IUserResource): angular.IPromise<any>,
        GET_USER_URL: string;
        ADD_USER_URL: string;
    }

    export class UserDataService implements IUserDataService {
        static $inject: any[] = ['$http'];
        constructor(private $http: angular.IHttpService) {
        }
        GET_USER_URL: string = '/api/getuser';
        ADD_USER_URL: string = '/api/adduser';

        getUser(): angular.IPromise<core.IUser> {
            return this.$http.get(this.GET_USER_URL);
        }
        addUser(newUser: core.IUserResource): angular.IPromise<any> {
            return this.$http.post(this.ADD_USER_URL, newUser);
        }
    }
    angular
        .module('app.core')
        .service('userDataService', UserDataService);
}
