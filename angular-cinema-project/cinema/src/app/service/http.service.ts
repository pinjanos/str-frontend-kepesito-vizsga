import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/pinjanos/movies';

  movieList: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([])

  constructor(
    private http: HttpClient
  ) { }

  getMovieList(): void {
    this.http.get<Movie[]>(`${this.BASE_URL}`).subscribe(
      list => this.movieList.next(list)
    );
  }

  deleteMovie(id: number): void {
    this.http.delete(`${this.BASE_URL}/${id}`).subscribe(
      () => this.getMovieList()
    )
  }
}
