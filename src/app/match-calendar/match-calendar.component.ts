import { Component, Input } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-match-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  template: `
    <full-calendar [options]="calendarOptions"></full-calendar>
  `,
  styles: [`
    :host {
      display: block;
      height: 600px;
    }
  `]
})
export class MatchCalendarComponent {
  @Input() events: any[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: this.events
  };
}
