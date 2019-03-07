import { Component, OnInit, Input } from '@angular/core';
import { IProgressData } from '../../progress-data';

@Component({
  selector: 'wd-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() data: IProgressData;
  constructor() {}

  ngOnInit() {}
  getColor(): string {
    return `w3-${this.data.color}`;
  }
  getProgress() {
    return { width: `${this.data.progress}%` };
  }
}
