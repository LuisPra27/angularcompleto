import { Component, EventEmitter, Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, ItemsComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> =new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> =new EventEmitter();
  //Event Emitter debe ser importado de @angular/core

  onDelete(item:Item){
    this.deleteItem.emit(item);

  }

  onToggle(item:Item){
    item.completed = !item.completed;
    this.toggleItem.emit(item);
    
  }

  }


