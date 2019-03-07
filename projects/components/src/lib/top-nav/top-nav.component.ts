import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wd-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  @Output() toggleSideBar = new EventEmitter<string>();
  constructor() {}

  openSideBar() {
    this.toggleSideBar.emit(new Date().toISOString());
  }
}
