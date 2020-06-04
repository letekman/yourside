import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {ReportModel} from "../components/report-list-case/report-list-case.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReportDetailedService {

  report: ReportModel;

  constructor(private http: HttpClient) { }

  public getReport = (id: string): Observable<ReportModel> => {
    const url = `http://https://yoursidebackend.azurewebsites.net/restApi/reports/${id}`;
    return this.http.get<ReportModel>(url);
  }
}
