import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: String;
  CGPA: number;
  XII: number;
  X: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'RA1811032010048', name: 'Yaksh Chopra', CGPA: 10, XII: 93.2, X: 9.8 },
];

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'CGPA', 'XII', 'X',  'details'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
