import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revert'
})
export class RevertPipe implements PipeTransform {

  transform(value: any, arry: any, tricker: boolean): any {
    if (tricker) {
      return arry.reverse();
    } else {
      return value;
    }
  }

}
