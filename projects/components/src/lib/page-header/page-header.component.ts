import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wd-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
