import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
interface userdetail {
  name: string;
  email: string;
  faculty?: string;
  number: number;
  registrationNumber: string;
  CGPA: string,
  profile_url: string;
  gender: string,
  dept: string,
  specilization: string,
  section: string,
  nri: boolean,
  dob:string

}
@Injectable({
  providedIn: 'root'
})
export class ProfileService{

  constructor(private http: HttpClient) { }
  private BaseURL = environment.BaseUrl;
  getUserDetail() {
    const URL = this.BaseURL + 'userdetail/get';
    return this.http.get<userdetail>(URL);
  }
  getAchievements() {
    const URL = this.BaseURL + 'achievements/get';
    return this.http.get<any>(URL);
  }
  submitSkills(data) {
    const URL = this.BaseURL + 'skills/update';
    return this.http.post<any>(URL, data);
  }
  getSkills() {
    const URL = this.BaseURL + 'skills/get';
    return this.http.get<any>(URL);
  }
  getEducation() {
    const URL = this.BaseURL + 'education/get';
    return this.http.get<any>(URL);
  }
  getPlacements() {
    const URL = this.BaseURL + 'placements/get';
    return this.http.get<any>(URL);
  }
  addPlacements(data) {
    const URL = this.BaseURL + 'placements/add';
    return this.http.post<any>(URL, data);
  }
  updatePercentage(data) {
    const URL = this.BaseURL + 'collegescholl/update';
    return this.http.post<any>(URL, data);
  }




}
