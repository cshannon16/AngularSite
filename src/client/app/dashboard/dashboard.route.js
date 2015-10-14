(function () {
    'use strict';
    angular
        .module('app.dashboard')
        .run(appRun);
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }
    function getStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm',
                    title: 'Dashboard'
                }
            }
        ];
    }
})();
