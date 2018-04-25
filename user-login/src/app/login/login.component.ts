import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { JsonserviceService } from '../jsonservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[JsonserviceService]
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;
  public loginDataOnLoad:any = {};
  login:any[];

  constructor(private _JsonserviceService:JsonserviceService) { }

  ngOnInit() {  
    this.loginForm = new FormGroup ({
      'email': new FormControl(null , [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

 
  loginFormSubmit(value){

    if(this.loginForm.valid){

      this.loginDataOnLoad.email = this.loginForm.get('email').value;
      this.loginDataOnLoad.password = this.loginForm.get('password').value;

      this._JsonserviceService.getJson().subscribe((data) => {
        this.login = data;
        if((this.login[0].username ==  this.loginDataOnLoad.email) && (this.login[0].password == this.loginDataOnLoad.password)){
          console.log('email & password matched');
        }
        else{
          console.log('Not matched');
        }
      
      });
     
    }
  }

}
