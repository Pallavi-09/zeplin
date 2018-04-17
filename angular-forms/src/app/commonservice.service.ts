import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class CommonserviceService {

  constructor(private _http:Http) { }

  getEmp(){
    return this._http.get("././assets/employee.json").map((res:Response) => res.json());
  }
  getInfo(){
    return "Hello Pallavi Called by service !!!!!!";
  }
}
