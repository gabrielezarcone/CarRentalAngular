import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './my-button/my-button.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [MyButtonComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MyButtonComponent,
    TableComponent
  ]
})
export class BasicComponentsModule { }
