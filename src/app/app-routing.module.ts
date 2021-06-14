import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {DashboardComponent} from "./currency/dashboard/dashboard.component";
import {CurrencyResolveEurService} from "./currency/resolve-services/currency-resolve-eur.service";
import {CurrencyResolveService} from "./currency/resolve-services/currency-resolve.service";
import {CurrencyResolveChfService} from "./currency/resolve-services/currency-resolve-chf.service";
import {CurrencyResolveGbpService} from "./currency/resolve-services/currency-resolve-gbp.service";

const APP_ROUTES: Route[] = [
  {
    path: '', pathMatch: 'full', redirectTo: 'dashboard'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve:
      {
        eurMid: CurrencyResolveEurService,
        usdMid: CurrencyResolveService,
        chfMid: CurrencyResolveChfService,
        gbpMid: CurrencyResolveGbpService
      }

  }
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
