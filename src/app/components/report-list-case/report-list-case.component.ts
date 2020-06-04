import {Component, Input, OnInit} from '@angular/core';
// import {ReportModel} from "./report-list-case.model";
import {Router} from '@angular/router';
import {TeacherReportService} from '../../services/teacher-report.service';
import {ReportModel} from '../report/report.model';

@Component({
  selector: 'app-report-list-case',
  templateUrl: './report-list-case.component.html',
  styleUrls: ['./report-list-case.component.css']
})
export class ReportListCaseComponent implements OnInit {
  @Input()
  report: ReportModel;
  @Input()
  link: number;
  @Input()
  role: string;
  @Input()
  resolved: boolean;

  constructor(private router: Router, private teacherReportService: TeacherReportService) { }

  ngOnInit(): void {
    // this.link = `${this.report.id}`;
  }

  setCurrentReport() {
    this.teacherReportService.setCurrentReport(this.report);
  }
}
