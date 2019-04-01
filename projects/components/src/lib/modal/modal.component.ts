import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  OnChanges,
  SimpleChanges,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'wd-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnChanges {
  @Input() display: 'block' | 'none' = 'none';
  @Output() displayChanged = new EventEmitter<'block' | 'none'>();
  ngOnChanges(changes: SimpleChanges): void {
    this.displayChanged.emit(this.display);
  }
  showModal() {
    this.display = this.display === 'none' ? 'block' : 'none';
    this.displayChanged.emit(this.display);
  }
}
