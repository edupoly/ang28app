import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  ngAfterViewChecked(){
    console.log("child rendered"+this.v)
  }
  @Input() v=0;
}
