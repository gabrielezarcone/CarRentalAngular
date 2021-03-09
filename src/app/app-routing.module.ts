import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeAdminComponent} from './Components/car-rental-pages/home-admin/home-admin.component';
import {ModificaUserComponent} from './Components/car-rental-pages/modifica-user/modifica-user.component';
import {EliminaUserComponent} from './Components/car-rental-pages/elimina-user/elimina-user.component';
import {ListaPrenotazioniComponent} from './Components/car-rental-pages/lista-prenotazioni/lista-prenotazioni.component';

const routes: Routes = [
  {path: 'homeAdmin', component: HomeAdminComponent},
  {path: 'modifica/user/:id', component: ModificaUserComponent},
  {path: 'elimina/user/:id', component: EliminaUserComponent},
  {path: 'prenotazioni/user/:id', component: ListaPrenotazioniComponent}
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
