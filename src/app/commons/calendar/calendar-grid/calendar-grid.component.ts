import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayComponent } from "../day/day.component";

@Component({
  selector: 'app-calendar-grid',
  standalone: true,
  imports: [
    CommonModule,
    DayComponent,
  ],
  templateUrl: './calendar-grid.component.html',
  styleUrl: './calendar-grid.component.css'
})

export class CalendarGridComponent implements OnInit {
  @Input() days: {date: number, hasEvent: boolean}[] = [];
  @Input() currentMonth!: number;
  @Input() currentYear!: number;

  ngOnInit() {
    this.generateDaysForCurrentMonth();
  }

  generateDaysForCurrentMonth() {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    this.days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      this.days.push({
        date: i,
        hasEvent: [3, 8, 11, 16, 21, 25].includes(i) // Ví dụ về các ngày có sự kiện
      });
    }
  }
}
