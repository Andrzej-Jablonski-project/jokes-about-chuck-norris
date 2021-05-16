import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from './models/joke';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  joke$: Observable<Joke[]>;
  category: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.joke$ = this.dataService.getJoke();
  }

  refreshJoke(): void {
    if (this.category === 'explicit') {
      this.joke$ = this.dataService.getJokeExplicit();
    } else if (this.category === 'nerdy') {
      this.joke$ = this.dataService.getJokeNerdy();
    } else {
      this.joke$ = this.dataService.getJoke();
    }
  }

  getSelectedValue(category: any): void {
    this.category = category;
  }
}
