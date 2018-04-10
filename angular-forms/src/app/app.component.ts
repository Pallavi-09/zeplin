import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  languages:any[] = ["Hindi","English","Spanish","German"];

  // constructor( public firstname:string, public lastname:string){}

  // employee(firstname,lastname){
  //     return "FirstName->"+firstname+" Lastname->" + lastname;
  // }
  model = new Employee('', 'Singh', true, '1099','German');
  // onChangeModel(e){
  //   if(e.length > 0 ){
  //     this.model.firstname = e.charAt(0).toUpperCase()+e.slice(1);
  //     console.log(e);
  //   }
  //   else{
  //     this.model.firstname = e;
  //   }
  // }
}
