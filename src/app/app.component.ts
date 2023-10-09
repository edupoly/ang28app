import { Component } from '@angular/core';

@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x = 100;
  gender:any=null;
  maleImg="https://media.istockphoto.com/id/155227534/photo/male-symbol.jpg?s=612x612&w=is&k=20&c=_58-td0uiciYnv4F0PcPR8fGZYnvP3NT0qncBRzIctc=";
  femaleImg="https://media.istockphoto.com/id/1300219145/vector/unisex-washroom-accessibility-icon.jpg?s=1024x1024&w=is&k=20&c=10-WHQ3mY93JQWpdz2Z6jAq1zpVI1OXJSb9t056QEtI=";
  othersImg='';
  allTechnologies=["nodejs",'reactjs','mongodb','expressjs','angular','vuejs']
  selectedTechnologies:any=[];
  updateTechnologies(e:any){
    if(e.target.checked){
      this.selectedTechnologies.push(e.target.value)
    }
    else{
      this.selectedTechnologies=this.selectedTechnologies.filter((tech:any)=>{
        if(tech===e.target.value){
          return false
        }
        else{
          return true;
        }
      })
    }
  }
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
//ngModel
//two types of directives
//1. behavioural directives
//2. structurual directives
//3. custome directives
//4. component directives