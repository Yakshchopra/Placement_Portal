import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FacultyService } from 'src/app/faculty.service';



// college dataset
export interface College {
  name: string;
  reg: string;
  sem: number;
  CGPA: string;
}



// college dataset end

// placement dataset
export interface Placement{
  name: string;
  reg: string;
  company: string;
  details: string;
}


// placement dataset end

// tenth dataSource

  export interface Tenth{
    name: string;
    reg: string;
    percentage: string;
   
  }


// tenthDataSource end

// twelthdatasource
export interface Twelth{
  name: string;
  reg: string;
  percentage: string;
}


// twelthdatasource end

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})

export class VerificationComponent implements OnInit {

  constructor(private faculty_srv: FacultyService) { }
 TWELTH_DATA: Twelth[]  = [
    {name: 'Yaksh', reg: 'RA1811032010048', percentage: '93.2'}
  ]
 TENTH_DATA: Tenth[]  = [
    {name: 'Yaksh', reg: 'RA1811032010048', percentage: '93.2'}
  ]
   PLACEMENT_DATA: Placement[] = [
    {name: 'Yaksh', reg: 'RA1811032010048', details: 'Selected for round 2', company: 'Google'}
  ]
  COLLEGE_DATA: College[] = [
    {name: 'Yaksh Chopra', reg: 'RA1811032010048', sem: 4, CGPA:'9.2'},
  ];
  dataSourceTwelth;
  dataSourceTenth;
  dataSourcePlacement;
  dataSourceCollege;
  collegelist = [];
  ngOnInit(): void {
    this.faculty_srv.gettwelve()
      .subscribe(res => {
        console.log(res);
        this.TWELTH_DATA =  res.map(item => {
          if (item.attachment != '' && item.percentage!='')
            return item;
        });;
        this.dataSourceTwelth = new MatTableDataSource(this.TWELTH_DATA);
    })
    this.faculty_srv.gettenth()
    .subscribe(res => {
      console.log(res);
      this.TENTH_DATA = res.map(item => {
        if (item.attachment != '' && item.percentage!='')
          return item;
      });
      this.dataSourceTenth = new MatTableDataSource(this.TENTH_DATA);
    })
    this.faculty_srv.getPlacVer()
    .subscribe(res => {
      console.log(res);
      this.TENTH_DATA = res;
      let response = res;
      let placementlist = [];
      response = response.map(item => {
        item.placementDetails.map(value => {
          if (value.verified === 'pending')
            placementlist.push({ reg: item.registrationNumber, name: item.name, company: value.name, details: value.status });
        })
      })
      console.log(placementlist);
      this.PLACEMENT_DATA = placementlist;
      this.dataSourcePlacement = new MatTableDataSource(this.PLACEMENT_DATA);
    })
    this.faculty_srv.getCollege()
    .subscribe(res => {

      let response = res;
      console.log(res);
      response.map(item => {
        console.log(item);
         if ( item.college["one"]["verified"] === 'pending') {
           this.collegelist.push({ reg: item.reg, name: item.name, sem: 1, attachment: item.college.one.url, CGPA: item.college.one.percentage })
         }
          if (item.college.two.verified === 'pending')
          this.collegelist.push({ reg: item.reg, name: item.name, sem: 2, attachment: item.college.two.url, CGPA: item.college.two.percentage })
          if (item.college.three.verified === 'pending')
          this.collegelist.push({ reg: item.reg, name: item.name, sem: 3, attachment: item.college.three.url, CGPA: item.college.three.percentage })
          if (item.college.four.verified === 'pending')
          this.collegelist.push({reg:item.reg,name:item.name,sem:4,attachment:item.college.four.url,CGPA:item.college.four.percentage})
      })
      console.log(this.collegelist);
      this.COLLEGE_DATA = this.collegelist;
      this.dataSourceCollege = new MatTableDataSource(this.COLLEGE_DATA);
    })



  }

  // college table

  displayedColumnsCollege: string[] = ['reg', 'name', 'sem','CGPA', 'verify']


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceCollege.filter = filterValue.trim().toLowerCase();
  }

  // college table end

  // placement table

  displayedColumnsPlacement: string[] = ['reg', 'name', 'company', 'details', 'verify']


  applyFilterPlacement(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourcePlacement.filter = filterValue.trim().toLowerCase();
  }

  // placement table end

  // tenth table
    displayedColumnsTenth: string[] = ['reg', 'name', 'percentage', 'verify']


    applyFilterTenth(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceTenth.filter = filterValue.trim().toLowerCase();
    }
  // tenth table end

  // twelth table
    displayedColumnsTwelth: string[] = ['reg', 'name', 'percentage', 'verify']


    applyFilterTwelth(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourceTwelth.filter = filterValue.trim().toLowerCase();
    }

  // twelth table end
  rejected = 'rejected';
  accepted = 'accepted';
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
  verifyPlacement(data, response) {
    data.response = response;
    this.faculty_srv.placementVerify(data)
      .subscribe(res => {
        let elem = this.PLACEMENT_DATA.indexOf(data);
        this.PLACEMENT_DATA.splice(elem, 1);
        this.dataSourcePlacement = new MatTableDataSource(this.PLACEMENT_DATA);
        console.log(res);
    })
  }
  verifyTwelve(data, response) {
    data.response = response;
    this.faculty_srv.twelveVerify(data)
      .subscribe(res => {
        let elem = this.TWELTH_DATA.indexOf(data);
        this.TWELTH_DATA.splice(elem, 1);
        this.dataSourceTwelth = new MatTableDataSource(this.TWELTH_DATA);
        console.log(res);
      })

  }
  verifyTen(data, response) {
    data.response = response;
    this.faculty_srv.tenVerify(data)
      .subscribe(res => {
        let elem = this.TENTH_DATA.indexOf(data);
        this.TENTH_DATA.splice(elem, 1);
        this.dataSourceTenth = new MatTableDataSource(this.TENTH_DATA);
        console.log(res);
      })

  }
  verifyCollege(data, response) {
    data.response = response;
    this.faculty_srv.collegeVerify(data)
      .subscribe(res => {
        let elem = this.COLLEGE_DATA.indexOf(data);
        this.COLLEGE_DATA.splice(elem, 1);
        this.dataSourceCollege = new MatTableDataSource(this.COLLEGE_DATA);
        console.log(res);
      })

  }

}
