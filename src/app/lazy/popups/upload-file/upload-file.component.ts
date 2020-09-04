import { Component, OnInit, Inject } from '@angular/core';
// MatDialog box
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { AchievmentsService } from '../../components/student-achivements/achievments.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<UploadFileComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private acv_service: AchievmentsService) { }
  fileUrl;
  errormessage;
  file = false;
  public files: NgxFileDropEntry[] = [];

  ngOnInit(): void {
  }
  upload(file) {
    this.acv_service.uploadFile(file)
      .subscribe(res => {
        const response: any = res;
        this.fileUrl = response.fileurl;
        this.dialogRef.close(this.fileUrl);
      }, err => {
          this.errormessage = err.error.message;
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          this.file = true;




          // You could upload it like this:
          const formData = new FormData();
          formData.append(this.data.name, file, droppedFile.relativePath);
          this.upload(formData);

          // Headers

          /**
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  delete() {
    this.files.pop();
    this.file = false;
  }

  public fileOver(event) {

    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

}
