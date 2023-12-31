import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(public http:HttpClient) { }

  getCountries(){
    return this.http.get("https://restcountries.com/v3/all")
  }
}
