import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Table} from "../model/table";

@Injectable()
export class CurrencyChfService{

  private chfUrl = 'https://api.nbp.pl/api/exchangerates/rates/c/chf/?format=json';
  private chf90Url = 'https://api.nbp.pl/api/exchangerates/rates/a/chf/last/90/?format=json';

  constructor(private httpClient: HttpClient) {
  }

  public getChf(): Observable<Table>{
    return this.httpClient.get<Table>(this.chfUrl);
  }

  public getChf90(): Observable<Table>{
    return this.httpClient.get<Table>(this.chf90Url);
  }
}
