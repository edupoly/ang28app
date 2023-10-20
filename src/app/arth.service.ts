import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }

  add(a:any,b:any){
    return a+b;
  }

  sub(a:any,b:any,cb:any){
    var res = a-b;
    cb(res)
  }

  div(a:any,b:any){
    if(b===0){
      return Promise.reject("Denominator cannot be zero")
    }
    return Promise.resolve(a/b)
  }

}
