import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-countrydetails',
  templateUrl: './countrydetails.component.html',
  styleUrls: ['./countrydetails.component.css']
})
export class CountrydetailsComponent {
  constructor(public ar:ActivatedRoute){}
  cname:any;
  countryDetails:any;
  ngOnInit(){
    // this.ar.params.subscribe((p)=>{
    //   alert(JSON.stringify(p))
    // })
    this.ar.queryParams.subscribe((qp)=>{

      this.countryDetails=JSON.parse(qp['cd']);
      
    })

  }
}
