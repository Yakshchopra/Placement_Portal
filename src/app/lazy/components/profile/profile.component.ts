import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from './profile.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { PlacementDetailsComponent} from '../../popups/placement-details/placement-details.component';


declare var $: any;
interface userdetail {
  name: string;
  email: string;
  faculty?: string;
  number: number;
  registrationNumber: String;
}



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, OnDestroy {

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
    });


  }
  ngOnDestroy() {
    this.sub1.unsubscribe();
  }



}
