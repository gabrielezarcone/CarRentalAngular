import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from './AuthService/auth.service';
import {TokenInterceptorService} from './HttpInterceptors/token-interceptor.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthGuardsService} from './AuthGuards/auth-guards.service';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {RoleGuardService} from './Guards/RoleGuard/role-guard.service';



@NgModule({
  declarations: [],
  providers: [
    AuthService,
    AuthGuardsService,
    RoleGuardService,
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        allowedDomains: ['localhost'],
        disallowedRoutes: [''],
      },
    }),
  ]
})
export class BasicServicesModule { }
