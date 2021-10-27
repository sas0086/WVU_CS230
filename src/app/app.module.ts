import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopNavBar2Component } from './header/top-nav-bar-2.component'
import { FilterComponent } from './header/filter.component';
import { JobsCardComponent } from './left-menu/jobs-card.component';
import { OverallLayoutComponent } from './layout/overall-layout.component';
import { EmployersPageComponent } from './web-page/employers-page.component';
import { EventsPageComponent } from './web-page/events-page.component';
import { HomePageComponent } from './web-page/home-page.component';
import { MessagesPageComponent } from './web-page/messages-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CareerCenterPageComponent } from './web-page/career-center-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { MyProfilePageComponent } from './web-page/my-profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavBar2Component,
    FilterComponent,
    JobsCardComponent,
    OverallLayoutComponent,
    EmployersPageComponent,
    EventsPageComponent,
    HomePageComponent,
    MessagesPageComponent,
    CareerCenterPageComponent,
    MyProfilePageComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
