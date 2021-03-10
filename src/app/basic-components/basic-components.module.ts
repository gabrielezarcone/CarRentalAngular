import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './my-button/my-button.component';
import { TableComponent } from './table/table.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaginationPipePipe } from './pagination-pipe.pipe';
import { CrudButtonsComponent } from './crud-buttons/crud-buttons.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AppRoutingModule} from '../app-routing.module';
import { FormModificaComponent } from './form-modifica/form-modifica.component';
import { ModalConfermaComponent } from './modal-conferma/modal-conferma.component';



@NgModule({
  declarations: [MyButtonComponent, TableComponent, PaginationPipePipe, CrudButtonsComponent, NavBarComponent, FormModificaComponent, ModalConfermaComponent],
  imports: [
      CommonModule,
      FormsModule,
      AppRoutingModule,
      ReactiveFormsModule
  ],
  exports: [
    MyButtonComponent,
    TableComponent,
    NavBarComponent,
    FormModificaComponent,
    ModalConfermaComponent
  ]
})
export class BasicComponentsModule { }
