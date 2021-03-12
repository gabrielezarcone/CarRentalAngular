import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './AuthService/auth.service';
import {TokenInterceptorService} from './HttpInterceptors/token-interceptor.service';



@NgModule({
  declarations: [],
  providers: [
    AuthService,
    TokenInterceptorService
  ],
  imports: [
    CommonModule
  ]
})
export class BasicServicesModule { }
