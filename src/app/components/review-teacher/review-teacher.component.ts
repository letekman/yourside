import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReportModel} from '../report/report.model';
import {ReportDetailedService} from '../../services/report-detailed.service';
import {TeacherReportService} from '../../services/teacher-report.service';

@Component({
  selector: 'app-review-teacher',
  templateUrl: './review-teacher.component.html',
  styleUrls: ['./review-teacher.component.css']
})
export class ReviewTeacherComponent implements OnInit {

  currentReport: ReportModel;

  reviewForm = new FormGroup({
    commitmentRate: new FormControl('', Validators.required),
    qualityRate: new FormControl('', Validators.required),
    speedRate: new FormControl('', Validators.required),
    successRate: new FormControl('', Validators.required),
    comment: new FormControl()
  });

  constructor(private reportDetailedService: ReportDetailedService, private teacherReportService: TeacherReportService) { }

  onSubmit() {
    // const toSubmit = {
    //   commitmentRate: parseInt(this.reviewForm.get('commitmentRate').value),
    //   qualityRate: parseInt(this.reviewForm.get('qualityRate').value),
    //   speedRate: parseInt(this.reviewForm.get('speedRate').value),
    //   successRate: parseInt(this.reviewForm.get('successRate').value),
    //   comment: this.reviewForm.get('comment').value
    // }
    // console.log(toSubmit)
    const updates = {};
    const commit = 'commit';
    updates[commit] = parseInt(this.reviewForm.get('commitmentRate').value);
    const resolution = 'resolution';
    updates[resolution] = parseInt(this.reviewForm.get('successRate').value);
    const contact = 'contact';
    updates[contact] = parseInt(this.reviewForm.get('qualityRate').value);
    const speed = 'speed';
    updates[speed] = parseInt(this.reviewForm.get('speedRate').value);
    const comments = 'comments';
    updates[comments] = this.reviewForm.get('comment').value;
    // const status = 'status';
    // updates[status] =
    console.log(updates);
    this.teacherReportService.updateRatings(updates).subscribe();
  }

  ngOnInit(): void {
    this.getReport();
  }

  getReport() {
    this.currentReport = this.teacherReportService.getCurrentReport();
  }

}
