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
      label: 'Formular',
      icon: 'fa-edit'
    },
    {
      link: ['/', 'progress'],
      label: 'Progress',
      icon: 'fa-eye'
    }
  ];
  setTheme() {
    document.querySelector('body').classList.toggle('dark-mode');
  }
}
