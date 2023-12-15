import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:4201/items';
  items:Item[] = [
      {
      id: 0,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'pan',
      price: 3.5,
      quantity: 8,
      completed: true
    },
  ];
  constructor() { }

  getItems(){
    return this.items;
    
  }

  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id !== item.id);
 
  }

  

  addItem(item:Item){
    this.items.unshift(item);
  }

  
}


  