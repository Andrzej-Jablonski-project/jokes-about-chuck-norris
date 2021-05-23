import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  selectedCategory: string;

  @Output()
  eventSelect = new EventEmitter<string>();

  categories: string[] = ['Explicit', 'Nerdy'];

  constructor() {}

  ngOnInit(): void {
  }

  getSelectValue(event: string): void {
    if (event){
      this.eventSelect.emit(event.toLocaleLowerCase());
    } else{
      this.eventSelect.emit('none');
    }
  }
}
