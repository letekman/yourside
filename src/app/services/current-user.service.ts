import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../components/login/user.model";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<UserModel> {
    const url = `http://localhost:8080/restApi/users/getCurrentUser`;
    return this.http.get<UserModel>(url);
  }

}
