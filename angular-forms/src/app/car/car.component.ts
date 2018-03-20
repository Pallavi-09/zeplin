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
  private name:string = "";
  constructor( private _msgService : MessageService ) { }

  ngOnInit() {
    this._msgService.getJSON().subscribe(data => {
      this.emp_data = data.emp;
    });
  }

}
