import { Component, OnInit } from '@angular/core';
import { AchievmentsService } from '../lazy/components/student-achivements/achievments.service';

@Component({
  selector: 'app-placementadd',
  templateUrl: './placementadd.component.html',
  styleUrls: ['./placementadd.component.css']
})
export class PlacementaddComponent implements OnInit {

  constructor(private srvc:AchievmentsService ) { }
  project = { company: '', status: '' };
  ngOnInit(): void {
  }
  submit() {
    this.srvc.submitPlacement(this.project)
      .subscribe(res => {
        console.log(res);
        location.reload();
      }, err => {

    })
  }


}
