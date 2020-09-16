import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.css']
})
export class HackathonComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  // closerDialogHack(){
  //   this.dialog.close();
  // }
  ngOnInit(): void {
  }

}
