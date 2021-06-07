import { Component, OnInit } from '@angular/core';
import {Table} from "../model/table";
import {Currency} from "../model/currency";
import {CurrencyChfService} from "../services-currency-rates/currency-chf.service";
import {ActivatedRoute} from "@angular/router";

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chf',
  templateUrl: './chf.component.html',
  styleUrls: ['./chf.component.css']
})
export class ChfComponent implements OnInit {

  chf: Table;
  chfMid: Table;
  midRates: Currency[];
  rateScope: number = 0;
  days: number = 30;
  chf90: number[];

  chfToPln: number;
  plnToChf: number;

  constructor(
    private currencyChfService: CurrencyChfService,
    private route: ActivatedRoute
  ) { }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Average CHF rates'
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
    this.getChf();
    this.loadData();
    this.loadDataToCharts();
  }

  getChf(): void{
    this.currencyChfService.getChf().subscribe((data) => {
      this.chf = data;
    });
  }

  loadData(): void{
    this.chfMid = this.route.snapshot.data['chfMid'];
    this.midRates = this.chfMid.rates;
    this.chf90 = this.midRates.map(x => x.mid);
  }

  loadDataToCharts(): void{
    this.chartOptions.xAxis = [
      {
        categories: this.getDatesOfRates()
      }
    ]
    this.chartOptions.series = [
      {
        name: 'CHF',
        data: this.getNumbersOfRates(),
        type: 'line',
        color: 'red'
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
    if( this.rateScope == 1){
      this.days = 60;
      return this.chf90.slice(this.chf90.length-61,this.chf90.length);
    }
    if(this.rateScope == 2){
      this.days = 90;
      return this.chf90;
    }
    this.days = 30;
    return this.chf90.slice(this.chf90.length-31,this.chf90.length);
  }

  getDatesOfRates(): string[]{
    if(this.rateScope == 1){
      return this.midRates.map((x) => x.effectiveDate).slice(this.midRates.length-61, this.midRates.length);
    }
    if(this.rateScope == 2){
      return this.midRates.map((x) => x.effectiveDate);
    }
    return this.midRates.map((x) => x.effectiveDate).slice(this.midRates.length-31,this.midRates.length);
  }

  convertChfToPln(event :any){
    this.chfToPln = event.target.value * this.chf.rates[0].bid;
  }
  convertPlnToChf(event: any){
    this.plnToChf = event.target.value / this.chf.rates[0].ask;
  }

}
