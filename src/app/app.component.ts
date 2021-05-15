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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.joke$ = this.dataService.getJoke();
  }

  refreshJoke(): void {
    this.joke$ = this.dataService.getJoke();
  }
}
