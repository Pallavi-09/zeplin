import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

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
  toggleImg:boolean = false;
  filter_txt:string = "";

  get listFilter():string{
    return this.filter_txt;
  }
  set listFilter(value:string){
    this.filter_txt = value;
  }

  fliteredProducts:IProduct[];

  product : IProduct[] = [
    {"ImageUrl":"./././assets/images/Machovka-Hammer-2.png" , "Product":"Hamburger", "code":"GDC 110", "Available":"Mar 19 2017", "Price":19.333,"Star_Rating": 2.2},
    {"ImageUrl":"./././assets/images/garden-cart.png" , "Product":"Garden Cart", "code": "GDC 111", "Available":"Mar 23 2017", "Price":4.543,"Star_Rating": 4.2},
  ];

  showImageToggle(e):void{
    this.toggleImg = !this.toggleImg;
  }
}
