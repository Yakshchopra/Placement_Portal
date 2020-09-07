import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



// college dataset
export interface College {
  name: string;
  reg: string;
  sem: number;
  attachment: string;
}

const COLLEGE_DATA: College[] = [
  {name: 'Yaksh Chopra', reg: 'RA1811032010048', sem: 4, attachment:'yaksh.pdf'},
];

// college dataset end

// placement dataset
export interface Placement{
  name: string;
  reg: string;
  company: string;
  details: string;
}

const PLACEMENT_DATA: Placement[] = [
  {name: 'Yaksh', reg: 'RA1811032010048', details: 'Selected for round 2', company: 'Google'}
]
// placement dataset end

// tenth dataSource

  export interface Tenth{
    name: string;
    reg: string;
    percentage: string;
    attachment: string;
  }

  const TENTH_DATA: Tenth[]  = [
    {name: 'Yaksh', reg: 'RA1811032010048', percentage: '93.2', attachment: 'pqrst.pdf'}
  ]
// tenthDataSource end

// twelthdatasource
export interface Twelth{
  name: string;
  reg: string;
  percentage: string;
  attachment: string;
}

const TWELTH_DATA: Twelth[]  = [
  {name: 'Yaksh', reg: 'RA1811032010048', percentage: '93.2', attachment: 'abcdef.pdf'}
]
// twelthdatasource end

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})

export class VerificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  // college table

  displayedColumnsCollege: string[] = ['reg', 'name', 'sem', 'attachment', 'verify']
  dataSourceCollege = new MatTableDataSource(COLLEGE_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceCollege.filter = filterValue.trim().toLowerCase();
  }

  // college table end

  // placement table

  displayedColumnsPlacement: string[] = ['reg', 'name', 'company', 'details', 'verify']
  dataSourcePlacement = new MatTableDataSource(PLACEMENT_DATA);

  applyFilterPlacement(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourcePlacement.filter = filterValue.trim().toLowerCase();
  }

  // placement table end

  // tenth table
    displayedColumnsTenth: string[] = ['reg', 'name', 'percentage','attachment', 'verify']
    dataSourceTenth = new MatTableDataSource(TENTH_DATA);

    applyFilterTenth(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceTenth.filter = filterValue.trim().toLowerCase();
    }
  // tenth table end

  // twelth table
    displayedColumnsTwelth: string[] = ['reg', 'name', 'percentage', 'attachment', 'verify']
    dataSourceTwelth = new MatTableDataSource(TWELTH_DATA);

    applyFilterTwelth(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceTwelth.filter = filterValue.trim().toLowerCase();
    }

  // twelth table end

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

 
 

  

}
