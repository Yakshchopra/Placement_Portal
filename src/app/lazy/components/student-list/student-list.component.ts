import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FacultyService } from 'src/app/faculty.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  registrationNumber: string;
  CGPA: number;

  XII: number;
  arrears: number;
  gender:string
}



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  constructor(private srv: FacultyService, private route:Router) { }
 ELEMENT_DATA: PeriodicElement[] = [
    {registrationNumber: 'RA1811032010048', name: 'Yaksh', CGPA: 9.8,XII: 93.2, arrears: 0,gender:'male'},
  ];
  data;
  displayedColumns: string[] = ['registrationNumber', 'name', 'CGPA', 'classXII', 'arrears','gender'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  upper:number;
  lower:number;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  ngOnInit() {
    this.srv.getFacultystudentDetail()
      .subscribe(res => {
        console.log(res);
        this.data = res;
        this.dataSource = new MatTableDataSource(res);
      }, err => {
          console.log(err);
    })

  }
  male() {
    this.dataSource = new MatTableDataSource(this.data.map(item => {
      if (item.gender === 'male') {
        return item;
      }
    }));

  }
  female() {
    this.dataSource = new MatTableDataSource(this.data.map(item => {
      if (item.gender === 'female') {
        return item;
      }
    }));
  }
  arrears() {
    this.dataSource = new MatTableDataSource(this.data.map(item => {
      if (item.arrears > 0) {
        return item;
      }
    }));
  }
  nilarrears() {
    this.dataSource = new MatTableDataSource(this.data.map(item => {
      if (item.arrears == 0) {
        return item;
      }
    }));
  }
  cgpalimit() {
    console.log(this.upper);
    console.log(this.lower);
    this.dataSource = new MatTableDataSource(this.data.map(item => {
      if (item.CGPA <= this.upper && item.CGPA >= this.lower) {
        return item;
      }
    }));
  }

}
