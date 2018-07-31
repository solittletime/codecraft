import { Component, Input } from '@angular/core';

import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent {
  @Input('joke') joke: Joke;

  constructor() {}
}
