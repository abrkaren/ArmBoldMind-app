import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { GroomAndBrideComponent } from './pages/events-page/groom-and-bride/groom-and-bride.component';
import { EventDescriptionComponent } from './pages/events-page/event-description/event-description.component';
import { GuestListComponent } from './pages/events-page/guest-list/guest-list.component';
import { VendorsComponent } from './pages/events-page/vendors/vendors.component';
import { EventCreatedComponent } from './pages/events-page/event-created/event-created.component';
import { ListEventsPageComponent } from './pages/list-events-page/list-events-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsPageComponent,
    HeaderComponent,
    FooterComponent,
    SiteLayoutComponent,
    GroomAndBrideComponent,
    EventDescriptionComponent,
    GuestListComponent,
    VendorsComponent,
    EventCreatedComponent,
    ListEventsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
