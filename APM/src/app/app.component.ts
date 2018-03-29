import { Component } from '@angular/core';
import { productService } from './product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [productService]
})
export class AppComponent {
  title = 'Welcome to Acme Product Management';
}
