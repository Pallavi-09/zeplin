import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { convertSpaceToDash } from './shared/customPipe';
import { StarComponent } from './star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RoutingModule } from './routing/routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    convertSpaceToDash,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
