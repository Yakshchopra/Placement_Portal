import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private change: ChangeDetectorRef) { }

  ngOnInit(): void {

  }
  logout() {
    localStorage.clear();
    window.location.reload();
}

}
