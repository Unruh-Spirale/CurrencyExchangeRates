import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EurComponent } from './eur/eur.component';
import { UsdComponent } from './usd/usd.component';
import { ChfComponent } from './chf/chf.component';
import { GbpComponent } from './gbp/gbp.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    EurComponent,
    UsdComponent,
    ChfComponent,
    GbpComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CurrencyModule { }
