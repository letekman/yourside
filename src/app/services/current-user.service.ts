import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {UserModel} from '../components/login/user.model';
import {ReportModel} from '../components/report/report.model';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<UserModel> {
    const url = `http://yoursidebackend.azurewebsites.net/restApi/users/getCurrentUser`;
    return this.http.get<UserModel>(url);
  }

  submitNewReport(report: ReportModel) {
    const url = `http://yoursidebackend.azurewebsites.net/restApi/reports`;
    return this.http.post<ReportModel>(url, report, httpOptions).pipe(
        tap((reportAdded: ReportModel) => this.log(`added report id=`)),
        catchError(this.handleError<ReportModel>('submitNewReport'))
    );
  }

  private log(message: string) {
    console.log('CurrentUserService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // OLD ----> this url mapping has no method implemented
  //
  // getUser(): Observable<UserModel> {
  //   const username = sessionStorage.getItem('AuthUsername');
  //   const url = `http://localhost:8080/auth/${username}`;
  //   return this.http.get<UserModel>(url);
  // }

}
