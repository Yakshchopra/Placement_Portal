import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentVerficationComponent } from '../../popups/student-verfication/student-verfication.component';
import { AchievmentsService } from './achievments.service';


declare var $: any;
interface file {
  name: string;
  doc: string;
  url: string;
 }
@Component({
  selector: 'app-student-achivements',
  templateUrl: './student-achivements.component.html',
  styleUrls: ['./student-achivements.component.css']
})
export class StudentAchivementsComponent implements OnInit, OnDestroy {

  constructor(private diaglogref: MatDialog, private acv_service: AchievmentsService) { }
  courses: file[];
  workshops: file[];

  ngOnInit(): void {
    this.retrievecourse();
    this.retrieveworkshops();
  }
  retrievecourse() {

      this.acv_service.getcourses()
        .subscribe(res => {
          const respone: any = res;
          this.courses = respone.courses;
        });
  }
  retrieveworkshops() {

    this.acv_service.getworkshops()
    .subscribe(res => {
      const respone: any = res;
      this.workshops = respone.workshops;
  });
  }
  openDialog(state) {
   const dialog =  this.diaglogref.open(StudentVerficationComponent, {
      width: '50%',
      data: {name: state}


   });

   dialog.afterClosed()
        .subscribe(res => {
          if (res.upload) {
            if (res.type === 'workshop') {
              this.retrieveworkshops();
            } else {
              this.retrievecourse();
            }
          }
        });
  }
  ngOnDestroy() {

  }
}
