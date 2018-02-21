import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailsComponentComponent } from './hero-details-component/hero-details-component.component';
import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
