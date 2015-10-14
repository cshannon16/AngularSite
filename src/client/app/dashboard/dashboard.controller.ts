module myapp.dashboard {
	interface IDashboard {
		test: string;
		id: string;
		password: string;
	}
	class DashboardController implements IDashboard {
		test: string;
		results: core.IUserResource = [];
		id: string;
		password: string;
		success: string;
		static $inject: any[] = [
            'userDataService'
		];
		constructor (
			private userDataService: core.IUserDataService
			) {
			this.setText();
			this.getUser();
		}
		setText(): void {
			this.test = 'Hello World';
		}
		getUser(): void {
            var rawResults: angular.IPromise<core.IUserResource> = this.userDataService.getUser();
			var that: DashboardController = this;
            rawResults.then(
                function success(response: any): void {
					console.log(response.data);
					var user: core.IUserResource = response.data;
                    if (user) {
                        that.results = user;
                    }
                });
        }
		
	}
	angular
		.module('app.dashboard')
		.controller('DashboardController', DashboardController);
}