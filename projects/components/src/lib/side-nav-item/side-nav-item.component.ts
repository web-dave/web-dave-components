import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wd-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.css']
})
export class SideNavItemComponent {
  @Input() link: string[];
  @Input() icon: string;
  @Input() label: string;
}
