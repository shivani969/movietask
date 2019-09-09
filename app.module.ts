import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { OffComponent } from './off/off.component';
import { TableComponent } from './table/table.component';
import { PointsComponent } from './points/points.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { PayyComponent } from './payy/payy.component';
import { McqComponent } from './mcq/mcq.component';
import { LoginnComponent } from './loginn/loginn.component';
import { RegisterComponent } from './register/register.component';
import { TableeComponent } from './tablee/tablee.component';
import { MoviesComponent } from './movies/movies.component';
import { MovielistComponent } from './movielist/movielist.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'


@NgModule({
  declarations: [
    AppComponent,

    
    SignupComponent,
    
    PayyComponent,
    McqComponent,
    LoginnComponent,
    RegisterComponent,
    TableeComponent,
    MoviesComponent,
    MovielistComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     NgbModule,
   // NgModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
