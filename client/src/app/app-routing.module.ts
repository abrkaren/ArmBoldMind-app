import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from "./shared/layouts/site-layout/site-layout.component";
import { EventsPageComponent } from "./pages/events-page/events-page.component";
import { ListEventsPageComponent } from "./pages/list-events-page/list-events-page.component";


const routes: Routes = [
  { path: '', component: SiteLayoutComponent, children: [
    { path: '', redirectTo: '/create-events', pathMatch: 'full' },
    { path: 'dashboard', component: ListEventsPageComponent },
    { path: 'calendar', component: ListEventsPageComponent },
    { path: 'hotels', component: ListEventsPageComponent },
    { path: 'create-events', component: EventsPageComponent },
    { path: 'notes', component: ListEventsPageComponent },
    { path: 'messages', component: ListEventsPageComponent },
    { path: 'account', component: ListEventsPageComponent },
    { path: '**', redirectTo: '/create-events', pathMatch: 'full'}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
