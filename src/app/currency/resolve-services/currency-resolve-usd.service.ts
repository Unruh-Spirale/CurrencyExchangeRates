import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Table} from "../model/table";
import {CurrencyUsdService} from "../services-currency-rates/currency-usd.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class CurrencyResolveUsdService implements Resolve<Table>{

  constructor(private currencyUsdService: CurrencyUsdService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Table> | Promise<Table> | Table {
    // return this.currencyUsdService.getUsd30(route.params['usd']);
    return this.currencyUsdService.getUsd90();
  }
}
