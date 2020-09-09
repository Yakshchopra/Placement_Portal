import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { ProfileService } from '../../components/profile/profile.service';
import { SubSink } from 'subsink';

interface certification {
  name: string;
  url: string;
  doc: string;
}

@Component({
  selector: 'app-placement-details',
  templateUrl: './placement-details.component.html',
  styleUrls: ['./placement-details.component.css']
})
export class PlacementDetailsComponent implements OnInit, OnDestroy {

  constructor(public dialogRef: MatDialogRef<PlacementDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private acv_service: ProfileService,private mat_dialog: MatDialog) { }


  
  ngOnInit(): void {
  }
  ngOnDestroy(): void{

  }
}
