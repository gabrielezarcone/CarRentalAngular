import {Component, Input, OnInit} from '@angular/core';

export class TableConfig{
  headers: MyHeaders[];
  constructor(headers: MyHeaders[]) {
    this.headers = headers;
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
