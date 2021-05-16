import { Categories } from './../models/categories';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  selectedCategory: Categories;

  @Output()
  eventSelect = new EventEmitter<string>();

  categories = [
    { id: 1, name: 'Explicit' },
    { id: 2, name: 'Nerdy' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getSelectValue(event: Categories): void {
    this.eventSelect.emit(event.name.toLocaleLowerCase());
    console.log(event.name);
  }
}
