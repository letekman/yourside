import {Component, Input, OnInit} from '@angular/core';
import {StatusFormModel} from "./status-form.model";
import {ReportDetailedService} from "../../services/report-detailed.service";
import {Router} from "@angular/router";
import {TeacherReportService} from '../../services/teacher-report.service';

@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {
  @Input()
  reportId: string;
  status = new StatusFormModel();

  constructor(private router: Router, private reportDetailedService: ReportDetailedService, private teacherReportService: TeacherReportService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.reportDetailedService.markStatus(this.reportId, this.status.status);
    const updates = {};
    const status = 'status';
    updates[status] = this.status.status;
    this.teacherReportService.updateRatings(updates).subscribe();
    this.router.navigate(['/activeReport']);
  }

  onItemChange(value) {
    this.status.status = value;
  }

}
