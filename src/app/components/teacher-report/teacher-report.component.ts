import { Component, OnInit } from '@angular/core';
import {ReportModel} from "../report-list-case/report-list-case.model";
import {TeacherReportService} from "../../services/teacher-report.service";
import {CurrentUserService} from "../../services/current-user.service";
import {UserModel} from "../login/user.model";


@Component({
  selector: 'app-teacher-report',
  templateUrl: './teacher-report.component.html',
  styleUrls: ['./teacher-report.component.css']
})
export class TeacherReportComponent implements OnInit {

  reports: ReportModel[];
  user: UserModel;
  role: string

  getReports(userId: number) {
    this.role = this.user.role['name'];
    if (this.role == 'ROLE_TEACHER')
    {
      this.teacherReportService.getReports(userId, "teacher", false).subscribe(reports => this.reports = reports);
    }
    else if (this.role == 'ROLE_STUDENT')
    {
      this.teacherReportService.getReports(userId, "student", false).subscribe(reports => this.reports = reports);
    }
  }

  getUser() {
    this.currentUserService.getUser().subscribe(user => {
      this.user = user;
      this.getReports(user.id);
    })
  }

  constructor(private teacherReportService: TeacherReportService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.getUser()
  }

}
