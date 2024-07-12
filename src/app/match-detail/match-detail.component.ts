import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Match {
  id: number;
  matchName: string;
  date: string;
  time: string;
  venue: string;
  homeTeam: string;
  awayTeam: string;
  price: number;
  availableTickets: number;
}

@Component({
  selector: 'app-match-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {
  match: Match | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.match = this.getMatchDetails(id);
  }

  getMatchDetails(id: number): Match | undefined {
    // Giả lập dữ liệu - trong thực tế, bạn sẽ gọi API ở đây
    const matches: Match[] = [
      { id: 1, matchName: 'Team A vs Team B', date: '2024-07-15', time: '19:00', venue: 'Stadium X', homeTeam: 'Team A', awayTeam: 'Team B', price: 50, availableTickets: 1000 },
      { id: 2, matchName: 'Team C vs Team D', date: '2024-07-18', time: '18:30', venue: 'Stadium Y', homeTeam: 'Team C', awayTeam: 'Team D', price: 55, availableTickets: 800 },
      // Thêm các trận đấu khác...
    ];
    return matches.find(match => match.id === id);
  }
}
