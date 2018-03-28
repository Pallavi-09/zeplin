import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { convertSpaceToDash } from './shared/customPipe';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    convertSpaceToDash,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
