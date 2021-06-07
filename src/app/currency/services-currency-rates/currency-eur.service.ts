import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Table} from "../model/table";

@Injectable()
export class CurrencyEurService{

  private eurUrl = 'http://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json';
  private eur90Url = 'http://api.nbp.pl/api/exchangerates/rates/a/eur/last/90/?format=json';

  constructor(private httpClient: HttpClient) {
  }

  getEur(): Observable<Table>{
    return this.httpClient.get<Table>(this.eurUrl);
  }

  getEur90(): Observable<Table>{
    return this.httpClient.get<Table>(this.eur90Url);
  }
}
