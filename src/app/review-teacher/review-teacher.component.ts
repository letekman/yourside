import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-review-teacher',
  templateUrl: './review-teacher.component.html',
  styleUrls: ['./review-teacher.component.css']
})
export class ReviewTeacherComponent implements OnInit {

  constructor() { }

  reviewForm = new FormGroup({
    commitmentRate: new FormControl('', Validators.required),
    commitmentComment: new FormControl(),
    qualityRate: new FormControl('', Validators.required),
    qualityComment: new FormControl(),
    speedRate: new FormControl('', Validators.required),
    speedComment: new FormControl(),
    successRate: new FormControl('', Validators.required),
    successComment: new FormControl()
  })

  onSubmit() {
    const toSubmit = {
      commitmentRate: parseInt(this.reviewForm.get('commitmentRate').value),
      commitmentComment: this.reviewForm.get('commitmentComment').value,
      qualityRate: parseInt(this.reviewForm.get('qualityRate').value),
      qualityComment: this.reviewForm.get('qualityComment').value,
      speedRate: parseInt(this.reviewForm.get('speedRate').value),
      speedComment: this.reviewForm.get('speedComment').value,
      successRate: parseInt(this.reviewForm.get('successRate').value),
      successComment: this.reviewForm.get('successComment').value
    }
    console.log(toSubmit)
  }

  ngOnInit(): void {
  }

}
