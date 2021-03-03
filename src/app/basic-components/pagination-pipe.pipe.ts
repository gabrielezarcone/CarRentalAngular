import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationPipe'
})
export class PaginationPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
