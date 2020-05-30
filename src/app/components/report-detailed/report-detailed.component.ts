import { Component, OnInit } from '@angular/core';
import {ReportModel} from "../report-list-case/report-list-case.model";
import {ReportDetailedService} from "../../services/report-detailed.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-report-detailed',
  templateUrl: './report-detailed.component.html',
  styleUrls: ['./report-detailed.component.css']
})
export class ReportDetailedComponent implements OnInit {
  report: ReportModel;
  id: string;

  constructor(private reportDetailedService: ReportDetailedService, private route: ActivatedRoute) { }

  getReport() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.reportDetailedService.getReport(this.id).subscribe(report => {
      this.report = report
    })
  }

  ngOnInit(): void {
    this.getReport();
  }

}
