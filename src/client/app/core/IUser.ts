module myapp.core {
    // Holds Patients Records
    'use strict';

    export interface IUserResource {
        id?: string;
        password?: string;
        username?: string;
    }

     export interface IUserEntry {
        resource?: IUserResource;
    }

     export interface IUser {
        type?: string;
        entry?: IUserEntry[];
        resourceType?: string;
    }
}
