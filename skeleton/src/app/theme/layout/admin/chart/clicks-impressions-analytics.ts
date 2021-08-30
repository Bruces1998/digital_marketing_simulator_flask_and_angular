import { ChartsService } from '../../../../charts.service';

export class ClicksImpressionsAnalytics {
  public result :Array<number> = [];
  public chartData = {
      chart: {
        height: 250,
        type: 'radialBar',
      },
      dataLabels: {
        enabled: false,
      },
      series: this.chartService.clicksImpressions,
      colors: ['#00acf0', '#7fc8f6'],
      labels: ['clicks','impressions'],
      legend: {
        show: true,
        position: 'right',
      }
    };

  constructor(private chartService: ChartsService){
    // this.result=this.chartService.clicksImpressions;
  }

}