import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './my-button/my-button.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import { PaginationPipePipe } from './pagination-pipe.pipe';



@NgModule({
  declarations: [MyButtonComponent, TableComponent, PaginationPipePipe],
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
