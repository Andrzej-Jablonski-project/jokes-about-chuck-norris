import { JokeService } from './../../services/joke.service';
import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.scss']
})
export class DownloaderComponent implements OnInit {

  public counter = 0;
  private jokes: string[] = [];

  constructor(private dataService: JokeService) { }

  ngOnInit(): void {

  }

  public getJokes(): void {
      this.dataService.getData(`/${this.counter}`).subscribe( {
        next: (data: Joke[]) =>  {
          this.jokes = data.map( (joke: Joke, index: number) => `${index + 1}. ${joke.joke} \n` );
        },
        complete: () => { this.saveJokes(); },
        error: (err) => { console.log(err.ok); }
      });
  }

  protected saveJokes(): void {
    const blob = new Blob([`${this.jokes.join('')}`], {type: 'text/plain;charset=utf-8'});
    FileSaver.saveAs(blob, 'jokes.txt');
  }

  public increaseCount(): void {
      this.counter++;
  }

  public decreaseCount(): void {
    if (this.counter > 0){
      this.counter--;
    }
  }
}
