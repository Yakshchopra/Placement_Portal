import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InternationalCertificationsComponent } from '../../popups/international-certifications/international-certifications.component';
import { InternshipsComponent } from '../../popups/internships/internships.component';
import { OtherCertificationsComponent } from '../../popups/other-certifications/other-certifications.component';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogInter(){
    this.dialog.open(InternationalCertificationsComponent)
  }
  openDialogOther(){
    this.dialog.open(OtherCertificationsComponent)
  }
  openDialogWork(){
    this.dialog.open(InternshipsComponent)
  }

}
