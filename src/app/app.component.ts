import { Component } from '@angular/core';

@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname:any;

  constructor(){
    console.log("App Component Constructor Called")
  }//called only at the time of mounting
  ngOnInit(){
    console.log("App Component ngOnInit Called");
  }//called only at the time of mounting

  
  ngOnChanges(){
    console.log("App Component ngOnChanges Called");
  }
  ngDoCheck(){
    console.log("App Component ngDoCheck Called");
  }
  ngViewInit(){
    console.log("App Component ngViewInit Called");
  }
  ngContentInit(){
    console.log("App Component ngContentInit Called");
  }
  ngViewChecked(){
    console.log("App Component ngViewChecked Called");
  }
  ngContentChecked(){
    console.log("App Component ngContentChecked Called");
  }
  ngOnDestroy(){
    console.log("App Component ngOnDestroy Called");
  }
}

