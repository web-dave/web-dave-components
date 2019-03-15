import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPanelData } from 'projects/components/src/panel-data';
import { ITableResponse } from 'projects/components/src/tabledata';
import { IComment } from 'projects/components/src/comment';
import { IUser } from 'projects/components/src/user';
import { IProgressData } from 'projects/components/src/progress-data';
import { IContent } from 'projects/components/src/content';
import { of } from 'rxjs';
import {
  paneldata,
  tabledata,
  comments,
  users,
  stats,
  content
} from 'server/db';

@Injectable({
  providedIn: 'root'
})
export class DashboardMockService {
  url = 'http://localhost:3000/';

  // Resources
  // http://localhost:3000/paneldata
  // http://localhost:3000/tabledata
  // http://localhost:3000/comments
  // http://localhost:3000/users

  constructor() {}
  getPanelData() {
    return of(paneldata);
  }
  getTableData() {
    return of(tabledata);
  }
  getComments() {
    return of(comments);
  }
  getUsers() {
    return of(users);
  }
  getStats() {
    return of(stats);
  }
  getContent() {
    return of(content);
  }
}
