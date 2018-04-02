import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class MessageService {

    private empUrl = "./assets/employee.json";
    
    constructor(private _http :HttpClient){}

    getEmp():Observable<any[]>{
        return this._http.get<any[]>(this.empUrl)
               .do(data => console.log(data))
               .catch(this.handleErr);
    }

    handleErr(err: HttpErrorResponse){
        return Observable.throw(err.message);
    }
}