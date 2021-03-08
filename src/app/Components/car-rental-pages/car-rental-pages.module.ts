import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import {BasicComponentsModule} from '../../basic-components/basic-components.module';
import {ApiServicesModule} from '../../Service/api-services/api-services.module';
import { ModificaUserComponent } from './modifica-user/modifica-user.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [HomeAdminComponent, ModificaUserComponent],
  exports: [
    HomeAdminComponent,
    ModificaUserComponent
  ],
  imports: [
    CommonModule,
    ApiServicesModule,
    BasicComponentsModule,
    ReactiveFormsModule
  ]
})
export class CarRentalPagesModule { }
