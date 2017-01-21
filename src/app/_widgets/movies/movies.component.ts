import {Component, OnInit} from '@angular/core';
import {MovieServiceService} from "../../_services/movie-service.service";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    searchStr: string;
    movies:Array<any>=[];
    searching: boolean = false;
    public query = '';
    public filteredList = [];
    public elementRef;

    reaserchAutocomplete: any;

    constructor(private movieServiceService: MovieServiceService) {
    }

    ngOnInit() {
    }

    searchMovies() {
        this.searching = true;
        this.movieServiceService.searchMovies(this.searchStr)
            .subscribe(result => {
               // this.movies = result.results;
                this.searching = false;
                console.log(this.movies);

            });
        console.log('you are now looking for a movie');
        console.log(this.searchStr);
        console.log('khaled');
    }

    autocompleteResult() {
        this.movieServiceService.searchMovies(this.searchStr)
            .subscribe(result => {

                console.log(result.results[0])
            });

    }

    filter() {
        this.searching = true;
        this.movieServiceService.searchMovies(this.searchStr)
            .subscribe(result => {

                let res=result.results;
                for(let i=0;i<res.length;i++){

                    this.movies.push(res[i].title);
                }
                console.log("moveis titls", this.movies);

                //this is where the magic happens


                if (this.searchStr !== ""&&this.movies.length>0) {
                    this.filteredList = this.movies.filter(function (el) {
                        return el.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1;
                    }.bind(this));
                } else {
                    this.filteredList = [];
                }


                this.searching = false;
                console.log(this.movies);

            });
        console.log(this.searchStr);
     /*   if (this.searchStr !== ""&&this.movies.length>0) {
            this.filteredList = this.movies.filter(function (el) {
                return el.toLowerCase().indexOf(this.searchStr.toLowerCase()) > -1;
            }.bind(this));
        } else {
            this.filteredList = [];
       }
      */
     console.log("list of suggestions", this.filteredList);
    }

    select(item) {
        this.searchStr = item;
        this.filteredList = [];
    }
}
