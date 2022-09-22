import { Component, OnInit } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-fruit-manager',
  templateUrl: './fruit-manager.component.html',
  styleUrls: ['./fruit-manager.component.css']
})
export class FruitManagerComponent implements OnInit {

  fruits: Fruit[] = [];

  constructor(private fruitService: FruitService) {
  }

  ngOnInit(): void {
    this.fruitService.getFruits().subscribe(data => {
      this.fruits = data;
    })
  }

  onFruitAdded(fruit: Fruit) {
    this.fruits.push(fruit);
  }

  onSearchTextChanged(fruitName: string) {
    this.fruitService.getFruits().subscribe({
      next: data => {
        if (fruitName || fruitName !== '') {
          this.fruits = data.filter(fruit => fruit.name?.includes(fruitName));
        }
        else
          this.fruits = data;
      }
    })
  }
}
