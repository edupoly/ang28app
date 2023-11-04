import { Component } from '@angular/core';

@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x = [10,48,27,73,58,19,40]
  newvalue=0;
  addValue(){
    this.x.push(this.newvalue)
  }
  checkIt(i:any,v:any){
    return i
  }
}
