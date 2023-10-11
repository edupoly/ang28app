import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(){
    console.log("counter component constructor");
  }
  ngOnInit(){
    console.log("counter component ngOnInit");
  }
  ngOnChanges(){
    console.log("counter component ngOnChanges");
  }
  ngAfterViewInit(){
    console.log("counter component ngViewInit");
  }
  ngAfterViewChecked(){
    console.log("counter component ngViewChecked");
  }
  ngAfterContentInit(){
    console.log("counter component ngContentInit");
  }
  ngAfterContentChecked(){
    console.log("counter component ngContentChecked");
  }
  @Input() count:number=0;
  @Input() step:number=1;
  inc(){
    this.count=this.count+this.step;
  }
  dec(){
    this.count=this.count-this.step;
  }
}
