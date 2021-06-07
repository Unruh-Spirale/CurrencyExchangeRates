import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Table} from "../model/table";

@Injectable()
export class CurrencyGbpService{

  private gbpUrl = 'http://api.nbp.pl/api/exchangerates/rates/c/gbp/?format=json';
  private gbp90Url = 'http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/90/?format=json';

  constructor(private httpClient: HttpClient) {
  }

  getGbp(): Observable<Table>{
    return this.httpClient.get<Table>(this.gbpUrl);
  }

  getGbp90(): Observable<Table>{
    return this.httpClient.get<Table>(this.gbp90Url);
  }

}
