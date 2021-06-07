import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Table} from "./model/table";
import {Injectable} from "@angular/core";

@Injectable()
export class CurrencyUsdService{

  private usdUrl = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json';
  private usd90Url = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/last/90/?format=json';

  constructor(private httpClient: HttpClient) {
  }

  public getUsd(): Observable<Table>{
    return this.httpClient.get<Table>(this.usdUrl);
  }

  public getUsd90(): Observable<Table>{
    return this.httpClient.get<Table>(this.usd90Url);
  }


}
