import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './AuthService/auth.service';
import {TokenInterceptorService} from './HttpInterceptors/token-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';



@NgModule({
  declarations: [],
  providers: [
    AuthService,
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
