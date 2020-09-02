import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentVerficationComponent } from '../../popups/student-verfication/student-verfication.component';
declare var $: any;

@Component({
  selector: 'app-student-achivements',
  templateUrl: './student-achivements.component.html',
  styleUrls: ['./student-achivements.component.css']
})
export class StudentAchivementsComponent implements OnInit {

  constructor(private diaglogref:MatDialog) { }
  

  ngOnInit(): void {
  }
  openDialog() {
    this.diaglogref.open(StudentVerficationComponent, {
      width: '50%',
      
      

    })
  }

}
