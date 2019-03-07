import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPanelData } from 'projects/components/src/panel-data';
import { ITableResponse } from 'projects/components/src/tabledata';
import { IComment } from 'projects/components/src/comment';
import { IUser } from 'projects/components/src/user';
import { IProgressData } from 'projects/components/src/progress-data';
import { IContent } from 'projects/components/src/content';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url = 'http://localhost:3000/';

  // Resources
  // http://localhost:3000/paneldata
  // http://localhost:3000/tabledata
  // http://localhost:3000/comments
  // http://localhost:3000/users

  constructor(private http: HttpClient) {}
  getPanelData() {
    return this.http.get<IPanelData[]>(this.url + 'paneldata');
  }
  getTableData() {
    return this.http.get<ITableResponse>(this.url + 'tabledata');
  }
  getComments() {
    return this.http.get<IComment[]>(this.url + 'comments');
  }
  getUsers() {
    return this.http.get<IUser[]>(this.url + 'users');
  }
  getStats() {
    return this.http.get<IProgressData[]>(this.url + 'stats');
  }
  getContent() {
    return this.http.get<IContent[]>(this.url + 'content');
  }
}
