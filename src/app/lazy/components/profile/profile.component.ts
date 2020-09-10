import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from './profile.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { PlacementDetailsComponent } from '../../popups/placement-details/placement-details.component';


export interface Fruit {
  name: string;
}

declare var $: any;
interface userdetail {
  name: string;
  email: string;
  faculty?: string;
  number: number;
  registrationNumber: String;
  CGPA: string,
  profile_url: string;
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
all_placements = []
  constructor(private srv: ProfileService, public dialog: MatDialog ) {}

  openDialog(){
    let dialo = this.dialog.open(PlacementDetailsComponent);
    dialo.afterClosed()
      .subscribe(res => {
        console.log(res);
        this.srv.getPlacements()
        .subscribe(res => {
          this.all_placements = res;
        }, err => {
            this.errormessage = err.error.message;
        })
      })
  }


  ngOnInit(): void {
   this.sub1 =  this.srv.getUserDetail()
      .subscribe(res => {
        this.profile = res;
      }, err => {
          this.errormessage = err.error.message;
      });
      this.srv.getPlacements()
      .subscribe(res => {
        this.all_placements = res;
      }, err => {
          this.errormessage = err.error.message;
      })
    this.srv.getSkills()
      .subscribe(res => {
        this.fruits = res;
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
    this.addSkill(event.value);
    this.fruits.push({ name: event.value });
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  addSkill(name) {
    this.srv.submitSkills({ name: name })
      .subscribe(res => {
        console.log(res);
    })
  }


}
