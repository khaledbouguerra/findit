import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './_widgets/card/card.component';
import {RouterModule} from "@angular/router";
import {routes, FinditRoutingModule} from "./app-routing.module";
import { MoviesComponent } from './_widgets/movies/movies.component';
import {MovieServiceService} from "./_services/movie-service.service";
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FinditRoutingModule,
    JsonpModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
