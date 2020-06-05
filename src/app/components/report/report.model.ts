import {MessageModel} from '../report-detailed/message.model';

export class ReportModel {

    id: number;
    anonymous: boolean;
    role: string;
    perp: string;
    victim: string;
    type: string;
    description: string;
    teacher: any;
    student: any;
    status: string;
    messages: MessageModel[];
    // status: string;

    // tslint:disable-next-line:max-line-length
    constructor(anonymous: boolean, role: string, perp: string, victim: string, type: string, description: string, teacher: any, student: any, status: string, messages: MessageModel[]) {
        this.anonymous = anonymous;
        this.role = role;
        this.perp = perp;
        this.victim = victim;
        this.type = type;
        this.description = description;
        this.teacher = teacher;
        this.student = student;
        this.status = status;
        this.messages = messages;
    }
}


