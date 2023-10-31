import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'edupoly',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public fb:FormBuilder){}
  technologies=['nodejs','angular','react','express','mongodb'];
  temp:any[]=[];
  studentForm=this.fb.group({
    fullname:[],
    gender:[],
    techs:this.fb.array([])
  })
  ngOnInit(){
    this.technologies.forEach((t)=>{
      this.techs.push(this.fb.control(false))
    })
  }
  get techs(){
    return this.studentForm.get('techs') as FormArray
  }

  updateTechnolgies(e:any){
    this.temp.push(e.target.value);
    console.log(this.temp)
    // this.studentForm.controls.techs.patchValue(...this.temp)
  }
}

