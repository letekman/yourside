import { Component, OnInit } from '@angular/core';
// import {ReportModel} from "../report-list-case/report-list-case.model";
import {ReportDetailedService} from "../../services/report-detailed.service";
import {ActivatedRoute} from "@angular/router";
import {CurrentUserService} from "../../services/current-user.service";
import {ReportModel} from '../report/report.model';
import {UserModel} from '../login/user.model';

@Component({
  selector: 'app-report-detailed',
  templateUrl: './report-detailed.component.html',
  styleUrls: ['./report-detailed.component.css']
})
export class ReportDetailedComponent implements OnInit {
  report: ReportModel;
  reporter: UserModel;
  id: string;
  resolved: boolean;
  role: string

  constructor(private reportDetailedService: ReportDetailedService, private route: ActivatedRoute,
              private currentUserService: CurrentUserService) { }

  getReport() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.reportDetailedService.getReport(this.id).subscribe(report => {
      this.report = report;
      this.resolved = report.status === 'RESOLVED';
      this.reporter = report.student;
    })
  }

  getUser() {
    this.currentUserService.getUser().subscribe(user => {
      this.role = user.role['name'];
    })
  }

  ngOnInit(): void {
    this.getReport();
    this.getUser();
  }

}
