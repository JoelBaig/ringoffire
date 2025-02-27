import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { NgIf, NgFor, NgStyle } from '@angular/common';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, NgStyle, PlayerComponent],
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
    if (this.game.stack.length > 0 && !this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() ?? 'card_cover';
      this.pickCardAnimation = true;
      console.log('New Card: ' + this.currentCard);
      console.log('Game is', this.game);

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
  }
}