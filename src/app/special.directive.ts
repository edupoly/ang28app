import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appSpecial]'
})
export class SpecialDirective {

  constructor(public el:ElementRef) { 
    setInterval(()=>{
      if(
        this.el.nativeElement.style.color==='red'
      ){
        this.el.nativeElement.style.color='blue'
      }
      else{
        this.el.nativeElement.style.color='red'
      }
    },1000)
  }

}
