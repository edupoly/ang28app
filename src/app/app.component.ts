import { Component } from '@angular/core';
import { ArthService } from './arth.service';

@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public as:ArthService){
  }
  num1:number=190;
  num2:number=340;
  ngOnInit(){
    var res = this.as.add(this.num1,this.num2)
    console.log(res)

    //calling sub method 
    this.as.sub(this.num1,this.num2,function(result:any){
      console.log(result)
    })

    this.as.div(this.num1,this.num2)
    .then(function(res){
      console.log(res)
    })
    .catch(function(err){
      console.log(err)
    })
  }
}
