import { Component, OnInit } from '@angular/core';
import {TeacherProfileModel} from '../teacherprofile/teacherprofile.model';

@Component({
  selector: 'app-teacherreviews',
  templateUrl: './teacherreviews.component.html',
  styleUrls: ['./teacherreviews.component.css']
})
export class TeacherreviewsComponent implements OnInit {

  teachers: TeacherProfileModel[];

  constructor() {
    this.teachers = [
      new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
      new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
      new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
      new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
      new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
      new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
      new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4),
      new TeacherProfileModel('Jan Kowalski', 'I am super teacher and i will help you', 2, 2, 1.5, 4)
     ]
  }

  ngOnInit(): void {
  }

}
