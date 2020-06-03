import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ReportModel} from "../components/report-list-case/report-list-case.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeacherReportService {

  constructor(private http: HttpClient) { }
  getReports(userId: number, flag: string, resolved: boolean): Observable<ReportModel[]> {
    const url = `http://localhost:8080/restApi/reports?id=${userId}&flag=${flag}&resolved=${resolved}`;
    return this.http.get<ReportModel[]>(url);
  }
}
