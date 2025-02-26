import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { NgIf, NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, NgStyle],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game = new Game;

  @Input() card = {
    image: './assets/img/cards/card_cover.png',
    name: 'Card Name'
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (this.game.stack.length > 0) {
      this.currentCard = this.game.stack.pop() ?? 'card_cover';
      this.pickCardAnimation = true;
    } else {
      console.warn("Keine Karten mehr im Stapel!");
    }
  }
}