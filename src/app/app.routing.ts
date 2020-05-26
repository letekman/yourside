import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainpanelComponent} from './components/mainpanel/mainpanel/mainpanel.component';
import {ReviewTeacherComponent} from './review-teacher/review-teacher.component';
import {TeacherreviewsComponent} from './components/mainpanel/teacherreviews/teacherreviews/teacherreviews.component';
import {ReportComponent} from './components/report/report.component';
import {TeacherReportComponent} from "./components/teacher-report/teacher-report.component";
import {ReportDetailedComponent} from "./components/report-detailed/report-detailed.component";


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'panel', component: MainpanelComponent},
    { path: 'review', component: ReviewTeacherComponent},
    { path: 'teacherList', component: TeacherreviewsComponent},
    { path: 'createReport', component: ReportComponent},
    { path: 'teacherReports', component: TeacherReportComponent},
    { path: 'teacherReports/:id', component: ReportDetailedComponent }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
