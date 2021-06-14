import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import {Table} from "../model/table";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'DASHBOARD';

  eurMid: Table;
  usdMid: Table;
  chfMid: Table;
  gbpMid: Table;

  eur90: number[];
  usd90: number[];
  chf90: number[];
  gbp90: number[];

  constructor(private route: ActivatedRoute) { }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Average currencies rates from 90 days'
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title:{
        text: 'rate'
      }
    },
    series: []
  }


  ngOnInit(): void {
    this.loadData();
    this.loadDataToCharts();
  }

  loadData(): void {
    this.eurMid = this.route.snapshot.data['eurMid'];
    this.usdMid = this.route.snapshot.data['usdMid'];
    this.chfMid = this.route.snapshot.data['chfMid'];
    this.gbpMid = this.route.snapshot.data['gbpMid'];

    this.eur90 = this.eurMid.rates.map(x => x.mid);
    this.usd90 = this.usdMid.rates.map(x => x.mid);
    this.chf90 = this.chfMid.rates.map(x => x.mid);
    this.gbp90 = this.gbpMid.rates.map(x => x.mid);
  }

  loadDataToCharts(): void{
    this.chartOptions.xAxis = [
      {
        categories: this.eurMid.rates.map(x => x.effectiveDate)
      }
    ]
    this.chartOptions.series = [
      {
        name: 'EUR',
        data: this.eur90,
        type: 'line',
        color: 'gold'
      },
      {
        name: 'USD',
        data: this.usd90,
        type: 'line',
        color: 'green'
      },
      {
        name: 'CHF',
        data: this.chf90,
        type: 'line',
        color: 'red'
      },
      {
        name: 'GBP',
        data: this.gbp90,
        type: 'line',
        color: 'blue'
      }
    ]
  }

}
