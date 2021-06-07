import { Component, OnInit } from '@angular/core';
import {CurrencyEurService} from "../services-currency-rates/currency-eur.service";
import {ActivatedRoute} from "@angular/router";
import {Table} from "../model/table";
import {Currency} from "../model/currency";

import * as Highcharts from 'highcharts';



@Component({
  selector: 'app-eur',
  templateUrl: './eur.component.html',
  styleUrls: ['./eur.component.css']
})
export class EurComponent implements OnInit {

  eur: Table;
  eurMid: Table;
  midRates: Currency[];
  rateScope: number = 0;
  eur90: number[];

  eurToPln: number;
  plnToEur: number;

  constructor(
    private currencyEurService: CurrencyEurService,
    private route: ActivatedRoute
  ) { }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Average EUR rates'
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: 'rate'
      }
    },
    series: []
  }

  ngOnInit(): void {
    this.getEur();
    this.loadData();
    this.loadDataToCharts();
  }

  getEur(): void{
    this.currencyEurService.getEur().subscribe((data) => {
      this.eur = data;
    })
  }

  loadData(): void{
    this.eurMid = this.route.snapshot.data['eurMid'];
    this.midRates = this.eurMid.rates;
    this.eur90 = this.midRates.map(x => x.mid);
  }

  loadDataToCharts(): void{
    this.chartOptions.xAxis = [
      {
        categories: this.getDatesOfRates()
      }
    ];
    this.chartOptions.series = [
      {
        name: 'EUR',
        data: this.getNumbersOfRates(),
        type: 'line',
        color: 'gold'
      }
    ]
  }

  changeRateScope(scope: number): void{
    this.rateScope = scope;
    this.getNumbersOfRates();
    this.getDatesOfRates();
    this.loadDataToCharts();
    this.Highcharts.chart('highcharts',this.chartOptions).redraw();
  }

  getNumbersOfRates(): number[]{
    if(this.rateScope == 1){
      return this.eur90.slice(this.eur90.length-61,this.eur90.length);
    }
    if(this.rateScope == 2){
      return this.eur90;
    }
    return this.eur90.slice(this.eur90.length-31, this.eur90.length);
  }

  getDatesOfRates(): string[]{
    if(this.rateScope == 1){
      return this.midRates.map(x => x.effectiveDate).slice(this.midRates.length-61, this.midRates.length);
    }
    if(this.rateScope == 2){
      return this.midRates.map(x => x.effectiveDate);
    }
    return this.midRates.map(x => x.effectiveDate).slice(this.midRates.length-31,this.midRates.length);
  }

  convertEurToPln(event: any){
    this.eurToPln = event.target.value * this.eur.rates[0].bid;
  }

  convertPlnToEur(event: any){
    this.plnToEur = event.target.value / this.eur.rates[0].ask;
  }

}
