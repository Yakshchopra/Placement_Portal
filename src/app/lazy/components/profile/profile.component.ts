import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

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

  userdata: userdetail;

  constructor(private prf_service: ProfileService) { }

  ngOnInit(): void {
    this.getUserDetail();
    $(document).ready(function() { 
      $('.input-btn').click(function() { 
          if ($('#skl').val().length != 0) { 
              var x = $('.skill-add').html(); 
              var y =  
          `<span class="skill-list" style="background-color: #7D81FF; margin-left:10px; padding: 5px 10px; border-radius:20px;" > ` + $('#skl').val() + `</span>`; 
              
              $('.skill-add').html(y + x); 
              $('#skl').val(""); 
          } else alert("Enter some Text!"); 
      }); 
  }); 
  }
  getUserDetail() {
    this.prf_service.getUserDetail()
      .subscribe(res => {
        this.userdata = res;
    })
  }

}
