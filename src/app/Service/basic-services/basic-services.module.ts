import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './AuthService/auth.service';
import {TokenInterceptorService} from './HttpInterceptors/token-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthGuardsService} from './AuthGuards/auth-guards.service';



@NgModule({
  declarations: [],
  providers: [
    AuthService,
    AuthGuardsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  imports: [
    CommonModule
  ]
})
export class BasicServicesModule { }
