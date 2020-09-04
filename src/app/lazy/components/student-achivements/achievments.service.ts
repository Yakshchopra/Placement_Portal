import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
interface file{
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class AchievmentsService {

  constructor(private http: HttpClient) { }
  BaseURL = environment.BaseUrl;
  submitCourse(data) {
    const URL = this.BaseURL + 'courses/add';
    return this.http.post( URL, data);
  }
  submitworkshop(data) {
    const URL = this.BaseURL + 'workshops/add';
    return this.http.post(URL, data);
  }
  getworkshops() {
    const URL = this.BaseURL + 'workshops/get';
    return this.http.get( URL);
  }
  getcourses() {
    const URL = this.BaseURL + 'courses/get';
    return this.http.get( URL);
  }
  uploadFile(data: FormData) {
    const URL = this.BaseURL + 'file/upload';
    return this.http.post( URL, data);
  }
}
