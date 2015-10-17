/// <reference path="../../typings/tsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var Chart = (function () {
    function Chart(_http) {
        this._http = _http;
    }
    Chart.prototype.Chart_show = function () {
        var _this = this;
        this._http.get(this.url).toRx().map(function (r) { return r.json(); }).subscribe(function (r) {
            var result = r;
            console.log(result);
            var ageGroupChart = new FusionCharts({
                type: _this.type,
                renderAt: 'chart-container',
                width: _this.width,
                height: _this.height,
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
                        "showHoverEffect": "1",
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
        });
    };
    Chart = __decorate([
        angular2_1.Component({
            selector: 'chart',
            properties: ['url', 'height', 'width', 'type'],
            viewBindings: [http_1.HTTP_BINDINGS]
        }),
        angular2_1.View({
            templateUrl: 'components/chart/chart.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Chart);
    return Chart;
})();
exports.Chart = Chart;
//# sourceMappingURL=chart.js.map