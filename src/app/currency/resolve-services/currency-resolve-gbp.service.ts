import {Injectable} from "@angular/core";
import {CurrencyGbpService} from "../services-currency-rates/currency-gbp.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Table} from "../model/table";
import {Observable} from "rxjs";

@Injectable()
export class CurrencyResolveGbpService implements Resolve<Table>{

  constructor(private currencyGbpService: CurrencyGbpService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Table> | Promise<Table> | Table {
    return this.currencyGbpService.getGbp90();
  }
}
