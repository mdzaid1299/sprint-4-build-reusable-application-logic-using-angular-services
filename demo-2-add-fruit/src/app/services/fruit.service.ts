import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '../models/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  URL: string = "http://localhost:3000/fruits";
  constructor(private http: HttpClient) { }

  getFruits(): Observable<Array<Fruit>> {
    return this.http.get<Array<Fruit>>(this.URL);
  }

  addFruit(fruit: Fruit) {
    return this.http.post<Fruit>(this.URL, fruit);
  }
}
