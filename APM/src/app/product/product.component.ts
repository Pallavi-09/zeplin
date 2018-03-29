import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { productService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [productService]
})
export class ProductComponent implements OnInit {

  fliteredProducts:IProduct[];  
  nameProp:string = "Product List";
  toggleImg:boolean = false;
  filter_txt:string = "";
  product:IProduct[];
  errorMsg:string ;

  constructor( private _productService : productService) { 

  }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe( product => {
        this.product = product,
        this.fliteredProducts = this.product
      },         
      error => this.errorMsg = <any>error);
    
  }
  
  get listFilter():string{
    return this.filter_txt;
  }
  set listFilter(value:string){
    this.filter_txt = value;
    this.fliteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.product;
  }
  showImageToggle(e):void{
    this.toggleImg = !this.toggleImg;
  }

  performFilter(filterBy:string): IProduct[] {
    filterBy = filterBy.toLocaleUpperCase();
    return this.product.filter( (product:IProduct) => 
        product.Product.toLocaleUpperCase().indexOf(filterBy) !== -1);
  }

  eventListen(mesg):void{
      this.nameProp = "Product List :: "+mesg + "Rating is Clicked ! ";
  }
}
