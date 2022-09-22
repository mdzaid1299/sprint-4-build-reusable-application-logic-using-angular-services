import { Component, OnInit } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FRUITS } from '../models/fruits';

@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrls: ['./fruit-manager.component.css']
})
export class FruitManagerComponent {

  fruits: Fruit[] = FRUITS;

  constructor() { 
  }
  
  onSearchTextChanged(fruitName: string) {
    if(fruitName === '' || !fruitName)
      this.fruits = FRUITS;
    else
    {
      this.fruits = FRUITS;
      this.fruits = this.fruits.filter(fruit => fruit.name?.includes(fruitName));
    }
  }
}
