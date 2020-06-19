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
        if (length < 0) {
          length *= -1;
          result = `${elipses}${words.slice(words.length - length, words.length).join(' ')}`;
        } else {
          result = `${words.slice(0, length).join(' ')}${elipses}`;
        }
      }
    }

    return result;
  }

}
