import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import {MyPagination} from './table/table.component';

@Pipe({
  name: 'paginationPipe',
  pure: false
})
export class PaginationPipePipe implements PipeTransform {

  transform(data: any[], pagination: MyPagination): any[] {
    const splitData = _.chunk(data, pagination.itemPerPage);
    pagination.totalPageNumber = splitData.length;
    return splitData[pagination.currentPage];
  }

}
