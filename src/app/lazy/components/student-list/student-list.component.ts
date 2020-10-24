import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FacultyService } from 'src/app/faculty.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  registerNo: string;
  CGPA: number;
  Gender: string;
  classXII: number;
  standingArrears: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {registerNo: 'RA1811032010048', name: 'Yaksh', CGPA: 9.8, Gender: 'Male',classXII: 93.2, standingArrears: 0},
];

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  constructor(private srv: FacultyService, private route:Router) { }
  

  displayedColumns: string[] = ['registerNo', 'name', 'CGPA', 'Gender', 'classXII', 'standingArrears'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  ngOnInit() {

}
  
}
