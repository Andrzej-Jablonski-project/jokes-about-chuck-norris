import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Joke } from '../models/joke';
import { JokeResult } from '../models/joke-result';
import { API_BASE_URL } from '../const/assets';
import { JokeSingleResult } from '../models/joke-single-result';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) {
  }

  getData(option: string): Observable<Joke[]> {
    return this.http.get<JokeResult>(`${API_BASE_URL}${option}`)
      .pipe(map(result => result.value));
  }

  getSingleData(option: string): Observable<Joke> {
    return this.http.get<JokeSingleResult>(`${API_BASE_URL}${option}`)
      .pipe(map(result => result.value));
  }
}
