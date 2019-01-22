import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, arry: any, tricker: boolean): any {
    if (tricker) {
      return arry.sort(function(a: any, b: any) {
        if ( a.name < b.name) { return -1; }
        if ( a.name > b.name) { return 1; }
        return 0;
    });
    } else {
      return value;
    }
  }

}
