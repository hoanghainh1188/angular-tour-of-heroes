import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarHeaderComponent } from "../calendar-header/calendar-header.component";
import { CalendarGridComponent } from "../calendar-grid/calendar-grid.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    CalendarHeaderComponent,
    CalendarGridComponent,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  currentMonth: number;
  currentYear: number;
  days: {date: number, hasEvent: boolean}[] = [];

  constructor() {
    const now = new Date();
    this.currentMonth = now.getMonth();
    this.currentYear = now.getFullYear();
    this.generateDaysForMonth(this.currentMonth, this.currentYear);
  }

  generateDaysForMonth(month: number, year: number) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    this.days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      this.days.push({
        date: i,
        hasEvent: [3, 8, 11, 16, 21, 25].includes(i) // Example event days
      });
    }
  }

  onPrevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateDaysForMonth(this.currentMonth, this.currentYear);
  }

  onNextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateDaysForMonth(this.currentMonth, this.currentYear);
  }
}
