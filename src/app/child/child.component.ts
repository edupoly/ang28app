import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() fn:any;
  @Output() pfn = new EventEmitter();
  x:any;
  xyz(){
    this.pfn.emit(this.x);
  }
}
