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
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  registerForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      registrationname: ['', Validators.required],
      collegeemail: ['', Validators.required],
      personalemail: ['', Validators.required],
      contactnumber: ['', Validators.required],
      alternatenumber: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      department: ['', Validators.required],
      specilization: ['', Validators.required],
      yearcoordinator: ['', Validators.required],
      facultyadvisor: ['', Validators.required],
      section: ['', Validators.required],
      nri: [false, Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      fathercontactnumber: ['', Validators.required],
      mothercontactnumber: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      totalarrears: ['', Validators.required],
      standingarrears: ['', Validators.required],
    });
  }
}
