import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wd-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
