import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent {

  fruit: Fruit = {};
  @Output()
  fruitAdded: EventEmitter<Fruit> = new EventEmitter<Fruit>();
  constructor(private fruitService: FruitService) { }

  add() {
    if (this.fruit.name)
      this.fruitService.addFruit(this.fruit).subscribe(data => {
        alert("Fruit Added");
        this.fruitAdded.emit(this.fruit);
        this.fruit = {};
      })
  }
}
