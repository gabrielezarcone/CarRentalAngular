import {Component, Input, OnInit} from '@angular/core';

export class TableConfig{
  headers: MyHeaders[];
  order: MyOrder;

  constructor(headers: MyHeaders[], order: MyOrder) {
    this.headers = headers;
    this.order = order;
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
  constructor(key: string, label: string) {
    this.key = key;
    this.label = label;
  }
  setIcon(icon: string): void{
    this.icon = icon;
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
    console.log('helloooo');
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
}
