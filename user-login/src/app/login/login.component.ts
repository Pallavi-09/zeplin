import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : FormGroup;

  constructor() { }

  ngOnInit() {  
    this.loginForm = new FormGroup ({
      'email': new FormControl(null , [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  loginFormSubmit(){
    console.log(this.loginForm.value);
  }
}
