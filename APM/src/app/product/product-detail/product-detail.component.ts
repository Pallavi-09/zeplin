import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute,Router} from '@angular/router';
import { productService } from '../product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  nameProp:string = "Product List";
  product:IProduct;
  pageTitle:number;
  errorMessage:string;

  constructor( private _route:ActivatedRoute,
              private _router:Router,
              private _productService : productService

  ){}

  ngOnInit() {
    let param = +this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
    this.pageTitle = param;
   
  }

  getProduct(id: number) {
    this._productService.getProducts(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(){
      this._router.navigate(['./product']);
  }
}
