export class UserModel {
    id: number;
    username: string;
    role: object;
    constructor(id: number, username: string, roles: object) {
        this.id = id;
        this.username = username;
        this.role = roles;
    }
}
