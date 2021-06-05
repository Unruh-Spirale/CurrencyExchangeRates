import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nbp} from "./model/nbp";
import {Rate} from "./model/rate";
import {Table} from "./model/table";


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private nbpUrl = 'http://api.nbp.pl/api/exchangerates/tables/c/?format=json';
  private eurUrl = 'http://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json';
  private usdUrl = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/?format=json';
  private chfUrl = 'http://api.nbp.pl/api/exchangerates/rates/c/chf/?format=json';
  private gbpUrl = 'http://api.nbp.pl/api/exchangerates/rates/c/gbp/?format=json';

  constructor(private httpClient: HttpClient) { }

  public getNbp(): Observable<Nbp[]>{
    return this.httpClient.get<Nbp[]>(this.nbpUrl);
  }
  public getEur(): Observable<Table>{
    return this.httpClient.get<Table>(this.eurUrl);
  }
  public getUsd(): Observable<Table>{
    return this.httpClient.get<Table>(this.usdUrl);
  }
  public getChf(): Observable<Table>{
    return this.httpClient.get<Table>(this.chfUrl);
  }
  public getGbp(): Observable<Table>{
    return this.httpClient.get<Table>(this.gbpUrl);
  }

}
