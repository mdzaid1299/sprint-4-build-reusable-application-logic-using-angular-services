import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  fruitName: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  searchFruit() {
    this.searchTextChanged.emit(this.fruitName);
  }

  clearSearch() {
    this.fruitName = "";
    this.searchTextChanged.emit(this.fruitName);
  }
}
