import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './my-button/my-button.component';
import { TableComponent } from './table/table.component';
import {FormsModule} from '@angular/forms';
import { PaginationPipePipe } from './pagination-pipe.pipe';
import { CrudButtonsComponent } from './crud-buttons/crud-buttons.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AppRoutingModule} from '../app-routing.module';
import { FormModificaComponent } from './form-modifica/form-modifica.component';



@NgModule({
  declarations: [MyButtonComponent, TableComponent, PaginationPipePipe, CrudButtonsComponent, NavBarComponent, FormModificaComponent],
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
  exports: [
    MyButtonComponent,
    TableComponent,
    NavBarComponent
  ]
})
export class BasicComponentsModule { }
