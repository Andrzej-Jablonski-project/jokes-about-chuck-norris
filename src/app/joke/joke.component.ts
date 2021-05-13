import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  joke = 'test';

  constructor() { }

  ngOnInit(): void {
  }

  showJoke(): string{
    return this.joke;
  }

}
