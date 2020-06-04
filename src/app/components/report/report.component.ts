import { Component, OnInit } from '@angular/core';
import {TeacherReportService} from '../../services/teacher-report.service';
import {CurrentUserService} from '../../services/current-user.service';
import {UserModel} from '../login/user.model';
import {ReportModel} from './report.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  anonymous = false;
  role = 'victim';
  teachers: any[];
  currentUser: UserModel;

  constructor(private teacherReportService: TeacherReportService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.getTeachers();
    this.getCurrentUser();
  }

  getTeachers() {
    this.teacherReportService.getTeachers().subscribe(teachers => this.teachers = teachers);
  }

  getCurrentUser() {
    this.currentUserService.getUser().subscribe(user => this.currentUser = user);

  }

  submitReport(perp: string, victim: string, type: string, description: string, teacherid: number): void {
    // console.log(perpname, victimname, type, description, teacher);
    // console.log(this.teachers);
    console.log(this.teachers);
    console.log(teacherid);
    if (this.role === 'victim') {
      if (this.anonymous) {
        victim = 'anonymous';
      } else {
        victim = this.currentUser.firstName + this.currentUser.lastName;
      }
    }
    const student = this.currentUser;
    const anonymous = this.anonymous;
    const role = this.role;
    // const teacherfiltered = this.teachers.filter(t => t.id === teacherid);
    // console.log(teacherfiltered);
    // const teacher = teacherfiltered[0];
    const teacher = this.teachers[0]; // TODO: remove that and add real choice of teacher
    this.currentUserService.submitNewReport({perp, victim, type, description, teacher, anonymous, role, student} as ReportModel).subscribe()
  }
}
