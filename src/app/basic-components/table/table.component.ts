import {Component, Input, OnInit} from '@angular/core';
import * as _ from 'lodash';

export class TableConfig{
  headers: MyHeaders[];
  order: MyOrder;
  search: MySearch;
  constructor(headers: MyHeaders[], order: MyOrder) {
    this.headers = headers;
    this.order = order;
    this.search = new MySearch();
  }
  resetIcons(): void{
    for (const header of this.headers){
      header.icon = '';
    }
  }
  setIcon(icon: string, key: string): void{
    for (const header of this.headers){
      if (header.key === key){
        header.setIcon(icon);
      }
    }
  }
  setSearchCss(cssClass: string, key: string): void{
    for (const header of this.headers){
      if (header.key === key){
        header.setSearchCss(cssClass);
      }
    }
  }
}


export class MySearch{
  columns: string[] = []; // specifica su quali colonne viene effettuata la ricerca
  setColumns(columns: string[]): void{
    this.columns = columns;
  }
}


export class MyOrder {
  defaultColumn: string;
  orderType: string;
  constructor(defaultColumn: string, orderType: string) {
    this.defaultColumn = defaultColumn;
    this.orderType = orderType;
  }
}


export class MyHeaders{
  key: string;
  label: string;
  icon: string;
  searchCss: string;
  constructor(key: string, label: string) {
    this.key = key;
    this.label = label;
  }
  setIcon(icon: string): void{
    this.icon = icon;
  }
  setSearchCss(cssClass: string): void{
    this.searchCss = cssClass;
  }
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() config: TableConfig;
  @Input() data: any[];

  constructor() { }

  ngOnInit(): void {
  }

  orderBy(key: string): void {
    this.toggleOrderType();
    this.config.resetIcons();
    this.data.sort((a, b) => {
      if (this.config.order.orderType === 'asc'){
        this.config.setIcon('🔺', key);
        return (a[key] > b[key]) ? 1 : -1;
      }
      else {
        this.config.setIcon('🔻', key);
        return (a[key] < b[key]) ? 1 : -1;
      }
    });
  }

  toggleOrderType(): void{
    this.config.order.orderType = this.config.order.orderType === 'desc' ? 'asc' : 'desc';
  }

  toggleFilter(key: string): void {
    const columns = this.config.search.columns;
    const filtroAcceso: number = _.findIndex(columns, (n) => n === key);
    if (filtroAcceso === -1){
      this.config.setSearchCss('filterTrue', key);
      this.config.search.columns = _.concat(columns, key);
    }
    else {
      this.config.setSearchCss('filterFalse', key);
      this.config.search.columns = _.filter(columns, (n) => n !== key);
    }
  }
}
