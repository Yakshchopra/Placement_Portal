import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
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

}
