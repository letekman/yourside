import { Component, OnInit } from '@angular/core';
import {ReportModel} from "../report-list-case/report-list-case.model";


@Component({
  selector: 'app-teacher-report',
  templateUrl: './teacher-report.component.html',
  styleUrls: ['./teacher-report.component.css']
})
export class TeacherReportComponent implements OnInit {

  reports = [] = [
    new ReportModel(1, 'Bystander', 'William', 'Gregory', 'Physical', 'unread'),
    new ReportModel(2, 'Bystander','Helga', 'Donald', 'Cyberbullying', 'unread'),
    new ReportModel(3, 'Bystander','Kate', 'Mark', 'Psychological', 'in progress'),
    new ReportModel(4, 'Bystander','Julian', 'Monica', 'Physical', 'in progress'),
    new ReportModel(5, 'Bystander','Henry', 'Emma', 'Social Exclusion', 'unresolvable')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
