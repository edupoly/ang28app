import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log("sort pipe called")
    var temp = [...value]
    if(args[0]=='a'){
      return temp.sort();
    }
    if(args[0]=='d'){
      return temp.sort().reverse();
    }
  }
}
