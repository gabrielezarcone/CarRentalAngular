import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'paginationPipe'
})
export class PaginationPipePipe implements PipeTransform {

  transform(data: any[], itemPerPage: number, currentPage: number ): any[] {
    const splitData = _.chunk(data, itemPerPage);
    return splitData[currentPage];
  }

}
