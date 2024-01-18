import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { SpecialDirective } from './special.directive';
import { ClearnumberDirective } from './clearnumber.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SpecialDirective,
    ClearnumberDirective
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
