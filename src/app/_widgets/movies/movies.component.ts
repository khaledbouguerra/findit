import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from "../../_services/movie-service.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchStr:string;
  movies:Array<Object>;
  searching:boolean=false;
  reaserchAutocomplete:any;
  constructor(private movieServiceService:MovieServiceService) {}

  ngOnInit() {
  }
  searchMovies(){
    this.searching=true;
    this.movieServiceService.searchMovies(this.searchStr)
      .subscribe(result=>{
        this.movies=result.results;
        this.searching=false;
        console.log(this.movies);

      });
    console.log('you are now looking for a movie');
    console.log(this.searchStr);
    console.log('khaled');
  }
  autocompleteResult(){
    this.movieServiceService.searchMovies(this.searchStr)
      .subscribe(result=>{console.log(result.results[0])});

  }
}
