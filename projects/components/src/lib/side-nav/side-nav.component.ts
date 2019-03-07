import { Component, OnChanges, Input } from '@angular/core';
import { INavItm } from '../../nav-itm';

@Component({
  selector: 'wd-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnChanges {
  sidebarState: 'block' | 'none' = 'none';
  @Input() toggleSideBar: 'block' | 'none' = 'none';

  constructor() {}

  sidebarToggle() {
    this.sidebarState = this.sidebarState === 'block' ? 'none' : 'block';
  }

  closeSidebar() {
    this.sidebarState = 'none';
  }

  ngOnChanges(obj) {
    this.sidebarToggle();
  }
}
