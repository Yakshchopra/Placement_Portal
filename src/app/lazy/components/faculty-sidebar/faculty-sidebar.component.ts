import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-sidebar',
  templateUrl: './faculty-sidebar.component.html',
  styleUrls: ['./faculty-sidebar.component.css']
})
export class FacultySidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('faculty_id');
    localStorage.removeItem('user');
    window.location.reload();
  }

}
