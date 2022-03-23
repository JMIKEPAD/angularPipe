import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    
    const firstChar = value[0];
    const upperFirst = firstChar.toUpperCase();
    const restChar = value.slice(1);
    return upperFirst + restChar;
  
  
  }
}

