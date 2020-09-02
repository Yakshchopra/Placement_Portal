import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-student-achivements',
  templateUrl: './student-achivements.component.html',
  styleUrls: ['./student-achivements.component.css']
})
export class StudentAchivementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function(){
      $(".form").hide();   
      $(".form-achive").hide();   
      $(".add").click(function(){
        $(".form").show();
      });
      $(".add-ach").click(function(){
        $(".form-achive").show();
      });
      $(".cross").click(function(){
        $(".form-achive").hide();
      });
      $(".cross-1").click(function(){
        $(".form").hide();
      });
    });
  }

}
