import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    $(document).ready(function(){

      $(".a").hide();
      $(".f").hide();
      
      $(".fac").click(function(){
        $(".s").hide();
        $(".a").hide();
        $(".f").show();     
      });

      $(".adm").click(function(){
        $(".s").hide();
        $(".f").hide();
        $(".a").show();
      });

      $(".stu").click(function(){
        $(".a").hide();
        $(".f").hide();
        $(".s").show();
      });
      
    });
  }
  // Login Function
  login(form) {
    this.auth.login(form)
      .subscribe(res => {


      }, err => {
          
          
    } )
  }

}
