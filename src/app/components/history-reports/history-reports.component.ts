import { Component, OnInit } from '@angular/core';
// import {ReportModel} from "../report-list-case/report-list-case.model";
import {CurrentUserService} from "../../services/current-user.service";
import {TeacherReportService} from "../../services/teacher-report.service";
import {UserModel} from "../login/user.model";
import {ReportModel} from '../report/report.model';


@Component({
  selector: 'app-history-reports',
  templateUrl: './history-reports.component.html',
  styleUrls: ['./history-reports.component.css']
})
export class HistoryReportsComponent implements OnInit {

  reports: ReportModel[];
  user: UserModel;
  role: string;

  getReports(userId: number) {
    this.role = this.user.role['name'];
    if (this.role == 'ROLE_TEACHER')
    {
      this.historyReportsService.getReports(userId, "teacher", true).subscribe(reports => this.reports = reports);
    }
    else if (this.role == 'ROLE_STUDENT')
    {
      this.historyReportsService.getReports(userId, "student", true).subscribe(reports => this.reports = reports);
    }
  }

  getUser() {
    this.currentUserService.getUser().subscribe(user => {
      this.user = user;
      this.getReports(user.id);
    })
  }

  constructor(private historyReportsService: TeacherReportService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.getUser()
  }

}
