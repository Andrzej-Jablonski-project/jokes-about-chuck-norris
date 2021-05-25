import { Joke } from './../../models/joke';
import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  public joke: string;
  private category: string;
  public firstName = 'Chuck';
  public lastName = 'Norris';
  public name = '';

  constructor(private dataService: JokeService) {
  }

  ngOnInit(): void {
    this.getJoke('');
  }

  public refreshJoke(name: string): void {
    const categories = {
      nerdy: '?limitTo=[nerdy]',
      explicit: '?limitTo=[explicit]',
    };
    const person = `?firstName=${this.firstName}&lastName=${this.lastName}`;

    if (this.category === 'explicit') {
      this.getJoke(categories.explicit);
    } else if (this.category === 'nerdy') {
      this.getJoke(categories.nerdy);
    } else {
      this.getJoke('');
    }

    if (this.name !== ''){
      this.getJoke(person);
    }
  }

  private getJoke(option: string): void {
    this.dataService.getData(option).subscribe({
      next: (data: any) => {
        this.joke = data.joke;
      },
      complete: () => {},
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.joke = `Status ${err.status}, ${err.statusText}, try again later`;
      },
    });
  }

  public getSelectedValue(category: string): void {
    this.category = category;
  }

  public changeName(event: string): void {
    this.name = event;
    const fullName: string[] = event.split(' ');
    this.firstName = fullName[0] || 'Chuck';
    this.lastName = fullName[1] || 'Norris';
  }

}
