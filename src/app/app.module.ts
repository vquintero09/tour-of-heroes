import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './Components/Heroes/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './Components/messages/messages.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeroesComponent,
    MessagesComponent,
    DashboardComponent,
    RouterOutlet,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
