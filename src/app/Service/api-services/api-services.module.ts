import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {AutoService} from './auto.service';
import {PrenotazioneService} from './prenotazione.service';
import {RuoloService} from './ruolo.service';
import {UserRuoliService} from './user-ruoli.service';



@NgModule({
  declarations: [],
  providers: [
    UsersService,
    AutoService,
    PrenotazioneService,
    RuoloService,
    UserRuoliService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ApiServicesModule { }
