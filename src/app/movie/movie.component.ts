import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovieServiceService} from "../_services/movie-service.service";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id;
  movie: Object;
  trailer:Object;
  constructor(private router:ActivatedRoute,
              private movieServiceService:MovieServiceService,
              private sanitizer: DomSanitizer   ) { }

  ngOnInit() {
  this.router.params.subscribe(result=>{
    this.id=result['id'];
    this.movieServiceService.getMovie(this.id)
      .subscribe(result=>{
        console.log(result);
        this.movie=result;
      });
    this.movieServiceService.getMovieVideos(this.id)
      .subscribe(result=>{

        if(result.results && result.results.length) {
          console.log(result);
          this.trailer = result.results[0];
          this.trailer['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.trailer['key']);
        }
      })
  })
  }

}
