import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { DoCheck, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';
import { AfterViewInit, AfterViewChecked, SimpleChanges } from '@angular/core';

import { Joke } from '../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})

export class JokeComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, OnDestroy,
  AfterViewInit, AfterViewChecked {

  @Input('joke') joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteItem() {
    this.jokeDeleted.emit(this.joke);
  }

  constructor() {
    console.log(`new - data is ${this.joke}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.joke}`);
    // tslint:disable-next-line:forin
    for (const key in changes) {
      console.log(`${key} changed.
      Current: ${changes[key].currentValue}.
      Previous: ${changes[key].previousValue}`);
    }
  }

  ngOnInit() {
    console.log(`ngOnInit - data is ${this.joke}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
