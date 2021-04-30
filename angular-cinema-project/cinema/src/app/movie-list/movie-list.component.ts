import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: BehaviorSubject<Movie[]> = this.httpService.movieList;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getMovieList()
  }

  getMovies(): void { }

  deleteMovie(id: number): any {
    this.httpService.deleteMovie(id)
  }

}
