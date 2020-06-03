export class UserModel {
    id: number;
    username: string;
    role: string;
    firstName: string;
    lastName: string;
    active: boolean;

    constructor(id: number, username: string, role: string, firstName: string, lastName: string, active: boolean) {
        this.id = id;
        this.username = username;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.active = active;
    }

}
