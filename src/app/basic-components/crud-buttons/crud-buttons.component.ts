import {Component, Input, OnInit} from '@angular/core';
import {MyButtonConfig} from '../my-button/my-button.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-crud-buttons',
  templateUrl: './crud-buttons.component.html',
  styleUrls: ['./crud-buttons.component.scss']
})
export class CrudButtonsComponent implements OnInit {
  @Input() btns: MyButtonConfig[];
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
    this.btns = _.cloneDeep(this.btns);
  }
}
