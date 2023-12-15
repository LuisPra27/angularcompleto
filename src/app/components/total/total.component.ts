import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-total',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent implements OnInit {

  @Input() total:number = 0;
  @Input() mensaje:string = '';
  constructor(){}
  
  ngOnInit(): void{}

}
