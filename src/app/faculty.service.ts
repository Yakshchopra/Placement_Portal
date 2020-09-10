import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

interface PeriodicElement {
  name: string;
 registrationNumber: string;
 CGPA: string;
 XII: string;
 X: string;

}
@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  facultyId = localStorage.getItem('faculty_id');
  constructor(private http: HttpClient) { }
  BaseURL = environment.BaseUrl;
  facultyLogin(data) {
    let URL = this.BaseURL + "faculty/login";
    return this.http.post<any>(URL, data);
  }
  facultyRegister(data) {
    let URL = this.BaseURL + "faculty/register";
    return this.http.post(URL, data);
  }
  getFacultyDetail() {
    let URL = this.BaseURL + 'faculty/get';
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
  getFacultystudentDetail() {
    let URL = this.BaseURL + 'facultystudent/get';
    return this.http.post<PeriodicElement[]>(URL, { facultyId: this.facultyId });
  }
  getPlacements(){
    let URL = this.BaseURL + 'placement/get';
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
  getCollge(){
    let URL = this.BaseURL +'college/get';
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
  gettwelve(){
    let URL = this.BaseURL +'twelve/get';
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
  gettenth(){
    let URL = this.BaseURL +'tenth/get';
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
  getten(){
    let URL = this.BaseURL +'ten/get';
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
  getReg() {
    let URL = this.BaseURL +'registered/get';
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
  getVer() {
    let URL = this.BaseURL +'verification/get';
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
  getPlacVer() {
    let URL = this.BaseURL +'placementverify/get';
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
  getCollege() {
    let URL = this.BaseURL +'collegesem/get';
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
  placementVerify(data) {
    let URL = this.BaseURL +'placement/verify';
    return this.http.post<any>(URL, { facultyId: this.facultyId ,...data});
  }
  tenVerify(data) {
    let URL = this.BaseURL +'ten/verify';
    return this.http.post<any>(URL, { facultyId: this.facultyId ,...data});
  }
  twelveVerify(data) {
    let URL = this.BaseURL +'twelve/verify';
    return this.http.post<any>(URL, { facultyId: this.facultyId ,...data});
  }
  collegeVerify(data) {
    let URL = this.BaseURL +'college/verify';
    return this.http.post<any>(URL, { facultyId: this.facultyId ,...data});
  }
  facultyaccess(data) {
    let URL = this.BaseURL +'faculty/access';
    return this.http.post<any>(URL, { facultyId: this.facultyId ,...data});
  }
}
