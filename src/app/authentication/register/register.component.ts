import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { UploadFileComponent } from 'src/app/lazy/popups/upload-file/upload-file.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerForm2: FormGroup;
  submitted = false;
  profile_url;
  uploaded = false;
  constructor(private auth: AuthService, private fb: FormBuilder, private dialog: MatDialog) {
    this.registerForm = this.fb.group(
      {
        name: [ '', [Validators.required]],
        registrationNumber: ['', [Validators.required, Validators.pattern(/^RA[0-9]{13}$/)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],

        conf_pass: ['', [Validators.required]],
        number: ['', [Validators.required, Validators.minLength(10)]],
        faculty: ['', [Validators.required]],

      },
      {
        validator: this.ConfirmedValidator('password', 'conf_pass'),
      }
    );
    this.registerForm2 = this.fb.group({
      dept: ['', [Validators.required]],
      faculty: ['', [Validators.required]],
      acad: ['', [Validators.required]],
      date: ['', [Validators.required]],
      profile_url: ['', [Validators.required]]
    });
  }

  ishidden = true;
  nothidden = !this.ishidden;

  toggleDisplay() {

    this.ishidden = !this.ishidden;
    this.nothidden = true;
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
    console.log('yoyo');
    const form1 = this.registerForm.value;
    delete form1.conf_pass;
    const form3 = this.registerForm2.value;
    form3.profile_url = this.profile_url;
    const from2 = { ...form1, ...form3 };
    console.log(from2);
    this.auth.register(from2).subscribe(
        (res) => {
          this.uploaded = true;
          console.log(res);
        },
        (err) => {}
      );
    }

  submit() {

  }
  openDialof() {
    const med = this.dialog.open(UploadFileComponent, {
      width: '250px',
      data: {name: 'Profile'}
    });
    med.afterClosed()
      .subscribe(res => {
        this.profile_url = res.url;
    });
  }



}
