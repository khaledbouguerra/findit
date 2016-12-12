import { Injectable } from '@angular/core';
import {Jsonp, URLSearchParams,} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MovieServiceService {
  apikey: string;
  constructor(private _jsonp: Jsonp) {
    this.apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
  }
  searchMovies(searchStr: string) {
    var search = new URLSearchParams();
    search.set('sort_by','popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK', {search})
      .map(res => {
        return res.json();
      })
  }
}
