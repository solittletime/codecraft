import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent {
  @Input('joke') joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  constructor() { }

  deleteItem() {
    this.jokeDeleted.emit(this.joke);
  }
}
