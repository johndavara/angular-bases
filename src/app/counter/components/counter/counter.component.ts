import { Component } from '@angular/core';

@Component({
  selector:'app-counter',
  template: `<h1> {{ title }} </h1>
  <hr>
  <h3>Counter:{{counter}}</h3>

  <button (click)="increateBy(1)">+1</button>
  <button (click)="decreaseBy(1)">-1</button>
  <button (click)="reset(10)">Reset</button>

  <hr>
  `,
})

export class CounterComponent{
  public title : string = 'Mi primera app de angular';
  public counter: number = 10;

 increateBy(value : number) : void{
  this.counter += value;
  }

  decreaseBy(value : number) : void{
    this.counter -= value;
  }

  reset(value : number) : void{
    this.counter = value;
  }
}
