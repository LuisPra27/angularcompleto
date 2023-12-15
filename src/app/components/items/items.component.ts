import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item';
import { ItemComponent } from '../item/item.component';
import { TotalComponent } from "../total/total.component";
import { ItemService } from '../../services/item.service';
import { data } from 'jquery';


@Component({
    selector: 'app-items',
    standalone: true,
    templateUrl: './items.component.html',
    styleUrl: './items.component.css',
    imports: [CommonModule, ItemComponent, TotalComponent]
})
export class ItemsComponent implements OnInit{
  items: Item[] = [];
  total: number = 0;

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    this.items = [];
    this.items = this.itemService.getItems();
    
    
    this.getTotal();
    
  }

  deleteItem(item: Item){
    this.itemService.deleteItem(item);
    this.items = this.itemService.getItems();
  
    this.getTotal();
  }
  

  toggleItem(item :Item){
    this.getTotal();
  }
  
  getTotal(){
    this.total = this.items
                .filter( item => !item.completed )
                .map (item => item.quantity * item.price)
                .reduce( (acc, item) => acc += item, 0);
  }

}
