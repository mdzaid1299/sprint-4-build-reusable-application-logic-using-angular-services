import { Component, Input, OnInit } from '@angular/core';
import { Fruit } from '../models/fruit';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.css']
})
export class FruitCardComponent {

  @Input()
  fruit?: Fruit;
  constructor() { }

}
