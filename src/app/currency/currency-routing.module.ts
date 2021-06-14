import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {EurComponent} from "./eur/eur.component";
import {UsdComponent} from "./usd/usd.component";
import {ChfComponent} from "./chf/chf.component";
import {GbpComponent} from "./gbp/gbp.component";
import {CurrencyResolveUsdService} from "./resolve-services/currency-resolve-usd.service";
import {CurrencyResolveChfService} from "./resolve-services/currency-resolve-chf.service";
import {CurrencyResolveGbpService} from "./resolve-services/currency-resolve-gbp.service";
import {CurrencyResolveEurService} from "./resolve-services/currency-resolve-eur.service";

const CURRENCY_ROUTES: Route[] = [
  {
    path: 'eur', component: EurComponent, resolve: {eurMid: CurrencyResolveEurService}
  },
  {
    path: 'usd', component: UsdComponent, resolve: { usdMid: CurrencyResolveUsdService}
  },
  {
    path: 'chf', component: ChfComponent, resolve: {chfMid: CurrencyResolveChfService}
  },
  {
    path: 'gbp', component: GbpComponent, resolve: {gbpMid: CurrencyResolveGbpService}
  }
]

@NgModule({
  imports: [RouterModule.forChild(CURRENCY_ROUTES)],
  exports: [RouterModule],
})

export class CurrencyRoutingModule { }
