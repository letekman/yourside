import {Component, Input, OnInit} from '@angular/core';
import {ReportModel} from "./report-list-case.model";
import {Router} from "@angular/router";

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

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.link = `${this.report.id}`;
  }

}
