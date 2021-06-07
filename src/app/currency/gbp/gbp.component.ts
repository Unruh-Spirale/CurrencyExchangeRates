import { Component, OnInit } from '@angular/core';
import {Table} from "../model/table";
import {Currency} from "../model/currency";
import {CurrencyGbpService} from "../services-currency-rates/currency-gbp.service";
import {ActivatedRoute} from "@angular/router";

import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-gbp',
  templateUrl: './gbp.component.html',
  styleUrls: ['./gbp.component.css']
})
export class GbpComponent implements OnInit {

   gbp: Table;
   gbpMid: Table;
   midRates: Currency[];
   rateScope: number = 0;
   gbp90: number[];

   gbpToPln: number;
   plnToGbp: number;

  constructor(
    private currencyGbpService: CurrencyGbpService,
    private route: ActivatedRoute
  ) { }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Average GBP rates'
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
    this.getGbp();
    this.loadData();
    this.loadDataToCharts();
  }

  getGbp(): void{
    this.currencyGbpService.getGbp().subscribe((data) => {
      this.gbp = data;
    });
  }

  loadData(): void{
    this.gbpMid = this.route.snapshot.data['gbpMid'];
    this.midRates = this.gbpMid.rates;
    this.gbp90 = this.midRates.map((x) => x.mid);
  }

  loadDataToCharts(): void{
    this.chartOptions.xAxis = [
      {
        categories: this.getDatesOfRates()
      }
    ];
    this.chartOptions.series = [
      {
        name: 'GBP',
        data: this.getNumersOfRates(),
        type: 'line'
      }
    ];
  }

  changeRateScope(scope: number): void{
    this.rateScope = scope;
    this.getNumersOfRates();
    this.getDatesOfRates();
    this.loadDataToCharts();
    this.Highcharts.chart('highcharts', this.chartOptions).redraw();
  }

  getNumersOfRates(): number[]{
    if(this.rateScope == 1){
      return this.gbp90.slice(this.gbp90.length-61, this.gbp90.length);
    }
    if(this.rateScope == 2){
      return this.gbp90;
    }
    return this.gbp90.slice(this.gbp90.length-31,this.gbp90.length);
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

  convertGbpToPln(event: any): void{
    this.gbpToPln = event.target.value * this.gbp.rates[0].bid;
  }

  convertPlnToGbp(event: any): void{
    this.plnToGbp = event.target.value / this.gbp.rates[0].ask;
  }

}
