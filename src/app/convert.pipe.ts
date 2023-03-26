import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(!value){
      return ''
    }
    return value*1.609344
  }

}
