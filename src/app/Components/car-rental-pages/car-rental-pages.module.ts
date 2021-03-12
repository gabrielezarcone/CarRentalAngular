import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import {BasicComponentsModule} from '../../basic-components/basic-components.module';
import {ApiServicesModule} from '../../Service/api-services/api-services.module';
import { ModificaUserComponent } from './modifica-user/modifica-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EliminaUserComponent } from './elimina-user/elimina-user.component';
import {AppRoutingModule} from '../../app-routing.module';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';
import { ParcoAutoComponent } from './parco-auto/parco-auto.component';
import { ModificaAutoComponent } from './modifica-auto/modifica-auto.component';
import { EliminaAutoComponent } from './elimina-auto/elimina-auto.component';
import { ListaPrenotazioniAutoComponent } from './lista-prenotazioni-auto/lista-prenotazioni-auto.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    HomeAdminComponent,
    ModificaUserComponent,
    EliminaUserComponent,
    ListaPrenotazioniComponent,
    ParcoAutoComponent,
    ModificaAutoComponent,
    EliminaAutoComponent,
    ListaPrenotazioniAutoComponent,
    HomeCustomerComponent,
    LoginComponent
  ],
  exports: [
    HomeAdminComponent,
    ModificaUserComponent
  ],
  imports: [
    CommonModule,
    ApiServicesModule,
    BasicComponentsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ]
})
export class CarRentalPagesModule { }
