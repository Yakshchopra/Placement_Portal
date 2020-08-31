import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css']
})
export class EmailVerifyComponent implements OnInit {
  ouput_message = 'You email is being verified';
  constructor(private activate: ActivatedRoute,
              private auth: AuthService,
              private route: Router) { }

  ngOnInit(): void {
    let token = this.activate.snapshot.paramMap.get('token');
    this.auth.verifyEmail(token)
      .subscribe(res => {
        this.ouput_message = 'Email has been successfully Verified';
        setTimeout(() => {
        this.route.navigateByUrl('/')
      },2000)
    })
  }

}
