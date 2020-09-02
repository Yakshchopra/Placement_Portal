import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileComponent } from '../../popups/upload-file/upload-file.component';

@Component({
  selector: 'app-student-edu',
  templateUrl: './student-edu.component.html',
  styleUrls: ['./student-edu.component.css']
})
export class StudentEduComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  school = [
    { class: 'class X', percentage: '9.8', verified: false, name: '10thmarksheet' },
    { class: 'class X', percentage: '9.8', verified: false, name: '12thmarksheet' }
  ];
  college = [
    { semester: 1, percentage: '9.8', verified: true },
    { semester: 1, percentage: '9.8', verified: false },
    { semester: 1, percentage: '9.8', verified: false },
    { semester: 1, percentage: '9.8', verified: false },
    { semester: 1, percentage: '9.8', verified: false },
  ]

  ngOnInit(): void {
    
  }
  openDialog(name) {
    const dialogRef = this.dialog.open(UploadFileComponent, {
      width: '250px',
      data: { name: name }
    });
  }
  
  

}
