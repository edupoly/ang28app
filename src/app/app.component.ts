import { Component } from '@angular/core';
import { FormArray, FormControl,FormGroup } from '@angular/forms'
@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  studentForm = new FormGroup(
    {
      firstname:new FormControl(),
      lastname:new FormControl(),
      mobilenumbers:new FormArray([new FormControl(),new FormControl(),new FormControl()])
    }
  )
  get mobilenumbers(){
    return this.studentForm.get('mobilenumbers') as FormArray
  }
  addAnotherMobileNumber(){
    this.mobilenumbers.push(new FormControl())
  }
  showStudent(){
    console.log(this.studentForm.value)
  }
}
