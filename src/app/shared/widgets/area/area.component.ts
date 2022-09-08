import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit, AfterViewChecked {

  chartOptions: any;

  Highcharts = Highcharts;

  constructor() { }



  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Total employees in our company'
      },
      subtitle: {
        text: 'Source: Guys from statistics department'
      },
      yAxis: {
        title: {
          useHTML: true,
          text: 'MNumber of Employees'
        }
      },
      tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },

      credits: {
        enabled: false,
      },
      plotOptions: {
        series: {
          pointStart: 2018
        },
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: [{
        name: 'Developers',
        data: [2, 5, 13, 10, 15]
      }, {
        name: 'Accountants',
        data: [1, 1, 2, 4, 3]

      }, {
        name: 'Salesmen',
        data: [3, 2, 5, 1, 4]
      }, {
        name: 'Nurses',
        data: [12, 11, 11, 11, 11]

      }, {
        name: 'Contractors',
        data: [7, 0, 0, 0, 3]
      }]
    };

  }

  ngAfterViewChecked(): void {

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 100);
  }

}
