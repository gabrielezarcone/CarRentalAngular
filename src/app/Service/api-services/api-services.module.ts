import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';
import {AutoService} from './auto.service';
import {PrenotazioneService} from './prenotazione.service';



@NgModule({
  declarations: [],
  providers: [
    UsersService,
    AutoService,
    PrenotazioneService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ApiServicesModule { }
