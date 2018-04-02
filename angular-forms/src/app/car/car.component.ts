import { Component, OnInit } from '@angular/core';
import { MessageService } from './employee.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers:[MessageService]
})
export class CarComponent implements OnInit {
  private emp_data = [];
  errorMsg:string;
  private name:string = "";
  constructor( private _msgService : MessageService ) { }

  ngOnInit() {
    this._msgService.getEmp()
      .subscribe(emp_data => this.emp_data = emp_data,
      error=> this.errorMsg = <any>error)
  }

}
