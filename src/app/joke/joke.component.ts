import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Joke } from '../models/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  joke$: Observable<Joke[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.joke$ = this.dataService.getJoke();
  }
}
