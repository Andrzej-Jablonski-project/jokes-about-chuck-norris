import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../../models/joke';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  joke$: Observable<Joke[]>;
  category: string;
  firstName = 'Chuck';
  lastName = 'Norris';
  name = '';

  constructor(private dataService: JokeService) {
  }

  ngOnInit(): void {
    this.joke$ = this.dataService.getJoke('');
  }

  refreshJoke(name: string): void {
    const categories = {
      nerdy: '?limitTo=[nerdy]',
      explicit: '?limitTo=[explicit]',
    };
    const person = `?firstName=${this.firstName}&lastName=${this.lastName}`;

    if (this.category === 'explicit') {
      this.joke$ = this.dataService.getJoke(categories.explicit);
    } else if (this.category === 'nerdy') {
      this.joke$ = this.dataService.getJoke(categories.nerdy);
    } else {
      this.joke$ = this.dataService.getJoke('');
    }

    if (this.firstName !== 'Chuck'){
      this.joke$ = this.dataService.getJoke(person);
    }
  }

  getSelectedValue(category: string): void {
    this.category = category;
  }

  changeName(event: string): void {
    this.name = event;
    const fullName: string[] = event.split(' ');
    this.firstName = fullName[0] || 'Chuck';
    this.lastName = fullName[1] || 'Norris';
  }

}
