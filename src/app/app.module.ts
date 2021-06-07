import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CurrencyRoutingModule} from "./currency/currency-routing.module";
import {CurrencyModule} from "./currency/currency.module";
import {CurrencyService} from "./currency/currency.service";
import {HttpClientModule} from "@angular/common/http";
import {CurrencyUsdService} from "./currency/currency-usd.service";
import {CurrencyChfService} from "./currency/services-currency-rates/currency-chf.service";
import {CurrencyGbpService} from "./currency/services-currency-rates/currency-gbp.service";

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
  providers: [CurrencyService, CurrencyUsdService, CurrencyChfService, CurrencyGbpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
