import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../../comment';

@Component({
  selector: 'wd-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() data: Observable<IComment[]>;
  constructor() {}

  ngOnInit() {}
}
