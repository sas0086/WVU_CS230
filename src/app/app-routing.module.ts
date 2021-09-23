import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverallLayoutComponent } from './layout/overall-layout.component';
import { EmployersPageComponent } from './web-page/employers-page.component';
import { EventsPageComponent } from './web-page/events-page.component';
import { HomePageComponent } from './web-page/home-page.component';
import { MessagesPageComponent } from './web-page/messages-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'employers', component: EmployersPageComponent },
  { path: 'messages', component: MessagesPageComponent },
  { path: 'jobs', component: OverallLayoutComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
