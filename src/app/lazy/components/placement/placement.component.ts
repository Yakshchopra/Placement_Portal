import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { PlacementaddComponent } from 'src/app/placementadd/placementadd.component';
import { AchievmentsService } from '../student-achivements/achievments.service';

export interface Skills {
  name: string;
}


@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  constructor(private dialog:MatDialog,private srvc:AchievmentsService)
  {

}  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills: Skills[] = [

  ];
  placementlist;


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.skills.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skills: Skills): void {
    const index = this.skills.indexOf(skills);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }
  ngOnInit(): void {
    this.srvc.getPlacement()
      .subscribe(res => {
        console.log(res);
        this.placementlist = res;
    })
  }
  openDialog() {
    this.dialog.open(PlacementaddComponent);
  }


}
