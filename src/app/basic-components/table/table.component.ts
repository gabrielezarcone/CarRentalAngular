import {Component, Input, OnInit} from '@angular/core';

export class TableConfig{
  headers: MyHeaders[];
  order: MyOrder;

  constructor(headers: MyHeaders[], order: MyOrder) {
    this.headers = headers;
    this.order = order;
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
  constructor(key: string, label: string) {
    this.key = key;
    this.label = label;
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

}
