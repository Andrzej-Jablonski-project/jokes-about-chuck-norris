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
  firstName = 'Chuck';
  lastName = 'Norris';
  covers: Array<string> = ['assets/Chuck-Norris-photo.jpg', 'assets/Random-photo.jpg'];
  viewCover = this.covers[0];

  constructor(private dataService: DataService) {
    this.dataService.getJokeFalseName(this.firstName, this.lastName);
  }

  ngOnInit(): void {
    this.joke$ = this.dataService.getJoke();
  }

  refreshJoke(): void {
    if ((this.category === 'explicit') && (this.firstName === 'Chuck')) {
      this.joke$ = this.dataService.getJokeExplicit();
      this.viewCover = this.covers[0];

    } else if ((this.category === 'nerdy') && (this.firstName === 'Chuck')) {
      this.joke$ = this.dataService.getJokeNerdy();
      this.viewCover = this.covers[0];

    } else if ( (this.firstName !== 'Chuck')){
      this.joke$ = this.dataService.getJokeFalseName(this.firstName, this.lastName);
      this.viewCover = this.covers[1];

    } else if ( (this.firstName !== 'Chuck') && (this.category === 'explicit')){
      this.joke$ = this.dataService.getJokeFalseName(this.firstName, this.lastName);
      this.viewCover = this.covers[1];

    }else if ( (this.firstName !== 'Chuck') && (this.category === 'nerdy')){
      this.joke$ = this.dataService.getJokeFalseName(this.firstName, this.lastName);
      this.viewCover = this.covers[1];

    } else {
      this.joke$ = this.dataService.getJoke();
      this.viewCover = this.covers[0];
    }
  }

  getSelectedValue(category: string): void {
    this.category = category;
  }

  changeName(event: any): void {
    const fullName = event.target.value.split(' ');
    this.firstName = event.target.value !== '' ? fullName[0] : 'Chuck';
    this.lastName = event.target.value !== '' ? fullName[1] === undefined ? 'Norris' : fullName[1] : 'Norris';
  }
}
