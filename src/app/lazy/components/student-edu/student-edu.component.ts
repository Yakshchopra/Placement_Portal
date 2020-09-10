import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileComponent } from '../../popups/upload-file/upload-file.component';
import { ProfileService } from '../profile/profile.service';

interface school  {
  X: {
    percentage: string, verified: string
  };
  XII: {
    percentage: string, verified: string
  };
}
interface college {
  one: {
    percentage: string, verified: string
  };
  two: {
    percentage: string, verified: string
  };
  three: {
    percentage: string, verified: string
  };
  four: {
    percentage: string, verified: string
  };
}
@Component({
  selector: 'app-student-edu',
  templateUrl: './student-edu.component.html',
  styleUrls: ['./student-edu.component.css'],

})
export class StudentEduComponent implements OnInit, OnDestroy{
  index = Array(8).fill(false);
  educationDetails = 'educationDetails';
  college_string = '.college';
  school_string = '.school';
  percentage = '.percentage';

  constructor(private dialog: MatDialog, private srv: ProfileService) { }
  school: school = {
    X: {
      percentage: 'no', verified: 'pending'
    },
    XII: {
      percentage: 'no', verified: 'pending'
    }
  };
  college: college = {
    one: {
      percentage: 'no', verified: 'no'
    },
    two: {
      percentage: 'no', verified: 'no'
    },
    three: {
      percentage: 'no', verified: 'no'
    },
    four: {
      percentage: '', verified: 'no'
    },
  };
  CGPA;
  srvUns;
  ngOnInit(): void {
    this.srvUns = this.srv.getEducation()
      .subscribe(res => {
        console.log(res);
        this.school = res.school;
        this.college = res.college;

        if (this.college.one.percentage != 'nan' && this.college.two.percentage != 'nan' && this.college.three.percentage != 'nan' && this.college.four.percentage != 'nan')
        {
          try {
            let sem1CGPA = parseFloat(this.college.one.percentage);
            let sem2CGPA = parseFloat(this.college.two.percentage);
            let sem3CGPA = parseFloat(this.college.three.percentage);
            let sem4CGPA = parseFloat(this.college.four.percentage);
            let creditsSem1 = 20.0;
          let creditsSem2 = 21.0;
          let creditsSem3 = 24.0;
            let creditsSem4 = 26.0;
            this.CGPA = ((sem1CGPA*creditsSem1 + sem2CGPA * creditsSem2 + sem3CGPA * creditsSem3 + sem4CGPA*creditsSem4)/(creditsSem1+creditsSem2+creditsSem3+creditsSem4)).toFixed(2)
          } catch {
            console.log('failed');
          }
          this.updatepercentage('CGPA', `${this.CGPA}`);


          }
      }, err => {
          console.log(err);
    });
  }
  openDialog(name) {
    const dialogRef = this.dialog.open(UploadFileComponent, {
      width: '250px',

      data: { name }
    });
    dialogRef.afterClosed()
      .subscribe(async (res) => {
       this.updatepercentage(this.educationDetails + name + '.url', res.url);
        await this.updatepercentage(this.educationDetails + name + '.verified', 'pending');
        this.srvUns = this.srv.getEducation()
          .subscribe(res => {
            console.log(res);
            this.school = res.school;
            this.college = res.college;
          });


    })
  }
  ngOnDestroy() {
    this.srvUns.unsubscribe();
  }
  updatepercentage(type, data, i?) {
    if(i)
    this.index[i] = false;
    console.log('yo');
    let response = { sem: type, response: data };
    this.srv.updatePercentage(response)
      .subscribe(res => {
        console.log(res);
    })
  }



}
