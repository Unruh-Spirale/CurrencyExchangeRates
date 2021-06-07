import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EurComponent } from './eur/eur.component';
import { UsdComponent } from './usd/usd.component';
import { ChfComponent } from './chf/chf.component';
import { GbpComponent } from './gbp/gbp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CurrencyRoutingModule} from "./currency-routing.module";
import {SharedModule} from "../shared/shared.module";
import {HighchartsChartModule} from "highcharts-angular";
import {CurrencyResolveService} from "./resolve-services/currency-resolve.service";
import {CurrencyResolveChfService} from "./resolve-services/currency-resolve-chf.service";
import {CurrencyResolveGbpService} from "./resolve-services/currency-resolve-gbp.service";
import {CurrencyResolveEurService} from "./resolve-services/currency-resolve-eur.service";
// import {CurrencyResolveService} from "./resolve-services/currency-resolve.service";

@NgModule({
  declarations: [
    DashboardComponent,
    EurComponent,
    UsdComponent,
    ChfComponent,
    GbpComponent
  ],
    imports: [
        SharedModule,
        CommonModule,
        CurrencyRoutingModule,
        HighchartsChartModule,
    ],
  exports: [DashboardComponent],
  providers: [
    CurrencyResolveService,
    CurrencyResolveChfService,
    CurrencyResolveGbpService,
    CurrencyResolveEurService
  ]
})
export class CurrencyModule { }
