import {Component, Input, OnInit} from '@angular/core';

export class TableConfig{
  headers: MyHeaders[];
}

export class MyHeaders{
  key: string;
  label: string;
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
