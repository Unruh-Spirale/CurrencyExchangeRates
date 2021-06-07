import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import {Table} from "../model/table";
import {CurrencyChfService} from "../services-currency-rates/currency-chf.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CurrencyResolveChfService implements Resolve<Table>{

  constructor(private currencyChfService: CurrencyChfService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Table> | Promise<Table> | Table {
    return this.currencyChfService.getChf90();
  }
}
