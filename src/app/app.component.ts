import { Component } from '@angular/core';

@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  updateFirstname(e:any){
    this.firstname=e.target.value;
  }
  abc(){
    this.students.sort();
  }
  empsort(k:any){
    this.employees.sort((a:any,b:any)=>{
      if(a[k]>b[k]){
        return 1
      }
      else{
        return -1;
      }
    })
  }
  firstname="praveen";
  lastname="gubbala"
  num1=100;
  num2=200;
  students=['akhila','pavan','kalyan','siva','srinivas','prashant','naseer']
  employees=[
    {
      firstname:'srinivas',
      lastname:'korukonda',
      age:33,
      gender:'male'
    },
    {
      firstname:'jayaprada',
      lastname:'reddy',
      age:25,
      gender:'female'
    },
    {
      firstname:'rani',
      lastname:'reddy',
      age:22,
      gender:'female'
    },
    {
      firstname:'rohit',
      lastname:'vendra',
      age:21,
      gender:'male'
    },
    {
      firstname:'pahi',
      lastname:'tamuli',
      age:19,
      gender:'female'
    },
    {
      firstname:'govindu',
      lastname:'avala',
      age:29,
      gender:'male'
    },
  ]
}

//properties//data//state
//logic//methods//action
  //eventhandlers//lifecycle methods and their logic
//change detection
// data binding(oneway)
// event binding
// property binding
// twoway data binding

//directive
//ngFor