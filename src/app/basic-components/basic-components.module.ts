import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './my-button/my-button.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [MyButtonComponent, TableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyButtonComponent,
    TableComponent
  ]
})
export class BasicComponentsModule { }
