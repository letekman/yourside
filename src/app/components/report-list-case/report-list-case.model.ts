export class ReportModel {
    id: number;
    role: string;
    perp: string;
    victim: string;
    type: string;
    description: string;
    status: string

    constructor(id: number, role: string, perp: string, victim: string, type: string, status: string) {
        this.id = id;
        this.role = role;
        this.perp = perp;
        this.victim = victim;
        this.type = type;
        this.status = status;
    }
}
