import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './AuthService/auth.service';



@NgModule({
  declarations: [],
  providers: [
    AuthService
  ],
  imports: [
    CommonModule
  ]
})
export class BasicServicesModule { }
