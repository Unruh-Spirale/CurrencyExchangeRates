import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../currency.service";
import {Nbp} from "../model/nbp";
import {Rate} from "../model/rate";
import {Table} from "../model/table";


@Component({
  selector: 'app-eur',
  templateUrl: './eur.component.html',
  styleUrls: ['./eur.component.css']
})
export class EurComponent implements OnInit {

  title = 'EUR';

  nbps: Nbp[];
  rates: Rate[];
  eur: Table;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getNbp();
    this.getRates();
    this.getEur();
  }

  getNbp(): void{
    this.currencyService.getNbp().subscribe((data) =>{
      this.nbps = data;
    });
  }

  getRates(): void{
    this.currencyService.getNbp().subscribe((data) => {
      this.rates = data[0].rates;
    });
  }

  getEur(): void{
    this.currencyService.getEur().subscribe((data) => {
      this.eur = data;
    })
  }




}
