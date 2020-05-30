import { Component, OnInit } from '@angular/core';
import {ReportModel} from "../report-list-case/report-list-case.model";
import {TeacherReportService} from "../../services/teacher-report.service";


@Component({
  selector: 'app-teacher-report',
  templateUrl: './teacher-report.component.html',
  styleUrls: ['./teacher-report.component.css']
})
export class TeacherReportComponent implements OnInit {

  reports: ReportModel[];

  getReports() {
    this.teacherReportService.getReports().subscribe(reports => this.reports = reports);
  }

  constructor(private teacherReportService: TeacherReportService) { }

  ngOnInit(): void {
    this.getReports();
  }

}
