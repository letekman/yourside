export class ReportModel {

    anonymous: boolean;
    role: string;
    perp: string;
    victim: string;
    type: string;
    description: string;
    teacher: string;
    // status: string;

    constructor(anonymous: boolean, role: string, perp: string, victim: string, type: string, description: string, teacher: string) {
        this.anonymous = anonymous;
        this.role = role;
        this.perp = perp;
        this.victim = victim;
        this.type = type;
        this.description = description;
        this.teacher = teacher;
    }
}


