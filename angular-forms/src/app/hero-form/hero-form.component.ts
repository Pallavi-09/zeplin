import { Component, OnInit } from '@angular/core';
import { User } from '../User'

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  public gender : string[];
  private user:User;
  constructor() { }

  ngOnInit() {
    this.gender = ['male','female','other'];
    this.user = new User({email:"aaqa@gmail.com",password:{ pwd: "",confirm_pwd:""},gender:this.gender[0], terms:false});
  }
  onFormSubmit({value, valid} : {value:User, valid:boolean}){
    console.log(value);
    console.log(valid);
  }
  
}
