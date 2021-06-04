import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CurrencyRoutingModule} from "./currency/currency-routing.module";
import {CurrencyModule} from "./currency/currency.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    RouterModule,
    AppRoutingModule,
    CurrencyRoutingModule,
    CurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
