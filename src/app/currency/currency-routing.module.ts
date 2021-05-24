import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {EurComponent} from "./eur/eur.component";
import {UsdComponent} from "./usd/usd.component";
import {ChfComponent} from "./chf/chf.component";
import {GbpComponent} from "./gbp/gbp.component";

const CURRENCY_ROUTES: Route[] = [
  {
    path: 'eur', component: EurComponent
  },
  {
    path: 'usd', component: UsdComponent
  },
  {
    path: 'chf', component: ChfComponent
  },
  {
    path: 'gbp', component: GbpComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(CURRENCY_ROUTES)],
  exports: [RouterModule]
})

export class CurrencyRoutingModule { }
