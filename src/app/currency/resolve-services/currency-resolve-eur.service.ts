import {Injectable} from "@angular/core";
import {CurrencyEurService} from "../services-currency-rates/currency-eur.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Table} from "../model/table";
import {Observable} from "rxjs";

@Injectable()
export class CurrencyResolveEurService implements Resolve<Table>{

  constructor(private currencyEurService: CurrencyEurService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Table> | Promise<Table> | Table {
    return this.currencyEurService.getEur90();
  }
}
