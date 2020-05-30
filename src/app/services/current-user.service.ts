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
    const username = sessionStorage.getItem('AuthUsername')
    const url = `http://localhost:8080/auth/${username}`;
    return this.http.get<UserModel>(url);
  }

}
