import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeAdminComponent} from './Components/car-rental-pages/home-admin/home-admin.component';
import {ModificaUserComponent} from './Components/car-rental-pages/modifica-user/modifica-user.component';
import {EliminaUserComponent} from './Components/car-rental-pages/elimina-user/elimina-user.component';
import {ListaPrenotazioniComponent} from './Components/car-rental-pages/lista-prenotazioni/lista-prenotazioni.component';
import {ParcoAutoComponent} from './Components/car-rental-pages/parco-auto/parco-auto.component';
import {ModificaAutoComponent} from './Components/car-rental-pages/modifica-auto/modifica-auto.component';
import {EliminaAutoComponent} from './Components/car-rental-pages/elimina-auto/elimina-auto.component';
import {ListaPrenotazioniAutoComponent} from './Components/car-rental-pages/lista-prenotazioni-auto/lista-prenotazioni-auto.component';
import {HomeCustomerComponent} from './Components/car-rental-pages/home-customer/home-customer.component';

const routes: Routes = [
  {path: 'homeAdmin', component: HomeAdminComponent},
  {path: 'homeCustomer', component: HomeCustomerComponent},
  {path: 'modifica/user/:id', component: ModificaUserComponent},
  {path: 'elimina/user/:id', component: EliminaUserComponent},
  {path: 'prenotazioni/user/:id', component: ListaPrenotazioniComponent},
  {path: 'auto', component: ParcoAutoComponent},
  {path: 'modifica/auto/:id', component: ModificaAutoComponent},
  {path: 'elimina/auto/:id', component: EliminaAutoComponent},
  {path: 'prenotazioni/auto/:id', component: ListaPrenotazioniAutoComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
