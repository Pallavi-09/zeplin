import { Component, OnInit } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { JsonserviceService } from '../jsonservice.service';
import { ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

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
  @ViewChild(ChildComponentComponent) child:ChildComponentComponent;

  constructor(private _JsonserviceService:JsonserviceService, private router:Router) { }

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
          
            localStorage.setItem('email',this.loginDataOnLoad.email);
            localStorage.setItem('password',this.loginDataOnLoad.password);            
            this.router.navigate(['/home']);
        }
      
      });
     
    }
  }

}
