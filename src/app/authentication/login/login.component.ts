import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterComponent } from '../register/register.component';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private auth: AuthService, private fb: FormBuilder, private route:Router, private toastr:ToastrService ) { }
  user = 0;
  errormessage;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      registrationNumber: ['', [Validators.required, Validators.minLength(15)]],
      password:['',[Validators.required]]
    })
  }
  // Login Function
  login() {
    let form = this.loginForm.value;
    this.auth.login(this.loginForm.value,this.user)
      .subscribe(res => {
        let response: any = res;
        if (response.message === 'success') {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', response.user);
          this.route.navigate(['/student']);
        } else if (response.message === 'UnRegistered') {
          this.errormessage = 'Student not Registered';
          this.errorToaster('top', 'center', this.errormessage);
        }
         else if (response.message == 'verify') {
          this.errormessage = 'Verification link Sent to your Email';
          this.warnToaster('top', 'center', this.errormessage);
        } else {
          this.errormessage = "Password is Incorrect";
          this.errorToaster('botton', 'right', this.errormessage);
        }
        
      }, err => {
          this.errormessage = err.error.message;
          console.log(this.errormessage);
    } )
  }
  errorToaster(from,align, text) {
    this.toastr.error( text, 'Major Error', {
      disableTimeOut: false,
      closeButton: true,
      toastClass: "alert alert-danger alert-with-icon",
      positionClass: 'toast-' + from + '-' +  align
    });
  }
  warnToaster(from, align, text) {
    this.toastr.warning(text, 'Major Error', {
      disableTimeOut: true,
      closeButton: true,
      
      toastClass: "alert alert-warning alert-with-icon",
      positionClass: 'toast-' + from + '-' +  align
    });
  }
  

}
