import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input() x:any;

  constructor(){
    console.log("Footer Component Constructor Called")
  }//called only at the time of mounting
  ngOnInit(){
    console.log("Footer Component ngOnInit Called");
  }//called only at the time of mounting

  
  ngOnChanges(){
    console.log("Footer Component ngOnChanges Called");
  }
  ngDoCheck(){
    console.log("Footer Component ngDoCheck Called");
  }
  ngViewInit(){
    console.log("Footer Component ngViewInit Called");
  }
  ngContentInit(){
    console.log("Footer Component ngContentInit Called");
  }
  ngViewChecked(){
    console.log("Footer Component ngViewChecked Called");
  }
  ngContentChecked(){
    console.log("Footer Component ngContentChecked Called");
  }
  ngOnDestroy(){
    console.log("Footer Component ngOnDestroy Called");
  }
}
