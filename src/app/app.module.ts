import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {BasicComponentsModule} from './basic-components/basic-components.module';
import {ApiServicesModule} from './Service/api-services/api-services.module';
import {CarRentalPagesModule} from './Components/car-rental-pages/car-rental-pages.module';
import { AppRoutingModule } from './app-routing.module';
import {BasicServicesModule} from './Service/basic-services/basic-services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasicComponentsModule,
    ApiServicesModule,
    CarRentalPagesModule,
    AppRoutingModule,
    BasicServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
