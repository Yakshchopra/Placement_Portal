import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacultyService } from "./../../faculty.service";
import { RegisterComponent } from '../register/register.component';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private route: Router,
    private toastr: ToastrService,
    private facultyService: FacultyService
  ) {}
  user = 0;
  errormessage;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      registrationNumber: ['', [Validators.required, Validators.minLength(15)]],
      password: ['', [Validators.required]],
    });
  }
  // Login Function
  login() {
    const form = this.loginForm.value;
    this.auth.login(this.loginForm.value, this.user).subscribe(
      (res) => {
        const response: any = res;
        console.log(res);
        if (response.message === 'success') {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', response.user);
          this.route.navigate(['/student']);
        } else if (response.message === 'UnRegistered') {
          this.errormessage = 'Student not Registered';
          this.errorToaster('top', 'center', this.errormessage);
        } else if (response.message == 'verified') {
          this.errormessage = 'Verification link Sent to your Email';
          this.warnToaster('top', 'center', this.errormessage);
        } else {
          this.errormessage = 'Password is Incorrect';
          this.errorToaster('botton', 'right', this.errormessage);
        }
      },
      (err) => {
        this.errormessage = err.error.message;
        this.errorToaster('botton', 'right', this.errormessage);
        console.log(this.errormessage);
      }
    );
  }
  errorToaster(from, align, text) {
    this.toastr.error(text, 'Major Error', {
      disableTimeOut: false,
      closeButton: true,
      toastClass: 'alert alert-danger alert-with-icon',
      positionClass: 'toast-' + from + '-' + align,
    });
  }
  warnToaster(from, align, text) {
    this.toastr.warning(text, 'Major Error', {
      disableTimeOut: true,
      closeButton: true,

      toastClass: 'alert alert-warning alert-with-icon',
      positionClass: 'toast-' + from + '-' + align,
    });
  }
  facultyLogin() {
    let form = this.loginForm.value;
    form.facultyId = form.registrationNumber;
    this.facultyService.facultyLogin(form)
      .subscribe(res => {
        if (res.message === 'success') {
          localStorage.setItem('user', res.user);
          localStorage.setItem('faculty_id', res.id);
          if(!!localStorage.getItem('faculty_id'))
            this.route.navigate(['/faculty/profile']);
          setTimeout(() => {
            window.location.reload();
          }, 100);

      }
    })
  }
}
