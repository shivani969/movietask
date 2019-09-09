import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginnComponent } from './loginn/loginn.component';
import { TableeComponent } from './tablee/tablee.component';
import { MoviesComponent } from './movies/movies.component';
import { MovielistComponent } from './movielist/movielist.component';


const routes: Routes = [

  {path:'',component:RegisterComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginnComponent},
  {path:'table',component:TableeComponent},
  {path:'movie',component:MoviesComponent},
  {path:'movlist',component:MovielistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

