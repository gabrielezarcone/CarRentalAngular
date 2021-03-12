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
import {AuthGuardsService} from './Service/basic-services/AuthGuards/auth-guards.service';

const routes: Routes = [
  {
    path: 'homeAdmin',
    component: HomeAdminComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'homeCustomer',
    component: HomeCustomerComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'modifica/user/:id',
    component: ModificaUserComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'elimina/user/:id',
    component: EliminaUserComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'prenotazioni/user/:id',
    component: ListaPrenotazioniComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'auto',
    component: ParcoAutoComponent
  },
  {
    path: 'modifica/auto/:id',
    component: ModificaAutoComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'elimina/auto/:id',
    component: EliminaAutoComponent,
    canActivate: [AuthGuardsService]
  },
  {
    path: 'prenotazioni/auto/:id',
    component: ListaPrenotazioniAutoComponent,
    canActivate: [AuthGuardsService]
  },
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
