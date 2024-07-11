import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lottery',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {
  participants: string[] = [];
  newParticipant: string = '';
  winner: string | null = null;

  ngOnInit() {
    this.loadParticipants();
  }

  loadParticipants() {
    const savedParticipants = localStorage.getItem('lotteryParticipants');
    if (savedParticipants) {
      this.participants = JSON.parse(savedParticipants);
    }
  }

  saveParticipants() {
    localStorage.setItem('lotteryParticipants', JSON.stringify(this.participants));
  }

  addParticipant() {
    if (this.newParticipant.trim()) {
      this.participants.push(this.newParticipant.trim());
      this.newParticipant = '';
      this.saveParticipants();
    }
  }

  drawWinner() {
    if (this.participants.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.participants.length);
      this.winner = this.participants[randomIndex];
    }
  }

  resetLottery() {
    this.participants = [];
    this.winner = null;
    this.saveParticipants();
  }

  removeParticipant(index: number) {
    this.participants.splice(index, 1);
    this.saveParticipants();
  }
}
