import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        name: [ '', [Validators.required]],
        registrationNumber: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        conf_pass: ['', [Validators.required]],
        number: ['', [Validators.required]],
      },
      {
        validator: this.ConfirmedValidator('password', 'conf_pass'),
      }
    );
  }

  ngOnInit(): void {

  }
  // Confirmed password Validator
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors.confirmedValidator
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  get f() {
    return this.registerForm;
  }

  // Register Function
  register() {

      const form = this.registerForm.value;
      delete form.conf_pass;
      this.auth.register(form).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {}
      );
    }

}
