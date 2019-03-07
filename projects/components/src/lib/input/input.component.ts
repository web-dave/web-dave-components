import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wd-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() icon: string;
  constructor() {}

  ngOnInit() {}
}
