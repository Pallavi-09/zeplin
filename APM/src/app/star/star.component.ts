import { Component, OnChanges,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  constructor() { }
  
  @Input() rating:number;
  starRating:number;
  @Output() notify : EventEmitter<number> = new EventEmitter();
  
  ngOnChanges() {
      this.starRating = this.rating * 86/5;
  }

  onClick(){
    this.notify.emit(this.rating);
  }
}
