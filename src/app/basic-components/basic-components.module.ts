import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './my-button/my-button.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import { PaginationPipePipe } from './pagination-pipe.pipe';
import { CrudButtonsComponent } from './crud-buttons/crud-buttons.component';



@NgModule({
  declarations: [MyButtonComponent, TableComponent, PaginationPipePipe, CrudButtonsComponent],
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
