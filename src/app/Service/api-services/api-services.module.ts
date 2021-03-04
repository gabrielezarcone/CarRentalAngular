import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [],
  providers: [
    UsersService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ApiServicesModule { }
