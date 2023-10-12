import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
@Input() task:any;
@Input() i:any;
  @Output() delTask=new EventEmitter();
  @Output() doneTask=new EventEmitter();
  @Output() undoTask=new EventEmitter();

}
