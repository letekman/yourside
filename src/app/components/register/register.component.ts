import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../../auth/login-model';
import {AuthenticationService} from '../../auth/authentication.service';
import {TokenStorageService} from '../../auth/token-storage.service';
import {SignupModel} from '../../auth/signup-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  signupInfo: SignupModel;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.role === 'Admin') {
      this.form.role = 'admin';
    } else if (this.form.role === 'Teacher') {
      this.form.role = 'teacher';
    } else if (this.form.role === 'School admin') {
      this.form.role = 'school_admin';
    } else if (this.form.role === 'Student') {
      this.form.role = 'student';
    }


    this.signupInfo = new SignupModel(
        this.form.username,
        this.form.role,
        this.form.password,
        this.form.firstName,
        this.form.lastName
    );


    this.authService.signUp(this.signupInfo).subscribe(
        data => {
          this.router.navigateByUrl('/login');
        }
    );

  }

}
