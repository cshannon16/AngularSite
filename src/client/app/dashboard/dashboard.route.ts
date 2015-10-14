((): void => {
    'use strict';
    angular
        .module('app.dashboard')
        .run(appRun);
    /* @ngInject */
    function appRun(routerHelper: blocks.RouterHelper): void {
        routerHelper.configureStates(getStates());
    }
    function getStates(): blocks.IMyState[] {
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
