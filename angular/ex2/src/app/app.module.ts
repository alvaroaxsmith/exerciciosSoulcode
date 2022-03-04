import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';


@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
