import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Brother1Component } from './brother1/brother1.component';
import { Brother2Component } from './brother2/brother2.component';
import { Brother3Component } from './brother3/brother3.component';

@NgModule({
  declarations: [
    AppComponent,
    Brother1Component,
    Brother2Component,
    Brother3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
