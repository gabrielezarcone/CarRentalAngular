import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {BasicComponentsModule} from './basic-components/basic-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasicComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
