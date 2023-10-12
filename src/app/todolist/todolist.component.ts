import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  tasks=[
    {
      title:"clear bills",
      status:false
    },
    {
      title:"lic office",
      status:false
    },
    {
      title:"make payments",
      status:true
    },
    {
      title:"get Bmw",
      status:false
    }
  ];
  selectedFilter:string='';
  filteredTasks=[...this.tasks];

  newtask:any;
  applyFilter(){
    if(this.selectedFilter==='all'){
      this.filteredTasks=this.tasks
    }
    if(this.selectedFilter ==='completed'){
      this.filteredTasks=this.tasks.filter((task)=>{return task.status})
    }
    if(this.selectedFilter==='pending'){
      this.filteredTasks=this.tasks.filter((task)=>{return !task.status})
    }
  }
  addTask(){
    this.tasks.push(this.newtask)
    this.newtask=''
  }
  deleteTask(ind:number){
    this.tasks.splice(ind,1)
  }
  doneTask(id:number){
    this.tasks[id].status=true;
  }
  undoTask(id:number){
    this.tasks[id].status=false
  }
}
