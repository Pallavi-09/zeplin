import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";

@Injectable()
export class JsonserviceService {

  constructor(private _http:Http) { }
   
  getJson(){
    return this._http.get("././assets/user.json").map((res:Response) => res.json());;
  }

}
