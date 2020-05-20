export class TeacherProfileModel {
    name: string;
    description: string;
    cat1: number;
    cat2: number;
    cat3: number;
    cat4: number;

    constructor(name: string, description: string, cat1: number, cat2: number, cat3: number, cat4: number) {
        this.description = description;
        this.name = name;
        this.cat1 = cat1;
        this.cat2 = cat2;
        this.cat3 = cat3;
        this.cat4 = cat4;
    }
}
