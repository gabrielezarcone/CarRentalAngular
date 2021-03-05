import {Component, Input, OnInit} from '@angular/core';
import {MyButtonConfig} from '../my-button/my-button.component';

@Component({
  selector: 'app-crud-buttons',
  templateUrl: './crud-buttons.component.html',
  styleUrls: ['./crud-buttons.component.scss']
})
export class CrudButtonsComponent implements OnInit {
  @Input() btns: MyButtonConfig[];

  constructor() { }

  ngOnInit(): void {
  }

}
