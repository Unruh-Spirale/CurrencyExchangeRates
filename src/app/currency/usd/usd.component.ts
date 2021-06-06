import { Component, OnInit } from '@angular/core';
import {Table} from "../model/table";

import * as Highcharts from 'highcharts';
import {CurrencyUsdService} from "../currency-usd.service";
import {ActivatedRoute} from "@angular/router";
import {Currency} from "../model/currency";


@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.css']
})
export class UsdComponent implements OnInit {

  usd: Table;
  usdMid: Table;
  midRates: Currency[];
  rateScope: number = 2;
  days: number = 30;
  usd90: number[];

  usdToPln: number;
  plnToUsd: number;

  constructor(
    private currencyUsdService: CurrencyUsdService,
    private route: ActivatedRoute
  ) { }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Average USD rate'
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
    this.getUsd();
    this.loadData();
    this.loadDataToCharts();
  }

  getUsd(): void{
    this.currencyUsdService.getUsd().subscribe((data) => {
      this.usd = data;
    })
  }

  loadData(): void{
    this.usdMid = this.route.snapshot.data['usdMid'];
    this.midRates = this.usdMid.rates;
    this.usd90 = this.midRates.map((x) => x.mid);
  }
  loadDataToCharts(): void{
    // this.chartOptions.title?.text:({text: 'Average currency rate for ' + this.days});
    // 'Average currency rate for ' + this.days
    // this.Highcharts.chart('highcharts',this.chartOptions).title.update({text: 'Average currency rate for ' + this.days});

    this.chartOptions.xAxis = [
      {
        categories: this.getDatesOfRate()
      }
    ]
    this.chartOptions.series = [
      {
        name: 'USD',
        data: this.getNumbersOfRates(),
        type: 'line'
       }
    ];
  }

  changeRateScope(scope: number): void{
    this.rateScope = scope;
    this.getNumbersOfRates();
    this.getDatesOfRate();
    this.loadDataToCharts();
    this.Highcharts.chart('highcharts',this.chartOptions).update(this.chartOptions);
    this.Highcharts.chart('highcharts',this.chartOptions).redraw();
  }


  getNumbersOfRates(): number[]{
    if(this.rateScope == 1){
      this.days = 60;
      return this.usd90.slice(this.usd90.length-61, this.usd90.length);
    }
    if(this.rateScope == 2){
      this.days = 90;
      return this.usd90;
    }
    this.days = 30;
    return this.usd90.slice(this.usd90.length-31,this.usd90.length);
  }


  getDatesOfRate(): string[]{
    if(this.rateScope == 1){
      return this.midRates.map(x => x.effectiveDate).slice(this.midRates.length-61, this.midRates.length);
    }
    if(this.rateScope == 2){
      return this.midRates.map(x => x.effectiveDate);
    }
    return this.midRates.map((x) => x.effectiveDate).slice(this.midRates.length-31, this.midRates.length);
  }

  convertUsdToPln(event: any){
    this.usdToPln = (event.target.value * this.usd.rates[0].ask);
  }

  convertPlnToUsd(event: any){
    this.plnToUsd = event.target.value / this.usd.rates[0].bid;
  }



}
