import {UserModel} from '../login/user.model';
import {ReportModel} from '../report/report.model';

export class MessageModel {
    // id: number;
    user: UserModel;
    report: ReportModel;
    text: string;
    timestamp: number;

    constructor(user: UserModel, report: ReportModel, text: string, timestamp: number) {
        this.user = user;
        this.report = report;
        this.text = text;
        this.timestamp = timestamp;
    }
}
