import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){}
  languages:any[] = ["Hindi","English","Spanish","German"];

  hasLangSelected:boolean=false;

  checkingSelection(value){
    if (value === 'default'){
      this.hasLangSelected = true;
    }
    else{
      console.log(2);      
      this.hasLangSelected = false;
    }
  }
}
