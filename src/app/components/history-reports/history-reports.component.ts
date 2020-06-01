import { Component, OnInit } from '@angular/core';
import {ReportModel} from "../report-list-case/report-list-case.model";
import {CurrentUserService} from "../../services/current-user.service";
import {TeacherReportService} from "../../services/teacher-report.service";


@Component({
  selector: 'app-history-reports',
  templateUrl: './history-reports.component.html',
  styleUrls: ['./history-reports.component.css']
})
export class HistoryReportsComponent implements OnInit {

  reports: ReportModel[];

  getReports(userId: number) {
    this.historyReportsService.getReports(userId, 'teacher', true).subscribe(reports => this.reports = reports);
  }

  getUser() {
    this.currentUserService.getUser().subscribe(user => {
      const userId = user.id;
      this.getReports(userId);
    })
  }

  constructor(private historyReportsService: TeacherReportService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.getUser()
  }

}
