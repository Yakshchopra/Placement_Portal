import {Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/faculty.service';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.component.html',
  styleUrls: ['./faculty-profile.component.css']
})
export class FacultyProfileComponent implements OnInit {

  constructor(private faculty_srv: FacultyService) { }
  facultyDetail;
  registeredUser;
  verification;
  ngOnInit(): void {
    setTimeout(() => {
      this.faculty_srv.getFacultyDetail()
        .subscribe(res => {
          console.log(res);
          this.facultyDetail = res;
        })
      this.faculty_srv.getReg()
        .subscribe(res => {
          this.registeredUser = res.count;
        })
      this.faculty_srv.getVer()
        .subscribe(res => {
          this.verification = res.count;
        })
    }, 100);



  }


}
