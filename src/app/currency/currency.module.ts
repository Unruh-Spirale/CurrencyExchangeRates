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
import {CurrencyResolveService} from "./currency-resolve.service";

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
  providers: [CurrencyResolveService]
})
export class CurrencyModule { }
