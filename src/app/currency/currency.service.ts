import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyExchangerate} from "./model/currency-exchangerate";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencyTableC = 'http://api.nbp.pl/api/exchangerates/rates/c/';
  private eur = this.currencyTableC + 'eur/?format=json';
  private usd = this.currencyTableC + 'usd/?format=json';
  private chf = this.currencyTableC + 'chf/?format=json';
  private gbp = this.currencyTableC + 'gbp/?format=json';

  constructor(private httpClient: HttpClient) { }

  getCurrencyEur(): Observable<CurrencyExchangerate>{
    return this.httpClient.get<CurrencyExchangerate>(this.eur);
  }

  getCurrencyUsd(): Observable<CurrencyExchangerate>{
    return this.httpClient.get<CurrencyExchangerate>(this.usd);
  }

  getCurrencyChf(): Observable<CurrencyExchangerate>{
    return this.httpClient.get<CurrencyExchangerate>(this.chf);
  }

  getCurrencyGbp(): Observable<CurrencyExchangerate>{
    return this.httpClient.get<CurrencyExchangerate>(this.gbp);
  }
}
