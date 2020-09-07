import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFileComponent } from '../../popups/upload-file/upload-file.component';
import { ProfileService } from '../profile/profile.service';

interface school  {
  X: {
    percentage:string,verified:string
  },
  XII: {
    percentage:string,verified:string
  }
}
interface college {
  one: {
    percentage:string,verified:string
  },
  two: {
    percentage:string,verified:string
  },
  three: {
    percentage:string,verified:string
  },
  four: {
    percentage:string,verified:string
  },
}
@Component({
  selector: 'app-student-edu',
  templateUrl: './student-edu.component.html',
  styleUrls: ['./student-edu.component.css'],

})
export class StudentEduComponent implements OnInit,OnDestroy{
  index = Array(8).fill(false);
  constructor(private dialog: MatDialog, private srv: ProfileService) { }
  school:school = {
    X: {
      percentage:'96',verified:'pending'
    },
    XII: {
      percentage:'96',verified:'pending'
    }
  }
  college:college = {
    one: {
      percentage: "no", verified: "no"
    },
    two: {
      percentage: "no", verified: "no"
    },
    three: {
      percentage: "no", verified: "no"
    },
    four: {
      percentage: "", verified: "no"
    },
  };

  srvUns;
  ngOnInit(): void {
    this.srvUns = this.srv.getEducation()
      .subscribe(res => {
        console.log(res);
        this.school = res.school;
        this.college = res.college;
      }, err => {
          console.log(err);
    })
  }
  openDialog(name) {
    const dialogRef = this.dialog.open(UploadFileComponent, {
      width: '250px',

      data: { name }
    });
  }
  ngOnDestroy() {
    this.srvUns.unsubscribe();
  }
  updateschool(school) {
    this.srv
  }



}
