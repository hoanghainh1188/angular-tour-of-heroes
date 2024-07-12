import { Routes } from '@angular/router';
import { LotteryComponent } from './lottery/lottery.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';

export const routes: Routes = [
  { path: 'lottery', component: LotteryComponent },
  { path: 'booking', component: TicketBookingComponent},
  { path: 'match/:id', component: MatchDetailComponent },
  { path: '', redirectTo: '/lottery', pathMatch: 'full' },
];
