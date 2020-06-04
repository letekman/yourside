import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {MainpanelComponent} from './components/mainpanel/mainpanel/mainpanel.component';
import {ReviewTeacherComponent} from './components/review-teacher/review-teacher.component';
import {TeacherreviewsComponent} from './components/mainpanel/teacherreviews/teacherreviews/teacherreviews.component';
import {ReportComponent} from './components/report/report.component';
import {TeacherReportComponent} from './components/teacher-report/teacher-report.component';
import {ReportDetailedComponent} from './components/report-detailed/report-detailed.component';
import {HistoryReportsComponent} from './components/history-reports/history-reports.component';
import {RegisterComponent} from './components/register/register.component';
import {IntroComponent} from './components/mainpanel/intro/intro.component';
import {RoleBasedRestrictionGuard} from './guard/role-based-restriction.guard';


const routes: Routes = [
    {
        path: '', component: MainpanelComponent, children: [
            {
                path: '',
                component: IntroComponent,
                canActivate: [RoleBasedRestrictionGuard],
                data: {role: ['ROLE_TEACHER', 'ROLE_STUDENT']}
            },
            {
                path: 'review',
                component: ReviewTeacherComponent,
                canActivate: [RoleBasedRestrictionGuard],
                data: {role: ['ROLE_STUDENT']}
            },
            {
                path: 'teacherList',
                component: TeacherreviewsComponent,
                canActivate: [RoleBasedRestrictionGuard],
                data: {role: ['ROLE_STUDENT']}
            },
            {
                path: 'createReport',
                component: ReportComponent,
                canActivate: [RoleBasedRestrictionGuard],
                data: {role: ['ROLE_STUDENT']}
            },
            {
                path: 'activeReport',
                component: TeacherReportComponent,
                canActivate: [RoleBasedRestrictionGuard],
                data: {role: ['ROLE_TEACHER', 'ROLE_STUDENT']}
            },
            {
                path: 'resolvedCases',
                component: HistoryReportsComponent,
                canActivate: [RoleBasedRestrictionGuard],
                data: {role: ['ROLE_TEACHER', 'ROLE_STUDENT']}
            },
            {
                path: 'activeReport/:id',
                component: ReportDetailedComponent,
                canActivate: [RoleBasedRestrictionGuard],
                data: {role: ['ROLE_TEACHER', 'ROLE_STUDENT']}
            },
            {
                path: 'resolvedCases/:id',
                component: ReportDetailedComponent,
                canActivate: [RoleBasedRestrictionGuard],
                data: {role: ['ROLE_TEACHER', 'ROLE_STUDENT']}
            }
        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', redirectTo: ''}
];


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
