import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from "./commons/calendar/calendar/calendar.component";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './commons/calendar/calendar/calendar.component.html',
  styleUrl: './commons/calendar/calendar/calendar.component.css'
})

export class AppComponent {
  title = 'angular-tour-of-heroes';
}
