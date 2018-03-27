import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  nameProp:string = "Product List";
  product : any[] = [
    {"Show_Image":"./././assets/images/Machovka-Hammer-2.png" , "Product":"Hamburger", "code": 110, "Available":"Mar 19 2017", "Price":"$19.2","Star_Rating": "2.2"},
    {"Show_Image":"./././assets/images/garden-cart.png" , "Product":"Garden Cart", "code": 111, "Available":"Mar 23 2017", "Price":"$19.2","Star_Rating": "4.2"},
   
  ]
}
