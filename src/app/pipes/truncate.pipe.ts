import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number, elipses = '...'): string {

    if (length === null) {
      return value;
    }

    if (length === 0) {
      return '';
    }

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
