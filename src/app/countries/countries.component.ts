import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  countries:any;
  isLoading:boolean=true;
  constructor(public cs:CountriesService){}
  ngOnInit(){
    this.cs.getCountries()
    .subscribe({
      next:(data)=>{
        this.countries=data;
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        this.isLoading=false;
      }
    })
    
  }
  abc(ob:any){
    return {cd:JSON.stringify(ob)}
  }
}
