import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../user';

@Component({
  selector: 'wd-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent {
  @Input() user: IUser;
  constructor() {}
}
