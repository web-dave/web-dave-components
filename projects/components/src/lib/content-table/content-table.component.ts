import { Component, OnInit, Input } from '@angular/core';
import { IContent } from '../../content';

@Component({
  selector: 'wd-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {
  @Input() content: IContent;
  constructor() {}

  ngOnInit() {}
}
