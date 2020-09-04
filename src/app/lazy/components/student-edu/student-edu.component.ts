import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileComponent } from '../../popups/upload-file/upload-file.component';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-student-edu',
  templateUrl: './student-edu.component.html',
  styleUrls: ['./student-edu.component.css']
})
export class StudentEduComponent implements OnInit,OnDestroy{

  constructor(private dialog: MatDialog, private srv: ProfileService) { }
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
  ];

  srvUns;
  ngOnInit(): void {
    this.srvUns = this.srv.getEducation()
      .subscribe(res => {
        console.log(res);
      }, err => {
          console.log(err);
    })
  }
  openDialog(name) {
    const dialogRef = this.dialog.open(UploadFileComponent, {
      width: '250px',

      data: { name }
    });
  }
  ngOnDestroy() {
    this.srvUns.unsubscribe();
  }



}
