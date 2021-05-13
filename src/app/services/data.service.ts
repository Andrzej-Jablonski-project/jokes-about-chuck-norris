import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Joke } from '../models/joke';
import { JokeResult } from '../models/joke-result';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_BASE_URL = 'https://api.icndb.com';

  constructor(private http: HttpClient) { }

  getJoke(): Observable<Joke[]> {
    return this.http.get<JokeResult>(`${this.API_BASE_URL}/jokes/random`)
      .pipe(map(result => result.value));
  }
}
