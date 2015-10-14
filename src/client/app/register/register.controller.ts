module myapp.register {
	interface IRegister {
		addUser(): void,
		username: string,
		password: string
	}
	
	class RegisterController implements IRegister {
		username: string;
		password: string;
		success: string;
		
		static $inject: any[] = [
            'userDataService'
		];
		
		constructor(
			private userDataService: core.IUserDataService
		) {
			
		}
		
		addUser(): void {
			var newUser: core.IUserResource = { password: this.password, username: this.username };
			var message: angular.IPromise<any> = this.userDataService.addUser(newUser);
			this.username = '';
			this.password = '';
			var that: RegisterController = this;
			message.then(
				function success(response: any): void {
					if (response.status === 500) {
						that.success = 'Failure';
						return response;
					} else {
						that.success = 'Success';
						return response;
					}
				});
		}
	}
}