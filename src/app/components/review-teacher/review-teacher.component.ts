import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReportModel} from '../report/report.model';
import {ReportDetailedService} from '../../services/report-detailed.service';

@Component({
  selector: 'app-review-teacher',
  templateUrl: './review-teacher.component.html',
  styleUrls: ['./review-teacher.component.css']
})
export class ReviewTeacherComponent implements OnInit {

  currentReport: ReportModel;

  constructor(private reportDetailedService: ReportDetailedService) { }

  reviewForm = new FormGroup({
    commitmentRate: new FormControl('', Validators.required),
    qualityRate: new FormControl('', Validators.required),
    speedRate: new FormControl('', Validators.required),
    successRate: new FormControl('', Validators.required),
    comment: new FormControl()
  })

  onSubmit() {
    const toSubmit = {
      commitmentRate: parseInt(this.reviewForm.get('commitmentRate').value),
      qualityRate: parseInt(this.reviewForm.get('qualityRate').value),
      speedRate: parseInt(this.reviewForm.get('speedRate').value),
      successRate: parseInt(this.reviewForm.get('successRate').value),
      comment: this.reviewForm.get('comment').value
    }
    console.log(toSubmit)
  }

  ngOnInit(): void {
    // this.getCurrentReport();
  }

}
