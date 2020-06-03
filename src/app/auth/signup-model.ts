export class SignupModel {

    username: string;
    role: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(username: string, role: string, password: string, firstName: string, lastName: string) {
        this.username = username;
        this.role = role;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

}
