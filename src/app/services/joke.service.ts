import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Joke } from '../models/joke';
import { JokeResult } from '../models/joke-result';
import { API_BASE_URL } from '../const/assets';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) {
  }

  getJoke(option: string): Observable<Joke[]> {
    return this.http.get<JokeResult>(`${API_BASE_URL}${option}`)
      .pipe(map(result => result.value));
  }
}
