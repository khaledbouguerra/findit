import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from "./_widgets/movies/movies.component";
import {MovieComponent} from "./movie/movie.component";

export const routes: Routes = [
  {path:'',component:MoviesComponent},
  {path:'movie/:id' ,component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FinditRoutingModule { }
