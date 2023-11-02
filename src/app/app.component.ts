import { Component } from '@angular/core';

@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname="Praveen";
  price=100;
  tax=3939438.5894;
  today = new Date();
  students = ['naseer','kalyan','siva','pavan','mounisha','bhavani','suma','uma','rohit','suresh','nani','babu','gauri','shankar','vinay','kiran','manju','mitra','bhaskar']
  order='a';
  setOrder(x:any){
    this.order=x;
  }
}
