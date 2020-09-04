import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SubSink } from 'subsink';

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
export class ProfileComponent implements OnInit {

  userdata: userdetail;
  skill: string;
  errormessage: string;
  constructor(private prf_service: ProfileService) { }
  skills = [];
  ngOnInit(): void {
    this.getUserDetail();
    $(document).ready(function() {
      $('.input-btn').click(function() {
          if ($('#skl').val().length != 0) {
              const x = $('.skill-add').html();
              const y =
          `<span class="skill-list" style="background-color: #7D81FF; margin-left:10px; padding: 5px 10px; border-radius:20px;" > ` + $('#skl').val() + `</span>`;

              $('.skill-add').html(y + x);
              $('#skl').val('');
          } else { alert('Enter some Text!'); }
      });
  });
  }
  getUserDetail() {
    this.prf_service.getUserDetail()
      .subscribe(res => {
        this.userdata = res;
    });
  }
  drop(event: CdkDragDrop<string>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }
  add() {
    this.prf_service.submitSkills({ name: this.skill })
      .subscribe(res => {
        console.log(res);
        this.skills.push(this.skill);
        this.skill = '';
      },
        err => {
          this.errormessage = err.error.message;
      });
  }
  getSkills() {
    this.prf_service.getSkills()
      .subscribe(res => {
        this.skills = res;
      }, err => {
          this.errormessage = err.error.message;
    });
  }

}
