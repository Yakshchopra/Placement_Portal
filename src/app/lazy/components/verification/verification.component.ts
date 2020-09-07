import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
];


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})

export class VerificationComponent implements OnInit {

  showPlacement = false;
  showCollege = true;
  showTenth = true;
  showTwelth = true;

  toggleDisplay1(){
     this.showPlacement = false;
     this.showCollege = true;
     this.showTenth = true;
     this.showTwelth = true;
  }

  toggleDisplay2(){
    this.showPlacement = true;
     this.showCollege = false;
     this.showTenth = true;
     this.showTwelth = true;
  }

  toggleDisplay3(){
    this.showPlacement = true;
     this.showCollege = true;
     this.showTenth = false;
     this.showTwelth = true;
  }

  toggleDisplay4(){
    this.showPlacement = true;
     this.showCollege = true;
     this.showTenth = true;
     this.showTwelth = false;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
