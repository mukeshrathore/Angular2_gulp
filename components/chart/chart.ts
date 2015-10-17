/// <reference path="../../typings/tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {Http, HTTP_BINDINGS} from 'angular2/http';

@Component({
  selector: 'chart',
  properties: ['url','height','width','type'],
  viewBindings: [HTTP_BINDINGS]
})
@View({
  templateUrl : 'components/chart/chart.html'
})

export class Chart {
    url;height;width;type;
    constructor(private _http: Http){
        
    }

    Chart_show(){
                this._http.get(this.url).toRx().map((r) => r.json()).subscribe((r) => 
                    {
                      var result = r;
                      console.log(result);
                      
        // chart code starts here....               
                    var ageGroupChart = new FusionCharts({
                            type: this.type,
                            renderAt: 'chart-container',
                            width: this.width,
                            height: this.height,
                            dataFormat: 'json',
                            dataSource: {
                                "chart": {
                                    "caption": "Data on Pie Chart",
                                    "subCaption": "Last year",
                                    "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                                    "bgColor": "#ffffff",
                                    "showBorder": "0",
                                    "use3DLighting": "0",
                                    "showShadow": "0",
                                    "enableSmartLabels": "0",
                                    "startingAngle": "0",
                                    "showPercentValues": "1",
                                    "showPercentInTooltip": "0",
                                    "decimals": "1",
                                    "captionFontSize": "14",
                                    "subcaptionFontSize": "14",
                                    "subcaptionFontBold": "0",
                                    "toolTipColor": "#ffffff",
                                    "toolTipBorderThickness": "0",
                                    "toolTipBgColor": "#000000",
                                    "toolTipBgAlpha": "80",
                                    "toolTipBorderRadius": "2",
                                    "toolTipPadding": "5",
                                    "showHoverEffect":"1",
                                    "showLegend": "1",
                                    "legendBgColor": "#ffffff",
                                    "legendBorderAlpha": '0',
                                    "legendShadow": '0',
                                    "legendItemFontSize": '10',
                                    "legendItemFontColor": '#666666'
                                },
                                "data": result
                            }
                        }).render();
                       
        // chart code ends here.... 
                    });
    }
}