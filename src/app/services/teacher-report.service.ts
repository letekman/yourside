import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ReportModel} from '../components/report-list-case/report-list-case.model';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../components/login/user.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherReportService {

  constructor(private http: HttpClient) { }

  getReports(userId: number, flag: string, resolved: boolean): Observable<ReportModel[]> {
    const url = `http://yoursidebackend.azurewebsites.net/restApi/reports?id=${userId}&flag=${flag}&resolved=${resolved}`;
    return this.http.get<ReportModel[]>(url);
  }

  getTeachers() {
    const url = `http://yoursidebackend.azurewebsites.net/restApi/users/getAllTeachers`;
    return this.http.get<UserModel[]>(url);
  }
}
