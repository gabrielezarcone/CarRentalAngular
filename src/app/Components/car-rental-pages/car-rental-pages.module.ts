import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import {BasicComponentsModule} from '../../basic-components/basic-components.module';
import {ApiServicesModule} from '../../Service/api-services/api-services.module';



@NgModule({
  declarations: [HomeAdminComponent],
  exports: [
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    ApiServicesModule,
    BasicComponentsModule
  ]
})
export class CarRentalPagesModule { }
