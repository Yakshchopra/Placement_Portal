import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
// Mat Dialog
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AchievmentsService } from '../../components/student-achivements/achievments.service';
import { SubSink } from 'subsink';
interface certification {
  name: string;
  url: string;
  doc: string;
}
@Component({
  selector: 'app-student-verfication',
  templateUrl: './student-verfication.component.html',
  styleUrls: ['./student-verfication.component.css']
})
export class StudentVerficationComponent implements OnInit, OnDestroy {
  constructor(public dialogRef: MatDialogRef<StudentVerficationComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private acv_service: AchievmentsService, private mat_dialog: MatDialog) { }

  // TODO: upload validation
  private subs: SubSink;
  form =  {
    name: '', doc: '', url: ''
  };

  upload = false;
  file: File;
  formadata: FormData;
  errormessage;
  reg_no = 'RA1811032010051';
  ngOnInit(): void {
  }
  closerDialog() {

    this.dialogRef.close();
  }
  change(event) {
    console.log(event);
    this.file = event.target.files[0];
    console.log(this.file);
  }  submit() {
    console.log(this.data);
    const formdata = new FormData();
    formdata.append('certificates', this.file, this.reg_no + this.form.name + (this.data.name ? 'course' : 'workshop') + '.pdf');
    this.subs.add(
    this.acv_service.uploadFile(formdata)
      .subscribe(res => {
        console.log(res);
        const response: any = res;
        this.form.url = response.fileurl;
        const form = {};

        if (this.data.name === true) {
          this.subs.add(
            this.acv_service.submitCourse(this.form)
              .subscribe(check => {
                this.dialogRef.close({ upload: true, type: 'course' });

              }, err => {
                this.errormessage = err.error.message;
              }));
        } else {
          this.subs.add(
            this.acv_service.submitworkshop(this.form)
              .subscribe(check => {
                this.dialogRef.close({ upload: true, type: 'workshop' });
              }, err => {
                this.errormessage = err.error.message;
              }));
        }
      }));

  }
  ngOnDestroy() {
    this.subs.unsubscribe();
    this.form = { name: '', doc: '', url: '' };
  }



}
