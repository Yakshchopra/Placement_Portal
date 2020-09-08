import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from './profile.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { PlacementDetailsComponent} from '../../popups/placement-details/placement-details.component';


export interface Fruit {
  name: string;
}

declare var $: any;
interface userdetail {
  name: string,
  email: string,
  faculty?: string,
  number: number,
  registrationNumber:String
}



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit,OnDestroy {

  totalCertifications = 0;
  cgpa = 0;
  otherAchivements = 0;

  sub1;
  profile: userdetail;
  errormessage;
  constructor(private srv: ProfileService) {}
  ngOnInit(): void {
   this.sub1 =  this.srv.getUserDetail()
      .subscribe(res => {
        this.profile = res;
      }, err => {
          this.errormessage = err.error.message;
    })

    
  }
  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
   
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  

}
