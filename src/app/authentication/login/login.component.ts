import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(private auth: AuthService, private fb: FormBuilder, private route:Router) { }
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

        } else if (response.message === 'UnRegistered') {
          this.errormessage = 'Student not Registered';
        } else {
          this.errormessage = "Password is Incorrect"
        }
        this.route.navigate(['/student']);
      }, err => {
          this.errormessage = err.error.message;
          console.log(this.errormessage);
    } )
  }

}
