import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-calendar-header',
  standalone: true,
  imports: [
    CommonModule,
    EventEmitter,
    Input,
    Output
  ],
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.css'
})
export class CalendarHeaderComponent {
  @Input() currentMonth!: number;
  @Input() currentYear!: number;
  @Output() prevMonth = new EventEmitter<unknown>();
  @Output() nextMonth = new EventEmitter<unknown>();

  onPrevClick() {
    this.prevMonth.emit();
  }

  onNextClick() {
    this.nextMonth.emit();
  }
}
