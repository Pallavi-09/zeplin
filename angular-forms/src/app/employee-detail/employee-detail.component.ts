import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private _commonserviceService:CommonserviceService) { }
  value:string;
  emp:any[];

  ngOnInit() {
    this.value = this._commonserviceService.getInfo();
    this._commonserviceService.getEmp().subscribe((data:any[]) => this.emp = data );
    
  }

}
