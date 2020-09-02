import { Component, OnInit, Inject } from '@angular/core';
//Mat Dialog
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-student-verfication',
  templateUrl: './student-verfication.component.html',
  styleUrls: ['./student-verfication.component.css']
})
export class StudentVerficationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StudentVerficationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  closerDialog() {
    this.dialogRef.close();
  }


}
