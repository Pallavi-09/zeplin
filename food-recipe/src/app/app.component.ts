import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listAry:any[]=[];
  isActive:boolean;
  selectedRow:number;
  name:string;
  updateCheck:boolean=false;
  textToUpdate:string;
  
  onkeyupEvent(e){
    this.listAry.push(e);
    this.updateCheck = false; 
    this.name = '';
  } 

  onDeleteEvent(e){
    this.updateCheck = false; 
    let parentTxt = e.parentElement.innerText;
    this.name = parentTxt.split('Delete')[0].trim();
    for(var i = 0; i<this.listAry.length; i++){
      if(this.listAry[i] == this.name){
        this.listAry.splice(i,1); 
      }
    }
    alert (this.name + "This Element is removed");
    this.name = '';
  }

  onUpdate(e){
    this.updateCheck = true; 
    this.textToUpdate = e.parentElement.innerText.split('Delete')[0].trim();;
    this.name = this.textToUpdate;   
                                                                                                                                                                                                                                                                     
  }

  updateAry(e){
      for(var i = 0; i<this.listAry.length;i++){
        if(this.listAry[i] == this.textToUpdate){
          this.listAry[i] = this.name; 
        } 
      }
      alert (this.textToUpdate + " This Element is Updated By - >" +  this.name );
      this.name = ''; 
      this.updateCheck = false; 
  }
}
