import { Component, OnInit } from '@angular/core';
import {ReportModel} from "../report-list-case/report-list-case.model";
import {TeacherReportService} from "../../services/teacher-report.service";
import {CurrentUserService} from "../../services/current-user.service";


@Component({
  selector: 'app-teacher-report',
  templateUrl: './teacher-report.component.html',
  styleUrls: ['./teacher-report.component.css']
})
export class TeacherReportComponent implements OnInit {

  reports: ReportModel[];

  getReports(userId: number) {
    this.teacherReportService.getReports(userId, "teacher", false).subscribe(reports => this.reports = reports);
  }

  getUser() {
    this.currentUserService.getUser().subscribe(user => {
      const userId = user.id;
      this.getReports(userId);
    })
  }

  constructor(private teacherReportService: TeacherReportService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.getUser()
  }

}
