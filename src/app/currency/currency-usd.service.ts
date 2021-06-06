import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Table} from "./model/table";
import {Injectable} from "@angular/core";

@Injectable()
export class CurrencyUsdService{

  private usdUrl = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json';
  private usd30Url = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/last/30/?format=json';
  private usd60Url = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/last/60/?format=json';
  private usd90Url = 'http://api.nbp.pl/api/exchangerates/rates/a/usd/last/90/?format=json';

  constructor(private httpClient: HttpClient) {
  }

  public getUsd(): Observable<Table>{
    return this.httpClient.get<Table>(this.usdUrl);
  }
  // public getUsd30(id: string): Observable<Table>{
  //   return this.httpClient.get<Table>(this.usd30Url);
  // }
  public getUsd30(): Observable<Table>{
    return this.httpClient.get<Table>(this.usd30Url);
  }
  public getUsd60(): Observable<Table>{
    return this.httpClient.get<Table>(this.usd60Url);
  }
  public getUsd90(): Observable<Table>{
    return this.httpClient.get<Table>(this.usd90Url);
  }


}
