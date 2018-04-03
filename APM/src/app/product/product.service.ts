import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class productService {
    private _productUrl = "././assets/api/data.json";
    constructor( private _http : HttpClient){

    }

    getProducts():Observable<IProduct[]>{
        return  this._http.get<IProduct[]>(this._productUrl)
            //.do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
           // console.log(' catchhandler');
            return Observable.throw(err.message);
    }


}