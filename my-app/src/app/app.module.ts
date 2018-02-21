import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponentComponent } from './hero-details-component/hero-details-component.component';
import { HeroService } from './hero.service';
import { MessageServiceService } from './message-service.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponentComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService, MessageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
