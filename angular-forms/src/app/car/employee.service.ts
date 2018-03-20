import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {

    
    constructor ( private http:HttpClient){ //Intialize the http   
    }
    
    public getJSON():any{
        return this.http.get("./assets/employee.json");
    }    
}