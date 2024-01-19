import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { CountriesComponent } from './countries/countries.component';
import { AddpostComponent } from './addpost/addpost.component';
import { CountrydetailsComponent } from './countrydetails/countrydetails.component';
import { LoginComponent } from './login/login.component' 
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CountriesComponent,
    AddpostComponent,
    CountrydetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
