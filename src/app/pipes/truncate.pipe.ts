import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number, elipses = '...'): string {
    let result = value || '';

    if (value) {
      const words = value.split(/\s+/);
      if (words.length > Math.abs(length)) {
        result = `${words.slice(0, length).join(' ')}${elipses}`;
      }
    }

    return result;
  }

}
