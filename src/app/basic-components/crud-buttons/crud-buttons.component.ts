import { Component, OnInit } from '@angular/core';
import {MyButtonConfig} from '../my-button/my-button.component';

@Component({
  selector: 'app-crud-buttons',
  templateUrl: './crud-buttons.component.html',
  styleUrls: ['./crud-buttons.component.scss']
})
export class CrudButtonsComponent implements OnInit {
  btnModifica: MyButtonConfig = new MyButtonConfig('Modifica', 'btn-success', 'arrow-left-right');
  btnElimina: MyButtonConfig = new MyButtonConfig('Elimina', 'btn-danger' , 'x-octagon');

  constructor() { }

  ngOnInit(): void {
  }

}
