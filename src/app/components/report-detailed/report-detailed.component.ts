import { Component, OnInit } from '@angular/core';
// import {ReportModel} from "../report-list-case/report-list-case.model";
import {ReportDetailedService} from "../../services/report-detailed.service";
import {ActivatedRoute} from "@angular/router";
import {CurrentUserService} from "../../services/current-user.service";
import {ReportModel} from '../report/report.model';
import {UserModel} from '../login/user.model';
import {MessageModel} from './message.model';

@Component({
  selector: 'app-report-detailed',
  templateUrl: './report-detailed.component.html',
  styleUrls: ['./report-detailed.component.css']
})
export class ReportDetailedComponent implements OnInit {
  report: ReportModel;
  reporter: UserModel;
  currentUser: UserModel;
  id: string;
  resolved: boolean;
  rated: boolean;
  role: string;
  // date = new Date().getDate();
  messages: MessageModel[];

  // messages = [
  //   { role: 'teacher',
  //     message: 'Hello, I\'m happy you chose to write to me. Please explain in detail what happened that day.'},
  //   { role: 'student',
  //     message: 'I\'m not sure, I think I\'ve seen the victim being hit several times, but it was far and I didn\'t have my glasses on so they could\'ve been just playing.'},
  //   { role: 'teacher',
  //     message: 'Okay, I understand. I will look into it anyway, thank you for reporting :)'}
  // ];


  constructor(private reportDetailedService: ReportDetailedService, private route: ActivatedRoute,
              private currentUserService: CurrentUserService) { }

  getReport() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.reportDetailedService.getReport(this.id).subscribe(report => {
      this.report = report;
      this.resolved = report.status === 'RESOLVED';
      this.rated = report.status === 'RATED';
      this.reporter = report.student;
      // this.messages = report.messages;
    })
  }

  getUser() {
    this.currentUserService.getUser().subscribe(user => {
      this.role = user.role['name'];
      this.currentUser = user;
    })
  }

  ngOnInit(): void {
    this.getReport();
    this.getUser();
    this.getMessages();
    // console.log(this.date);
  }

  getMessages() {
    const reportid = this.route.snapshot.paramMap.get('id');
    this.reportDetailedService.getMessages(Number(reportid)).subscribe(messages => this.messages = messages);
  }

  sendMessage(newmessage: string) {
    // let date = '';
    // date += Date.now();
    const timestamp = Date.now();
    // console.log(date);
    const user = this.currentUser;
    const text = newmessage;
    const report = this.report;
    // console.log(date);
    console.log({report, user, text, timestamp});
    this.currentUserService.sendMessage({report, user, text, timestamp} as MessageModel).subscribe(() => this.getMessages());
    console.log(this.messages);
    console.log(this.report);
  }
}
