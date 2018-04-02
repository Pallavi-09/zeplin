import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { CarComponent } from './car/car.component';
import { MessageService } from './car/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductDetailComponent } from './product/product-detail/product-detail.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    CarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
