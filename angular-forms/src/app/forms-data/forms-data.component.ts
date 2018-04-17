import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-forms-data',
  templateUrl: './forms-data.component.html',
  styleUrls: ['./forms-data.component.css']
})
export class FormsDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new Employee('', 'Singh', true, '1099','default');

}
