import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FacultyService } from 'src/app/faculty.service';
import { Router } from '@angular/router';

 interface PeriodicElement {
   name: string;
  registrationNumber: string;
  CGPA: string;
  XII: string;
  X: string;

}



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, AfterViewInit {
  constructor(private srv: FacultyService, private route:Router) { }
  data:PeriodicElement[];
   ELEMENT_DATA: PeriodicElement[] = [
    {registrationNumber: 'RA1811032010048', name: 'Yaksh Chopra', CGPA: '10', XII: '93.2', X:'9.8' }
  ];
  displayedColumns: string[] = ['registrationNumber', 'name', 'CGPA', 'XII', 'X',  'details'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.srv.getFacultystudentDetail()
      .subscribe(res => {
        console.log(res);
        this.data = res;
        this.ELEMENT_DATA = res;
       this. dataSource = new MatTableDataSource(this.ELEMENT_DATA);

    })
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  OpenProfile(id) {
    this.srv.facultyaccess({ reg: id })
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.route.navigateByUrl('/student');
    })
}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
