import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/model/user';


@Pipe({
  name: 'sortGeneric'
})
export class SortGenericPipe implements PipeTransform {

  transform(value: any[], ...args: string[]): User[] {
    if (args.length > 0 && value.length > 0) {
      const propertyName = args[0];
      const firstUser = value[0];
    
      if (firstUser[propertyName]) {
        if (typeof firstUser[propertyName] === 'number') {
        return value.sort((a,b) => (a[propertyName] as number) -(b[propertyName] as number));
        } else {
          return value.sort((a,b) => (a[propertyName] as string) .localeCompare(b[propertyName] as string));
        } 
      } else {
        return value as User[];
      }
    
  }
  return value as User[]

  }
}