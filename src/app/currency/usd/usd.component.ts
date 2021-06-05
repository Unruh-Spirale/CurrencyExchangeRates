import { Component, OnInit } from '@angular/core';
import {Table} from "../model/table";

import * as Highcharts from 'highcharts';
import {CurrencyUsdService} from "../currency-usd.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.css']
})
export class UsdComponent implements OnInit {

  usd: Table;
  usdMid: Table;
  usd30: number[];
  usd60: number[];
  usd90: number[];

  constructor(
    private currencyUsdService: CurrencyUsdService
  ) { }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Currency rate'
    },
    xAxis: {
      title: {
        text: 'date'
      },
      tickInterval: 1
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
    this.getUsdMid();
    this.loadData();
    this.loadDataToCharts();
  }

  getUsd(): void{
    this.currencyUsdService.getUsd().subscribe((data) => {
      this.usd = data;
    })
  }
  getUsdMid(): void{
    this.currencyUsdService.getUsd30().subscribe((data) => {
      this.usdMid = data;
    });
  }

  loadData(): void{
    this.usd30 = this.usdMid.rates.map((x) => x.mid);
  }
  loadDataToCharts(): void{
    this.chartOptions.series = [
      {
        name: 'USD',
        data: this.usd30,
        type: 'line'
      }
    ];
  }

  usdBuy(amount: number): number{
    return amount * this.usd.rates[0].ask;
  }

  usdSell(amount: number): number{
    return amount * this.usd.rates[0].bid;
  }


}
