import { Component } from '@angular/core';

@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num = 34;
  ar = [10,48,27,73,58,19,40]
  students = [
    {
      firstname:'praveen',
      lastname:'gubbala',
      address:{
        pincode:500002
      }
    },
    {
      firstname:'srinivas',
      lastname:'korukonda',
      address:{
        pincode:500033
      }
    },
    {
      firstname:'rohit',
      lastname:'vendra',
      address:{
        pincode:500057
      }
    },
  ]

  ngOnInit(){
    setTimeout(() => {
      this.students[1].address.pincode=555555;
    }, 4000);
    setTimeout(() => {
      this.students[1].address.pincode=66666;
    }, 8000);
    setTimeout(() => {
      this.students[1].address.pincode=77777;
    }, 12000);
  }

  addValue(){
    this.ar.push(this.num)
  }
  abc(ind:number,v:any){
    return JSON.stringify(v)
  }
}
