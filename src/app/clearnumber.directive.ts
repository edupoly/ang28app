import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClearnumber]'
})
export class ClearnumberDirective {

  constructor(public el:ElementRef) { 
    console.log(this.el.nativeElement.value)
  }

  @HostListener('keyup') onKeyup(){
    // this.el.nativeElement.style.color='green'
    var x = this.el.nativeElement.value;
    var p = /[0-9]/.test(x[x.length-1])
    if(p){
      this.el.nativeElement.value=x.slice(0,x.length-1)
    }
  }
}
