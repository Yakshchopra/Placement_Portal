import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  facultyId = localStorage.getItem('id');
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
    return this.http.post<any>(URL, { facultyId: this.facultyId });
  }
}
