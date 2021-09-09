import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopNavBar2Component } from './header/top-nav-bar-2.component'
import { FilterComponent } from './header/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBar2Component,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
