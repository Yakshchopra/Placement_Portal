import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { PlacementDetailsComponent} from '../../popups/placement-details/placement-details.component';


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

export class ProfileComponent implements OnInit {


  ngOnInit(): void {

  }

}
