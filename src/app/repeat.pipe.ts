import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {
  transform(input: string, times: number): string {
    return input.repeat(times);
  }
}
