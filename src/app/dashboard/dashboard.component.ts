import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPanelData } from 'projects/components/src/panel-data';
import { ITableResponse } from 'projects/components/src/tabledata';
import { IComment } from 'projects/components/src/comment';
import { IProgressData } from 'projects/components/src/progress-data';
import { IUser } from 'projects/components/src/user';
import { IContent } from 'projects/components/src/content';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  paneldata$: Observable<IPanelData[]>;
  tabledata$: Observable<ITableResponse>;
  comments$: Observable<IComment[]>;
  stats$: Observable<IProgressData[]>;
  users$: Observable<IUser[]>;
  content$: Observable<IContent[]>;
  constructor(private service: DashboardService) {}

  ngOnInit() {
    this.comments$ = this.service.getComments();
    this.tabledata$ = this.service.getTableData();
    this.paneldata$ = this.service.getPanelData();
    this.stats$ = this.service.getStats();
    this.users$ = this.service.getUsers();
    this.content$ = this.service.getContent();
  }
}
