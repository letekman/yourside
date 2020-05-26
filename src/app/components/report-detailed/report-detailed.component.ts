import { Component, OnInit } from '@angular/core';
import {ReportModel} from "../report-list-case/report-list-case.model";

@Component({
  selector: 'app-report-detailed',
  templateUrl: './report-detailed.component.html',
  styleUrls: ['./report-detailed.component.css']
})
export class ReportDetailedComponent implements OnInit {
  report: ReportModel;

  constructor() { }

  ngOnInit(): void {
    // this.report = history.state.rep;
    // console.log(this.report)
  }

}
