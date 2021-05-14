import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories = [
    { name: 'Explicit' },
    { name: 'Nerdy' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
