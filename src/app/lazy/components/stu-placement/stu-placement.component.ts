import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-stu-placement',
  templateUrl: './stu-placement.component.html',
  styleUrls: ['./stu-placement.component.css']
})
export class StuPlacementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function(){
      $(".form").hide();    
      $(".add").click(function(){
        $(".form").show();
      });
      $(".cross-1").click(function(){
        $(".form").hide();
      });

    });

  }

}
