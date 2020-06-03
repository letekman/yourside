import {Component, Input, OnInit} from '@angular/core';
import {TeacherProfileModel} from './teacherprofile.model';
import {TeacherProfilesService} from '../Service/teacher-profiles.service';

@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.component.html',
  styleUrls: ['./teacherprofile.component.css'],
})
export class TeacherprofileComponent implements OnInit {
  @Input()
  teacher: TeacherProfileModel;
  maxRate = 5;
  readonly = true;

  constructor() {
  }


  ngOnInit(): void {


  }
}
