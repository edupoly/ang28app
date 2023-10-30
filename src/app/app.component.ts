import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl,FormGroup } from '@angular/forms'
@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public fb:FormBuilder){}
  studentForm:any;
  ngOnInit(){
    this.studentForm=this.fb.group({
      firstname:[],
      lastname:[],
      mobilenumbers:this.fb.array([[],[],[],[]])
    })
  }
  get mobilenumbers(){
    return this.studentForm.get('mobilenumbers') as FormArray
  }
  showStud(){
    console.log(this.studentForm.value)
  }
  addAnother(){
    this.mobilenumbers.push(this.fb.control(''))
  }
}
