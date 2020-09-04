import { Component, OnInit, Inject } from '@angular/core';
// Constant
import { constants } from '../../../constants/constants';

// MatDialog box
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.css']
})
export class DetailsformComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailsformComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  Education = constants.EDUCATION;
  ngOnInit(): void {
  this.data = 'education';

  }

}
