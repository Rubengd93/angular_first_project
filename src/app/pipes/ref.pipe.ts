import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ref',
  standalone: true
})
export class RefPipe implements PipeTransform {

  transform(value: number): string {
    return  `Ref-${value}`;
  }

}
