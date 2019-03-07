import { Component } from '@angular/core';
import { INavItm } from 'projects/components/src/nav-itm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-components';
  buzz: string;
  items: INavItm[] = [
    {
      link: ['/', 'dashboard'],
      label: 'Dashboard',
      icon: 'fa-dashboard'
    },
    {
      link: ['/', 'formular'],
      label: 'formular',
      icon: 'fa-edit'
    }
  ];
}
