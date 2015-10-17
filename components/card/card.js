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
var chart_1 = require('components/chart/chart');
var cardNew_1 = require('cardNew');
var bday_card_1 = require('components/Bday_Card/bday_card');
var Card = (function () {
    function Card() {
        this.display = false;
    }
    Card.prototype.fun = function () {
    };
    Card.prototype.displayFun = function () {
        if (this.display == true) {
            this.display = false;
        }
        else
            this.display = true;
    };
    Card = __decorate([
        angular2_1.Component({
            selector: 'card',
            properties: ['category']
        }),
        angular2_1.View({
            templateUrl: 'components/card/card.html',
            styleUrls: ['components/card/card.css'],
            directives: [chart_1.Chart, cardNew_1.CardNew, bday_card_1.BCard, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Card);
    return Card;
})();
exports.Card = Card;
//# sourceMappingURL=card.js.map