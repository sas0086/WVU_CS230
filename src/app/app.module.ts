import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { TopNavBar2Component } from './header/top-nav-bar-2.component'
import { FilterComponent } from './header/filter.component';
import { JobsCardComponent } from './cards/jobs-card.component';
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
import { MyProfileCardComponent } from './cards/my-profile-card.component';
import { EditUserInfoComponent } from './header/edit-user-info.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';

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
    MyProfileCardComponent,
    UserInfoComponent,
    EditUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
