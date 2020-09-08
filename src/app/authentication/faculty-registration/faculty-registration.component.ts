import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faculty-registration',
  templateUrl: './faculty-registration.component.html',
  styleUrls: ['./faculty-registration.component.css']
})
export class FacultyRegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        name: [ '', [Validators.required]],
        facultyNumber: ['', [Validators.required, Validators.pattern(/^RA[0-9]{13}$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        conf_pass: ['', [Validators.required]],
        number: ['', [Validators.required, Validators.minLength(10)]],
      },
      {
        validator: this.ConfirmedValidator('password', 'conf_pass'),
      }
    );
  }

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

  ngOnInit(): void {
  }

}
