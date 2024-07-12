import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatchCalendarComponent } from '../match-calendar/match-calendar.component';
import { inject } from '@angular/core';

interface Ticket {
  id: number;
  matchName: string;
  date: string;
  price: number;
  available: boolean;
}

interface MatchEvent {
  title: string;
  start: Date;
  end: Date;
}

@Component({
  selector: 'app-ticket-booking',
  standalone: true,
  imports: [CommonModule, RouterModule, MatchCalendarComponent],
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  private router = inject(Router); // Sử dụng inject để lấy Router
  tickets: Ticket[] = [
    { id: 1, matchName: 'Team A vs Team B', date: '2024-07-15', price: 50, available: true },
    { id: 2, matchName: 'Team C vs Team D', date: '2024-07-18', price: 55, available: true },
    { id: 3, matchName: 'Team E vs Team F', date: '2024-07-20', price: 60, available: false },
    // Thêm nhiều vé khác...
  ];

  events: MatchEvent[] = [
    { title: 'Team A vs Team B', start: new Date('2024-07-15T19:00:00'), end: new Date('2024-07-15T21:00:00') },
    { title: 'Team C vs Team D', start: new Date('2024-07-18T18:30:00'), end: new Date('2024-07-18T20:30:00') },
    { title: 'Team E vs Team F', start: new Date('2024-07-20T20:00:00'), end: new Date('2024-07-20T22:00:00') },
    // Thêm nhiều sự kiện khác...
  ];

  activeView: 'list' | 'calendar' = 'list';

  ngOnInit() {
    // Có thể thêm logic khởi tạo ở đây nếu cần
  }

  toggleView(view: 'list' | 'calendar') {
    this.activeView = view;
  }

  goToTicketDetail(ticketId: number) {
    // Điều hướng đến trang chi tiết vé
    // Ví dụ: this.router.navigate(['/ticket', ticketId]);
    this.router.navigate(['/match', ticketId]);
  }
}
