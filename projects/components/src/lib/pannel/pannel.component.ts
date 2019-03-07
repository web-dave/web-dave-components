import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wd-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent {
  @Input() data;
  constructor() {}
}
