import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fruit } from '../models/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-add-fruit',
  templateUrl: './add-fruit.component.html',
  styleUrls: ['./add-fruit.component.css']
})
export class AddFruitComponent implements OnInit {

  fruit: Fruit = {};
  @Output()
  fruitAdded: EventEmitter<Fruit> = new EventEmitter<Fruit>();
  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
  }
  add() {
    if (this.fruit.name)
      this.fruitService.addFruit(this.fruit).subscribe({
        next: data => {
          this.fruitAdded.emit(this.fruit);
          this.fruit = {};
        },
        error: e => {
          alert("Failed to Add Fruit due to Network Error !! Please Try Again Later");
        }
      });
  }

}
