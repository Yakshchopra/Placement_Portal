import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
//Mat Dialog
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AchievmentsService } from '../../components/student-achivements/achievments.service';
import { FormBuilder } from '@angular/forms';
import { UploadFileComponent } from '../upload-file/upload-file.component';
interface certification {
  name: string
  url: string,
  doc: string
}
@Component({
  selector: 'app-student-verfication',
  templateUrl: './student-verfication.component.html',
  styleUrls: ['./student-verfication.component.css']
})
export class StudentVerficationComponent implements OnInit,OnDestroy {
  //TODO: upload validation
  constructor(public dialogRef: MatDialogRef<StudentVerficationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private acv_service: AchievmentsService,private mat_dialog: MatDialog) { }
  form =  {
    name:'',doc:'',url:''
  };

  upload = false;
  file:File;
  formadata: FormData;
  errormessage;
  ngOnInit(): void {
  }
  closerDialog() {

    this.dialogRef.close();
  }
  reg_no = 'RA1811032010051'
  change(event) {
    console.log(event);
    this.file = event.target.files[0];
    console.log(this.file);
  };
  submit() {
    console.log(this.data);
    let formdata = new FormData();
    formdata.append('certificates', this.file,this.reg_no + this.form.name + (this.data.name ? 'course' : 'workshop')+'.pdf');

    this.acv_service.uploadFile(formdata)
      .subscribe(res => {
        console.log(res);
        let response:any = res;
        this.form.url = response.fileurl;
        let form = {};
        
        if (this.data.name === true) { 
          
          this.acv_service.submitCourse(this.form)
            .subscribe(check => {
              this.dialogRef.close({ upload: true,type:'course' });
              
            }, err => {
                this.errormessage = err.error.message;
          })
        } else {
         
          this.acv_service.submitworkshop(this.form)
          .subscribe(check => {
            this.dialogRef.close({ upload: true, type: 'workshop' });
          }, err => {
              this.errormessage = err.error.message;
        })
        }
      })
  
  }
  ngOnDestroy() {
    this.form = { name: '', doc: '', url: '' };
  }



}
